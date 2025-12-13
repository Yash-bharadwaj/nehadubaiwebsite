import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';

const services = [
  { 
    title: "Corporate Events", 
    desc: "Professional hosting for conferences and meetings.", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M3 2.25a.75.75 0 00-.75.75v18a.75.75 0 00.75.75h18a.75.75 0 00.75-.75V3a.75.75 0 00-.75-.75H3zm6 12a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-4.5zM6 6.75A.75.75 0 016.75 6h10.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75v-4.5z" clipRule="evenodd" />
      </svg>
    )
  },
  { 
    title: "Team Building", 
    desc: "Dynamic facilitation that brings teams together.", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
      </svg>
    )
  },
  { 
    title: "Award Ceremonies", 
    desc: "Elevating recognition events with grace and energy.", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.112-3.173 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.348zm13.668 8.036a5.266 5.266 0 01-2.864 3.206 5.266 5.266 0 002.864-3.206zm-3.398-3.844c.85.055 1.686.125 2.51.211a5.266 5.266 0 01-2.51-3.642v3.431z" clipRule="evenodd" />
      </svg>
    )
  },
  { 
    title: "Weddings & Celebrations", 
    desc: "Bilingual hosting for elegant and memorable events.", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
      </svg>
    )
  },
];

const SignatureStyle: React.FC = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="max-w-xl">
          <h2 className="text-4xl font-serif font-bold mb-4 text-brand-charcoal dark:text-white transition-colors">Services & Expertise</h2>
          <p className="text-stone-600 dark:text-stone-400 transition-colors">From corporate boardrooms to wedding ballrooms, I bring energy, elegance, and seamless execution to every event.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, idx) => (
          <div key={idx} className="bg-white dark:bg-brand-dark-surface rounded-2xl p-8 flex flex-col justify-between min-h-[240px] shadow-sm hover:shadow-xl hover:shadow-stone-200 dark:shadow-none dark:hover:shadow-gold-900/10 transition-all duration-300 group relative overflow-hidden border border-stone-100 dark:border-white/10">
            {/* Hover Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white to-white group-hover:from-gold-50/50 group-hover:to-white dark:from-brand-dark-surface dark:to-brand-dark-surface dark:group-hover:from-white/5 dark:group-hover:to-brand-dark-surface transition-all duration-500"></div>

            <div className="relative z-10">
              <div className="mb-6 w-14 h-14 rounded-full bg-stone-50 dark:bg-white/5 border border-stone-100 dark:border-white/10 flex items-center justify-center text-brand-charcoal dark:text-gold-400 group-hover:scale-110 group-hover:border-gold-200 dark:group-hover:border-gold-500/30 transition-all shadow-sm">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold mb-3 text-brand-charcoal dark:text-white group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">{service.title}</h3>
              <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default SignatureStyle;