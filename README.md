# SCAI Website — Next.js

Officiële website voor het **Suriname Chartered Accountants Institute (SCAI)**, gebouwd met Next.js 14 en TypeScript.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Taal:** TypeScript
- **Styling:** Inline styles (geen externe CSS dependency)
- **Deploy:** Vercel (aanbevolen)

## Snel Starten

```bash
# 1. Installeer dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open browser
# http://localhost:3000
```

## Project Structuur

```
scai-website/
├── public/
│   └── logo.png              # SCAI logo (transparant)
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Homepage
│   │   └── globals.css       # Global reset
│   └── components/
│       └── ScaiHomepage.tsx  # Volledige homepage component
├── next.config.js
├── tsconfig.json
└── package.json
```

## Pagina Secties

- **Hero** — Headline met stats (2007, IFAC, ICAC, ISA)
- **Over Ons** — Missie en mandaten
- **Lidmaatschap** — Vereisten, voordelen, CPD
- **Bestuur & Commissies** — 4 commissies
- **Newsroom** — Laatste berichten
- **Contact** — Gegevens + contactformulier

## Kleurenschema

```
Lichtblauw:  #00AEEF
Donkerblauw: #2B3990
Middenblauw: #0075BE
```

## Deploy op Vercel

```bash
npm i -g vercel
vercel
```

## Contact

**SCAI** — Suriname Chartered Accountants Institute  
📍 Mr. Jagernath Lachmonstraat 158, Paramaribo  
📞 +597 895 5707  
✉️ info@scai.sr
