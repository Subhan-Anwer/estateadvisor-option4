"use client";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Memoized slides to avoid re-creation on every render
  const slides = useMemo(
    () => [
      { image: "/hero1.jpg", title: "Karachi's Premier Properties" },
      { image: "/hero2.jpg", title: "Luxury Living Redefined" },
      { image: "/hero3.jpg", title: "Commercial Excellence" },
    ],
    []
  );

  // Change slide every 5s
  useEffect(() => {
    const timer = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % slides.length),
      4000
    );
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleIndicatorClicker = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);


  return (
    <section className="relative h-screen overflow-hidden">
      {/* Static First Image */}
      <div className="absolute inset-0">
        <Image
          src={slides[0].image}
          alt={slides[0].title}
          fill
          priority
          quality={100}
          sizes="(max-width: 768px) 1000px, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-[#111111]/40 to-transparent"></div>
      </div>

      {/* Animated Other Slides */}
      <div className="absolute inset-0">
        <AnimatePresence>
          {currentSlide !== 0 && (
                <motion.div
                  key={currentSlide}
                  className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
                >
                  <Image
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    fill
                    quality={100}
                    sizes="100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-[#111111]/40 to-transparent"></div>
                </motion.div>
              )
          }
        </AnimatePresence>
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
      <div className="absolute bottom-8 z-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleIndicatorClicker(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3.5 h-3.5 rounded-full transition-all duration-300  ${
              index === currentSlide ? "bg-[#d4af37] w-6" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
