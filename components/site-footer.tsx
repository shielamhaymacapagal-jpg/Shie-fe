import { Eyebrow } from './section-head'

const CONTACTS = [
  { icon: '✉', text: 'shielamhaymacapagal@gmail.com', href: 'mailto:shielamhaymacapagal@gmail.com' },
  { icon: 'in', text: 'linkedin.com/in/shiela-macapagal-2413782b8', href: 'https://linkedin.com/in/shiela-macapagal-2413782b8' },
  { icon: '◎', text: 'Malolos City, Bulacan, Philippines', href: null },
]

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-border bg-background-alt pb-[30px] pt-[80px]">
      <div className="mx-auto max-w-[1200px] px-8">
        <div className="mb-[60px] grid grid-cols-1 gap-[50px] md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Eyebrow>Get In Touch</Eyebrow>
            <h2 className="font-display text-[clamp(28px,3.4vw,40px)] font-semibold tracking-[0.02em] text-balance">
              Let&apos;s Build Something Amazing
            </h2>
            <p className="my-[14px] mb-[26px] max-w-[420px] text-[14.5px] text-dim">
              Whether you need a website, funnel, CRM automation, or a complete GoHighLevel setup, I&apos;d love to help
              bring your project to life.
            </p>
            
              href="https://calendar.app.google/uGboPxZ85sW2tMBa9"
              target="_blank"
              rel="noopener noreferrer"
              className="grad-bg inline-block rounded-md px-[26px] py-[14px] font-display text-[12px] font-semibold uppercase tracking-[0.14em] text-white transition hover:-translate-y-px hover:brightness-110"
            >
              Schedule a Discovery Call
            </a>
          </div>

          <ul className="flex list-none flex-col gap-4">
            {CONTACTS.map((contact) => {
              const inner = (
                <>
                  <span className="flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center rounded-full border border-border text-[13px] text-pink">
                    {contact.icon}
                  </span>
                  <span className="break-all">{contact.text}</span>
                </>
              )
              return (
                <li key={contact.text} className="flex items-center gap-3 text-[14px] text-dim">
                  {contact.href ? (
                    <a href={contact.href} className="flex items-center gap-3 transition-colors hover:text-foreground">
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </li>
              )
            })}
          </ul>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-[26px] text-[12px] text-faint">
          <div>© 2026 Shiela Macapagal. All rights reserved.</div>
          <div>GoHighLevel Expert • Build. Automate. Scale.</div>
        </div>
      </div>
    </footer>
  )
}
