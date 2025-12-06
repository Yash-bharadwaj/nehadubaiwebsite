import React from 'react';

const ClientsMarquee: React.FC = () => {
  return (
    <div className="py-10 bg-brand-primary dark:bg-brand-dark-bg border-y border-stone-200 dark:border-white/5 overflow-hidden relative transition-colors duration-500">
        <div className="container mx-auto px-6 mb-8 text-center">
             <p className="text-stone-400 dark:text-stone-500 text-xs uppercase tracking-[0.3em]">Trusted by Global Brands & Families</p>
        </div>
        
        {/* Gradient Fade Edges - Dynamic based on theme */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-brand-primary dark:from-brand-dark-bg to-transparent z-10 transition-colors duration-500"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-brand-primary dark:from-brand-dark-bg to-transparent z-10 transition-colors duration-500"></div>

        <div className="flex gap-20 justify-center items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            {/* Placeholder Logos - Adapts to Dark Mode */}
            {['EMAAR', 'ATLANTIS', 'VOGUE', 'BMW', 'TEDx', 'MARRIOTT'].map((logo, i) => (
                <div key={i} className="text-3xl font-bold text-stone-300 dark:text-stone-600 font-serif tracking-tighter cursor-default hover:text-brand-charcoal dark:hover:text-white transition-colors">
                    {logo}
                </div>
            ))}
        </div>
    </div>
  );
};

export default ClientsMarquee;