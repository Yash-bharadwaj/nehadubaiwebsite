import React, { useState, useEffect } from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import SplitText from '../ui/SplitText';

const quotes = [
  { line1: "No awkward silences.", line2: "No dull moments.", line3: "Just seamless celebration." },
  { line1: "Energy that captivates.", line2: "Words that resonate.", line3: "Moments that matter." },
  { line1: "Professional yet personal.", line2: "Structured yet spontaneous.", line3: "Elegant yet engaging." },
];

const SignatureStyle: React.FC = () => {
  const [quoteIdx, setQuoteIdx] = useState(0);

  // Cycle through quotes
  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIdx((prev) => (prev + 1) % quotes.length);
    }, 4000); // Change quote every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const currentQuote = quotes[quoteIdx];

  return (
    <SectionWrapper className="bg-brand-secondary dark:bg-brand-dark-bg relative overflow-hidden transition-colors duration-500">
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-300 dark:via-white/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-300 dark:via-white/10 to-transparent"></div>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-gold-600 dark:text-gold-400 text-sm tracking-widest uppercase font-bold mb-2 block">Why Clients Choose Neha</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-brand-charcoal dark:text-white transition-colors">The Neha Dixit <br/>Signature</h2>
          <div className="space-y-8">
            {[
                { title: "Impeccable Speech", desc: "Clear, articulate, and commanding diction in English and Hindi." },
                { title: "Spontaneous Humour", desc: "Quick-witted interactions that keep the audience smiling." },
                { title: "Elegant Presence", desc: "A refined look and poise that elevates the event's prestige." },
                { title: "Seamless Transitions", desc: "Mastery in bridging gaps between segments smoothly." }
            ].map((item, i) => (
               <div key={i} className="flex gap-6 group">
                 <div className="mt-1 w-2 h-2 rounded-full bg-gold-500 ring-4 ring-gold-500/10 group-hover:ring-gold-500/30 transition-all"></div>
                 <div>
                     <h4 className="text-xl font-bold text-brand-charcoal dark:text-white mb-1 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">{item.title}</h4>
                     <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed transition-colors">{item.desc}</p>
                 </div>
               </div>
            ))}
          </div>
        </div>
        
        <div className="relative">
             <div className="absolute inset-0 bg-white/40 dark:bg-brand-dark-surface/40 blur-[60px] rounded-full opacity-60"></div>
             <div className="relative p-12 border border-white dark:border-white/10 rounded-3xl bg-white/60 dark:bg-brand-dark-surface/60 backdrop-blur-xl text-center shadow-lg shadow-stone-200/50 dark:shadow-black/50 transition-colors">
                <span className="text-6xl text-gold-500 font-serif opacity-30">"</span>
                <blockquote key={quoteIdx} className="text-2xl md:text-3xl font-serif italic text-brand-charcoal dark:text-white mb-8 leading-relaxed transition-all duration-500">
                    <div className="block mb-2">
                        <SplitText 
                            text={currentQuote.line1} 
                            delay={20}
                            duration={0.4}
                        />
                    </div>
                    <div className="block mb-2">
                        <SplitText 
                            text={currentQuote.line2} 
                            delay={40}
                            duration={0.4}
                        />
                    </div>
                    <div>
                        {currentQuote.line3 === "Just seamless celebration." ? (
                            <>
                                Just <span className="text-highlight">seamless celebration.</span>
                            </>
                        ) : currentQuote.line3 === "Moments that matter." ? (
                            <>
                                <span className="text-highlight">Moments that matter.</span>
                            </>
                        ) : currentQuote.line3 === "Elegant yet engaging." ? (
                            <>
                                <span className="text-highlight">Elegant yet engaging.</span>
                            </>
                        ) : (
                            <SplitText 
                                text={currentQuote.line3} 
                                delay={60}
                                duration={0.4}
                            />
                        )}
                    </div>
                </blockquote>
                <div className="h-1 w-20 bg-gold-500 mx-auto rounded-full"></div>
            </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SignatureStyle;