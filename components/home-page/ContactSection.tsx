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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <section className="py-20 bg-[#161616] border-t border-gray-400/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto md:px-6 px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Get in <span className="text-[#d4af37]">Touch</span>
          </h2>
          <p className="text-[16px] sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            Ready to start your property journey? Our expert advisors are here
            to help you make informed decisions. Reach out to us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#d4af37]/30 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${method.gradient} rounded-xl flex items-center justify-center`}
                    >
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">
                        {method.title}
                      </h3>
                      <p className={method.valueColor}>{method.value}</p>
                      <p className="text-white/60 text-sm">{method.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl md:p-8 p-5 py-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Book a Free Consultation
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
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
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-colors resize-none"
                    placeholder="Tell us about your property requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-[#0c2625] font-semibold py-4 px-6 rounded-lg hover:from-[#b8941f] hover:to-[#d4af37] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#d4af37]/25 flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl md:p-8 p-4 pt-8">
            {/* Heading */}
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Visit Our Office
            </h3>

            {/* Map */}
            <div className="h-100 flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.649783424411!2d67.0608231!3d24.807442999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d822b3770f5%3A0x113dad0e9ed8c62a!2sEstate%20Advisor!5e0!3m2!1sen!2s!4v1754113969412!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-[10px]"
              />
            </div>

            {/* Office Hours */}
            <div className="bg-[#141414]/60 backdrop-blur-sm border border-white/10 rounded-2xl p-6 my-8">
              <div className="flex items-center space-x-2 mb-4 justify-center">
                <Clock className="w-6 h-6 text-[#d4af37]" />
                <h3 className="text-white font-semibold text-xl pt-0.5">
                  Office Hours
                </h3>
              </div>
              <div className="space-y-2 text-sm sm:flex items-center justify-center gap-10">
                <div className="grid sm:grid-cols-1 grid-cols-2 items-center space-y-1 my-2">
                  <span className="text-white/60 sm:text-center text-left">
                    Monday - Friday
                  </span>
                  <span className="text-white sm:text-center text-right">
                    9:00 AM - 8:00 PM
                  </span>
                </div>
                <div className="grid sm:grid-cols-1 grid-cols-2 items-center space-y-1 my-2">
                  <span className="text-white/60 sm:text-center text-left">
                    Saturday
                  </span>
                  <span className="text-white sm:text-center text-right">
                    10:00 AM - 6:00 PM
                  </span>
                </div>
                <div className="grid sm:grid-cols-1 grid-cols-2 items-center space-y-1 my-2">
                  <span className="text-white/60 sm:text-center text-left">
                    Sunday
                  </span>
                  <span className="text-[#d4af37] sm:text-center text-right">
                    By Appointment
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
