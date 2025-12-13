import React, { useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import SectionWrapper from '../layout/SectionWrapper';

// Import videos - Keep only 7 smallest videos
import video1 from '../nehaWebsiteVideos/showcase-01.mp4';
import video2 from '../nehaWebsiteVideos/showcase-02.mp4';
import video3 from '../nehaWebsiteVideos/showcase-03.mp4';
import video4 from '../nehaWebsiteVideos/showcase-04.mp4';
import video5 from '../nehaWebsiteVideos/showcase-05.mp4';
import video6 from '../nehaWebsiteVideos/showcase-06.mp4';
import video7 from '../nehaWebsiteVideos/showcase-07.mp4';

const videoSources = [
  video1, video2, video3, video4, video5, video6, video7
];

const categories = ['Corporate', 'Wedding', 'Launch', 'Awards', 'Social', 'Festival', 'Event'];

const videos = videoSources.map((src, index) => ({
  id: index + 1,
  src: src,
  title: `Event Showcase ${index + 1}`,
  category: categories[index % categories.length],
}));

// Duplicate videos for seamless infinite scroll
const duplicatedVideos = [...videos, ...videos, ...videos];

const VideoCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false, // We'll handle looping manually for seamless infinite scroll
    skipSnaps: false,
    dragFree: false,
  });

  const [playingVideos, setPlayingVideos] = useState<{ [key: string]: boolean }>({});
  const [mutedVideos, setMutedVideos] = useState<{ [key: string]: boolean }>({});
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  // Initialize scroll position to middle set for seamless infinite scroll
  useEffect(() => {
    if (!emblaApi) return;

    const container = emblaApi.containerNode() as HTMLElement;
    if (!container) return;

    // Calculate card width
    const getCardWidth = () => window.innerWidth >= 768 ? 320 : 280;
    const gap = 24;
    const cardWithGap = getCardWidth() + gap;
    const startPosition = videos.length * cardWithGap;

    // Set initial scroll position to middle set
    const initScroll = () => {
      if (container.scrollWidth > container.clientWidth) {
        container.scrollLeft = startPosition;
      } else {
        // Wait for layout
        setTimeout(initScroll, 100);
      }
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTimeout(initScroll, 200);
      });
    });

    // Handle infinite scroll on manual scroll
    const handleScroll = () => {
      const getCardWidth = () => window.innerWidth >= 768 ? 320 : 280;
      const gap = 24;
      const cardWithGap = getCardWidth() + gap;
      const middleStartPosition = videos.length * cardWithGap;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const currentScroll = container.scrollLeft;
      const threshold = 100;

      // If scrolled to the end, jump to middle section
      if (currentScroll >= maxScroll - threshold) {
        container.style.scrollBehavior = 'auto';
        container.scrollLeft = middleStartPosition;
        setTimeout(() => {
          container.style.scrollBehavior = 'smooth';
        }, 10);
      }
      // If scrolled to the beginning, jump to middle section
      else if (currentScroll <= threshold) {
        container.style.scrollBehavior = 'auto';
        container.scrollLeft = middleStartPosition;
        setTimeout(() => {
          container.style.scrollBehavior = 'smooth';
        }, 10);
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [emblaApi]);

  // Auto-scroll functionality - smooth continuous scroll with infinite loop
  useEffect(() => {
    if (!emblaApi) return;

    let scrollInterval: NodeJS.Timeout;
    let isPaused = false;
    
    const getCardWidth = () => window.innerWidth >= 768 ? 320 : 280;
    const gap = 24;
    const cardWithGap = getCardWidth() + gap;
    const middleStartPosition = videos.length * cardWithGap;
    
    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (!isPaused && emblaApi) {
          const container = emblaApi.containerNode() as HTMLElement;
          if (container && container.scrollWidth > container.clientWidth) {
            const currentScroll = container.scrollLeft;
            const maxScroll = container.scrollWidth - container.clientWidth;
            
            // If near the end, jump to middle section seamlessly
            if (currentScroll >= maxScroll - 10) {
              container.style.scrollBehavior = 'auto';
              container.scrollLeft = middleStartPosition;
              setTimeout(() => {
                container.style.scrollBehavior = 'smooth';
              }, 10);
            } 
            // If near the beginning, jump to middle section seamlessly
            else if (currentScroll <= 10) {
              container.style.scrollBehavior = 'auto';
              container.scrollLeft = middleStartPosition;
              setTimeout(() => {
                container.style.scrollBehavior = 'smooth';
              }, 10);
            } 
            // Normal smooth scroll
            else {
              container.scrollLeft += 0.5;
            }
          }
        }
      }, 16); // ~60fps for smooth scrolling
    };

    // Start after a short delay to ensure carousel is ready
    const initTimer = setTimeout(() => {
      startAutoScroll();
    }, 1000);

    // Pause on user interaction
    const handlePointerDown = () => {
      isPaused = true;
      if (scrollInterval) clearInterval(scrollInterval);
      setTimeout(() => {
        isPaused = false;
        startAutoScroll();
      }, 5000);
    };

    emblaApi.on('pointerDown', handlePointerDown);

    return () => {
      clearTimeout(initTimer);
      if (scrollInterval) clearInterval(scrollInterval);
      emblaApi.off('pointerDown', handlePointerDown);
    };
  }, [emblaApi]);

  // Auto-play all videos on mount
  useEffect(() => {
    const playAllVideos = () => {
      Object.entries(videoRefs.current).forEach(([uniqueId, video]) => {
        if (video) {
          video.muted = true;
          video.loop = true;
          setMutedVideos(prev => ({ ...prev, [uniqueId]: true }));
          
          video.play().then(() => {
            setPlayingVideos(prev => ({ ...prev, [uniqueId]: true }));
          }).catch(() => {
            // Autoplay might be blocked
          });
        }
      });
    };

    const timer = setTimeout(playAllVideos, 500);
    return () => clearTimeout(timer);
  }, []);

  const handlePlayPause = (uniqueId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const video = videoRefs.current[uniqueId];
    if (!video) return;

    if (video.paused) {
      video.play().then(() => {
        setPlayingVideos(prev => ({ ...prev, [uniqueId]: true }));
      });
    } else {
      video.pause();
      setPlayingVideos(prev => ({ ...prev, [uniqueId]: false }));
    }
  };

  const handleMuteToggle = (uniqueId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const video = videoRefs.current[uniqueId];
    if (!video) return;
    
    // Get current state (default to true if undefined, meaning muted)
    const currentMutedState = mutedVideos[uniqueId] !== false;
    const newMutedState = !currentMutedState;
    
    // Update both video element and state
    video.muted = newMutedState;
    setMutedVideos(prev => ({ ...prev, [uniqueId]: newMutedState }));
  };

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  return (
    <div id="showreel" className="py-12 bg-brand-primary dark:bg-brand-dark-bg transition-colors overflow-hidden border-b border-stone-200 dark:border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl mb-10 flex flex-col md:flex-row justify-between items-center md:items-end gap-6 relative">
        <div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-charcoal dark:text-white transition-colors">
            Experience the <br />
            <span className="text-highlight">Magic</span> Unfold
          </h2>
        </div>
        
        {/* Navigation Buttons */}
        <div className="flex gap-4 z-20">
          <button 
            onClick={scrollPrev}
            className="w-12 h-12 rounded-full border-2 border-stone-300 dark:border-white/30 bg-white/80 dark:bg-brand-dark-surface/80 backdrop-blur-sm flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 hover:text-white text-brand-charcoal dark:text-white transition-all shadow-lg hover:shadow-xl active:scale-95"
            aria-label="Scroll Left"
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button 
            onClick={scrollNext}
            className="w-12 h-12 rounded-full border-2 border-stone-300 dark:border-white/30 bg-white/80 dark:bg-brand-dark-surface/80 backdrop-blur-sm flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 hover:text-white text-brand-charcoal dark:text-white transition-all shadow-lg hover:shadow-xl active:scale-95"
            aria-label="Scroll Right"
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="w-full overflow-hidden">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 px-6 md:px-12 pb-8 no-scrollbar">
            {duplicatedVideos.map((video, index) => {
              const uniqueId = `${video.id}-${index}`;
              const isPlaying = playingVideos[uniqueId] || false;
              const isMuted = mutedVideos[uniqueId] !== false;
              
              return (
                <div
                  key={uniqueId}
                  className="flex-shrink-0 w-[280px] md:w-[320px] aspect-[9/16] relative rounded-2xl overflow-hidden cursor-pointer group snap-center shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  {/* Video Element */}
                  <video
                    ref={(el) => {
                      if (el) {
                        videoRefs.current[uniqueId] = el;
                      } else {
                        // Clean up ref when element is removed
                        delete videoRefs.current[uniqueId];
                      }
                    }}
                    src={video.src}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loop
                    muted={isMuted}
                    autoPlay
                    playsInline
                  />

                  {/* Video Controls Overlay - Shows on hover */}
                  <div className="absolute inset-0 flex flex-col justify-end pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    {/* Controls Bar */}
                    <div className="w-full bg-gradient-to-t from-black/80 to-transparent p-3 flex items-center justify-between pointer-events-auto">
                      {/* Left side - Play/Pause */}
                      <button
                        onClick={(e) => handlePlayPause(uniqueId, e)}
                        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 transition-all duration-300"
                        type="button"
                        aria-label={isPlaying ? "Pause video" : "Play video"}
                      >
                        {isPlaying ? (
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                            <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-0.5"></div>
                        )}
                      </button>

                      {/* Right side - Mute/Unmute */}
                      <button
                        onClick={(e) => handleMuteToggle(uniqueId, e)}
                        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 transition-all duration-300"
                        type="button"
                        aria-label={isMuted ? "Unmute video" : "Mute video"}
                      >
                        {isMuted ? (
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                            <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.53 7.47a.75.75 0 00-1.06 1.06 3 3 0 010 6.94.75.75 0 001.06 1.06 4.5 4.5 0 000-9.06z" />
                            <path d="M20.65 5.35a.75.75 0 00-1.06 1.06 6 6 0 010 11.18.75.75 0 001.06 1.06 7.5 7.5 0 000-13.3z" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                            <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM17.78 9.22a.75.75 0 10-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 001.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L20.56 12l1.72-1.72a.75.75 0 00-1.06-1.06L19.5 10.94l-1.72-1.72z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCarousel;
