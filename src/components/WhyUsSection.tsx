import { Coins, MapPin, Zap } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'

const reasons = [
  {
    icon: Zap,
    title: 'Snabbt',
    body:
      'Medan traditionella webbyråer räknar leveranstid i månader, har vi din sida redo att granska inom några dagar — AI sköter det tidskrävande första utkastet.',
  },
  {
    icon: Coins,
    title: 'Prisvärt',
    body:
      'AI gör grovjobbet, så du betalar för finslipning och omtanke — inte för hundratals timmar manuellt kodande. Fast pris, inga överraskningar.',
  },
  {
    icon: MapPin,
    title: 'Lokal närvaro',
    body: `Vi bor och verkar i ${siteConfig.region}. Vi känner ${siteConfig.cities.join(', ')} och vet vad som gör att kunder i regionen litar på ett litet företag.`,
  },
]

export function WhyUsSection() {
  return (
    <section id="varfor-oss" className="border-t border-[var(--line)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[0.8fr_1.2fr] md:gap-16 md:px-8 md:py-28">
        <div className="reveal">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--teal-dark)]">
            Varför SiteOn Solutions
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-[var(--ink)] sm:text-4xl">
            Byggt för småföretagare, inte för techjättar
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--ink-soft)]">
            Vi vet att du hellre lägger tiden på kunder än på krångliga
            hemsideverktyg. Därför sköter vi allt — från text till lansering — och
            pratar klarspråk hela vägen.
          </p>
        </div>

        <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <div
                key={reason.title}
                className="reveal grid grid-cols-[auto_1fr] items-start gap-5 py-8"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--teal)]/10 text-[var(--teal-dark)]">
                  <Icon size={20} strokeWidth={2} />
                </span>
                <div>
                  <h3 className="font-display text-xl text-[var(--ink)]">{reason.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-[var(--ink-soft)]">
                    {reason.body}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
