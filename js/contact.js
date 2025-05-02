document.addEventListener('DOMContentLoaded', function() {
  // Contact form validation and submission
  const contactForm = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Validate form
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();
      
      if (!name || !email || !subject || !message) {
        formMessage.textContent = 'Please fill in all required fields.';
        formMessage.className = 'error';
        formMessage.style.display = 'block';
        return;
      }
      
      // Simple email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        formMessage.textContent = 'Please enter a valid email address.';
        formMessage.className = 'error';
        formMessage.style.display = 'block';
        return;
      }
      
      // In a real application, you would send the form data to a server
      // For now, we'll just simulate a successful submission
      
      // Show success message
      formMessage.textContent = 'Thank you! Your message has been sent successfully.';
      formMessage.className = 'success';
      formMessage.style.display = 'block';
      
      // Clear form
      contactForm.reset();
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        formMessage.style.display = 'none';
      }, 5000);
    });
  }
  
  // FAQ accordion functionality
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      // Toggle active class on clicked question
      this.classList.toggle('active');
      
      // Close other open FAQs (optional - for accordion style)
      faqQuestions.forEach(item => {
        if (item !== this) {
          item.classList.remove('active');
        }
      });
    });
  });
  
  // Add subtle animations to form fields on focus
  const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea, .contact-form select');
  
  formInputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.style.boxShadow = '0 0 0 3px rgba(114, 94, 84, 0.1)';
    });
    
    input.addEventListener('blur', function() {
      this.style.boxShadow = 'none';
    });
  });
  
  // Social icon hover effects
  const socialIcons = document.querySelectorAll('.social-icon');
  
  socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
    });
    
    icon.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
});