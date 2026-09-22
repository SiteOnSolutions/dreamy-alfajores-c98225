import { useState } from 'react'
import { Clock, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function ContactSection() {
  const [fields, setFields] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    'bot-field': '',
  })
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setFields((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const response = await fetch('/kontakt-formular.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'kontakt', ...fields }),
      })
      if (!response.ok) throw new Error('Request failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="kontakt" className="border-t border-[var(--line)]">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 md:grid-cols-[1fr_0.85fr] md:gap-16 md:px-8 md:py-28">
        <div className="reveal">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--teal-dark)]">
            Kontakt
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-[var(--ink)] sm:text-4xl">
            {siteConfig.cta.primary}
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-[var(--ink-soft)]">
            Fyll i formuläret så hör vi av oss inom en arbetsdag. Ingen bindningstid,
            inga konstiga säljknep — bara ett ärligt förslag på hur din hemsida kan
            se ut.
          </p>

          {status === 'success' ? (
            <div className="mt-8 rounded-2xl border border-[var(--teal)]/30 bg-[var(--teal)]/10 p-6">
              <p className="font-display text-lg text-[var(--teal-dark)]">Tack för ditt meddelande!</p>
              <p className="mt-1 text-sm text-[var(--ink-soft)]">
                Vi återkommer så snart vi kan, oftast inom en arbetsdag.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
              <input type="hidden" name="form-name" value="kontakt" />
              <p className="hidden">
                <label>
                  Fyll inte i detta fält
                  <input
                    name="bot-field"
                    value={fields['bot-field']}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </label>
              </p>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5 text-sm font-medium text-[var(--ink)]">
                  Namn
                  <input
                    name="name"
                    value={fields.name}
                    onChange={handleChange}
                    required
                    className="rounded-lg border border-[var(--line)] bg-[var(--paper)] px-4 py-2.5 text-sm text-[var(--ink)] outline-none transition-colors focus:border-[var(--teal)]"
                    placeholder="Ditt namn"
                  />
                </label>
                <label className="flex flex-col gap-1.5 text-sm font-medium text-[var(--ink)]">
                  Företag
                  <input
                    name="company"
                    value={fields.company}
                    onChange={handleChange}
                    className="rounded-lg border border-[var(--line)] bg-[var(--paper)] px-4 py-2.5 text-sm text-[var(--ink)] outline-none transition-colors focus:border-[var(--teal)]"
                    placeholder="Ditt företag"
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5 text-sm font-medium text-[var(--ink)]">
                  E-post
                  <input
                    type="email"
                    name="email"
                    value={fields.email}
                    onChange={handleChange}
                    required
                    className="rounded-lg border border-[var(--line)] bg-[var(--paper)] px-4 py-2.5 text-sm text-[var(--ink)] outline-none transition-colors focus:border-[var(--teal)]"
                    placeholder="namn@foretag.se"
                  />
                </label>
                <label className="flex flex-col gap-1.5 text-sm font-medium text-[var(--ink)]">
                  Telefon
                  <input
                    type="tel"
                    name="phone"
                    value={fields.phone}
                    onChange={handleChange}
                    className="rounded-lg border border-[var(--line)] bg-[var(--paper)] px-4 py-2.5 text-sm text-[var(--ink)] outline-none transition-colors focus:border-[var(--teal)]"
                    placeholder="07X-XXX XX XX"
                  />
                </label>
              </div>

              <label className="flex flex-col gap-1.5 text-sm font-medium text-[var(--ink)]">
                Meddelande
                <textarea
                  name="message"
                  value={fields.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="rounded-lg border border-[var(--line)] bg-[var(--paper)] px-4 py-2.5 text-sm text-[var(--ink)] outline-none transition-colors focus:border-[var(--teal)]"
                  placeholder="Berätta kort om ditt företag och vad du behöver hjälp med"
                />
              </label>

              {status === 'error' && (
                <p className="text-sm font-medium text-[var(--amber-dark)]">
                  Något gick fel. Prova igen eller mejla oss direkt på {siteConfig.contact.email}.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="mt-1 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--ink)] px-6 py-3.5 text-sm font-semibold text-[var(--paper)] transition-colors hover:bg-[var(--teal-dark)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'submitting' ? 'Skickar…' : 'Skicka meddelande'}
              </button>
            </form>
          )}
        </div>

        <div className="reveal rounded-2xl border border-[var(--line)] bg-[var(--paper-dim)] p-8" style={{ animationDelay: '0.1s' }}>
          <h3 className="font-display text-xl text-[var(--ink)]">Kontaktuppgifter</h3>
          <ul className="mt-6 flex flex-col gap-5 text-sm text-[var(--ink)]">
            <li className="flex items-start gap-3">
              <Phone size={18} className="mt-0.5 shrink-0 text-[var(--teal-dark)]" />
              <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`} className="hover:underline">
                {siteConfig.contact.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={18} className="mt-0.5 shrink-0 text-[var(--teal-dark)]" />
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:underline">
                {siteConfig.contact.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-[var(--teal-dark)]" />
              <span>
                {siteConfig.contact.addressLine1}
                <br />
                {siteConfig.contact.addressLine2}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Clock size={18} className="mt-0.5 shrink-0 text-[var(--teal-dark)]" />
              <span>{siteConfig.contact.hours}</span>
            </li>
          </ul>

          <div className="mt-8 flex items-center gap-3 border-t border-[var(--line)] pt-6">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] text-[var(--ink-soft)] transition-colors hover:border-[var(--teal)] hover:text-[var(--teal-dark)]"
            >
              <Instagram size={16} />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] text-[var(--ink-soft)] transition-colors hover:border-[var(--teal)] hover:text-[var(--teal-dark)]"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
