document.addEventListener('DOMContentLoaded', function() {
  // Pet filter functionality
  const filterButtons = document.querySelectorAll('.filter-btn');
  const petGuideItems = document.querySelectorAll('.pet-guide-item');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      const filter = this.getAttribute('data-filter');
      
      // Filter pet guide items
      petGuideItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
          // Add a small animation
          item.style.animation = 'fadeIn 0.5s ease forwards';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
  
  // Smooth scroll to pet guides when clicking on links
  const petLinks = document.querySelectorAll('a[href^="#"]');
  
  petLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      
      if (targetId.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          // First make sure the category is visible
          const category = targetElement.getAttribute('data-category');
          
          // Find and click the corresponding filter button
          const filterBtn = document.querySelector(`.filter-btn[data-filter="${category}"]`);
          if (filterBtn && !filterBtn.classList.contains('active')) {
            filterBtn.click();
          }
          
          // Then scroll to the element
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // Check URL hash on page load to scroll to specific pet section
  window.addEventListener('load', function() {
    if (window.location.hash) {
      const targetId = window.location.hash;
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Find and click the corresponding filter button
        const category = targetElement.getAttribute('data-category');
        const filterBtn = document.querySelector(`.filter-btn[data-filter="${category}"]`);
        
        if (filterBtn) {
          filterBtn.click();
          
          // Small delay to ensure filters are applied
          setTimeout(() => {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: 'smooth'
            });
          }, 100);
        }
      }
    }
  });
  
  // Add hover animations to pet guide items
  petGuideItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.boxShadow = 'var(--box-shadow-lg)';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = 'var(--box-shadow-md)';
    });
  });
});

// Define the fadeIn animation
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);