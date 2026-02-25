# VeeBran Exact Rebuild Plan

This plan outlines the steps to achieve a pixel-perfect reconstruction of [veebran.com](https://veebran.com) using Next.js, Tailwind CSS, and Framer Motion.

## Phase 1: Foundation & Theme (Precision)
- [ ] **Typography**: Identify and implement the exact font (likely 'Inter' or 'Instrument Sans').
- [ ] **Color Palette**: Extract exact hex codes for background (#050505), accents (#00e5ff, #8b5cf6), and borders.
- [ ] **Global CSS**: Refine `globals.css` with exact spacing and shadow tokens.

## Phase 2: Component-Level Precision
- [ ] **Navbar**: 
    - Match exact logo spacing and "V" icon.
    - Implement precise hover states and backdrop-blur intensity.
- [ ] **Hero Section**:
    - Match font sizes and line heights for the main heading.
    - Refine the gradient background "glow" positions.
    - Exact button padding and border-radius (likely 16px-24px).
- [ ] **Logo Marquee**:
    - Source or replicate the exact logos (Make, Zapier, etc.).
    - Adjust speed and opacity to match the original "muted" look.
- [ ] **Bento Grid (Why VeeBran?)**:
    - Implement the exact 3-column layout on desktop.
    - Match card internal padding and icon background colors.
- [ ] **Mission Section**:
    - Add the mission statement section with the centered typography and "Book A Call" button.
- [ ] **Founder Section (Vishva Ambasana)**:
    - Create the profile section with image placement and bio.
- [ ] **Stats Section**:
    - Match the exact "VeeBran Blue" (#00e5ff) background.
    - Ensure number counters are smooth.
- [ ] **Services & Solutions**:
    - Refine the list items with the checkmark icons.
    - Match the card height and button styling.
- [ ] **Testimonials**:
    - Replicate the card layout and "Quote" icon placement.
- [ ] **FAQ Accordion**:
    - Match the plus/minus icon transition and padding.

## Phase 3: Animation & Interaction
- [ ] **Scroll Animations**: Implement `whileInView` with specific `staggerChildren` and `spring` transitions for every section.
- [ ] **Hover Effects**: Add the subtle "glow" and "scale" effects to all interactive cards.

## Phase 4: Verification & Final Polish
- [ ] **Content Audit**: Ensure 100% text accuracy.
- [ ] **Responsive Check**: Test on mobile (iPhone/Pixel) to ensure identical behavior.
- [ ] **Build Optimization**: Run `npm run build` to ensure performance.
