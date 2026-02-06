# CLIXITE.BE PROJECT STANDARDS

## Project Identity
- **Company**: Clixite SRL
- **BCE**: 01 25 0 75
- **Founded**: 2005 (20 years of experience)
- **Contact**: nicolas@clixite.be
- **Markets**: Belgium, France, Luxembourg

## Tech Stack (Mandatory)
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript strict
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Font**: Inter variable

## Design Tokens
```css
--color-primary: #1e3a5f;      /* Deep blue - trust */
--color-secondary: #0d9488;     /* Teal - innovation */
--color-accent: #f97316;        /* Orange - action */
--color-background: #0f172a;    /* Dark bg */
--color-card: #1e293b;          /* Card bg */
--color-foreground: #f1f5f9;    /* Light text */
--color-muted: #94a3b8;         /* Muted text */
```

## Folder Structure
src/
├── app/(marketing)/     # Public pages
├── components/
│   ├── ui/              # Atomic (shadcn)
│   ├── sections/        # Page sections
│   └── layout/          # Header, Footer
├── lib/                 # Utilities
├── content/             # Static data
└── types/               # TypeScript types

## Content Rules
- All UI text in French
- No Lorem Ipsum - use real content
- No placeholder images
- Include all 6 service pillars:
  1. Consultance IT & Audit
  2. Développement SaaS sur mesure
  3. Gestion PaaS & Cloud
  4. Solutions auto-hébergées (250+)
  5. Accompagnement & Support
  6. Staffing IT

## UI/UX Requirements
- Dark mode default
- Glassmorphism cards
- Gradient accents (blue → teal)
- Micro-animations on interactions
- Mobile-first responsive
- Smooth scroll behavior
