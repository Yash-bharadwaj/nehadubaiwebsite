import React from 'react';
import SectionWrapper from '../components/layout/SectionWrapper';
import LogoLoop from '../components/sections/LogoLoop';
import Testimonials from '../components/sections/Testimonials';
import CommunityBannerSlider from '../components/sections/CommunityBannerSlider';
import CommunityPhotoCarousel from '../components/sections/CommunityPhotoCarousel';
import CircularText from '../components/ui/CircularText';
import nehaImage from '../components/Community Events/community-event-04.jpg';

const Community: React.FC = () => {
  const services = [
    {
      title: 'Cultural Festivals',
      description: 'Vibrant and respectful hosting that celebrates traditions, heritage, and cultural diversity. Creating inclusive experiences for all.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
        </svg>
      ),
      features: ['Heritage Celebrations', 'Traditional Performances', 'Cultural Diversity', 'Community Unity']
    },
    {
      title: 'Charity Events',
      description: 'Compassionate and inspiring hosting that amplifies causes and brings communities together for meaningful impact.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-5.74 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
        </svg>
      ),
      features: ['Fundraising', 'Cause Awareness', 'Community Support', 'Social Impact']
    },
    {
      title: 'Community Gatherings',
      description: 'Welcoming and inclusive hosting that fosters connection and strengthens community bonds across all ages.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.125l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
        </svg>
      ),
      features: ['Neighborhood Events', 'Family Activities', 'Social Connections', 'Community Building']
    },
    {
      title: 'Public Celebrations',
      description: 'Energetic and engaging hosting that brings excitement and joy to large-scale public events and festivals.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.493 10.804 9.742 9.742 0 01-1.865-4.314 9.742 9.742 0 00-6.18 2.343.75.75 0 00-.75 1.298A11.243 11.243 0 0012.963 2.286zm-1.072.136a9.742 9.742 0 011.865 4.314 9.742 9.742 0 001.865-4.314 9.742 9.742 0 011.865 4.314 9.742 9.742 0 003.493-10.804.75.75 0 00-1.071-.136 9.742 9.742 0 00-6.18 2.343.75.75 0 00.75 1.298 11.243 11.243 0 01-1.648 6.18z" clipRule="evenodd" />
          <path d="M12 2.25a.75.75 0 01.75.75v6a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM5.25 12a.75.75 0 01.75-.75h6a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75zm11.5 0a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75z" />
        </svg>
      ),
      features: ['Festival Hosting', 'Public Events', 'Entertainment', 'Large Gatherings']
    },
    {
      title: 'Fundraisers',
      description: 'Inspiring and motivational hosting that drives support and creates meaningful impact for important causes.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v6a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM5.25 12a.75.75 0 01.75-.75h6a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75zm11.5 0a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75z" clipRule="evenodd" />
          <path d="M12 8.25a.75.75 0 01.75.75v6a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zM5.25 12a.75.75 0 01.75-.75h6a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75zm11.5 0a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75z" />
        </svg>
      ),
      features: ['Cause Support', 'Donation Drives', 'Awareness Campaigns', 'Community Impact']
    },
    {
      title: 'Religious Events',
      description: 'Respectful and reverent hosting that honors faith traditions and brings communities together in worship.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 01.122 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
        </svg>
      ),
      features: ['Faith Celebrations', 'Religious Festivals', 'Spiritual Gatherings', 'Community Worship']
    }
  ];

  return (
    <main className="flex flex-col gap-0">
      {/* Banner Slider */}
      <CommunityBannerSlider />

      {/* Photo Carousel */}
      <CommunityPhotoCarousel />

      {/* About Neha Section */}
      <SectionWrapper className="py-20 md:py-24 bg-white dark:bg-brand-dark-bg relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-emerald-50/30 dark:bg-emerald-950/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-teal-50/20 dark:bg-teal-950/15 rounded-full blur-[100px]"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative group">
              {/* Circular Text Animation */}
              <div className="absolute -right-8 -top-8 z-20 hidden lg:block">
                <div className="relative bg-white/90 dark:bg-emerald-950/90 backdrop-blur-sm rounded-full p-3 shadow-xl border-2 border-emerald-200/50 dark:border-emerald-800/50">
                  <CircularText 
                    text="COMMUNITY • UNITY • JOY • TOGETHER • " 
                    radius={70}
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    {/* Community Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-emerald-600 dark:text-emerald-400">
                      <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.125l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Multiple Glow Layers */}
              <div className="absolute -inset-6 bg-gradient-to-br from-emerald-200/40 via-teal-200/30 to-emerald-300/40 dark:from-emerald-900/30 dark:via-teal-900/20 dark:to-emerald-800/30 rounded-3xl blur-3xl group-hover:blur-[40px] transition-all duration-500"></div>
              <div className="absolute -inset-4 bg-gradient-to-br from-emerald-100/50 via-teal-100/40 to-emerald-200/50 dark:from-emerald-800/25 dark:via-teal-800/20 dark:to-emerald-700/25 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              
              {/* Background Pattern for Image Container */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100 dark:from-emerald-950/50 dark:via-teal-950/40 dark:to-emerald-900/50 opacity-80"></div>
              
              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-emerald-200/50 dark:border-emerald-800/50 bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/20 dark:from-slate-900 dark:via-emerald-950/20 dark:to-teal-950/20">
                <img 
                  src={nehaImage} 
                  alt="Neha Dixit - Community Event Host" 
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-100 dark:from-emerald-950/40 dark:via-teal-950/40 dark:to-emerald-900/40 border border-emerald-200/50 dark:border-emerald-800/30 rounded-full w-fit">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 animate-pulse"></div>
              <span className="text-xs font-semibold bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-600 dark:from-emerald-300 dark:via-teal-300 dark:to-emerald-400 bg-clip-text text-transparent uppercase tracking-wider">About Neha</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 dark:text-white leading-tight">
              A Refined Community <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 dark:from-emerald-400 dark:via-teal-400 dark:to-emerald-300 bg-clip-text text-transparent">Host</span>
            </h2>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Neha is a refined and engaging host who brings elegance and energy to every community event. Trusted by prestigious communities such as Dubai Holding Community Management, DAMAC Hills, and Badr Community, she seamlessly curates memorable experiences through polished stage presence, thoughtfully designed games, and effortless audience engagement. Her ability to connect with guests of all ages, while ensuring flawless event flow and premium prize experiences, makes her a standout host admired by both clients and communities alike.
            </p>
            
            <div className="pt-4">
              <button
                onClick={() => {
                  const phoneNumber = '+971552574806';
                  const message = encodeURIComponent('Hello! I\'m interested in booking Neha for my community event. 🌟');
                  window.open(`https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
                }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 dark:from-emerald-500 dark:via-teal-500 dark:to-emerald-600 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105 group"
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

      {/* Stats Section */}
      <section className="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-500 dark:from-emerald-800 dark:via-teal-800 dark:to-emerald-700 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(30deg, transparent 48%, rgba(255,255,255,0.1) 49%, rgba(255,255,255,0.1) 51%, transparent 52%), linear-gradient(-30deg, transparent 48%, rgba(255,255,255,0.1) 49%, rgba(255,255,255,0.1) 51%, transparent 52%)',
            backgroundSize: '80px 80px'
          }}></div>
        </div>

        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-400/20 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-400/20 blur-[100px] rounded-full"></div>

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
                <p className="text-xs md:text-sm uppercase tracking-wider text-emerald-100 dark:text-emerald-200 font-medium">
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
            Community Services
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Comprehensive hosting solutions for community events and gatherings
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative p-8 bg-gradient-to-br from-white via-emerald-50/20 to-teal-50/30 dark:from-brand-dark-surface dark:via-emerald-950/20 dark:to-teal-950/20 rounded-2xl border-2 border-emerald-100 dark:border-emerald-900/30 hover:border-emerald-400 dark:hover:border-teal-600 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10"
            >
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-100/50 via-teal-100/30 to-transparent dark:from-emerald-900/20 dark:via-teal-900/20 rounded-bl-full"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500 via-teal-500 to-emerald-600 dark:from-emerald-600 dark:via-teal-600 dark:to-emerald-700 text-white flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-lg">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-serif font-bold mb-3 text-slate-900 dark:text-white group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-teal-600 dark:group-hover:from-emerald-400 dark:group-hover:to-teal-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"></div>
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
      <div className="bg-gradient-to-br from-slate-50 via-emerald-50/20 to-teal-50/30 dark:from-slate-950 dark:via-emerald-950/10 dark:to-teal-950/10">
        <LogoLoop />
      </div>

      {/* Testimonials Section */}
      <div className="bg-white dark:bg-brand-dark-bg">
        <Testimonials />
      </div>

      {/* Why Choose Section */}
      <SectionWrapper className="py-20 bg-gradient-to-br from-emerald-50/50 via-white to-teal-50/30 dark:from-emerald-950/20 dark:via-brand-dark-bg dark:to-teal-950/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-slate-900 dark:text-white">
            Why Choose Community Event Hosting?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-12">
            Community events bring people together. I bring the expertise, energy, and engagement 
            that ensures every gathering is memorable, inclusive, and impactful for all attendees.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Inclusive Engagement',
                description: 'Connecting with guests of all ages and backgrounds, ensuring everyone feels welcome and involved.'
              },
              {
                title: 'Community Trust',
                description: 'Trusted by prestigious communities across the UAE for polished, professional hosting.'
              },
              {
                title: 'Flawless Execution',
                description: 'Seamless event flow, thoughtful games, and premium experiences that leave lasting impressions.'
              }
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-white/60 dark:bg-brand-dark-surface/60 backdrop-blur-sm rounded-xl border border-emerald-100 dark:border-emerald-900/30">
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
      <SectionWrapper className="py-20 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 dark:from-emerald-800 dark:via-teal-800 dark:to-emerald-700 relative overflow-hidden">
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
            Ready to Bring Your Community Together?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Let's discuss how we can create memorable experiences for your community event.
          </p>
          <button
            onClick={() => {
              const phoneNumber = '+971552574806';
              const message = encodeURIComponent('Hello! I\'m interested in booking Neha for my community event. 🌟');
              window.open(`https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
            }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-emerald-600 dark:text-emerald-700 font-semibold rounded-full hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105 group text-lg"
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

export default Community;
