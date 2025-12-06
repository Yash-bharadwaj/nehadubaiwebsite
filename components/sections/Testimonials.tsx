import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';

const Testimonials: React.FC = () => {
  return (
    <SectionWrapper>
      <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4 text-brand-charcoal dark:text-white transition-colors">Words From the Stage</h2>
          <p className="text-stone-500 dark:text-stone-400 transition-colors">Trusted by global brands and happy couples.</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {[
            { 
                text: "Neha was absolutely fantastic. She understood the crowd immediately and kept the energy high throughout the entire night. Highly recommended for corporate galas.", 
                author: "Sarah Jenkins", 
                role: "Marketing Director, TechCorp" 
            },
            { 
                text: "We were worried about keeping our wedding guests engaged during photos, but Neha worked her magic. She is funny, polite, and so classy.", 
                author: "Raj & Simran", 
                role: "Wedding Couple" 
            },
            { 
                text: "Professionalism at its peak. She arrived early, scripted the flow, and managed last-minute changes with a smile. A true partner in event success.", 
                author: "Ahmed Al-Fayed", 
                role: "Event Planner, Dubai" 
            }
        ].map((item, i) => (
          <div key={i} className="p-8 bg-white dark:bg-brand-dark-surface rounded-2xl border border-stone-100 dark:border-white/10 shadow-sm hover:shadow-xl hover:shadow-stone-200 dark:hover:shadow-black/50 transition-all duration-300 flex flex-col group">
            <div className="flex gap-1 text-gold-500 mb-6 text-sm">★★★★★</div>
            <p className="text-stone-600 dark:text-stone-300 mb-8 leading-relaxed italic flex-grow group-hover:text-brand-charcoal dark:group-hover:text-white transition-colors">"{item.text}"</p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-stone-200 dark:bg-white/10 flex items-center justify-center text-xs font-bold text-stone-700 dark:text-stone-300">
                  {item.author[0]}
              </div>
              <div>
                <div className="font-bold text-brand-charcoal dark:text-white text-sm transition-colors">{item.author}</div>
                <div className="text-xs text-stone-400 uppercase tracking-wide">{item.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;