# SiteOn Solutions

Marknadssida för SiteOn Solutions — ett fiktivt företag som bygger AI-genererade
hemsidor åt småföretag i Trestad-regionen (Trollhättan, Vänersborg, Uddevalla).

En sida, sex sektioner: hero, "så funkar det", "varför oss", exempel/portfolio,
kontakt (formulär + uppgifter) och en avslutande call-to-action. Allt på svenska.

## Teknik

- **TanStack Start** (React 19) + **TanStack Router** — filbaserad routing
- **Tailwind CSS 4** för styling, med design-tokens (färger, typsnitt) i `src/styles.css`
- **Netlify Forms** för kontaktformuläret (ingen backend-kod behövs)
- **Netlify Image CDN** för optimerade bilder
- Illustrationer genererade med AI (Gemini-bildmodell via Netlify AI Gateway) och sparade i `public/img/`

## Kör lokalt

```bash
npm install
npm run dev
```

Sidan körs då på `http://localhost:3000`. Använd `netlify dev` istället om du vill
testa Netlify-specifika funktioner (formulär, redirects, bildtransformering) lokalt.

Obs: Netlify Forms validerar och tar emot riktiga inskick först efter deploy —
lokalt visas endast att formuläret skickas iväg.

## Anpassa innehållet

All företagsspecifik information (namn, telefon, e-post, adress, öppettider,
sociala medier) ligger på ett ställe: **`src/data/siteConfig.ts`**. Ändra
värdena där och de uppdateras automatiskt i header, hero, kontaktsektion och
sidfot.

Textinnehåll i övriga sektioner (processteg, varför-oss-punkter,
exempel/portfolio) redigeras direkt i respektive komponent under
`src/components/`.

## Struktur

```
src/
  components/       Alla sektioner (Hero, ProcessSection, WhyUsSection, ...)
  data/siteConfig.ts Företagsuppgifter — enda stället att ändra kontaktinfo
  lib/image.ts       Hjälpfunktion för Netlify Image CDN-URL:er
  routes/            TanStack Router-filer (__root.tsx, index.tsx)
  styles.css         Design-tokens (färger, typsnitt) + globala stilar
public/
  img/               Genererade illustrationer för hero och exempel-sektionen
  kontakt-formular.html  Statisk formulärskeleton som krävs för att Netlify
                          ska upptäcka och registrera kontaktformuläret
```

## Vad som finns kvar att göra

Sidan är komplett och redo att publiceras. Naturliga nästa steg när riktiga
kundprojekt finns:

- Byt ut exempel/portfolio-bilderna mot skärmdumpar av faktiska levererade sidor
- Koppla på en riktig domän och uppdatera kontaktuppgifterna i `siteConfig.ts`
- Lägg till Google Analytics / annan besöksstatistik om så önskas
