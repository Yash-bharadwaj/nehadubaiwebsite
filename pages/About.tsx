import React from 'react';
import AboutPhotoSlider from '../components/sections/AboutPhotoSlider';
import AboutHero from '../components/sections/AboutHero';
import AboutStats from '../components/sections/AboutStats';
import LogoLoop from '../components/sections/LogoLoop';
import AboutExperience from '../components/sections/AboutExperience';
import AboutContact from '../components/sections/AboutContact';

const AboutPage: React.FC = () => {
  return (
    <main className="flex flex-col gap-0">
      <AboutPhotoSlider />
      <AboutHero />
      <AboutStats />
      <LogoLoop />
      <AboutExperience />
      <AboutContact />
    </main>
  );
};

export default AboutPage;

