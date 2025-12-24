import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import SplitText from '../ui/SplitText';
import Button from '../ui/Button';
import CircularText from '../ui/CircularText';
import stageImage from '../nehaWebsiteVideos/stageimage.jpg';

const AboutHero: React.FC = () => {
  return (
    <div className="relative bg-brand-primary dark:bg-gradient-to-b dark:from-brand-dark-surface dark:via-brand-dark-bg dark:to-brand-dark-surface overflow-hidden transition-colors">
      {/* Premium Gradients - Light & Dark Mode */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Light Mode Gradients */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-rose-100/30 dark:bg-purple-900/25 rounded-full blur-[140px] transition-opacity"></div>
        <div className="absolute top-[20%] right-[-10%] w-[45%] h-[45%] bg-gold-200/20 dark:bg-gold-600/15 rounded-full blur-[130px] transition-opacity"></div>
        <div className="absolute bottom-[-10%] left-[30%] w-[40%] h-[40%] bg-orange-100/25 dark:bg-blue-900/20 rounded-full blur-[120px] transition-opacity"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-gold-100/15 dark:bg-gold-500/5 rounded-full blur-[150px] transition-opacity"></div>
      </div>

      {/* Professional Grid Pattern - Light & Dark Mode */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] dark:opacity-[0.04]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Subtle Dot Pattern Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015] dark:opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <SectionWrapper className="relative z-10 pt-20 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image with Design */}
          <div className="order-2 lg:order-1 relative">
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-gold-500/30 rounded-lg rotate-12"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-gold-500/20 rounded-lg -rotate-12"></div>
            
            {/* Glow Effect */}
            <div className="absolute -inset-8 bg-gold-500/10 rounded-3xl blur-2xl"></div>
            
            {/* Main Image Container */}
            <div className="relative">
              {/* Outer Frame */}
              <div className="absolute -inset-4 border-2 border-gold-500/40 rounded-2xl"></div>
              
              {/* Image with Inner Frame */}
              <div className="relative rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl">
                <img
                  src={stageImage}
                  alt="Neha Dixit on stage"
                  className="w-full h-auto object-cover aspect-[3/4]"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                
                {/* Decorative Corner Elements */}
                <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-gold-400/50"></div>
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-gold-400/50"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-gold-400/50"></div>
                <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-gold-400/50"></div>
              </div>
              
              {/* Rotating Circular Text Badge */}
              <div className="absolute -top-8 -right-8 md:-top-10 md:-right-10 z-30 hidden md:block">
                <div className="relative bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-full p-3 shadow-2xl border-2 border-gold-500/30">
                  <CircularText text="HOSTING • ENGAGING • ELEVATING • " radius={70} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Microphone Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gold-400">
                      <path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" />
                      <path d="M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709v-1.5A.75.75 0 016 10.5z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2 space-y-8 lg:space-y-10">
            <div className="space-y-6">
              <span className="text-gold-600 dark:text-gold-500 text-sm tracking-widest uppercase font-bold inline-block transition-colors">
                About Neha
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-brand-charcoal dark:text-white leading-tight transition-colors">
                <SplitText 
                  text="The Voice Behind" 
                  className="block" 
                  delay={30}
                />
                <span className="text-gold-600 dark:text-gold-400 block mt-2 transition-colors">
                  <SplitText 
                    text="Unforgettable Events" 
                    className="block" 
                    delay={50}
                  />
                </span>
              </h1>
            </div>

            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-stone-600 dark:text-stone-300 transition-colors">
              <p className="text-stone-700 dark:text-stone-200">
                Neha Dixit is a distinguished emcee with over <span className="font-semibold text-brand-charcoal dark:text-white">8 years of experience</span>, hosting prestigious events across the UAE and internationally. With a portfolio of <span className="font-semibold text-brand-charcoal dark:text-white">500+ curated events</span>, she has led celebrity engagements, high-end corporate functions, elegant weddings, and exclusive corporate events.
              </p>
              <p className="text-stone-600 dark:text-stone-300">
                Renowned for her <span className="font-semibold text-brand-charcoal dark:text-white">sophistication, subtle wit, and commanding stage presence</span>, Neha elevates every event she hosts. Her meticulous attention to detail and commitment to excellence have earned her a loyal clientele, with many choosing her time and again for unforgettable, seamless experiences.
              </p>
            </div>

            <div className="pt-4">
              <Button 
                variant="secondary" 
                size="lg" 
                onClick={() => {
                  const phoneNumber = '+971552574806';
                  const message = encodeURIComponent("Hello! I'm interested in booking Neha for an event.");
                  window.open(`https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
                }}
                className="shadow-xl shadow-gold-500/20"
              >
                Let's Get Started
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default AboutHero;
