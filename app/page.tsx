import Image from 'next/image';
import { CTAButton } from '@/components/cta-button';

const benefits = [
  'Private drops you won’t see in public stories',
  'Voice notes & behind-the-scenes moments',
  'A calmer space to connect without algorithms'
];

const faq = [
  {
    q: 'What happens after I tap join?',
    a: 'You’ll get instant access to my private page where I post updates, personal messages, and exclusive content.'
  },
  {
    q: 'Is this only for fans from Instagram/TikTok?',
    a: 'Mostly yes — this page is made for people who already feel the vibe and want a more personal connection.'
  },
  {
    q: 'Can I leave anytime?',
    a: 'Absolutely. You’re always in control, and there’s no pressure.'
  }
];

export default function Home() {
  return (
    <main className="pb-28 md:pb-16">
      <section id="top" className="section-shell pt-12 sm:pt-16">
        <div className="card overflow-hidden p-7 sm:p-10">
          <p className="mb-4 text-xs uppercase tracking-[0.22em] text-mauve">amayah.chat</p>
          <h1 className="font-display text-4xl leading-tight sm:text-5xl">
            Some connections feel too real to stay in the comments.
          </h1>
          <p className="mt-4 max-w-xl text-base text-rosewood/80 sm:text-lg">
            If you found me through a reel, this is your invitation to step into my quieter, more personal space.
          </p>
          <div className="mt-7">
            <CTAButton href="#final-cta" label="hero_primary_cta">Join my private page</CTAButton>
          </div>
        </div>
      </section>

      <section className="section-shell mt-8">
        <div className="card p-4 sm:p-5">
          <div className="relative h-[420px] overflow-hidden rounded-2xl sm:h-[520px]">
            <Image
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1080&q=80"
              alt="Soft portrait placeholder for creator image"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-5">
              <p className="text-sm text-white/90">Replace with your own portrait to personalize instantly.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell mt-10">
        <h2 className="font-display text-3xl">Why people click through</h2>
        <div className="mt-5 grid gap-4">
          {benefits.map((item) => (
            <div key={item} className="card p-5">
              <p className="text-base">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell mt-10">
        <div className="card p-7 sm:p-8">
          <h2 className="font-display text-3xl">A little about me</h2>
          <p className="mt-4 text-rosewood/85">
            I started posting for fun, but what I love most is the one-on-one energy behind the content. This space is
            where I share what feels more honest: in-progress thoughts, unfiltered moods, and moments that don’t fit
            the feed.
          </p>
          <p className="mt-3 text-rosewood/85">
            If you’re here for something softer, more direct, and a little addictive — you’re in the right place.
          </p>
        </div>
      </section>

      <section className="section-shell mt-10">
        <h2 className="font-display text-3xl">FAQ</h2>
        <div className="mt-5 space-y-3">
          {faq.map((item) => (
            <details key={item.q} className="card group p-5" open={false}>
              <summary className="cursor-pointer list-none pr-6 font-medium marker:content-none">{item.q}</summary>
              <p className="mt-3 text-sm text-rosewood/80">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="final-cta" className="section-shell mt-12">
        <div className="card p-8 text-center sm:p-10">
          <h2 className="font-display text-3xl sm:text-4xl">Ready to get closer?</h2>
          <p className="mx-auto mt-3 max-w-md text-rosewood/80">
            This is where the real vibe continues. Tap below and I’ll meet you there.
          </p>
          <div className="mt-7 flex justify-center">
            <CTAButton href="#" label="final_primary_cta" className="px-9">
              Unlock private access
            </CTAButton>
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/40 bg-cream/95 p-3 backdrop-blur md:hidden">
        <CTAButton href="#final-cta" label="sticky_mobile_cta" className="flex w-full">
          Join now
        </CTAButton>
      </div>
    </main>
  );
}
