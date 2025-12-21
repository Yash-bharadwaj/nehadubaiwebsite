import React from 'react';
import { useNavigate } from 'react-router-dom';
import SectionWrapper from '../layout/SectionWrapper';

const experiences = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M3 2.25a.75.75 0 00-.75.75v18a.75.75 0 00.75.75h18a.75.75 0 00.75-.75V3a.75.75 0 00-.75-.75H3zm6 12a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-4.5zM6 6.75A.75.75 0 016.75 6h10.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75v-4.5z" clipRule="evenodd" />
      </svg>
    ),
    title: 'Corporate Excellence',
    description: 'Leading high-stakes corporate events, conferences, and award ceremonies for Fortune 500 companies across the UAE and internationally.',
    path: '/experience/corporate',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
      </svg>
    ),
    title: 'Wedding Specialist',
    description: 'Creating magical moments at elegant weddings, sangeets, and celebrations, bringing warmth and joy to the most special days.',
    path: '/experience/weddings',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.112-3.173 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.348zm13.668 8.036a5.266 5.266 0 01-2.864 3.206 5.266 5.266 0 002.864-3.206zm-3.398-3.844c.85.055 1.686.125 2.51.211a5.266 5.266 0 01-2.51-3.642v3.431z" clipRule="evenodd" />
      </svg>
    ),
    title: 'Award Ceremonies',
    description: 'Hosting prestigious award ceremonies and recognition events, bringing prestige and energy to celebrate achievements.',
    path: '/experience/corporate',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.125l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
      </svg>
    ),
    title: 'Celebrity Engagements',
    description: 'Working alongside international celebrities and public figures, ensuring seamless and professional interactions.',
    path: '/experience/private-events',
  },
];

const AboutExperience: React.FC = () => {
  const navigate = useNavigate();

  const handleCardClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="relative bg-brand-primary dark:bg-gradient-to-b dark:from-brand-dark-surface dark:via-brand-dark-bg dark:to-brand-dark-surface overflow-hidden transition-colors">
      {/* Gradients - Light & Dark Mode */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-gold-200/15 dark:bg-gold-600/10 rounded-full blur-[120px] transition-opacity"></div>
        <div className="absolute bottom-0 left-0 w-[35%] h-[35%] bg-purple-100/20 dark:bg-purple-900/20 rounded-full blur-[110px] transition-opacity"></div>
      </div>

      {/* Professional Pattern - Light & Dark Mode */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] dark:opacity-[0.035]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(45deg, transparent 48%, rgba(0,0,0,0.03) 49%, rgba(0,0,0,0.03) 51%, transparent 52%), linear-gradient(-45deg, transparent 48%, rgba(0,0,0,0.03) 49%, rgba(0,0,0,0.03) 51%, transparent 52%)',
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      <SectionWrapper className="relative z-10 py-20 md:py-24">
        <div className="text-center mb-16">
          <span className="text-gold-600 dark:text-gold-500 text-sm tracking-widest uppercase font-bold inline-block mb-4 transition-colors">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 text-brand-charcoal dark:text-white transition-colors">
            Areas of Excellence
          </h2>
          <p className="text-stone-600 dark:text-stone-400 max-w-2xl mx-auto text-lg transition-colors">
            Specialized experience across diverse event types and industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(exp.path)}
              className="group p-8 bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-stone-200 dark:border-white/10 hover:border-gold-500/50 dark:hover:border-gold-500/30 transition-all duration-300 shadow-lg hover:shadow-gold-500/10 cursor-pointer hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-full bg-gold-100 dark:bg-gold-500/20 border border-gold-300 dark:border-gold-500/30 flex items-center justify-center text-gold-600 dark:text-gold-400 mb-6 group-hover:scale-110 group-hover:bg-gold-200 dark:group-hover:bg-gold-500/30 transition-all duration-300">
                {exp.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-brand-charcoal dark:text-white transition-colors">
                {exp.title}
              </h3>
              <p className="text-stone-600 dark:text-stone-300 leading-relaxed transition-colors">
                {exp.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <button
            onClick={() => {
              const phoneNumber = '+971552574806';
              const message = encodeURIComponent("Hello! I'm interested in booking Neha for an event.");
              window.open(`https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
            }}
            className="px-8 py-4 bg-gold-500 hover:bg-gold-400 text-white rounded-full font-semibold shadow-xl shadow-gold-500/30 hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            Let's Get Started
          </button>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default AboutExperience;
