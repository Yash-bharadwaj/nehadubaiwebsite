import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import whiteLogo from '../nehaWebsiteVideos/NehaWhileLogo.png';
import blackLogo from '../nehaWebsiteVideos/NehaBlacklogo.png';

const CelebritiesMarquee: React.FC = () => {
  // Duplicate logos for seamless infinite scroll
  const logos = [whiteLogo, whiteLogo, whiteLogo, whiteLogo, whiteLogo, whiteLogo];
  const blackLogos = [blackLogo, blackLogo, blackLogo, blackLogo, blackLogo, blackLogo];

  return (
    <SectionWrapper id="celebrities-marquee" className="py-16 md:py-24 bg-brand-primary dark:bg-brand-dark-bg overflow-hidden border-y border-stone-200 dark:border-white/5">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-charcoal dark:text-white mb-4">
          Moments with <span className="text-highlight">Celebrities</span>
        </h2>
        <p className="text-stone-500 dark:text-stone-400 max-w-2xl mx-auto text-lg">
          Capturing special moments with renowned personalities from across the entertainment industry.
        </p>
      </div>

      {/* Infinite Scrolling Logo Marquee */}
      <div className="relative w-full overflow-hidden">
        {/* Light Mode Logos */}
        <div 
          className="flex dark:hidden"
          style={{
            animation: 'scroll-horizontal 30s linear infinite',
          }}
        >
          {logos.map((logo, index) => (
            <div
              key={`light-${index}`}
              className="flex-shrink-0 mx-8 md:mx-16"
            >
              <img
                src={logo}
                alt="Neha Dixit Logo"
                className="h-32 md:h-48 lg:h-64 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {logos.map((logo, index) => (
            <div
              key={`light-dup-${index}`}
              className="flex-shrink-0 mx-8 md:mx-16"
            >
              <img
                src={logo}
                alt="Neha Dixit Logo"
                className="h-32 md:h-48 lg:h-64 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>

        {/* Dark Mode Logos */}
        <div 
          className="flex hidden dark:flex"
          style={{
            animation: 'scroll-horizontal 30s linear infinite',
          }}
        >
          {blackLogos.map((logo, index) => (
            <div
              key={`dark-${index}`}
              className="flex-shrink-0 mx-8 md:mx-16"
            >
              <img
                src={logo}
                alt="Neha Dixit Logo"
                className="h-32 md:h-48 lg:h-64 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {blackLogos.map((logo, index) => (
            <div
              key={`dark-dup-${index}`}
              className="flex-shrink-0 mx-8 md:mx-16"
            >
              <img
                src={logo}
                alt="Neha Dixit Logo"
                className="h-32 md:h-48 lg:h-64 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
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
    </SectionWrapper>
  );
};

export default CelebritiesMarquee;

