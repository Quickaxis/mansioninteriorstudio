# Walkthrough - Portfolio Redesign & Interactive Lightbox Modal

We have completely overhauled the portfolio section of the website to transition it into a premium, clean case study gallery page with a tabbed dynamic switcher and interactive media lightbox viewer.

---

## 1. Accomplished Design Upgrades

### A. Dynamic Project Swapping Tabs
- Replaced the old static grid with two premium, pill-shaped high-contrast filter tabs at the top of the Portfolio section:
  - **Castle On Mansion** (Active by default)
  - **Castle On Apartments**
- Swapping the tabs dynamically updates the case study intro card, primary featured cover image, and the layout gallery grids via JavaScript.

### B. Clean Asymmetric Case Study Layout
- **Project Intro Card**: Displays the title, category, description, and space tags in clean, light-colored pill designs (e.g. `Lounge Area`, `Living Room`, `Bedroom`, etc.).
- **Wide Featured Cover Image**: A wide aspect-ratio (`16:9`) header image highlighting the main project space, using `object-fit: cover` and displaying an overlay label in the bottom left.
- **Gallery Grid**: A 3-column desktop grid showing individual rooms/categories as cards. Each card has:
  - Strict aspect-ratio (`4:3`)
  - Subtle `scale(1.04)` transition on hover
  - Overlay label badge specifying the room category
  - Easy integration: clicking any image opens the lightbox modal.
- **"View Full Gallery" Button**: Placed at the bottom of the section to trigger the lightbox modal directly, starting from the first image.

### C. Interactive Media Lightbox Modal
- Added a full-viewport modal (`.lightbox-modal`) with a dark backdrop overlay.
- Features:
  - **Navigation controls**: Previous (`⟨`) and Next (`⟩`) buttons with infinite wrap-around index navigation.
  - **Caption Indicator**: Displays the current image label and photo position count (e.g. `Bedroom - 3 / 10`).
  - **Fluid animations**: Visual transitions on open/close and a subtle zoom-fade entry animation (`lightboxFadeIn`) when shifting between images.
  - **Keyboard Support**: Left/Right arrows navigate through images, and Escape key closes the lightbox.
  - **Body Scroll-Lock**: Automatically disables page scrolling when the lightbox is active and restores scrolling on close.
  - **Flexible Closing**: Closes when clicking the `×` close button, hitting Escape, or clicking anywhere on the overlay background outside the image.

### D. Why Choose Us Section Redesign
- **Solid Black Background**: Swapped the textured/grainy dark background of `.specialty` for a clean solid black (`#000000`) look. Removed all background overlays and grain elements.
- **Red Accent Accoutrements**:
  - The introductory tag (`+ WHY CHOOSE US`) is styled in high-visibility Coral Red (`#F05A54`).
  - Added a clean red underline decoration below the warm gold number counters.
  - Hovering over a card triggers a sharp coral red border transition.
  - The consultation CTA button transitions from gold to coral red on hover.
- **Card Enhancements**: Set cards to a dark background (`#050505`) with a solid transparent border (`1px solid rgba(255, 255, 255, 0.16)`) and lightened text styles for premium architectural appeal.

### E. About The Studio Editorial Image Grid
- **Editorial 2x2 Visual Grid**:
  - **Main Large Image**: Centered on top, spanning full width (`aspect-ratio: 4/3`) with the label `Lounge Detail`.
  - **Bottom Row Images**: Two smaller images side by side (each `aspect-ratio: 1/1`) with labels `Interior Styling` and `Material Finish`.
- **Aesthetic Precision**: Zero absolute positioning or negative margins. Clean grid-based alignments prevent overlap issues. Corner borders (`border-radius: 30px` on main image, `24px` on small items) and crisp outlines display correctly.
- **Responsive Layout**:
  - On mobile displays (`max-width: 768px`), the grid gap reduces to `12px` and border-radius scales dynamically (main image at `22px` with `16/10` aspect ratio, small items at `18px` with square aspect ratio). Labels scale down for readability.

### F. Hero Typography & Responsive Consistency
- **Neo-Brutalist Strike Bar**: Replaced the underline-like styling of the red line under "Thoughtful" with a bold graphic strike bar that cuts through the middle/lower-middle of the letters (`top: 54%`, `height: 0.16em` on desktop, `top: 52%`, `height: 0.14em` on mobile) using the red/coral color `#F05A54`. The strike line sits behind the text (`z-index: -1`) but visually strikes through it, slightly extending beyond the word edges for a premium editorial style.
- **Responsive Fluid Layout**: Established a grid framework (`minmax(0, 1.05fr) minmax(360px, 0.85fr)`) with an aspect ratio of `4/5` for the hero image on desktop.
- **Luxury Background Layout on Mobile (Image Behind the Text)**:
  - **Full Visual Card**: Converted the mobile hero into a full-screen luxury background block (`min-height: calc(100svh - 70px)`) where the interior image spans the full background behind the content.
  - **Dark Overlay**: Added a smooth gradient overlay (`linear-gradient`) from top to bottom (darkness ranges from `0.35` to `0.78` opacity) to ensure white text is perfectly readable.
  - **Typography Alignment**: Left-aligned white text (`#ffffff`) sits on top of the image. The label turns light, and the strike-through bar remains visible.
  - **Stacked Mobile Actions**: Buttons stack vertically on top of the image container with clean sizing (`48px` minimum height, white primary button, semi-transparent bordered secondary button). The badge is hidden to maximize clarity.

---

## 2. Updated Files

- **[index.html](file:///c:/Users/chitr/Downloads/my%20websites/interiror%20designing%20website/index.html)**: Cleaned up the static markup, modified hero h1 to class `hero-title` with line breaks and span wrapper `strike-word`, changed image class to `hero-image`, and added class `hero-trust` to the trust line.
- **[style.css](file:///c:/Users/chitr/Downloads/my%20websites/interiror%20designing%20website/style.css)**: Implemented `.hero-title` and `.strike-word` styles, replaced `.hero-image-wrapper` with `.hero-image` using aspect ratios instead of fixed/random heights, and overhauled responsive queries for mobile hero (luxury background image layout) & compact mobile navbar.
- **[design.md](file:///c:/Users/chitr/Downloads/my%20websites/interiror%20designing%20website/design.md)** and **[homepage_structure.md](file:///c:/Users/chitr/Downloads/my%20websites/interiror%20designing%20website/homepage_structure.md)**: Updated design systems and structure rules to align with the new tabbed layout specifications.

---

## 3. Responsive Breakpoints

- **Desktop (min-width: 1025px)**: 2-column hero layout with `4/5` cover photo, 3-column gallery grid, featured cover image at 16:9 ratio, and large offset margins.
- **Tablet (max-width: 1024px)**: Hero preserves 2-column layout down to 768px with proportional image scaling, and general section padding reduces to `85px`.
- **Mobile Breakpoint (max-width: 768px)**:
  - **Navbar / Header**: Height is locked to `66px`, logo scales down to `16px`, and hamburger button is sized to `36px` by `36px`.
  - **Hero Layout**: Luxury background layout where the cover image spans full background. Text turns white and aligns on top of the image overlay. Heading size is `42px - 56px`, and top padding is `90px` with vertical centering (`align-items: flex-end`).
  - **Actions**: Hero buttons display stacked vertically on top of the background with a `48px` minimum height, white primary background, and high contrast styling.
  - **Services Section**: Swaps from 3 columns to a clean 2-column grid of compact cards with padding at `18px 14px`, headers at `18px`, and icons at `28px` by `28px`.
  - **About Section**: Collage snaps to grid mode where the main photo takes full width (`max-height: 280px`), and details stack underneath (`max-height: 160px`).
  - **Why Choose Us (Specialty)**: Transitioned container padding to `56px 20px` and cards stack vertically with compact gutters.
  - **Lightbox Modal**: Restricts image scale boundary limits and reduces arrow buttons to `42px` to prevent cropping on viewports.
- **Medium Mobile Breakpoint (max-width: 600px)**:
  - **Services Section**: Transitions into a horizontal swipe gallery (`display: flex; overflow-x: auto;`) with cards sized to `72%` width of the screen to prevent narrow vertical boxes.
- **Small Mobile Breakpoint (max-width: 430px)**:
  - **Hero Layout**: Background spans screen with a minimum height of `100svh - 64px`. Heading scales to `38px - 48px`, padding reduces to `82px 18px 34px`.
  - **Actions**: Buttons scale down to a compact `46px` height with a `12.5px` font size.
  - **Services Section**: Cards shrink further with padding at `16px 12px`, headers at `16px`, descriptions at `12px`, and icons scaled to `24px` by `24px`.
  - **Other Elements**: Carousels and slides are height-constrained to `300px` (with images at `220px`), and About collage detail cards align in a single-column layout for visual purity.
