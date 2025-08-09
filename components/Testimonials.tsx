"use client";
import React from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const TestimonialsSection = () => {

  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "Estate Advisor helped me find the perfect commercial space for my business. Their market knowledge and negotiation skills saved me both time and money. Highly recommended!",
    },
    {
      id: 2,
      rating: 5,
      text: "As a first-time buyer, I was overwhelmed by the process. The team at Estate Advisor guided me through every step and helped me secure my dream apartment in Clifton.",
    },
    {
      id: 3,
      rating: 5,
      text: "I've been investing in Karachi real estate for 10 years, but Estate Advisor's insights have taken my portfolio to the next level. Their market analysis is unparalleled.",
    },
    {
      id: 4,
      rating: 5,
      text: "Moving to Karachi from abroad was daunting, but Estate Advisor made finding a home effortless. Their professionalism and local expertise are exceptional.",
    },
  ];

  return (
    <section className="py-20 bg-[#0f0f0f] border-t border-gray-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            What Our <span className="text-[#d4af37]">Clients Say</span>
          </h2>
          <p className="text-[16px] sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            Don't just take our word for it. Hear directly from our satisfied
            clients about their experiences with Estate Advisor.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="group relative glass border border-white/10 rounded-2xl p-8 hover:border-[#d4af37]/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#d4af37]/10"
              style={{ animationDelay: `${index * 0.2}s` }}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-[#d4af37]/20 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-[#d4af37]" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-[#ffc815] fill-current"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-white/85 text-lg leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#d4af37]/0 via-[#d4af37]/5 to-[#d4af37]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-5">
          {[
            { value: "4.9/5", label: "Average Rating" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "500+", label: "5-Star Reviews" },
            { value: "24/7", label: "Support Available" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="text-center cursor-default"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              {/* Glowing Value */}
              <motion.div
                className="text-3xl font-bold text-[#d4af37] mb-2 drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]"
                whileHover={{
                  textShadow: "0px 0px 12px rgba(212,175,55,0.8)",
                }}
              >
                {item.value}
              </motion.div>

              {/* Fading Label */}
              <motion.p
                className="text-white/60"
                whileHover={{ color: "#d4af37" }}
                transition={{ duration: 0.3 }}
              >
                {item.label}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
