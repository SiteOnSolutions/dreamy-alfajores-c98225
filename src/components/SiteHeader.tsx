import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'

const links = [
  { href: '#process', label: 'Så funkar det' },
  { href: '#varfor-oss', label: 'Varför oss' },
  { href: '#exempel', label: 'Exempel' },
  { href: '#kontakt', label: 'Kontakt' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--paper)]/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="flex items-baseline gap-1.5">
          <span className="font-display text-xl font-semibold tracking-tight text-[var(--ink)]">
            SiteOn
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--teal)]">
            Solutions
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#kontakt"
          className="hidden rounded-full bg-[var(--ink)] px-5 py-2.5 text-sm font-semibold text-[var(--paper)] transition-colors hover:bg-[var(--teal-dark)] md:inline-block"
        >
          {siteConfig.cta.primary}
        </a>

        <button
          type="button"
          aria-label={open ? 'Stäng meny' : 'Öppna meny'}
          className="inline-flex items-center justify-center rounded-full border border-[var(--line)] p-2 text-[var(--ink)] md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[var(--line)] bg-[var(--paper)] px-5 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-[var(--ink-soft)] hover:bg-[var(--paper-dim)] hover:text-[var(--ink)]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-[var(--ink)] px-5 py-3 text-center text-sm font-semibold text-[var(--paper)]"
            >
              {siteConfig.cta.primary}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
