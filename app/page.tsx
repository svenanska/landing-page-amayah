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

        <div className="cta-wrap relative w-full">
          <a
            href="https://www.fanvue.com/amayahrnlds/fv-15"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-premium inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#a855f7] to-[#ec4899] px-8 py-4 text-lg font-semibold text-white shadow-[0_0_28px_rgba(236,72,153,0.4),0_16px_36px_rgba(168,85,247,0.34)] transition-transform duration-200 ease-out hover:scale-[1.03] active:scale-[0.97]"
          >
            come chat with me...
          </a>

          <span className="cta-hand-pointer" aria-hidden="true">
            <span className="cta-hand-ripple" />
            <svg
              viewBox="0 0 28 28"
              className="cta-hand-svg"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.2 24.2v-8a1.3 1.3 0 0 1 2.6 0V20m0 0v-8.5a1.3 1.3 0 0 1 2.6 0V20m0 0v-7.2a1.3 1.3 0 1 1 2.6 0V20m0 0v-5.3a1.3 1.3 0 1 1 2.6 0v5.8a4.6 4.6 0 0 1-4.6 4.6h-1.7a4.1 4.1 0 0 1-4.1-4.1Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.7 7.5a2.2 2.2 0 0 1 3.1 3.1M20.2 5.6a4.1 4.1 0 0 1 5.8 5.8"
                stroke="currentColor"
                strokeWidth="1.65"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </main>
  );
}
