import { siteConfig } from '@/data/siteConfig'
import { cdnImage } from '@/lib/image'

const examples = [
  {
    image: '/img/portfolio-bageri.png',
    category: 'Bageri & café',
    title: 'Lantbröd i Trollhättan',
    body: 'Varm, doftande känsla med fokus på öppettider, veckans surdegar och enkel vägbeskrivning.',
    offset: '',
  },
  {
    image: '/img/portfolio-hantverkare.png',
    category: 'Hantverkare',
    title: 'Byggmästar’n i Vänersborg',
    body: 'Ren, förtroendeingivande sida med tydliga tjänster, referensjobb och en offertförfrågan i ett klick.',
    offset: 'md:mt-14',
  },
  {
    image: '/img/portfolio-salong.png',
    category: 'Frisör & salong',
    title: 'Salong Älvkant i Uddevalla',
    body: 'Bokningsbar känsla med bildgalleri över klippningar och tydlig prislista för alla behandlingar.',
    offset: 'md:mt-4',
  },
]

export function PortfolioSection() {
  return (
    <section id="exempel" className="border-t border-[var(--line)] bg-[var(--paper-dim)]">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--teal-dark)]">
              Exempel
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-[var(--ink)] sm:text-4xl">
              Så kan din bransch presenteras
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[var(--ink-soft)]">
            Konceptbilder som visar hur våra förslag kan se ut för olika
            typer av verksamheter i {siteConfig.region}. Riktiga kundprojekt fylls
            på här efterhand.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {examples.map((example, i) => (
            <div
              key={example.title}
              className={`reveal group ${example.offset}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--paper)]">
                <span className="absolute right-3 top-3 z-10 rounded-full bg-[var(--paper)]/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[var(--ink-soft)] backdrop-blur-sm">
                  Koncept
                </span>
                <img
                  src={cdnImage(example.image, 640)}
                  alt={`Konceptmockup av en hemsida för ${example.title}`}
                  className="w-full transition-transform duration-500 group-hover:scale-[1.03]"
                  width={640}
                  height={427}
                />
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--teal-dark)]">
                {example.category}
              </p>
              <h3 className="mt-1.5 font-display text-xl text-[var(--ink)]">{example.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">{example.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
