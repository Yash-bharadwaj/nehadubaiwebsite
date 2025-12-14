import React, { useRef, useState, useEffect } from 'react';
import SectionWrapper from '../layout/SectionWrapper';

const Testimonials: React.FC = () => {
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
    checkScrollability();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollability);
      window.addEventListener('resize', checkScrollability);
      return () => {
        container.removeEventListener('scroll', checkScrollability);
        window.removeEventListener('resize', checkScrollability);
      };
    }
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 380 + 24; // card width + gap
      scrollContainerRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 380 + 24; // card width + gap
      scrollContainerRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  return (
    <SectionWrapper>
      <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4 text-brand-charcoal dark:text-white transition-colors">Words From the Stage</h2>
          <p className="text-stone-500 dark:text-stone-400 transition-colors">Trusted by global brands and happy couples.</p>
      </div>
      
      <div className="relative">
        {/* Left Arrow */}
        {canScrollLeft && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white dark:bg-brand-dark-surface border border-stone-200 dark:border-white/20 shadow-lg flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 hover:text-white text-brand-charcoal dark:text-white transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Right Arrow */}
        {canScrollRight && (
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white dark:bg-brand-dark-surface border border-stone-200 dark:border-white/20 shadow-lg flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 hover:text-white text-brand-charcoal dark:text-white transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto pb-4 -mx-6 md:-mx-12 px-6 md:px-12 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex gap-6 min-w-max">
          {[
              { 
                  text: "Neha was absolutely fantastic. She understood the crowd immediately and kept the energy high throughout the entire night. Highly recommended for corporate galas.", 
                  author: "Mr. Martin Erath", 
                  role: "Head of Region, Tractebel, Engie" 
              },
              { 
                  text: "We were worried about keeping our wedding guests engaged during photos, but Neha worked her magic. She is funny, polite, and so classy.", 
                  author: "Ritika and Manan", 
                  role: "Wedding Couple" 
              },
              { 
                  text: "Professionalism at its peak. She arrived early, scripted the flow, and managed last-minute changes with a smile. A true partner in event success.", 
                  author: "NOUSHEEN MUKHTAR", 
                  role: "CEO, Impact Events and Publishers" 
              },
              { 
                  text: "Neha's ability to connect with the audience and maintain engagement throughout the event was exceptional. She brought professionalism and energy to our corporate gathering.", 
                  author: "Mr. Mark Edwards", 
                  role: "Group Head Operations, Mashreq Bank" 
              },
              { 
                  text: "Working with Neha was a delight. Her attention to detail and seamless execution made our event a huge success. She truly understands the art of hosting.", 
                  author: "CHIMOO ACHARYA", 
                  role: "Event Planner" 
              }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-white dark:bg-brand-dark-surface rounded-2xl border border-stone-100 dark:border-white/10 shadow-sm hover:shadow-xl hover:shadow-stone-200 dark:hover:shadow-black/50 transition-all duration-300 flex flex-col group min-w-[320px] max-w-[380px]">
            <div className="flex gap-1 text-gold-500 mb-6 text-sm">★★★★★</div>
            <p className="text-stone-600 dark:text-stone-300 mb-8 leading-relaxed italic flex-grow group-hover:text-brand-charcoal dark:group-hover:text-white transition-colors">"{item.text}"</p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-stone-200 dark:bg-white/10 flex items-center justify-center text-xs font-bold text-stone-700 dark:text-stone-300">
                  {item.author[0]}
              </div>
              <div>
                <div className="font-bold text-brand-charcoal dark:text-white text-sm transition-colors">{item.author}</div>
                <div className="text-xs text-stone-400 uppercase tracking-wide">{item.role}</div>
              </div>
            </div>
          </div>
        ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;