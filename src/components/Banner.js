import React from 'react';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      <div className="relative bg-white text-black overflow-hidden shadow-sm rounded-lg border border-gray-50">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 relative h-64 lg:h-auto">
            <Image
              src="/banner-design.png"
              alt="Banner background"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="lg:w-1/2 flex flex-col justify-center items-center text-center px-4 py-12 lg:py-24">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              New & On Sale.
            </h1>
            <p className="text-xl text-gray-600 max-w-md">
              Choose a switch. Pick an outlet. Configure your perfect setup.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;