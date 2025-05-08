// Mobile menu toggle with fade animation
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
  if (navMenu.classList.contains("hidden")) {
    navMenu.classList.remove("hidden");
    navMenu.classList.add("show");
  } else {
    navMenu.classList.add("hidden");
    navMenu.classList.remove("show");
  }
});

// Scroll animation using Intersection Observer
document.addEventListener("DOMContentLoaded", () => {
  const scrollElements = document.querySelectorAll(".scroll-animate");

  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
  };

  const displayScrollElement = (element) => {
    element.classList.add("visible");
  };

  const hideScrollElement = (element) => {
    element.classList.remove("visible");
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.25)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
    });
  };

  window.addEventListener("scroll", handleScrollAnimation);

  // Trigger animation check on load
  handleScrollAnimation();
});

// Simple JavaScript for FAQ toggle functionality
document.querySelectorAll('.faq-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    const icon = button.querySelector('svg');
    
    // Toggle content visibility
    content.classList.toggle('hidden');
    
    // Rotate icon
    icon.classList.toggle('rotate-180');
    
    // Close other open FAQs
    document.querySelectorAll('.faq-content').forEach(item => {
      if (item !== content && !item.classList.contains('hidden')) {
        item.classList.add('hidden');
        item.previousElementSibling.querySelector('svg').classList.remove('rotate-180');
      }
    });
  });
});

// Additional scroll animation for elements
document.addEventListener('DOMContentLoaded', function() {
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementPosition < windowHeight - 100) {
        element.classList.add('animated');
      }
    });
  };

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Run once on load
});
