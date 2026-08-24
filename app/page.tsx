'use client';

import { useEffect, useState } from 'react';

const TELEGRAM_URL = 'https://t.me/elinalovexo';

function isTikTokBrowser(userAgent: string) {
  return /TikTok|musical_ly|BytedanceWebview|trill/i.test(userAgent);
}

export default function Home() {
  const [isTikTok, setIsTikTok] = useState(false);

  useEffect(() => {
    if (isTikTokBrowser(window.navigator.userAgent)) {
      setIsTikTok(true);
      return;
    }

    window.location.replace(TELEGRAM_URL);
  }, []);

  if (!isTikTok) {
    return <main className="h-[100svh] overflow-hidden bg-[#fce7f3]" />;
  }

  return (
    <main className="relative flex h-[100svh] w-full items-center justify-center overflow-hidden bg-[#fce7f3] px-6 text-black">
      <svg
        aria-hidden="true"
        viewBox="0 0 120 120"
        className="absolute right-[max(0.75rem,env(safe-area-inset-right))] top-[max(0.75rem,env(safe-area-inset-top))] h-28 w-28 sm:h-32 sm:w-32"
      >
        <defs>
          <marker
            id="arrowhead"
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="4"
            orient="auto"
          >
            <path d="M 0 0 L 8 4 L 0 8 Z" fill="currentColor" />
          </marker>
        </defs>
        <line
          x1="20"
          y1="100"
          x2="98"
          y2="22"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          markerEnd="url(#arrowhead)"
        />
      </svg>

      <ol className="mx-auto flex w-full max-w-sm -translate-y-2 flex-col items-center gap-10 text-center text-2xl font-bold leading-snug">
        <li>
          1. Tap the •••
          <br />
          in the top-right corner.
        </li>
        <li>2. Tap “Open in browser”.</li>
      </ol>
    </main>
  );
}
