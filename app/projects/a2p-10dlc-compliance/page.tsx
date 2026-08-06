import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Eyebrow } from '@/components/section-head'

const DELIVERABLES = [
  'A2P 10DLC Registration',
  'Compliance Landing Page',
  'Privacy Policy',
  'Terms & Conditions',
  'Facebook Lead Ads Integration',
  'SMS Automation Workflow',
  'Lead Pipeline Automation',
]

const SKILLS = [
  'GoHighLevel CRM',
  'A2P 10DLC Compliance',
  'SMS Marketing',
  'Workflow Automation',
  'Landing Page Development',
  'Forms & Lead Capture',
  'CRM Pipeline Management',
  'Documentation & Compliance',
]

export default function A2PProjectPage() {
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
          A2P 10DLC Compliance <span className="grad-text">&amp; SMS Automation</span>
        </h1>

        <p className="mb-10 text-[14.5px] text-dim">
          Implemented a fully compliant SMS marketing system inside GoHighLevel, covering A2P 10DLC registration,
          campaign setup, and automated lead follow-up from Facebook Ads.
        </p>

        <section className="mb-10">
          <h2 className="mb-3 font-display text-[12px] font-semibold uppercase tracking-[0.08em] text-purple-light">
            The Challenge
          </h2>
          <p className="text-[14px] text-dim">
            The business needed carrier approval to legally send SMS messages. An earlier registration attempt had
            been unsuccessful, so a more structured approach to documentation and compliance was required before
            resubmitting.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-3 font-display text-[12px] font-semibold uppercase tracking-[0.08em] text-purple-light">
            Process
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-[14px] text-dim">
            <li>Compliance Preparation — gathered IRS documentation and business details needed for carrier verification.</li>
            <li>Compliance Website — built a landing page with SMS consent language, a contact form, and the required policy pages.</li>
            <li>A2P 10DLC Registration — submitted the application, which was approved on the first attempt.</li>
            <li>SMS Lead Automation — built a workflow that adds new Facebook leads to the CRM, sends an instant confirmation text, and notifies the sales team for follow-up.</li>
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
            The approved registration let the business begin sending compliant SMS messages right away, with new
            leads automatically confirmed and routed to sales — cutting down on manual follow-up work.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-5 font-display text-[12px] font-semibold uppercase tracking-[0.08em] text-purple-light">
            Proof of Work
          </h2>
          <div className="space-y-8">
            <figure>
              <img
                src="/projects/a2p-10dlc/a2p-10dlc-compliant.png"
                alt="GoHighLevel Phone System showing A2P 10DLC compliant status"
                className="w-full rounded-card border border-border"
              />
              <figcaption className="mt-2 text-[12px] text-faint">
                GoHighLevel phone number verified as A2P 10DLC compliant.
              </figcaption>
            </figure>
            <figure>
              <img
                src="/projects/a2p-10dlc/business-website.png"
                alt="Compliance landing page built for the client"
                className="w-full rounded-card border border-border"
              />
              <figcaption className="mt-2 text-[12px] text-faint">
                Compliance-ready landing page built to support the A2P registration.
              </figcaption>
            </figure>
            <figure>
              <img
                src="/projects/a2p-10dlc/terms-and-privacy.png"
                alt="Terms & Conditions and Privacy Policy pages"
                className="w-full rounded-card border border-border"
              />
              <figcaption className="mt-2 text-[12px] text-faint">
                Terms &amp; Conditions and Privacy Policy pages drafted for SMS compliance.
              </figcaption>
            </figure>
            <figure>
              <img
                src="/projects/a2p-10dlc/sms-workflow.png"
                alt="GoHighLevel SMS follow-up workflow for new Facebook leads"
                className="w-full rounded-card border border-border"
              />
              <figcaption className="mt-2 text-[12px] text-faint">
                Automated SMS follow-up workflow in GoHighLevel — instant confirmation text, reply-based branching, and
                pipeline updates for every new Facebook lead.
              </figcaption>
            </figure>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
