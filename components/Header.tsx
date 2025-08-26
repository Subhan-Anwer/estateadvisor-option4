"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showBlurBg = isScrolled || isMobileMenuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-250 ${
        showBlurBg ? "bg-[#111111]/65 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-1">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-1">
            <Image
              src="/icon.png"
              alt="Logo"
              className="w-12 h-full text-black mt-1 pb-1"
              height={68}
              width={68}
            />
            <div>
              <h1 className="text-xl font-bold mt-2 text-[#ffffff]">
                Estate Advisor
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white/80 hover:text-[#d4af37] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/properties"
              className="text-white/80 hover:text-[#d4af37] transition-colors"
            >
              Properties
            </Link>
            <Link
              href="/about"
              className="text-white/80 hover:text-[#d4af37] transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-white/80 hover:text-[#d4af37] transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-white/80">
              <Phone size={16} />
              <span className="text-sm">+92 323 3385541</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            className="lg:hidden text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/10 ">
            <nav className="flex flex-col space-y-4 mt-4">
              <Link
                href="/"
                className="text-white/80 hover:text-[#d4af37] transition-colors"
              >
                Home
              </Link>
              <Link
                href="/properties"
                className="text-white/80 hover:text-[#d4af37] transition-colors"
              >
                Properties
              </Link>
              <Link
                href="/about"
                className="text-white/80 hover:text-[#d4af37] transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-white/80 hover:text-[#d4af37] transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
