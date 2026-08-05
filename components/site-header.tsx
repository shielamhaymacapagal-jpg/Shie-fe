'use client'

import { useState } from 'react'
import Image from 'next/image'

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#a2p', label: 'A2P Success' },
  { href: '#process', label: 'Process' },
  { href: '#faq', label: 'FAQ' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-[rgba(10,6,17,0.82)] backdrop-blur-[14px]">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-8 py-[18px]">
        <a href="#home" className="flex items-center">
                    <Image src="/shl-logo.png" alt="SHL - Since 2026" width={168} height={130} className="h-14 w-auto" priority />
        </a>

        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex list-none gap-[30px]">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-display text-[12px] uppercase tracking-[0.12em] text-dim transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contact"
          className="hidden rounded-[4px] border border-purple-light px-5 py-[9px] font-display text-[11px] uppercase tracking-[0.14em] transition hover:border-transparent hover:grad-bg md:inline-block"
        >
          Contact Me
        </a>

        <button
          className="flex flex-col gap-1 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="h-[2px] w-[22px] bg-foreground" />
          <span className="h-[2px] w-[22px] bg-foreground" />
          <span className="h-[2px] w-[22px] bg-foreground" />
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-[rgba(10,6,17,0.95)] md:hidden" aria-label="Mobile">
          <ul className="flex list-none flex-col px-8 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-display text-[13px] uppercase tracking-[0.12em] text-dim transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-block rounded-[4px] border border-purple-light px-5 py-[9px] font-display text-[11px] uppercase tracking-[0.14em]"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
