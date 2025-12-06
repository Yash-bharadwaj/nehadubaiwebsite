import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';

const categories = [
  { 
    title: "Corporate & Conferences", 
    desc: "Professional, sharp, and on-brand.", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M3 2.25a.75.75 0 00-.75.75v18a.75.75 0 00.75.75h18a.75.75 0 00.75-.75V3a.75.75 0 00-.75-.75H3zm6 12a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-4.5zM6 6.75A.75.75 0 016.75 6h10.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75v-4.5z" clipRule="evenodd" />
      </svg>
    )
  },
  { 
    title: "Award Ceremonies", 
    desc: "High energy celebration and prestige.", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.112-3.173 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.348zm13.668 8.036a5.266 5.266 0 01-2.864 3.206 5.266 5.266 0 002.864-3.206zm-3.398-3.844c.85.055 1.686.125 2.51.211a5.266 5.266 0 01-2.51-3.642v3.431z" clipRule="evenodd" />
      </svg>
    )
  },
  { 
    title: "Weddings & Sangeets", 
    desc: "Warmth, fun, and traditional charm.", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
      </svg>
    )
  },
  { 
    title: "Brand Launches", 
    desc: "Excitement and product focus.", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436h.003c-1.228.956-2.64 1.776-4.174 2.396a7.518 7.518 0 01-2.92.589c-1.267 0-2.513-.309-3.645-.904l-1.637 1.638a.75.75 0 01-1.06 0l-1.5-1.5a.75.75 0 010-1.06l1.637-1.637c-.595-1.132-.904-2.38-.904-3.645 0-1.025.2-2.022.589-2.92 .62-1.534 1.44-2.946 2.396-4.174zM3.86 17.515c.67.24 1.4.375 2.14.375.313 0 .624-.025.932-.073l-3.328-3.328c-.048.308-.073.619-.073.931 0 .74.135 1.47.375 2.14.225.626.069 1.341-.444 1.854l-1.5 1.5a.75.75 0 001.06 1.06l1.5-1.5c.513-.513 1.228-.669 1.854-.444l-.216-.215z" clipRule="evenodd" />
      </svg>
    )
  },
];

const EventsShowcase: React.FC = () => {
  return (
    <SectionWrapper id="events">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-xl">
             <h2 className="text-4xl font-serif font-bold mb-4 text-brand-charcoal dark:text-white transition-colors">Events Brought to Life</h2>
             <p className="text-stone-600 dark:text-stone-400 transition-colors">Whether it's a room of 50 executives or a stadium of 5,000 fans, Neha adapts her tone to fit the vibe perfectly.</p>
        </div>
        <button className="text-gold-600 dark:text-gold-400 hover:text-brand-dark dark:hover:text-white transition-colors underline underline-offset-8 decoration-1 text-sm tracking-widest uppercase">
            View Gallery
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, idx) => (
          <div key={idx} className="bg-white dark:bg-brand-dark-surface rounded-2xl p-8 flex flex-col justify-between min-h-[320px] shadow-sm hover:shadow-xl hover:shadow-stone-200 dark:shadow-none dark:hover:shadow-gold-900/10 transition-all duration-300 group relative overflow-hidden border border-stone-100 dark:border-white/10">
            
            {/* Hover Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white to-white group-hover:from-gold-50/50 group-hover:to-white dark:from-brand-dark-surface dark:to-brand-dark-surface dark:group-hover:from-white/5 dark:group-hover:to-brand-dark-surface transition-all duration-500"></div>

            <div className="relative z-10">
                <div className="mb-6 w-14 h-14 rounded-full bg-stone-50 dark:bg-white/5 border border-stone-100 dark:border-white/10 flex items-center justify-center text-brand-charcoal dark:text-gold-400 group-hover:scale-110 group-hover:border-gold-200 dark:group-hover:border-gold-500/30 transition-all shadow-sm">
                {cat.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold mb-3 text-brand-charcoal dark:text-white group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">{cat.title}</h3>
                <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed">{cat.desc}</p>
            </div>
            
            <div className="relative z-10 mt-auto pt-8 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0">
                <span className="text-xs uppercase tracking-widest text-brand-charcoal dark:text-white flex items-center gap-2 font-bold">
                    Learn More <span className="text-gold-600 dark:text-gold-400">→</span>
                </span>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default EventsShowcase;