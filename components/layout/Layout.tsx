import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import WhatsAppFloat from '../ui/WhatsAppFloat';
import SocialFloat from '../ui/SocialFloat';
import ScrollPopup from '../ui/ScrollPopup';

const Layout: React.FC = () => {
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
        <ScrollToTop />
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <Outlet />
        <Footer />
        <WhatsAppFloat />
        <SocialFloat />
        <ScrollPopup />
      </div>
    </div>
  );
};

export default Layout;

