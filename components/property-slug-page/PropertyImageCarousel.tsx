"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Property } from "../../sanity.types";
import { imageUrl } from "@/lib/imageUrl";
import { MdFullscreen } from "react-icons/md";
import { MdOutlineFullscreenExit } from "react-icons/md";


export const PropertyImageCarousel = ({ property }: { property: Property }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isFs, setIsFs] = useState(false);

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % (property.gallery?.length || 1));

  const prevImage = () =>
    setCurrentIndex(
      (prev) =>
        (prev - 1 + (property.gallery?.length || 1)) %
        (property.gallery?.length || 1)
    );

  // Fullscreen (true browser fullscreen)
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  };
  useEffect(() => {
    const onFsChange = () => setIsFs(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  // Swipe support
  useEffect(() => {
    const slider = containerRef.current;
    if (!slider) return;

    let startX = 0;
    let endX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
    };
    const handleTouchMove = (e: TouchEvent) => {
      endX = e.touches[0].clientX;
    };
    const handleTouchEnd = () => {
      if (startX - endX > 50) nextImage(); // swipe left
      if (endX - startX > 50) prevImage(); // swipe right
    };

    slider.addEventListener("touchstart", handleTouchStart);
    slider.addEventListener("touchmove", handleTouchMove);
    slider.addEventListener("touchend", handleTouchEnd);

    return () => {
      slider.removeEventListener("touchstart", handleTouchStart);
      slider.removeEventListener("touchmove", handleTouchMove);
      slider.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-[70vh] md:h-[80vh] overflow-hidden rounded-xl bg-black"
    >
      {/* Main Image */}
      <div className="relative h-full bg-[#2c2c2c]/30">
          {property.gallery?.map((img, idx) => (
            <Image
              key={idx}
              src={imageUrl(img).url()}
              alt={`${property.name} - ${idx + 1}`}
              width={1300}
              height={920}
              quality={90}
              priority={idx === 0} // Load first image eagerly
              loading={idx === 0 ? "eager" : "lazy"} // Rest lazy
              className={`w-full h-full object-contain object-center border border-gray-400/50 absolute inset-0 transition-opacity duration-700 ${
                idx === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

        {/* Navigation buttons */}
        <button
          className="absolute p-2 left-4 top-1/2 -translate-y-1/2 bg-black/30 border border-white/90 font-bold backdrop-blur-sm rounded-full cursor-pointer"
          onClick={prevImage}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          className="right-4 top-1/2 absolute p-2 -translate-y-1/2 bg-black/30 border border-white/90 font-bold backdrop-blur-sm rounded-full cursor-pointer"
          onClick={nextImage}
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Fullscreen */}
        <button
          type="button"
          aria-label={isFs ? "Exit fullscreen" : "Enter fullscreen"}
          title={isFs ? "Exit fullscreen" : "Enter fullscreen"}
          onClick={toggleFullScreen}
          className="absolute top-4 right-3 cursor-pointer"
        >
          {isFs ? (
            <MdOutlineFullscreenExit className="h-9 w-9" />
          ) : (
            <MdFullscreen className="w-10 h-10" />
          )}
        </button>

        {/* Image counter */}
        <div className="absolute bottom-4 right-4 border border-gray-300/50 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
          {currentIndex + 1} / {property.gallery?.length}
        </div>
      </div>

      {/* Thumbnail navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {property.gallery?.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
