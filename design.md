# BreakerSpace — Design System Specification

> **Version**: 2.0 — June 2026
> **Status**: Source of Truth for all brand-driven implementations
> **Derived from**: `brand-guidelines.html` (v1.0, Nov 2025 Figma export)

---

## 1. Brand Overview

**BreakerSpace** is a technology organization whose visual identity embodies structured disruption — the idea that meaningful innovation emerges from methodically breaking and rebuilding. The brand system is deliberately constrained to a single HSL hue, reinforcing clarity and accessibility over decorative variety.

### 1.1 Brand Personality

| Trait          | Expression                                    |
|----------------|-----------------------------------------------|
| Precise        | Monotone palette, geometric logo, tight grid  |
| Accessible     | WCAG AA+ contrast, system fonts, color-blind safe |
| Minimal        | No casual decorative flair (without purpose)  |
| Technical      | System-font stack, code-native tokens, monospace accents |

### 1.2 Design Principles

1. **One hue, infinite hierarchy.** All colors derive from HSL 210°. Saturation and luminosity alone create contrast.
2. **Content over decoration.** Typography is the primary visual tool; ornamentation is absent.
3. **System-first.** Every token has a CSS custom property and a TypeScript constant. Nothing is hand-coded.
4. **Accessibility is non-negotiable.** Color-blind users, screen readers, and keyboard navigation are first-class.

---

## 2. Logo System

### 2.1 Construction

The BreakerSpace logo is composed of **seven rounded squares**, each rotated 45° into a diamond orientation, placed on a 3×3 grid. The arrangement evokes an upward arrow or flame — symbolizing directed energy and transformation.

- **Grid**: 3×3, equal spacing
- **Shape**: Rounded rectangle (`rx=48`, `ry=48` in SVG)
- **Rotation**: 45° on every element
- **Filled positions**: (0,0), (0,1), (1,0), (1,2), (2,0), (2,1), (2,2) — the center cell (1,1) is intentionally void, creating negative space that forms the "flame core"

### 2.2 Logo Variants

| Variant             | Use Case                           | Fill Color (Light BG) | Fill Color (Dark BG) |
|---------------------|------------------------------------|-----------------------|----------------------|
| Full — Dark on Light | Default, documents, web header   | `#112233`             | —                    |
| Full — Light on Dark | Dark backgrounds, overlays       | —                     | `#DDEEFF`            |
| Icon Only — Dark    | Favicons, app icons, small UI     | `#112233`             | —                    |
| Icon Only — Light   | Dark mode favicons, dark UI bars  | —                     | `#DDEEFF`            |
| Wordmark Only — Dark| Text-only contexts                | `#112233`             | —                    |
| Wordmark Only — Light| Text-only dark contexts          | —                     | `#DDEEFF`            |

### 2.3 Clear Space

Maintain a minimum exclusion zone around the logo equal to the **height of one diamond** (one grid unit). No text, graphics, or page edges may enter this zone.

### 2.4 Logo Misuse (Forbidden)

- Do not stretch, skew, or rotate the logo composition
- Do not change the fill color to any color outside the brand palette
- Do not add gradients, shadows, or outlines
- Do not place on low-contrast backgrounds
- Do not rearrange the diamond positions

---

## 3. Color System

### 3.1 Philosophy

All colors are derived from **HSL hue 210°** (a cool, authoritative blue). By varying only saturation (S) and luminosity (L), the system creates:

- A cohesive visual identity (single hue = instant recognition)
- Built-in color-blind accessibility (contrast relies on luminosity, not hue)
- A simple mental model for designers and engineers

### 3.2 Primary Brand Colors

| Token                          | Hex       | HSL                    | Role                         |
|--------------------------------|-----------|------------------------|------------------------------|
| `--brand-dark-baseline`        | `#001122` | `hsl(210, 100%, 7%)`   | Dark mode background, thematic undertone |
| `--brand-dark-contrast`        | `#DDEEFF` | `hsl(210, 100%, 93%)`  | Dark mode foreground, visual contrast    |
| `--brand-light-baseline`       | `#FAFCFE` | `hsl(210, 67%, 99%)`   | Light mode background, thematic undertone |
| `--brand-light-contrast`       | `#112233` | `hsl(210, 50%, 13%)`   | Light mode foreground, visual contrast   |

### 3.3 Extended Palette

| Token                     | Hex       | HSL                    | Role                    |
|---------------------------|-----------|------------------------|-------------------------|
| `--brand-slate`           | `#445566` | `hsl(210, 20%, 33%)`   | Controlled contrast, borders |
| `--brand-gray-blue`       | `#667788` | `hsl(210, 14%, 47%)`   | Medium contrast, muted text |
| `--brand-pale-blue`       | `#CCDDEE` | `hsl(210, 50%, 87%)`   | Medium brightness, dividers |
| `--brand-bright-blue`     | `#EFF7FF` | `hsl(210, 100%, 97%)`  | Controlled brightness, hover states |

### 3.4 Semantic Color Tokens (shadcn/ui mapping)

These map the brand palette onto the shadcn/ui semantic token system. Both light and dark modes are specified.

**Light Mode (`:root`):**

| Token                | Value             | Maps from           |
|----------------------|-------------------|---------------------|
| `--background`       | `#FAFCFE`         | `--brand-light-baseline` |
| `--foreground`       | `#112233`         | `--brand-light-contrast` |
| `--card`             | `#FFFFFF`         | white               |
| `--card-foreground`  | `#112233`         | `--brand-light-contrast` |
| `--primary`          | `#112233`         | `--brand-light-contrast` |
| `--primary-foreground` | `#FAFCFE`       | `--brand-light-baseline` |
| `--secondary`        | `#EFF7FF`         | `--brand-bright-blue` |
| `--secondary-foreground` | `#112233`     | `--brand-light-contrast` |
| `--muted`            | `#EFF7FF`         | `--brand-bright-blue` |
| `--muted-foreground` | `#667788`         | `--brand-gray-blue` |
| `--accent`           | `#CCDDEE`         | `--brand-pale-blue` |
| `--accent-foreground`| `#112233`         | `--brand-light-contrast` |
| `--border`           | `#CCDDEE`         | `--brand-pale-blue` |
| `--input`            | `#CCDDEE`         | `--brand-pale-blue` |
| `--ring`             | `#445566`         | `--brand-slate`     |
| `--destructive`      | `#d4183d`         | semantic red        |

**Dark Mode (`.dark`):**

| Token                | Value             | Maps from           |
|----------------------|-------------------|---------------------|
| `--background`       | `#001122`         | `--brand-dark-baseline` |
| `--foreground`       | `#DDEEFF`         | `--brand-dark-contrast` |
| `--card`             | `#0A1525`         | shifted baseline    |
| `--card-foreground`  | `#DDEEFF`         | `--brand-dark-contrast` |
| `--primary`          | `#DDEEFF`         | `--brand-dark-contrast` |
| `--primary-foreground` | `#001122`       | `--brand-dark-baseline` |
| `--secondary`        | `#112233`         | `--brand-light-contrast` |
| `--secondary-foreground` | `#DDEEFF`     | `--brand-dark-contrast` |
| `--muted`            | `#112233`         | `--brand-light-contrast` |
| `--muted-foreground` | `#667788`         | `--brand-gray-blue` |
| `--accent`           | `#112233`         | `--brand-light-contrast` |
| `--accent-foreground`| `#DDEEFF`         | `--brand-dark-contrast` |
| `--border`           | `#1A2D42`         | derived border      |
| `--input`            | `#1A2D42`         | derived input       |
| `--ring`             | `#445566`         | `--brand-slate`     |

### 3.5 Contrast Ratios

| Pair                                    | Ratio  | WCAG Level |
|-----------------------------------------|--------|------------|
| `#112233` on `#FAFCFE` (light mode)     | 15.8:1 | AAA        |
| `#DDEEFF` on `#001122` (dark mode)      | 14.2:1 | AAA        |
| `#667788` on `#FAFCFE` (muted light)    | 5.1:1  | AA         |
| `#667788` on `#001122` (muted dark)     | 4.6:1  | AA         |

---

## 4. Typography

### 4.1 Typeface Stack

| Role         | Family                                                                  | Fallback Chain                                    |
|--------------|-------------------------------------------------------------------------|---------------------------------------------------|
| **Wordmark** | Montserrat                                                              | system sans-serif                                 |
| **Body / UI**| "Noto Sans", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif | platform native stack              |
| **Monospace**| "SFMono-Regular", Menlo, Monaco, Consolas, "Liberation Mono", monospace | standard mono stack                               |

### 4.2 Wordmark Usage

Montserrat is **reserved exclusively** for the BreakerSpace wordmark and identifiable brand entities. It must never be used for body copy, UI labels, or any general text.

- **Weight**: Light (300) or Thin (100)
- **Tracking**: Tight (`-0.025em`) at display sizes
- **Color**: Inherit from context (`#112233` on light, `#DDEEFF` on dark)

### 4.3 Type Scale

| Level    | Size      | Line Height | Weight | Tracking     | Use Case                        |
|----------|-----------|-------------|--------|--------------|---------------------------------|
| Display  | 4rem   | 1           | 300    | -0.025em     | Hero headlines, splash text     |
| Heading 1| 3rem      | 1           | 500    | -0.025em     | Page titles                     |
| Heading 2| 2.25rem   | 1.1         | 500    | -0.025em     | Section headers                 |
| Heading 3| 1.875rem  | 1.2         | 500    | normal       | Subsections                     |
| Body     | 1rem      | 1.5         | 400    | normal       | Paragraph text, descriptions    |
| Caption  | 0.875rem  | 1.43        | 400    | normal       | Labels, metadata, footnotes     |
| Overline | 0.75rem   | 1.33        | 500    | 0.05em       | Section labels, category tags   |

### 4.4 Typography Rules

- Montserrat is for the wordmark or brand-identifying content only — never body text
- System font stack ensures fast loading and wide Unicode/device coverage
- Noto Sans provides comprehensive CJK and international glyph support
- Decorative and script fonts are prohibited (unless intended)
- Maintain WCAG AA contrast at minimum for all text

---

## 5. Spacing & Layout

### 5.1 Base Unit

The base spacing unit is **0.25rem (4px)**. All spacing values are multiples of this unit.

| Token     | Value    | Pixels |
|-----------|----------|--------|
| 1 unit    | 0.25rem  | 4px    |
| 2 units   | 0.5rem   | 8px    |
| 3 units   | 0.75rem  | 12px   |
| 4 units   | 1rem     | 16px   |
| 6 units   | 1.5rem   | 24px   |
| 8 units   | 2rem     | 32px   |
| 12 units  | 3rem     | 48px   |
| 16 units  | 4rem     | 64px   |
| 24 units  | 6rem     | 96px   |

### 5.2 Container

| Token            | Value    |
|------------------|----------|
| Max width (7xl)  | 80rem    |
| Page padding     | 1.5rem (mobile) / 2.5rem (desktop) |

### 5.3 Border Radius

| Token       | Value    |
|-------------|----------|
| `--radius`  | 0.625rem |
| `--radius-2xl` | 1rem  |
| `--radius-3xl` | 1.5rem |

---

## 6. Component Patterns

### 6.1 Logo Component

```tsx
<BreakerSpaceLogo
  variant="full" | "icon" | "wordmark"
  theme="light" | "dark"
  size={16 | 24 | 32 | 48 | 64}
/>
```

### 6.2 Color Swatch

```tsx
<ColorSwatch
  name="Dark Baseline"
  hex="#001122"
  hsl="hsl(210, 100%, 7%)"
  token="--brand-dark-baseline"
/>
```

### 6.3 Type Specimen

```tsx
<TypeSpecimen level="display" font="system">
  Break it till you make it
</TypeSpecimen>
```

---

## 7. Asset Matrix

| Asset                         | Format | Path                                  | Usage                          |
|-------------------------------|--------|---------------------------------------|--------------------------------|
| Logo — React Component        | TSX    | `/src/components/BreakerSpaceLogo.tsx` | All web contexts         |
| Design Tokens — CSS           | CSS    | `/src/lib/tokens.css`                 | Global theme import            |
| Design Tokens — TypeScript    | TS     | `/src/lib/tokens.ts`                  | Programmatic access            |
| Tailwind Theme Config         | TS     | `/src/lib/brand-theme.ts`             | Tailwind integration           |
| Brand Guidelines Page         | TSX    | `/src/app/page.tsx`                   | Live interactive spec          |

---

## 8. Implementation Conventions

### 8.1 File Naming

- Logo assets: `breakerspace-{variant}-{theme}.svg`
- Token files: `tokens.{css|ts}`
- Components: PascalCase, e.g., `BreakerSpaceLogo.tsx`

### 8.2 CSS Custom Properties

All brand tokens are exposed as CSS custom properties under the `--brand-` namespace, in addition to the shadcn/ui `--background`, `--foreground`, etc. semantic tokens. This dual-layer system allows:

- **Semantic layer** (`--primary`, `--muted-foreground`): Used by shadcn/ui components
- **Brand layer** (`--brand-dark-baseline`, `--brand-slate`): Used for brand-specific custom styling

### 8.3 Dark Mode

Dark mode is handled via the `.dark` class on `<html>`, consistent with `next-themes` and shadcn/ui conventions. The brand color system inverts gracefully: backgrounds become dark baselines, foregrounds become light contrasts.

### 8.4 Responsive Behavior

- Mobile-first: design for 375px, enhance for 768px, 1024px, 1280px
- Logo scales: 24px (mobile nav) → 32px (tablet) → 48px (desktop hero)
- Type scale: Caption and Body are constant; headings step down one level on mobile
