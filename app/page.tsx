import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex h-[100svh] w-full items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,#fdf4ff_0%,#f9ebff_50%,#f8e8f5_100%)] px-5">
      <div className="flex w-full max-w-xs flex-col items-center justify-center text-center">
        <Image
          src="/profile.jpg"
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
          className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#a855f7] to-[#ec4899] px-8 py-4 text-lg font-semibold text-white shadow-[0_0_28px_rgba(236,72,153,0.4),0_16px_36px_rgba(168,85,247,0.34)] transition-transform duration-200 ease-out hover:scale-[1.03] active:scale-[0.97]"
        >
          come chat with me...
        </a>
      </div>
    </main>
  );
}
