import React from 'react';
import { Link } from 'react-router-dom';
import SectionWrapper from '../components/layout/SectionWrapper';
import TheExperience from '../components/sections/TheExperience';
import EventsShowcase from '../components/sections/EventsShowcase';

const experienceCategories = [
  {
    id: 'weddings',
    title: 'Weddings',
    description: 'Creating magical moments that celebrate love, tradition, and the joy of bringing families together.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
      </svg>
    ),
    link: '/experience/weddings',
    color: 'rose'
  },
  {
    id: 'corporate',
    title: 'Corporate Events',
    description: 'Professional, sharp, and on-brand hosting for corporate gatherings, conferences, and team building events.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M3 2.25a.75.75 0 00-.75.75v18a.75.75 0 00.75.75h18a.75.75 0 00.75-.75V3a.75.75 0 00-.75-.75H3zm6 12a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-4.5zM6 6.75A.75.75 0 016.75 6h10.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75v-4.5z" clipRule="evenodd" />
      </svg>
    ),
    link: '/experience/corporate',
    color: 'blue'
  },
  {
    id: 'private',
    title: 'Private Events',
    description: 'Intimate gatherings, celebrations, and special occasions that require a personal touch and warm presence.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
        <path fillRule="evenodd" d="M20.25 10.332v9.918a21 21 0 01-3.328 1.39 6.003 6.003 0 01-5.562-2.491.75.75 0 00-1.12 0 6.003 6.003 0 01-5.562 2.491 21 21 0 01-3.328-1.39v-9.918a.75.75 0 00-.546-.721A9.006 9.006 0 002 12.25c0 1.506.434 2.908 1.187 4.094a.75.75 0 00.704.563h16.218a.75.75 0 00.704-.563A9.006 9.006 0 0022 12.25a9.006 9.006 0 00-1.204-4.639.75.75 0 00-.546.721z" clipRule="evenodd" />
      </svg>
    ),
    link: '/experience/private-events',
    color: 'purple'
  },
  {
    id: 'community',
    title: 'Community Events',
    description: 'Bringing energy and engagement to community gatherings, cultural festivals, and public celebrations.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.125l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
      </svg>
    ),
    link: '/experience/community',
    color: 'green'
  }
];

const Experience: React.FC = () => {
  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; hover: string; border: string }> = {
      rose: {
        bg: 'bg-rose-50 dark:bg-rose-900/20',
        text: 'text-rose-600 dark:text-rose-400',
        hover: 'hover:bg-rose-100 dark:hover:bg-rose-900/30',
        border: 'border-rose-200 dark:border-rose-800/40'
      },
      blue: {
        bg: 'bg-blue-50 dark:bg-blue-900/20',
        text: 'text-blue-600 dark:text-blue-400',
        hover: 'hover:bg-blue-100 dark:hover:bg-blue-900/30',
        border: 'border-blue-200 dark:border-blue-800/40'
      },
      purple: {
        bg: 'bg-purple-50 dark:bg-purple-900/20',
        text: 'text-purple-600 dark:text-purple-400',
        hover: 'hover:bg-purple-100 dark:hover:bg-purple-900/30',
        border: 'border-purple-200 dark:border-purple-800/40'
      },
      green: {
        bg: 'bg-green-50 dark:bg-green-900/20',
        text: 'text-green-600 dark:text-green-400',
        hover: 'hover:bg-green-100 dark:hover:bg-green-900/30',
        border: 'border-green-200 dark:border-green-800/40'
      }
    };
    return colors[color] || colors.blue;
  };

  return (
    <main className="flex flex-col gap-0">
      <SectionWrapper className="pt-32 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-brand-charcoal dark:text-white transition-colors">
            Experience
          </h1>
          <p className="text-stone-600 dark:text-stone-400 text-lg max-w-2xl mx-auto transition-colors">
            From corporate boardrooms to wedding celebrations, I bring expertise to every event type
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {experienceCategories.map((category) => {
            const colorClasses = getColorClasses(category.color);
            return (
              <Link
              key={category.id}
                to={category.link}
                className={`p-8 bg-white dark:bg-brand-dark-surface rounded-2xl border-2 transition-all duration-300 text-left group ${colorClasses.border} hover:border-gold-300 dark:hover:border-gold-500/30 hover:shadow-xl hover:shadow-gold-500/10`}
            >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-all ${colorClasses.bg} ${colorClasses.text} group-hover:scale-110`}>
                {category.icon}
              </div>
                <h3 className="text-2xl font-serif font-bold mb-3 text-brand-charcoal dark:text-white transition-colors group-hover:text-gold-600 dark:group-hover:text-gold-400">
                {category.title}
              </h3>
              <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed mb-4">
                {category.description}
              </p>
                <div className="mt-4 pt-4 border-t border-stone-100 dark:border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm text-gold-600 dark:text-gold-400 flex items-center gap-2 font-medium">
                    Explore <span>→</span>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </SectionWrapper>

      <TheExperience />
      <EventsShowcase />
    </main>
  );
};

export default Experience;

