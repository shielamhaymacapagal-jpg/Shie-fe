import SocialCards from "@/components/ui/card-fan-carousel";

const CONTENT_OPS_CARDS = [
  { imgUrl: "/projects/content-ops-dashboard.png", alt: "Content Ops dashboard overview" },
  { imgUrl: "/projects/content-ops-weekly-board.png", alt: "Content Ops weekly board by designer" },
];

const TAGS = ["Internal Tool", "Dashboard", "Team Tracking", "Workflow Pipeline"];

export default function ContentOpsShowcase() {
  return (
    <article className="mt-[26px] overflow-hidden rounded-card border border-border bg-card transition duration-[250ms] hover:border-purple-light">
      {/* Fanned screenshots */}
      <div className="border-b border-border bg-[#1a0a0a] px-4 pb-10 pt-12 md:pt-16">
        <SocialCards cards={CONTENT_OPS_CARDS} />
      </div>

      {/* Description */}
      <div className="mx-auto max-w-[820px] px-[24px] pb-9 pt-8 text-center">
        <span className="mb-2 block font-display text-[13px] font-semibold uppercase tracking-[0.14em] text-purple-light">
          Agency System
        </span>
        <h3 className="mb-3 font-display text-[22px] font-semibold">Content Ops Dashboard</h3>
        <p className="mb-5 text-[16px] leading-[1.7] text-dim">
          A content operations system I built for the agency to track every graphic designer&apos;s
          daily and weekly output. Each client moves through a Design → Review → Approval →
          Scheduling → Publish pipeline, with live completion rates, revision flags, overdue
          alerts, and a per-designer workload view — so the team always knows what&apos;s
          scheduled, what&apos;s stuck, and who needs support.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {TAGS.map((tag) => (
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
  );
}
