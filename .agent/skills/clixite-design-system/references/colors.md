# Clixite Color System

## Brand Palette

| Name | Hex | HSL | Tailwind | Usage |
|------|-----|-----|----------|-------|
| Primary | #1e3a5f | 210 50% 24% | bg-primary | Buttons, headings |
| Secondary | #0d9488 | 173 82% 32% | bg-secondary | Accents, links |
| Accent | #f97316 | 25 95% 53% | bg-accent | CTAs, highlights |

## Dark Theme Surfaces

| Name | Hex | Usage |
|------|-----|-------|
| Background | #0f172a | Page background |
| Card | #1e293b | Elevated surfaces |
| Card Hover | #334155 | Hover states |
| Border | rgba(255,255,255,0.1) | Subtle borders |

## Text Colors

| Name | Hex | Tailwind | Usage |
|------|-----|----------|-------|
| Foreground | #f1f5f9 | text-slate-100 | Primary text |
| Muted | #94a3b8 | text-slate-400 | Secondary text |
| Accent | #2dd4bf | text-teal-400 | Links, highlights |

## Gradients

### Primary Gradient
```css
bg-gradient-to-r from-[#1e3a5f] to-[#0d9488]
```

### Glow Effect
```css
shadow-[0_0_40px_rgba(13,148,136,0.3)]
```

### Text Gradient
```css
bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent
```

## Glassmorphism

### Standard Glass
```css
backdrop-blur-xl bg-slate-900/50 border border-white/10
```

### Intense Glass
```css
backdrop-blur-2xl bg-slate-800/60 border border-white/20
```
