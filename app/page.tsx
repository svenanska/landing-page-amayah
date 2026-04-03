import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex h-[100svh] w-full items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,#fdf4ff_0%,#f9ebff_50%,#f8e8f5_100%)] px-5">
      <div className="flex w-full max-w-xs flex-col items-center justify-center text-center">
        <Image
          src="/beachselfie.png"
          alt="Profile"
          width={132}
          height={132}
          priority
          className="mb-5 h-[132px] w-[132px] rounded-full object-cover shadow-[0_12px_34px_rgba(168,85,247,0.28),0_4px_14px_rgba(236,72,153,0.2)]"
        />

        <a
          href="https://www.fanvue.com/amayahrnlds/fv-15"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-premium inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#a855f7] to-[#ec4899] px-8 py-4 text-lg font-semibold text-white shadow-[0_0_28px_rgba(236,72,153,0.4),0_16px_36px_rgba(168,85,247,0.34)] transition-transform duration-200 ease-out hover:scale-[1.03] active:scale-[0.97]"
        >
          come chat with me...
          <span className="cta-hand inline-flex h-[18px] w-[18px] items-center justify-center" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 text-white/95"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5 6.4a2.2 2.2 0 1 1 3.1 3.1m-1.8-4.4a3.6 3.6 0 1 1 5.1 5.1M7.9 20.2v-5.7a1 1 0 0 1 2 0v2.2m0 0v-6.2a1 1 0 1 1 2 0v5m0 1.2V9.4a1 1 0 1 1 2 0v7.3m0 0v-5.6a1 1 0 1 1 2 0v5.8c0 2.3-1.8 4.1-4.1 4.1h-.8A4 4 0 0 1 7.9 20.2Z"
                stroke="currentColor"
                strokeWidth="1.45"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>
      </div>
    </main>
  );
}
