import React, { useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import SectionWrapper from '../layout/SectionWrapper';

// Import testimonial videos
import video1 from '../nehaWebsiteVideos/ashokkarla.mp4';
import video2 from '../nehaWebsiteVideos/iihaammaniar.mp4';
import video3 from '../nehaWebsiteVideos/muralikrishna.mp4';

const testimonialVideos = [
  { 
    id: 1, 
    src: video1, 
    name: 'Mr. Ashok Kalra',
    designation: 'Owner, Lavang Fine Dining Restaurant, Downtown Dubai'
  },
  { 
    id: 2, 
    src: video2, 
    name: 'Ilhaam Maniar',
    designation: 'Manager - CMBC, CROWE UAE'
  },
  { 
    id: 3, 
    src: video3, 
    name: 'Mr. Murali Krishnan',
    designation: 'CHRO, Jumbo Group'
  },
];

const About: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    loop: true,
    skipSnaps: false,
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

  // Track selected slide
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      // Auto-play the selected video
      const currentVideoId = testimonialVideos[emblaApi.selectedScrollSnap()].id;
      const video = videoRefs.current[currentVideoId];
      if (video) {
        // Pause all videos first
        Object.values(videoRefs.current).forEach(v => {
          if (v && v !== video) {
            v.pause();
          }
        });
        
        // Preserve mute state for this video - read from ref to get latest value
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
      if (video && Number(id) !== playingVideo) {
        video.pause();
      }
    });
  }, [playingVideo]);

  // Sync video muted state with React state
  useEffect(() => {
    Object.entries(videoRefs.current).forEach(([id, video]) => {
      if (video) {
        const videoId = Number(id);
        const shouldBeMuted = mutedVideos[videoId] !== false;
        video.muted = shouldBeMuted;
      }
    });
  }, [mutedVideos]);


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
    
    // Get current state (default to true if undefined, meaning muted)
    const currentMutedState = mutedVideos[videoId] !== false;
    const newMutedState = !currentMutedState;
    
    // Update both video element and state
    video.muted = newMutedState;
    setMutedVideos(prev => ({
      ...prev,
      [videoId]: newMutedState
    }));
  };

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  return (
    <SectionWrapper id="about" className="py-12 md:py-16">
      <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center">
        {/* Video Slider Column */}
        <div className="md:col-span-5 order-2 md:order-1 relative">
            <div className="absolute -inset-4 bg-gold-200/30 rounded-2xl blur-xl dark:bg-gold-500/10"></div>
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-stone-200 dark:border-white/10 shadow-xl bg-stone-100 dark:bg-brand-dark-surface">
              {/* Video Carousel */}
              <div className="overflow-hidden h-full" ref={emblaRef}>
                <div className="flex h-full">
                  {testimonialVideos.map((video) => {
                    const isPlaying = playingVideo === video.id;
                    // Get muted state - default to true if not explicitly set to false
                    const isMuted = mutedVideos[video.id] !== false;
                    
                    return (
                      <div key={video.id} className="flex-shrink-0 w-full h-full relative group">
                        <video
                          ref={(el) => {
                            if (el) {
                              videoRefs.current[video.id] = el;
                            } else {
                              delete videoRefs.current[video.id];
                            }
                          }}
                          src={video.src}
                          className="w-full h-full object-cover"
                          loop
                          muted={isMuted}
                          playsInline
                          preload="metadata"
                        />

                        {/* Video Controls Overlay - Always visible but subtle */}
                        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none z-10">
                          {/* Top Right - Mute Button (Always visible) */}
                          <div className="w-full p-4 flex justify-end pointer-events-auto z-20">
                            <button
                              onClick={(e) => handleMuteToggle(video.id, e)}
                              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/50 backdrop-blur-md border-2 border-white/50 flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 hover:scale-110 active:scale-95 transition-all duration-300 shadow-xl opacity-80 group-hover:opacity-100 cursor-pointer relative z-30"
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

                          {/* Center - Play/Pause Button (Always visible, more prominent on hover) */}
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
                            <button
                              onClick={(e) => handlePlayPause(video.id, e)}
                              className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-black/60 backdrop-blur-md border-2 border-white/60 flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 hover:scale-110 active:scale-95 transition-all duration-300 shadow-2xl opacity-80 group-hover:opacity-100"
                              type="button"
                              aria-label={isPlaying ? "Pause video" : "Play video"}
                            >
                              {isPlaying ? (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-8 h-8 md:w-10 md:h-10">
                                  <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clipRule="evenodd" />
                                </svg>
                              ) : (
                                <div className="w-0 h-0 border-t-[16px] md:border-t-[18px] border-t-transparent border-l-[24px] md:border-l-[28px] border-l-white border-b-[16px] md:border-b-[18px] border-b-transparent ml-1"></div>
                              )}
                            </button>
                          </div>
                          
                          {/* Bottom Text Strip - Smaller strip with bigger text */}
                          <div className="w-full bg-gradient-to-t from-black/95 via-black/90 to-black/70 pb-12 pt-3 pointer-events-auto">
                            {/* Video Name and Designation */}
                            <div className="text-white text-center px-4">
                              <div className="text-xl md:text-2xl font-semibold mb-1">{video.name}</div>
                              <div className="text-base md:text-lg opacity-95 leading-tight">{video.designation}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={scrollPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 dark:bg-brand-dark-surface/90 backdrop-blur-sm border border-stone-300 dark:border-white/30 flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 hover:text-white text-brand-charcoal dark:text-white transition-all shadow-lg z-20"
                aria-label="Previous video"
                type="button"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                onClick={scrollNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 dark:bg-brand-dark-surface/90 backdrop-blur-sm border border-stone-300 dark:border-white/30 flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 hover:text-white text-brand-charcoal dark:text-white transition-all shadow-lg z-20"
                aria-label="Next video"
                type="button"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>

            </div>
            
            {/* Caption below slider */}
            <div className="mt-6 text-center">
              <p className="text-sm text-stone-500 dark:text-stone-400 font-medium tracking-wide uppercase">
                From Our <span className="text-gold-600 dark:text-gold-400">Clients</span>
              </p>
            </div>
        </div>

        {/* Text Column */}
        <div className="md:col-span-7 order-1 md:order-2 space-y-8">
          <div className="space-y-2">
             <span className="text-gold-600 dark:text-gold-400 text-sm tracking-widest uppercase font-bold">The Persona</span>
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-charcoal dark:text-white transition-colors">More than just a voice.</h2>
          </div>
          
          <h3 className="text-xl text-stone-600 dark:text-stone-300 font-light border-l-2 border-gold-500 pl-6 py-2 italic font-serif transition-colors">
            "The stage is never silent when <span className="text-highlight">Neha</span> is around."
          </h3>
          
          <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-lg transition-colors">
            With a unique blend of spontaneous wit and structured eloquence, Neha transforms standard agendas into engaging experiences. Whether it's a high-stakes corporate boardroom, a massive award ceremony, or a vibrant ballroom wedding, she commands the room with grace and keeps the energy alive, even during the quietest transitions.
          </p>
          
          <div className="flex flex-wrap gap-3 pt-4">
            {['Bilingual Host', 'Corporate Ready', 'Wedding Specialist', 'TV Experience', 'Interactive'].map(tag => (
              <span key={tag} className="px-5 py-2 rounded-full bg-white dark:bg-white/5 border border-stone-200 dark:border-white/10 hover:border-gold-500 dark:hover:border-gold-500 hover:text-gold-600 dark:hover:text-gold-400 text-sm text-stone-500 dark:text-stone-400 transition-colors cursor-default shadow-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;