import React, { useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import SectionWrapper from '../layout/SectionWrapper';

// Import persona testimonial videos
import video1 from '../nehaWebsiteVideos/testimonial-murali-krishnan.mp4';
import video2 from '../nehaWebsiteVideos/testimonial-ilhaam-maniar.mp4';
import video3 from '../nehaWebsiteVideos/testimonial-ashok-kalra.mp4';
import video4 from '../nehaWebsiteVideos/testimonial1.mp4';
import video5 from '../nehaWebsiteVideos/masreeqtestimonial.mp4';

const personaVideos = [
  { 
    id: 1, 
    src: video4, 
    name: 'Rohit Roy',
    designation: 'Actor/Director'
  },
  { 
    id: 2, 
    src: video5, 
    name: 'Masreeq Leadership Team',
    designation: 'Mashreq Bank'
  },
  { 
    id: 3, 
    src: video1, 
    name: 'Mr. Murali Krishnan',
    designation: 'CHRO, Jumbo Group'
  },
  { 
    id: 4, 
    src: video2, 
    name: 'Ilhaam Maniar',
    designation: 'Manager - CMBC, CROWE UAE'
  },
  { 
    id: 5, 
    src: video3, 
    name: 'Mr. Ashok Kalra',
    designation: 'Owner, Lavang Fine Dining Restaurant, Downtown Dubai'
  },
];

const PersonaVideoCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    skipSnaps: false,
    slidesToScroll: 1,
  });

  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [mutedVideos, setMutedVideos] = useState<{ [key: number]: boolean }>({});
  const [selectedIndex, setSelectedIndex] = useState(0);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});
  const mutedVideosRef = useRef<{ [key: number]: boolean }>({});

  // Keep ref in sync with state
  useEffect(() => {
    mutedVideosRef.current = mutedVideos;
  }, [mutedVideos]);

  // Track selected slide and auto-play video
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      const currentVideoId = personaVideos[emblaApi.selectedScrollSnap()].id;
      const video = videoRefs.current[currentVideoId];
      
      if (video) {
        // Pause all videos first
        Object.values(videoRefs.current).forEach(v => {
          if (v && v !== video && v instanceof HTMLVideoElement) {
            v.pause();
          }
        });
        
        // Preserve mute state for this video
        const shouldBeMuted = mutedVideosRef.current[currentVideoId] !== false;
        video.muted = shouldBeMuted;
        video.loop = true;
        
        video.play().then(() => {
          setPlayingVideo(currentVideoId);
        }).catch((err) => {
          console.warn('Video autoplay failed:', err);
        });
      }
    };

    emblaApi.on('select', onSelect);
    onSelect(); // Initial call

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  // Pause other videos when a new one starts playing
  useEffect(() => {
    Object.entries(videoRefs.current).forEach(([id, video]) => {
      if (video && Number(id) !== playingVideo && video instanceof HTMLVideoElement) {
        video.pause();
      }
    });
  }, [playingVideo]);

  const handlePlayPause = (videoId: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const video = videoRefs.current[videoId];
    if (!video) return;

    if (video.paused) {
      video.play().then(() => {
        setPlayingVideo(videoId);
      });
    } else {
      video.pause();
      setPlayingVideo(null);
    }
  };

  const handleMuteToggle = (videoId: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const video = videoRefs.current[videoId];
    if (!video) return;
    
    const currentMutedState = mutedVideos[videoId] !== false;
    const newMutedState = !currentMutedState;
    
    video.muted = newMutedState;
    setMutedVideos(prev => ({ ...prev, [videoId]: newMutedState }));
  };

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  return (
    <SectionWrapper className="pt-16 md:pt-20 pb-8 md:pb-10 bg-gradient-to-br from-stone-50 via-white to-stone-50/50 dark:from-slate-950 dark:via-brand-dark-bg dark:to-slate-900 relative overflow-hidden">
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

      {/* Video Carousel Section with Heading */}
      <div className="relative z-10 max-w-7xl mx-auto mb-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gold-50 via-amber-50 to-gold-100 dark:from-gold-950/40 dark:via-amber-950/40 dark:to-gold-900/40 border border-gold-200/50 dark:border-gold-800/30 rounded-full w-fit mx-auto mb-6">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-gold-500 to-amber-500 animate-pulse"></div>
            <span className="text-xs font-semibold bg-gradient-to-r from-gold-700 via-amber-700 to-gold-600 dark:from-gold-300 dark:via-amber-300 dark:to-gold-400 bg-clip-text text-transparent uppercase tracking-wider">Video Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 text-brand-charcoal dark:text-white transition-colors">
            Hear From <span className="bg-gradient-to-r from-gold-600 via-amber-600 to-gold-500 dark:from-gold-400 dark:via-amber-400 dark:to-gold-300 bg-clip-text text-transparent">Clients</span>
          </h2>
          <p className="text-stone-600 dark:text-stone-400 text-lg max-w-2xl mx-auto">
            Real experiences from those who've worked with Neha
          </p>
        </div>

        {/* Video Carousel */}
        <div className="relative">
          {/* Navigation Buttons - Positioned on sides */}
          <button 
            onClick={scrollPrev}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full border-2 border-gold-200/50 dark:border-gold-800/30 bg-white dark:bg-brand-dark-surface shadow-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-gold-500 hover:to-amber-500 hover:border-gold-500 hover:text-white text-brand-charcoal dark:text-white transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Previous video"
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button 
            onClick={scrollNext}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full border-2 border-gold-200/50 dark:border-gold-800/30 bg-white dark:bg-brand-dark-surface shadow-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-gold-500 hover:to-amber-500 hover:border-gold-500 hover:text-white text-brand-charcoal dark:text-white transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Next video"
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

        {/* Carousel Container */}
        <div className="overflow-hidden px-12 md:px-16" ref={emblaRef}>
          <div className="flex gap-6">
            {personaVideos.map((video) => {
              const isPlaying = playingVideo === video.id;
              const isMuted = mutedVideos[video.id] !== false;
              
              return (
                <div key={video.id} className="flex-shrink-0 w-[240px] sm:w-[260px] md:w-[280px] lg:w-[300px] xl:w-[320px] px-2">
                  <div className="relative aspect-[9/16] w-full rounded-3xl overflow-hidden shadow-2xl bg-brand-dark-surface group border-4 border-white dark:border-white/10">
                    {/* Glow Effect */}
                    <div className="absolute -inset-2 bg-gradient-to-br from-gold-400/20 via-amber-400/20 to-gold-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <video
                      ref={(el) => {
                        if (el) {
                          videoRefs.current[video.id] = el;
                        } else {
                          delete videoRefs.current[video.id];
                        }
                      }}
                      src={video.src}
                      className="relative z-10 w-full h-full object-cover"
                      loop
                      muted={isMuted}
                      playsInline
                      preload="metadata"
                    />

                    {/* Video Controls Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      {/* Controls Bar */}
                      <div className="w-full bg-gradient-to-t from-black/90 via-black/70 to-transparent p-5 flex items-center justify-between pointer-events-auto">
                        {/* Left side - Play/Pause */}
                        <button
                          onClick={(e) => handlePlayPause(video.id, e)}
                          className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/30 flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 transition-all duration-300 hover:scale-110"
                          type="button"
                          aria-label={isPlaying ? "Pause video" : "Play video"}
                        >
                          {isPlaying ? (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                              <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                          )}
                        </button>

                        {/* Right side - Mute/Unmute */}
                        <button
                          onClick={(e) => handleMuteToggle(video.id, e)}
                          className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/30 flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 transition-all duration-300 hover:scale-110"
                          type="button"
                          aria-label={isMuted ? "Unmute video" : "Mute video"}
                        >
                          {isMuted ? (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                              <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.53 7.47a.75.75 0 00-1.06 1.06 3 3 0 010 6.94.75.75 0 001.06 1.06 4.5 4.5 0 000-9.06z" />
                              <path d="M20.65 5.35a.75.75 0 00-1.06 1.06 6 6 0 010 11.18.75.75 0 001.06 1.06 7.5 7.5 0 000-13.3z" />
                            </svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                              <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM17.78 9.22a.75.75 0 10-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 001.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L20.56 12l1.72-1.72a.75.75 0 00-1.06-1.06L19.5 10.94l-1.72-1.72z" />
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Video Info Overlay - Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-6 md:p-8 pointer-events-none z-10">
                      <div className="text-white">
                        <div className="font-bold text-xl md:text-2xl mb-2">{video.name}</div>
                        <div className="text-sm md:text-base text-white/90">{video.designation}</div>
                      </div>
                    </div>

                    {/* Dot Indicators */}
                    <div className="absolute bottom-24 md:bottom-28 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                      {personaVideos.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => emblaApi?.scrollTo(index)}
                          className={`h-2.5 rounded-full transition-all ${
                            selectedIndex === index
                              ? 'bg-gold-500 dark:bg-gold-400 w-10'
                              : 'bg-white/50 dark:bg-white/30 w-2.5'
                          }`}
                          aria-label={`Go to video ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default PersonaVideoCarousel;

