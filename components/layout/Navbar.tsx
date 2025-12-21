import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NAV_ITEMS, BRAND_NAME } from '../../lib/constants';
import Button from '../ui/Button';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [experienceMenuOpen, setExperienceMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled 
          ? 'bg-white/80 dark:bg-brand-dark-surface/80 backdrop-blur-lg border-stone-200/50 dark:border-white/10 py-3 shadow-sm' 
          : 'bg-transparent py-6 border-transparent'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <Link to="/" className="text-2xl font-serif font-bold tracking-wider text-brand-charcoal dark:text-white transition-colors">
          {BRAND_NAME}
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            if (item.label === 'Experience') {
              const experienceMenuItems = [
                {
                  label: 'Weddings',
                  path: '/experience/weddings',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>
                  ),
                  color: 'text-rose-500 dark:text-rose-400'
                },
                {
                  label: 'Corporate Events',
                  path: '/experience/corporate',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M3 2.25a.75.75 0 00-.75.75v18a.75.75 0 00.75.75h18a.75.75 0 00.75-.75V3a.75.75 0 00-.75-.75H3zm6 12a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-4.5zM6 6.75A.75.75 0 016.75 6h10.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75v-4.5z" clipRule="evenodd" />
                    </svg>
                  ),
                  color: 'text-blue-500 dark:text-blue-400'
                },
                {
                  label: 'Private Events',
                  path: '/experience/private-events',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
                      <path fillRule="evenodd" d="M20.25 10.332v9.918a21 21 0 01-3.328 1.39 6.003 6.003 0 01-5.562-2.491.75.75 0 00-1.12 0 6.003 6.003 0 01-5.562 2.491 21 21 0 01-3.328-1.39v-9.918a.75.75 0 00-.546-.721A9.006 9.006 0 002 12.25c0 1.506.434 2.908 1.187 4.094a.75.75 0 00.704.563h16.218a.75.75 0 00.704-.563A9.006 9.006 0 0022 12.25a9.006 9.006 0 00-1.204-4.639.75.75 0 00-.546.721z" clipRule="evenodd" />
                    </svg>
                  ),
                  color: 'text-purple-500 dark:text-purple-400'
                },
                {
                  label: 'Community Events',
                  path: '/experience/community',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.125l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                    </svg>
                  ),
                  color: 'text-green-500 dark:text-green-400'
                }
              ];

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setExperienceMenuOpen(true)}
                  onMouseLeave={() => setExperienceMenuOpen(false)}
                >
                  <button
                    className={`text-xs uppercase tracking-[0.2em] transition-colors font-medium flex items-center gap-1 ${
                      experienceMenuOpen 
                        ? 'text-gold-600 dark:text-gold-400' 
                        : 'text-stone-500 dark:text-stone-400 hover:text-gold-600 dark:hover:text-gold-400'
                    }`}
                  >
                    {item.label}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className={`w-4 h-4 transition-transform duration-200 ${experienceMenuOpen ? 'rotate-180' : ''}`}
                    >
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </button>
                  
                  {/* Bridge to prevent gap */}
                  <div className="absolute top-full left-0 right-0 h-2"></div>
                  
                  {experienceMenuOpen && (
                    <div className="absolute top-full left-0 pt-2 w-64 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="bg-white dark:bg-brand-dark-surface rounded-xl shadow-2xl border border-stone-200/50 dark:border-white/10 backdrop-blur-xl overflow-hidden">
                        {/* Premium header */}
                        <div className="px-4 py-3 bg-gradient-to-r from-gold-50 to-gold-100/50 dark:from-gold-900/20 dark:to-gold-800/10 border-b border-gold-200/50 dark:border-gold-800/30">
                          <p className="text-xs uppercase tracking-widest text-gold-700 dark:text-gold-300 font-bold">Experience Types</p>
                        </div>
                        
                        <div className="py-2">
                          {experienceMenuItems.map((menuItem, idx) => (
                            <Link
                              key={idx}
                              to={menuItem.path}
                              className="group flex items-center gap-3 px-4 py-3 text-sm text-stone-700 dark:text-stone-200 hover:bg-gold-50 dark:hover:bg-gold-900/20 transition-all duration-200 relative"
                            >
                              {/* Icon */}
                              <div className={`flex-shrink-0 ${menuItem.color} group-hover:scale-110 transition-transform`}>
                                {menuItem.icon}
                              </div>
                              
                              {/* Label */}
                              <span className="flex-1 font-medium group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                                {menuItem.label}
                              </span>
                              
                              {/* Arrow indicator */}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-4 h-4 text-stone-400 dark:text-stone-500 group-hover:text-gold-600 dark:group-hover:text-gold-400 group-hover:translate-x-1 transition-all"
                              >
                                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                              </svg>
                              
                              {/* Hover accent line */}
                              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gold-400 to-gold-600 dark:from-gold-500 dark:to-gold-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            return (
            <Link 
              key={item.label} 
              to={item.href}
              className="text-xs uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400 hover:text-gold-600 dark:hover:text-gold-400 transition-colors font-medium"
            >
              {item.label}
            </Link>
            );
          })}
          
          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-stone-100 dark:hover:bg-white/10 text-stone-600 dark:text-gold-400 transition-colors"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? (
              // Sun Icon
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            ) : (
              // Moon Icon
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            )}
          </button>

          <Button variant="secondary" size="sm" onClick={() => navigate('/contact')}>
            Let's Get Started
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
            <button 
                onClick={toggleTheme} 
                className="p-2 rounded-full bg-stone-100 dark:bg-white/10 text-stone-600 dark:text-gold-400"
            >
                {isDarkMode ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                    </svg>
                )}
            </button>
            <button 
                className="text-brand-charcoal dark:text-white p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
                </svg>
            </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-brand-primary/95 dark:bg-brand-dark-bg/95 backdrop-blur-xl border-b border-stone-200 dark:border-white/10 p-8 flex flex-col gap-6 h-screen transition-colors overflow-y-auto">
          {NAV_ITEMS.map((item) => {
            if (item.label === 'Experience') {
              return (
                <div key={item.label} className="flex flex-col gap-2">
                  <button
                    onClick={() => setExperienceMenuOpen(!experienceMenuOpen)}
                    className="text-2xl font-serif text-stone-600 dark:text-stone-300 hover:text-gold-600 dark:hover:text-gold-400 flex items-center justify-between"
                  >
                    {item.label}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className={`w-5 h-5 transition-transform ${experienceMenuOpen ? 'rotate-180' : ''}`}
                    >
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {experienceMenuOpen && (
                    <div className="flex flex-col gap-2 pl-4 mt-2 space-y-2">
                      <Link
                        to="/experience/weddings"
                        className="flex items-center gap-3 text-xl font-serif text-stone-500 dark:text-stone-400 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setExperienceMenuOpen(false);
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-rose-500 dark:text-rose-400">
                          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                        </svg>
                        Weddings
                      </Link>
                      <Link
                        to="/experience/corporate"
                        className="flex items-center gap-3 text-xl font-serif text-stone-500 dark:text-stone-400 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setExperienceMenuOpen(false);
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-500 dark:text-blue-400">
                          <path fillRule="evenodd" d="M3 2.25a.75.75 0 00-.75.75v18a.75.75 0 00.75.75h18a.75.75 0 00.75-.75V3a.75.75 0 00-.75-.75H3zm6 12a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-4.5zM6 6.75A.75.75 0 016.75 6h10.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75v-4.5z" clipRule="evenodd" />
                        </svg>
                        Corporate Events
                      </Link>
                      <Link
                        to="/experience/private-events"
                        className="flex items-center gap-3 text-xl font-serif text-stone-500 dark:text-stone-400 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setExperienceMenuOpen(false);
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-purple-500 dark:text-purple-400">
                          <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
                          <path fillRule="evenodd" d="M20.25 10.332v9.918a21 21 0 01-3.328 1.39 6.003 6.003 0 01-5.562-2.491.75.75 0 00-1.12 0 6.003 6.003 0 01-5.562 2.491 21 21 0 01-3.328-1.39v-9.918a.75.75 0 00-.546-.721A9.006 9.006 0 002 12.25c0 1.506.434 2.908 1.187 4.094a.75.75 0 00.704.563h16.218a.75.75 0 00.704-.563A9.006 9.006 0 0022 12.25a9.006 9.006 0 00-1.204-4.639.75.75 0 00-.546.721z" clipRule="evenodd" />
                        </svg>
                        Private Events
                      </Link>
                      <Link
                        to="/experience/community"
                        className="flex items-center gap-3 text-xl font-serif text-stone-500 dark:text-stone-400 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setExperienceMenuOpen(false);
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-500 dark:text-green-400">
                          <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.125l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                        </svg>
                        Community Events
                      </Link>
                    </div>
                  )}
                </div>
              );
            }
            return (
            <Link 
              key={item.label} 
              to={item.href}
              className="text-2xl font-serif text-stone-600 dark:text-stone-300 hover:text-gold-600 dark:hover:text-gold-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
            );
          })}
          <hr className="border-stone-200 dark:border-white/10 my-2"/>
          <Button variant="secondary" className="w-full text-lg py-4" onClick={() => {
              setMobileMenuOpen(false);
              navigate('/contact');
          }}>Let's Get Started</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;