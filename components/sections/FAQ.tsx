import React, { useState } from 'react';
import SectionWrapper from '../layout/SectionWrapper';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: "Does Neha travel outside Dubai?", a: "Yes, she frequently hosts events across the UAE (Abu Dhabi, Sharjah) and internationally (India, Europe, Asia)." },
    { q: "Can she host in multiple languages?", a: "Absolutely. Neha is fluent in English and Hindi, making her perfect for diverse crowds and weddings." },
    { q: "How early should we book?", a: "For peak wedding seasons (Nov-Feb) and major corporate holidays, we recommend booking 3-6 months in advance." },
    { q: "Does she help with the script?", a: "Yes, Neha collaborates with you to refine the run-of-show and can script her own segments to ensure flow and engagement." }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <SectionWrapper className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-gold-600 dark:text-gold-400 text-sm tracking-widest uppercase font-bold mb-4 block">Got Questions?</span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-brand-charcoal dark:text-white transition-colors">Common Questions</h2>
        <p className="text-stone-500 dark:text-stone-400 max-w-2xl mx-auto">Everything you need to know about working with Neha.</p>
      </div>
      
      <div className="space-y-4">
        {faqs.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className={`group relative bg-white/80 dark:bg-brand-dark-surface/80 backdrop-blur-sm border border-stone-200/50 dark:border-white/10 rounded-2xl overflow-hidden transition-all duration-500 ${
                isOpen 
                  ? 'shadow-2xl shadow-gold-500/10 dark:shadow-gold-500/5 border-gold-300 dark:border-gold-500/30' 
                  : 'shadow-lg hover:shadow-xl hover:shadow-stone-200/50 dark:hover:shadow-black/50 hover:border-gold-200 dark:hover:border-gold-500/20'
              }`}
            >
              {/* Premium gradient accent */}
              <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-gold-400 to-gold-600 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`}></div>
              
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full flex items-center justify-between p-6 md:p-8 cursor-pointer text-left"
                type="button"
              >
                <div className="flex items-start gap-4 flex-1 pr-4">
                  {/* Question number indicator */}
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-serif font-bold text-sm transition-all duration-300 ${
                    isOpen 
                      ? 'bg-gold-500 text-white scale-110' 
                      : 'bg-stone-100 dark:bg-white/5 text-stone-500 dark:text-stone-400 group-hover:bg-gold-100 dark:group-hover:bg-gold-500/20 group-hover:text-gold-600 dark:group-hover:text-gold-400'
                  }`}>
                    {i + 1}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className={`text-lg md:text-xl font-serif font-semibold mb-2 transition-colors duration-300 ${
                      isOpen 
                        ? 'text-brand-dark dark:text-white' 
                        : 'text-brand-charcoal dark:text-stone-300 group-hover:text-gold-600 dark:group-hover:text-gold-400'
                    }`}>
                      {item.q}
                    </h3>
                  </div>
                </div>
                
                {/* Premium chevron icon */}
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                  isOpen 
                    ? 'bg-gold-500 text-white rotate-180 scale-110' 
                    : 'bg-stone-100 dark:bg-white/5 text-stone-400 dark:text-stone-500 group-hover:bg-gold-100 dark:group-hover:bg-gold-500/20 group-hover:text-gold-600 dark:group-hover:text-gold-400'
                }`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {/* Answer with smooth animation */}
              <div className={`overflow-hidden transition-all duration-500 ${
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 md:px-8 pb-6 md:pb-8 pl-20 md:pl-24">
                  <div className="pt-2 border-t border-stone-100 dark:border-white/5">
                    <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-base md:text-lg pt-4">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default FAQ;