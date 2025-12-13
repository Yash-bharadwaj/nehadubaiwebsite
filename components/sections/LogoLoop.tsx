import React from 'react';

// Import all logos
import logo1 from '../logosNeha/1.png';
import logo4 from '../logosNeha/4.png';
import logo11 from '../logosNeha/11.png';
import logo12 from '../logosNeha/12.png';
import logo13 from '../logosNeha/13.png';
import logo14 from '../logosNeha/14.png';
import logo15 from '../logosNeha/15.png';
import logo16 from '../logosNeha/16.png';
import logo17 from '../logosNeha/17.png';
import logo18 from '../logosNeha/18.png';
import logo19 from '../logosNeha/19.png';
import logo20 from '../logosNeha/20.png';
import logo21 from '../logosNeha/21.png';
import logo22 from '../logosNeha/22.png';
import logo23 from '../logosNeha/23.png';
import ainaboodah from '../logosNeha/ainaboodah.png';
import bos from '../logosNeha/bos.png';
import damac from '../logosNeha/damac.png';
import emirates from '../logosNeha/emirates.png';
import emirates2 from '../logosNeha/emirates (2).png';
import ethiopian from '../logosNeha/ethiopian.png';
import gec from '../logosNeha/gec.png';
import premierInn from '../logosNeha/premierInn.png';

const logos = [
  { src: logo1, alt: 'Client 1' },
  { src: logo4, alt: 'Client 4' },
  { src: logo11, alt: 'Client 11' },
  { src: logo12, alt: 'Client 12' },
  { src: logo13, alt: 'Client 13' },
  { src: logo14, alt: 'Client 14' },
  { src: logo15, alt: 'Client 15' },
  { src: logo16, alt: 'Client 16' },
  { src: logo17, alt: 'Client 17' },
  { src: logo18, alt: 'Client 18' },
  { src: logo19, alt: 'Client 19' },
  { src: logo20, alt: 'Client 20' },
  { src: logo21, alt: 'Client 21' },
  { src: logo22, alt: 'Client 22' },
  { src: logo23, alt: 'Client 23' },
  { src: ainaboodah, alt: 'Ainaboodah' },
  { src: bos, alt: 'BOS' },
  { src: damac, alt: 'DAMAC' },
  { src: emirates, alt: 'Emirates' },
  { src: emirates2, alt: 'Emirates' },
  { src: ethiopian, alt: 'Ethiopian' },
  { src: gec, alt: 'GEC' },
  { src: premierInn, alt: 'Premier Inn' },
];

const LogoLoop: React.FC = () => {
  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  const logoWidth = 160;
  const gap = 64;
  const totalWidth = (logoWidth + gap) * logos.length;
  const animationDuration = logos.length * 2.5;

  return (
    <div className="relative z-20 overflow-hidden py-8 md:py-12">
      {/* Heading */}
      <div className="container mx-auto px-6 md:px-12 max-w-7xl mb-8 md:mb-12 text-center">
        <span className="text-gold-600 dark:text-gold-400 text-sm tracking-widest uppercase font-bold mb-2 block">Trusted Partners</span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-charcoal dark:text-white transition-colors">
          Brands I've Worked With
        </h2>
      </div>

      <div className="relative">
        {/* Fade gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-brand-primary dark:from-brand-dark-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-brand-primary dark:from-brand-dark-bg to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling container */}
        <div 
          className="flex gap-12 md:gap-16"
          style={{
            animation: `scroll ${animationDuration}s linear infinite`,
            width: 'fit-content',
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`logo-${index}`}
              className="flex-shrink-0 flex items-center justify-center group"
              style={{ width: `${logoWidth}px`, height: '80px' }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                onError={(e) => {
                  console.error('Failed to load logo:', logo.src, logo.alt);
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${totalWidth}px);
          }
        }
      `}</style>
    </div>
  );
};

export default LogoLoop;
