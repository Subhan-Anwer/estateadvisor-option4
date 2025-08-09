"use client";
import React, { useState } from "react";
import { Home, Building } from "lucide-react";

const Areas = () => {
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);

  const areas = [
    {
      name: "DHA",
      listings: 45,
      description: "Premium residential and commercial properties",
      position: { top: "17%", left: "30%" },
      icon: Home,
    },
    {
      name: "Bahria Town",
      listings: 32,
      description: "Modern planned community with all amenities",
      position: { top: "30%", left: "65%" },
      icon: Building,
    },
    {
      name: "Gulshan e Iqbal",
      listings: 28,
      description: "settle in a great connectivity neighborhood",
      position: { top: "41%", left: "47%" },
      icon: Home,
    },
    {
      name: "Clifton Cantt",
      listings: 18,
      description: "Secure cantonment area with modern facilities",
      position: { top: "62%", left: "39%" },
      icon: Building,
    },
    {
      name: "PECHS",
      listings: 25,
      description: "Central location with excellent infrastructure",
      position: { top: "59%", left: "76%" },
      icon: Home,
    },
  ];

  return (
    <section className="py-20 bg-[#0c0c0c]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Areas We <span className="text-[#d4af37]">Deals In</span>
          </h2>
          <p className="text-[16px] sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            Explore prime locations across Karachi where we offer exceptional
            properties
          </p>
        </div>

        {/* Interactive Map Section */}
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Map Area */}
          <div className="lg:col-span-2">
            <div className="relative rounded-2xl overflow-hidden border border-gray-800 h-96 lg:h-[500px]">
              <iframe
                src="https://www.google.com/maps/d/u/0/embed?mid=19aAYPSX20cdioMLEuAdy1t3rGGOzxw0&ehbc=2E312F&noprof=1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Areas List */}
          <div className="space-y-4 ">
            <h3 className="text-2xl font-semibold mb-6">
              Our <span className="text-[#daab2d]">Locations</span>
            </h3>

            {areas.map((area) => {
              const IconComponent = area.icon;
              return (
                <div
                  key={area.name}
                  className={` rounded-xl p-4 bg-[#1c1c1c] border transition-all duration-300 cursor-pointer ${
                    hoveredArea === area.name
                      ? "border-[#daab2d] bg-yellow-400/10"
                      : "border-white/20"
                  }`}
                  onMouseEnter={() => setHoveredArea(area.name)}
                  onMouseLeave={() => setHoveredArea(null)}
                >
                  <div className="flex items-start space-x-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        hoveredArea === area.name
                          ? "bg-[#daab2d] text-black"
                          : "bg-[#383838] text-[#daab2d]"
                      }`}
                    >
                      <IconComponent className="h-5 w-5" />
                    </div>

                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1">
                        {area.name}
                      </h4>
                      <p className="text-sm text-gray-200/60 mb-2">
                        {area.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-[#daab2d] font-medium">
                          {area.listings} Properties
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Areas;
