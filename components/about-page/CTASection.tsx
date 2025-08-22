"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const message = encodeURIComponent(
    "Hi! I want to book a consultation. I'm here from about page!"
  );
  const whatsappUrl = `https://wa.me/+923233385541?text=${message}`;

  return (
    <section
      ref={ref}
      className="relative py-24 overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-black"
    >
      {/* Subtle background image with fade */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/prop1.jpg"
          alt="Luxury Property"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Golden radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          Find your{" "}
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            dream home
          </span>{" "}
          <span className="block">
            or{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              smart investment
            </span>
          </span>
        </motion.h2>

        {/* Tagline */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-zinc-300 max-w-2xl mx-auto mb-10"
        >
          With 30+ years of expertise, we help you secure properties that truly
          matter.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-14"
        >
          <Link
            href="/properties"
            className="px-6 py-3 rounded-md font-semibold bg-yellow-500 text-black hover:shadow-[0_0_20px_rgba(234,179,8,0.6)] transition"
          >
            Explore Properties
          </Link>
          <Link
            href={whatsappUrl}
            target="_blank"
            className="px-6 py-3 rounded-md font-semibold border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition"
          >
            Book Consultation
          </Link>
        </motion.div>

        {/* Contact Info (glassy cards) */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: Phone, title: "Call Us", value: "+92 323 3385541" },
            {
              icon: Mail,
              title: "Email Us",
              value: "sohailadvisor90@gmail.com",
            },
            {
              icon: FaWhatsapp,
              title: "WhatsApp",
              value: "+92 323 3385541",
            },
          ].map(({ icon: Icon, title, value }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.2 }}
              className="p-5 rounded-xl bg-black/40 backdrop-blur-md border border-yellow-500/20 text-center hover:border-yellow-500/50 transition"
            >
              <Icon className="w-6 h-6 text-yellow-500 mx-auto mb-3" />
              <div className="text-sm text-zinc-400">{title}</div>
              <div className="text-yellow-400 font-medium">{value}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
