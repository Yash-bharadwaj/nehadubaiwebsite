import React from 'react';
import { BRAND_NAME } from '../../lib/constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-serif font-bold mb-2 text-gold-500">{BRAND_NAME}</h2>
            <p className="text-stone-400">Based in Dubai | Available Globally</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-stone-400 hover:text-gold-400 transition-colors">Instagram</a>
            <a href="#" className="text-stone-400 hover:text-gold-400 transition-colors">LinkedIn</a>
            <a href="#" className="text-stone-400 hover:text-gold-400 transition-colors">YouTube</a>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8">
          <div className="text-center text-stone-500 text-sm mb-4">
            © {new Date().getFullYear()} Neha Dixit. All rights reserved.
          </div>
          
          {/* Premium crafted message */}
          <div className="flex items-center justify-center gap-2 text-sm text-stone-400 dark:text-stone-500">
            <span className="font-serif italic">Crafted with</span>
            <span className="relative inline-flex items-center justify-center">
              <svg 
                className="w-5 h-5 text-rose-500 dark:text-rose-400 transition-colors duration-300 hover:scale-125 hover:text-rose-600 dark:hover:text-rose-300 transform transition-transform"
                fill="currentColor" 
                viewBox="0 0 24 24"
                aria-label="love"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </span>
            <span className="font-serif italic">by</span>
            <a 
              href="https://linktr.ee/yashwanthbharadwaj" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-serif font-semibold text-gold-500 dark:text-gold-400 hover:text-gold-600 dark:hover:text-gold-300 transition-colors duration-300 hover:underline underline-offset-4"
            >
              Yashwanth Bharadwaj
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;