"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import { Building, Users, Award, Calendar } from "lucide-react";

const StatsSection = () => {
  const [counts, setCounts] = useState({
    properties: 0,
    clients: 0,
    experience: 0,
    partners: 0,
  });

  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  const animationRef = useRef<number>(null);

  const targetValues = useMemo(
    () => ({
      properties: 2500,
      clients: 15000,
      experience: 30,
      partners: 150,
    }),
    []
  );

  // Smooth counter animation
  const animateCounters = () => {
    const duration = 2000;
    const startTime = performance.now();

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const step = (timestamp: number) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = easeOutCubic(progress);

      setCounts({
        properties: Math.floor(targetValues.properties * eased),
        clients: Math.floor(targetValues.clients * eased),
        experience: Math.floor(targetValues.experience * eased),
        partners: Math.floor(targetValues.partners * eased),
      });

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(step);
      }
    };

    animationRef.current = requestAnimationFrame(step);
  };

  // Trigger when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateCounters();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      observer.disconnect();
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [targetValues]);

  const stats = useMemo(
    () => [
      {
        icon: Building,
        key: "properties",
        suffix: "+",
        label: "Properties Sold",
        color: "from-[#fcd01c] to-[#9e8021]",
      },
      {
        icon: Users,
        key: "clients",
        suffix: "+",
        label: "Happy Clients",
        color: "from-[#5ad265] to-[#1f9c33]",
      },
      {
        icon: Calendar,
        key: "experience",
        suffix: "",
        label: "Years Experience",
        color: "from-[#4095ff] to-[#1c57b8]",
      },
      {
        icon: Award,
        key: "partners",
        suffix: "+",
        label: "Partner Developers",
        color: "from-[#fa5caf] to-[#ed3992]",
      },
    ],
    []
  );

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-[#0C0C0C] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Trusted by <span className="text-[#d4af37]">Thousands</span>
          </h2>
          <p className="text-[16px] sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Our track record speaks for itself. Join the growing number of
            satisfied clients who chose Estate Advisor for their property needs.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.key} className="group relative">
              <div className="glass bg-black border border-white/10 rounded-2xl p-8 text-center hover:border-[#d4af37]/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#d4af37]/10">
                {/* Icon */}
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.color} p-4 transform group-hover:rotate-6 transition-transform duration-300`}
                >
                  <stat.icon className="w-full h-full text-white" />
                </div>

                {/* Number */}
                <div className="mb-4 text-white">
                  <span className="text-4xl lg:text-5xl font-bold">
                    {counts[stat.key as keyof typeof counts].toLocaleString()}
                  </span>
                  <span className="text-3xl lg:text-4xl font-bold">
                    {stat.suffix}
                  </span>
                </div>

                {/* Label */}
                <p className="text-white/70 font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Accent */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-[#d4af37]/10 border border-[#d4af37]/20 rounded-full px-8 py-4">
            <div className="w-2 h-2 bg-[#d4af37] rounded-full animate-pulse"></div>
            <span className="text-[#d4af37] font-medium">
              Pakistan's Most Trusted Real Estate Consultancy
            </span>
            <div className="w-2 h-2 bg-[#d4af37] rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
