import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

// Import emcee moment images
import moment1 from '../emceemoments/emcee-moment-01.jpeg';
import moment2 from '../emceemoments/emcee-moment-02.jpeg';
import moment4 from '../emceemoments/emcee-moment-04.jpeg';
import moment5 from '../emceemoments/emcee-moment-05.jpeg';
import moment6 from '../emceemoments/emcee-moment-06.jpeg';
import moment7 from '../emceemoments/emcee-moment-07.jpeg';
import moment8 from '../emceemoments/emcee-moment-08.jpeg';
import moment9 from '../emceemoments/emcee-moment-09.jpeg';
import moment10 from '../emceemoments/emcee-moment-10.jpeg';

const slides = [
  {
    image: moment1,
    title: 'Corporate Excellence',
    subtitle: 'Leading high-stakes corporate events and conferences',
  },
  {
    image: moment2,
    title: 'Elegant Weddings',
    subtitle: 'Creating magical moments for the most special days',
  },
  {
    image: moment4,
    title: 'Celebrity Engagements',
    subtitle: 'Working alongside international stars',
  },
  {
    image: moment5,
    title: 'Community Events',
    subtitle: 'Bringing energy to public celebrations',
  },
  {
    image: moment6,
    title: 'Private Gatherings',
    subtitle: 'Intimate celebrations with personal touch',
  },
  {
    image: moment7,
    title: 'International Events',
    subtitle: 'Hosting across the UAE and globally',
  },
  {
    image: moment8,
    title: 'Brand Launches',
    subtitle: 'Excitement and product focus',
  },
  {
    image: moment9,
    title: 'Cultural Festivals',
    subtitle: 'Celebrating diversity and tradition',
  },
  {
    image: moment10,
    title: 'Exclusive Functions',
    subtitle: 'Premium events with sophistication',
  },
];

const AboutPhotoSlider: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    loop: true,
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    emblaApi.on('select', onSelect);
    onSelect();

    // Auto-play functionality
    const autoplay = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 5000);

    return () => {
      emblaApi.off('select', onSelect);
      clearInterval(autoplay);
    };
  }, [emblaApi]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();
  const scrollTo = (index: number) => emblaApi?.scrollTo(index);

  return (
    <div className="w-full relative pt-32 pb-0 bg-brand-primary dark:bg-gradient-to-b dark:from-brand-dark-bg dark:via-brand-dark-surface dark:to-brand-dark-bg overflow-hidden transition-colors">
      {/* Gradient Overlays - Light & Dark Mode */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-[40%] h-[40%] bg-rose-100/25 dark:bg-purple-900/20 rounded-full blur-[120px] transition-opacity"></div>
        <div className="absolute top-[30%] right-0 w-[35%] h-[35%] bg-gold-200/20 dark:bg-gold-600/10 rounded-full blur-[120px] transition-opacity"></div>
        <div className="absolute bottom-0 left-[20%] w-[30%] h-[30%] bg-orange-100/20 dark:bg-blue-900/15 rounded-full blur-[100px] transition-opacity"></div>
      </div>

      {/* Professional Background Pattern - Light & Dark Mode */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.1) 1px, transparent 0)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.015] dark:opacity-[0.025]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      <div className="relative z-10">
        {/* Full Width Banner Slider */}
        <div className="relative w-full h-[70vh] min-h-[600px] max-h-[800px] overflow-hidden">
          <div className="overflow-hidden h-full" ref={emblaRef}>
            <div className="flex h-full">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full h-full relative"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    {/* Dark Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30"></div>
                  </div>

                  {/* Banner Text Overlay */}
                  <div className="absolute inset-0 flex items-end justify-center pb-16 md:pb-24 px-6 z-10">
                    <div className="text-center max-w-4xl mx-auto">
                      <span className="text-gold-400 text-sm md:text-base tracking-widest uppercase font-bold inline-block mb-4">
                        Gallery
                      </span>
                      <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white mb-4 leading-tight">
                        {slide.title}
                      </h2>
                      <p className="text-stone-200 text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto">
                        {slide.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 hover:text-white text-white transition-all shadow-xl z-20"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 hover:text-white text-white transition-all shadow-xl z-20"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Dots Indicator - Bottom Center */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-2 rounded-full transition-all ${
                  selectedIndex === index
                    ? 'bg-gold-500 w-8'
                    : 'bg-white/40 w-2 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="absolute bottom-8 right-8 z-20">
          <button
            onClick={() => {
              const phoneNumber = '+971552574806';
              const message = encodeURIComponent("Hello! I'm interested in booking Neha for an event.");
              window.open(`https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
            }}
            className="px-6 py-3 bg-gold-500 hover:bg-gold-400 text-white rounded-full font-semibold shadow-xl shadow-gold-500/30 hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            Let's Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPhotoSlider;
