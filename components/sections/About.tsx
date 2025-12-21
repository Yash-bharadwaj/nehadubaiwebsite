import React, { useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import SectionWrapper from '../layout/SectionWrapper';

// Import testimonial videos
import video1 from '../nehaWebsiteVideos/testimonial-ashok-kalra.mp4';
import video2 from '../nehaWebsiteVideos/testimonial-ilhaam-maniar.mp4';
import video3 from '../nehaWebsiteVideos/testimonial-murali-krishnan.mp4';

const testimonialVideos = [
  { 
    id: 1, 
    src: video3, 
    name: 'Mr. Murali Krishnan',
    designation: 'CHRO, Jumbo Group'
  },
  { 
    id: 2, 
    src: video2, 
    name: 'Ilhaam Maniar',
    designation: 'Manager - CMBC, CROWE UAE'
  },
  { 
    id: 3, 
    src: video1, 
    name: 'Mr. Ashok Kalra',
    designation: 'Owner, Lavang Fine Dining Restaurant, Downtown Dubai'
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
    <div className="relative bg-gradient-to-b from-brand-dark-bg via-brand-dark-surface to-brand-dark-bg overflow-hidden">
      {/* Dark Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[35%] h-[35%] bg-purple-900/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-gold-600/10 rounded-full blur-[130px]"></div>
      </div>

      <SectionWrapper id="about" className="relative z-10 py-16 md:py-20">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center">
        {/* Video Slider Column */}
        <div className="md:col-span-5 order-2 md:order-1 relative">
            <div className="absolute -inset-4 bg-gold-500/20 rounded-2xl blur-xl"></div>
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-white/10 shadow-xl bg-brand-dark-surface">
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
              <p className="text-sm text-stone-400 font-medium tracking-wide uppercase">
                From Our <span className="text-gold-400">Clients</span>
              </p>
            </div>
        </div>

        {/* Text Column */}
        <div className="md:col-span-7 order-1 md:order-2 space-y-8">
          <div className="space-y-2">
             <span className="text-gold-500 text-sm tracking-widest uppercase font-bold">The Persona</span>
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-white transition-colors">More than just a voice.</h2>
          </div>
          
          <h3 className="text-xl text-stone-300 font-light border-l-2 border-gold-500 pl-6 py-2 italic font-serif transition-colors">
            "The stage is never silent when <span className="text-gold-400">Neha</span> is around."
          </h3>
          
          <p className="text-stone-300 leading-relaxed text-lg transition-colors">
            With a unique blend of spontaneous wit and structured eloquence, Neha transforms standard agendas into engaging experiences. Whether it's a high-stakes corporate boardroom, a massive award ceremony, or a vibrant ballroom wedding, she commands the room with grace and keeps the energy alive, even during the quietest transitions.
          </p>

          {/* CTA Section */}
          <div className="pt-6">
            <button
              onClick={() => {
                const phoneNumber = '+971552574806';
                const message = encodeURIComponent("Hello! I'm interested in booking Neha for an event.");
                window.open(`https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
              }}
              className="px-8 py-4 bg-gold-500 hover:bg-gold-400 text-white rounded-full font-semibold shadow-xl shadow-gold-500/30 hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              Let's Get Started
            </button>
          </div>
        </div>
      </div>
      </SectionWrapper>
    </div>
  );
};

export default About;