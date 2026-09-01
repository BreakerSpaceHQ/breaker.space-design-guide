/**
 * BreakerSpace Design Tokens — TypeScript
 *
 * Single source of truth for all brand values.
 * These tokens feed into CSS custom properties, Tailwind config, and component logic.
 */

export const brandColors = {
  // Primary Brand Colors
  darkBaseline: '#001122',
  darkContrast: '#DDEEFF',
  lightBaseline: '#FAFCFE',
  lightContrast: '#112233',

  // Extended Palette
  slate: '#445566',
  grayBlue: '#667788',
  paleBlue: '#CCDDEE',
  brightBlue: '#EFF7FF',

  // Semantic
  destructive: '#d4183d',
} as const;

export const brandHSL = {
  darkBaseline: 'hsl(210, 100%, 7%)',
  darkContrast: 'hsl(210, 100%, 93%)',
  lightBaseline: 'hsl(210, 67%, 99%)',
  lightContrast: 'hsl(210, 50%, 13%)',
  slate: 'hsl(210, 20%, 33%)',
  grayBlue: 'hsl(210, 14%, 47%)',
  paleBlue: 'hsl(210, 50%, 87%)',
  brightBlue: 'hsl(210, 100%, 97%)',
} as const;

export const brandTypography = {
  wordmark: {
    family: 'Montserrat, sans-serif',
    weights: {
      thin: 100,
      light: 300,
    },
    tracking: '-0.025em',
  },
  body: {
    family: '"Noto Sans", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    weights: {
      normal: 400,
      medium: 500,
    },
  },
  mono: {
    family: '"SFMono-Regular", Menlo, Monaco, Consolas, "Liberation Mono", monospace',
  },
} as const;

export const brandTypeScale = {
  display:  { size: '3.75rem', lineHeight: '1',     weight: 300, tracking: '-0.025em' },
  h1:       { size: '3rem',    lineHeight: '1',     weight: 500, tracking: '-0.025em' },
  h2:       { size: '2.25rem', lineHeight: '1.1',   weight: 500, tracking: '-0.025em' },
  h3:       { size: '1.875rem',lineHeight: '1.2',   weight: 500, tracking: 'normal'  },
  body:     { size: '1rem',    lineHeight: '1.5',   weight: 400, tracking: 'normal'  },
  caption:  { size: '0.875rem',lineHeight: '1.43',  weight: 400, tracking: 'normal'  },
  overline: { size: '0.75rem', lineHeight: '1.33',  weight: 500, tracking: '0.05em'  },
} as const;

export const brandSpacing = {
  unit: '0.25rem',
  values: {
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    6: '1.5rem',
    8: '2rem',
    12: '3rem',
    16: '4rem',
    24: '6rem',
  },
} as const;

export const brandRadius = {
  default: '0.625rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
} as const;

export const brandContainer = {
  maxWidth: '80rem',
  pagePadding: {
    mobile: '1.5rem',
    desktop: '2.5rem',
  },
} as const;

/** Color palette entries for the interactive swatch grid */
export const colorPaletteEntries = [
  { name: 'Dark Baseline',   hex: '#001122', hsl: 'hsl(210, 100%, 7%)',  token: '--brand-dark-baseline', role: 'Dark mode background, thematic undertone' },
  { name: 'Dark Contrast',   hex: '#DDEEFF', hsl: 'hsl(210, 100%, 93%)', token: '--brand-dark-contrast', role: 'Dark mode foreground, visual contrast' },
  { name: 'Light Baseline',  hex: '#FAFCFE', hsl: 'hsl(210, 67%, 99%)',  token: '--brand-light-baseline', role: 'Light mode background, thematic undertone' },
  { name: 'Light Contrast',  hex: '#112233', hsl: 'hsl(210, 50%, 13%)',  token: '--brand-light-contrast', role: 'Light mode foreground, visual contrast' },
  { name: 'Slate Blue',      hex: '#445566', hsl: 'hsl(210, 20%, 33%)',  token: '--brand-slate', role: 'Controlled contrast, borders' },
  { name: 'Gray Blue',       hex: '#667788', hsl: 'hsl(210, 14%, 47%)',  token: '--brand-gray-blue', role: 'Medium contrast, muted text' },
  { name: 'Pale Blue',       hex: '#CCDDEE', hsl: 'hsl(210, 50%, 87%)',  token: '--brand-pale-blue', role: 'Medium brightness, dividers' },
  { name: 'Bright Blue',     hex: '#EFF7FF', hsl: 'hsl(210, 100%, 97%)', token: '--brand-bright-blue', role: 'Controlled brightness, hover states' },
] as const;

/** Type scale entries for the specimen display */
export const typeScaleEntries = [
  { level: 'Display',  ...brandTypeScale.display,  sample: 'Break it till you make it' },
  { level: 'Heading 1',...brandTypeScale.h1,       sample: 'Break it till you make it' },
  { level: 'Heading 2',...brandTypeScale.h2,       sample: 'Break it till you make it' },
  { level: 'Heading 3',...brandTypeScale.h3,       sample: 'Break it till you make it' },
  { level: 'Body',     ...brandTypeScale.body,     sample: 'Break it till you make it' },
  { level: 'Caption',  ...brandTypeScale.caption,  sample: 'ad factores mundi' },
] as const;
