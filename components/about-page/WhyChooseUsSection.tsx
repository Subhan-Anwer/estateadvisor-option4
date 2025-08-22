"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X } from "lucide-react";

export const WhyChooseUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const comparisons = [
    {
      feature: "Experience",
      others: "5-10 years typical",
      us: "30+ years proven expertise",
    },
    {
      feature: "Market Knowledge",
      others: "General understanding",
      us: "Deep Karachi market insights",
    },
    {
      feature: "Client Support",
      others: "Business hours only",
      us: "24/7 dedicated support",
    },
    {
      feature: "Technology",
      others: "Basic listing tools",
      us: "Advanced AI-powered matching",
    },
    {
      feature: "Network",
      others: "Limited connections",
      us: "Extensive industry network",
    },
    {
      feature: "Follow-up",
      others: "Ends after sale",
      us: "Lifetime relationship",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Why Choose <span className="text-[#d4af37]">Estate Advisor</span>?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            See how we compare to other real estate agencies in Karachi
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Table Header */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden md:grid grid-cols-3 gap-4 mb-6"
          >
            <div className="text-center">
              <h3 className="text-lg font-semibold text-muted-foreground">
                Feature
              </h3>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-muted-foreground">
                Other Agencies
              </h3>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold gradient-text">
                Estate Advisor
              </h3>
            </div>
          </motion.div>

          {/* Comparison Rows */}
          <div className="space-y-4">
            {comparisons.map((item, index) => (
              <motion.div
                key={item.feature}
                initial={{ x: -40, opacity: 0 }}
                animate={
                  isInView ? { x: 0, opacity: 1 } : { x: -40, opacity: 0 }
                }
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex flex-col md:grid md:grid-cols-3 gap-3 p-4 bg-[hsl(0,0%,4%)] rounded-xl border border-white/20 hover:border-[#d4af37]/50 transition-all duration-300"
              >
                {/* Feature */}
                <div className="flex items-center">
                  <span className="font-medium text-[#af8f27]">
                    {item.feature}
                  </span>
                </div>

                {/* Other Agencies */}
                <div className="flex items-center gap-2 md:justify-center">
                  <span className="md:hidden text-sm font-medium text-white/80">
                    Other Agencies:
                  </span>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                  >
                    <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                  </motion.div>
                  <span className="text-white text-sm">
                    {item.others}
                  </span>
                </div>

                {/* Estate Advisor */}
                <div className="flex items-center gap-2 md:justify-center">
                  <span className="md:hidden text-sm font-medium text-white/80">
                    Estate Advisor:
                  </span>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1 + 0.4,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 md:ml-0 ml-1.5" />
                  </motion.div>
                  <span className="text-white text-sm font-medium">
                    {item.us}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 text-center"
          >
            {[
              { value: "98%", label: "Client Satisfaction" },
              { value: "15 Days", label: "Average Sale Time" },
              { value: "100%", label: "Legal Compliance" },
            ].map((stat, i) => (
              <div key={i} className="bg-card p-6 glass">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                  className="text-2xl sm:text-3xl font-bold text-[#d4af37] mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
