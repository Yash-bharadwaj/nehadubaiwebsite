import React, { Children } from 'react';

interface ScrollStackProps {
  children: React.ReactNode;
  className?: string;
}

interface ScrollStackItemProps {
  children: React.ReactNode;
  className?: string;
}

// The container must be relative so it flows naturally in the document
// It needs enough height for all sticky items to scroll through
export const ScrollStack: React.FC<ScrollStackProps> = ({ children, className = "" }) => {
  const childCount = Children.count(children);
  const minHeight = `${childCount * 100}vh`;
  
  return (
    <div 
      className={`relative w-full ${className}`}
      style={{ minHeight }}
    >
      {children}
    </div>
  );
};

// Items are sticky to the top of the viewport. 
// As the user scrolls, each subsequent item will slide up and stick on top of the previous one.
export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ children, className = "" }) => {
  return (
    <div className={`sticky top-0 h-screen flex items-center justify-center overflow-hidden shadow-2xl z-10 ${className}`}>
      {children}
    </div>
  );
};

export default ScrollStack;