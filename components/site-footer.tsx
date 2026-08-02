'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { Eyebrow } from './section-head'

const CONTACTS = [
  { icon: '✉', text: 'shielamhaymacapagal@gmail.com', href: 'mailto:shielamhaymacapagal@gmail.com' },
  { icon: 'in', text: 'linkedin.com/in/shiela-macapagal-2413782b8', href: 'https://linkedin.com/in/shiela-macapagal-2413782b8' },
  { icon: '◎', text: 'Malolos City, Bulacan, Philippines', href: null },
]

const CALENDAR_URL = 'https://calendar.app.google/uGboPxZ85sW2tMBa9'

export function SiteFooter() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)

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
            <button
              type="button"
              onClick={() => setIsCalendarOpen(true)}
              className="grad-bg inline-block rounded-md px-[26px] py-[14px] font-display text-[12px] font-semibold uppercase tracking-[0.14em] text-white transition hover:-translate-y-px hover:brightness-110"
            >
              Schedule a Discovery Call
            </button>
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

      {isCalendarOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setIsCalendarOpen(false)}
        >
          <div
            className="relative flex h-[85vh] w-full max-w-[900px] flex-col overflow-hidden rounded-lg border border-border bg-background-alt"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-3">
              <span className="font-display text-[13px] font-semibold uppercase tracking-[0.1em] text-foreground">
                Schedule a Discovery Call
              </span>
              <button
                type="button"
                onClick={() => setIsCalendarOpen(false)}
                aria-label="Close calendar"
                className="flex h-8 w-8 items-center justify-center rounded-full text-dim transition-colors hover:bg-border hover:text-foreground"
              >
                <X size={18} />
              </button>
            </div>
            <iframe
              src={CALENDAR_URL}
              title="Book a discovery call"
              className="h-full w-full flex-1 border-0"
            />
            <div className="border-t border-border px-5 py-2 text-center text-[12px] text-faint">
              Having trouble viewing the calendar?{' '}
              
                <a href={CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink underline hover:text-foreground"
              >
                Open it in a new tab
              </a>
              .
            </div>
          </div>
        </div>
      )}
    </footer>
  )
}
