"use client";
import React, { useState, useEffect } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg",
      title: "Karachi's Premier Properties",
    },
    {
      image:
        "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
      title: "Luxury Living Redefined",
    },
    {
      image:
        "https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg",
      title: "Commercial Excellence",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/90 via-[#111111]/70 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mt-12 mx-auto px-6 w-full">
          <div className="max-w-3xl">
            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Your Gateway to
              <span className="block bg-gradient-to-r from-[#d4af37] to-[#f4d03f] bg-clip-text text-transparent">
                Smarter Property
              </span>
              Decisions
            </h1>

            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Plots • Apartments • Bungalows • Commercial Spaces
            </p>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-[#d4af37] w-8" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
