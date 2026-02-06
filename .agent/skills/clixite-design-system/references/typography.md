# Clixite Typography

## Font Family
- **Primary**: Inter (variable)
- **Fallback**: system-ui, sans-serif

## Type Scale

| Name | Size | Weight | Leading | Class |
|------|------|--------|---------|-------|
| Display | 72px | 800 | 1.1 | text-7xl font-extrabold |
| H1 | 48px | 700 | 1.2 | text-5xl font-bold |
| H2 | 36px | 600 | 1.3 | text-4xl font-semibold |
| H3 | 24px | 600 | 1.4 | text-2xl font-semibold |
| H4 | 20px | 500 | 1.5 | text-xl font-medium |
| Body Large | 18px | 400 | 1.7 | text-lg |
| Body | 16px | 400 | 1.6 | text-base |
| Small | 14px | 400 | 1.5 | text-sm |
| XS | 12px | 500 | 1.4 | text-xs |

## Responsive Typography
```tsx
// Hero Headline
className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight"

// Section Title
className="text-3xl sm:text-4xl font-bold"

// Card Title
className="text-xl font-semibold"

// Body Text
className="text-base sm:text-lg text-slate-300 leading-relaxed"
```
