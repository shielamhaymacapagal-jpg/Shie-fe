import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Eyebrow } from '@/components/section-head'

const DELIVERABLES = [
  'Core Brand Website',
  'Custom Multi-Tier Checkout Page (Full Payment + Installments + Team Add-ons)',
  '9 Active GoHighLevel Booking Calendars',
  'Customized Meeting Duration & Availability Settings',
  'Complete Product Catalog Configured in GHL',
  '4 Specialized Sales Pipelines',
  'Payment Received → Contract Delivery Workflow',
  'Contract Signed → Deal Won & Welcome Onboarding Flow',
  'Cancellation / No-Show → Automated Reschedule Sequence',
]

const SKILLS = [
  'GoHighLevel (GHL) Architecture',
  'Custom Checkout Funnel Design',
  'Product Catalog & Multi-Plan Pricing Setup',
  'Contract Automation & e-Sign Integration',
  'Opportunity Pipeline Management',
  'Calendar & Scheduling Optimization',
  'Rebooking & Retention Automation (SMS + Email)',
]

const PROOF = [
  {
    src: '/projects/executive-funnel-crm/website.png',
    alt: 'High-ticket advisory brand website landing page',
    caption:
      'Responsive, luxury-style brand website showcasing the strategic advisory offerings and the core method.',
  },
  {
    src: '/projects/executive-funnel-crm/checkout.png',
    alt: 'Multi-tier checkout funnel with payment plans and team add-ons',
    caption:
      'Multi-step checkout funnel supporting Full Payment and 3, 6, 12, and 24-month installment paths, plus optional team member seat add-ons.',
  },
  {
    src: '/projects/executive-funnel-crm/calendars.png',
    alt: 'Nine active GoHighLevel booking calendars',
    caption:
      'Nine active GoHighLevel booking calendars across meeting types with standardized 15, 30, and 45 minute durations.',
  },
  {
    src: '/projects/executive-funnel-crm/products.png',
    alt: 'GoHighLevel product catalog with tiered payment plans',
    caption:
      'Digital product catalog configured with single-payment options and 3, 6, 12, and 24-month installment plans, plus tiered team member seat pricing.',
  },
  {
    src: '/projects/executive-funnel-crm/pipelines.png',
    alt: 'Four specialized sales pipelines in GoHighLevel',
    caption:
      'Four specialized sales pipelines — Charted Growth Sales, Haven Builds Sales, Client Expansion, and Marketing Pipeline.',
  },
  {
    src: '/projects/executive-funnel-crm/payment-contract-workflow.png',
    alt: 'Payment received to contract delivery workflow',
    caption:
      'Payment Received trigger — multi-branch logic detects successful payments across any plan, sends the coaching agreement, and tags the contact.',
  },
  {
    src: '/projects/executive-funnel-crm/contract-signed-workflow.png',
    alt: 'Contract signed to deal won and welcome email workflow',
    caption:
      'Contract Signed trigger — updates the pipeline stage to WON on signature and sends a personalized client welcome email.',
  },
  {
    src: '/projects/executive-funnel-crm/reschedule-workflow.png',
    alt: 'Cancellation and no-show automated reschedule workflow',
    caption:
      'Cancellation / No-Show recovery — moves the opportunity to Needs Reschedule and triggers multi-touch email and SMS reminders with a 2-day wait to encourage rebooking.',
  },
]

export default function ExecutiveFunnelCrmProjectPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-[900px] px-8 py-[70px] md:py-[110px]">
        <a
          href="/#projects"
          className="mb-8 inline-block font-display text-[11px] font-semibold uppercase tracking-[0.1em] text-pink"
        >
          ← Back to Projects
        </a>

        <Eyebrow>Case Study</Eyebrow>
        <h1 className="mb-6 font-display text-[clamp(28px,3.4vw,40px)] font-semibold tracking-[0.02em] text-balance">
          High-Ticket Advisory Website, Checkout Funnel <span className="grad-text">&amp; CRM Engine</span>
        </h1>

        <p className="mb-10 text-[14.5px] text-dim">
          Built a premium digital ecosystem for a high-ticket executive consulting practice, including a custom
          website, an interactive multi-pay checkout funnel, complete GoHighLevel calendar configuration, a
          digital product catalog, and contract-triggered deal pipeline automations. The project demonstrates
          custom checkout funnel architecture, contract-to-welcome onboarding workflows, calendar setup,
          multi-tier product pricing, and opportunity pipeline management.
        </p>

        <section className="mb-10">
          <h2 className="mb-3 font-display text-[12px] font-semibold uppercase tracking-[0.08em] text-purple-light">
            The Challenge
          </h2>
          <p className="text-[14px] text-dim">
            The advisory practice needed a cohesive digital system to replace fragmented booking and payment
            processes. They required a high-end website to showcase their strategic offerings, a multi-tiered
            checkout funnel supporting flexible payment plans and team add-ons, structured calendar scheduling
            for varied meeting types, and an automated pipeline that seamlessly moves deals from payment to
            signed agreements and onboarding.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-3 font-display text-[12px] font-semibold uppercase tracking-[0.08em] text-purple-light">
            My Responsibilities
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-[14px] text-dim">
            <li>Designed and built the primary brand website and high-converting checkout funnel.</li>
            <li>Configured 9 specialized GoHighLevel booking calendars across different meeting types.</li>
            <li>Set up digital product offerings with full payments and tiered financing plans (3, 6, 12, and 24 months).</li>
            <li>Built automated pipelines to update deal stages upon payment and signed contracts.</li>
            <li>Developed cancellation and no-show follow-up sequences to trigger automated rebooking workflows.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="mb-3 font-display text-[12px] font-semibold uppercase tracking-[0.08em] text-purple-light">
            Process
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-[14px] text-dim">
            <li>
              Brand Website &amp; Checkout Architecture — a responsive, luxury-style website and a multi-step
              checkout experience supporting flexible payment paths (Full Payment vs. 3, 6, 12, or 24-month
              options) with optional add-ons such as additional team member seats built directly into checkout.
            </li>
            <li>
              Multi-Calendar Scheduling Infrastructure — 9 active calendar routes including Strategic
              Partnerships, Coaching Calls, Scaling Strategy Calls, and Diagnostic sessions with standardized
              15, 30, and 45 minute durations and routing rules.
            </li>
            <li>
              Product Catalog &amp; Payment Plan Configuration — digital product plans ranging from single
              payments ($3,900) to multi-month installments ($247–$1,390/mo), plus dynamic pricing tiers for
              additional team member seat access.
            </li>
            <li>
              Contract Delivery &amp; Pipeline Automation — a Payment Received trigger sends the coaching
              agreement and tags contacts, while a Contract Signed trigger moves the stage to WON and fires the
              welcome email.
            </li>
            <li>
              Automated Rebooking &amp; No-Show Recovery — monitors booking statuses, updates opportunities to
              Needs Reschedule, and triggers multi-touch email and SMS reminders with a 2-day wait condition.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="mb-3 font-display text-[12px] font-semibold uppercase tracking-[0.08em] text-purple-light">
            Deliverables
          </h2>
          <div className="flex flex-wrap gap-2">
            {DELIVERABLES.map((item) => (
              <span
                key={item}
                className="rounded-[20px] border border-border px-[9px] py-1 text-[11px] text-purple-light"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-3 font-display text-[12px] font-semibold uppercase tracking-[0.08em] text-purple-light">
            Skills Demonstrated
          </h2>
          <div className="flex flex-wrap gap-2">
            {SKILLS.map((item) => (
              <span
                key={item}
                className="rounded-[20px] border border-border px-[9px] py-1 text-[11px] text-purple-light"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-3 font-display text-[12px] font-semibold uppercase tracking-[0.08em] text-purple-light">
            Outcome
          </h2>
          <p className="text-[14px] text-dim">
            The completed platform fully automates client intake from first touch to signed contract. By
            integrating payment plan checkouts, automated contract delivery, and retention sequences for
            cancelled bookings, the client saves hours of manual administrative work per client while
            delivering a high-touch experience for premium coaching and advisory clients.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-5 font-display text-[12px] font-semibold uppercase tracking-[0.08em] text-purple-light">
            Proof of Work
          </h2>
          <div className="space-y-8">
            {PROOF.map((item) => (
              <figure key={item.src}>
                <img
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  className="w-full rounded-card border border-border"
                />
                <figcaption className="mt-2 text-[12px] text-faint">{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
