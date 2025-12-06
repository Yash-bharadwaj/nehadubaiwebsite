"use client";

import React from "react";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import whiteLogo from "../nehaWebsiteVideos/NehaWhileLogo.png";
import blackLogo from "../nehaWebsiteVideos/NehaBlacklogo.png";
import celebrities1 from "../picswithcelebrities/celebrities1.jpg";
import celebrities2 from "../picswithcelebrities/celebrities2.jpg";
import celebrities3 from "../picswithcelebrities/celebrities3.jpg";
import celebrities4 from "../picswithcelebrities/celebrities4.jpg";
import celebrities5 from "../picswithcelebrities/celebrities5.jpg";
import celebrities6 from "../picswithcelebrities/celebrities6.jpg";
import celebrities7 from "../picswithcelebrities/celebrities7.jpg";
import celebrities8 from "../picswithcelebrities/celebrities8.jpg";
import celebrities9 from "../picswithcelebrities/celebrities9.jpg";
import celebrities10 from "../picswithcelebrities/celebrities10.jpg";
import celebrities11 from "../picswithcelebrities/celebrities11.jpg";
import celebrities12 from "../picswithcelebrities/celebrities12.jpg";
import celebrities13 from "../picswithcelebrities/celebrities13.jpg";
import celebrities14 from "../picswithcelebrities/celebrities14.jpg";

export default function CelebritiesGallery() {
  const images = [
    celebrities1,
    celebrities2,
    celebrities3,
    celebrities4,
    celebrities5,
    celebrities6,
    celebrities7,
    celebrities8,
    celebrities9,
    celebrities10,
    celebrities11,
    celebrities12,
    celebrities13,
    celebrities14,
  ];

  // Duplicate logos for seamless infinite scroll
  const logos = [whiteLogo, whiteLogo, whiteLogo, whiteLogo, whiteLogo, whiteLogo, whiteLogo, whiteLogo];
  const blackLogos = [blackLogo, blackLogo, blackLogo, blackLogo, blackLogo, blackLogo, blackLogo, blackLogo];

  return (
    <section id="celebrities" className="py-12 bg-brand-primary dark:bg-brand-dark-bg transition-colors relative overflow-hidden w-full">
      {/* Infinite Scrolling Logo Marquee - Background Layer */}
      <div className="absolute inset-0 w-full overflow-hidden pointer-events-none opacity-[0.15] dark:opacity-[0.08] z-0 flex items-center">
        {/* Light Mode Logos */}
        <div 
          className="flex dark:hidden"
          style={{
            animation: 'scroll-horizontal 40s linear infinite',
          }}
        >
          {logos.map((logo, index) => (
            <div
              key={`light-${index}`}
              className="flex-shrink-0 mx-12 md:mx-20 lg:mx-32"
            >
              <img
                src={logo}
                alt="Neha Dixit Logo"
                className="h-40 md:h-56 lg:h-72 xl:h-80 w-auto object-contain"
              />
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {logos.map((logo, index) => (
            <div
              key={`light-dup-${index}`}
              className="flex-shrink-0 mx-12 md:mx-20 lg:mx-32"
            >
              <img
                src={logo}
                alt="Neha Dixit Logo"
                className="h-40 md:h-56 lg:h-72 xl:h-80 w-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Dark Mode Logos */}
        <div 
          className="flex hidden dark:flex items-center"
          style={{
            animation: 'scroll-horizontal 40s linear infinite',
          }}
        >
          {blackLogos.map((logo, index) => (
            <div
              key={`dark-${index}`}
              className="flex-shrink-0 mx-12 md:mx-20 lg:mx-32"
            >
              <img
                src={logo}
                alt="Neha Dixit Logo"
                className="h-40 md:h-56 lg:h-72 xl:h-80 w-auto object-contain"
              />
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {blackLogos.map((logo, index) => (
            <div
              key={`dark-dup-${index}`}
              className="flex-shrink-0 mx-12 md:mx-20 lg:mx-32"
            >
              <img
                src={logo}
                alt="Neha Dixit Logo"
                className="h-40 md:h-56 lg:h-72 xl:h-80 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Content Layer - On top of scrolling logos */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-brand-charcoal dark:text-white mb-4">
            Moments with <span className="text-highlight">Celebrities</span>
          </h2>
          <p className="text-stone-500 dark:text-stone-400 max-w-2xl mx-auto">
            Capturing special moments with renowned personalities from across the entertainment.
          </p>
        </div>

        <ParallaxScroll images={images} />
      </div>

      <style>{`
        @keyframes scroll-horizontal {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}

