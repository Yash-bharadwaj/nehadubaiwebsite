import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  fullWidth?: boolean;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ 
  children, 
  id, 
  className = "",
  fullWidth = false
}) => {
  return (
    <section id={id} className={`relative py-10 md:py-14 ${className}`}>
      {fullWidth ? (
        children
      ) : (
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          {children}
        </div>
      )}
    </section>
  );
};

export default SectionWrapper;