"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Heart } from "lucide-react";

export const MissionVisionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cards = [
    {
      icon: Target,
      title: "Our Mission",
      content:
        "To provide unparalleled real estate services in Karachi by combining decades of expertise with innovative technology, ensuring every client achieves their property dreams with confidence and ease.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      content:
        "To be Karachi's most trusted and respected real estate consultancy, setting the gold standard for transparency, integrity, and client satisfaction in the industry.",
    },
    {
      icon: Heart,
      title: "Our Promise",
      content:
        "Every transaction is built on trust, every consultation is tailored to your needs, and every relationship is nurtured for life. Your success is our legacy.",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Core Purpose</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Guided by unwavering principles and driven by your success
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ y: 50, opacity: 0, rotateY: -15 }}
              animate={
                isInView
                  ? { y: 0, opacity: 1, rotateY: 0 }
                  : { y: 50, opacity: 0, rotateY: -15 }
              }
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{
                y: -10,
                rotateY: 5,
                transition: { duration: 0.3 },
              }}
              className="group relative"
            >
              <div className="glass p-8 h-full transition-all duration-300 group-hover:border-luxury-gold/50 group-hover:shadow-gold">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-gold-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={
                      isInView
                        ? { scale: 1.2, opacity: 1 }
                        : { scale: 1, opacity: 0 }
                    }
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center group-hover:scale-125 transition-transform duration-300"
                  >
                    <card.icon className="w-8 h-8" />
                  </motion.div>

                  <motion.h3
                    initial={{ y: 20, opacity: 0 }}
                    animate={
                      isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
                    }
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                    className="text-2xl font-bold mb-4 gradient-text"
                  >
                    {card.title}
                  </motion.h3>

                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={
                      isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
                    }
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                    className="text-muted-foreground leading-relaxed"
                  >
                    {card.content}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
