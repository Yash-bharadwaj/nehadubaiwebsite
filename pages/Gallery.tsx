import React, { useState, useEffect } from 'react';
import SectionWrapper from '../components/layout/SectionWrapper';

// Import My Photos
import myPhoto1 from '../components/My Photos/my-photo-01.jpg';
import myPhoto2 from '../components/My Photos/my-photo-02.jpg';
import myPhoto3 from '../components/My Photos/my-photo-03.jpg';
import myPhoto4 from '../components/My Photos/my-photo-04.jpg';
import myPhoto5 from '../components/My Photos/my-photo-05.jpg';
import myPhoto6 from '../components/My Photos/my-photo-06.jpg';
import myPhoto7 from '../components/My Photos/my-photo-07.jpg';
import myPhoto8 from '../components/My Photos/my-photo-08.jpg';
import myPhoto9 from '../components/My Photos/my-photo-09.jpg';
import myPhoto10 from '../components/My Photos/my-photo-10.jpg';
import myPhoto11 from '../components/My Photos/my-photo-11.jpg';
import myPhoto12 from '../components/My Photos/my-photo-12.jpg';
import myPhoto13 from '../components/My Photos/my-photo-13.jpg';
import myPhoto14 from '../components/My Photos/my-photo-14.jpg';
import myPhoto15 from '../components/My Photos/my-photo-15.jpg';
import myPhoto16 from '../components/My Photos/my-photo-16.jpg';
import myPhoto17 from '../components/My Photos/my-photo-17.jpg';
import myPhoto18 from '../components/My Photos/my-photo-18.jpg';
import myPhoto19 from '../components/My Photos/my-photo-19.jpg';

// Import Wedding Photos
import wedding1 from '../components/weddings/wedding-01.jpg';
import wedding2 from '../components/weddings/wedding-02.jpg';
import wedding3 from '../components/weddings/wedding-03.jpg';
import wedding4 from '../components/weddings/wedding-04.jpg';
import wedding5 from '../components/weddings/wedding-05.jpg';
import wedding6 from '../components/weddings/wedding-06.jpg';
import wedding7 from '../components/weddings/wedding-07.jpg';
import wedding8 from '../components/weddings/wedding-08.jpg';
import wedding9 from '../components/weddings/wedding-09.jpg';
import wedding10 from '../components/weddings/wedding-10.jpg';
import wedding11 from '../components/weddings/wedding-11.jpg';

// Import Private Event Photos
import private1 from '../components/privateevents/private-event-01.jpg';
import private2 from '../components/privateevents/private-event-02.jpg';
import private3 from '../components/privateevents/private-event-03.jpg';
import private4 from '../components/privateevents/private-event-04.jpg';
import private5 from '../components/privateevents/private-event-05.jpg';
import private6 from '../components/privateevents/private-event-06.jpg';
import private7 from '../components/privateevents/private-event-07.jpg';
import private8 from '../components/privateevents/private-event-08.jpg';

// Import Community Event Photos
import community1 from '../components/Community Events/community-event-01.jpg';
import community2 from '../components/Community Events/community-event-02.jpg';
import community3 from '../components/Community Events/community-event-03.jpg';
import community4 from '../components/Community Events/community-event-04.jpg';
import community5 from '../components/Community Events/community-event-05.jpg';
import community6 from '../components/Community Events/community-event-06.jpg';
import community7 from '../components/Community Events/community-event-07.jpg';
import community8 from '../components/Community Events/community-event-08.jpg';

// Import Experience Photos
import experience1 from '../components/ExperiencePhotos/experience-01.jpg';
import experience2 from '../components/ExperiencePhotos/experience-02.jpg';
import experience3 from '../components/ExperiencePhotos/experience-03.jpg';
import experience4 from '../components/ExperiencePhotos/experience-04.jpg';
import experience5 from '../components/ExperiencePhotos/experience-05.jpg';
import experience6 from '../components/ExperiencePhotos/experience-06.jpg';
import experience7 from '../components/ExperiencePhotos/experience-07.jpg';
import experience8 from '../components/ExperiencePhotos/experience-08.jpg';
import experience9 from '../components/ExperiencePhotos/experience-09.jpg';
import experience10 from '../components/ExperiencePhotos/experience-10.jpg';
import experience11 from '../components/ExperiencePhotos/experience-11.jpg';
import experience12 from '../components/ExperiencePhotos/experience-12.jpg';
import experience13 from '../components/ExperiencePhotos/experience-13.jpg';
import experience14 from '../components/ExperiencePhotos/experience-14.jpg';
import experience15 from '../components/ExperiencePhotos/experience-15.jpg';
import experience16 from '../components/ExperiencePhotos/experience-16.jpg';
import experience17 from '../components/ExperiencePhotos/experience-17.jpg';
import experience18 from '../components/ExperiencePhotos/experience-18.jpg';
import experience19 from '../components/ExperiencePhotos/experience-19.jpg';
import experience21 from '../components/ExperiencePhotos/experience-21.jpg';
import experience22 from '../components/ExperiencePhotos/experience-22.jpg';

type Category = 'All' | 'My Photos' | 'Weddings' | 'Private Events' | 'Community Events' | 'Corporate';

interface GalleryImage {
  src: string;
  category: Category;
  alt: string;
}

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const allImages: GalleryImage[] = [
    // My Photos
    ...Array.from({ length: 19 }, (_, i) => ({
      src: [myPhoto1, myPhoto2, myPhoto3, myPhoto4, myPhoto5, myPhoto6, myPhoto7, myPhoto8, myPhoto9, myPhoto10, myPhoto11, myPhoto12, myPhoto13, myPhoto14, myPhoto15, myPhoto16, myPhoto17, myPhoto18, myPhoto19][i],
      category: 'My Photos' as Category,
      alt: `Neha Dixit Photo ${i + 1}`
    })),
    // Weddings
    ...Array.from({ length: 11 }, (_, i) => ({
      src: [wedding1, wedding2, wedding3, wedding4, wedding5, wedding6, wedding7, wedding8, wedding9, wedding10, wedding11][i],
      category: 'Weddings' as Category,
      alt: `Wedding Event ${i + 1}`
    })),
    // Private Events
    ...Array.from({ length: 8 }, (_, i) => ({
      src: [private1, private2, private3, private4, private5, private6, private7, private8][i],
      category: 'Private Events' as Category,
      alt: `Private Event ${i + 1}`
    })),
    // Community Events
    ...Array.from({ length: 8 }, (_, i) => ({
      src: [community1, community2, community3, community4, community5, community6, community7, community8][i],
      category: 'Community Events' as Category,
      alt: `Community Event ${i + 1}`
    })),
    // Corporate/Experience Photos
    ...Array.from({ length: 21 }, (_, i) => ({
      src: [experience1, experience2, experience3, experience4, experience5, experience6, experience7, experience8, experience9, experience10, experience11, experience12, experience13, experience14, experience15, experience16, experience17, experience18, experience19, experience21, experience22][i],
      category: 'Corporate' as Category,
      alt: `Corporate Event ${i + 1}`
    }))
  ];

  const filteredImages = selectedCategory === 'All' 
    ? allImages 
    : allImages.filter(img => img.category === selectedCategory);

  const categories: Category[] = ['All', 'My Photos', 'Weddings', 'Private Events', 'Community Events', 'Corporate'];

  useEffect(() => {
    // Preload images
    const imagePromises = allImages.map(img => {
      return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = resolve;
        image.onerror = reject;
        image.src = img.src;
      });
    });

    Promise.all(imagePromises)
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    
    const currentIndex = filteredImages.findIndex(img => img.src === selectedImage.src);
    let newIndex: number;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = currentIndex - 1 < 0 ? filteredImages.length - 1 : currentIndex - 1;
    }
    
    setSelectedImage(filteredImages[newIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage) {
        if (e.key === 'Escape') {
          closeLightbox();
        } else if (e.key === 'ArrowLeft') {
          const currentIndex = filteredImages.findIndex(img => img.src === selectedImage.src);
          const newIndex = currentIndex - 1 < 0 ? filteredImages.length - 1 : currentIndex - 1;
          setSelectedImage(filteredImages[newIndex]);
        } else if (e.key === 'ArrowRight') {
          const currentIndex = filteredImages.findIndex(img => img.src === selectedImage.src);
          const newIndex = (currentIndex + 1) % filteredImages.length;
          setSelectedImage(filteredImages[newIndex]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, filteredImages]);

  return (
    <main className="flex flex-col gap-0 min-h-screen">
      <SectionWrapper className="pt-32 pb-12 md:pb-16">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gold-50 via-amber-50 to-gold-100 dark:from-gold-950/40 dark:via-amber-950/40 dark:to-gold-900/40 border border-gold-200/50 dark:border-gold-800/30 rounded-full w-fit mx-auto mb-6">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-gold-500 to-amber-500 animate-pulse"></div>
            <span className="text-xs font-semibold bg-gradient-to-r from-gold-700 via-amber-700 to-gold-600 dark:from-gold-300 dark:via-amber-300 dark:to-gold-400 bg-clip-text text-transparent uppercase tracking-wider">Gallery</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 text-brand-charcoal dark:text-white transition-colors">
            Visual <span className="bg-gradient-to-r from-gold-600 via-amber-600 to-gold-500 dark:from-gold-400 dark:via-amber-400 dark:to-gold-300 bg-clip-text text-transparent">Journey</span>
          </h1>
          <p className="text-stone-600 dark:text-stone-400 text-lg max-w-2xl mx-auto transition-colors">
            A collection of memorable moments from events, celebrations, and special occasions
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium text-sm md:text-base transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-gold-500 to-amber-500 text-white shadow-lg shadow-gold-500/30 scale-105'
                  : 'bg-white dark:bg-brand-dark-surface text-stone-600 dark:text-stone-400 border-2 border-stone-200 dark:border-white/10 hover:border-gold-300 dark:hover:border-gold-700 hover:text-gold-600 dark:hover:text-gold-400'
              }`}
            >
              {category}
              {category !== 'All' && (
                <span className="ml-2 text-xs opacity-75">
                  ({allImages.filter(img => img.category === category).length})
                </span>
              )}
            </button>
          ))}
        </div>
      </SectionWrapper>

      {/* Gallery Grid */}
      <SectionWrapper className="pb-20 md:pb-24">
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-12 h-12 border-4 border-gold-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4 lg:gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={`${image.category}-${index}`}
                className="group relative aspect-square overflow-hidden rounded-xl md:rounded-2xl cursor-pointer bg-stone-100 dark:bg-stone-900"
                onClick={() => handleImageClick(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white text-xs font-medium uppercase tracking-wider">
                    {image.category}
                  </div>
                </div>
                {/* Zoom Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 dark:bg-stone-900/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100">
                  <svg className="w-6 h-6 text-gold-600 dark:text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <p className="text-stone-500 dark:text-stone-400 text-lg">No images found in this category.</p>
          </div>
        )}
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

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 dark:bg-black/98 flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 z-10"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation Buttons */}
          {filteredImages.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('prev');
                }}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 z-10"
                aria-label="Previous"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('next');
                }}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 z-10"
                aria-label="Next"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Image */}
          <div
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
            
            {/* Image Info */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 text-white text-sm font-medium">
              {selectedImage.category} • {filteredImages.findIndex(img => img.src === selectedImage.src) + 1} of {filteredImages.length}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Gallery;
