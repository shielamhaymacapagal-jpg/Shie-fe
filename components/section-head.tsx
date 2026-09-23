export function Eyebrow({ children }: { children: React.ReactNode }) {
return (
<span className="mb-[14px] block font-display text-[14px] font-semibold uppercase tracking-[0.22em] text-foreground">
{children}
</span>
)
}

export function SectionHead({
eyebrow,
title,
}: {
eyebrow: string
title: React.ReactNode
}) {
return (
<div className="mb-[50px] text-center">
<Eyebrow>{eyebrow}</Eyebrow>
<h2 className="font-display text-[clamp(30px,3.4vw,42px)] font-semibold tracking-[0.02em] text-balance">
{title}
</h2>
</div>
)
}
