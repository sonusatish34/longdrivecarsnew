// components/Slider.js
import { useState } from 'react';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = ['Item 1', 'Item 2', 'Item 3'];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="relative w-80 overflow-hidden">
      <div className="flex transition-transform duration-500">
        {items.map((item, index) => {
          const position = (index - currentIndex + items.length) % items.length;
          return (
            <div
              key={index}
              className={`flex items-center justify-center h-48 w-full bg-blue-300 transition-all duration-500 ${
                position === 0 ? 'opacity-100 scale-110' : 'opacity-50'
              }`}
            >
              {item}
            </div>
          );
        })}
      </div>
      <button onClick={handlePrev} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-md shadow-md">
        Previous
      </button>
      <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-md shadow-md">
        Next
      </button>
    </div>
  );
};

export default Slider;
