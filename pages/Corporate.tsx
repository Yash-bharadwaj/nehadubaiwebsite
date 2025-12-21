import React from 'react';
import SectionWrapper from '../components/layout/SectionWrapper';
import LogoLoop from '../components/sections/LogoLoop';
import Testimonials from '../components/sections/Testimonials';
import CorporateBannerSlider from '../components/sections/CorporateBannerSlider';
import CorporatePhotoCarousel from '../components/sections/CorporatePhotoCarousel';
import VideoCarousel from '../components/sections/VideoCarousel';
import nehaImage from '../components/ExperiencePhotos/481274205_645326694678849_7226011552932312246_n.jpg';

const Corporate: React.FC = () => {
  const services = [
    {
      title: 'Conferences',
      description: 'Leading high-stakes corporate conferences with professionalism, clarity, and engaging presence. From keynote introductions to panel moderation, ensuring seamless flow and maximum impact.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path fillRule="evenodd" d="M3 2.25a.75.75 0 00-.75.75v18a.75.75 0 00.75.75h18a.75.75 0 00.75-.75V3a.75.75 0 00-.75-.75H3zm6 12a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-4.5zM6 6.75A.75.75 0 016.75 6h10.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75v-4.5z" clipRule="evenodd" />
        </svg>
      ),
      features: ['Keynote Introductions', 'Panel Moderation', 'Q&A Sessions', 'Networking Facilitation']
    },
    {
      title: 'Team Building',
      description: 'Transforming corporate gatherings into engaging experiences that build connections and boost morale. Creating memorable moments that strengthen team bonds.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.125l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
        </svg>
      ),
      features: ['Offsite Events', 'Retreats', 'Workshops', 'Team Activities']
    },
    {
      title: 'Award Ceremonies',
      description: 'High-energy celebration and prestige hosting that honors achievements and excellence. Creating moments of recognition that inspire and motivate.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path fillRule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.112-3.173 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.348zm13.668 8.036a5.266 5.266 0 01-2.864 3.206 5.266 5.266 0 002.864-3.206zm-3.398-3.844c.85.055 1.686.125 2.51.211a5.266 5.266 0 01-2.51-3.642v3.431z" clipRule="evenodd" />
        </svg>
      ),
      features: ['Employee Recognition', 'Annual Awards', 'Achievement Celebrations', 'Excellence Awards']
    },
    {
      title: 'Product Launches',
      description: 'Excitement and product-focused hosting that creates buzz and highlights innovation. Building anticipation and delivering memorable launch experiences.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436h.003c-1.228.956-2.64 1.776-4.174 2.396a7.518 7.518 0 01-2.92.589c-1.267 0-2.513-.309-3.645-.904l-1.637 1.638a.75.75 0 01-1.06 0l-1.5-1.5a.75.75 0 010-1.06l1.637-1.637c-.595-1.132-.904-2.38-.904-3.645 0-1.025.2-2.022.589-2.92 .62-1.534 1.44-2.946 2.396-4.174zM3.86 17.515c.67.24 1.4.375 2.14.375.313 0 .624-.025.932-.073l-3.328-3.328c-.048.308-.073.619-.073.931 0 .74.135 1.47.375 2.14.225.626.069 1.341-.444 1.854l-1.5 1.5a.75.75 0 001.06 1.06l1.5-1.5c.513-.513 1.228-.669 1.854-.444l-.216-.215z" clipRule="evenodd" />
        </svg>
      ),
      features: ['Product Reveals', 'Brand Launches', 'Innovation Showcases', 'Market Introductions']
    },
    {
      title: 'Annual Meetings',
      description: 'Professional hosting that ensures smooth flow, clear communication, and engagement throughout. Managing complex agendas with precision and grace.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
        </svg>
      ),
      features: ['AGMs', 'Board Meetings', 'Stakeholder Gatherings', 'Strategic Sessions']
    },
    {
      title: 'Workshops & Seminars',
      description: 'Engaging and interactive hosting that facilitates learning and knowledge sharing. Creating environments where ideas flourish and connections form.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912.75.75 0 01-.84 0 49.951 49.951 0 00-9.903-3.912.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
          <path fillRule="evenodd" d="M.75 13.5a.75.75 0 01.75-.75h.383a1 1 0 01.949.69l1.549 4.65a.75.75 0 01-.405.95 12.67 12.67 0 00-6.462 4.48.75.75 0 01-.832-.248l-.21-.297a1.125 1.125 0 011.936-1.287l1.006-1.005a2.237 2.237 0 011.07-.547l1.797-.432A.75.75 0 01.75 13.5zm13.5 0a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008zm-5.136 0a.75.75 0 01.75-.75h.675l.109-.649A3.375 3.375 0 0114.142 10.5h.592a.75.75 0 01.478 1.323l-1.732 1.464a.25.25 0 00-.119.22v1.607a.75.75 0 01-.75.75h-.843a.75.75 0 01-.75-.75v-.345l-1.992-1.683A.75.75 0 019 13.125v-1.5a.75.75 0 01.614-.728z" clipRule="evenodd" />
        </svg>
      ),
      features: ['Training Sessions', 'Educational Events', 'Skill Development', 'Knowledge Sharing']
    }
  ];

  return (
    <main className="flex flex-col gap-0">
      {/* Banner Slider */}
      <CorporateBannerSlider />

      {/* Photo Carousel */}
      <CorporatePhotoCarousel />

      {/* About Neha Section */}
      <SectionWrapper className="py-20 md:py-24 bg-white dark:bg-brand-dark-bg relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-orange-50/30 dark:bg-orange-950/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-red-50/20 dark:bg-red-950/15 rounded-full blur-[100px]"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative group">
              {/* Multiple Glow Layers */}
              <div className="absolute -inset-6 bg-gradient-to-br from-orange-200/40 via-red-200/30 to-orange-300/40 dark:from-orange-900/30 dark:via-red-900/20 dark:to-orange-800/30 rounded-3xl blur-3xl group-hover:blur-[40px] transition-all duration-500"></div>
              <div className="absolute -inset-4 bg-gradient-to-br from-orange-100/50 via-red-100/40 to-orange-200/50 dark:from-orange-800/25 dark:via-red-800/20 dark:to-orange-700/25 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              
              {/* Background Pattern for Image Container */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-orange-50 via-red-50 to-orange-100 dark:from-orange-950/50 dark:via-red-950/40 dark:to-orange-900/50 opacity-80"></div>
              
              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-orange-200/50 dark:border-orange-800/50 bg-gradient-to-br from-white via-orange-50/30 to-red-50/20 dark:from-slate-900 dark:via-orange-950/20 dark:to-red-950/20">
                {/* Subtle Pattern Overlay */}
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(251, 146, 60, 0.3) 1px, transparent 0)',
                  backgroundSize: '40px 40px'
                }}></div>
                
                <img 
                  src={nehaImage} 
                  alt="Neha Dixit - Corporate Emcee" 
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-50 via-red-50 to-orange-100 dark:from-orange-950/40 dark:via-red-950/40 dark:to-orange-900/40 border border-orange-200/50 dark:border-orange-800/30 rounded-full w-fit">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 animate-pulse"></div>
              <span className="text-xs font-semibold bg-gradient-to-r from-orange-700 via-red-700 to-orange-600 dark:from-orange-300 dark:via-red-300 dark:to-orange-400 bg-clip-text text-transparent uppercase tracking-wider">About Neha</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 dark:text-white leading-tight">
              A Seasoned Corporate <span className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-500 dark:from-orange-400 dark:via-red-400 dark:to-orange-300 bg-clip-text text-transparent">Emcee</span>
            </h2>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Neha is a seasoned corporate emcee hosting high-profile corporate awards, high-profile awards galas, and team-building engagements across the UAE.
            </p>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Known for her ability to design and deliver unique, high-energy team-building experiences, Neha energizes employees, strengthens collaboration, and creates impactful corporate events with professionalism and finesse.
            </p>

            <div className="pt-4">
              <button
                onClick={() => {
                  const phoneNumber = '+971552574806';
                  const message = encodeURIComponent('Hello! I\'m interested in booking Neha for my corporate event. 🎯');
                  window.open(`https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
                }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-600 via-red-600 to-orange-500 dark:from-orange-500 dark:via-red-500 dark:to-orange-600 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 hover:scale-105 group"
              >
                <span>Let's Get Started</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                  <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.5A60.517 60.517 0 003.478 2.405z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Corporate Stats Section */}
      <section className="relative bg-gradient-to-br from-orange-600 via-red-600 to-orange-500 dark:from-orange-800 dark:via-red-800 dark:to-orange-700 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(30deg, transparent 48%, rgba(255,255,255,0.1) 49%, rgba(255,255,255,0.1) 51%, transparent 52%), linear-gradient(-30deg, transparent 48%, rgba(255,255,255,0.1) 49%, rgba(255,255,255,0.1) 51%, transparent 52%)',
            backgroundSize: '80px 80px'
          }}></div>
        </div>

        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-400/20 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-400/20 blur-[100px] rounded-full"></div>

        <SectionWrapper className="relative z-10 py-16 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: '500+', label: 'Events Hosted' },
              { value: '8+', label: 'Years Experience' },
              { value: '100+', label: 'Happy Clients' },
              { value: '12+', label: 'Industries' }
            ].map((stat, idx) => (
              <div
                key={idx}
                className="text-center"
              >
                <div className="flex justify-center items-end leading-none mb-3">
                  <span className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white">
                    {stat.value}
                  </span>
                </div>
                <p className="text-xs md:text-sm uppercase tracking-wider text-orange-100 dark:text-orange-200 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </section>

      {/* Services Section */}
      <SectionWrapper id="services" className="py-20 bg-white dark:bg-brand-dark-bg">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-slate-900 dark:text-white">
            Corporate Services
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Comprehensive hosting solutions tailored for your corporate needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative p-8 bg-gradient-to-br from-white via-orange-50/20 to-red-50/30 dark:from-brand-dark-surface dark:via-orange-950/20 dark:to-red-950/20 rounded-2xl border-2 border-orange-100 dark:border-orange-900/30 hover:border-orange-400 dark:hover:border-red-600 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10"
            >
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-100/50 via-red-100/30 to-transparent dark:from-orange-900/20 dark:via-red-900/20 rounded-bl-full"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 via-red-500 to-orange-600 dark:from-orange-600 dark:via-red-600 dark:to-orange-700 text-white flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-lg">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-serif font-bold mb-3 text-slate-900 dark:text-white group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-red-600 dark:group-hover:from-orange-400 dark:group-hover:to-red-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500"></div>
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
      <div className="bg-gradient-to-br from-slate-50 via-orange-50/20 to-red-50/30 dark:from-slate-950 dark:via-orange-950/10 dark:to-red-950/10">
        <LogoLoop />
      </div>

      {/* Video Carousel Section */}
      <VideoCarousel />

      {/* Testimonials Section */}
      <div className="bg-white dark:bg-brand-dark-bg">
        <Testimonials />
      </div>

      {/* Why Choose Section */}
      <SectionWrapper className="py-20 bg-gradient-to-br from-orange-50/50 via-white to-red-50/30 dark:from-orange-950/20 dark:via-brand-dark-bg dark:to-red-950/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-slate-900 dark:text-white">
            Why Choose Professional Corporate Hosting?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-12">
            In the corporate world, every detail matters. From Fortune 500 companies to startups, 
            I bring a level of professionalism and expertise that ensures your event reflects your brand's excellence.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Brand Alignment',
                description: 'Every word, every moment aligned with your corporate identity and values.'
              },
              {
                title: 'Professional Excellence',
                description: 'Years of experience hosting high-stakes corporate events across industries.'
              },
              {
                title: 'Seamless Execution',
                description: 'Flawless coordination ensuring your event runs smoothly from start to finish.'
              }
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-white/60 dark:bg-brand-dark-surface/60 backdrop-blur-sm rounded-xl border border-orange-100 dark:border-orange-900/30">
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
      <SectionWrapper className="py-20 bg-gradient-to-r from-orange-600 via-red-600 to-orange-500 dark:from-orange-800 dark:via-red-800 dark:to-orange-700 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32">
            <svg viewBox="0 0 100 100" className="w-full h-full text-white">
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
              <path d="M50,10 Q60,40 50,70 Q40,40 50,10" fill="currentColor" opacity="0.2"/>
              <path d="M10,50 Q40,60 70,50 Q40,40 10,50" fill="currentColor" opacity="0.2"/>
            </svg>
          </div>
          <div className="absolute bottom-10 right-10 w-40 h-40">
            <svg viewBox="0 0 100 100" className="w-full h-full text-white">
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
              <path d="M50,10 Q60,40 50,70 Q40,40 50,10" fill="currentColor" opacity="0.2"/>
              <path d="M10,50 Q40,60 70,50 Q40,40 10,50" fill="currentColor" opacity="0.2"/>
            </svg>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
            Ready to Elevate Your Corporate Event?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Let's discuss how we can make your next corporate gathering unforgettable.
          </p>
          <button
            onClick={() => {
              const phoneNumber = '+971552574806';
              const message = encodeURIComponent('Hello! I\'m interested in booking Neha for my corporate event. 🎯');
              window.open(`https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
            }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-orange-600 dark:text-orange-700 font-semibold rounded-full hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105 group text-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.408 3.488 2.241 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.889-9.881-9.889-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.984zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.47-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.865 1.213 3.063c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span>Let's Get Started</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
              <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.5A60.517 60.517 0 003.478 2.405z" />
            </svg>
          </button>
        </div>
      </SectionWrapper>
    </main>
  );
};

export default Corporate;
