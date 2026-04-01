export default function Home() {
  return (
    <main className="flex min-h-[100svh] w-full flex-col items-center overflow-hidden bg-[#f1ebf2] px-6 pt-10 pb-8">
      <div className="flex w-full max-w-sm flex-1 flex-col items-center justify-center text-center">
        <p className="text-sm text-[#5f5265]">We&apos;re waiting on you...</p>

        <p className="mt-6 text-xs text-[#6f5f75]">click the button below and send me a message</p>

        <a
          href="https://www.fanvue.com/amayahrnlds/fv-15"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#a855f7] to-[#ec4899] px-9 py-[1.05rem] text-[1.05rem] font-semibold text-white shadow-[0_20px_38px_rgba(168,85,247,0.38),0_8px_22px_rgba(236,72,153,0.28)] ring-1 ring-fuchsia-300/45 transition-all duration-200 ease-out hover:scale-[1.03] hover:shadow-[0_24px_46px_rgba(168,85,247,0.45),0_12px_30px_rgba(236,72,153,0.35)] hover:brightness-105 active:scale-[0.97]"
        >
          Receive my 🌶️🎁
        </a>
      </div>
    </main>
  );
}
