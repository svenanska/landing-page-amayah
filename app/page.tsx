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
          <span
            className="cta-hand inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 3v5m0 0 2.2-2.2M12 8 9.8 5.8M7.5 13.5h2V10a1 1 0 1 1 2 0v2h1V9a1 1 0 1 1 2 0v3h1v-1a1 1 0 1 1 2 0v4.1a4.9 4.9 0 0 1-4.9 4.9h-1.4a4.2 4.2 0 0 1-3.8-2.3L7.1 15a1 1 0 0 1 .4-1.5Z"
                stroke="currentColor"
                strokeWidth="1.8"
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
