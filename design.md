# Design Specification - Mansion Studio

## 1. Project Design Concept
A hybrid visual style fusing a **premium interior design portfolio** with **editorial neo-brutalist poster styling**.
- Soft, luxury backgrounds and layout spacing.
- Bold black typography and heavy headlines.
- Subtle grain and halftone overlays for an artistic edge.
- Minimalist architectural dividers, line art, and plus symbols.
- A serious architecture/interior portfolio feeling, with zero ecommerce or catalog elements.

---

## 2. Color Palette
- **Ivory Background**: `#F6F1E8` (Main body bg)
- **Warm Beige**: `#E8DCCB` (Section & card bg)
- **Soft Sand**: `#D8C7AE` (Neutral accent/tags)
- **Charcoal Black**: `#111111` (Headings, primary buttons, text)
- **Deep Grey**: `#2A2A2A` (Secondary text)
- **Muted Grey Text**: `#6F6A63` (Subtitles/body text)
- **Coral Red**: `#F05A54` (Accent graphic lines, highlights, hover details)
- **Warm Gold Brown**: `#B89C73` (Secondary accents, icons, badges)

---

## 3. Typography Rules
- **Heading Font**: Space Grotesk (Bold, editorial, tightly leaded).
- **Body Font**: Inter (Clean, legible, soft gray/charcoal).
- **Navigation**: Small, uppercase, tracked/letter-spaced.
- **Section Tags**: Small uppercase micro-headings preceded by `+` or numbers.

### Type Scale:
- **Hero Display**: `72px - 96px` (Desktop) | `54px - 70px` (Tablet) | `42px - 52px` (Mobile)
- **Section Heading**: `42px - 60px` (Desktop) | `36px - 48px` (Tablet) | `32px - 40px` (Mobile)
- **Subheading / Card Title**: `22px - 28px`
- **Body Text**: `16px - 18px` (Desktop) | `15px - 16px` (Mobile)
- **Buttons / Labels**: `13px - 15px`

---

## 4. Layout Rules
- **Container**: Max-width `1240px`, centered, with side paddings.
- **Section Padding**: `110px` top/bottom on Desktop, `70px` on Mobile.
- **Grids**: Asymmetric layout grids.
- **Borders**: Thin black dividers (`1px` solid, opacity `0.1`), featuring plus `+` nodes at intersections.
- **Border Radius**: Large image cards: `32px`, normal cards: `24px`, buttons: pill/rounded (`999px`).

---

## 5. Card Design
- Soft beige backgrounds or outline-only frames.
- Spacing-heavy, high breathing room.
- Hover lift (`translateY(-4px)`) and slight card borders. No heavy shadows.

---

## 6. Button Design
- **Primary Button**: Charcoal `#111111` with white text. Hover transitions to Coral Red `#F05A54`.
- **Secondary Button**: Transparent with a `1px` charcoal outline. Hover fills black with white text.
- **Gold Soft Button**: Warm Gold Brown `#B89C73` with white text, used inside specific CTA sections.

---

## 7. Navbar Design
- Clean, fixed top header.
- Transparent on initial page load, transitioning to a blurred Ivory background after scrolling down.
- Logo on the left, centered/right links, CTA button on the far right.
- Mobile toggle showing a clean right-aligned drawer menu.

---

## 8. Image Style
- Premium warm-toned interior photography.
- Soft contrast, warm color grading.
- Selective halftone overlays (radial dot grids) on decorative layouts.
- **Halftone Treatment**: A subtle dots screen effect used only as a background texture, not as distortion over primary case study images.

---

## 9. Animation Rules
- Fade-up reveals on scroll using `IntersectionObserver`.
- Soft hover zooms (`scale(1.04)`) for project card main images.
- Smooth underline expansions on hover.
- Bouncy or heavy parallax movements are prohibited.

---

## 10. Responsive Rules
- Stacking layout grids on mobile.
- No horizontal overflows allowed.
- Scale typography using clamp rules.
- Mobile buttons scale to full width where necessary.

---

## 11. Portfolio Styling Rules
- Strict **Project-Based Case Studies / Galleries** instead of selling items or rooms as separate projects.
- Display only 2 completed projects: The Castleton Mansion and Castleton Apartments.
- Render layout dynamically via tab options at the top of the portfolio section.
- Each project page contains:
  - **Project Intro Card**: Title, Category, Description, and clean Space Tag Pills.
  - **Main Featured Image**: Aspect-ratio 16:9 full-width cover image with category label on bottom-left.
  - **Gallery Grid**: 3 columns (desktop) / 2 columns (tablet) / 1 column (mobile) of 4:3 images with category label overlay badges.
  - **View Full Gallery Button**: Opens the full project image set in an interactive lightbox modal.
  - **Lightbox Modal**: A high-end dark modal overlay with next, previous, close, background click, and keyboard triggers (ArrowLeft, ArrowRight, Escape).
