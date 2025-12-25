"use client";

import React from "react";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import whiteLogo from "../nehaWebsiteVideos/NehaWhileLogo.png";
import blackLogo from "../nehaWebsiteVideos/NehaBlacklogo.png";
import celebrities1 from "../picswithcelebrities/celebrity-01.jpeg";
import celebrities2 from "../picswithcelebrities/celebrity-02.jpeg";
import celebrities3 from "../picswithcelebrities/celebrity-03.jpeg";
import celebrities4 from "../picswithcelebrities/celebrity-04.jpeg";
import celebrities5 from "../picswithcelebrities/celebrity-05.jpeg";
import celebrities6 from "../picswithcelebrities/celebrity-06.jpeg";
import celebrities7 from "../picswithcelebrities/celebrity-07.jpeg";
import celebrities8 from "../picswithcelebrities/celebrity-08.jpeg";
import celebrities9 from "../picswithcelebrities/celebrity-09.jpeg";
import celebrities10 from "../picswithcelebrities/celebrity-10.jpeg";
import celebrities11 from "../picswithcelebrities/celebrity-11.jpeg";
import celebrities12 from "../picswithcelebrities/celebrity-12.jpeg";
import celebrities13 from "../picswithcelebrities/celebrity-13.jpeg";
import celebrities14 from "../picswithcelebrities/celebrity-14.jpeg";

export default function CelebritiesGallery() {
  // Arranged for horizontal (row-wise) display in 3 columns
  // Row 1: celebrity-10, celebrity-12, celebrity-08
  // Row 2: celebrity-07, celebrity-13, celebrity-14
  // Row 3: celebrity-01, celebrity-02, celebrity-03
  // Row 4: celebrity-04, celebrity-05, celebrity-06
  // Row 5: celebrity-09, celebrity-11, (empty)
  const images = [
    // Column 1 (firstPart)
    celebrities10, // Row 1, Col 1
    celebrities7,  // Row 2, Col 1
    celebrities1,  // Row 3, Col 1
    celebrities4,  // Row 4, Col 1
    celebrities9,  // Row 5, Col 1
    // Column 2 (secondPart)
    celebrities12, // Row 1, Col 2
    celebrities13, // Row 2, Col 2
    celebrities2,  // Row 3, Col 2
    celebrities5,  // Row 4, Col 2
    celebrities11, // Row 5, Col 2
    // Column 3 (thirdPart)
    celebrities8,  // Row 1, Col 3
    celebrities14, // Row 2, Col 3
    celebrities3,  // Row 3, Col 3
    celebrities6,  // Row 4, Col 3
  ];

  // Duplicate logos for seamless infinite scroll
  const logos = [whiteLogo, whiteLogo, whiteLogo, whiteLogo, whiteLogo, whiteLogo, whiteLogo, whiteLogo];
  const blackLogos = [blackLogo, blackLogo, blackLogo, blackLogo, blackLogo, blackLogo, blackLogo, blackLogo];

  return (
    <section id="celebrities" className="py-8 md:py-12 lg:py-16 bg-brand-primary dark:bg-brand-dark-bg transition-colors relative overflow-hidden w-full">
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
      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-charcoal dark:text-white">
            Celebrities I've <span className="text-highlight">Hosted</span>
          </h2>
        </div>

        <div className="px-2 sm:px-4 md:px-0">
          <ParallaxScroll images={images} />
        </div>
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

