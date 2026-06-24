document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Shrink Header on Scroll
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Toggle
  const navToggle = document.getElementById('navToggle');
  const navLinksList = document.getElementById('navLinks');
  
  if (navToggle && navLinksList) {
    navToggle.addEventListener('click', () => {
      navLinksList.classList.toggle('active');
    });

    // Close mobile menu when links are clicked
    const links = navLinksList.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinksList.classList.remove('active');
      });
    });
  }

  // 3. Scroll Reveal Animation (Intersection Observer)
  const fadeElements = document.querySelectorAll('.fade-up');
  
  const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  fadeElements.forEach(el => revealOnScroll.observe(el));

  // 4. Portfolio System & Lightbox Modal

  // Image arrays for Mansion and Apartments
  const mansionGallery = [
    {
      src: "photos/castletonmansion7.jpg",
      label: "Lounge Area",
      alt: "The Castleton Mansion premium lounge interior styling"
    },
    {
      src: "photos/castletonmansion8.jpg",
      label: "Living Room",
      alt: "The Castleton Mansion luxury living room space planning"
    },
    {
      src: "photos/castletonmansion9.jpg",
      label: "Bedroom",
      alt: "The Castleton Mansion master bedroom with warm lighting"
    },
    {
      src: "photos/castletonmansionlounge.jpg",
      label: "Kitchen",
      alt: "The Castleton Mansion bespoke culinary kitchen design"
    },
    {
      src: "photos/castletonmansionlivingroom.jpg",
      label: "Dining Space",
      alt: "The Castleton Mansion grand dining area setup"
    },
    {
      src: "photos/castletonmansionphoto4.jpg",
      label: "Balcony / Veranda",
      alt: "The Castleton Mansion veranda sitting layout"
    },
    {
      src: "photos/casttleonmansion6.jpg",
      label: "Bathroom",
      alt: "The Castleton Mansion high-end marble bathroom"
    },
    {
      src: "photos/casttletonmansion10.jpg",
      label: "Lighting Detail",
      alt: "The Castleton Mansion custom ceiling light fixture details"
    },
    {
      src: "photos/castleonmansionchair.jpg",
      label: "Furniture Detail",
      alt: "The Castleton Mansion minimalist bespoke chair and side table detail"
    }
  ];

  const apartmentsGallery = [
    {
      src: "photos apartment/apartment1.jpg",
      label: "Living Area",
      alt: "The Castleton Apartments interior design photo 1"
    },
    {
      src: "photos apartment/apartment2.jpg",
      label: "Kitchen",
      alt: "The Castleton Apartments interior design photo 2"
    },
    {
      src: "photos apartment/apartment3.jpg",
      label: "Bedroom",
      alt: "The Castleton Apartments interior design photo 3"
    },
    {
      src: "photos apartment/apartment4.jpg",
      label: "Dining Area",
      alt: "The Castleton Apartments interior design photo 4"
    },
    {
      src: "photos apartment/apartment5.jpg",
      label: "Wardrobe / Storage",
      alt: "The Castleton Apartments interior design photo 5"
    },
    {
      src: "photos apartment/apartment6.jpg",
      label: "Bathroom",
      alt: "The Castleton Apartments interior design photo 6"
    },
    {
      src: "photos apartment/apartment7.jpg",
      label: "Ceiling / Lighting",
      alt: "The Castleton Apartments interior design photo 7"
    },
    {
      src: "photos apartment/apartment8.jpg",
      label: "Furniture Detail",
      alt: "The Castleton Apartments interior design photo 8"
    },
    {
      src: "photos apartment/apartment9.jpg",
      label: "Passage / Entrance",
      alt: "The Castleton Apartments interior design photo 9"
    }
  ];

  const projectData = {
    mansion: {
      title: "The Castleton Mansion",
      category: "Premium Hospitality Interior",
      description: "A complete interior styling and space planning project designed for a premium mansion stay experience.",
      tags: ["Lounge Area", "Living Room", "Bedroom", "Kitchen", "Dining Space", "Balcony / Veranda", "Bathroom", "Detail Shots"],
      gallery: mansionGallery
    },
    apartments: {
      title: "The Castleton Apartments",
      category: "Apartment Interior Design",
      description: "Modern apartment interiors planned with comfort, function, storage, and premium finishing.",
      tags: ["Living Area", "Kitchen", "Bedroom", "Dining Area", "Wardrobe / Storage", "Bathroom", "Lighting Details", "Detail Shots"],
      gallery: apartmentsGallery
    }
  };

  const projectPanel = document.getElementById('portfolio-project-panel');
  const projectTabs = document.querySelectorAll('.project-tab');
  
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  let activeProjectKey = 'mansion';
  let activeImageIndex = 0;
  let currentLightboxGallery = [];

  function renderProject(projectKey) {
    if (!projectPanel) return;
    const project = projectData[projectKey];
    if (!project) return;

    // Set class to distinguish project
    projectPanel.className = `project-panel active project-${projectKey} ${projectKey}-gallery ${projectKey === 'apartments' ? 'apartment-gallery' : ''}`;

    // The first image is the featured wide image
    const featuredImage = project.gallery[0];
    // The rest are grid images
    const gridImages = project.gallery.slice(1);

    // Build tags markup
    const tagsHTML = project.tags.map(tag => `<span>${tag}</span>`).join('');

    // Build grid markup
    const gridHTML = gridImages.map((img, idx) => {
      const isMansion = projectKey === 'mansion';
      const isLast = idx === gridImages.length - 1;
      const extraClass = (isMansion && isLast) ? ' mansion-last-image' : '';
      return `
        <div class="project-gallery-item fade-up visible${extraClass}" data-index="${idx + 1}">
          <img src="${img.src}" alt="${img.alt}" loading="lazy">
        </div>
      `;
    }).join('');

    // Set panel HTML
    projectPanel.innerHTML = `
      <div class="project-intro-card fade-up visible">
        <div class="project-intro-top">
          <div>
            <span class="project-category">${project.category}</span>
            <h3>${project.title}</h3>
          </div>
          <p>${project.description}</p>
        </div>
        <div class="project-tags">
          ${tagsHTML}
        </div>
      </div>

      <div class="featured-project-image fade-up visible${projectKey === 'mansion' ? ' mansion-featured-image' : ''}" data-index="0">
        <img src="${featuredImage.src}" alt="${featuredImage.alt}" class="${projectKey === 'mansion' ? 'mansion-main-img' : ''}">
      </div>

      <div class="project-gallery-grid">
        ${gridHTML}
      </div>

      <div style="text-align: center; margin-top: 48px;" class="fade-up visible">
        <button id="viewFullGalleryBtn" class="btn btn-secondary">View Full Gallery</button>
      </div>
    `;

    // Rebind lightboxes and dynamic behaviors
    bindGalleryEvents(projectKey);
  }

  function bindGalleryEvents(projectKey) {
    const project = projectData[projectKey];
    if (!project) return;

    const featuredImgEl = projectPanel.querySelector('.featured-project-image');
    const gridItems = projectPanel.querySelectorAll('.project-gallery-item');
    const viewFullGalleryBtn = projectPanel.querySelector('#viewFullGalleryBtn');

    if (featuredImgEl) {
      featuredImgEl.addEventListener('click', () => {
        openLightbox(project.gallery, 0);
      });
    }

    gridItems.forEach(item => {
      item.addEventListener('click', () => {
        const idx = parseInt(item.getAttribute('data-index'), 10);
        openLightbox(project.gallery, idx);
      });
    });

    if (viewFullGalleryBtn) {
      viewFullGalleryBtn.addEventListener('click', () => {
        openLightbox(project.gallery, 0);
      });
    }
  }

  function openLightbox(galleryArray, index) {
    if (!lightboxModal || !lightboxImg || !lightboxCaption) return;
    currentLightboxGallery = galleryArray;
    activeImageIndex = index;

    updateLightboxContent();

    lightboxModal.classList.add('active');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // prevent page scrolling
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    lightboxModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = ''; // restore scrolling
  }

  function updateLightboxContent() {
    const item = currentLightboxGallery[activeImageIndex];
    if (!item) return;

    lightboxImg.src = item.src;
    lightboxImg.alt = item.alt;
    lightboxCaption.textContent = `${activeImageIndex + 1} / ${currentLightboxGallery.length}`;
  }

  function navigateLightbox(direction) {
    if (currentLightboxGallery.length === 0) return;
    activeImageIndex = (activeImageIndex + direction + currentLightboxGallery.length) % currentLightboxGallery.length;
    updateLightboxContent();
  }

  // Setup lightbox control click handlers
  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }
  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', () => navigateLightbox(-1));
  }
  if (lightboxNext) {
    lightboxNext.addEventListener('click', () => navigateLightbox(1));
  }

  // Close lightbox on modal background click
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        closeLightbox();
      }
    });
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (lightboxModal && lightboxModal.classList.contains('active')) {
      if (e.key === 'ArrowLeft') {
        navigateLightbox(-1);
      } else if (e.key === 'ArrowRight') {
        navigateLightbox(1);
      } else if (e.key === 'Escape') {
        closeLightbox();
      }
    }
  });

  // Project Tabs Click Handler
  projectTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      projectTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const projectKey = tab.getAttribute('data-project');
      activeProjectKey = projectKey;
      renderProject(projectKey);
      
      const portfolioSec = document.getElementById('portfolio');
      if (portfolioSec) {
        const rect = portfolioSec.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        window.scrollTo({
          top: rect.top + scrollTop - 100,
          behavior: 'smooth'
        });
      }
    });
  });

  // Render initial project
  renderProject('mansion');



  // 6. Contact Form Submission
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');

  if (contactForm && formFeedback) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get updated data fields
      const name = document.getElementById('formName').value;
      const phone = document.getElementById('formPhone').value;
      const projectType = document.getElementById('formProjectType').value;
      const message = document.getElementById('formMessage').value;

      // Simple visual check
      if (name && phone && message) {
        // Change submit button state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = 'Sending...';
        submitBtn.disabled = true;

        setTimeout(() => {
          // Success Feedback
          formFeedback.style.display = 'block';
          formFeedback.innerHTML = `Thank you, <strong>${name}</strong>! Your inquiry for a <strong>${projectType}</strong> project has been received. Our team will reach out to you at <strong>${phone}</strong> shortly.`;
          
          // Reset form
          contactForm.reset();
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;

          // Auto scroll to feedback
          formFeedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 1500);
      }
    });
  }



});
