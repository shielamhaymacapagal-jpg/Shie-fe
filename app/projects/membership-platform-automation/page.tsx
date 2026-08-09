import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Eyebrow } from '@/components/section-head'

const DELIVERABLES = [
  'Custom Landing Pages',
  'Expansion Framework Overview',
  'Application Forms & Membership Pathways',
  'Application Processing Pipeline',
  'Lead Diagnostic Webhook Engine',
  'Payment Failure & Dunning System',
  'Appointment Confirmation & Reminder Flow',
  'Newsletter Tagging System',
]

const SKILLS = [
  'GoHighLevel (GHL)',
  'Webhook Integration',
  'Lead Scoring & Triage',
  'Automation Logic & Conditional Branching',
  'Dunning & Revenue Recovery',
  'Multi-Channel Nurturing (SMS + Email)',
  'Website Architecture',
]

const PROOF = [
  {
    src: '/projects/membership-platform/website.png',
    alt: 'Membership website landing page with application and membership routes',
    caption: 'Responsive landing page covering the expansion framework, membership tiers, and application pathways.',
  },
  {
    src: '/projects/membership-platform/application-processing.png',
    alt: 'Application processing workflow with conditional status routing',
    caption:
      'Application processing engine — conditional routing across Submitted, Approved, Pending Seat, On Hold, and Denied states with matching email and SMS notifications.',
  },
  {
    src: '/projects/membership-platform/business-diagnostic-leads.png',
    alt: 'Business diagnostic lead workflow with tier based branching',
    caption:
      'Inbound webhook captures diagnostic submissions, creates the contact, tags it, and branches into Survival, Growth, Operator, and Leader result tracks.',
  },
  {
    src: '/projects/membership-platform/payment-failed-dunning.png',
    alt: 'Payment failed dunning and subscription recovery workflow',
    caption:
      'Dunning workflow — failed payment tagging, a 48-hour grace period, lifecycle updates to At Risk, then suspension and membership pause notifications.',
  },
  {
    src: '/projects/membership-platform/appointment-reminders.png',
    alt: 'Appointment confirmation and reminder workflow',
    caption:
      'Appointment confirmation plus 24-hour and 1-hour reminder sequence delivered over both email and SMS.',
  },
  {
    src: '/projects/membership-platform/new-member-workflow.png',
    alt: 'New member onboarding workflow triggered by order submitted',
    caption:
      'New member onboarding — order submitted triggers seat reservation or purchase branches, tagging, opportunity creation, and welcome emails.',
  },
  {
    src: '/projects/membership-platform/new-visitor-attended.png',
    alt: 'Guest registration form workflow adding an attended tag',
    caption: 'Guest registration submissions automatically tag new visitors as attended.',
  },
  {
    src: '/projects/membership-platform/newsletter-tagging.png',
    alt: 'Newsletter subscription tagging workflow',
    caption: 'Newsletter form submissions notify the team and tag the subscriber for future sends.',
  },
  {
    src: '/projects/membership-platform/stale-leads.png',
    alt: 'Stale opportunity clean-up workflow',
    caption: 'Stale opportunities in the marketing pipeline are automatically moved to Abandoned after 7 days.',
  },
]

export default function MembershipPlatformProjectPage() {
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
          Membership Platform <span className="grad-text">&amp; Automation Engine</span>
        </h1>

        <p className="mb-10 text-[14.5px] text-dim">
          Designed and built a full digital ecosystem for a business growth network, combining a high-converting
          website with an automated backend for applicant processing, diagnostic lead scoring, and subscription
          lifecycle management. The build covers end-to-end CRM integration, dynamic lead routing, automated
          dunning and payment recovery, and multi-channel appointment reminder workflows.
        </p>

        <section className="mb-10">
          <h2 className="mb-3 font-display text-[12px] font-semibold uppercase tracking-[0.08em] text-purple-light">
            The Challenge
          </h2>
          <p className="text-[14px] text-dim">
            The client needed to move from manual community management and lead handling to an enterprise-grade
            automated ecosystem. That meant an integrated website and CRM platform able to handle multi-stage
            applicant approvals, dynamic diagnostic lead scoring, automated payment recovery, and calendar
            reminders without manual oversight.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-3 font-display text-[12px] font-semibold uppercase tracking-[0.08em] text-purple-light">
            My Responsibilities
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-[14px] text-dim">
            <li>Designed and deployed website landing pages and expansion membership routes.</li>
            <li>Built conditional application routing workflows (Approved, Pending Seat, On Hold, Denied).</li>
            <li>Integrated webhooks for automated lead diagnostic categorization and tailored nurturing.</li>
            <li>Configured automated dunning workflows to handle payment failures and access revocation.</li>
            <li>Set up multi-touch SMS and email appointment confirmation and reminder sequences.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="mb-3 font-display text-[12px] font-semibold uppercase tracking-[0.08em] text-purple-light">
            Process
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-[14px] text-dim">
            <li>
              Website &amp; Funnel Architecture — responsive, high-converting landing and application pages
              detailing the expansion framework, core membership tiers, and application pathways.
            </li>
            <li>
              Application Processing Engine — conditional routing that updates applicant status, sends internal
              email and SMS alerts on submission, and keeps Approval, On Hold, Pending Seat, and Denial states in
              sync, with an SMS nudge directing applicants to check their email.
            </li>
            <li>
              Lead Diagnostic Pipeline — custom webhooks capture inbound diagnostic submissions, score and
              classify each lead (Survival, Growth, Operator, Leader), create the contact with the right tags, and
              start a tailored multi-day nurture track.
            </li>
            <li>
              Dunning &amp; Subscription Recovery — a 48-hour grace period on payment failure, tag updates for
              member state (Active, At Risk, Suspended), internal team alerts, and member pause notifications.
            </li>
            <li>
              Appointment &amp; Reminders — instant booking confirmation email, a 24-hour reminder email, and
              1-hour email plus SMS notifications linked to the booking calendars.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="mb-3 font-display text-[12px] font-semibold uppercase tracking-[0.08em] text-purple-light">
            Deliverables
          </h2>
          <div className="flex flex-wrap gap-2">
            {DELIVERABLES.map((item) => (
              <span key={item} className="rounded-[20px] border border-border px-[9px] py-1 text-[11px] text-purple-light">
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
              <span key={item} className="rounded-[20px] border border-border px-[9px] py-1 text-[11px] text-purple-light">
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
            The new ecosystem removed manual handling for applicant routing, lead segmentation, and appointment
            reminders. Automated payment recovery protects recurring revenue from churn, while the diagnostic lead
            engine delivers immediate, personalized feedback to prospective members.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-5 font-display text-[12px] font-semibold uppercase tracking-[0.08em] text-purple-light">
            Proof of Work
          </h2>
          <div className="space-y-8">
            {PROOF.map((item) => (
              <figure key={item.src}>
                <img src={item.src} alt={item.alt} className="w-full rounded-card border border-border" />
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
