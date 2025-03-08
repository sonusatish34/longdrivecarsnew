import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
// Assuming you have a few icons, either as React components or image URLs
import { FaRegSmile, FaRegStar, FaRegHeart, FaRegComment, FaRegBell, FaLaptopCode } from 'react-icons/fa';

const CircularScrollEffect = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrollingEnabled, setIsScrollingEnabled] = useState(false); // Track scroll state
  const [radius, setRadius] = useState(50); // Set initial radius of the circular path (small circle)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // When the scroll position is greater than a threshold, stop scrolling the page
      if (scrollPosition < 2000) {
        setScrollY(scrollPosition);
        // Adjust the radius based on scroll position: make the circle larger as you scroll down
        const newRadius = Math.min(300, 90 + scrollPosition / 5); // Ensure radius doesn't go above 200
        setRadius(newRadius);
      } else {
        // Allow the normal scroll behavior once the radius reaches the maximum size
        setIsScrollingEnabled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // List of custom items with icons and text
  const items = [
    { text: 'High Quality Code Building', description: 'We deliver clean, efficient, and maintainable code through rigorous testing and best practices, ensuring your software is robust and scalable.', icon: <Image className='w-20 h-20' src='/whychoose/codequal.webp' width={1000} height={1000} />, color: '#493628' },
    { text: 'Agile approach', description: 'Our agile approach guarantees fast delivery, adaptability, and clear communication, ensuring high-quality software solutions that align with your goals.', icon: <Image className='w-20 h-20' src='/whychoose/codequal.webp' width={1000} height={1000} />, color: '#223163' },
    { text: 'Collaboration', description: 'We work closely with your team, ensuring seamless communication and shared goals for a successful project outcome.', icon: <Image className='w-20 h-20' src='/whychoose/collaboration.webp' width={1000} height={1000} />, color: '#9F8383' },
    { text: 'Flexibility', description: 'We adapt to your evolving needs, offering scalable solutions that grow with your business and allow for quick adjustments as requirements change.', icon: <Image className='w-20 h-20' src='/whychoose/codequal.webp' width={1000} height={1000} />, color: '#3A7D44' },
    { text: 'Expert Development Team', description: 'Our skilled team of developers excels in diverse technologies, ensuring every project is executed with precision and expertise.', icon: <Image className='w-20 h-20' src='/whychoose/codequal.webp' width={1000} height={1000} />, color: '#3E5879' },
  ];

  // Calculate angle based on scrollY (change scroll sensitivity as needed)
  const angle = (scrollY / 5) % 360; // Adjust 5 for scroll speed and change circular rotation rate

  // Calculate new positions based on scrollY (the angle)
  const itemPositions = items.map((item, index) => {
    const angleInRadians = ((angle + index * (360 / items.length)) % 360) * (Math.PI / 180); // Angle calculation based on scroll position
    const x = radius * Math.cos(angleInRadians); // X position
    const y = radius * Math.sin(angleInRadians); // Y position

    return {
      x: x,
      y: y,
      text: item.text,
      icon: item.icon,
      color: item.color,
      description: item.description,
    };
  });

  // Calculate scale based on scrollY (you can adjust the scaling factor)
  const scale = 1 + scrollY / 2000; // As scrollY increases, the scale increases

  return (
    <div className={`relative w-full h-[165vh] flex justify-center items-center bg-gray-100`}>
      {/* Zoom the "Why Choose Us" text based on scrollY */}
      <motion.div
        className="w-[50px] leading-normal text-blue-700 flex items-center justify-center text-5xl rounded-[2px] absolute z-20"
        style={{
          transformOrigin: 'center', // Ensure it scales from the center
        }}
        animate={{
          scale: scale, // Apply the scaling effect
        }}
        transition={{
          type: 'spring',
          stiffness: 160,
          damping: 20,
          duration: 0.1,
        }}
      >
        Why Choose Us
      </motion.div>

      {itemPositions.map((position, index) => (
        <motion.div
          key={index}
          className="w-[180px] h-[120px] lg:w-[280px] lg:h-[220px] text-white flex items-center justify-center text-[16px] rounded absolute transition-transform duration-100 ease-in"
          style={{
            position: 'absolute',
            backgroundColor: position.color, // Set background color directly
          }}
          animate={{
            x: position.x,
            y: position.y,
          }}
          transition={{
            type: 'spring',
            stiffness: 160,
            damping: 20,
            duration: 0.1,
            delay: 0.1,
          }}
        >
          <ul className="flex flex-col p-2 ">
            <li className="mb-2">{position.icon}</li> {/* Render the icon */}
            <li className='font-bold text-xl'>{position.text}</li> {/* Render the text */}
            <li className='text-sm pt-1 hidden lg:block'>{position.description}</li> {/* Render the description */}
          </ul>
        </motion.div>
      ))}

      {/* Prevent scrolling when items are moving */}
      {isScrollingEnabled && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-transparent z-10"></div>
      )}
    </div>
  );
};

export default CircularScrollEffect;