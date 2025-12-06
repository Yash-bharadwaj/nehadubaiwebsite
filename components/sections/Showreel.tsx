import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';

const Showreel: React.FC = () => {
  return (
    <SectionWrapper id="showreel" className="bg-brand-dark dark:bg-black text-white transition-colors">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <span className="text-gold-500 text-sm tracking-widest uppercase font-bold">Showreel</span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Watch Her in Action</h2>
        <p className="text-stone-400">Capturing the energy, the elegance, and the seamless engagement.</p>
      </div>
      
      <div className="w-full max-w-6xl mx-auto aspect-video bg-black rounded-3xl border border-white/10 shadow-2xl shadow-black/50 flex items-center justify-center relative group cursor-pointer overflow-hidden">
        {/* Thumbnail Placeholder */}
        <div className="absolute inset-0 bg-stone-900 flex items-center justify-center">
            <span className="text-stone-600 font-serif italic text-xl">Video Thumbnail Placeholder</span>
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>

        {/* Play Button */}
        <div className="absolute z-10 w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-gold-500 group-hover:border-gold-500 transition-all duration-300">
            <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[22px] border-l-white border-b-[12px] border-b-transparent ml-2 group-hover:border-l-brand-dark transition-colors"></div>
        </div>
        
        {/* Bottom Bar Details */}
        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <p className="text-white font-medium">Highlights 2024</p>
            <p className="text-stone-400 text-sm">Corporate • Weddings • Awards</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto text-center">
          {[
              { title: "Crowd Engagement", desc: "Interactive and spontaneous" },
              { title: "Flawless Flow", desc: "No awkward pauses" },
              { title: "Versatile Style", desc: "Formal to fun in seconds" }
          ].map((feature, i) => (
              <div key={i} className="space-y-2">
                  <h4 className="text-gold-400 font-serif font-bold text-xl">{feature.title}</h4>
                  <p className="text-stone-500 text-sm">{feature.desc}</p>
              </div>
          ))}
      </div>
    </SectionWrapper>
  );
};

export default Showreel;