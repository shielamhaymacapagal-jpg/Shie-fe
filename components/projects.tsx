import { SectionHead } from './section-head'
import ContentOpsShowcase from './content-ops-showcase'

const PROJECTS = [
{
name: 'Her Digital Haven',
industry: 'Business Growth Strategy',
description:
'Her Digital Haven helps established service-based and product-based businesses figure out why their growth has become messy or inconsistent, then creates the strategy, structure, systems, and digital infrastructure needed to grow more intentionally.',
tags: ['Website'],
video: '/projects/her-digital-haven.mp4',
poster: '/projects/her-digital-haven.jpg',
},
{
name: 'Accession Grant Writing',
industry: 'Grant Writing for Museums',
description:
'Museums need money to fund programs, exhibits, renovations, preservation, education, and other projects. Accession helps them identify where that money may be available, prepare stronger applications, and manage the grant process.',
tags: ['Website'],
video: '/projects/accession-grant-writing.mp4',
poster: '/projects/accession-grant-writing.jpg',
},
{
name: 'Phoenix Signs & Apparel',
industry: 'B2B Branding & Printing',
description:
'Phoenix Signs & Apparel is a B2B local branding and printing company that helps Arizona businesses increase visibility and maintain a professional brand presence through vehicle wraps and decals, storefront signs, window graphics, custom apparel, promotional printing, and related branding products.',
tags: ['Website', 'AI Chatbot'],
video: '/projects/phoenix-signs-apparel.mp4',
poster: '/projects/phoenix-signs-apparel.jpg',
},
{
name: 'Growth Bridge Network',
industry: 'Business Networking Community',
description:
'GBN brings business owners into curated groups where they can build relationships, exchange referrals, create partnerships, improve their businesses, and gain access to new opportunities.',
tags: ['Website'],
video: '/projects/growth-bridge-network.mp4',
poster: '/projects/growth-bridge-network.jpg',
},
]

export function Projects() {
return (
<section id="projects" className="py-[70px] md:py-[110px]">
<div className="mx-auto max-w-[1200px] px-8">
<SectionHead eyebrow="Selected Work" title="Featured Projects" />
<div className="grid grid-cols-1 gap-[26px] md:grid-cols-2">
{PROJECTS.map((project) => (
<article
key={project.name}
className="overflow-hidden rounded-card border border-border bg-card transition duration-[250ms] hover:-translate-y-1 hover:border-purple-light"
>
<div className="aspect-[16/10] overflow-hidden border-b border-border bg-[#1a0a0a]">
<video
src={project.video}
poster={project.poster}
autoPlay
muted
loop
playsInline
preload="metadata"
aria-label={`${project.name} website preview`}
className="h-full w-full object-cover object-top"
/>
</div>
<div className="px-[24px] pb-7 pt-6">
<span className="mb-2 block font-display text-[13px] font-semibold uppercase tracking-[0.14em] text-purple-light">
{project.industry}
</span>
<h3 className="mb-3 font-display text-[22px] font-semibold">{project.name}</h3>
<p className="mb-5 text-[16px] leading-[1.7] text-dim">{project.description}</p>
<div className="flex flex-wrap gap-2">
{project.tags.map((tag) => (
<span
key={tag}
className="rounded-[20px] border border-border px-[10px] py-1 font-display text-[13px] uppercase tracking-[0.06em] text-foreground"
>
{tag}
</span>
))}
</div>
</div>
</article>
))}
</div>
<ContentOpsShowcase />
</div>
</section>
)
}
