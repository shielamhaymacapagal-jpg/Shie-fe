'use client'

import { useState } from 'react'
import { SectionHead } from './section-head'

const FAQS = [
{
q: 'What is GoHighLevel and why use it?',
a: 'GoHighLevel is an all-in-one platform for websites, funnels, CRM, and marketing automation — so your business runs on one connected system instead of ten disconnected tools.',
},
{
q: 'How long does a typical build take?',
a: 'Most website and funnel builds take 1–3 weeks depending on scope. Full systems with automation and A2P setup can take 3–5 weeks.',
},
{
q: 'Do you help with A2P 10DLC registration?',
a: 'Yes — I handle end-to-end brand and campaign registration, EIN verification, and SMS compliance setup so your texting stays approved and deliverable.',
},
{
q: 'Do you offer ongoing support after launch?',
a: 'Yes — every project includes a support window after launch, with maintenance retainers available for ongoing management.',
},
]

export function FAQ() {
const [openIndex, setOpenIndex] = useState<number | null>(0)

return (
<section id="faq" className="bg-background-alt py-[70px] md:py-[110px]">
<div className="mx-auto max-w-[780px] px-8">
<SectionHead eyebrow="Questions" title="FAQ" />
<div>
{FAQS.map((faq, index) => {
const isOpen = openIndex === index
return (
<div key={faq.q} className="border-b border-border py-[22px]">
<button
className="flex w-full items-center justify-between text-left text-[15px] font-medium"
aria-expanded={isOpen}
onClick={() => setOpenIndex(isOpen ? null : index)}
>
{faq.q}
<span
className={`text-[18px] text-foreground transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
>
+
</span>
</button>
<div
className="grid overflow-hidden text-[14px] text-dim transition-all duration-300"
style={{ gridTemplateRows: isOpen ? '1fr' : '0fr', marginTop: isOpen ? 12 : 0 }}
>
<div className="overflow-hidden">{faq.a}</div>
</div>
</div>
)
})}
</div>
</div>
</section>
)
}
