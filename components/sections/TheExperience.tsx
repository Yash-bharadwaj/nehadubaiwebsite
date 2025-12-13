import React from 'react';
import { ScrollStack, ScrollStackItem } from '../ui/ScrollStack';
import whiteLogo from '../nehaWebsiteVideos/NehaWhileLogo.png';
import blackLogo from '../nehaWebsiteVideos/NehaBlacklogo.png';

const TheExperience: React.FC = () => {
  return (
    <section id="experience" className="relative bg-brand-primary dark:bg-brand-dark-bg transition-colors overflow-hidden">
      <ScrollStack className="relative z-10">
        
        {/* Card 1: Corporate Team Building - Premium Professional with Playful Touch */}
        <ScrollStackItem className="relative overflow-hidden">
            {/* Premium Background with Gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50/90 via-white to-blue-50/40 dark:from-slate-950/95 dark:via-[#0a0a0a] dark:to-blue-950/20"></div>
            <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-200/30 dark:bg-blue-900/15 blur-[140px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold-200/25 dark:bg-gold-800/10 blur-[120px] rounded-full pointer-events-none"></div>
            
            {/* Premium Border Accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 dark:via-blue-500 to-transparent"></div>
            
            <div className="relative w-full h-full flex flex-col md:flex-row items-center px-6 md:px-12 lg:px-20 z-10 py-12 md:py-0">
                {/* Logo on Left with Premium Frame */}
                <div className="w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0 relative">
                    <div className="absolute inset-0 bg-white/30 dark:bg-white/5 backdrop-blur-sm rounded-3xl blur-xl"></div>
                    <div className="relative p-10 rounded-3xl border-2 border-blue-200/60 dark:border-blue-800/40 bg-white/40 dark:bg-white/5 backdrop-blur-md shadow-2xl">
                        <img 
                            src={whiteLogo} 
                            alt="Neha Dixit Logo" 
                            className="w-full max-w-sm h-auto object-contain dark:hidden opacity-95"
                        />
                        <img 
                            src={blackLogo} 
                            alt="Neha Dixit Logo" 
                            className="w-full max-w-sm h-auto object-contain hidden dark:block opacity-95"
                        />
                    </div>
                </div>
                
                {/* Content on Right with Premium Typography */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center text-center md:text-left md:pl-8 lg:pl-12 relative z-10">
                    {/* Decorative Icon */}
                    <div className="mb-6 md:mb-8">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/40 dark:to-blue-800/30 backdrop-blur-sm border-2 border-blue-300/60 dark:border-blue-700/40 flex items-center justify-center shadow-xl">
                            <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.645-5.963-1.73A3 3 0 007.94 15.53m3.06 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.645-5.963-1.73M15 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.645-5.963-1.73M15 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72" />
                            </svg>
                        </div>
                    </div>
                    
                    <h2 className="text-[7vw] md:text-[5.5rem] lg:text-[7rem] font-serif font-bold leading-[0.85] text-brand-dark dark:text-white tracking-tighter mb-2">
                        CORPORATE
                    </h2>
                    <h2 className="text-[7vw] md:text-[5.5rem] lg:text-[7rem] font-serif font-bold leading-[0.85] bg-gradient-to-r from-blue-600 via-slate-600 to-gold-600 dark:from-blue-400 dark:via-slate-400 dark:to-gold-400 bg-clip-text text-transparent tracking-tighter mb-8">
                        TEAM BUILDING
                    </h2>
                    
                    <div className="max-w-xl space-y-6">
                        <p className="text-lg md:text-xl lg:text-2xl font-serif font-medium text-brand-charcoal dark:text-stone-200 leading-relaxed">
                            Transforming corporate gatherings into engaging experiences that build connections, boost morale, and create lasting memories.
                        </p>
                        
                        {/* Premium Tags */}
                        <div className="flex flex-wrap gap-3 pt-4">
                            {['Team Retreats', 'Offsites', 'Conferences', 'Workshops'].map((tag, i) => (
                                <span key={i} className="px-5 py-2.5 rounded-full bg-white/70 dark:bg-white/5 backdrop-blur-sm border-2 border-blue-200/60 dark:border-blue-700/40 text-sm font-semibold text-blue-700 dark:text-blue-300 shadow-md hover:shadow-lg hover:scale-105 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </ScrollStackItem>

        {/* Card 2: Weddings - Elegant & Premium */}
        <ScrollStackItem className="relative overflow-hidden">
            {/* Elegant Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-rose-50/85 via-stone-50 to-gold-50/35 dark:from-rose-950/25 dark:via-[#121212] dark:to-gold-900/15"></div>
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-rose-200/35 dark:bg-rose-900/20 blur-[130px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[550px] h-[550px] bg-gold-200/30 dark:bg-gold-800/12 blur-[110px] rounded-full pointer-events-none"></div>
            
            {/* Premium Border Accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose-400 dark:via-rose-500 to-transparent"></div>
            
            <div className="relative w-full h-full flex flex-col md:flex-row items-center px-6 md:px-12 lg:px-20 z-10 py-12 md:py-0">
                {/* Content on Left */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center text-center md:text-left md:pr-8 lg:pr-12 mb-8 md:mb-0 relative z-10">
                    {/* Decorative Icon */}
                    <div className="mb-6 md:mb-8">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-100 to-rose-200 dark:from-rose-900/40 dark:to-rose-800/30 backdrop-blur-sm border-2 border-rose-300/60 dark:border-rose-700/40 flex items-center justify-center shadow-xl">
                            <svg className="w-8 h-8 text-rose-600 dark:text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.312-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                        </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row items-start gap-2 md:gap-6 leading-none mb-8">
                        <h2 className="text-[7vw] md:text-[5.5rem] lg:text-[7rem] font-serif font-bold text-brand-dark dark:text-white tracking-tighter">
                            ELEGANT
                        </h2>
                        <h2 className="text-[7vw] md:text-[5.5rem] lg:text-[7rem] font-serif font-bold bg-gradient-to-r from-rose-600 via-gold-600 to-rose-500 dark:from-rose-400 dark:via-gold-400 dark:to-rose-300 bg-clip-text text-transparent tracking-tighter">
                            WEDDINGS
                        </h2>
                    </div>
                    
                    <div className="max-w-xl space-y-6">
                        <p className="text-lg md:text-xl lg:text-2xl font-serif font-medium text-brand-charcoal dark:text-stone-200 leading-relaxed">
                            Creating magical moments that celebrate love, tradition, and the joy of bringing families together.
                        </p>
                        
                        {/* Elegant Tags */}
                        <div className="flex flex-wrap gap-3 pt-2">
                            {['Sangeet', 'Ceremony', 'Reception', 'Mehendi'].map((tag, i) => (
                                <span key={i} className="px-5 py-2.5 rounded-full bg-white/70 dark:bg-white/5 backdrop-blur-sm border-2 border-rose-200/60 dark:border-rose-700/40 text-sm font-semibold text-rose-700 dark:text-rose-300 shadow-md hover:shadow-lg hover:scale-105 hover:border-rose-400 dark:hover:border-rose-500 transition-all duration-300">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                
                {/* Logo on Right - Elegant Frame */}
                <div className="w-full md:w-1/2 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-white/25 dark:bg-white/5 backdrop-blur-sm rounded-3xl blur-xl"></div>
                    <div className="relative p-10 rounded-3xl border-2 border-rose-200/60 dark:border-rose-800/40 bg-white/40 dark:bg-white/5 backdrop-blur-md shadow-2xl">
                        <img 
                            src={whiteLogo} 
                            alt="Neha Dixit Logo" 
                            className="w-full max-w-sm h-auto object-contain dark:hidden opacity-95"
                        />
                        <img 
                            src={blackLogo} 
                            alt="Neha Dixit Logo" 
                            className="w-full max-w-sm h-auto object-contain hidden dark:block opacity-95"
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
