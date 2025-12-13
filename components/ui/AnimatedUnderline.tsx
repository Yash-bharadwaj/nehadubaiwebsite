import React from 'react';

interface AnimatedUnderlineProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedUnderline: React.FC<AnimatedUnderlineProps> = ({ children, className = '' }) => {
  return (
    <span className={`relative inline-block ${className}`}>
      {children}
      <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 dark:from-gold-400 dark:via-gold-500 dark:to-gold-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
      <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 dark:from-gold-400 dark:via-gold-500 dark:to-gold-400 scale-x-0 animate-underline"></span>
    </span>
  );
};

export default AnimatedUnderline;

