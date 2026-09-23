import SocialCards, { type FanCard } from "@/components/ui/card-fan-carousel";

type SystemProject = {
  name: string;
  industry: string;
  description: string;
  tags: string[];
  cards: FanCard[];
  frameClassName: string;
};

const SYSTEM_PROJECTS: SystemProject[] = [
  {
    name: "Content Ops Dashboard",
    industry: "Agency System",
    description:
      "A content operations system I built for the agency to track every graphic designer's daily and weekly output. Each client moves through a Design → Review → Approval → Scheduling → Publish pipeline, with live completion rates, revision flags, overdue alerts, and a per-designer workload view — so the team always knows what's scheduled, what's stuck, and who needs support.",
    tags: ["Internal Tool", "Dashboard", "Team Tracking", "Workflow Pipeline"],
    cards: [
      { imgUrl: "/projects/content-ops-dashboard.png", alt: "Content Ops dashboard overview" },
      { imgUrl: "/projects/content-ops-weekly-board.png", alt: "Content Ops weekly board by designer" },
    ],
    frameClassName: "aspect-[16/11] w-[84%]",
  },
  {
    name: "Personal Finance Tracker",
    industry: "Finance App",
    description:
      "A mobile-first finance app I designed and built to see every bank account and e-wallet in one place. It tracks total balance, monthly income, bills due before payday, overdue payments, and savings goals — with a clean light mode and a matching dark mode.",
    tags: ["Web App", "Budgeting", "Mobile-First", "Light & Dark Mode"],
    cards: [
      { imgUrl: "/projects/finance-tracker-light.jpg", alt: "Finance tracker overview in light mode" },
      { imgUrl: "/projects/finance-tracker-dark.jpg", alt: "Finance tracker overview in dark mode" },
    ],
    frameClassName: "aspect-[1206/1949] w-[40%] max-w-[220px]",
  },
];

export default function ContentOpsShowcase() {
  return (
    <div className="mt-[26px] grid grid-cols-1 gap-[26px] md:grid-cols-2">
      {SYSTEM_PROJECTS.map((project) => (
        <article
          key={project.name}
          className="flex flex-col overflow-hidden rounded-card border border-border bg-card transition duration-[250ms] hover:border-purple-light"
        >
          {/* Fanned screenshots */}
          <div className="flex h-[320px] flex-col md:h-[440px] justify-center border-b border-border bg-[#1a0a0a] px-4 pb-6 pt-8">
            <SocialCards cards={project.cards} frameClassName={project.frameClassName} />
          </div>

          {/* Description */}
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
  );
}
