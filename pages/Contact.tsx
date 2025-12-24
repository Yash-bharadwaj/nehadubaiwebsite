import React from 'react';
import SectionWrapper from '../components/layout/SectionWrapper';
import Contact from '../components/sections/Contact';

const ContactPage: React.FC = () => {
  return (
    <main className="flex flex-col gap-0">
      <Contact />
    </main>
  );
};

export default ContactPage;

