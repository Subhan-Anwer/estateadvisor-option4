"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Users, Lightbulb, Award, Handshake, Zap } from "lucide-react";

export const CoreValuesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description:
        "Transparent dealings and honest communication in every interaction",
    },
    {
      icon: Handshake,
      title: "Trust",
      description:
        "Building lasting relationships through reliability and consistency",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Embracing technology and modern solutions for better client experience",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your needs and goals are at the heart of everything we do",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Striving for perfection in service delivery and client satisfaction",
    },
    {
      icon: Zap,
      title: "Efficiency",
      description:
        "Quick turnarounds without compromising on quality or attention to detail",
    },
  ];

  return (
    <section ref={ref} className="relative py-20 bg-[#0f0f0f]">
      <div className="container mx-auto md:px-6 px-3">
        {/* Section Heading */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Core Values</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The principles that define who we are and how we serve you
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 md:gap-6 gap-3 gap-y-7 md:space-y-2 space-y-3">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ y: 30, opacity: 0, scale: 0.9 }}
              animate={isInView ? { y: 0, opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{
                scale: 1.03,
                y: -5,
                transition: { duration: 0.18 },
              }}
              className="group relative h-full"
            >
              <div className="relative bg-[hsl(0,0%,4%)] border border-white/70 hover:border-[hsl(51,100%,50%)]/40 rounded-xl md:px-6 md:py-6 py-5 px-3 h-full transition-all duration-300 group-hover:border-luxury-gold group-hover:shadow-gold">
                {/* Golden glow on hover */}
                <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(51_100%_50%/.2),transparent)] opacity-0 group-hover:opacity-50 transition-opacity duration-200 rounded-xl" />

                {/* "Wooden board nails" accents */}
                <div className="absolute top-6 left-6 w-2 h-2 bg-white/90 rounded-full shadow-md" />
                <div className="absolute top-6 right-6 w-2 h-2 bg-white/90 rounded-full shadow-md" />

                {/* Content */}
                <div className="relative z-10 text-center">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 mx-auto mb-4 bg-gradient-gold rounded-lg flex items-center justify-center"
                  >
                    <value.icon className="w-8 md:w-6 h-8 md:h-6 text-luxury-black" />
                  </motion.div>

                  <h3 className="text-xl font-bold mb-3 gradient-text group-hover:text-luxury-gold transition-colors duration-300">
                    {value.title}
                  </h3>

                  <p className="text-[hsl(0,0%,80%)] text-[13px] md:text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
