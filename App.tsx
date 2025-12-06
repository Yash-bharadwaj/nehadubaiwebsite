
import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import VideoCarousel from './components/sections/VideoCarousel';
import TheExperience from './components/sections/TheExperience';
import About from './components/sections/About';
import CelebritiesGallery from './components/sections/CelebritiesGallery';
import EventsShowcase from './components/sections/EventsShowcase';
import SignatureStyle from './components/sections/SignatureStyle';
import ClientsMarquee from './components/sections/ClientsMarquee';
import Testimonials from './components/sections/Testimonials';
import Process from './components/sections/Process';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';
import WhatsAppFloat from './components/ui/WhatsAppFloat';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme from local storage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? 'bg-brand-dark-bg' : 'bg-brand-primary'} text-brand-charcoal dark:text-brand-dark-text relative`}>
      {/* Background Ambience - Dynamic based on theme */}
      <div className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-1000">
        {isDarkMode ? (
             <>
               {/* Dark Theme Ambience (Gold/Purple/Deep Red) */}
               <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px]" />
               <div className="absolute top-[40%] right-[-10%] w-[35%] h-[35%] bg-gold-600/10 rounded-full blur-[120px]" />
               <div className="absolute bottom-[10%] left-[-5%] w-[30%] h-[30%] bg-brand-dark/40 rounded-full blur-[100px]" />
             </>
        ) : (
            <>
               {/* Light Theme Ambience (Rose/Orange/Gold) */}
               <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-rose-100/40 rounded-full blur-[120px]" />
               <div className="absolute top-[40%] right-[-10%] w-[35%] h-[35%] bg-orange-50/50 rounded-full blur-[120px]" />
               <div className="absolute bottom-[10%] left-[-5%] w-[30%] h-[30%] bg-gold-200/20 rounded-full blur-[100px]" />
            </>
        )}
      </div>

      <div className="relative z-10">
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <main className="flex flex-col gap-0">
          <Hero />
          <Stats />
          <VideoCarousel />
          <CelebritiesGallery />
          <TheExperience />
          <About />
          <EventsShowcase />
          <SignatureStyle />
          {/* <ClientsMarquee /> */}
          <Testimonials />
          <Process />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </div>
  );
}

export default App;
