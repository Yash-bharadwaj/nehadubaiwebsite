import React from 'react';
import { ScrollStack, ScrollStackItem } from '../ui/ScrollStack';
import Button from '../ui/Button';
import whiteLogo from '../nehaWebsiteVideos/NehaWhileLogo.png';
import blackLogo from '../nehaWebsiteVideos/NehaBlacklogo.png';

const TheExperience: React.FC = () => {
  return (
    <section id="experience" className="relative bg-brand-primary dark:bg-brand-dark-bg transition-colors overflow-hidden">
      <ScrollStack className="relative z-10">
        
        {/* Card 1: Weddings - Premium Design */}
        <ScrollStackItem className="relative overflow-hidden">
            {/* Premium Background with Gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-rose-50/80 via-stone-50 to-gold-50/30 dark:from-rose-950/20 dark:via-[#121212] dark:to-gold-900/10"></div>
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-200/40 dark:bg-rose-900/20 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold-200/30 dark:bg-gold-800/10 blur-[100px] rounded-full pointer-events-none"></div>
            
            {/* Premium Border Accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose-300 dark:via-rose-600 to-transparent"></div>
            
            <div className="relative w-full h-full flex flex-col md:flex-row items-center px-6 md:px-12 lg:px-20 z-10 py-12 md:py-0">
                {/* Logo on Left with Premium Frame */}
                <div className="w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0 relative">
                    <div className="absolute inset-0 bg-white/20 dark:bg-white/5 backdrop-blur-sm rounded-3xl blur-xl"></div>
                    <div className="relative p-8 rounded-3xl border border-rose-200/50 dark:border-rose-800/30 bg-white/30 dark:bg-white/5 backdrop-blur-md shadow-2xl">
                        <img 
                            src={whiteLogo} 
                            alt="Neha Dixit Logo" 
                            className="w-full max-w-sm h-auto object-contain dark:hidden opacity-90"
                        />
                        <img 
                            src={blackLogo} 
                            alt="Neha Dixit Logo" 
                            className="w-full max-w-sm h-auto object-contain hidden dark:block opacity-90"
                        />
                    </div>
                </div>
                
                {/* Content on Right with Premium Typography */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center text-center md:text-left md:pl-8 lg:pl-12 relative z-10">
                    {/* Decorative Icon */}
                    <div className="mb-6 md:mb-8">
                        <div className="w-16 h-16 rounded-full bg-rose-100/80 dark:bg-rose-900/30 backdrop-blur-sm border border-rose-300/50 dark:border-rose-700/30 flex items-center justify-center shadow-lg">
                            <svg className="w-8 h-8 text-rose-600 dark:text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.312-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                        </div>
                    </div>
                    
                    <h2 className="text-[8vw] md:text-[6rem] lg:text-[8rem] font-serif font-bold leading-[0.85] text-brand-dark dark:text-white tracking-tighter mb-2">
                        DREAM
                    </h2>
                    <h2 className="text-[8vw] md:text-[6rem] lg:text-[8rem] font-serif font-bold leading-[0.85] bg-gradient-to-r from-rose-600 to-gold-600 dark:from-rose-400 dark:to-gold-400 bg-clip-text text-transparent tracking-tighter mb-8">
                        WEDDINGS
                    </h2>
                    
                    <div className="max-w-xl space-y-6">
                        <p className="text-xl md:text-2xl lg:text-3xl font-serif font-medium text-brand-charcoal dark:text-stone-200 leading-relaxed italic">
                            Making your special day unforgettable, one moment at a time.
                        </p>
                        
                        {/* Premium Tags */}
                        <div className="flex flex-wrap gap-3 pt-4">
                            {['Sangeet', 'Ceremony', 'Reception'].map((tag, i) => (
                                <span key={i} className="px-5 py-2.5 rounded-full bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-rose-200/50 dark:border-rose-700/30 text-sm font-semibold text-rose-700 dark:text-rose-300 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </ScrollStackItem>

        {/* Card 2: Corporate Events - Clean Premium Design */}
        <ScrollStackItem className="relative overflow-hidden">
            {/* Clean Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50/50 dark:from-slate-950 dark:via-[#1a1816] dark:to-blue-950/20"></div>
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100/30 dark:bg-blue-900/10 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="relative w-full h-full flex flex-col md:flex-row items-center px-6 md:px-12 lg:px-20 z-10 py-12 md:py-0">
                {/* Content on Left */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center text-center md:text-left md:pr-8 lg:pr-12 mb-8 md:mb-0 relative z-10">
                    {/* Decorative Icon */}
                    <div className="mb-6 md:mb-8">
                        <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900/30 border-2 border-blue-200 dark:border-blue-700 flex items-center justify-center">
                            <svg className="w-7 h-7 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                            </svg>
                        </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row items-start gap-2 md:gap-6 leading-none mb-8">
                        <h2 className="text-[8vw] md:text-[6rem] lg:text-[7rem] font-serif font-bold text-brand-dark dark:text-white tracking-tighter">
                            CORPORATE
                        </h2>
                        <h2 className="text-[8vw] md:text-[6rem] lg:text-[7rem] font-serif font-bold bg-gradient-to-r from-blue-600 via-slate-500 to-gold-500 dark:from-blue-400 dark:via-slate-400 dark:to-gold-400 bg-clip-text text-transparent tracking-tighter">
                            EVENTS
                        </h2>
                    </div>
                    
                    <div className="max-w-xl space-y-6">
                        <p className="text-lg md:text-xl lg:text-2xl font-serif font-medium text-brand-charcoal dark:text-stone-300 leading-relaxed">
                            Professional, polished, and perfectly on-brand for your business.
                        </p>
                        
                        {/* Clean Tags */}
                        <div className="flex flex-wrap gap-3 pt-2">
                            {['Conferences', 'Awards', 'Launches'].map((tag, i) => (
                                <span key={i} className="px-4 py-2 rounded-full bg-white dark:bg-white/5 border-2 border-blue-200 dark:border-blue-700/30 text-sm font-semibold text-blue-700 dark:text-blue-300 shadow-sm hover:shadow-md hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                
                {/* Logo on Right - Clean White Card */}
                <div className="w-full md:w-1/2 flex items-center justify-center relative">
                    <div className="relative p-10 rounded-2xl bg-white dark:bg-brand-dark-surface border border-stone-200 dark:border-white/10 shadow-xl">
                        <img 
                            src={whiteLogo} 
                            alt="Neha Dixit Logo" 
                            className="w-full max-w-sm h-auto object-contain dark:hidden"
                        />
                        <img 
                            src={blackLogo} 
                            alt="Neha Dixit Logo" 
                            className="w-full max-w-sm h-auto object-contain hidden dark:block"
                        />
                    </div>
                </div>
            </div>
        </ScrollStackItem>

      </ScrollStack>
    </section>
  );
};

export default TheExperience;