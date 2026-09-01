'use client';

import React, { useState } from 'react';
import { BreakerSpaceLogo } from '@/components/BreakerSpaceLogo';
import { colorPaletteEntries, typeScaleEntries, brandColors } from '@/lib/tokens';

// ─── Utility: Copy to clipboard ───────────────────────────
function CopyButton({ text, label }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };
  return (
    <button
      onClick={handleCopy}
      className="text-xs px-2 py-1 rounded border border-border bg-background hover:bg-accent transition-colors cursor-pointer"
      aria-label={label || `Copy ${text}`}
    >
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
}

// ─── Section: Hero ─────────────────────────────────────────
function HeroSection() {
  return (
    <header className="border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-14">
        <div className="flex items-center gap-4 mb-4">
          <BreakerSpaceLogo variant="full" theme="dark" size={40} />
        </div>
        <h1 className="text-3xl md:text-4xl font-medium text-foreground tracking-tight">
          Brand Kit
        </h1>
        <p className="text-muted-foreground mt-2 text-sm">
          Version 2.0 — June 2026 &middot; Design System Specification
        </p>
      </div>
    </header>
  );
}

// ─── Section: Logo ─────────────────────────────────────────
function LogoSection() {
  const logoVariants: {
    label: string;
    variant: 'full' | 'icon' | 'wordmark';
    theme: 'light' | 'dark';
    bg: string;
    size: number;
    description: string;
  }[] = [
    { label: 'Dark on Light', variant: 'full', theme: 'dark', bg: '#FAFCFE', size: 48, description: 'Default for light backgrounds' },
    { label: 'Light on Dark', variant: 'full', theme: 'light', bg: '#001122', size: 48, description: 'Default for dark backgrounds' },
    { label: 'Dark Icon Only', variant: 'icon', theme: 'dark', bg: '#FAFCFE', size: 64, description: 'Favicons, app icons, small UI' },
    { label: 'Light Icon Only', variant: 'icon', theme: 'light', bg: '#001122', size: 64, description: 'Dark mode icons' },
    { label: 'Dark Wordmark Only', variant: 'wordmark', theme: 'dark', bg: '#FAFCFE', size: 64, description: 'Text-only light contexts' },
    { label: 'Light Wordmark Only', variant: 'wordmark', theme: 'light', bg: '#001122', size: 64, description: 'Text-only dark contexts' },
  ];

  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-3">Logo</h2>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        The BreakerSpace logo features seven rounded squares, rotated to diamond shape, on a nine-square grid, in the likeness of an arrow or a flame. The center cell is intentionally void, creating negative space that forms the &ldquo;flame core.&rdquo;
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {logoVariants.map((v) => (
          <div
            key={v.label}
            className="rounded-2xl p-8 flex flex-col items-center justify-center min-h-[200px] border border-border"
            style={{ backgroundColor: v.bg }}
          >
            <BreakerSpaceLogo variant={v.variant} theme={v.theme} size={v.size} />
            <p
              className="text-center mt-6 text-sm font-medium"
              style={{ color: v.theme === 'dark' ? '#112233' : '#DDEEFF' }}
            >
              {v.label}
            </p>
            <p
              className="text-center mt-1 text-xs"
              style={{ color: v.theme === 'dark' ? '#667788' : '#667788' }}
            >
              {v.description}
            </p>
          </div>
        ))}
      </div>

      {/* Available Assets */}
      <div className="mt-8 p-6 rounded-xl border border-border bg-card">
        <h3 className="text-foreground font-medium mb-3">Available Assets</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-background border border-border">
            <div className="w-8 h-8 rounded bg-foreground/10 flex items-center justify-center text-xs font-mono text-muted-foreground">SVG</div>
            <div>
              <p className="text-foreground text-sm font-medium">SVG (Dark Version)</p>
              <p className="text-muted-foreground text-xs">breakerspace-logo-dark.svg &middot; Color: #112233</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-background border border-border">
            <div className="w-8 h-8 rounded bg-foreground/10 flex items-center justify-center text-xs font-mono text-muted-foreground">SVG</div>
            <div>
              <p className="text-foreground text-sm font-medium">SVG (Light Version)</p>
              <p className="text-muted-foreground text-xs">breakerspace-logo-light.svg &middot; Color: #fafcfe</p>
            </div>
          </div>
        </div>
      </div>

      {/* Clear Space */}
      <div className="mt-6 p-6 rounded-xl border border-border bg-accent/30">
        <h3 className="text-foreground font-medium mb-2">Clear Space</h3>
        <p className="text-muted-foreground text-sm">
          Maintain a minimum clear space around the logo equal to the height of one logo square (one grid unit). Never place text, graphics, or other elements within this zone.
        </p>
      </div>
    </section>
  );
}

// ─── Section: Colors ───────────────────────────────────────
function ColorSection() {
  const [activeTab, setActiveTab] = useState<'primary' | 'extended' | 'philosophy'>('primary');

  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-3">Color Palette</h2>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        BreakerSpace uses a monotone color system based on HSL hue 210° with varying saturation and luminosity. This approach ensures accessibility for color-blind users while maintaining visual hierarchy through contrast.
      </p>

      {/* Tab Navigation */}
      <div className="flex gap-1 mb-8 p-1 bg-muted rounded-lg w-fit">
        {(['primary', 'extended', 'philosophy'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer ${
              activeTab === tab
                ? 'bg-background text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {tab === 'primary' ? 'Primary Brand Colors' : tab === 'extended' ? 'Extended Palette' : 'Color Philosophy'}
          </button>
        ))}
      </div>

      {activeTab === 'primary' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {colorPaletteEntries.slice(0, 4).map((c) => (
            <div key={c.token} className="group rounded-xl border border-border overflow-hidden">
              <div
                className="h-32 flex items-end p-4"
                style={{ backgroundColor: c.hex }}
              >
                <span
                  className="text-xs font-mono font-medium"
                  style={{ color: c.hex === '#FAFCFE' || c.hex === '#DDEEFF' || c.hex === '#EFF7FF' || c.hex === '#CCDDEE' ? '#112233' : '#DDEEFF' }}
                >
                  {c.hex}
                </span>
              </div>
              <div className="p-4 space-y-1">
                <p className="text-foreground font-medium text-sm">{c.name}</p>
                <p className="text-muted-foreground text-xs font-mono">{c.hsl}</p>
                <p className="text-muted-foreground text-xs">{c.role}</p>
                <div className="mt-2">
                  <CopyButton text={c.hex} label={`Copy ${c.hex}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'extended' && (
        <>
          <p className="text-muted-foreground text-sm mb-4">
            HSL Hue 210° Variations (indicative, non-exhaustive)
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {colorPaletteEntries.slice(4).map((c) => (
              <div key={c.token} className="group rounded-xl border border-border overflow-hidden">
                <div
                  className="h-32 flex items-end p-4"
                  style={{ backgroundColor: c.hex }}
                >
                  <span
                    className="text-xs font-mono font-medium"
                    style={{ color: c.hex === '#FAFCFE' || c.hex === '#DDEEFF' || c.hex === '#EFF7FF' || c.hex === '#CCDDEE' ? '#112233' : '#DDEEFF' }}
                  >
                    {c.hex}
                  </span>
                </div>
                <div className="p-4 space-y-1">
                  <p className="text-foreground font-medium text-sm">{c.name}</p>
                  <p className="text-muted-foreground text-xs font-mono">{c.hsl}</p>
                  <p className="text-muted-foreground text-xs">{c.role}</p>
                  <div className="mt-2">
                    <CopyButton text={c.hex} label={`Copy ${c.hex}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {activeTab === 'philosophy' && (
        <div className="max-w-2xl space-y-4">
          <p className="text-foreground">
            All colors derive from a single hue (210°) on the HSL scale. By adjusting only saturation and luminosity,
            we create visual hierarchy and contrast while maintaining a cohesive, accessible design system.
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-foreground mt-0.5">&#x2022;</span>
              <span>Monotone approach accommodates color-blind users by ensuring contrast relies on luminosity, not hue differentiation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-foreground mt-0.5">&#x2022;</span>
              <span>Consistent hue creates instant brand recognition across all touchpoints and media</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-foreground mt-0.5">&#x2022;</span>
              <span>Luminosity contrast ensures readability at all sizes and across both light and dark modes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-foreground mt-0.5">&#x2022;</span>
              <span>Simple system reduces complexity for designers and engineers — one hue, infinite hierarchy</span>
            </li>
          </ul>

          {/* Contrast Ratios Table */}
          <div className="mt-6">
            <h3 className="text-foreground font-medium mb-3">Contrast Ratios</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-4 text-muted-foreground font-medium">Pair</th>
                    <th className="text-left py-2 pr-4 text-muted-foreground font-medium">Ratio</th>
                    <th className="text-left py-2 text-muted-foreground font-medium">WCAG Level</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 text-foreground font-mono text-xs">#112233 on #FAFCFE</td>
                    <td className="py-2 pr-4 text-foreground">15.8:1</td>
                    <td className="py-2"><span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-medium dark:bg-emerald-900/30 dark:text-emerald-400">AAA</span></td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 text-foreground font-mono text-xs">#DDEEFF on #001122</td>
                    <td className="py-2 pr-4 text-foreground">14.2:1</td>
                    <td className="py-2"><span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-medium dark:bg-emerald-900/30 dark:text-emerald-400">AAA</span></td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 text-foreground font-mono text-xs">#667788 on #FAFCFE</td>
                    <td className="py-2 pr-4 text-foreground">5.1:1</td>
                    <td className="py-2"><span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-xs font-medium dark:bg-amber-900/30 dark:text-amber-400">AA</span></td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 text-foreground font-mono text-xs">#667788 on #001122</td>
                    <td className="py-2 pr-4 text-foreground">4.6:1</td>
                    <td className="py-2"><span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-xs font-medium dark:bg-amber-900/30 dark:text-amber-400">AA</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// ─── Section: Typography ───────────────────────────────────
function TypographySection() {
  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-3">Typography</h2>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        Simple, accessible typography prioritizing clarity, simplicity, and wide Unicode support.
      </p>

      {/* Typeface Specimens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Wordmark Typeface */}
        <div className="rounded-xl border border-border p-6">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Wordmark Typeface</p>
          <p className="text-foreground font-medium text-lg mb-4" style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}>
            Montserrat
          </p>
          <p className="text-muted-foreground text-sm mb-4">
            Used exclusively for the BreakerSpace wordmark in Light (300) or Thin (100) weights
          </p>
          <div
            className="rounded-lg p-6 bg-background border border-border"
            style={{ backgroundColor: '#FAFCFE' }}
          >
            <p
              className="text-4xl tracking-tight mb-2"
              style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif', fontWeight: 300, color: '#112233' }}
            >
              BreakerSpace
            </p>
            <p style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif', fontWeight: 300, color: '#667788', fontSize: '1.25rem' }}>
              Aa Bb Cc Dd Ee Ff
            </p>
          </div>
        </div>

        {/* Body & UI Typeface */}
        <div className="rounded-xl border border-border p-6">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Body &amp; UI Typeface</p>
          <p className="text-foreground font-medium text-lg mb-4" style={{ fontFamily: '"Noto Sans", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
            System Font Stack
          </p>
          <p className="text-muted-foreground text-sm mb-3 font-mono text-xs">
            font-family: &quot;Noto Sans&quot;, Roboto, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;
          </p>
          <p className="text-muted-foreground text-sm mb-4">
            Prioritizes Noto Sans with native system fonts as fallback for wide Unicode support
          </p>
          <div
            className="rounded-lg p-6 bg-background border border-border"
            style={{ backgroundColor: '#FAFCFE' }}
          >
            <p className="text-2xl mb-2" style={{ fontFamily: '"Noto Sans", Roboto, -apple-system, sans-serif', color: '#112233' }}>
              Aa Bb Cc Dd Ee Ff
            </p>
            <p className="text-lg mb-2" style={{ fontFamily: '"Noto Sans", Roboto, -apple-system, sans-serif', color: '#445566' }}>
              0123456789 !@#$%
            </p>
            <p className="text-sm" style={{ fontFamily: '"Noto Sans", Roboto, -apple-system, sans-serif', color: '#667788' }}>
              Unicode: 你好 &bull; مرحبا &bull; नमस्ते &bull; Здравствуй
            </p>
          </div>
        </div>
      </div>

      {/* Type Scale */}
      <h3 className="text-foreground font-medium text-lg mb-6">Type Scale</h3>
      <div className="space-y-6 mb-10">
        {typeScaleEntries.map((entry) => (
          <div key={entry.level} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 pb-4 border-b border-border last:border-0">
            <div className="w-28 shrink-0">
              <p className="text-xs text-muted-foreground uppercase tracking-widest">{entry.level}</p>
            </div>
            <div className="flex-1">
              <p
                className="text-foreground"
                style={{
                  fontSize: entry.size,
                  lineHeight: entry.lineHeight,
                  fontWeight: entry.weight,
                  letterSpacing: entry.tracking === 'normal' ? undefined : entry.tracking,
                }}
              >
                {entry.sample}
              </p>
            </div>
            <div className="shrink-0 text-right">
              <p className="text-xs font-mono text-muted-foreground">{entry.size} / {entry.weight}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Typography Guidelines */}
      <div className="p-6 rounded-xl border border-border bg-accent/30">
        <h3 className="text-foreground font-medium mb-3">Typography Guidelines</h3>
        <ul className="space-y-2 text-muted-foreground text-sm">
          <li className="flex items-start gap-2">
            <span className="text-foreground mt-0.5">&#x2022;</span>
            <span>Montserrat is reserved for the BreakerSpace wordmark and identifiable brand entities only</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-foreground mt-0.5">&#x2022;</span>
            <span>Use system font stack everywhere else to ensure fast loading and wide device support</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-foreground mt-0.5">&#x2022;</span>
            <span>Noto Sans provides comprehensive Unicode coverage for international content</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-foreground mt-0.5">&#x2022;</span>
            <span>Avoid decorative or script fonts; keep typography simple and functional</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-foreground mt-0.5">&#x2022;</span>
            <span>Maintain high contrast ratios for accessibility (WCAG AA minimum)</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

// ─── Section: Brand Applications ───────────────────────────
function ApplicationsSection() {
  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-3">Brand Applications</h2>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        Examples of the BreakerSpace brand in use across various touchpoints.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Business Card Light */}
        <div className="rounded-xl border border-border overflow-hidden">
          <div className="p-8" style={{ backgroundColor: '#FAFCFE' }}>
            <BreakerSpaceLogo variant="full" theme="dark" size={32} />
            <div className="mt-8">
              <p className="text-lg font-medium" style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif', fontWeight: 300, color: '#112233' }}>Soumya Deb</p>
              <p className="text-sm" style={{ color: '#667788' }}>Founder &amp; Director</p>
              <p className="text-sm mt-2" style={{ color: '#445566' }}>debs@breakerspace.org</p>
            </div>
          </div>
          <div className="px-4 py-2 bg-card border-t border-border">
            <p className="text-xs text-muted-foreground">Business Card (Light)</p>
          </div>
        </div>

        {/* Business Card Dark */}
        <div className="rounded-xl border border-border overflow-hidden">
          <div className="p-8" style={{ backgroundColor: '#001122' }}>
            <BreakerSpaceLogo variant="full" theme="light" size={32} />
            <div className="mt-8">
              <p className="text-lg font-medium" style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif', fontWeight: 300, color: '#DDEEFF' }}>Soumya Deb</p>
              <p className="text-sm" style={{ color: '#667788' }}>Founder &amp; Director</p>
              <p className="text-sm mt-2" style={{ color: '#445566' }}>debs@breakerspace.org</p>
            </div>
          </div>
          <div className="px-4 py-2 bg-card border-t border-border">
            <p className="text-xs text-muted-foreground">Business Card (Dark)</p>
          </div>
        </div>

        {/* App Icon */}
        <div className="rounded-xl border border-border overflow-hidden">
          <div className="p-8 flex items-center justify-center" style={{ backgroundColor: '#001122', minHeight: '200px' }}>
            <div className="rounded-2xl p-6" style={{ backgroundColor: '#001122' }}>
              <BreakerSpaceLogo variant="icon" theme="light" size={80} />
            </div>
          </div>
          <div className="px-4 py-2 bg-card border-t border-border">
            <p className="text-xs text-muted-foreground">App Icon</p>
          </div>
        </div>

        {/* Example Webpage Light */}
        <div className="rounded-xl border border-border overflow-hidden">
          <div className="p-4" style={{ backgroundColor: '#FAFCFE' }}>
            <div className="flex items-center justify-between mb-6">
              <BreakerSpaceLogo variant="full" theme="dark" size={24} />
              <div className="flex gap-4">
                <span className="text-xs" style={{ color: '#667788' }}>Product</span>
                <span className="text-xs" style={{ color: '#667788' }}>About</span>
                <span className="text-xs" style={{ color: '#667788' }}>Contact</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-3 rounded w-3/4" style={{ backgroundColor: '#CCDDEE' }} />
              <div className="h-3 rounded w-full" style={{ backgroundColor: '#EFF7FF' }} />
              <div className="h-3 rounded w-1/2" style={{ backgroundColor: '#EFF7FF' }} />
            </div>
          </div>
          <div className="px-4 py-2 bg-card border-t border-border">
            <p className="text-xs text-muted-foreground">Example Webpage (Light)</p>
          </div>
        </div>

        {/* Example Webpage Dark */}
        <div className="rounded-xl border border-border overflow-hidden">
          <div className="p-4" style={{ backgroundColor: '#001122' }}>
            <div className="flex items-center justify-between mb-6">
              <BreakerSpaceLogo variant="full" theme="light" size={24} />
              <div className="flex gap-4">
                <span className="text-xs" style={{ color: '#667788' }}>Product</span>
                <span className="text-xs" style={{ color: '#667788' }}>About</span>
                <span className="text-xs" style={{ color: '#667788' }}>Contact</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-3 rounded w-2/3" style={{ backgroundColor: '#1A2D42' }} />
              <div className="h-3 rounded w-full" style={{ backgroundColor: '#112233' }} />
              <div className="h-3 rounded w-1/2" style={{ backgroundColor: '#112233' }} />
            </div>
          </div>
          <div className="px-4 py-2 bg-card border-t border-border">
            <p className="text-xs text-muted-foreground">Example Webpage (Dark)</p>
          </div>
        </div>

        {/* Letterhead */}
        <div className="rounded-xl border border-border overflow-hidden">
          <div className="p-6" style={{ backgroundColor: '#FAFCFE', minHeight: '200px' }}>
            <BreakerSpaceLogo variant="icon" theme="dark" size={28} />
            <div className="mt-8 space-y-2">
              <div className="h-2 rounded w-full" style={{ backgroundColor: '#CCDDEE' }} />
              <div className="h-2 rounded w-5/6" style={{ backgroundColor: '#EFF7FF' }} />
              <div className="h-2 rounded w-4/6" style={{ backgroundColor: '#EFF7FF' }} />
              <div className="h-2 rounded w-full" style={{ backgroundColor: '#EFF7FF' }} />
              <div className="h-2 rounded w-3/6" style={{ backgroundColor: '#EFF7FF' }} />
            </div>
            <div className="mt-8 pt-4" style={{ borderTop: '1px solid #CCDDEE' }}>
              <p className="text-xs" style={{ color: '#667788' }}>breakerspace.org</p>
            </div>
          </div>
          <div className="px-4 py-2 bg-card border-t border-border">
            <p className="text-xs text-muted-foreground">Letterhead</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section: Code Export ──────────────────────────────────
function CodeExportSection() {
  const [activeCodeTab, setActiveCodeTab] = useState<'css' | 'ts' | 'tailwind'>('css');

  const cssCode = `/* BreakerSpace Design Tokens — CSS Custom Properties */

:root {
  /* Brand Palette */
  --brand-dark-baseline: #001122;
  --brand-dark-contrast: #DDEEFF;
  --brand-light-baseline: #FAFCFE;
  --brand-light-contrast: #112233;
  --brand-slate: #445566;
  --brand-gray-blue: #667788;
  --brand-pale-blue: #CCDDEE;
  --brand-bright-blue: #EFF7FF;

  /* Semantic Tokens (Light Mode) */
  --background: #FAFCFE;
  --foreground: #112233;
  --primary: #112233;
  --primary-foreground: #FAFCFE;
  --secondary: #EFF7FF;
  --secondary-foreground: #112233;
  --muted: #EFF7FF;
  --muted-foreground: #667788;
  --accent: #CCDDEE;
  --accent-foreground: #112233;
  --border: #CCDDEE;
  --input: #CCDDEE;
  --ring: #445566;
}

.dark {
  --background: #001122;
  --foreground: #DDEEFF;
  --primary: #DDEEFF;
  --primary-foreground: #001122;
  --secondary: #112233;
  --secondary-foreground: #DDEEFF;
  --muted: #112233;
  --muted-foreground: #667788;
  --accent: #112233;
  --accent-foreground: #DDEEFF;
  --border: #1A2D42;
  --input: #1A2D42;
  --ring: #445566;
}`;

  const tsCode = `// BreakerSpace Design Tokens — TypeScript
import { brandColors, brandTypeScale, brandSpacing } from '@/lib/tokens';

// Usage examples:
const bgColor = brandColors.lightBaseline; // '#FAFCFE'
const headingSize = brandTypeScale.h1.size; // '3rem'
const spacing8 = brandSpacing.values[8];    // '2rem'`;

  const tailwindCode = `// tailwind.config.ts — BreakerSpace brand extension
import type { Config } from 'tailwindcss';

const config: Config = {
  theme: {
    extend: {
      colors: {
        brand: {
          'dark-baseline': '#001122',
          'dark-contrast': '#DDEEFF',
          'light-baseline': '#FAFCFE',
          'light-contrast': '#112233',
          'slate': '#445566',
          'gray-blue': '#667788',
          'pale-blue': '#CCDDEE',
          'bright-blue': '#EFF7FF',
        },
      },
      fontFamily: {
        wordmark: ['Montserrat', 'sans-serif'],
        body: ['"Noto Sans"', 'Roboto', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
      },
    },
  },
};
export default config;`;

  const codeMap = { css: cssCode, ts: tsCode, tailwind: tailwindCode };

  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-3">Code Export</h2>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        Copy design tokens directly into your project. All tokens are available as CSS custom properties, TypeScript constants, and Tailwind configuration.
      </p>

      <div className="flex gap-1 mb-4 p-1 bg-muted rounded-lg w-fit">
        {(['css', 'ts', 'tailwind'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveCodeTab(tab)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer ${
              activeCodeTab === tab
                ? 'bg-background text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {tab === 'css' ? 'CSS Tokens' : tab === 'ts' ? 'TypeScript' : 'Tailwind Config'}
          </button>
        ))}
      </div>

      <div className="relative">
        <div className="absolute top-3 right-3 z-10">
          <CopyButton text={codeMap[activeCodeTab]} label="Copy code" />
        </div>
        <pre className="bg-foreground text-background p-6 rounded-xl overflow-x-auto text-sm font-mono leading-relaxed">
          <code>{codeMap[activeCodeTab]}</code>
        </pre>
      </div>
    </section>
  );
}

// ─── Section: Key Takeaways ────────────────────────────────
function TakeawaysSection() {
  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-6">Key Takeaways</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-xl border border-border p-6">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Primary Colors</p>
          <div className="flex gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: '#112233' }} />
            <div className="w-8 h-8 rounded-lg border border-border" style={{ backgroundColor: '#FAFCFE' }} />
          </div>
          <p className="text-foreground text-sm font-medium">Light Mode</p>
          <p className="text-muted-foreground text-xs font-mono">#112233 on #FAFCFE</p>
          <div className="flex gap-2 mb-3 mt-3">
            <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: '#DDEEFF' }} />
            <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: '#001122' }} />
          </div>
          <p className="text-foreground text-sm font-medium">Dark Mode</p>
          <p className="text-muted-foreground text-xs font-mono">#DDEEFF on #001122</p>
        </div>

        <div className="rounded-xl border border-border p-6">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Typography</p>
          <p className="text-foreground text-sm" style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif', fontWeight: 300 }}>Montserrat</p>
          <p className="text-muted-foreground text-xs mb-3">Branding only</p>
          <p className="text-foreground text-sm" style={{ fontFamily: '"Noto Sans", sans-serif' }}>System Fonts</p>
          <p className="text-muted-foreground text-xs">All other text</p>
        </div>

        <div className="rounded-xl border border-border p-6">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Color System</p>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full" style={{ backgroundColor: '#001122' }} />
            <div className="w-6 h-6 rounded-full" style={{ backgroundColor: '#445566' }} />
            <div className="w-6 h-6 rounded-full" style={{ backgroundColor: '#667788' }} />
            <div className="w-6 h-6 rounded-full" style={{ backgroundColor: '#CCDDEE' }} />
            <div className="w-6 h-6 rounded-full" style={{ backgroundColor: '#DDEEFF' }} />
          </div>
          <p className="text-foreground text-sm font-medium">HSL 210°</p>
          <p className="text-muted-foreground text-xs">Varying saturation &amp; luminosity</p>
        </div>

        <div className="rounded-xl border border-border p-6">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Logo Clear Space</p>
          <div className="flex items-center justify-center my-4">
            <BreakerSpaceLogo variant="icon" theme="dark" size={48} />
          </div>
          <p className="text-foreground text-sm font-medium text-center">Equal to 1 grid unit</p>
          <p className="text-muted-foreground text-xs text-center">Height of one logo square</p>
        </div>
      </div>
    </section>
  );
}

// ─── Section: Asset Matrix ─────────────────────────────────
function AssetMatrixSection() {
  const assets = [
    { asset: 'Logo — Dark SVG', format: 'SVG', path: '/assets/logo/breakerspace-logo-dark.svg', usage: 'Light backgrounds, print, documents' },
    { asset: 'Logo — Light SVG', format: 'SVG', path: '/assets/logo/breakerspace-logo-light.svg', usage: 'Dark backgrounds, overlays, presentations' },
    { asset: 'Logo — Icon Dark', format: 'SVG', path: '/assets/logo/breakerspace-icon-dark.svg', usage: 'Favicons, app icons, small UI elements' },
    { asset: 'Logo — Icon Light', format: 'SVG', path: '/assets/logo/breakerspace-icon-light.svg', usage: 'Dark mode favicons and UI bars' },
    { asset: 'Logo — React Component', format: 'TSX', path: '/src/components/BreakerSpaceLogo.tsx', usage: 'All web contexts (variant + theme props)' },
    { asset: 'Design Tokens — CSS', format: 'CSS', path: '/src/lib/tokens.css', usage: 'Global theme import via custom properties' },
    { asset: 'Design Tokens — TypeScript', format: 'TS', path: '/src/lib/tokens.ts', usage: 'Programmatic access to brand values' },
    { asset: 'Design Specification', format: 'MD', path: '/design.md', usage: 'Source of truth for all brand decisions' },
    { asset: 'Brand Guidelines Page', format: 'TSX', path: '/src/app/page.tsx', usage: 'Live interactive specification' },
  ];

  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-3">Asset Matrix</h2>
      <p className="text-muted-foreground mb-6 max-w-3xl">
        Complete mapping of all brand assets, their file formats, source paths, and intended usage contexts.
      </p>
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-muted/50">
              <th className="text-left py-3 px-4 text-muted-foreground font-medium">Asset</th>
              <th className="text-left py-3 px-4 text-muted-foreground font-medium">Format</th>
              <th className="text-left py-3 px-4 text-muted-foreground font-medium">Path</th>
              <th className="text-left py-3 px-4 text-muted-foreground font-medium">Usage</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((a, i) => (
              <tr key={i} className={i < assets.length - 1 ? 'border-b border-border' : ''}>
                <td className="py-3 px-4 text-foreground font-medium">{a.asset}</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-0.5 rounded bg-muted text-muted-foreground text-xs font-mono">{a.format}</span>
                </td>
                <td className="py-3 px-4 text-foreground font-mono text-xs">{a.path}</td>
                <td className="py-3 px-4 text-muted-foreground">{a.usage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

// ─── Navigation Sidebar ────────────────────────────────────
function SectionNav({ active }: { active: string }) {
  const sections = [
    { id: 'logo', label: 'Logo' },
    { id: 'colors', label: 'Colors' },
    { id: 'typography', label: 'Typography' },
    { id: 'applications', label: 'Applications' },
    { id: 'code', label: 'Code Export' },
    { id: 'takeaways', label: 'Key Takeaways' },
    { id: 'assets', label: 'Asset Matrix' },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="hidden lg:block sticky top-8 w-48 shrink-0" aria-label="Section navigation">
      <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Sections</p>
      <ul className="space-y-1">
        {sections.map((s) => (
          <li key={s.id}>
            <button
              onClick={() => scrollTo(s.id)}
              className={`w-full text-left text-sm py-1.5 px-3 rounded-md transition-colors cursor-pointer ${
                active === s.id
                  ? 'bg-accent text-foreground font-medium'
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
              }`}
            >
              {s.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// ─── Main Page ─────────────────────────────────────────────
export default function Home() {
  const [activeSection, setActiveSection] = React.useState('logo');

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <HeroSection />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 flex-1 w-full">
        <div className="flex gap-8">
          <SectionNav active={activeSection} />

          <main className="flex-1 space-y-20 min-w-0">
            <div id="logo">
              <LogoSection />
            </div>
            <div id="colors">
              <ColorSection />
            </div>
            <div id="typography">
              <TypographySection />
            </div>
            <div id="applications">
              <ApplicationsSection />
            </div>
            <div id="code">
              <CodeExportSection />
            </div>
            <div id="takeaways">
              <TakeawaysSection />
            </div>
            <div id="assets">
              <AssetMatrixSection />
            </div>
          </main>
        </div>
      </div>

      <footer className="border-t border-border mt-auto">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6">
          <p className="text-muted-foreground text-sm">
            &copy; 2025 BreakerSpace. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
