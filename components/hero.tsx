'use client'

import Auralis from '@/components/ui/auralis'

export function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden">
      <Auralis height="90vh" colors={['#9333ea', '#a78bfa', '#ec4899']} />
      <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
        <div className="mb-[10px] font-medium tracking-[0.08em] text-purple-light">HELLO, I&apos;M</div>
        <h1 className="mb-[6px] font-display text-[clamp(38px,6vw,72px)] font-bold leading-[1.05] tracking-[0.01em]">
          <span className="grad-text">SHIELA MACAPAGAL</span>
        </h1>
        <div className="my-[14px] mb-[18px] font-display text-[clamp(16px,2vw,22px)] font-medium uppercase tracking-[0.12em] text-dim">
          GoHighLevel Expert
        </div>
        <span className="mb-[18px] inline-block text-[15px] text-purple-light underline decoration-pink underline-offset-[6px]">
          Build. Automate. Scale.
        </span>
        <p className="mt-[18px] max-w-[460px] text-[15px] text-dim">
          I help businesses grow with beautiful websites, high-converting funnels, and smart automations built
          entirely inside GoHighLevel.
        </p>
      </div>
    </section>
  )
}
