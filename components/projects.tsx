import { SectionHead } from './section-head'

const PROJECTS = [
  {
        name: 'A2P 10DLC Compliance & SMS Automation',
        tags: ['A2P 10DLC', 'SMS Automation', 'GoHighLevel', 'Lead Automation'],
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
  return (
    <section id="projects" className="py-[70px] md:py-[110px]">
      <div className="mx-auto max-w-[1200px] px-8">
        <SectionHead eyebrow="Selected Work" title="Featured Projects" />
        <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
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
                <a href="#contact" className="font-display text-[11px] font-semibold uppercase tracking-[0.1em] text-pink">
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
