import React from 'react';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl text-black shadow-lg">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/nice.png"
          alt="Banner background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-40"></div>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight text-black">
            New & On Sale
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-md">
            Choose a switch. Pick an outlet. Configure your perfect setup.
          </p>
          <a 
            href="#" 
            className="inline-block bg-black text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300"
          >
            Shop Now
          </a>
        </div>
        <div className="lg:w-1/2 relative h-80 sm:h-96 lg:h-[32rem] w-full overflow-hidden">
          <Image
            src="/banner-design.png"
            alt="Smart home devices"
            layout="fill"
            objectFit="cover"
            className="transform scale-110 lg:scale-125 lg:-translate-y-12 lg:translate-x-12"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
