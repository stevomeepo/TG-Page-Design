"use client";

import Image from 'next/image';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Image
              src="/TG-main.png"
              alt="Top Greener Logo"
              width={150}
              height={40}
              objectFit="contain"
            />
          </div>
          <div className="hidden md:flex items-center justify-center flex-grow">
            <div className="flex items-baseline space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Products</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>
          <div className="flex items-center">
            <div className="max-w-xs mr-4">
              <label htmlFor="search" className="sr-only">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="search"
                  name="search"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  placeholder="Search"
                  type="search"
                />
              </div>
            </div>
            <div className="flow-root">
              <a href="#" className="group -m-2 p-2 flex items-center">
                <FaShoppingCart className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500" />
                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
