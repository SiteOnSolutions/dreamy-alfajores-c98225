import { siteConfig } from '@/data/siteConfig'

const links = [
  { href: '#process', label: 'Så funkar det' },
  { href: '#varfor-oss', label: 'Varför oss' },
  { href: '#exempel', label: 'Exempel' },
  { href: '#kontakt', label: 'Kontakt' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--paper-dim)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_1fr_1fr] md:gap-8 md:px-8">
        <div>
          <a href="#top" className="flex items-baseline gap-1.5">
            <span className="font-display text-lg font-semibold text-[var(--ink)]">SiteOn</span>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--teal-dark)]">
              Solutions
            </span>
          </a>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-[var(--ink-soft)]">
            AI-genererade hemsidor åt småföretag i {siteConfig.region} —
            {' '}{siteConfig.cities.join(', ')}.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--ink-soft)]">Sidor</p>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-[var(--ink)] hover:text-[var(--teal-dark)]">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--ink-soft)]">Kontakt</p>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-[var(--ink)]">
            <li>
              <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`} className="hover:text-[var(--teal-dark)]">
                {siteConfig.contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-[var(--teal-dark)]">
                {siteConfig.contact.email}
              </a>
            </li>
            <li className="text-[var(--ink-soft)]">
              {siteConfig.contact.addressLine1}, {siteConfig.contact.addressLine2}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--line)] px-5 py-6 md:px-8">
        <p className="text-xs text-[var(--ink-soft)]">
          © {new Date().getFullYear()} {siteConfig.companyName}. Alla rättigheter förbehållna.
        </p>
      </div>
    </footer>
  )
}
