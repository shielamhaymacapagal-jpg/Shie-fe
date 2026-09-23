import { Eyebrow } from './section-head'

const CHECKS = [
'Business entity verification',
'Twilio / LC phone setup',
'EIN verification',
'SMS compliance',
'Brand registration',
'Opt-in language',
'Campaign registration',
'Workflow configuration',
]

export function A2P() {
return (
<section id="a2p" className="bg-background-alt py-[70px] md:py-[110px]">
<div className="mx-auto max-w-[1200px] px-8">
<div className="grid grid-cols-1 items-center gap-10 rounded-[20px] border border-border bg-card p-8 md:grid-cols-[1.1fr_0.9fr] md:p-11">
<div>
<Eyebrow>Specialized Skill</Eyebrow>
<h2 className="font-display text-[clamp(30px,3.4vw,42px)] font-semibold tracking-[0.02em] text-balance">
Successfully Navigated <span className="grad-text">A2P 10DLC Approval</span>
</h2>
<span className="grad-bg my-[14px] mb-[18px] inline-block rounded-[20px] px-[18px] py-2 font-display text-[13px] font-semibold uppercase tracking-[0.1em] text-white">
Officially Approved
</span>
<p className="mb-5 max-w-[540px] text-[16.5px] text-dim">
End-to-end A2P 10DLC registration inside GoHighLevel — from brand &amp; campaign registration to SMS
compliance and workflow configuration.
</p>
<div className="grid grid-cols-1 gap-x-6 gap-y-[10px] sm:grid-cols-2">
{CHECKS.map((check) => (
<div
key={check}
className="flex items-center gap-2 text-[15px] text-dim before:font-bold before:text-foreground before:content-['✓']"
>
{check}
</div>
))}
</div>
</div>

<figure className="relative mx-auto w-full max-w-[520px] pb-[18%]">
<a
href="/projects/a2p-compliant-numbers.png"
target="_blank"
rel="noopener noreferrer"
className="block overflow-hidden rounded-[12px] border border-border bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.6)] transition duration-300 hover:-translate-y-1"
>
<img
src="/projects/a2p-compliant-numbers.png"
alt="GoHighLevel Phone System showing 'You are now A2P 10DLC compliant' and an A2P Verified number"
loading="lazy"
className="block h-auto w-full"
/>
</a>
<a
href="/projects/a2p-brand-campaign-approved.png"
target="_blank"
rel="noopener noreferrer"
className="absolute bottom-0 right-[-4%] w-[58%] overflow-hidden rounded-[12px] border border-border bg-white shadow-[0_24px_60px_-10px_rgba(0,0,0,0.7)] transition duration-300 hover:-translate-y-1"
>
<img
src="/projects/a2p-brand-campaign-approved.png"
alt="A2P Messaging brand status and campaign status both Approved"
loading="lazy"
className="block h-auto w-full"
/>
</a>
<span className="grad-bg absolute left-3 top-[-14px] rounded-[20px] px-3 py-1 font-display text-[12px] font-semibold uppercase tracking-[0.1em] text-white shadow-lg">
Proof of Approval
</span>
</figure>
</div>
</div>
</section>
)
}
