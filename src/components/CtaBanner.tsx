import { ArrowRight } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'

export function CtaBanner() {
  return (
    <section className="border-t border-[var(--line)] bg-[var(--ink)]">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-5 py-16 md:flex-row md:items-center md:justify-between md:px-8 md:py-20">
        <h2 className="font-display max-w-lg text-3xl leading-tight text-[var(--paper)] sm:text-4xl">
          Redo för en hemsida som faktiskt drar in kunder?
        </h2>
        <a
          href="#kontakt"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[var(--amber)] px-7 py-4 text-sm font-semibold text-[var(--ink)] transition-transform hover:-translate-y-0.5 hover:bg-[var(--amber-dark)]"
        >
          {siteConfig.cta.primary}
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  )
}
