import React from 'react';
import SectionWrapper from '../components/layout/SectionWrapper';
import Button from '../components/ui/Button';
import LogoLoop from '../components/sections/LogoLoop';
import WeddingBannerSlider from '../components/sections/WeddingBannerSlider';
import WeddingPhotoCarousel from '../components/sections/WeddingPhotoCarousel';
import WeddingVideoCarousel from '../components/sections/WeddingVideoCarousel';
import CircularText from '../components/ui/CircularText';
import nehaImage from '../components/weddings/wedding-05.jpg';

const Wedding: React.FC = () => {
  const services = [
    {
      title: 'Sangeet',
      description: 'Energetic and fun-filled evenings that bring families together with music, dance, and celebration. Creating unforgettable moments of joy and connection.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-5.74 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
        </svg>
      ),
      features: ['Music & Dance', 'Family Performances', 'Entertainment', 'Cultural Celebrations'],
      colors: {
        bg: 'from-white via-purple-50/20 to-fuchsia-50/30 dark:from-brand-dark-surface dark:via-purple-950/20 dark:to-fuchsia-950/20',
        border: 'border-purple-100 dark:border-purple-900/30 hover:border-purple-400 dark:hover:border-fuchsia-600',
        shadow: 'hover:shadow-purple-500/10',
        icon: 'from-purple-500 via-fuchsia-500 to-purple-600 dark:from-purple-600 dark:via-fuchsia-600 dark:to-purple-700',
        pattern: 'text-purple-400',
        corner: 'from-purple-100/50 via-fuchsia-100/30 to-transparent dark:from-purple-900/20 dark:via-fuchsia-900/20',
        cornerIcon: 'text-purple-600',
        title: 'group-hover:from-purple-600 group-hover:to-fuchsia-600 dark:group-hover:from-purple-400 dark:group-hover:to-fuchsia-400',
        dot: 'from-purple-500 to-fuchsia-500'
      }
    },
    {
      title: 'Ceremony',
      description: 'Graceful and respectful hosting that honors traditions while keeping the atmosphere warm and welcoming. Ensuring every ritual is meaningful.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 01.122 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
        </svg>
      ),
      features: ['Traditional Rituals', 'Sacred Moments', 'Family Blessings', 'Cultural Traditions'],
      colors: {
        bg: 'from-white via-amber-50/20 to-yellow-50/30 dark:from-brand-dark-surface dark:via-amber-950/20 dark:to-yellow-950/20',
        border: 'border-amber-100 dark:border-amber-900/30 hover:border-amber-400 dark:hover:border-yellow-600',
        shadow: 'hover:shadow-amber-500/10',
        icon: 'from-amber-500 via-yellow-500 to-amber-600 dark:from-amber-600 dark:via-yellow-600 dark:to-amber-700',
        pattern: 'text-amber-400',
        corner: 'from-amber-100/50 via-yellow-100/30 to-transparent dark:from-amber-900/20 dark:via-yellow-900/20',
        cornerIcon: 'text-amber-600',
        title: 'group-hover:from-amber-600 group-hover:to-yellow-600 dark:group-hover:from-amber-400 dark:group-hover:to-yellow-400',
        dot: 'from-amber-500 to-yellow-500'
      }
    },
    {
      title: 'Reception',
      description: 'Elegant hosting that ensures smooth flow, memorable moments, and celebration of the newlyweds. Making your grand celebration unforgettable.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
          <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
        </svg>
      ),
      features: ['Grand Celebrations', 'Entertainment', 'Speeches & Toasts', 'Dancing & Music'],
      colors: {
        bg: 'from-white via-blue-50/20 to-indigo-50/30 dark:from-brand-dark-surface dark:via-blue-950/20 dark:to-indigo-950/20',
        border: 'border-blue-100 dark:border-blue-900/30 hover:border-blue-400 dark:hover:border-indigo-600',
        shadow: 'hover:shadow-blue-500/10',
        icon: 'from-blue-500 via-indigo-500 to-blue-600 dark:from-blue-600 dark:via-indigo-600 dark:to-blue-700',
        pattern: 'text-blue-400',
        corner: 'from-blue-100/50 via-indigo-100/30 to-transparent dark:from-blue-900/20 dark:via-indigo-900/20',
        cornerIcon: 'text-blue-600',
        title: 'group-hover:from-blue-600 group-hover:to-indigo-600 dark:group-hover:from-blue-400 dark:group-hover:to-indigo-400',
        dot: 'from-blue-500 to-indigo-500'
      }
    },
    {
      title: 'Mehendi',
      description: 'Vibrant and joyful hosting that celebrates the art of henna and the excitement of pre-wedding festivities. Creating colorful memories.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
        </svg>
      ),
      features: ['Henna Art', 'Traditional Music', 'Dance Performances', 'Family Bonding'],
      colors: {
        bg: 'from-white via-emerald-50/20 to-teal-50/30 dark:from-brand-dark-surface dark:via-emerald-950/20 dark:to-teal-950/20',
        border: 'border-emerald-100 dark:border-emerald-900/30 hover:border-emerald-400 dark:hover:border-teal-600',
        shadow: 'hover:shadow-emerald-500/10',
        icon: 'from-emerald-500 via-teal-500 to-emerald-600 dark:from-emerald-600 dark:via-teal-600 dark:to-emerald-700',
        pattern: 'text-emerald-400',
        corner: 'from-emerald-100/50 via-teal-100/30 to-transparent dark:from-emerald-900/20 dark:via-teal-900/20',
        cornerIcon: 'text-emerald-600',
        title: 'group-hover:from-emerald-600 group-hover:to-teal-600 dark:group-hover:from-emerald-400 dark:group-hover:to-teal-400',
        dot: 'from-emerald-500 to-teal-500'
      }
    },
    {
      title: 'Engagement',
      description: 'Intimate and warm hosting that marks the beginning of a beautiful journey together. Celebrating the promise of forever.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
        </svg>
      ),
      features: ['Ring Ceremony', 'Family Introductions', 'Intimate Gathering', 'Promise of Forever'],
      colors: {
        bg: 'from-white via-pink-50/20 to-rose-50/30 dark:from-brand-dark-surface dark:via-pink-950/20 dark:to-rose-950/20',
        border: 'border-pink-100 dark:border-pink-900/30 hover:border-pink-400 dark:hover:border-rose-600',
        shadow: 'hover:shadow-pink-500/10',
        icon: 'from-pink-500 via-rose-500 to-pink-600 dark:from-pink-600 dark:via-rose-600 dark:to-pink-700',
        pattern: 'text-pink-400',
        corner: 'from-pink-100/50 via-rose-100/30 to-transparent dark:from-pink-900/20 dark:via-rose-900/20',
        cornerIcon: 'text-pink-600',
        title: 'group-hover:from-pink-600 group-hover:to-rose-600 dark:group-hover:from-pink-400 dark:group-hover:to-rose-400',
        dot: 'from-pink-500 to-rose-500'
      }
    },
    {
      title: 'Haldi',
      description: 'Joyful and energetic hosting that brings families together for this auspicious pre-wedding ritual. Creating golden moments of celebration.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path fillRule="evenodd" d="M9 3.75a6 6 0 100 12 6 6 0 000-12zM2.25 9.75a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 9.75z" clipRule="evenodd" />
        </svg>
      ),
      features: ['Turmeric Ceremony', 'Family Blessings', 'Traditional Rituals', 'Golden Celebrations'],
      colors: {
        bg: 'from-white via-yellow-50/20 to-orange-50/30 dark:from-brand-dark-surface dark:via-yellow-950/20 dark:to-orange-950/20',
        border: 'border-yellow-100 dark:border-yellow-900/30 hover:border-yellow-400 dark:hover:border-orange-600',
        shadow: 'hover:shadow-yellow-500/10',
        icon: 'from-yellow-500 via-orange-500 to-yellow-600 dark:from-yellow-600 dark:via-orange-600 dark:to-yellow-700',
        pattern: 'text-yellow-400',
        corner: 'from-yellow-100/50 via-orange-100/30 to-transparent dark:from-yellow-900/20 dark:via-orange-900/20',
        cornerIcon: 'text-yellow-600',
        title: 'group-hover:from-yellow-600 group-hover:to-orange-600 dark:group-hover:from-yellow-400 dark:group-hover:to-orange-400',
        dot: 'from-yellow-500 to-orange-500'
      }
    }
  ];

  return (
    <main className="flex flex-col gap-0">
      {/* Banner Slider */}
      <WeddingBannerSlider />

      {/* About Neha Section */}
      <SectionWrapper className="py-20 md:py-24 bg-white dark:bg-brand-dark-bg relative overflow-hidden">
        {/* Traditional Background Patterns */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Large Central Mandala Pattern */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.12] dark:opacity-[0.18]">
            <svg viewBox="0 0 300 300" className="w-full h-full text-rose-400">
              {/* Outer Circles */}
              <circle cx="150" cy="150" r="140" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
              <circle cx="150" cy="150" r="120" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
              <circle cx="150" cy="150" r="100" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
              <circle cx="150" cy="150" r="80" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
              <circle cx="150" cy="150" r="60" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
              <circle cx="150" cy="150" r="40" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
              
              {/* Floral Petals */}
              <path d="M150,10 Q170,50 150,90 Q130,50 150,10" fill="currentColor" opacity="0.25"/>
              <path d="M150,290 Q170,250 150,210 Q130,250 150,290" fill="currentColor" opacity="0.25"/>
              <path d="M10,150 Q50,130 90,150 Q50,170 10,150" fill="currentColor" opacity="0.25"/>
              <path d="M290,150 Q250,130 210,150 Q250,170 290,150" fill="currentColor" opacity="0.25"/>
              
              {/* Diagonal Petals */}
              <path d="M50,50 Q70,70 90,50 Q70,30 50,50" fill="currentColor" opacity="0.2"/>
              <path d="M250,50 Q230,70 210,50 Q230,30 250,50" fill="currentColor" opacity="0.2"/>
              <path d="M50,250 Q70,230 90,250 Q70,270 50,250" fill="currentColor" opacity="0.2"/>
              <path d="M250,250 Q230,230 210,250 Q230,270 250,250" fill="currentColor" opacity="0.2"/>
              
              {/* Inner Decorative Elements */}
              <circle cx="150" cy="150" r="20" fill="currentColor" opacity="0.3"/>
              <circle cx="150" cy="150" r="10" fill="currentColor" opacity="0.4"/>
            </svg>
          </div>
          
          {/* Paisley Patterns - Top Left */}
          <div className="absolute top-20 left-20 w-48 h-48 opacity-[0.15] dark:opacity-[0.2]">
            <svg viewBox="0 0 100 100" className="w-full h-full text-rose-500">
              <path d="M50,10 Q60,30 50,50 Q40,30 50,10" fill="currentColor"/>
              <path d="M50,50 Q70,40 80,50 Q70,60 50,50" fill="currentColor"/>
              <path d="M50,50 Q30,40 20,50 Q30,60 50,50" fill="currentColor"/>
              <circle cx="50" cy="35" r="3" fill="currentColor" opacity="0.6"/>
            </svg>
          </div>
          
          {/* Paisley Patterns - Top Right */}
          <div className="absolute top-20 right-20 w-48 h-48 opacity-[0.15] dark:opacity-[0.2] scale-x-[-1]">
            <svg viewBox="0 0 100 100" className="w-full h-full text-pink-500">
              <path d="M50,10 Q60,30 50,50 Q40,30 50,10" fill="currentColor"/>
              <path d="M50,50 Q70,40 80,50 Q70,60 50,50" fill="currentColor"/>
              <path d="M50,50 Q30,40 20,50 Q30,60 50,50" fill="currentColor"/>
              <circle cx="50" cy="35" r="3" fill="currentColor" opacity="0.6"/>
            </svg>
          </div>
          
          {/* Paisley Patterns - Bottom Left */}
          <div className="absolute bottom-20 left-20 w-48 h-48 opacity-[0.15] dark:opacity-[0.2] rotate-180">
            <svg viewBox="0 0 100 100" className="w-full h-full text-rose-500">
              <path d="M50,10 Q60,30 50,50 Q40,30 50,10" fill="currentColor"/>
              <path d="M50,50 Q70,40 80,50 Q70,60 50,50" fill="currentColor"/>
              <path d="M50,50 Q30,40 20,50 Q30,60 50,50" fill="currentColor"/>
              <circle cx="50" cy="35" r="3" fill="currentColor" opacity="0.6"/>
            </svg>
          </div>
          
          {/* Paisley Patterns - Bottom Right */}
          <div className="absolute bottom-20 right-20 w-48 h-48 opacity-[0.15] dark:opacity-[0.2] scale-x-[-1] rotate-180">
            <svg viewBox="0 0 100 100" className="w-full h-full text-pink-500">
              <path d="M50,10 Q60,30 50,50 Q40,30 50,10" fill="currentColor"/>
              <path d="M50,50 Q70,40 80,50 Q70,60 50,50" fill="currentColor"/>
              <path d="M50,50 Q30,40 20,50 Q30,60 50,50" fill="currentColor"/>
              <circle cx="50" cy="35" r="3" fill="currentColor" opacity="0.6"/>
            </svg>
          </div>
          
          {/* Henna-style Intricate Border Pattern - Top */}
          <div className="absolute top-0 left-0 right-0 h-40 opacity-[0.12] dark:opacity-[0.18]">
            <svg viewBox="0 0 1200 200" className="w-full h-full text-rose-500">
              {/* Main Wave Pattern */}
              <path d="M0,100 Q150,20 300,100 T600,100 T900,100 T1200,100" stroke="currentColor" strokeWidth="3" fill="none"/>
              <path d="M0,100 Q150,60 300,100 T600,100 T900,100 T1200,100" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.7"/>
              
              {/* Decorative Dots */}
              <circle cx="150" cy="100" r="6" fill="currentColor" opacity="0.5"/>
              <circle cx="300" cy="100" r="6" fill="currentColor" opacity="0.5"/>
              <circle cx="450" cy="100" r="6" fill="currentColor" opacity="0.5"/>
              <circle cx="600" cy="100" r="6" fill="currentColor" opacity="0.5"/>
              <circle cx="750" cy="100" r="6" fill="currentColor" opacity="0.5"/>
              <circle cx="900" cy="100" r="6" fill="currentColor" opacity="0.5"/>
              <circle cx="1050" cy="100" r="6" fill="currentColor" opacity="0.5"/>
              
              {/* Floral Accents */}
              <g transform="translate(150, 100)">
                <path d="M0,-10 Q5,-5 0,0 Q-5,-5 0,-10" fill="currentColor" opacity="0.4"/>
                <circle cx="0" cy="-5" r="2" fill="currentColor" opacity="0.5"/>
              </g>
              <g transform="translate(450, 100)">
                <path d="M0,-10 Q5,-5 0,0 Q-5,-5 0,-10" fill="currentColor" opacity="0.4"/>
                <circle cx="0" cy="-5" r="2" fill="currentColor" opacity="0.5"/>
              </g>
              <g transform="translate(750, 100)">
                <path d="M0,-10 Q5,-5 0,0 Q-5,-5 0,-10" fill="currentColor" opacity="0.4"/>
                <circle cx="0" cy="-5" r="2" fill="currentColor" opacity="0.5"/>
              </g>
              <g transform="translate(1050, 100)">
                <path d="M0,-10 Q5,-5 0,0 Q-5,-5 0,-10" fill="currentColor" opacity="0.4"/>
                <circle cx="0" cy="-5" r="2" fill="currentColor" opacity="0.5"/>
              </g>
            </svg>
          </div>
          
          {/* Henna-style Intricate Border Pattern - Bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-40 opacity-[0.12] dark:opacity-[0.18] rotate-180">
            <svg viewBox="0 0 1200 200" className="w-full h-full text-pink-500">
              {/* Main Wave Pattern */}
              <path d="M0,100 Q150,20 300,100 T600,100 T900,100 T1200,100" stroke="currentColor" strokeWidth="3" fill="none"/>
              <path d="M0,100 Q150,60 300,100 T600,100 T900,100 T1200,100" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.7"/>
              
              {/* Decorative Dots */}
              <circle cx="150" cy="100" r="6" fill="currentColor" opacity="0.5"/>
              <circle cx="300" cy="100" r="6" fill="currentColor" opacity="0.5"/>
              <circle cx="450" cy="100" r="6" fill="currentColor" opacity="0.5"/>
              <circle cx="600" cy="100" r="6" fill="currentColor" opacity="0.5"/>
              <circle cx="750" cy="100" r="6" fill="currentColor" opacity="0.5"/>
              <circle cx="900" cy="100" r="6" fill="currentColor" opacity="0.5"/>
              <circle cx="1050" cy="100" r="6" fill="currentColor" opacity="0.5"/>
              
              {/* Floral Accents */}
              <g transform="translate(150, 100)">
                <path d="M0,-10 Q5,-5 0,0 Q-5,-5 0,-10" fill="currentColor" opacity="0.4"/>
                <circle cx="0" cy="-5" r="2" fill="currentColor" opacity="0.5"/>
              </g>
              <g transform="translate(450, 100)">
                <path d="M0,-10 Q5,-5 0,0 Q-5,-5 0,-10" fill="currentColor" opacity="0.4"/>
                <circle cx="0" cy="-5" r="2" fill="currentColor" opacity="0.5"/>
              </g>
              <g transform="translate(750, 100)">
                <path d="M0,-10 Q5,-5 0,0 Q-5,-5 0,-10" fill="currentColor" opacity="0.4"/>
                <circle cx="0" cy="-5" r="2" fill="currentColor" opacity="0.5"/>
              </g>
              <g transform="translate(1050, 100)">
                <path d="M0,-10 Q5,-5 0,0 Q-5,-5 0,-10" fill="currentColor" opacity="0.4"/>
                <circle cx="0" cy="-5" r="2" fill="currentColor" opacity="0.5"/>
              </g>
            </svg>
          </div>
          
          {/* Traditional Floral Motifs - Scattered */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 opacity-[0.1] dark:opacity-[0.15]">
            <svg viewBox="0 0 80 80" className="w-full h-full text-rose-400">
              <circle cx="40" cy="40" r="30" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
              <path d="M40,10 Q45,25 40,40 Q35,25 40,10" fill="currentColor" opacity="0.3"/>
              <path d="M40,70 Q45,55 40,40 Q35,55 40,70" fill="currentColor" opacity="0.3"/>
              <path d="M10,40 Q25,35 40,40 Q25,45 10,40" fill="currentColor" opacity="0.3"/>
              <path d="M70,40 Q55,35 40,40 Q55,45 70,40" fill="currentColor" opacity="0.3"/>
              <circle cx="40" cy="40" r="8" fill="currentColor" opacity="0.4"/>
            </svg>
          </div>
          
          <div className="absolute top-1/3 right-1/3 w-28 h-28 opacity-[0.1] dark:opacity-[0.15]">
            <svg viewBox="0 0 80 80" className="w-full h-full text-pink-400">
              <circle cx="40" cy="40" r="30" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
              <path d="M40,10 Q45,25 40,40 Q35,25 40,10" fill="currentColor" opacity="0.3"/>
              <path d="M40,70 Q45,55 40,40 Q35,55 40,70" fill="currentColor" opacity="0.3"/>
              <path d="M10,40 Q25,35 40,40 Q25,45 10,40" fill="currentColor" opacity="0.3"/>
              <path d="M70,40 Q55,35 40,40 Q55,45 70,40" fill="currentColor" opacity="0.3"/>
              <circle cx="40" cy="40" r="8" fill="currentColor" opacity="0.4"/>
            </svg>
          </div>
          
          <div className="absolute bottom-1/4 right-1/4 w-36 h-36 opacity-[0.1] dark:opacity-[0.15]">
            <svg viewBox="0 0 80 80" className="w-full h-full text-rose-500">
              <circle cx="40" cy="40" r="30" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
              <path d="M40,10 Q45,25 40,40 Q35,25 40,10" fill="currentColor" opacity="0.3"/>
              <path d="M40,70 Q45,55 40,40 Q35,55 40,70" fill="currentColor" opacity="0.3"/>
              <path d="M10,40 Q25,35 40,40 Q25,45 10,40" fill="currentColor" opacity="0.3"/>
              <path d="M70,40 Q55,35 40,40 Q55,45 70,40" fill="currentColor" opacity="0.3"/>
              <circle cx="40" cy="40" r="8" fill="currentColor" opacity="0.4"/>
            </svg>
          </div>
          
          {/* Gradient Orbs */}
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-rose-50/30 dark:bg-rose-950/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-pink-50/20 dark:bg-pink-950/15 rounded-full blur-[100px]"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative group">
              {/* Circular Text Animation */}
              <div className="absolute -right-8 -top-8 z-20 hidden lg:block">
                <div className="relative bg-white/90 dark:bg-rose-950/90 backdrop-blur-sm rounded-full p-3 shadow-xl border-2 border-rose-200/50 dark:border-rose-800/50">
                  <CircularText 
                    text="LOVE • JOY • FOREVER • BLISS • " 
                    radius={70}
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    {/* Heart Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-rose-600 dark:text-rose-400">
                      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-5.74 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Multiple Glow Layers */}
              <div className="absolute -inset-6 bg-gradient-to-br from-rose-200/40 via-pink-200/30 to-rose-300/40 dark:from-rose-900/30 dark:via-pink-900/20 dark:to-rose-800/30 rounded-3xl blur-3xl group-hover:blur-[40px] transition-all duration-500"></div>
              <div className="absolute -inset-4 bg-gradient-to-br from-rose-100/50 via-pink-100/40 to-rose-200/50 dark:from-rose-800/25 dark:via-pink-800/20 dark:to-rose-700/25 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              
              {/* Background Pattern for Image Container */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 dark:from-rose-950/50 dark:via-pink-950/40 dark:to-rose-900/50 opacity-80"></div>
              
              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-rose-200/50 dark:border-rose-800/50 bg-gradient-to-br from-white via-rose-50/30 to-pink-50/20 dark:from-slate-900 dark:via-rose-950/20 dark:to-pink-950/20">
                {/* Subtle Pattern Overlay */}
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(225, 29, 72, 0.3) 1px, transparent 0)',
                  backgroundSize: '40px 40px'
                }}></div>
                
                <img 
                  src={nehaImage} 
                  alt="Neha Dixit - Wedding Emcee" 
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-rose-50 via-pink-50 to-rose-100 dark:from-rose-950/40 dark:via-pink-950/40 dark:to-rose-900/40 border border-rose-200/50 dark:border-rose-800/30 rounded-full w-fit">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 animate-pulse"></div>
              <span className="text-xs font-semibold bg-gradient-to-r from-rose-700 via-pink-700 to-rose-600 dark:from-rose-300 dark:via-pink-300 dark:to-rose-400 bg-clip-text text-transparent uppercase tracking-wider">About Neha</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 dark:text-white leading-tight">
              A Romantic Wedding <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-rose-500 dark:from-rose-400 dark:via-pink-400 dark:to-rose-300 bg-clip-text text-transparent">Host</span>
            </h2>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Neha transforms weddings into a celebration of elegance and joy. With her impeccable hosting, every guest from the bride and groom to family and friends feels included, entertained, and cherished. Her bespoke games and sophisticated flair ensure a wedding that's not just fun, but truly spectacular.
            </p>
            
            <div className="pt-4">
              <button
                onClick={() => {
                  const phoneNumber = '+971552574806';
                  const message = encodeURIComponent('Hello! I\'m interested in booking Neha for my wedding event. 🎉');
                  window.open(`https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
                }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-rose-600 via-pink-600 to-rose-500 dark:from-rose-500 dark:via-pink-500 dark:to-rose-600 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-rose-500/30 transition-all duration-300 hover:scale-105 group"
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

      {/* Video Carousel Section */}
      <WeddingVideoCarousel />

      {/* Photo Carousel */}
      <WeddingPhotoCarousel />

      {/* Services Section */}
      <SectionWrapper id="services" className="py-20 bg-white dark:bg-brand-dark-bg relative overflow-hidden">
        {/* Traditional Pattern Background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
          <div className="absolute top-20 left-10 w-32 h-32">
            <svg viewBox="0 0 100 100" className="w-full h-full text-rose-400">
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
              <path d="M50,10 Q60,40 50,70 Q40,40 50,10" fill="currentColor" opacity="0.2"/>
              <path d="M10,50 Q40,60 70,50 Q40,40 10,50" fill="currentColor" opacity="0.2"/>
            </svg>
          </div>
          <div className="absolute bottom-20 right-10 w-40 h-40">
            <svg viewBox="0 0 100 100" className="w-full h-full text-pink-400">
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
              <path d="M50,10 Q60,40 50,70 Q40,40 50,10" fill="currentColor" opacity="0.2"/>
              <path d="M10,50 Q40,60 70,50 Q40,40 10,50" fill="currentColor" opacity="0.2"/>
            </svg>
          </div>
        </div>
        
        <div className="text-center mb-16 relative z-10">
          {/* Decorative Floral Accents */}
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-16 h-16 opacity-20 hidden lg:block">
            <svg viewBox="0 0 50 50" className="w-full h-full text-rose-500">
              <path d="M25,5 Q30,15 25,25 Q20,15 25,5" fill="currentColor"/>
              <path d="M25,45 Q30,35 25,25 Q20,35 25,45" fill="currentColor"/>
              <path d="M5,25 Q15,20 25,25 Q15,30 5,25" fill="currentColor"/>
              <path d="M45,25 Q35,20 25,25 Q35,30 45,25" fill="currentColor"/>
              <circle cx="25" cy="25" r="3" fill="currentColor"/>
            </svg>
          </div>
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-16 h-16 opacity-20 hidden lg:block">
            <svg viewBox="0 0 50 50" className="w-full h-full text-pink-500">
              <path d="M25,5 Q30,15 25,25 Q20,15 25,5" fill="currentColor"/>
              <path d="M25,45 Q30,35 25,25 Q20,35 25,45" fill="currentColor"/>
              <path d="M5,25 Q15,20 25,25 Q15,30 5,25" fill="currentColor"/>
              <path d="M45,25 Q35,20 25,25 Q35,30 45,25" fill="currentColor"/>
              <circle cx="25" cy="25" r="3" fill="currentColor"/>
            </svg>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-slate-900 dark:text-white">
            Wedding Services
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Complete wedding hosting solutions for your special day
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`group relative p-8 bg-gradient-to-br ${service.colors.bg} rounded-2xl border-2 ${service.colors.border} transition-all duration-300 hover:shadow-xl ${service.colors.shadow} overflow-hidden`}
            >
              {/* Traditional Henna Pattern Border */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.08] dark:opacity-[0.12]">
                <svg viewBox="0 0 400 300" className={`w-full h-full absolute inset-0 ${service.colors.pattern}`}>
                  <path d="M20,20 Q50,10 80,20 T140,20 T200,20 T260,20 T320,20 T380,20" stroke="currentColor" strokeWidth="1" fill="none"/>
                  <path d="M20,280 Q50,290 80,280 T140,280 T200,280 T260,280 T320,280 T380,280" stroke="currentColor" strokeWidth="1" fill="none"/>
                  <path d="M20,20 Q10,50 20,80 T20,140 T20,200 T20,260 T20,280" stroke="currentColor" strokeWidth="1" fill="none"/>
                  <path d="M380,20 Q390,50 380,80 T380,140 T380,200 T380,260 T380,280" stroke="currentColor" strokeWidth="1" fill="none"/>
                  <circle cx="80" cy="50" r="3" fill="currentColor" opacity="0.4"/>
                  <circle cx="200" cy="50" r="3" fill="currentColor" opacity="0.4"/>
                  <circle cx="320" cy="50" r="3" fill="currentColor" opacity="0.4"/>
                  <circle cx="80" cy="250" r="3" fill="currentColor" opacity="0.4"/>
                  <circle cx="200" cy="250" r="3" fill="currentColor" opacity="0.4"/>
                  <circle cx="320" cy="250" r="3" fill="currentColor" opacity="0.4"/>
                </svg>
              </div>
              
              {/* Decorative Corner with Floral Pattern */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.colors.corner} rounded-bl-full overflow-hidden`}>
                <div className="absolute top-2 right-2 w-8 h-8 opacity-40">
                  <svg viewBox="0 0 30 30" className={`w-full h-full ${service.colors.cornerIcon}`}>
                    <path d="M15,5 Q18,12 15,19 Q12,12 15,5" fill="currentColor"/>
                    <circle cx="15" cy="12" r="2" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.colors.icon} text-white flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-lg`}>
                  {service.icon}
                </div>
                
                <h3 className={`text-2xl font-serif font-bold mb-3 text-slate-900 dark:text-white group-hover:bg-gradient-to-r ${service.colors.title} group-hover:bg-clip-text group-hover:text-transparent transition-all`}>
                  {service.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.colors.dot}`}></div>
                      <span className="text-slate-500 dark:text-slate-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="py-20 bg-gradient-to-r from-rose-600 via-pink-600 to-rose-500 dark:from-rose-800 dark:via-pink-800 dark:to-rose-700 relative overflow-hidden">
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
            Ready to Create Your Dream Wedding?
          </h2>
          <p className="text-xl text-rose-100 mb-8">
            Let's discuss how we can make your special day truly unforgettable with elegant hosting and joyful celebrations.
          </p>
          <button
            onClick={() => {
              const phoneNumber = '+971552574806';
              const message = encodeURIComponent('Hello! I\'m interested in booking Neha for my wedding event. 🎉');
              window.open(`https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
            }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-rose-600 dark:text-rose-700 font-semibold rounded-full hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105 group text-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.408 3.488 2.241 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.889-9.881-9.889-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.984zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.47-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.865 1.213 3.063c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span>Get in Touch via WhatsApp</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
              <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.5A60.517 60.517 0 003.478 2.405z" />
            </svg>
          </button>
        </div>
      </SectionWrapper>

      {/* Scrolling Brands Section */}
      <div className="bg-gradient-to-br from-slate-50 via-rose-50/20 to-pink-50/30 dark:from-slate-950 dark:via-rose-950/10 dark:to-pink-950/10">
        <LogoLoop />
      </div>


      {/* Why Choose Section */}
      <SectionWrapper className="py-20 bg-gradient-to-br from-rose-50/50 via-white to-pink-50/30 dark:from-rose-950/20 dark:via-brand-dark-bg dark:to-pink-950/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-slate-900 dark:text-white">
            Why Choose Wedding Hosting?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-12">
            Your wedding day is one of the most important days of your life. I bring cultural understanding, 
            elegant hosting, and a warm presence that ensures your celebration is everything you've dreamed of.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Cultural Understanding',
                description: 'Deep respect and knowledge of wedding traditions, ensuring every ritual is honored beautifully.'
              },
              {
                title: 'Elegant Presence',
                description: 'Graceful hosting that maintains the dignity and beauty of your special day.'
              },
              {
                title: 'Seamless Flow',
                description: 'Ensuring your wedding flows smoothly from ceremony to reception, creating perfect timing.'
              }
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-white/60 dark:bg-brand-dark-surface/60 backdrop-blur-sm rounded-xl border border-rose-100 dark:border-rose-900/30">
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
      <SectionWrapper className="py-20 bg-gradient-to-r from-rose-600 via-pink-600 to-rose-500 dark:from-rose-800 dark:via-pink-800 dark:to-rose-700">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
            Ready to Make Your Wedding Unforgettable?
          </h2>
          <p className="text-xl text-rose-100 mb-8">
            Let's discuss how we can create a celebration that perfectly captures your love story.
          </p>
          <Button variant="secondary" size="lg" onClick={() => window.location.href = '/contact'}>
            Get in Touch
          </Button>
        </div>
      </SectionWrapper>
    </main>
  );
};

export default Wedding;
