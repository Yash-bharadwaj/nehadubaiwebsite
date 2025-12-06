import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full transition-all duration-300 font-medium tracking-wide focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 focus:ring-offset-white";
  
  const variants = {
    // Primary: Gold bg, Black text (Classic Premium)
    primary: "bg-gold-500 text-brand-dark hover:bg-gold-400 border border-transparent hover:scale-105 shadow-lg shadow-gold-500/20",
    // Secondary: Dark Charcoal bg, White text (High Contrast)
    secondary: "bg-brand-dark dark:bg-gold-500 text-white dark:text-brand-dark hover:bg-stone-800 dark:hover:bg-gold-400 border border-transparent shadow-lg shadow-black/10 dark:shadow-gold-500/10",
    // Outline: Dark Border, Dark text -> Dark Mode: Light text, light border
    outline: "bg-transparent text-brand-charcoal dark:text-white border border-stone-300 dark:border-white/30 hover:border-brand-charcoal dark:hover:border-white hover:bg-brand-charcoal/5 dark:hover:bg-white/10"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;