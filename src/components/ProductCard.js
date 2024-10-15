import React from 'react';
import Image from 'next/image';

const ProductCard = ({ name, description, price, image, imageClass }) => {
  const isSmaller = imageClass?.includes('scale-75');

  return (
    <div className="bg-white rounded-2xl overflow-hidden flex flex-col h-full shadow-sm">
      <div className="relative w-full h-40 sm:h-48 flex-shrink-0">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="contain"
          className={`transition-transform duration-300 ${
            isSmaller ? 'hover:scale-105' : 'hover:scale-110'
          } ${imageClass || ''}`}
        />
      </div>
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 h-14 line-clamp-2">{name}</h3>
        <p className="text-gray-600 mb-4 text-xs sm:text-sm flex-grow line-clamp-3">{description}</p>
        <p className="text-base sm:text-lg font-bold text-gray-900 mb-4">{price}</p>
        <button className="w-full bg-blue-500 text-white rounded-full py-2 px-4 font-semibold text-sm transition-all duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
