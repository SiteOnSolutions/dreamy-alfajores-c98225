import { ArrowRight } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'
import { cdnImage } from '@/lib/image'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="grain" />
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-8 md:px-8 md:py-24">
        <div className="reveal">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--paper-dim)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--teal-dark)]">
            Hemsidor byggda med specialiserade verktyg · {siteConfig.region}
          </p>
          <h1 className="font-display text-[2.6rem] leading-[1.05] tracking-tight text-[var(--ink)] sm:text-5xl md:text-6xl">
            En proffsig hemsida, klar innan konkurrenten hunnit svara på sitt mejl.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-[var(--ink-soft)]">
            Vi kombinerar specialiserade verktyg med lokal hantverkskänsla och bygger snabba, prisvärda
            hemsidor åt småföretag i {siteConfig.cities.join(', ')}. Du berättar om
            verksamheten — vi levererar en sida du är stolt över.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--amber)] px-6 py-3.5 text-sm font-semibold text-[var(--ink)] shadow-[0_8px_24px_-8px_rgba(226,121,59,0.55)] transition-transform hover:-translate-y-0.5 hover:bg-[var(--amber-dark)]"
            >
              {siteConfig.cta.primary}
              <ArrowRight size={16} />
            </a>
            <a
              href="#process"
              className="text-sm font-semibold text-[var(--ink)] underline decoration-[var(--line)] decoration-2 underline-offset-4 hover:decoration-[var(--teal)]"
            >
              {siteConfig.cta.secondary}
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-[var(--line)] pt-7 sm:max-w-md">
            <div>
              <dt className="font-display text-2xl text-[var(--ink)]">3–5 dagar</dt>
              <dd className="mt-1 text-xs text-[var(--ink-soft)]">till lanserad sida</dd>
            </div>
            <div>
              <dt className="font-display text-2xl text-[var(--ink)]">Fast pris</dt>
              <dd className="mt-1 text-xs text-[var(--ink-soft)]">inga dolda avgifter</dd>
            </div>
            <div>
              <dt className="font-display text-2xl text-[var(--ink)]">100%</dt>
              <dd className="mt-1 text-xs text-[var(--ink-soft)]">lokalt i Trestad</dd>
            </div>
          </dl>
        </div>

        <div className="relative reveal" style={{ animationDelay: '0.15s' }}>
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-[var(--paper-dim)]" />
          <img
            src={cdnImage('/img/hero-visual.png', 900)}
            alt="Illustration av en hemsida som byggs ihop, ovanför en flod som symboliserar Trestad"
            className="w-full rounded-2xl border border-[var(--line)]"
            width={900}
            height={600}
          />
        </div>
      </div>
    </section>
  )
}
