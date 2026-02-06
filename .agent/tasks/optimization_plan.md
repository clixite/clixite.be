# Optimization & Production Readiness Plan

## Goal
Prepare Clixite.be for production with optimal performance, SEO, and accessibility scores.
Target metrics: Lighthouse > 90, LCP < 2.5s.

## Current State Analysis (Pre-Plan)
- **Contact Page**: Currently a `use client` component, preventing server-side metadata export. Needs refactoring.
- **Images**: Need `next/image` configuration for specific domains if used.
- **Fonts**: Need to verify `next/font` variable usage.
- **SEO**: Missing `robots.txt`, `sitemap.xml`, and canonical URLs.

## Task Breakdown

### 1. Refactor Contact Page (Immediate Fix)
- Separate `src/app/(marketing)/contact/page.tsx` into:
  - Server Component (`page.tsx`) for Metadata.
  - Client Component (`contact-client.tsx`) for Form.
- **Why**: Essential for SEO (Title/Description) which is blocked by `use client`.

### 2. Global Metadata & SEO Setup
- Create `src/app/robots.ts` (Dynamic generation).
- Create `src/app/sitemap.ts` (Dynamic generation of routes).
- Update `src/app/layout.tsx` with:
  - `metadataBase` (for social images).
  - OpenGraph / Twitter default card data.
  - Canonical URL strategy.

### 3. Image & Font Optimization
- **Config**: Update `next.config.ts` to allow specific image domains (if Mapbox or others are used external images).
- **Fonts**: Verify `src/app/layout.tsx` uses `variable` for Inter and applies it to `body` correctly for zero CLS.

### 4. Accessibility & Polish
- **Color Contrast**: Verify teal/slate combinations in `globals.css` / components.
- **ARIA**: Ensure all form inputs in `contact-client.tsx` have associated labels (already done via shadcn, to be verified).
- **Focus States**: Verify visible focus rings on all interactive elements.

### 5. Build Verification
- Run production build.
- Analyze bundle size.
- Verify no lint errors.

## Execution Sequence
1. **Refactor Contact Page** (Fixes immediate SEO blocker).
2. **Configure SEO Files** (Robots/Sitemap).
3. **Optimize Layout** (Fonts/Metadata Base).
4. **Final Build & Check**.
