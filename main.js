const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// Hero Section Animations
ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".features-grid", {
  ...scrollRevealOption,
  delay: 2500,
});

// Features Section Animations
ScrollReveal().reveal(".features-section .section-header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".feature-card", {
  ...scrollRevealOption,
  delay: 1000,
  interval: 200,
});

// Specifications Section Animations
ScrollReveal().reveal(".specs-section .section-header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".spec-item", {
  ...scrollRevealOption,
  delay: 1000,
  interval: 200,
});

// Gallery Section Animations
ScrollReveal().reveal(".gallery-section .section-header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".gallery-item", {
  ...scrollRevealOption,
  delay: 1000,
  interval: 200,
});

// Pricing Section Animations
ScrollReveal().reveal(".pricing-section .section-header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".pricing-card", {
  ...scrollRevealOption,
  delay: 1000,
  interval: 200,
});

// FAQ Section Animations
ScrollReveal().reveal(".faq-section .section-header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".faq-item", {
  ...scrollRevealOption,
  delay: 1000,
  interval: 200,
});

// Contact Section Animations
ScrollReveal().reveal(".contact-section .section-header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".contact-form", {
  ...scrollRevealOption,
  delay: 1000,
});

// Add hover effect to feature items
const featureItems = document.querySelectorAll('.feature-item');
featureItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.transform = 'translateY(-10px)';
  });
  
  item.addEventListener('mouseleave', () => {
    item.style.transform = 'translateY(0)';
  });
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    const isActive = item.classList.contains('active');
    
    // Close all FAQ items
    faqItems.forEach(faqItem => {
      faqItem.classList.remove('active');
    });
    
    // Open clicked item if it wasn't active
    if (!isActive) {
      item.classList.add('active');
    }
  });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 100) {
    nav.style.background = 'rgba(0, 0, 0, 0.9)';
  } else {
    nav.style.background = 'rgba(0, 0, 0, 0.8)';
  }
});
