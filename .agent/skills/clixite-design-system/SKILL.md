---
name: clixite-design-system
description: Clixite's official design system with colors, typography, glassmorphism patterns, and component styles. Use this skill when creating UI components, applying colors, implementing animations, or ensuring visual consistency. Triggers on requests about styling, design tokens, glass effects, gradients, or visual patterns.
---

# Clixite Design System

## Overview
This skill provides the complete visual language for Clixite.be, ensuring consistency across all components and pages.

## When to Use This Skill
- Creating new UI components
- Applying colors or gradients
- Implementing glassmorphism effects
- Setting up typography
- Building responsive layouts
- Adding animations

## Do Not Use This Skill When
- Working on backend logic
- Writing API routes
- Configuring build tools
- Writing tests

## Instructions

### Step 1: Load References
Before styling any element, read the appropriate reference file:
- `references/colors.md` for the color system
- `references/typography.md` for fonts and sizes
- `references/components.md` for component patterns
- `references/animations.md` for motion design

### Step 2: Apply Design Tokens
Always use CSS custom properties or Tailwind classes. Never hardcode values.

### Step 3: Implement Glassmorphism
Standard glass card pattern:
```tsx
className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl"
```

### Step 4: Add Animations
Use Framer Motion for all animations:
```tsx
<motion.div
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5 }}
/>
```

### Step 5: Ensure Responsiveness
Follow mobile-first approach:
- Default: mobile
- `sm:` 640px+
- `md:` 768px+
- `lg:` 1024px+
- `xl:` 1280px+
