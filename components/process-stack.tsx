import { SectionHead } from './section-head'

const STEPS = [
{ num: '01', label: 'Discovery' },
{ num: '02', label: 'Planning' },
{ num: '03', label: 'Design' },
{ num: '04', label: 'Build & Automate' },
{ num: '05', label: 'Launch' },
{ num: '06', label: 'Support' },
]

const STACK = [
'GoHighLevel', 'HTML', 'CSS', 'JavaScript', 'Custom CSS', 'CRM', 'Automation',
'Funnels', 'Webhooks', 'REST API', 'Zapier', 'Make', 'Stripe', 'Calendars',
'Forms', 'Landing Pages', 'SEO', 'Snapshots', 'A2P', 'SMS', 'Twilio',
]

export function Process() {
return (
<section id="process" className="py-[70px] md:py-[110px]">
<div className="mx-auto max-w-[1200px] px-8">
<SectionHead eyebrow="How I Work" title="My Process" />
<div className="relative flex flex-wrap justify-between gap-[10px] md:before:absolute md:before:left-[5%] md:before:right-[5%] md:before:top-6 md:before:h-px md:before:bg-border md:before:content-['']">
{STEPS.map((step) => (
<div key={step.num} className="relative z-[1] min-w-[130px] flex-1 text-center">
<div className="mx-auto mb-[14px] flex h-12 w-12 items-center justify-center rounded-full border border-purple-light bg-background font-display font-semibold text-foreground">
{step.num}
</div>
<h4 className="font-display text-[13px] uppercase tracking-[0.06em]">{step.label}</h4>
</div>
))}
</div>
</div>
</section>
)
}

export function TechStack() {
return (
<section className="bg-background-alt py-[70px] md:py-[110px]">
<div className="mx-auto max-w-[1200px] px-8">
<SectionHead eyebrow="Tools I Use" title="Tech Stack" />
<div className="flex flex-wrap justify-center gap-[10px]">
{STACK.map((tool) => (
<span
key={tool}
className="rounded-[20px] border border-border bg-card px-[18px] py-[9px] text-[12.5px] text-dim"
>
{tool}
</span>
))}
</div>
</div>
</section>
)
}
