"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Property } from "../../sanity.types";
import { imageUrl } from "@/lib/imageUrl";
import { MdFullscreen } from "react-icons/md";
import { MdOutlineFullscreenExit } from "react-icons/md";

// Shadcn ui Carousel
import { type CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const PropertyImageCarousel = ({ property }: { property: Property }) => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0);
  const [isFs, setIsFs] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api]);

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

 

  return (
    <Carousel
      ref={containerRef}
      className="relative w-full h-full overflow-hidden rounded-xl bg-[#2c2c2c]/5 border border-gray-400/50"
      opts={{ loop: true }}
      setApi={setApi}
      // setApi={(api) => {
      //   if (!api) return;
      //   api.on("select", () => {
      //     setCurrent(api.selectedScrollSnap());
      //   });
      // }}
    >
      <CarouselContent className="h-full">
        {(property.videos?.length ?? 0) > 0 &&
          property.videos?.map((vid, idx) => (
            <CarouselItem
              key={idx}
              className="w-full  flex items-start justify-center"
            >
              <video
                controls
                controlsList="nodownload"
                onContextMenu={(e) => e.preventDefault()}
                className={`object-contain w-full ${isFs ? "md:h-[100vh] h-[900px] " : "md:max-h-[440px] my-auto"} `}
              >
                <source src={(vid as any).url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </CarouselItem>
          ))}

        {(property.gallery?.length ?? 0) > 0 &&
          property.gallery?.map((img, idx) => (
            <CarouselItem
              key={idx}
              className="w-full black flex items-start justify-center"
            >
              <Image
                src={imageUrl(img).url()}
                alt={`${property.name} - ${idx + 1}`}
                width={1920}
                height={1080}
                quality={90}
                priority={idx === 0}
                loading={idx === 0 ? "eager" : "lazy"}
                className={`object-contain w-full ${isFs ? "md:h-[100vh] h-[900px] " : "md:max-h-[440px] my-auto"} `}
              />
            </CarouselItem>
          ))}
      </CarouselContent>

      {/* Navigation */}
      <CarouselPrevious
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 transition border border-white/90 rounded-full p-2 text-white cursor-pointer z-10"
        title="Previous"
      />
      <CarouselNext
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 transition border border-white/90 rounded-full p-2 text-white cursor-pointer z-10"
        title="Next"
      />

      {/* Fullscreen button */}
      <button
        type="button"
        aria-label={isFs ? "Exit fullscreen" : "Enter fullscreen"}
        title={isFs ? "Exit fullscreen" : "Enter fullscreen"}
        onClick={toggleFullScreen}
        className="absolute top-4 right-3 cursor-pointer text-white z-10"
      >
        {isFs ? (
          <MdOutlineFullscreenExit className="h-9 w-9" />
        ) : (
          <MdFullscreen className="w-10 h-10" />
        )}
      </button>

      {/* Image counter */}
      <div className="absolute bottom-4 right-4 border border-gray-300/50 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium z-10">
        {current} / {property.gallery?.length}
      </div>
    </Carousel>
  );
};
