# Clixite Component Patterns

## Buttons

### Primary Button
```tsx
<Button className="bg-gradient-to-r from-primary to-secondary text-white font-medium px-6 py-3 rounded-xl hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25">
  Demander un audit
</Button>
```

### Secondary Button
```tsx
<Button variant="outline" className="border-slate-600 text-white hover:bg-slate-800 hover:border-teal-500/50 rounded-xl px-6 py-3">
  En savoir plus
</Button>
```

## Cards

### Glass Card
```tsx
<motion.div
className="relative p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 group overflow-hidden"
whileHover={{ scale: 1.02, y: -4 }}
transition={{ duration: 0.3 }}
>
  {/* Hover glow */}
  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 to-blue-500/0 group-hover:from-teal-500/10 group-hover:to-blue-500/10 transition-all duration-500 rounded-2xl" />
  <div className="relative z-10">
    {/* Content */}
  </div>
</motion.div>
```

### Service Card
```tsx
<GlassCard className="p-6">
  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center mb-4">
    <Icon className="w-7 h-7 text-white" />
  </div>
  <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
  <p className="text-slate-400 leading-relaxed">{description}</p>
</GlassCard>
```

## Sections

### Section Container
```tsx
<section className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
  {/* Background gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-900/5 to-transparent pointer-events-none" />
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Content */}
  </div>
</section>
```

### Animated Entry
```tsx
<motion.div
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: "-100px" }}
transition={{ duration: 0.6, ease: "easeOut" }}
>
  {/* Content */}
</motion.div>
```
