"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
// import { Button } from "../ui/luxury-button";

export const HeroSection = () => {
  const message = encodeURIComponent(
    "Hi! I want to book a consultation. I'm here from about page!"
  );
  const whatsappUrl = `https://wa.me/+923233385541?text=${message}`;

  return (
    <section className="relative h-auto md:pt-20 mb:pb-0 pb-20 pt-40 md:min-h-screen flex items-center justify-center bg-gradient-dark overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/bungalow-2.png"
          alt="Background image"
          width={1300}
          height={700}
          quality={100}
          priority
          className="absolute inset-0 w-full md:h-[160%] h-full md:my-0 my-auto object-cover object-center z-0"
        />
      </div>
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* <Image
        src="/bungalow-1.png"
        alt="Background image"
        width={1300}
        height={700}
        quality={100}
        className="absolute w-full md:h-[160%] h-[90%] inset-0 object-cover object-center z-0"
        priority
      />
      <div className="absolute inset-0 bg-black/60 z-0" /> */}

      {/* Golden Glow Effects */}
      <div
        className="
      absolute rounded-full blur-3xl animate-pulse
      top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96
      bg-yellow-500/20
    "
      ></div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Main Heading */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          Trusted <span className="text-[#d4af37]">Real Estate</span> Expert
          <span className="block">
            in <span className="text-[#d4af37]">Karachi</span>
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/80 text-lg sm:text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed"
        >
          Serving You with{" "}
          <span className="text-white font-semibold">30+ Years</span> of
          Excellence
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row md:gap-4 gap-2 justify-center items-center"
        >
          <Link
            href="/properties"
            className="px-6 py-3 h-12 rounded-md font-semibold bg-yellow-500 text-black hover:shadow-[0_0_20px_rgba(234,179,8,0.6)] transition"
          >
            Explore Properties
          </Link>
          <Link
            href={whatsappUrl}
            target="_blank"
            className="px-6 py-2.5 h-12 rounded-md font-semibold bg-black/30 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition"
          >
            Book Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
