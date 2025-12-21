import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

// Import banner images
import banner1 from '../ExperiencePhotos/experience-09.jpg';
import banner2 from '../ExperiencePhotos/experience-21.jpg';
import banner3 from '../ExperiencePhotos/experience-22.jpg';

const banners = [
  { image: banner1, title: 'Corporate Excellence', subtitle: 'Elevating Business Events' },
  { image: banner2, title: 'Professional Hosting', subtitle: 'Where Expertise Meets Impact' },
  { image: banner3, title: 'Corporate Events', subtitle: 'Crafting Unforgettable Experiences' }
];

const CorporateBannerSlider: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    loop: true,
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
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

  return (
    <section className="relative w-full pt-32 overflow-hidden bg-white dark:bg-slate-950">
      <div className="w-full overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {banners.map((banner, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full min-w-0"
            >
              <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center overflow-hidden">
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-full"
                  style={{ 
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                    display: 'block'
                  }}
                />
                {/* Heading Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 flex items-center justify-center">
                  <div className="text-center px-6 max-w-4xl">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white mb-4 drop-shadow-lg">
                      {banner.title}
                    </h2>
                    <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-light tracking-wide">
                      {banner.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-2 rounded-full transition-all ${
              selectedIndex === index
                ? 'bg-orange-500 dark:bg-orange-400 w-8'
                : 'bg-white/50 dark:bg-white/30 w-2'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default CorporateBannerSlider;

