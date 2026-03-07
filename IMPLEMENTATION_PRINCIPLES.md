# Implementation Principles - VeeBran Rebuild

## 1. Component Architecture
- **Atomic Design**: Keep components small and focused (e.g., `Badge.tsx`, `PillButton.tsx`).
- **Composition**: Use composition to build complex sections.
- **Client/Server Split**: Use `'use client'` only where interactivity (Framer Motion, Hooks) is required.

## 2. Styling (Tailwind CSS)
- **Utility First**: Stick to Tailwind classes for consistency.
- **Custom Values**: Use arbitrary values `[...]` for pixel-perfect matching where standard scales fail.
- **Responsive Design**: Mobile-first approach. Use `md:`, `lg:` prefixes for all layout changes.
- **Global Styles**: Centralize repeating patterns (like the dot grid) in `globals.css`.

## 3. Animations (Framer Motion)
- **Subtle Transitions**: Use `spring` transitions for a premium feel.
- **Scroll Reveals**: Implement `whileInView` for all major sections with a slight Y-offset.
- **Interactive Feedback**: Hover states should be snappy but smooth.

## 4. Content Integrity
- **Exact Wording**: Copy text directly from reference images and provided documents.
- **Zero Placeholder Policy**: No "Lorem Ipsum". Every string must match the target site.

## 5. Performance
- **Image Optimization**: Use `next/image` for all non-SVG assets.
- **Bundle Size**: Monitor third-party library usage.
