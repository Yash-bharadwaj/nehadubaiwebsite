import React, { useEffect, useState, useRef } from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import SplitText from '../ui/SplitText';

const stats = [
  { label: "Events Hosted", value: 200, suffix: "+" },
  { label: "Years Experience", value: 8, suffix: "+" },
  { label: "Countries", value: 10, suffix: "+" },
  { label: "Languages", value: 3, suffix: "" },
];

const useCounter = (end: number, duration: number = 2000, start: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function (easeOutExpo) for smoother finish
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeProgress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [end, duration, start]);

  return count;
};

const StatItem: React.FC<{ label: string; value: number; suffix: string; delay: number }> = ({ label, value, suffix, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCounter(value, 2500, isVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref}
      className="text-center group cursor-default p-4 relative z-10"
    >
      <div className="flex justify-center items-end leading-none mb-3">
         <span className="text-4xl md:text-6xl font-serif font-bold text-white group-hover:text-gold-400 transition-colors duration-300">
             {count}
         </span>
         <span className="text-2xl md:text-4xl font-serif text-gold-500 mb-1 ml-1">
             {suffix}
         </span>
      </div>
      
      <div className="overflow-hidden">
        <SplitText 
            text={label} 
            className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-stone-400 font-bold group-hover:text-white transition-colors"
            delay={30}
            duration={0.6}
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
        />
      </div>
    </div>
  );
};

const Stats: React.FC = () => {
  return (
    // Reduced padding and slimmer profile
    <div className="bg-brand-dark dark:bg-brand-dark-surface text-white relative z-20 border-t border-b border-transparent dark:border-white/5 transition-colors shadow-2xl overflow-hidden">
      
      {/* Curved Loop Background SVG */}
      <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-10">
        <svg 
            width="100%" 
            height="100%" 
            viewBox="0 0 1200 200" 
            fill="none" 
            preserveAspectRatio="none"
            className="stroke-gold-500/50 dark:stroke-gold-400/30"
        >
            <path 
                d="M0 100 C 150 100, 150 20, 300 20 C 450 20, 450 180, 600 180 C 750 180, 750 60, 900 60 C 1050 60, 1050 140, 1200 140" 
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
            />
            <path 
                d="M0 120 C 150 120, 150 40, 300 40 C 450 40, 450 200, 600 200 C 750 200, 750 80, 900 80 C 1050 80, 1050 160, 1200 160" 
                strokeWidth="1"
                className="opacity-50"
                strokeDasharray="4 4"
                vectorEffect="non-scaling-stroke"
            />
        </svg>
        
        {/* Glow Spots behind items */}
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gold-500/10 blur-[50px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-3/4 w-32 h-32 bg-gold-500/10 blur-[50px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl py-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-x-0 md:divide-x divide-white/5">
          {stats.map((stat, index) => (
            <StatItem 
              key={index} 
              {...stat} 
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;