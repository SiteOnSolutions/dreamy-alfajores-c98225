# AGENTS.md

Detta dokument beskriver projektstrukturen för utvecklare och AI-agenter som
arbetar i den här kodbasen.

## Projektöversikt

En marknadssida (single-page) för **SiteOn Solutions**, ett företag som bygger
AI-genererade hemsidor åt småföretag i Trestad-regionen (Trollhättan,
Vänersborg, Uddevalla). Byggd med TanStack Start och driftsatt på Netlify.
Ingen databas eller autentisering — sidan är statisk/SSR med ett
Netlify Forms-baserat kontaktformulär.

### Teknikstack

| Lager | Teknik |
|-------|--------|
| Ramverk | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Bygge | Vite 7 |
| Styling | Tailwind CSS 4 (design-tokens i `styles.css`) |
| Ikoner | lucide-react |
| Formulär | Netlify Forms |
| Bilder | Netlify Image CDN (`/.netlify/images`) |
| Språk | TypeScript 5.9 (strict mode) |
| Deploy | Netlify |

## Katalogstruktur

```
├── public
│   ├── favicon.ico
│   ├── img/                     # AI-genererade illustrationer (hero + exempel-sektion)
│   └── kontakt-formular.html    # Statisk formulärskeleton för Netlify Forms-detektering
├── src
│   ├── components/
│   │   ├── SiteHeader.tsx       # Sticky header, nav, mobilmeny
│   │   ├── Hero.tsx             # Hero-sektion med huvudpitch
│   │   ├── ProcessSection.tsx   # "Så funkar det" — 3 steg
│   │   ├── WhyUsSection.tsx     # "Varför oss" — snabbhet/pris/lokal närvaro
│   │   ├── PortfolioSection.tsx # Exempel/portfolio (platshållare)
│   │   ├── CtaBanner.tsx        # Fristående call-to-action-banner
│   │   ├── ContactSection.tsx   # Kontaktformulär + kontaktuppgifter
│   │   └── SiteFooter.tsx       # Sidfot
│   ├── data
│   │   └── siteConfig.ts        # ALL företagsspecifik info (telefon, adress, e-post, städer)
│   ├── lib
│   │   └── image.ts             # Hjälpfunktion för Netlify Image CDN-URL:er
│   ├── routes
│   │   ├── __root.tsx           # Root layout: <html lang="sv">, meta-taggar, styles
│   │   └── index.tsx            # Enda routen (/) — komponerar alla sektioner
│   ├── router.tsx               # TanStack Router-uppsättning
│   └── styles.css               # Design-tokens (CSS-variabler) + globala stilar
├── netlify.toml                  # Build-kommando, publish-katalog, dev-serverinställningar
├── package.json
└── tsconfig.json                 # @/* alias för src/*
```

## Nyckelkoncept

### Enda källan för företagsuppgifter

`src/data/siteConfig.ts` är den enda platsen där telefonnummer, e-post,
adress, öppettider, sociala medier och stadsnamn definieras. Komponenter
importerar och läser från detta objekt istället för att hårdkoda uppgifter —
ändra ett värde där för att uppdatera det överallt på sajten.

### Netlify Forms i TanStack Start

TanStack Start renderar formulär klientsidigt, så Netlify kan inte upptäcka
dem vid bygget genom att skanna statisk HTML. Lösningen (redan implementerad):

1. `public/kontakt-formular.html` — en dold, statisk kopia av formuläret som
   Netlify skannar vid bygget för att registrera formulärnamnet `kontakt`.
2. `ContactSection.tsx` skickar formuläret via `fetch('/kontakt-formular.html', ...)`
   med `Content-Type: application/x-www-form-urlencoded` — **inte** till `/`,
   eftersom SSR-katchall-funktionen annars fångar upp anropet innan Netlify
   Forms hinner bearbeta det.

Om formulärfält ändras i `ContactSection.tsx` måste motsvarande fält även
uppdateras i `public/kontakt-formular.html`, annars nekar Netlify inskicket.

### Design-tokens

Färger och typsnitt definieras som CSS-variabler i `src/styles.css`
(`--ink`, `--paper`, `--teal`, `--amber`, m.fl.) och typsnitten Fraunces
(rubriker) + Work Sans (brödtext) laddas via Google Fonts. Håll nya
komponenter till dessa variabler istället för att introducera nya färger.

## Konventioner

- **Komponenter:** PascalCase, en sektion per fil i `src/components/`
- **Import-alias:** `@/*` pekar på `src/*`
- **TypeScript:** strict mode, `type`-only imports där relevant
- **Inga globala state-bibliotek** — sidan har inget delat state utöver lokal
  `useState` i formulär och mobilmeny

## Utvecklingskommandon

```bash
npm run dev      # Startar Vite dev-server på port 3000
npm run build    # Produktionsbygge
```

Använd `netlify dev --port 8889` istället för att testa Netlify-specifika
funktioner (formulär, image CDN, redirects) lokalt.
