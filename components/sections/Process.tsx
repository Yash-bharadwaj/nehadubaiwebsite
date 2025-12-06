import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';

const Process: React.FC = () => {
  return (
    <SectionWrapper id="process" className="bg-brand-secondary dark:bg-brand-dark-bg transition-colors duration-500">
      <div className="mb-16 md:text-center">
        <h2 className="text-4xl font-serif font-bold mb-4 text-brand-charcoal dark:text-white transition-colors">From Inquiry to Applause</h2>
        <p className="text-stone-500 dark:text-stone-400 transition-colors">A seamless, professional journey ensuring your event is in safe hands.</p>
      </div>
      
      <div className="grid md:grid-cols-4 gap-8 relative">
        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-stone-300 dark:via-white/10 to-transparent z-0"></div>

        {[
            { step: "01", title: "Connect", desc: "Share your event details, date, and vision." },
            { step: "02", title: "Align", desc: "We discuss the flow, tone, and script requirements." },
            { step: "03", title: "Rehearse", desc: "Run-throughs to ensure perfect timing (if needed)." },
            { step: "04", title: "Showtime", desc: "Neha takes the stage and creates magic." }
        ].map((item, i) => (
            <div key={i} className="relative z-10 pt-4 md:pt-0 group">
                <div className="w-16 h-16 rounded-full bg-white dark:bg-brand-dark-surface border border-stone-200 dark:border-white/10 group-hover:border-gold-500 dark:group-hover:border-gold-500 flex items-center justify-center text-xl font-serif font-bold text-gold-600 dark:text-gold-400 mb-6 mx-auto transition-colors shadow-lg shadow-stone-200 dark:shadow-black/20">
                    {item.step}
                </div>
                <div className="text-center px-4">
                    <h3 className="text-xl font-bold mb-3 text-brand-charcoal dark:text-white transition-colors">{item.title}</h3>
                    <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed transition-colors">{item.desc}</p>
                </div>
            </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Process;