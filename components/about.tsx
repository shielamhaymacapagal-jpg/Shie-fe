import Image from 'next/image'
import { Eyebrow } from './section-head'

const STATS = [
{ icon: '◈', num: '1+', label: 'Year in GoHighLevel' },
{ icon: '✦', num: '', label: 'Automation Systems' },
{ icon: '◉', num: '', label: 'Business Websites' },
{ icon: '✓', num: '', label: 'A2P Approved Projects' },
{ icon: '▤', num: '', label: 'Funnels & Landing Pages' },
{ icon: '◎', num: 'Philippines', label: 'Based in Malolos City' },
]

export function About() {
return (
<section id="about" className="py-[70px] md:py-[110px]">
<div className="mx-auto grid max-w-[1200px] items-center gap-[50px] px-8 md:grid-cols-[0.95fr_1.45fr]">
<div className="mx-auto aspect-[760/1350] w-full max-w-[380px] overflow-hidden rounded-[24px] border-2 border-purple-light shadow-[0_0_70px_rgba(220,38,38,0.28)]">
<Image
src="/shiela-portrait.jpg"
alt="Shiela Macapagal"
width={760}
height={1350}
className="h-full w-full object-cover object-top"
/>
</div>

<div>
<Eyebrow>About Me</Eyebrow>
<h2 className="mb-4 font-display text-[clamp(30px,3.4vw,42px)] font-semibold tracking-[0.02em] text-balance">
Business systems, not just <span className="grad-text">beautiful websites</span>
</h2>
<p className="mb-[14px] max-w-[640px] text-[17px] text-dim">
Hi, I&apos;m Shiela, a GoHighLevel Expert from the Philippines specializing in complete business systems —
not just beautiful websites.
</p>
<p className="mb-[14px] max-w-[640px] text-[17px] text-dim">
I help coaches, agencies, service providers, and small businesses launch professional websites while
connecting every part of their business inside GoHighLevel.
</p>
<p className="mb-[14px] max-w-[640px] text-[17px] text-dim">
From automation and CRM setup to funnels, forms, calendars, payments, and SMS compliance, I build systems
that work together seamlessly.
</p>

<div className="mt-[26px] grid grid-cols-1 gap-[18px] sm:grid-cols-2 sm:gap-x-10">
{STATS.map((stat) => (
<div key={stat.label} className={`flex gap-3 ${stat.num ? 'items-start' : 'items-center'}`}>
<div className="flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center rounded-lg border border-border bg-card text-[18px] text-foreground">
{stat.icon}
</div>
{stat.num ? (
<div>
<div className="font-display text-[21px] font-bold text-foreground">{stat.num}</div>
<div className="text-[14px] text-faint">{stat.label}</div>
</div>
) : (
<div className="font-display text-[17px] font-semibold text-foreground">{stat.label}</div>
)}
</div>
))}
</div>
</div>
</div>
</section>
)
}
