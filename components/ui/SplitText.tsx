import React, { useEffect, useRef, useState } from 'react';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  splitType?: 'chars' | 'words';
  from?: { opacity?: number; y?: number; x?: number };
  to?: { opacity?: number; y?: number; x?: number };
  threshold?: number;
  rootMargin?: string;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 50,
  duration = 0.5,
  splitType = 'chars',
  from = { opacity: 0, y: 40, x: 0 },
  to = { opacity: 1, y: 0, x: 0 },
  threshold = 0.1,
  rootMargin = '-50px',
  textAlign = 'center',
  onLetterAnimationComplete,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const words = text.split(' ');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const getTransitionStyles = (index: number) => {
    const delayTime = isVisible ? index * delay : 0;
    
    return {
      opacity: isVisible ? to.opacity ?? 1 : from.opacity ?? 0,
      transform: isVisible 
        ? `translate3d(${to.x ?? 0}px, ${to.y ?? 0}px, 0)` 
        : `translate3d(${from.x ?? 0}px, ${from.y ?? 40}px, 0)`,
      transition: `all ${duration}s cubic-bezier(0.2, 0.65, 0.3, 0.9)`, // Power3.out approx
      transitionDelay: `${delayTime}ms`,
    };
  };

  // Helper to handle completion callback
  useEffect(() => {
    if (isVisible && onLetterAnimationComplete) {
      const totalTime = words.join('').length * delay + (duration * 1000);
      const timer = setTimeout(onLetterAnimationComplete, totalTime);
      return () => clearTimeout(timer);
    }
  }, [isVisible, delay, duration, onLetterAnimationComplete, words]);

  let charIndexCounter = 0;

  return (
    <div
      ref={elementRef}
      className={`${className}`}
      style={{ textAlign, display: 'inline-block' }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
          {word.split('').map((char, charIndex) => {
            const currentStyle = getTransitionStyles(charIndexCounter);
            charIndexCounter++;
            return (
              <span
                key={charIndex}
                style={{
                  display: 'inline-block',
                  ...currentStyle,
                }}
              >
                {char}
              </span>
            );
          })}
          {wordIndex < words.length - 1 && (
            <span style={{ display: 'inline-block' }}>&nbsp;</span>
          )}
        </span>
      ))}
    </div>
  );
};

export default SplitText;