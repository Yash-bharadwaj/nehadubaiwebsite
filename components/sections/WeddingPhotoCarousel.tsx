import React, { useRef, useState, useEffect } from 'react';
import SectionWrapper from '../layout/SectionWrapper';

// Import all wedding photos except the banner ones (09, 10), About Neha image (05), and removed ones (07, 11)
import wedding1 from '../weddings/wedding-01.jpg';
import wedding2 from '../weddings/wedding-02.jpg';
import wedding3 from '../weddings/wedding-03.jpg';
import wedding4 from '../weddings/wedding-04.jpg';
import wedding6 from '../weddings/wedding-06.jpg';
import wedding8 from '../weddings/wedding-08.jpg';

const weddingPhotos = [
  wedding1, wedding2, wedding3, wedding4, wedding6, wedding8
];

const WeddingPhotoCarousel: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    // Check scrollability after a short delay to ensure images are loaded
    const timeoutId = setTimeout(() => {
      checkScrollability();
    }, 100);

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollability);
      window.addEventListener('resize', checkScrollability);
      
      // Also check when images load
      const images = container.querySelectorAll('img');
      images.forEach(img => {
        img.addEventListener('load', checkScrollability);
      });

      return () => {
        clearTimeout(timeoutId);
        container.removeEventListener('scroll', checkScrollability);
        window.removeEventListener('resize', checkScrollability);
        images.forEach(img => {
          img.removeEventListener('load', checkScrollability);
        });
      };
    }
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  return (
    <SectionWrapper className="py-16 md:py-20 bg-white dark:bg-brand-dark-bg">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-slate-900 dark:text-white">
          Wedding Gallery
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
          Capturing beautiful moments from weddings and celebrations
        </p>
      </div>

      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          disabled={!canScrollLeft}
          className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white dark:bg-brand-dark-surface border border-slate-200 dark:border-white/20 shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 ${
            canScrollLeft
              ? 'hover:bg-rose-500 hover:border-rose-500 hover:text-white text-slate-900 dark:text-white cursor-pointer opacity-100'
              : 'text-slate-400 dark:text-slate-600 cursor-not-allowed opacity-50'
          }`}
          aria-label="Scroll left"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          disabled={!canScrollRight}
          className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white dark:bg-brand-dark-surface border border-slate-200 dark:border-white/20 shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 ${
            canScrollRight
              ? 'hover:bg-rose-500 hover:border-rose-500 hover:text-white text-slate-900 dark:text-white cursor-pointer opacity-100'
              : 'text-slate-400 dark:text-slate-600 cursor-not-allowed opacity-50'
          }`}
          aria-label="Scroll right"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div
          ref={scrollContainerRef}
          className="overflow-x-auto pb-4 -mx-6 md:-mx-12 px-6 md:px-12 scrollbar-hide flex gap-6"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {weddingPhotos.map((photo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[35vw] xl:w-[28vw] group"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-brand-dark-surface">
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <img
                    src={photo}
                    alt={`Wedding Event ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WeddingPhotoCarousel;

