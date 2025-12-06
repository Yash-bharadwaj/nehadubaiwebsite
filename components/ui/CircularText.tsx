import React from 'react';

interface CircularTextProps {
  text: string;
  radius?: number;
  className?: string;
}

const CircularText: React.FC<CircularTextProps> = ({ text, radius = 50, className = "" }) => {
  return (
    <div className={`relative flex items-center justify-center rounded-full animate-spin-slow ${className}`}>
        <svg viewBox="0 0 100 100" width={radius * 2} height={radius * 2} className="overflow-visible">
            <path
                id="circlePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="transparent"
            />
            <text className="font-sans text-[10px] font-bold tracking-[0.2em] fill-brand-charcoal dark:fill-gold-400 uppercase">
                <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
                    {text}
                </textPath>
            </text>
        </svg>
    </div>
  );
};

export default CircularText;