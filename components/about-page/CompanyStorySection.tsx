"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export const CompanyStorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-[#0f0f0f]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/office.jpg"
                alt="Estate Advisors Luxury Office"
                className="w-full h-[500px] object-cover"
                width={1200}
                height={1200}
                quality={100}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/20 to-transparent"></div>
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-[#080808] border border-[#d4af37] p-6 rounded-xl shadow-luxury"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-[#d4af37]">30+</div>
                <div className="text-sm text-[#b1b1b1]">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl lg:text-5xl font-bold"
            >
              Our <span className="text-[#d4af37]">Legacy</span> of Excellence
            </motion.h2>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4 text-lg text-[#999999] leading-relaxed"
            >
              <p>
                Founded three decades ago with a vision to revolutionize real
                estate in Karachi, Estate Advisors has grown from a small family
                business into the city's most trusted property consultancy.
              </p>

              <p>
                Our journey began with a simple belief: every client deserves
                exceptional service, transparency, and expertise. Today, we've
                helped thousands of families find their dream homes and assisted
                investors in building substantial portfolios.
              </p>

              <p>
                What sets us apart is our deep understanding of Karachi's real
                estate landscape, combined with cutting-edge technology and a
                commitment to building lasting relationships with our clients.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 gap-6 pt-6"
            >
              <div className="text-center p-4 bg-[#080808] rounded-lg border border-[#d4af37]/30">
                <div className="text-2xl font-bold">5000+</div>
                <div className="text-sm text-[#b1b1b1]">Properties Sold</div>
              </div>
              <div className="text-center p-4 bg-[#080808] rounded-lg border border-[#d4af37]/30">
                <div className="text-2xl font-bold">10000+</div>
                <div className="text-sm text-[#b1b1b1]">Happy Clients</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
