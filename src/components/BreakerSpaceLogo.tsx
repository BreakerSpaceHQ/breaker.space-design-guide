import React from 'react';

export interface BreakerSpaceLogoProps {
  /** Logo variant */
  variant?: 'full' | 'icon' | 'wordmark';
  /** Color theme */
  theme?: 'light' | 'dark';
  /** Size in pixels */
  size?: number;
  /** Additional CSS class */
  className?: string;
}

/**
 * BreakerSpace Logo Component
 *
 * Renders the seven-diamond logo as an inline SVG.
 * - Seven rounded rectangles rotated 45° on a 3×3 grid
 * - Center cell intentionally void, forming the "flame core"
 * - Fill color adapts to theme prop
 */
export function BreakerSpaceLogo({
  variant = 'full',
  theme = 'dark',
  size = 48,
  className = '',
}: BreakerSpaceLogoProps) {
  const fillColor = theme === 'dark' ? '#112233' : '#DDEEFF';
  const strokeColor = fillColor;

  const iconSvg = (
    <svg
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width={variant === 'wordmark' ? size * 0.6 : size}
      height={variant === 'wordmark' ? size * 0.6 : size}
      className={className}
      aria-label="BreakerSpace logo"
      role="img"
    >
      {/* Row 0: positions (0,0), (1,0), (2,0) */}
      <rect x="447.06" y="-277.02" fill={fillColor} stroke={strokeColor} strokeWidth="4" width="192" height="192" rx="48" ry="48" transform="rotate(45)" />
      <rect x="673.33" y="-277.02" fill={fillColor} stroke={strokeColor} strokeWidth="4" width="192" height="192" rx="48" ry="48" transform="rotate(45)" />
      <rect x="899.61" y="-277.02" fill={fillColor} stroke={strokeColor} strokeWidth="4" width="192" height="192" rx="48" ry="48" transform="rotate(45)" />
      {/* Row 1: positions (0,1) and (2,1) — center (1,1) is void */}
      <rect x="447.06" y="-50.75" fill={fillColor} stroke={strokeColor} strokeWidth="4" width="192" height="192" rx="48" ry="48" transform="rotate(45)" />
      <rect x="899.61" y="-50.75" fill={fillColor} stroke={strokeColor} strokeWidth="4" width="192" height="192" rx="48" ry="48" transform="rotate(45)" />
      {/* Row 2: positions (0,2), (1,2), (2,2) */}
      <rect x="447.06" y="175.53" fill={fillColor} stroke={strokeColor} strokeWidth="4" width="192" height="192" rx="48" ry="48" transform="rotate(45)" />
      <rect x="673.33" y="175.53" fill={fillColor} stroke={strokeColor} strokeWidth="4" width="192" height="192" rx="48" ry="48" transform="rotate(45)" />
    </svg>
  );

  const wordmarkSvg = (
    <span
      style={{
        fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
        fontWeight: 300,
        letterSpacing: '-0.025em',
        color: fillColor,
        fontSize: `${size * 0.45}px`,
        lineHeight: '1',
      }}
    >
      BreakerSpace
    </span>
  );

  if (variant === 'icon') {
    return iconSvg;
  }

  if (variant === 'wordmark') {
    return wordmarkSvg;
  }

  // Full: icon + wordmark side by side
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {iconSvg}
      {wordmarkSvg}
    </div>
  );
}
