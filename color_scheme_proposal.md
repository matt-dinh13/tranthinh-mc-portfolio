# MC Portfolio Color Scheme Proposal

## Current Issues:
- Dark hero (black overlay) → Light content (white/amber) = Harsh contrast
- No smooth color transition between sections
- Eye strain from sudden brightness changes

## Proposed Solution: Warm Gradient Flow

### 1. Hero Section:
- Background: Keep your professional MC image
- Overlay: Warm gradient instead of dark
  - `linear-gradient(135deg, rgba(245,158,11,0.8) 0%, rgba(234,88,12,0.6) 50%, rgba(0,0,0,0.4) 100%)`
- Text: White with warm accents

### 2. Content Sections:
- About: `bg-gradient-to-br from-amber-50 to-orange-50` (keep current)
- Portfolio: `bg-gradient-to-br from-orange-50 to-red-50` (slightly warmer)
- Testimonials: `bg-gradient-to-br from-red-50 to-pink-50` (new section)
- Contact: `bg-gradient-to-br from-pink-50 to-amber-50` (back to warm)

### 3. Smooth Transitions:
- Add gradient overlays between sections
- Use consistent warm color palette
- Ensure proper contrast ratios (WCAG AA)

## Benefits:
- Smooth visual flow from dark to light
- Consistent warm, professional tone
- Better user experience
- Maintains brand identity
- Accessible color contrast
