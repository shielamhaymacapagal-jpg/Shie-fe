export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-[14px] block font-display text-[12px] font-semibold uppercase tracking-[0.22em] text-pink">
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
      <h2 className="font-display text-[clamp(28px,3.4vw,40px)] font-semibold tracking-[0.02em] text-balance">
        {title}
      </h2>
    </div>
  )
}
