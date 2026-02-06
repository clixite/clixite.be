# Clixite Trilingual Standards

This skill defines the standards for maintaining and extending the trilingual support (French, Dutch, English) on the clixite.be platform.

## Core Principles
1. **Consistency**: Every user-facing string MUST exist in all three languages: `fr.json`, `nl.json`, and `en.json`.
2. **Key Mirroring**: Translation keys must be identical across all dictionaries.
3. **Implicit Enforcement**: Every code modification involving text must be accompanied by updates to the translation files in `messages/`.

## Translation Workflow
When adding a new feature or modifying text:
1. **Identify the Key**: Create or find a descriptive key in the nested JSON structure (e.g., `Common.nav.about`).
2. **Update Dictionaries**:
    - Update `messages/fr.json` (Source/Primary)
    - Update `messages/nl.json` (Dutch)
    - Update `messages/en.json` (English)
3. **Implementation**:
    - Use `const t = useTranslations('Namespace')` in client/server components.
    - Render via `{t('key')}`.

## Technical Stack
- **Library**: `next-intl`
- **Detection**: URL-based (`/[locale]/...`)
- **Routing**: Use `Link` from `@/i18n/routing` instead of `next/link`.

## Example
### 1. Dictionary Update
```json
// messages/fr.json
"Contact": { "action": "Contactez-nous" }
// messages/nl.json
"Contact": { "action": "Contacteer ons" }
// messages/en.json
"Contact": { "action": "Contact us" }
```

### 2. Component Usage
```tsx
import { useTranslations } from 'next-intl';

export function MyComponent() {
  const t = useTranslations('Contact');
  return <button>{t('action')}</button>;
}
```
