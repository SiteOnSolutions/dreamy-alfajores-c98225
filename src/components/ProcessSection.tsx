const steps = [
  {
    number: '01',
    title: 'Berätta om ditt företag',
    body:
      'Vi bokar ett kort samtal där du berättar om verksamheten, kunderna och vad sidan ska klara av. Tar 20–30 minuter — ingen teknisk kunskap behövs.',
  },
  {
    number: '02',
    title: 'AI genererar förslag',
    body:
      'Utifrån samtalet tar vår AI fram ett eller flera designförslag med text, bilder och struktur anpassad efter din bransch och dina kunder i Trestad.',
  },
  {
    number: '03',
    title: 'Vi finslipar och lanserar',
    body:
      'Vi går igenom förslaget tillsammans, justerar detaljer, kopplar på domän och kontaktformulär — och lanserar sidan skarpt.',
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="border-t border-[var(--line)] bg-[var(--paper-dim)]">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--teal-dark)]">
            Så funkar det
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-[var(--ink)] sm:text-4xl">
            Från idé till lanserad hemsida i tre steg
          </h2>
        </div>

        <div className="mt-14 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`reveal grid gap-6 py-10 md:grid-cols-[auto_1fr] md:items-start md:gap-12 ${
                i % 2 === 1 ? 'md:pl-16' : ''
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <span className="font-display text-6xl leading-none text-[var(--teal)]/25 md:text-7xl">
                {step.number}
              </span>
              <div className="max-w-2xl">
                <h3 className="font-display text-2xl text-[var(--ink)]">{step.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-[var(--ink-soft)]">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
