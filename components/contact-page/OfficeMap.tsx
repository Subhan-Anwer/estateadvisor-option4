import { Clock } from "lucide-react";
import React from "react";

const OfficeMap = () => {
  return (
    <section className="sm:px-4 px-0 mb-8">
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl md:p-8 p-2 pt-8">
        {/* Heading */}
        <h3 className="text-2xl font-bold text-white mb-6 text-center">
          Visit Our Office
        </h3>

        {/* Map */}
        <div className="h-auto flex items-center justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.649783424411!2d67.0608231!3d24.807442999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d822b3770f5%3A0x113dad0e9ed8c62a!2sEstate%20Advisor!5e0!3m2!1sen!2s!4v1754113969412!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-[10px] md:h-[550px] h-160"
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
                Monday - Saturday
              </span>
              <span className="text-white sm:text-center text-right">
                11:00 AM - 7:00 PM
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
    </section>
  );
};

export default OfficeMap;
