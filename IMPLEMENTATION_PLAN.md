# Portfolio Redesign & Lightbox Integration

The current portfolio section has overlapping images, broken cropping, room categories mixed up as separate projects, and is difficult to browse. This plan details the redesign to transform it into a premium, tabbed case study gallery for the two primary projects: *The Castleton Mansion* and *The Castleton Apartments*. It also introduces a dynamic lightbox modal for viewing high-quality interior images.

## User Review Required

> [!IMPORTANT]
> The portfolio page will now load *The Castleton Mansion* by default. Users will be able to switch to *The Castleton Apartments* using the new high-contrast filter tabs at the top.
> 
> All images will be loaded dynamically from JavaScript array stores to make it extremely easy to add or replace images in the future without writing HTML boilerplate.

## Proposed Changes

### Portfolio Section Components

#### [MODIFY] [index.html](file:///c:/Users/chitr/Downloads/my%20websites/interiror%20designing%20website/index.html)
- Clean up the existing static case-study elements in the `#portfolio` section.
- Add the tabs container at the top of the `#portfolio` section:
  ```html
  <div class="project-tabs">
    <button class="project-tab active" data-project="mansion">The Castleton Mansion</button>
    <button class="project-tab" data-project="apartments">The Castleton Apartments</button>
  </div>
  ```
- Add the project panel target container:
  ```html
  <div id="portfolio-project-panel" class="project-panel active"></div>
  ```
- Insert the Lightbox modal HTML block right before the `</body>` tag:
  ```html
  <div id="lightboxModal" class="lightbox-modal" aria-hidden="true" role="dialog">
    <button class="lightbox-close" id="lightboxClose" aria-label="Close Gallery">&times;</button>
    <button class="lightbox-nav prev" id="lightboxPrev" aria-label="Previous Photo">&#10216;</button>
    <div class="lightbox-content">
      <img id="lightboxImg" src="" alt="">
      <div class="lightbox-caption" id="lightboxCaption"></div>
    </div>
    <button class="lightbox-nav next" id="lightboxNext" aria-label="Next Photo">&#10217;</button>
  </div>
  ```

#### [MODIFY] [script.js](file:///c:/Users/chitr/Downloads/my%20websites/interiror%20designing%20website/script.js)
- Define `mansionGallery` and `apartmentsGallery` arrays containing high-quality Unsplash image configurations for the requested space categories:
  - Mansion: Lounge Area, Living Room, Bedroom, Kitchen, Dining Space, Balcony / Veranda, Bathroom, Lighting Detail, Furniture Detail, Entrance / Passage.
  - Apartments: Living Area, Kitchen, Bedroom, Dining Area, Wardrobe / Storage, Bathroom, Ceiling / Lighting, Furniture Detail, Passage / Entrance, Balcony / Utility.
- Add tab click listeners to toggle active states and render the chosen project.
- Implement the rendering function `renderProject(projectKey)`:
  - Clear out the container.
  - Build and inject the Intro Card (Title, Category, Description, Pill Tags).
  - Build and inject the Featured Wide Image (16:9 aspect-ratio) with its bottom-left category label.
  - Build and inject the Gallery Grid (3-column layout) of the remaining images with individual category label overlays.
  - Add the "View Full Gallery" button at the bottom of the grid.
- Implement the Lightbox logic:
  - Track current gallery array and active photo index.
  - Add event listeners to all portfolio images (featured + grid) and the "View Full Gallery" button to launch the lightbox.
  - Implement next, previous, wrap-around logic, keypress listeners (Escape, Left Arrow, Right Arrow), and closing by clicking outside the image.
  - Prevent page scrolling while lightbox is active.

#### [MODIFY] [style.css](file:///c:/Users/chitr/Downloads/my%20websites/interiror%20designing%20website/style.css)
- Clean up old layout classes like `.project-case-studies`, `.project-case-card`, `.project-gallery`, `.project-main-image`, `.project-side-images`, `.project-small-image`.
- Add scroll margin on `#portfolio`:
  ```css
  #portfolio {
    scroll-margin-top: 110px;
  }
  ```
- Implement styling for tabs, active tab button, intro card layout with grid system, space tag pills, featured image container, and gallery grids.
- Implement Lightbox styles:
  - Dark semi-transparent overlay backdrop covering the viewport (`position: fixed`).
  - Flex/Grid centering for the container.
  - Smooth animation transitions.
  - Big close and navigation buttons positioned comfortably for both mobile and desktop.

---

## Verification Plan

### Manual Verification
- Test tabs to ensure they swap the complete project data (Mansion and Apartments) seamlessly.
- Verify desktop 3-column, tablet 2-column, and mobile 1-column layouts for correct responsiveness.
- Check aspect ratios: Featured image should be 16:9, and grid items should be 4:3.
- Test the lightbox modal functionality: opening by clicking images or "View Full Gallery", navigating using mouse clicks/keyboard arrows, and closing.
- Ensure the header does not cover the portfolio title when navigating via the anchor link.
