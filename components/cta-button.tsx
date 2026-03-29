'use client';

import { event } from '@/lib/gtag';

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  label: string;
};

export function CTAButton({ href, children, className = '', label }: CTAButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full bg-rosewood px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-[#3f2530] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mauve ${className}`}
      onClick={() =>
        event({
          action: 'cta_click',
          category: 'engagement',
          label
        })
      }
    >
      {children}
    </a>
  );
}
