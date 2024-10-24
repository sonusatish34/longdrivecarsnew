import Image from "next/image";
const Loading = () => {
  return <div className="text-center py-4">
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50 opacity-90">
      <div className="spinner-border animate-spin border-t-4 border-blue-500 border-solid rounded-full w-16 h-16">
        <Image
          className="lg:w-32 w-14"
          src="/logos/logo3.webp"
          alt="Long Drive Cars"
          width={500}
          height={500}
        // placeholder="blur"
        />
      </div>
    </div>
  </div>
};

export default Loading;