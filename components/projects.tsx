'use client'

import { useState } from 'react'
import { SectionHead } from './section-head'

const PROJECTS = [
  {
    name: 'A2P 10DLC Compliance & SMS Automation',
    tags: ['A2P 10DLC', 'SMS Automation', 'GoHighLevel', 'Lead Automation'],
    details: {
      overview:
        'Implemented a fully compliant SMS marketing system inside GoHighLevel, covering A2P 10DLC registration, campaign setup, and automated lead follow-up from Facebook Ads.',
      challenge:
        'The business needed carrier approval to legally send SMS messages. An earlier registration attempt had been unsuccessful, so a more structured approach to documentation and compliance was required before resubmitting.',
      process: [
        'Compliance Preparation — gathered IRS documentation and business details needed for carrier verification.',
        'Compliance Website — built a landing page with SMS consent language, a contact form, and the required policy pages.',
        'A2P 10DLC Registration — submitted the application, which was approved on the first attempt.',
        'SMS Lead Automation — built a workflow that adds new Facebook leads to the CRM, sends an instant confirmation text, and notifies the sales team for follow-up.',
      ],
      deliverables: [
        'A2P 10DLC Registration',
        'Compliance Landing Page',
        'Privacy Policy',
        'Terms & Conditions',
        'Facebook Lead Ads Integration',
        'SMS Automation Workflow',
        'Lead Pipeline Automation',
      ],
      skills: [
        'GoHighLevel CRM',
        'A2P 10DLC Compliance',
        'SMS Marketing',
        'Workflow Automation',
        'Landing Page Development',
        'Forms & Lead Capture',
        'CRM Pipeline Management',
        'Documentation & Compliance',
      ],
      outcome:
        'The approved registration let the business begin sending compliant SMS messages right away, with new leads automatically confirmed and routed to sales — cutting down on manual follow-up work.',
    },
  },
  {
    name: 'Project 2',
    tags: ['Website', 'Funnel', 'Forms', 'Calendar'],
  },
  {
    name: 'Project 3',
    tags: ['Funnel', 'Automation', 'Payments'],
  },
]

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(null)
  const activeProject = activeIndex !== null ? PROJECTS[activeIndex] : null

  return (
    <section id="projects" className="py-[70px] md:py-[110px]">
      <div className="mx-auto max-w-[1200px] px-8">
        <SectionHead eyebrow="Selected Work" title="Featured Projects" />
        <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <div
              key={project.name}
              className="overflow-hidden rounded-card border border-border bg-card transition duration-[250ms] hover:-translate-y-1 hover:border-purple-light"
            >
              <div className="flex h-[170px] items-center justify-center bg-[linear-gradient(135deg,#2a1245,#3d0f2e)] px-4 text-center font-display text-[12px] uppercase tracking-[0.1em] text-faint">
                {project.name}
              </div>
              <div className="px-[22px] pb-6 pt-5">
                <h3 className="mb-[10px] font-display text-[16px] font-semibold">{project.name}</h3>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-[20px] border border-border px-[9px] py-1 font-display text-[10px] uppercase tracking-[0.06em] text-purple-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.details ? (
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className="font-display text-[11px] font-semibold uppercase tracking-[0.1em] text-pink"
                  >
                    View Project →
                  </button>
                ) : (
                  <a
                    href="#contact"
                    className="font-display text-[11px] font-semibold uppercase tracking-[0.1em] text-pink"
                  >
                    View Project →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="max-h-[85vh] w-full max-w-[720px] overflow-y-auto rounded-card border border-border bg-card p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <h3 className="font-display text-[20px] font-semibold text-balance">{activeProject.name}</h3>
              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                aria-label="Close"
                className="text-[20px] text-dim hover:text-white"
              >
                ×
              </button>
            </div>

            {activeProject.details && (
              <div className="space-y-5 text-[13.5px] text-dim">
                <p>{activeProject.details.overview}</p>

                <div>
                  <h4 className="mb-2 font-display text-[11px] font-semibold uppercase tracking-[0.08em] text-purple-light">
                    The Challenge
                  </h4>
                  <p>{activeProject.details.challenge}</p>
                </div>

                <div>
                  <h4 className="mb-2 font-display text-[11px] font-semibold uppercase tracking-[0.08em] text-purple-light">
                    Process
                  </h4>
                  <ul className="list-disc space-y-1 pl-5">
                    {activeProject.details.process.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="mb-2 font-display text-[11px] font-semibold uppercase tracking-[0.08em] text-purple-light">
                    Deliverables
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.details.deliverables.map((item) => (
                      <span
                        key={item}
                        className="rounded-[20px] border border-border px-[9px] py-1 text-[11px] text-purple-light"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="mb-2 font-display text-[11px] font-semibold uppercase tracking-[0.08em] text-purple-light">
                    Skills Demonstrated
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.details.skills.map((item) => (
                      <span
                        key={item}
                        className="rounded-[20px] border border-border px-[9px] py-1 text-[11px] text-purple-light"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="mb-2 font-display text-[11px] font-semibold uppercase tracking-[0.08em] text-purple-light">
                    Outcome
                  </h4>
                  <p>{activeProject.details.outcome}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
