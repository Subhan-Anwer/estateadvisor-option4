"use client";

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative bg-[#0f0f0f] overflow-hidden">
      <div className="relative container mx-auto px-4 md:mt-36 mt-32">
        <div className="text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl sm:block flex flex-col items-center justify-center gap-2 font-bold mb-6 font-playfair">
              Discover Your{" "}
              <span className="text-5xl md:text-6xl lg:text-7xl  bg-gradient-to-r from-[#d4af37] to-[#f4d03f] bg-clip-text text-transparent relative">
                Dream Property
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] rounded"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.65, duration: 0.5 }}
                />
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed tracking-wider"
          >
            With Estate Advisor
          </motion.p>
        </div>
      </div>
    </section>
  );
}