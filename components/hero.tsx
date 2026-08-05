import Image from 'next/image'

const CHIPS = ['Websites', 'Automation', 'Funnels', 'CRM', 'SMS Compliance']

export function Hero() {
  return (
    <section id="home" className="overflow-hidden pb-[60px] pt-[90px]">
      <div className="mx-auto grid max-w-[1200px] items-center gap-[60px] px-8 md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="mb-[10px] font-medium tracking-[0.08em] text-purple-light">HELLO, I&apos;M</div>
          <h1 className="mb-[6px] font-display text-[clamp(38px,5vw,58px)] font-bold leading-[1.05] tracking-[0.01em]">
            <span className="grad-text block">SHIELA MACAPAGAL</span>
          </h1>
          <div className="my-[14px] mb-[18px] font-display text-[clamp(16px,2vw,22px)] font-medium uppercase tracking-[0.12em] text-dim">
            GoHighLevel Expert
          </div>
          <span className="mb-[18px] inline-block text-[15px] text-purple-light underline decoration-pink underline-offset-[6px]">
            Build. Automate. Scale.
          </span>
          <p className="mb-[30px] max-w-[460px] text-[15px] text-dim">
            I help businesses grow with beautiful websites, high-converting funnels, and smart automations built
            entirely inside GoHighLevel.
          </p>
          <div className="mb-9 flex flex-wrap gap-[14px]">
            
              href="#projects"
              className="grad-bg inline-block rounded-md px-[26px] py-[14px] font-display text-[12px] font-semibold uppercase tracking-[0.14em] text-white transition hover:-translate-y-px hover:brightness-110"
            >
              View Portfolio
            </a>
            
              href="#contact"
              className="inline-block rounded-md border border-border px-[26px] py-[14px] font-display text-[12px] font-semibold uppercase tracking-[0.14em] text-foreground transition hover:border-purple-light"
            >
              Book Discovery Call
            </a>
          </div>
          <div className="flex flex-wrap gap-x-[22px] gap-y-2 text-[12px] tracking-[0.05em] text-faint">
            {CHIPS.map((chip) => (
              <span key={chip} className="flex items-center gap-[7px]">
                <i className="h-[5px] w-[5px] rounded-full bg-pink" />
                {chip}
              </span>
            ))}
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="absolute -inset-10 z-0 bg-[radial-gradient(circle,rgba(236,72,153,0.28),transparent_65%)] blur-[10px]" />
          <div className="relative z-[1] w-full max-w-[380px] overflow-hidden
