// Fade-in animation for sections when scrolling
document.addEventListener('DOMContentLoaded', function() {
  // Elements to animate
  const fadeElements = document.querySelectorAll('.fade-in');
  
  // Function to check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
    );
  }
  
  // Function to handle scroll animation
  function handleScrollAnimation() {
    fadeElements.forEach(element => {
      if (isInViewport(element)) {
        element.classList.add('visible');
      }
    });
  }
  
  // Initial check on page load
  handleScrollAnimation();
  
  // Check on scroll
  window.addEventListener('scroll', handleScrollAnimation);
  
  // Pet card hover effects
  const petCards = document.querySelectorAll('.pet-card');
  
  petCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      const petType = this.getAttribute('data-pet');
      // You could add more complex animations here if needed
    });
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for header height
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Header scroll effect
  const header = document.querySelector('header');
  let lastScrollY = window.scrollY;
  
  function handleHeaderOnScroll() {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 100) {
      header.style.boxShadow = 'var(--box-shadow-lg)';
    } else {
      header.style.boxShadow = 'var(--box-shadow-md)';
    }
    
    lastScrollY = currentScrollY;
  }
  
  window.addEventListener('scroll', handleHeaderOnScroll);
  
  // Newsletter form submission effect
  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterMessage = document.getElementById('newsletter-message');
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value.trim();
      
      if (email) {
        // In a real application, you would send this data to a server
        newsletterMessage.textContent = "Thank you for subscribing!";
        newsletterMessage.style.color = 'var(--success-color)';
        emailInput.value = '';
        
        // Simulate success with animation
        newsletterMessage.style.animation = 'fadeInUp 0.5s ease forwards';
        
        // Reset animation after some time
        setTimeout(() => {
          newsletterMessage.style.animation = '';
        }, 3000);
      }
    });
  }
});