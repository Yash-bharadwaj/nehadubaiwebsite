export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface EventCategory {
  title: string;
  description: string;
  image?: string;
}

export interface Testimonial {
  text: string;
  name: string;
  role: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}