import React from 'react';
import SectionWrapper from '../components/layout/SectionWrapper';
import Button from '../components/ui/Button';
import LogoLoop from '../components/sections/LogoLoop';
import Testimonials from '../components/sections/Testimonials';
import PrivateEventBannerSlider from '../components/sections/PrivateEventBannerSlider';
import PrivateEventPhotoCarousel from '../components/sections/PrivateEventPhotoCarousel';
import CircularText from '../components/ui/CircularText';
import nehaImage from '../components/privateevents/nehaprivateevent.jpg';

const PrivateEvent: React.FC = () => {
  const services = [
    {
      title: 'Birthday Parties',
      description: 'Joyful and personalized hosting that makes every milestone celebration memorable and special. Creating moments that will be cherished forever.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.493 10.804 9.742 9.742 0 01-1.865-4.314 9.742 9.742 0 00-6.18 2.343.75.75 0 00-.75 1.298A11.243 11.243 0 0012.963 2.286zm-1.072.136a9.742 9.742 0 011.865 4.314 9.742 9.742 0 001.865-4.314 9.742 9.742 0 011.865 4.314 9.742 9.742 0 003.493-10.804.75.75 0 00-1.071-.136 9.742 9.742 0 00-6.18 2.343.75.75 0 00.75 1.298 11.243 11.243 0 01-1.648 6.18z" clipRule="evenodd" />
          <path d="M12 2.25a.75.75 0 01.75.75v6a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM5.25 12a.75.75 0 01.75-.75h6a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75zm11.5 0a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75z" />
        </svg>
      ),
      features: ['Milestone Celebrations', 'Theme Parties', 'Surprise Events', 'Family Gatherings']
    },
    {
      title: 'Anniversaries',
      description: 'Elegant and heartfelt hosting that honors years of love, commitment, and beautiful memories. Making your special day even more meaningful.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
        </svg>
      ),
      features: ['Wedding Anniversaries', 'Milestone Celebrations', 'Romantic Evenings', 'Intimate Gatherings']
    },
    {
      title: 'Celebrations',
      description: 'Warm and engaging hosting that brings people together for life\'s special moments and achievements. Creating joy and connection.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v6a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM5.25 12a.75.75 0 01.75-.75h6a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75zm11.5 0a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75z" clipRule="evenodd" />
          <path d="M12 8.25a.75.75 0 01.75.75v6a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zM5.25 12a.75.75 0 01.75-.75h6a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75zm11.5 0a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75z" />
        </svg>
      ),
      features: ['Achievement Celebrations', 'Graduations', 'Engagements', 'Special Milestones']
    },
    {
      title: 'Intimate Gatherings',
      description: 'Personal and warm hosting that creates a comfortable atmosphere for close friends and family. Making every guest feel special.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
          <path fillRule="evenodd" d="M20.25 10.332v9.918a21 21 0 01-3.328 1.39 6.003 6.003 0 01-5.562-2.491.75.75 0 00-1.12 0 6.003 6.003 0 01-5.562 2.491 21 21 0 01-3.328-1.39v-9.918a.75.75 0 00-.546-.721A9.006 9.006 0 002 12.25c0 1.506.434 2.908 1.187 4.094a.75.75 0 00.704.563h16.218a.75.75 0 00.704-.563A9.006 9.006 0 0022 12.25a9.006 9.006 0 00-1.204-4.639.75.75 0 00-.546.721z" clipRule="evenodd" />
        </svg>
      ),
      features: ['Dinner Parties', 'Cocktail Evenings', 'Close Friends', 'Family Reunions']
    },
    {
      title: 'Special Occasions',
      description: 'Thoughtful and customized hosting that makes every unique celebration feel extraordinary. Tailored to your vision.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
        </svg>
      ),
      features: ['Custom Events', 'Unique Celebrations', 'Personalized Themes', 'Exclusive Gatherings']
    },
    {
      title: 'Family Reunions',
      description: 'Warm and inclusive hosting that brings generations together with joy, laughter, and connection. Creating lasting family memories.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.125l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
        </svg>
      ),
      features: ['Multi-Generational', 'Family Traditions', 'Heritage Celebrations', 'Reunion Events']
    }
  ];

  return (
    <main className="flex flex-col gap-0">
      {/* Banner Slider */}
      <PrivateEventBannerSlider />

      {/* Photo Carousel */}
      <PrivateEventPhotoCarousel />

      {/* About Neha Section */}
      <SectionWrapper className="py-20 md:py-24 bg-white dark:bg-brand-dark-bg relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-amber-50/30 dark:bg-amber-950/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-purple-50/20 dark:bg-purple-950/15 rounded-full blur-[100px]"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative group">
              {/* Circular Text Animation */}
              <div className="absolute -right-8 -top-8 z-20 hidden lg:block">
                <div className="relative bg-white/90 dark:bg-amber-950/90 backdrop-blur-sm rounded-full p-3 shadow-xl border-2 border-amber-200/50 dark:border-amber-800/50">
                  <CircularText 
                    text="MEMORIES • ELEGANCE • JOY • LOVE • " 
                    radius={70}
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    {/* Heart/Star Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-amber-600 dark:text-amber-400">
                      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-5.74 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Multiple Glow Layers */}
              <div className="absolute -inset-6 bg-gradient-to-br from-amber-200/40 via-purple-200/30 to-amber-300/40 dark:from-amber-900/30 dark:via-purple-900/20 dark:to-amber-800/30 rounded-3xl blur-3xl group-hover:blur-[40px] transition-all duration-500"></div>
              <div className="absolute -inset-4 bg-gradient-to-br from-amber-100/50 via-purple-100/40 to-amber-200/50 dark:from-amber-800/25 dark:via-purple-800/20 dark:to-amber-700/25 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              
              {/* Background Pattern for Image Container */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-amber-50 via-purple-50 to-amber-100 dark:from-amber-950/50 dark:via-purple-950/40 dark:to-amber-900/50 opacity-80"></div>
              
              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-200/50 dark:border-amber-800/50 bg-gradient-to-br from-white via-amber-50/30 to-purple-50/20 dark:from-slate-900 dark:via-amber-950/20 dark:to-purple-950/20">
                {/* Subtle Pattern Overlay */}
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(245, 158, 11, 0.3) 1px, transparent 0)',
                  backgroundSize: '40px 40px'
                }}></div>
                
                <img 
                  src={nehaImage} 
                  alt="Neha Dixit - Private Event Emcee" 
                  className="relative z-10 w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{ 
                    objectFit: 'cover',
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-50 via-purple-50 to-amber-100 dark:from-amber-950/40 dark:via-purple-950/40 dark:to-amber-900/40 border border-amber-200/50 dark:border-amber-800/30 rounded-full w-fit">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-500 to-purple-500 animate-pulse"></div>
              <span className="text-xs font-semibold bg-gradient-to-r from-amber-700 via-purple-700 to-amber-600 dark:from-amber-300 dark:via-purple-300 dark:to-amber-400 bg-clip-text text-transparent uppercase tracking-wider">About Neha</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 dark:text-white leading-tight">
              An Elegant Private Event <span className="bg-gradient-to-r from-amber-600 via-purple-600 to-amber-500 dark:from-amber-400 dark:via-purple-400 dark:to-amber-300 bg-clip-text text-transparent">Host</span>
            </h2>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Neha hosts intimate gatherings from milestone birthdays and anniversaries to baby showers crafting every detail to reflect your unique story. 
              With bespoke games and experiences tailored to your guests' energy, she transforms celebrations into personalized, 
              effortlessly elegant moments that linger in memory.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Private Event Stats Section */}
      <section className="relative bg-gradient-to-br from-amber-600 via-purple-600 to-amber-500 dark:from-amber-800 dark:via-purple-800 dark:to-amber-700 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(30deg, transparent 48%, rgba(255,255,255,0.1) 49%, rgba(255,255,255,0.1) 51%, transparent 52%), linear-gradient(-30deg, transparent 48%, rgba(255,255,255,0.1) 49%, rgba(255,255,255,0.1) 51%, transparent 52%)',
            backgroundSize: '80px 80px'
          }}></div>
        </div>

        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-400/20 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/20 blur-[100px] rounded-full"></div>

        <SectionWrapper className="relative z-10 py-16 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {['200+', '150+', '100+', '50+'].map((value, idx) => (
              <div
                key={idx}
                className="text-center"
              >
                <span className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </section>

      {/* Services Section */}
      <SectionWrapper id="services" className="py-20 bg-white dark:bg-brand-dark-bg">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-slate-900 dark:text-white">
            Private Event Services
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Personalized hosting solutions for your most special moments
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative p-8 bg-gradient-to-br from-white via-amber-50/20 to-purple-50/30 dark:from-brand-dark-surface dark:via-amber-950/20 dark:to-purple-950/20 rounded-2xl border-2 border-amber-100 dark:border-amber-900/30 hover:border-amber-400 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10"
            >
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-100/50 via-purple-100/30 to-transparent dark:from-amber-900/20 dark:via-purple-900/20 rounded-bl-full"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-500 via-purple-500 to-amber-600 dark:from-amber-600 dark:via-purple-600 dark:to-amber-700 text-white flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-lg">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-serif font-bold mb-3 text-slate-900 dark:text-white group-hover:bg-gradient-to-r group-hover:from-amber-600 group-hover:to-purple-600 dark:group-hover:from-amber-400 dark:group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-amber-500 to-purple-500"></div>
                      <span className="text-slate-500 dark:text-slate-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Scrolling Brands Section */}
      <div className="bg-gradient-to-br from-slate-50 via-amber-50/20 to-purple-50/30 dark:from-slate-950 dark:via-amber-950/10 dark:to-purple-950/10">
        <LogoLoop />
      </div>

      {/* Testimonials Section */}
      <div className="bg-white dark:bg-brand-dark-bg">
        <Testimonials />
      </div>

      {/* Why Choose Section */}
      <SectionWrapper className="py-20 bg-gradient-to-br from-amber-50/50 via-white to-purple-50/30 dark:from-amber-950/20 dark:via-brand-dark-bg dark:to-purple-950/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-slate-900 dark:text-white">
            Why Choose Personal Event Hosting?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-12">
            Private events are about more than just hosting—they're about creating moments that matter. 
            I bring warmth, elegance, and a personal touch that makes your celebration truly special.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Personal Touch',
                description: 'Every event is customized to reflect your unique style, preferences, and vision.'
              },
              {
                title: 'Warm & Engaging',
                description: 'Creating comfortable, welcoming atmospheres where guests feel at ease and connected.'
              },
              {
                title: 'Memorable Moments',
                description: 'Ensuring every celebration becomes a cherished memory for you and your loved ones.'
              }
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-white/60 dark:bg-brand-dark-surface/60 backdrop-blur-sm rounded-xl border border-amber-100 dark:border-amber-900/30">
                <h3 className="text-xl font-serif font-bold mb-3 text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="py-20 bg-gradient-to-r from-amber-600 via-purple-600 to-amber-500 dark:from-amber-800 dark:via-purple-800 dark:to-amber-700">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
            Ready to Make Your Event Unforgettable?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Let's discuss how we can create a celebration that perfectly captures your special moment.
          </p>
          <Button variant="secondary" size="lg" onClick={() => window.location.href = '/contact'}>
            Get in Touch
          </Button>
        </div>
      </SectionWrapper>
    </main>
  );
};

export default PrivateEvent;
