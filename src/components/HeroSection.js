"use client";

import React from 'react';

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="pb-80 pt-10 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
              Upgrade Your Home with <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-green-500 to-green-400">Smart Solutions</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
              Discover our latest collection of energy-efficient and innovative products designed to make your home smarter, safer, and more sustainable.
            </p>
          </div>
          <div>
            <div className="mt-8 sm:mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
              >
                <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-full">
                  <div className="absolute inset-0 flex items-center justify-center lg:justify-end">
                    <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-4 sm:gap-y-6 lg:gap-y-8">
                        <div className="h-44 w-32 sm:h-64 sm:w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            alt="Smart Switch"
                            src="/smart-switch.png"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-44 w-32 sm:h-64 sm:w-44 overflow-hidden rounded-lg">
                          <img
                            alt="USB Outlet"
                            src="/usb-outlet.png"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-4 sm:gap-y-6 lg:gap-y-8">
                        <div className="h-44 w-32 sm:h-64 sm:w-44 overflow-hidden rounded-lg">
                          <img
                            alt="Motion Sensor"
                            src="/motion-sensor.png"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-44 w-32 sm:h-64 sm:w-44 overflow-hidden rounded-lg">
                          <img
                            alt="Dimmer"
                            src="/dimmer.png"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-44 w-32 sm:h-64 sm:w-44 overflow-hidden rounded-lg">
                          <img
                            alt="Wall Plate"
                            src="/wall-plate.jpg"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-4 sm:gap-y-6 lg:gap-y-8">
                        <div className="h-44 w-32 sm:h-64 sm:w-44 overflow-hidden rounded-lg">
                          <img
                            alt="Energy Efficient Home"
                            src="/energy-efficient-home.png"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-44 w-32 sm:h-64 sm:w-44 overflow-hidden rounded-lg">
                          <img
                            alt="Smart Home"
                            src="/smart-home.png"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="inline-block rounded-full bg-blue-600 px-6 sm:px-8 py-2 sm:py-3 text-center text-base sm:text-lg font-medium text-white hover:bg-blue-700 transition-colors duration-300 ease-in-out"
              >
                Shop Smart Solutions
              </a>
              <a
                href="#"
                className="inline-block ml-4 text-base sm:text-lg font-medium text-blue-600 hover:underline"
              >
                Learn more &gt;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}