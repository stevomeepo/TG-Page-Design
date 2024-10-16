"use client";

import { FaLightbulb, FaPlug, FaRecycle, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { MdSensors } from 'react-icons/md';
import ProductCard from '@/components/ProductCard';
import WallOutletIcon from '@/components/WallOutletIcon';
import { useState } from 'react';
import Banner from '@/components/Banner';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import DiscountProductCard from '@/components/DiscountProductCard';
import LightSwitchIcon from '@/components/LightSwitchIcon';
import UsbOutletIcon from '@/components/UsbOutletIcon';

const iconProducts = [
  { name: 'Smart Switch', icon: LightSwitchIcon },
  { name: 'USB Outlet', icon: UsbOutletIcon },
  { name: 'Motion Sensor', icon: MdSensors },
  { name: 'Dimmer', icon: FaLightbulb },
  { name: 'Wall Plate', icon: WallOutletIcon },
  { name: 'Recycling', icon: FaRecycle },
];

const products = [
  {
    name: "PIR Motion Sensor Switch",
    description: "TOPGREENER PIR Motion Sensor Light Switch, Occupancy & Vacancy Motion Sensor Switch, Operable Without Ground Wire, No Neutral Wire, Single Pole",
    price: "$21.99",
    image: "/TDOS5-HL-W.png"
  },
  {
    name: "Combination USB Type-C/A Wall Outlet",
    description: "TOPGREENER Combination USB Type-C/A Wall Outlet with 15A Duplex Tamper-Resistant Receptacles, USB Charger with 30W Power Delivery",
    price: "$19.99",
    image: "/TU215PD30AC-W.png",
    imageClass: "scale-75 hover:scale-[0.8]"
  },
  {
    name: "Duplex Receptacle",
    description: "ENERLITES Elite Series Duplex Receptacle, Self-Grounding - 10 pack",
    price: "$18.69",
    image: "/61580-TR-W-10PCS.jpg",
    imageClass: "scale-75 hover:scale-[0.8]"
  },
  {
    name: "Quadruple Decorator Switch Cover",
    description: "ENERLITES Quadruple Decorator Switch Cover, Four Gang Outlet Wall Plate, Mid-Size 4-Gang",
    price: "$6.99 - $8.49",
    image: "/8834M-W.jpg"
  }
];

const discountedProducts = [
  {
    name: "Smart Dimmer Switch",
    description: "TOPGREENER Smart Dimmer Switch, Wi-Fi Light Switch, Compatible with Alexa and Google Assistant",
    originalPrice: "$29.99",
    discountedPrice: "$24.99",
    discountPercentage: 17,
    image: "/dimmer.png"
  },
  {
    name: "Smart Switch",
    description: "TOPGREENER Smart Switch, Wi-Fi Light Switch, Works with Alexa and Google Home, No Hub Required",
    originalPrice: "$24.99",
    discountedPrice: "$19.99",
    discountPercentage: 20,
    image: "/smart-switch.png"
  },
  {
    name: "USB Outlet",
    description: "TOPGREENER USB Outlet, USB C Outlet, Fast Charging USB Wall Outlet, Type-C and Type-A",
    originalPrice: "$22.99",
    discountedPrice: "$18.99",
    discountPercentage: 17,
    image: "/usb-outlet.png"
  },
  {
    name: "Motion Sensor",
    description: "TOPGREENER Motion Sensor Light Switch, Occupancy Sensor Switch, Motion Activated Switch",
    originalPrice: "$19.99",
    discountedPrice: "$16.99",
    discountPercentage: 15,
    image: "/motion-sensor.png"
  },
  {
    name: "Wall Plate",
    description: "TOPGREENER Screwless Wall Plate, 1-Gang Decorator Wall Plate, Smooth Face Cover Plate",
    originalPrice: "$9.99",
    discountedPrice: "$7.99",
    discountPercentage: 20,
    image: "/wall-plate.jpg"
  },
  {
    name: "Energy Efficient Home Bundle",
    description: "TOPGREENER Energy Efficient Home Bundle, Includes Smart Switch, Dimmer, and USB Outlet",
    originalPrice: "$69.99",
    discountedPrice: "$59.99",
    discountPercentage: 14,
    image: "/energy-efficient-home.png"
  },
  {
    name: "Smart Home Starter Kit",
    description: "TOPGREENER Smart Home Starter Kit, Includes Smart Switch, Motion Sensor, and USB Outlet",
    originalPrice: "$79.99",
    discountedPrice: "$67.99",
    discountPercentage: 15,
    image: "/smart-home.png"
  }
];

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 4;
  const totalPages = Math.ceil(products.length / productsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleProducts = products.slice(
    currentPage * productsPerPage,
    (currentPage + 1) * productsPerPage
  );

  // Add these for DiscountProductCard pagination
  const [currentDiscountIndex, setCurrentDiscountIndex] = useState(0);
  const discountProductsPerPage = 4;

  const nextDiscountPage = () => {
    setCurrentDiscountIndex((prev) => (prev + 1) % discountedProducts.length);
  };

  const prevDiscountPage = () => {
    setCurrentDiscountIndex((prev) => (prev - 1 + discountedProducts.length) % discountedProducts.length);
  };

  const getVisibleDiscountProducts = () => {
    const products = [];
    for (let i = 0; i < discountProductsPerPage; i++) {
      const index = (currentDiscountIndex + i) % discountedProducts.length;
      products.push(discountedProducts[index]);
    }
    return products;
  };

  return (
    <main className="min-h-screen bg-white text-black">
      <HeroSection />
      <Header />
      <Banner />
      <div className="max-w-7xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-center">Newest Products</h2>
        <div className="relative">
          <div className="flex justify-between items-center absolute top-1/2 left-0 right-0 -mt-4 z-10">
            <button
              onClick={prevPage}
              className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors duration-300 -ml-2 sm:-ml-4"
            >
              <FaChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={nextPage}
              className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors duration-300 -mr-2 sm:-mr-4"
            >
              <FaChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-2 sm:px-8">
            {visibleProducts.map((product, index) => (
              <ProductCard
                key={index}
                name={product.name}
                description={product.description}
                price={product.price}
                image={product.image}
                imageClass={product.imageClass}
              />
            ))}
          </div>
        </div>
        <div className="mt-16 sm:mt-24">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-center">Special Offers</h2>
          <div className="relative px-4 sm:px-12">
            <div className="flex justify-between items-center absolute top-1/2 left-0 right-0 -mt-4 z-10">
              <button
                onClick={prevDiscountPage}
                className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors duration-300 -ml-2 sm:-ml-12"
              >
                <FaChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={nextDiscountPage}
                className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors duration-300 -mr-2 sm:-mr-12"
              >
                <FaChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
              </button>
            </div>
            <div className="overflow-hidden">
              <div className="flex flex-wrap sm:flex-nowrap">
                {getVisibleDiscountProducts().map((product, index) => (
                  <div key={index} className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4 sm:mb-0 flex-shrink-0">
                    <DiscountProductCard
                      name={product.name}
                      description={product.description}
                      originalPrice={product.originalPrice}
                      discountedPrice={product.discountedPrice}
                      discountPercentage={product.discountPercentage}
                      image={product.image}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 sm:mt-20">
          <h1 className="text-center text-3xl sm:text-5xl font-bold mb-4">
            Upgrade. Save. Sustain.
          </h1>
          <p className="text-center text-lg sm:text-xl mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
            With Top Greener, you can upgrade your home with energy-efficient solutions and save money. 
            Our products help reduce your energy consumption and lower your bills. 
            It's a great deal for you, your wallet, and the planet.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-8 mb-8 sm:mb-12 px-4">
            {iconProducts.map((product, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl mb-2 flex justify-center">
                  <product.icon className="w-8 h-8 sm:w-12 sm:h-12" />
                </div>
                <div className="text-xs sm:text-sm">{product.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
