# Design Plan - VeeBran Rebuild

## 1. Typography
- **Primary Font**: 'Instrument Sans' (or Manrope as fallback).
- **Heading Weights**: 600-700 (Semi-bold to Bold).
- **Body Weights**: 400-500 (Regular to Medium).
- **Tracking**: Tight tracking for headings (`tracking-tighter`).

## 2. Color Palette
- **Background**: `#000000` (Pure Black).
- **Accents**:
  - **Lime/Yellow**: `#D9FF00` (Main heading color).
  - **Vibrant Blue**: `#3B82F6` (Contrast color in heading).
  - **Muted Orange/Yellow**: `#E5A800` (Badge text and Marquee label).
  - **Green**: `#22C55E` (Online status indicator).
- **Text**:
  - **Primary**: `#FFFFFF` (White).
  - **Secondary**: `#A1A1AA` (Zinc-400 for subtext).
  - **Muted**: `#71717A` (Zinc-500 for navigation links).

## 3. UI Components
- **Navbar**:
  - Pill-shaped floating container.
  - Background: `rgba(10, 10, 10, 0.8)` with `backdrop-blur-md`.
  - Border: `1px solid rgba(255, 255, 255, 0.1)`.
  - Links: Equal spacing, centered.
  - CTA: "Let's Talk" button with subtle glow and border.
- **Hero Section**:
  - **Background Pattern**: Dot grid with 28px spacing.
  - **Gradient Glow**: Centered radial gradient behind the main heading.
  - **Spacing**: Generous vertical padding (PT-32, PB-20).
- **Logo Marquee**:
  - **Text**: "Our Solutions Leverage Tools Trusted By" in `#E5A800`.
  - **Logos**: Monochromatic white with 50% opacity, full opacity on hover.
  - **Animation**: Smooth horizontal scroll (if animated) or centered grid.

## 4. Visual Assets
- **Logo**: Accurate "VeeBran" text with the specific "V" mark (Blue/Yellow gradient).
- **Icons**: Lucide-react for standard icons, custom SVGs for brand logos.
