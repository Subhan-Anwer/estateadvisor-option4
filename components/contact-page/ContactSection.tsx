"use client";
import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import Image from "next/image";

const contactMethods = [
  {
    icon: <Phone className="w-6 h-6 text-white" />,
    title: "Call Us",
    value: "+92 323 3385541",
    valueColor: "text-[#df8a29]",
    note: "Mon-Sat 9AM-8PM",
    gradient: "from-[#f59e0b] to-[#d97706]",
  },
  {
    icon: (
      <Image
        src="/Whatsapp.png"
        alt="WhatsApp Icon"
        width={28}
        height={28}
        className="w-7 h-7 transition-transform duration-300"
      />
    ),
    title: "WhatsApp",
    value: "+92 323 3385541",
    valueColor: "text-[#25D366]",
    note: "Quick responses",
    gradient: "from-[#5ad265] to-[#1f9c33]",
  },
  {
    icon: <Mail className="w-6 h-6 text-white" />,
    title: "Email",
    value: "sohailadvisor90@gmail.com",
    valueColor: "text-[#3b82f6]",
    note: "24-48 hour response",
    gradient: "from-[#3b82f6] to-[#1d4ed8]",
  },
  {
    icon: <MapPin className="w-6 h-6 text-white" />,
    title: "Visit Us",
    value: "Shahbaz Comm lane 4",
    valueColor: "text-[#ee3942]",
    note: "DHA Phase VI Karachi",
    gradient: "from-[#d61620] to-[#a00911]",
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [showMessage, setShowMessage] = useState(false); // for fade-out effect

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Replace this with API call / email logic
    console.log("Form submitted:", formData);

    // Show success
    setSuccessMessage("✅ Message sent successfully!");
    setShowMessage(true);

    // Hide after 5 seconds
    setTimeout(() => {
      setShowMessage(false); // trigger fade-out
      setTimeout(() => setSuccessMessage(null), 500); // remove from DOM after fade
    }, 5000);

    // Reset form
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <section className="py-20 bg-[#161616] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Contact Form */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-10 md:p-14 pb-14">
          {/* Heading */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Get in <span className="text-[#d4af37]">Touch</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
              Drop your enquiry here and get the best real estate solution for
              your needs at prompt level with personal representative from
              Estate Advisor
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-6 order-2 md:order-1"
            >
              <div>
                <label className="block text-white/70 text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-white/70 text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-colors"
                  placeholder="+92 312 1234567"
                />
              </div>

              <div>
                <label className="block text-white/70 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-colors resize-none"
                  placeholder="Tell us about your property requirements..."
                />
              </div>

              <div className="relative mt-12">
                {/* {successMessage && ( */}
                <p
                  className={`absolute w-52 bottom-18 left-1/2 -translate-x-1/2 text-sm font-medium transition-opacity duration-500 ${
                    showMessage ? "opacity-100 text-green-400" : "opacity-0"
                  }`}
                >
                  {successMessage}
                </p>
                {/* )} */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-[#0c2625] font-semibold py-4 px-6 rounded-lg transition-all duration-150 transform active:scale-95 hover:shadow-lg hover:shadow-[#d4af37]/25 flex items-center justify-center space-x-2 disabled:opacity-60"
                >
                  <Send size={20} />
                  <span>Send</span>
                </button>
              </div>
              {/* Status Messages */}
            </form>

            {/* Side Image */}
            <div className="order-1 md:order-3 w-full h-full md:pt-6 pt-0 md:pb-8 pb-0">
              <Image
                src={"/contact-image.jpg"}
                alt="Property Image"
                width={1080}
                height={1080}
                className="w-full h-64 md:h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
