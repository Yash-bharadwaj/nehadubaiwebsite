import React, { useRef, useState, useEffect } from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import PersonaVideoCarousel from './PersonaVideoCarousel';

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
    // Check scrollability after a short delay to ensure layout is complete
    const timeoutId = setTimeout(() => {
      checkScrollability();
    }, 100);

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollability);
      window.addEventListener('resize', checkScrollability);
      return () => {
        clearTimeout(timeoutId);
        container.removeEventListener('scroll', checkScrollability);
        window.removeEventListener('resize', checkScrollability);
      };
    }
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 400 + 32; // card width + gap
      scrollContainerRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 400 + 32; // card width + gap
      scrollContainerRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };


  return (
    <>
      {/* The Persona Section with Video Carousel - Moved to Top */}
      <PersonaVideoCarousel />

      {/* Testimonials Section */}
      <SectionWrapper className="pt-8 md:pt-10 pb-20 md:pb-24 bg-gradient-to-br from-stone-50 via-white to-stone-50/50 dark:from-slate-950 dark:via-brand-dark-bg dark:to-slate-900 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute top-20 left-10 w-64 h-64">
          <svg viewBox="0 0 200 200" className="w-full h-full text-gold-500">
            <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
            <path d="M100,20 Q120,60 100,100 Q80,60 100,20" fill="currentColor" opacity="0.2"/>
            <path d="M100,180 Q120,140 100,100 Q80,140 100,180" fill="currentColor" opacity="0.2"/>
          </svg>
        </div>
        <div className="absolute bottom-20 right-10 w-80 h-80">
          <svg viewBox="0 0 200 200" className="w-full h-full text-gold-500">
            <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
            <path d="M100,20 Q120,60 100,100 Q80,60 100,20" fill="currentColor" opacity="0.2"/>
            <path d="M100,180 Q120,140 100,100 Q80,140 100,180" fill="currentColor" opacity="0.2"/>
          </svg>
        </div>
      </div>

      <div className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gold-50 via-amber-50 to-gold-100 dark:from-gold-950/40 dark:via-amber-950/40 dark:to-gold-900/40 border border-gold-200/50 dark:border-gold-800/30 rounded-full w-fit mx-auto mb-6">
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-gold-500 to-amber-500 animate-pulse"></div>
          <span className="text-xs font-semibold bg-gradient-to-r from-gold-700 via-amber-700 to-gold-600 dark:from-gold-300 dark:via-amber-300 dark:to-gold-400 bg-clip-text text-transparent uppercase tracking-wider">Testimonials</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 text-brand-charcoal dark:text-white transition-colors">
          Words From the <span className="bg-gradient-to-r from-gold-600 via-amber-600 to-gold-500 dark:from-gold-400 dark:via-amber-400 dark:to-gold-300 bg-clip-text text-transparent">Stage</span>
        </h2>
        <p className="text-stone-600 dark:text-stone-400 text-lg max-w-2xl mx-auto transition-colors">
          Trusted by global brands and happy couples worldwide
        </p>
      </div>
      
      <div className="relative z-10">
        {/* Mobile Navigation Arrows - Only visible on mobile */}
        <button
          onClick={scrollLeft}
          disabled={!canScrollLeft}
          className={`md:hidden absolute left-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white dark:bg-brand-dark-surface border-2 border-gold-200/50 dark:border-gold-800/30 shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 ${
            canScrollLeft
              ? 'hover:bg-gradient-to-r hover:from-gold-500 hover:to-amber-500 hover:border-gold-500 hover:text-white text-brand-charcoal dark:text-white cursor-pointer opacity-100'
              : 'text-stone-300 dark:text-stone-600 cursor-not-allowed opacity-40'
          }`}
          aria-label="Scroll left"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={scrollRight}
          disabled={!canScrollRight}
          className={`md:hidden absolute right-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white dark:bg-brand-dark-surface border-2 border-gold-200/50 dark:border-gold-800/30 shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 ${
            canScrollRight
              ? 'hover:bg-gradient-to-r hover:from-gold-500 hover:to-amber-500 hover:border-gold-500 hover:text-white text-brand-charcoal dark:text-white cursor-pointer opacity-100'
              : 'text-stone-300 dark:text-stone-600 cursor-not-allowed opacity-40'
          }`}
          aria-label="Scroll right"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Mobile: Horizontal Scroll Container */}
        <div 
          ref={scrollContainerRef}
          className="md:hidden overflow-x-auto pb-4 -mx-6 md:-mx-12 px-6 md:px-12 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex gap-8 min-w-max">
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
              <div 
                key={i} 
                className="group relative p-10 bg-gradient-to-br from-white via-stone-50/30 to-white dark:from-brand-dark-surface dark:via-slate-900/50 dark:to-brand-dark-surface rounded-3xl border-2 border-stone-100/50 dark:border-white/10 shadow-lg hover:shadow-2xl hover:shadow-gold-500/10 dark:hover:shadow-gold-900/20 transition-all duration-500 flex flex-col min-w-[360px] max-w-[400px] hover:border-gold-300/50 dark:hover:border-gold-700/30 hover:-translate-y-2"
              >
                {/* Decorative Quote Mark */}
                <div className="absolute top-6 left-6 text-gold-400/20 dark:text-gold-600/20 text-7xl font-serif leading-none -z-0">
                  "
                </div>

                {/* Premium Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-50/0 via-amber-50/0 to-gold-50/0 group-hover:from-gold-50/30 group-hover:via-amber-50/20 group-hover:to-gold-50/30 dark:group-hover:from-gold-950/20 dark:group-hover:via-amber-950/10 dark:group-hover:to-gold-950/20 rounded-3xl transition-all duration-500 pointer-events-none"></div>

                {/* Decorative Corner Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold-100/0 to-transparent dark:from-gold-900/0 group-hover:from-gold-100/20 group-hover:to-transparent dark:group-hover:from-gold-900/20 rounded-bl-full transition-all duration-500"></div>

                <div className="relative z-10">
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-6 text-lg">
                    {[...Array(5)].map((_, idx) => (
                      <svg key={idx} className="w-5 h-5 text-gold-500 dark:text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-stone-700 dark:text-stone-200 mb-10 leading-relaxed text-base group-hover:text-brand-charcoal dark:group-hover:text-white transition-colors duration-300 flex-grow font-light italic relative z-10">
                    "{item.text}"
                  </p>

                  {/* Author Section */}
                  <div className="flex items-center gap-4 pt-6 border-t border-stone-200/50 dark:border-white/10">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold-400 via-amber-400 to-gold-500 dark:from-gold-600 dark:via-amber-600 dark:to-gold-700 flex items-center justify-center text-lg font-bold text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {item.author[0]}
                      </div>
                      <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-gold-400 to-amber-500 opacity-0 group-hover:opacity-30 blur transition-opacity duration-300"></div>
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-brand-charcoal dark:text-white text-base transition-colors group-hover:bg-gradient-to-r group-hover:from-gold-600 group-hover:to-amber-600 dark:group-hover:from-gold-400 dark:group-hover:to-amber-400 group-hover:bg-clip-text group-hover:text-transparent duration-300">
                        {item.author}
                      </div>
                      <div className="text-xs text-stone-500 dark:text-stone-400 uppercase tracking-wider mt-1 font-medium">
                        {item.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          ))}
          </div>
        </div>

        {/* Desktop: Grid Layout - 2 columns on md, 3 on lg */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
              <div 
                key={i} 
                className="group relative p-10 bg-gradient-to-br from-white via-stone-50/30 to-white dark:from-brand-dark-surface dark:via-slate-900/50 dark:to-brand-dark-surface rounded-3xl border-2 border-stone-100/50 dark:border-white/10 shadow-lg hover:shadow-2xl hover:shadow-gold-500/10 dark:hover:shadow-gold-900/20 transition-all duration-500 flex flex-col hover:border-gold-300/50 dark:hover:border-gold-700/30 hover:-translate-y-2"
              >
                {/* Decorative Quote Mark */}
                <div className="absolute top-6 left-6 text-gold-400/20 dark:text-gold-600/20 text-7xl font-serif leading-none -z-0">
                  "
                </div>

                {/* Premium Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-50/0 via-amber-50/0 to-gold-50/0 group-hover:from-gold-50/30 group-hover:via-amber-50/20 group-hover:to-gold-50/30 dark:group-hover:from-gold-950/20 dark:group-hover:via-amber-950/10 dark:group-hover:to-gold-950/20 rounded-3xl transition-all duration-500 pointer-events-none"></div>

                {/* Decorative Corner Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold-100/0 to-transparent dark:from-gold-900/0 group-hover:from-gold-100/20 group-hover:to-transparent dark:group-hover:from-gold-900/20 rounded-bl-full transition-all duration-500"></div>

                <div className="relative z-10">
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-6 text-lg">
                    {[...Array(5)].map((_, idx) => (
                      <svg key={idx} className="w-5 h-5 text-gold-500 dark:text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-stone-700 dark:text-stone-200 mb-10 leading-relaxed text-base group-hover:text-brand-charcoal dark:group-hover:text-white transition-colors duration-300 flex-grow font-light italic relative z-10">
                    "{item.text}"
                  </p>

                  {/* Author Section */}
                  <div className="flex items-center gap-4 pt-6 border-t border-stone-200/50 dark:border-white/10">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold-400 via-amber-400 to-gold-500 dark:from-gold-600 dark:via-amber-600 dark:to-gold-700 flex items-center justify-center text-lg font-bold text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {item.author[0]}
                      </div>
                      <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-gold-400 to-amber-500 opacity-0 group-hover:opacity-30 blur transition-opacity duration-300"></div>
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-brand-charcoal dark:text-white text-base transition-colors group-hover:bg-gradient-to-r group-hover:from-gold-600 group-hover:to-amber-600 dark:group-hover:from-gold-400 dark:group-hover:to-amber-400 group-hover:bg-clip-text group-hover:text-transparent duration-300">
                        {item.author}
                      </div>
                      <div className="text-xs text-stone-500 dark:text-stone-400 uppercase tracking-wider mt-1 font-medium">
                        {item.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
    </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="py-20 md:py-24 bg-gradient-to-br from-gold-50 via-amber-50 to-gold-100 dark:from-gold-950/40 dark:via-amber-950/40 dark:to-gold-900/40 relative overflow-hidden">
        <div className="text-center max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 text-brand-charcoal dark:text-white transition-colors">
            Ready to Create <span className="bg-gradient-to-r from-gold-600 via-amber-600 to-gold-500 dark:from-gold-400 dark:via-amber-400 dark:to-gold-300 bg-clip-text text-transparent">Memorable Moments</span>?
          </h2>
          <p className="text-lg md:text-xl text-stone-700 dark:text-stone-300 mb-8 leading-relaxed">
            Let's bring your vision to life with elegance, energy, and expertise. Get in touch to discuss your event.
          </p>
          <button
            onClick={() => {
              const phoneNumber = '+971552574806';
              const message = encodeURIComponent('Hello! I\'m interested in booking Neha for my event. 🎯');
              window.open(`https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
            }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-600 via-red-600 to-orange-500 dark:from-orange-500 dark:via-red-500 dark:to-orange-600 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 hover:scale-105 group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.408 3.488 2.241 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.889-9.881-9.889-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.984zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.47-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.865 1.213 3.063c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span>Let's Get Started</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
              <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.5A60.517 60.517 0 003.478 2.405z" />
            </svg>
          </button>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Testimonials;