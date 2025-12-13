import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import CircularGallery from '../ui/CircularGallery';

// Import all emcee moment images
import moment1 from '../emceemoments/emcee-moment-01.jpeg';
import moment2 from '../emceemoments/emcee-moment-02.jpeg';
import moment3 from '../emceemoments/emcee-moment-03.jpeg';
import moment4 from '../emceemoments/emcee-moment-04.jpeg';
import moment5 from '../emceemoments/emcee-moment-05.jpeg';
import moment6 from '../emceemoments/emcee-moment-06.jpeg';
import moment7 from '../emceemoments/emcee-moment-07.jpeg';
import moment8 from '../emceemoments/emcee-moment-08.jpeg';
import moment9 from '../emceemoments/emcee-moment-09.jpeg';
import moment10 from '../emceemoments/emcee-moment-10.jpeg';
import moment11 from '../emceemoments/emcee-moment-11.jpeg';
import moment12 from '../emceemoments/emcee-moment-12.jpeg';
import moment13 from '../emceemoments/emcee-moment-13.jpeg';
import moment14 from '../emceemoments/emcee-moment-14.jpeg';
import moment15 from '../emceemoments/emcee-moment-15.jpeg';
import moment16 from '../emceemoments/emcee-moment-16.jpeg';
import moment17 from '../emceemoments/emcee-moment-17.jpeg';
import moment18 from '../emceemoments/emcee-moment-18.jpeg';
import moment19 from '../emceemoments/emcee-moment-19.jpeg';
import moment20 from '../emceemoments/emcee-moment-20.jpeg';
import moment21 from '../emceemoments/emcee-moment-21.jpeg';
import moment22 from '../emceemoments/emcee-moment-22.jpeg';
import moment23 from '../emceemoments/emcee-moment-23.jpeg';
import moment24 from '../emceemoments/emcee-moment-24.jpeg';
import moment25 from '../emceemoments/emcee-moment-25.jpeg';
import moment26 from '../emceemoments/emcee-moment-26.jpeg';
import moment27 from '../emceemoments/emcee-moment-27.jpeg';
import moment28 from '../emceemoments/emcee-moment-28.jpeg';

const emceeMoments = [
  { image: moment1, text: '' },
  { image: moment2, text: '' },
  { image: moment3, text: '' },
  { image: moment4, text: '' },
  { image: moment5, text: '' },
  { image: moment6, text: '' },
  { image: moment7, text: '' },
  { image: moment8, text: '' },
  { image: moment9, text: '' },
  { image: moment10, text: '' },
  { image: moment11, text: '' },
  { image: moment12, text: '' },
  { image: moment13, text: '' },
  { image: moment14, text: '' },
  { image: moment15, text: '' },
  { image: moment16, text: '' },
  { image: moment17, text: '' },
  { image: moment18, text: '' },
  { image: moment19, text: '' },
  { image: moment20, text: '' },
  { image: moment21, text: '' },
  { image: moment22, text: '' },
  { image: moment23, text: '' },
  { image: moment24, text: '' },
  { image: moment25, text: '' },
  { image: moment26, text: '' },
  { image: moment27, text: '' },
  { image: moment28, text: '' },
];

const EmceeMoments: React.FC = () => {
  return (
    <SectionWrapper id="emcee-moments" className="py-12 md:py-16 lg:py-20 bg-brand-primary dark:bg-brand-dark-bg transition-colors">
      <div className="text-center mb-4 md:mb-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-charcoal dark:text-white">
          The Magic Behind the <span className="text-highlight">Mic</span>
        </h2>
      </div>

      <div style={{ height: '400px', position: 'relative' }}>
        <CircularGallery 
          items={emceeMoments}
          bend={0} 
          textColor="#ffffff" 
          borderRadius={0.05} 
          scrollEase={0.02}
        />
      </div>
    </SectionWrapper>
  );
};

export default EmceeMoments;

