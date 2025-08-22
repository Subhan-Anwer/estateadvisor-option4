"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Icon, Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image";

export const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const teamMembers = [
    {
      name: "Ahmed Hassan",
      role: "Founder & CEO",
      description:
        "30+ years of real estate expertise in Karachi's premium markets",
      image: "/agent-1.jpg",
    },
    {
      name: "Sarah Khan",
      role: "Head of Sales",
      description: "Specialist in luxury residential and commercial properties",
      image: "/agent-2.jpg",
    },
    {
      name: "Ali Raza",
      role: "Senior Property Consultant",
      description: "Expert in investment properties and portfolio management",
      image: "/agent-3.jpg",
    },
    {
      name: "Fatima Sheikh",
      role: "Client Relations Manager",
      description: "Dedicated to exceptional client service and satisfaction",
      image: "/agent-4.jpg",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Meet Our <span className="gradient-text">Expert Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experienced professionals dedicated to making your real estate
            dreams a reality
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-card rounded-2xl overflow-hidden border border-white/20 group-hover:border-luxury-gold/50 transition-all duration-300">
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={420}
                      height={256}
                      className="w-full h-72 object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    />
                  </motion.div>

                  {/* Golden overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-gold-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Social Links - appear on hover */}
                  <div className="absolute bottom-4 left-1/2 transform opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-1/2 flex gap-2">
                    {[{ icon: Linkedin, color: "bg-blue-600" },
                      { icon: Phone, color: "bg-green-700" }].map(( Icon, i) => (
                      <button
                        key={i}
                        className={`w-9 h-9  rounded-full ${Icon.color} flex items-center justify-center hover:bg-luxury-gold hover:text-luxury-black transition-all duration-200`}
                      >
                        <Icon.icon className="w-5 h-5 font-bold" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <motion.h3
                    initial={{ y: 10, opacity: 0 }}
                    animate={
                      isInView ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }
                    }
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                    className="text-xl font-bold mb-2 gradient-text"
                  >
                    {member.name}
                  </motion.h3>

                  <motion.p
                    initial={{ y: 10, opacity: 0 }}
                    animate={
                      isInView ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }
                    }
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                    className="text-luxury-gold font-medium text-sm mb-3"
                  >
                    {member.role}
                  </motion.p>

                  <motion.p
                    initial={{ y: 10, opacity: 0 }}
                    animate={
                      isInView ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }
                    }
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                    className="text-muted-foreground text-sm leading-relaxed"
                  >
                    {member.description}
                  </motion.p>
                </div>

                {/* Golden border glow */}
                <div className="absolute inset-0 border-2 border-luxury-gold/0 group-hover:border-luxury-gold/30 rounded-2xl transition-all duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};