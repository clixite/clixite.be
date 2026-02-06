# Clixite Animation System

## Timing Standards
- **Micro-interactions**: 200-300ms
- **UI transitions**: 300-500ms
- **Page transitions**: 500-800ms
- **Easing**: easeOut for entrances, easeInOut for movements

## Framer Motion Variants

### Fade Up (most common)
```tsx
const fadeUp = {
initial: { opacity: 0, y: 20 },
animate: { opacity: 1, y: 0 },
transition: { duration: 0.5, ease: "easeOut" }
};
```

### Stagger Children
```tsx
const container = {
hidden: { opacity: 0 },
show: {
opacity: 1,
transition: { staggerChildren: 0.1 }
}
};

const item = {
hidden: { opacity: 0, y: 20 },
show: { opacity: 1, y: 0 }
};
```

### Scale on Hover
```tsx
<motion.div
whileHover={{ scale: 1.02 }}
whileTap={{ scale: 0.98 }}
transition={{ type: "spring", stiffness: 400 }}
/>
```

### Scroll-Triggered
```tsx
<motion.div
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.3 }}
transition={{ duration: 0.6 }}
/>
```

## CSS Animations (Tailwind)

### Glow Pulse
```css
@keyframes glow-pulse {
0%, 100% { box-shadow: 0 0 20px rgba(13, 148, 136, 0.3); }
50% { box-shadow: 0 0 40px rgba(13, 148, 136, 0.5); }
}
.animate-glow { animation: glow-pulse 3s ease-in-out infinite; }
```

### Float
```css
@keyframes float {
0%, 100% { transform: translateY(0); }
50% { transform: translateY(-10px); }
}
.animate-float { animation: float 6s ease-in-out infinite; }
```
