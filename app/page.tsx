'use client';

import { useEffect, useState } from 'react';

const TELEGRAM_URL = 'https://t.me/+Xnake9WVK2I2NGJk';

function isInAppBrowser(userAgent: string) {
  const embeddedBrowserPattern =
    /TikTok|musical_ly|BytedanceWebview|trill|Instagram|FBAN|FBAV|FB_IAB|Line\/|Twitter|LinkedInApp|; wv\)/i;
  const isIOSWebView =
    /iPhone|iPad|iPod/i.test(userAgent) &&
    /AppleWebKit/i.test(userAgent) &&
    !/Safari|CriOS|FxiOS|EdgiOS|OPiOS/i.test(userAgent);

  return embeddedBrowserPattern.test(userAgent) || isIOSWebView;
}

export default function Home() {
  const [showInstructions, setShowInstructions] = useState<boolean | null>(null);

  useEffect(() => {
    const isEmbedded = isInAppBrowser(window.navigator.userAgent);
    setShowInstructions(isEmbedded);

    if (isEmbedded) return;

    const redirectTimer = window.setTimeout(() => {
      window.location.assign(TELEGRAM_URL);
    }, 750);

    return () => window.clearTimeout(redirectTimer);
  }, []);

  if (showInstructions === null) {
    return (
      <main className="flex min-h-[100svh] items-center justify-center bg-[#fce7f3] px-5 text-[#3f1d2e]">
        <p className="text-2xl font-bold">One moment… 💕</p>
      </main>
    );
  }

  if (showInstructions === true) {
    return (
      <main className="min-h-[100svh] overflow-x-hidden bg-[#fce7f3] px-5 pb-[calc(3rem+env(safe-area-inset-bottom))] pt-[calc(2rem+env(safe-area-inset-top))] text-[#3f1d2e]">
        <div className="mx-auto w-full max-w-md">
          <header className="mb-8 text-center">
            <p className="mb-3 text-2xl font-bold">Almost there! 💕</p>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              Open this page in your browser
            </h1>
            <p className="mt-4 text-xl font-semibold">It only takes 2 taps</p>
          </header>

          <ol className="space-y-6">
            <li className="relative min-h-64 overflow-hidden rounded-[2rem] bg-white px-6 pb-7 pt-6 shadow-[0_12px_30px_rgba(131,47,83,0.12)]">
              <span
                aria-hidden="true"
                className="absolute right-4 top-1 text-8xl font-black leading-none text-[#db2777]"
              >
                ↗
              </span>
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#db2777] text-4xl font-black text-white">
                1
              </div>
              <p className="max-w-[17rem] text-2xl font-bold leading-snug">
                Tap the{' '}
                <strong className="block py-1 text-5xl font-black leading-none tracking-[0.12em]">
                  •••
                </strong>{' '}
                in the top-right corner
              </p>
            </li>

            <li className="rounded-[2rem] bg-white px-6 py-7 shadow-[0_12px_30px_rgba(131,47,83,0.12)]">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#db2777] text-4xl font-black text-white">
                2
              </div>
              <p className="text-2xl font-bold leading-snug">Tap “Open in browser”</p>
              <p className="mt-3 text-lg font-medium leading-relaxed text-[#694052]">
                On iPhone this will usually open Safari.
              </p>
            </li>
          </ol>

          <footer className="mt-9 text-center">
            <p className="text-3xl font-extrabold">That’s it 💗</p>
            <p className="mt-3 text-xl font-semibold leading-relaxed">
              I’ll take you to Telegram automatically.
            </p>
          </footer>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-[100svh] items-center justify-center overflow-x-hidden bg-[#fce7f3] px-5 py-[calc(2rem+env(safe-area-inset-top))] text-[#3f1d2e]">
      <div className="w-full max-w-md text-center">
        <h1 className="text-4xl font-extrabold leading-tight">Opening Telegram… 💕</h1>
        <a
          href={TELEGRAM_URL}
          className="mt-9 inline-flex min-h-16 w-full items-center justify-center rounded-full bg-[#be185d] px-7 py-4 text-xl font-extrabold text-white shadow-[0_12px_28px_rgba(190,24,93,0.3)] transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#831843] active:scale-[0.98]"
        >
          OPEN TELEGRAM 💕
        </a>
        <p className="mt-5 text-lg font-medium leading-relaxed">
          If Telegram doesn’t open automatically, tap the button above.
        </p>
      </div>
    </main>
  );
}
