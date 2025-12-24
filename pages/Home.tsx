import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import Stats from '../components/sections/Stats';
import LogoLoop from '../components/sections/LogoLoop';
import VideoCarousel from '../components/sections/VideoCarousel';
import CelebritiesGallery from '../components/sections/CelebritiesGallery';
import SignatureStyle from '../components/sections/SignatureStyle';
import Process from '../components/sections/Process';
import FAQ from '../components/sections/FAQ';

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation (e.g., /#showreel)
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <main className="flex flex-col gap-0">
      <Hero />
      <Stats />
      <LogoLoop />
      <VideoCarousel />
      <CelebritiesGallery />
      <SignatureStyle />
      <Process />
      <FAQ />
    </main>
  );
};

export default Home;

