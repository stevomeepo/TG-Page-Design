"use client";

import React from 'react';
import Image from 'next/image';

const DiscountProductCard = ({ name, description, originalPrice, discountedPrice, discountPercentage, image, imageClass }) => {
  const isSmaller = imageClass?.includes('scale-75');

  return (
    <div className="bg-white rounded-2xl overflow-hidden flex flex-col h-full shadow-sm">
      <div className="relative w-full h-64 flex-shrink-0 bg-gray-100">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="contain"
          className={`transition-transform duration-300 ${
            isSmaller ? 'hover:scale-105' : 'hover:scale-110'
          } ${imageClass || ''}`}
        />
        {discountPercentage && (
          <div className="absolute top-2 left-2 bg-opacity-90 bg-gray-800 text-white text-xs font-medium px-2 py-1 rounded-md">
            {discountPercentage}% off
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-2 text-gray-900 h-14 line-clamp-2">{name}</h3>
        <p className="text-gray-600 mb-4 text-xs flex-grow line-clamp-3">{description}</p>
        <div className="flex flex-col items-start mb-4">
          <p className="text-xl font-bold text-blue-600">{discountedPrice}</p>
          <p className="text-xs text-gray-500 line-through">{originalPrice}</p>
        </div>
        <button className="w-full bg-blue-500 text-white rounded-full py-2 px-4 font-semibold text-sm transition-all duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Buy
        </button>
      </div>
    </div>
  );
};

export default DiscountProductCard;
