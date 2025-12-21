import React from 'react';
import SectionWrapper from '../components/layout/SectionWrapper';
import Contact from '../components/sections/Contact';

const ContactPage: React.FC = () => {
  return (
    <main className="flex flex-col gap-0">
      <SectionWrapper className="pt-32 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-brand-charcoal dark:text-white transition-colors">
            Contact
          </h1>
          <p className="text-stone-600 dark:text-stone-400 text-lg max-w-2xl mx-auto transition-colors">
            Let's discuss how I can make your event unforgettable
          </p>
        </div>
      </SectionWrapper>
      <Contact />
    </main>
  );
};

export default ContactPage;

