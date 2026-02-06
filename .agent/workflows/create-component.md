---
description: Create a new React component following Clixite standards with TypeScript, Framer Motion animations, and proper documentation.
---

# Create Component Workflow

## Steps

### 1. Gather Requirements
- Ask for component name
- Ask for component purpose
- Ask if it needs animations
- Ask if it's a UI component or section

### 2. Generate Component
Create the component file with:
- TypeScript interface for props
- Framer Motion imports if animated
- JSDoc documentation
- Proper className handling with cn()

### 3. Add to Index
Export the component from the appropriate index.ts file.

### 4. Verify
- Check TypeScript errors
- Verify imports
- Test in browser if applicable

## Template
```tsx
'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ComponentNameProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * ComponentName - Brief description
 */
export function ComponentName({ className, children }: ComponentNameProps) {
  return (
    <motion.div
      className={cn('', className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {children}
    </motion.div>
  );
}
```
