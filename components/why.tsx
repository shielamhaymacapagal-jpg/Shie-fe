import { SectionHead } from './section-head'

const REASONS = [
{
num: '01',
title: 'Business-first thinking',
text: 'Every build starts with how it moves a lead through your business, not just how it looks.',
},
{
num: '02',
title: 'End-to-end systems',
text: 'Website, funnel, CRM, and automation designed to work together — not as disconnected pieces.',
},
{
num: '03',
title: 'Compliance handled',
text: 'A2P 10DLC and SMS compliance built in, so your outreach stays deliverable and approved.',
},
{
num: '04',
title: 'Reliable support',
text: 'Clear communication and support after launch, so your systems keep running smoothly.',
},
]

export function Why() {
return (
<section className="py-[70px] md:py-[110px]">
<div className="mx-auto max-w-[1200px] px-8">
<SectionHead eyebrow="The Difference" title="Why Work With Me" />
<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
{REASONS.map((reason) => (
<div key={reason.num} className="px-1 py-2">
<span className="mb-[10px] block font-display text-[12px] tracking-[0.1em] text-foreground">{reason.num}</span>
<h3 className="mb-2 font-display text-[16px] font-semibold">{reason.title}</h3>
<p className="text-[13.5px] text-faint">{reason.text}</p>
</div>
))}
</div>
</div>
</section>
)
}
