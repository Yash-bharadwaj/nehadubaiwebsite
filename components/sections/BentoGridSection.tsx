
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import SectionWrapper from "../layout/SectionWrapper";

export default function BentoGridSection() {
  return (
    <SectionWrapper id="showcase" className="py-20 bg-brand-primary dark:bg-brand-dark-bg transition-colors">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif font-bold text-brand-charcoal dark:text-white mb-4">
            Versatility in <span className="text-highlight">Motion</span>
        </h2>
        <p className="text-stone-500 dark:text-stone-400 max-w-2xl mx-auto">
            From high-energy stadium crowds to intimate luxury gatherings, explore the different facets of Neha's hosting expertise.
        </p>
      </div>

      <BentoGrid className="max-w-6xl mx-auto px-4 md:px-0">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </SectionWrapper>
  );
}

const Skeleton = ({ color }: { color?: string }) => (
  <div className={`flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br ${color || "from-stone-200 to-stone-100 dark:from-stone-900 dark:to-stone-800"}`}></div>
);

// SVG Icons to replace Tabler Icons (for dependency independence)
const Icons = {
  Clipboard: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-neutral-500"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z"/></svg>,
  Globe: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-neutral-500"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>,
  Star: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-neutral-500"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  Mic: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-neutral-500"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>,
  Heart: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-neutral-500"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>,
  Trophy: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-neutral-500"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>,
  Sparkles: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-neutral-500"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M9 3v4"/><path d="M3 5h4"/><path d="M3 9h4"/></svg>,
};

const items = [
  {
    title: "Corporate Mastery",
    description: "Hosting high-stakes summits for Fortune 500 leaders with precision.",
    header: <Skeleton color="from-blue-100 to-blue-50 dark:from-blue-900/40 dark:to-blue-900/10" />,
    icon: <Icons.Clipboard />,
  },
  {
    title: "Dream Weddings",
    description: "Orchestrating magical moments for couples and families.",
    header: <Skeleton color="from-rose-100 to-rose-50 dark:from-rose-900/40 dark:to-rose-900/10" />,
    icon: <Icons.Heart />,
  },
  {
    title: "Awards & Galas",
    description: "Bringing energy and prestige to celebration nights.",
    header: <Skeleton color="from-amber-100 to-amber-50 dark:from-amber-900/40 dark:to-amber-900/10" />,
    icon: <Icons.Trophy />,
  },
  {
    title: "Global Expertise",
    description: "A seasoned host who adapts culturally to 10+ countries, seamlessly bridging languages and traditions.",
    header: <Skeleton color="from-emerald-100 to-emerald-50 dark:from-emerald-900/40 dark:to-emerald-900/10" />,
    icon: <Icons.Globe />,
  },
  {
    title: "Audience Connection",
    description: "Turning passive crowds into active participants.",
    header: <Skeleton color="from-purple-100 to-purple-50 dark:from-purple-900/40 dark:to-purple-900/10" />,
    icon: <Icons.Sparkles />,
  },
  {
    title: "Panel Moderation",
    description: "Facilitating insightful conversations with industry experts.",
    header: <Skeleton color="from-cyan-100 to-cyan-50 dark:from-cyan-900/40 dark:to-cyan-900/10" />,
    icon: <Icons.Mic />,
  },
  {
    title: "The Signature Style",
    description: "An unmatched blend of wit, elegance, and spontaneity that ensures no two events are ever the same.",
    header: <Skeleton color="from-gold-100 to-gold-50 dark:from-gold-900/40 dark:to-gold-900/10" />,
    icon: <Icons.Star />,
  },
];
