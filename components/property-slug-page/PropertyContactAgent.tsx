import { Phone, Calendar } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const phoneNumber = "+923233385541"; // sohail ramzan number
const message =
  'Hi! I want to visit this property. Here is the link: https://estateadvisor.com.pk/properties/';
const whatsAppUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

export const PropertyContactAgent = ({ slug }: { slug: string }) => {
  return (
    <div className="bg-card rounded-xl p-6 md:p-8 shadow-card-elegant glass">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
        Contact Agent
      </h2>

      <div className="p-6 mb-6 border-luxury-gold/20 bg-gradient-subtle border rounded-2xl bg-white/3 border-[#ffffff2e]">
        <div className="flex items-start gap-4">
          <Image
            src="/sohail-ramzan.jpg"
            alt="Sohail Ramzan"
            width={120}
            height={120}
            quality={100}
            className="w-16 h-16 rounded-full object-cover shadow-elegant"
          />
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-foreground">
              Sohail Ramzan
            </h3>
            <p className=" mb-2 text-sm">Real Estate Agent / Advisor</p>

            {/* Qualities */}
            <div className="flex gap-1 items-start h-5">
              <p className="text-green-300 text-base">•</p>
              <p className="text-sm text-white/70">25+ years experience</p>
            </div>
            <div className="flex gap-1 items-start h-5">
              <p className="text-green-300 text-base">•</p>
              <p className="text-sm text-white/70">Karchi's Market Expert</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Link
          href="tel:92233385541"
          target="_blank"
          className="flex group items-center justify-center gap-2 h-14 bg-white/85 hover:bg-white text-black rounded-lg cursor-pointer transition-all duration-300 ease-out active:scale-95"
        >
          <Phone className="h-5 w-5 group-hover:h-5.5 group-hover:w-5.5 transition-all duration-300 ease-out" />
          <p className="text-black text-base group-hover:text-lg transition-all duration-100 ease-out">
            0323-3385541
          </p>
        </Link>

        <Link
          href={"https://wa.me/923233385541"}
          target="_blank"
          className="flex group items-center justify-center gap-2 h-14 bg-[#00b649] hover:bg-green-600 rounded-lg cursor-pointer transform transition-all duration-300 ease-out active:scale-95"
        >
          <FaWhatsapp className="h-6 w-6 group-hover:h-6.5 group-hover:w-6.5 transition-all duration-300 ease-out" />
          <p className="text-white text-base group-hover:text-lg transition-all duration-100 ease-out">
            WhatsApp
          </p>
        </Link>
      </div>

      {/* Action Buttons */}
      <Link
        href={`${whatsAppUrl}${slug}`}
        target="_blank"
        className=" flex items-center justify-center gap-2 w-full h-14 bg-gradient-luxury border border-white/85 text-white text-lg font-semibold hover:bg-white hover:text-black rounded-lg cursor-pointer transition-all duration-300 active:scale-95"
      >
        <Calendar className="h-5 w-5" />
        <p className="mt-1">Book a Visit</p>
      </Link>
    </div>
  );
};
