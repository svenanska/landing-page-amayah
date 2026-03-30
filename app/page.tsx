import fs from 'node:fs';
import path from 'node:path';
import Image from 'next/image';

const portraitPath = path.join(process.cwd(), 'public', 'image.jpg');
const portraitSrc = fs.existsSync(portraitPath)
  ? '/image.jpg'
  : 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80';

export default function Home() {
  return (
    <main className="flex min-h-[100svh] w-full flex-col items-center overflow-hidden bg-[#f1ebf2] px-6 pt-10 pb-8">
      <div className="flex w-full max-w-sm flex-1 flex-col items-center text-center">
        <div className="relative mt-2 h-[52svh] max-h-[460px] w-full overflow-hidden rounded-2xl">
          <Image
            src={portraitSrc}
            alt="Portrait"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 640px) 90vw, 360px"
          />
        </div>

        <p className="mt-6 text-sm text-[#5f5265]">We&apos;re waiting on you...</p>

        <a
          href="https://www.fanvue.com/amayahrnlds/fv-15"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#9b5ca3] px-8 py-4 text-base font-semibold text-white shadow-[0_16px_28px_rgba(130,66,140,0.35)] transition hover:bg-[#8e4f98]"
        >
          Chat with us here
        </a>
      </div>
    </main>
  );
}
