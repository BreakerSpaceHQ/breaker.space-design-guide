# BreakerSpace Design Guide

The living design system for BreakerSpace — a single source of truth for colour tokens, typography, logo usage, and component patterns across all brand-driven implementations.

Built with **Next.js 16**, **Tailwind CSS v4**, and **shadcn/ui**. The interactive specification is served as a Next.js app; the canonical written spec lives in [`design.md`](design.md).

## Quick start

```bash
npm install
npm run dev   # http://localhost:3000
```

## Structure

| Path | Purpose |
|------|---------|
| `design.md` | Canonical design system specification (v2) |
| `src/lib/tokens.ts` | Brand tokens as TypeScript constants |
| `src/components/BreakerSpaceLogo.tsx` | Logo React component |
| `src/app/page.tsx` | Live interactive style guide |
| `assets/branding.html` | Archived v1 Figma export (reference only) |
