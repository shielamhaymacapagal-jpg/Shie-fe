import { SectionHead } from './section-head'

const SERVICES = [
{
icon: '⚙',
title: 'Automation & Workflows',
items: ['Triggers & actions', 'Follow-up sequences', 'Internal notifications', 'Appointment reminders', 'Webhook & API triggers'],
},
{
icon: '◫',
title: 'Website Buildouts',
items: ['Custom GoHighLevel websites', 'Responsive design', 'SEO setup', 'Blog & pages', 'Custom CSS'],
},
{
icon: '▷',
title: 'Landing Pages & Funnels',
items: ['Lead generation funnels', 'Sales funnels', 'Order forms', 'Upsells / downsells', 'Thank-you pages'],
},
{
icon: '▤',
title: 'Forms & Lead Capture',
items: ['Custom forms', 'Surveys', 'Lead capture', 'Conditional logic', 'Custom fields'],
},
{
icon: '◆',
title: 'Pipeline Management',
items: ['Pipeline setup', 'Stages & opportunities', 'Lead tracking', 'Team assignment', 'Automation integration'],
},
{
icon: '⟡',
title: 'API & Webhook Integration',
items: ['REST API', 'Webhooks', 'Third-party integrations', 'Zapier / Make.com', 'Custom connections'],
},
{
icon: '◷',
title: 'Calendar & Booking',
items: ['Calendar setup', 'Booking pages', 'Availability settings', 'Reminders & notifications', 'Integrations'],
},
{
icon: '₵',
title: 'Payments & Invoices',
items: ['Stripe integration', 'Invoices', 'Payment links', 'Products & subscriptions', 'Order tracking'],
},
{
icon: '▧',
title: 'Social Media Scheduling',
items: ['Content planner', 'Post scheduling', 'Multi-platform posting', 'Content calendar', 'Automation integration'],
},
{
icon: '⌂',
title: 'Sub-Account Management',
items: ['Sub-account setup', 'Snapshots', 'Client branding', 'User permissions', 'White-label setup'],
},
{
icon: '☰',
title: 'Contact Management',
items: ['Smart lists', 'Tags & segmentation', 'Custom fields', 'DND compliance', 'Import & migration'],
},
]

export function Services() {
return (
<section id="services" className="bg-background-alt py-[70px] md:py-[110px]">
<div className="mx-auto max-w-[1200px] px-8">
<SectionHead eyebrow="What I Offer" title="Services" />
<div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
{SERVICES.map((service) => (
<div
key={service.title}
className="rounded-card border border-border bg-card px-[22px] py-[26px] transition duration-[250ms] hover:-translate-y-[3px] hover:border-purple-light hover:shadow-[0_16px_40px_rgba(220,38,38,0.18)]"
>
<div className="grad-bg mb-4 flex h-[38px] w-[38px] items-center justify-center rounded-[9px] text-[17px] text-white">
{service.icon}
</div>
<h3 className="mb-3 font-display text-[15px] font-semibold tracking-[0.01em]">{service.title}</h3>
<ul className="list-none text-[12.5px] text-faint">
{service.items.map((item) => (
<li key={item} className="relative py-[3px] pl-[14px] before:absolute before:left-0 before:text-foreground before:content-['—']">
{item}
</li>
))}
</ul>
</div>
))}
</div>
</div>
</section>
)
}
