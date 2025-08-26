"use client";
import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const socials = [
  {
    icon: <Facebook size={18} />,
    hover: "hover:bg-[#106aff]",
    link: "https://www.facebook.com/EstateAdvisor0323",
  },
  {
    icon: <Instagram size={18} />,
    hover:
      "hover:bg-gradient-to-br hover:from-[#F9CE34] hover:via-[#EE2A7B] hover:to-[#6228d7]",
    link: "https://www.instagram.com/estateadvisor01",
  },
  {
    icon: <Linkedin size={18} />,
    hover: "hover:bg-[#086bc9]",
    link: "https://www.linkedin.com/company/officialestateadvisor/",
  },
  {
    icon: <Youtube size={18} />,
    hover: "hover:bg-[#ff0000]",
    link: "https://www.youtube.com/@SohailRamzan_0323",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b border-t border-gray-400/30 from-[#111111] to-[#000000] relative">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src="/logo.png"
                alt="Estate Advisor Logo"
                height={58}
                width={58}
                quality={100}
                className="w-16 h-auto"
              />
              <h3 className="text-xl font-bold text-white">Estate Advisor</h3>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed text-sm">
              Pakistan's most trusted real estate consultancy, helping clients
              make smarter property decisions in Karachi since 2012.
            </p>
            <div className="flex space-x-3">
              {socials.map((social, idx) => (
                <Link
                  key={idx}
                  href={social.link}
                  className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white transition-all duration-300 ${social.hover}`}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="col-span-2 grid grid-cols-2">
            {/* Quick Links */}
            <div className="col-span-1 lg:ml-15">
              <h4 className="text-white font-semibold text-lg mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/"
                    className="text-white/70 hover:text-[#d4af37] transition-colors"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    href="/properties"
                    className="text-white/70 hover:text-[#d4af37] transition-colors"
                  >
                    Properties
                  </Link>
                </li>

                <li>
                  <Link
                    href="/about"
                    className="text-white/70 hover:text-[#d4af37] transition-colors"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    href="/contact"
                    className="text-white/70 hover:text-[#d4af37] transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="col-span-1">
              <h4 className="text-white font-semibold text-lg mb-6">
                Our Services
              </h4>
              <ul className="space-y-3 text-sm">
                {[
                  "Property Buying/Selling",
                  "Investment Consulting",
                  "Property Documentation",
                  "Valuation Services",
                ].map((service) => (
                  <li key={service}>
                    <Link
                      href="#"
                      className="text-white/70 hover:text-[#d4af37] transition-colors"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">
              Get in Touch
            </h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#d4af37] mt-0.5 flex-shrink-0" />
                <p className="text-white/70">
                  Shahbaz Comm lane 4, DHA Phase VI, Karachi
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                <p className="text-white/70">+92 323 3385541</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                <p className="text-white/70">sohailadvisor90@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              © 2025 Estate Advisor. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
