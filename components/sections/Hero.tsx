import React, { useState, useEffect } from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import Button from '../ui/Button';
import GhostCursor from '../ui/GhostCursor';
import CircularText from '../ui/CircularText';
import SplitText from '../ui/SplitText';
import stageImage from '../nehaWebsiteVideos/stageimage.jpg';

const greetings = ["Hello!", "Namaste!", "As-salamu alaykum!", "Marhaba!", "Sat Sri Akal!"];
const dynamicWords = ["Stage.", "Room.", "Crowd.", "Moment."];

const Hero: React.FC = () => {
  const [greetingIdx, setGreetingIdx] = useState(0);
  const [wordIdx, setWordIdx] = useState(0);

  // Cycle Greetings
  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIdx((prev) => (prev + 1) % greetings.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Cycle "Own The [Word]"
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIdx((prev) => (prev + 1) % dynamicWords.length);
    }, 4000); // Slower interval for the main headline
    return () => clearInterval(interval);
  }, []);

  return (
    <SectionWrapper id="hero" className="pt-24 md:pt-32 min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Ghost Cursor Background */}
      <GhostCursor />


      {/* Background Gradient Spotlights */}
      <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gradient-radial from-gold-200/30 to-transparent blur-[120px] pointer-events-none dark:from-gold-600/10"></div>
      
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10 w-full">
        {/* Left Content */}
        <div className="space-y-8 text-center lg:text-left order-2 lg:order-1 relative">
          
          {/* Animated Greeting Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-stone-300 dark:border-gold-500/30 bg-white/50 dark:bg-gold-500/5 backdrop-blur-md mb-2 shadow-sm min-w-[160px] justify-center lg:justify-start">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
            </span>
            {/* Key forces re-render for animation */}
            <div key={greetingIdx}>
                <SplitText 
                    text={greetings[greetingIdx]} 
                    className="text-brand-charcoal dark:text-gold-400 text-xs tracking-[0.2em] uppercase font-bold"
                    delay={40}
                    duration={0.4}
                    splitType="chars"
                />
            </div>
          </div>
          
          <div className="relative">
              <h1 className="text-5xl md:text-7xl xl:text-8xl font-serif font-bold leading-[1.0] text-brand-dark dark:text-white transition-colors">
                <SplitText 
                    text="Own The" 
                    className="block" 
                    delay={50} 
                    textAlign={window.innerWidth >= 1024 ? 'left' : 'center'}
                />
                
                {/* Dynamic Third Word */}
                <span key={wordIdx} className="block mt-2 relative">
                    <span className="text-gold-600 dark:text-gold-400 drop-shadow-sm">
                        <SplitText 
                            text={dynamicWords[wordIdx]} 
                            delay={30} 
                            textAlign={window.innerWidth >= 1024 ? 'left' : 'center'}
                            className="block"
                        />
                    </span>
                </span>
              </h1>
              
              {/* Role Tags - Inside heading container to reduce spacing */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6 mt-4">
                {['Host', 'Anchor', 'Emcee'].map((role, index) => (
                  <span
                    key={role}
                    className="text-xl md:text-2xl font-serif font-semibold text-brand-charcoal dark:text-stone-300 transition-all hover:text-gold-600 dark:hover:text-gold-400"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {role}
                    {index < 3 && <span className="text-stone-300 dark:text-stone-600 mx-2">•</span>}
                  </span>
                ))}
              </div>
          </div>
          
          <p className="text-lg md:text-xl text-brand-charcoal dark:text-stone-300 max-w-lg leading-relaxed mx-auto lg:mx-0 transition-colors font-medium relative z-10">
            Professional? Absolutely. Boring? Never. <br className="hidden md:block" />
            I'm <span className="text-brand-dark dark:text-gold-400 font-bold underline decoration-gold-300/50 underline-offset-4">Neha</span>, and I turn "just another event" into a memory that actually sticks.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <Button size="lg" variant="secondary" className="shadow-2xl shadow-stone-400/20 dark:shadow-gold-900/20" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})}>
              Hire Neha
            </Button>
            <Button variant="outline" size="lg" onClick={() => document.getElementById('showreel')?.scrollIntoView({ behavior: 'smooth'})}>
              Watch Showreel
            </Button>
          </div>
        </div>
        
        {/* Right Content - Dome Image & Composition */}
        <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            
            {/* Rotating Circular Text Badge */}
            <div className="absolute -top-10 -right-4 md:-right-10 z-30 hidden md:block">
                <div className="relative bg-white dark:bg-brand-dark-surface rounded-full p-2 shadow-xl border border-stone-100 dark:border-white/10">
                    <CircularText text="HOSTING • ENGAGING • ELEVATING • " radius={60} />
                    <div className="absolute inset-0 flex items-center justify-center text-brand-charcoal dark:text-white">
                         {/* Microphone Icon */}
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-brand-dark dark:text-gold-400">
                          <path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" />
                          <path d="M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709v-1.5A.75.75 0 016 10.5z" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Main Dome Image Container */}
            <div className="relative w-full max-w-[420px] aspect-[3/4] rounded-t-full rounded-b-[3rem] overflow-hidden shadow-2xl shadow-stone-400/30 dark:shadow-black/60 border-[6px] border-white dark:border-white/5 group bg-stone-200 dark:bg-brand-dark-surface">
               
               {/* Stage Image */}
               <img 
                 src={stageImage} 
                 alt="Neha Dixit on stage" 
                 className="absolute inset-0 w-full h-full object-cover object-center"
               />
               
               {/* Overlay Content on Image */}
               <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white/90 font-serif italic text-center text-lg">"No awkward silences."</p>
               </div>
            </div>

            {/* Floating Flowing Boxes */}
            {/* Card 1 */}
            <div className="absolute top-[20%] -left-4 md:-left-12 glass-card p-4 rounded-xl flex items-center gap-3 animate-float max-w-[180px] z-20 bg-white/80 dark:bg-brand-dark-surface/90">
                <div className="w-10 h-10 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center text-rose-600 dark:text-rose-400">
                    {/* Muted Speaker Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.53 7.47a.75.75 0 00-1.06 1.06 3 3 0 010 6.94.75.75 0 001.06 1.06 4.5 4.5 0 000-9.06z" />
                      <path d="M20.65 5.35a.75.75 0 00-1.06 1.06 6 6 0 010 11.18.75.75 0 001.06 1.06 7.5 7.5 0 000-13.3z" />
                    </svg>
                </div>
                <div>
                    <div className="text-[10px] text-stone-500 dark:text-stone-400 uppercase font-bold tracking-wider">Awkward Silences</div>
                    <div className="text-sm font-bold text-brand-charcoal dark:text-white">0% Chance</div>
                </div>
            </div>

            {/* Card 2 */}
            <div className="absolute bottom-[15%] -right-4 md:-right-8 glass-card p-4 rounded-xl flex items-center gap-3 animate-float-delayed max-w-[200px] z-20 bg-white/80 dark:bg-brand-dark-surface/90">
                <div className="w-10 h-10 rounded-full bg-gold-100 dark:bg-gold-900/30 flex items-center justify-center text-gold-600 dark:text-gold-400">
                    {/* Bolt Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
                    </svg>
                </div>
                <div>
                    <div className="text-[10px] text-stone-500 dark:text-stone-400 uppercase font-bold tracking-wider">Energy Level</div>
                    <div className="text-sm font-bold text-brand-charcoal dark:text-white">Always 100%</div>
                </div>
            </div>

        </div>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-bounce-slow pointer-events-none">
        <span className="text-[10px] uppercase tracking-widest text-brand-charcoal dark:text-stone-400 font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-charcoal to-transparent dark:from-stone-400"></div>
      </div>
    </SectionWrapper>
  );
};

export default Hero;