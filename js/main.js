document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle functionality (for future implementation)
  
  // Interactive image galleries (for future implementation)
  
  // Form validation
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      let valid = true;
      const requiredFields = form.querySelectorAll('[required]');
      
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          valid = false;
          field.classList.add('error');
          
          // Create error message if it doesn't exist
          let errorMsg = field.nextElementSibling;
          if (!errorMsg || !errorMsg.classList.contains('error-message')) {
            errorMsg = document.createElement('div');
            errorMsg.className = 'error-message';
            errorMsg.textContent = 'This field is required';
            field.insertAdjacentElement('afterend', errorMsg);
          }
        } else {
          field.classList.remove('error');
          
          // Remove error message if it exists
          const errorMsg = field.nextElementSibling;
          if (errorMsg && errorMsg.classList.contains('error-message')) {
            errorMsg.remove();
          }
        }
      });
      
      // Validate email format for email fields
      const emailFields = form.querySelectorAll('input[type="email"]');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      emailFields.forEach(field => {
        if (field.value.trim() && !emailRegex.test(field.value.trim())) {
          valid = false;
          field.classList.add('error');
          
          // Create error message if it doesn't exist
          let errorMsg = field.nextElementSibling;
          if (!errorMsg || !errorMsg.classList.contains('error-message')) {
            errorMsg = document.createElement('div');
            errorMsg.className = 'error-message';
            errorMsg.textContent = 'Please enter a valid email address';
            field.insertAdjacentElement('afterend', errorMsg);
          } else {
            errorMsg.textContent = 'Please enter a valid email address';
          }
        }
      });
      
      if (!valid) {
        e.preventDefault();
      }
    });
  });
  
  // Theme preference detection (light/dark mode toggle could be added in future)
  
  // Lazy loading for images (for future implementation)
  
  // Handle pet care calculator (for future implementation)
});