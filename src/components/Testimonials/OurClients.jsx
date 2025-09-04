"use client";

import { useState } from "react";
import Image from "next/image";

const OurClients = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const clientLogos = [
    { name: "ICICI Bank", logo: "/images/brands/icici-bank.png" },
    { name: "HITACHI", logo: "/images/brands/hitachi.png" },
    { name: "PwC", logo: "/images/brands/pwc.png" },
    { name: "Canon", logo: "/images/brands/canon.png" },
    { name: "KPMG", logo: "/images/brands/kpmg.png" },
    { name: "Emirates NBD", logo: "/images/brands/emirates-nbd.png" },
    { name: "Deutsche Bank", logo: "/images/brands/deutsche-bank.png" },
    { name: "Atos", logo: "/images/brands/atos.png" },
    { name: "EY", logo: "/images/brands/ey.png" },
    { name: "AWR", logo: "/images/brands/awr.png" },
    { name: "BCG", logo: "/images/brands/bcg.png" },
    { name: "British Airways", logo: "/images/brands/british-airways.png" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(clientLogos.length / 8));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(clientLogos.length / 8)) % Math.ceil(clientLogos.length / 8));
  };

  const startIndex = currentSlide * 8;
  const endIndex = Math.min(startIndex + 8, clientLogos.length);
  const visibleLogos = clientLogos.slice(startIndex, endIndex);

  return (
    <section className="py-16 md:py-20 lg:py-28 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Text Content */}
          <div className="space-y-8">
            {/* Divider Line */}
            <div className="w-16 h-px bg-gray-400"></div>
            
            {/* Title */}
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                Our Happy
              </h2>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                Clients
              </h2>
            </div>
            
            {/* Description */}
            <p className="text-lg text-gray-300 max-w-md">
              They trust us and we keep giving them reasons to.
            </p>
            
            {/* Call to Action Button */}
            <button className="border border-white px-6 py-3 text-white hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2">
              View all Clients
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Right Section - Client Logos Grid */}
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Logo Grid */}
            <div className="grid grid-cols-4 gap-4">
              {visibleLogos.map((client, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 h-24 flex items-center justify-center hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-center">
                    <div className="text-xs font-semibold text-gray-800 mb-1">
                      {client.name}
                    </div>
                    <div className="w-8 h-8 mx-auto bg-gray-200 rounded flex items-center justify-center">
                      <span className="text-xs text-gray-600 font-bold">
                        {client.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: Math.ceil(clientLogos.length / 8) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    index === currentSlide ? 'bg-white' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
