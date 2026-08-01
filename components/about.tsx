import Image from 'next/image'
import { Eyebrow } from './section-head'

const STATS = [
  { icon: '◈', num: '2+', label: 'Years in GoHighLevel' },
  { icon: '✦', num: '100+', label: 'Automation Systems' },
  { icon: '◉', num: '30+', label: 'Business Websites' },
  { icon: '✓', num: '5+', label: 'A2P Approved Projects' },
  { icon: '▤', num: '50+', label: 'Funnels & Landing Pages' },
  { icon: '◎', num: 'Philippines', label: 'Based in Malolos City' },
]

export function About() {
  return (
    <section id="about" className="py-[70px] md:py-[110px]">
      <div className="mx-auto grid max-w-[1200px] items-center gap-[50px] px-8 md:grid-cols-[0.8fr_1.6fr]">
        <div className="mx-auto h-[220px] w-[220px] overflow-hidden rounded-full border-2 border-purple-light shadow-[0_0_60px_rgba(236,72,153,0.2)]">
          <Image
            src="/shiela-portrait.png"
            alt="Shiela Macapagal"
            width={220}
            height={220}
            className="h-full w-full object-cover object-top"
          />
        </div>

        <div>
          <Eyebrow>About Me</Eyebrow>
          <h2 className="mb-4 font-display text-[clamp(28px,3.4vw,40px)] font-semibold tracking-[0.02em] text-balance">
            Business systems, not just <span className="grad-text">beautiful websites</span>
          </h2>
          <p className="mb-[14px] max-w-[640px] text-[15px] text-dim">
            Hi, I&apos;m Shiela, a GoHighLevel Expert from the Philippines specializing in complete business systems —
            not just beautiful websites.
          </p>
          <p className="mb-[14px] max-w-[640px] text-[15px] text-dim">
            I help coaches, agencies, service providers, and small businesses launch professional websites while
            connecting every part of their business inside GoHighLevel.
          </p>
          <p className="mb-[14px] max-w-[640px] text-[15px] text-dim">
            From automation and CRM setup to funnels, forms, calendars, payments, and SMS compliance, I build systems
            that work together seamlessly.
          </p>

          <div className="mt-[26px] grid grid-cols-1 gap-[18px] sm:grid-cols-2 sm:gap-x-10">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex items-start gap-3">
                <div className="flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center rounded-lg border border-border bg-card text-[16px] text-pink">
                  {stat.icon}
                </div>
                <div>
                  <div className="font-display text-[19px] font-bold text-purple-light">{stat.num}</div>
                  <div className="text-[12px] text-faint">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
