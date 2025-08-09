"use client";
import React from "react";
import Image from "next/image";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+923233385541";
    const message = encodeURIComponent(
      "Hi! I'm interested in your premium properties. Can you help me find the perfect property?"
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="group relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center transform hover:scale-110 hover:animate-none"
        aria-label="Chat on WhatsApp"
      >
        {/* Ripple Effect */}
        <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"></div>
        <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20 animation-delay-1000"></div>

        {/* Icon */}
        <Image
          src="/Whatsapp.png"
          alt="WhatsApp Icon"
          width={28}
          height={28}
          className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300"
        />

        {/* Online Indicator */}
        <div className="absolute top-0 -right-0.5 w-4 h-4 bg-red-600 border-2 border-white rounded-full "></div>
      </button>
    </div>
  );
};

export default WhatsAppButton;
