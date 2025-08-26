"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const whatsappUrl = "https://wa.me/+923233385541";

export default function Hero() {
  useEffect(() => {
    const particlesContainer = document.getElementById("particles");
    if (!particlesContainer) return;

    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.animationDelay = Math.random() * 12 + "s";
      particle.style.animationDuration = Math.random() * 8 + 8 + "s";
      particlesContainer.appendChild(particle);
    }
  }, []);

  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_center,#1a1a1a_0%,#000000_70%)]">
      {/* Cosmic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,215,0,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(255,215,0,0.08)_0%,transparent_50%),radial-gradient(circle_at_40%_40%,rgba(255,215,0,0.05)_0%,transparent_50%)]"></div>

      {/* Particles */}
      <div
        id="particles"
        className="absolute z-20 w-full h-full pointer-events-none"
      ></div>

      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/contact-us-hero.jpg"
          alt="Background image"
          width={1300}
          height={700}
          quality={100}
          priority
          className="absolute inset-0 w-full h-full md:my-0 my-auto object-cover object-center z-0"
        />
      </div>
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Hero Content */}
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Main Heading */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[55px] md:text-6xl lg:text-7xl font-extrabold mb-6 sm:leading-20 leading-15"
        >
          Contact
          <span className="block text-[#d4af37]">Estate Advisor</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/80 mt-6 sm:mt-10 text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed"
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
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/properties"
            className="w-50 sm:w-36 px-6 py-3 h-12 rounded-md font-semibold bg-[#d4af37] text-black hover:shadow-[0_0_20px_rgba(234,179,8,0.6)] transition"
          >
            Call Us
          </Link>
          <Link
            href={whatsappUrl}
            target="_blank"
            className="w-50 sm:w-40 px-6 py-2.5 h-12 rounded-md font-semibold bg-black/30 border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black hover:shadow-[0_0_20px_rgba(234,179,8,0.6)] transition"
          >
            Message Us
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
