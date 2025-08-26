// components/QuickLinks.tsx
"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Info } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";

export default function QuickLinks() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-18">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Card 1: Properties */}
        <Card className="glass h-60 w-[85%] md:justify-self-end justify-self-center flex flex-col justify-center">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-2 text-xl font-semibold text-white">
              <Home className="w-auto h-5.5 text-emerald-600" />
              Browse Properties
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300/80">
            <p className="text-center mb-5">
              Find your dream home, plots, and investment opportunities.
            </p>
            <Link href="/properties">
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-[6px] cursor-pointer">
                View Listings
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Card 2: WhatsApp Contact */}
        <Card className="glass h-70 md:w-full w-[85%] justify-self-center order-first md:order-none flex flex-col justify-center">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-2 text-xl font-semibold text-white">
              <FaWhatsapp className="w-auto h-8 text-green-600" />
              Contact via WhatsApp
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300/80">
            <p className="text-center mb-5">
              Chat instantly with the real estate expert of Estate Advisor on
              WhatsApp.
            </p>
            <Link href="https://wa.me/+923233385541" target="_blank">
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-[6px] cursor-pointer">
                Start Chat
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Card 3: About Us */}
        <Card className="glass h-60 w-[85%] md:justify-self-start justify-self-center flex flex-col justify-center">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-2 text-xl font-semibold text-white">
              <Info className="w-5 h-5 text-amber-600" />
              About Estate Advisor
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300/80">
            <p className="text-center mb-5">
              Learn more about our experience, mission, and trusted reputation.
            </p>
            <Link href="/about" className="">
              <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white rounded-[6px] cursor-pointer">
                Discover More
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
