
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  return (
    <section id={id} className={`mb-16 scroll-mt-16 md:mb-24 md:scroll-mt-24 lg:mb-36 lg:scroll-mt-24 ${className}`} aria-label={title}>
      <h2 className="text-2xl font-bold text-slate-100 mb-8 lg:hidden">{title}</h2>
      {children}
    </section>
  );
};
