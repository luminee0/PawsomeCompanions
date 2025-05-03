// Blog functionality
document.addEventListener('DOMContentLoaded', function() {
  // Handle category filtering
  const categoryButtons = document.querySelectorAll('.category-btn');
  const blogCards = document.querySelectorAll('.blog-card');
  const featuredPost = document.querySelector('.featured-post');
  
  categoryButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Update active button
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      const category = this.textContent.toLowerCase();
      
      // Show/hide blog posts based on category
      if (category === 'all') {
        blogCards.forEach(card => card.style.display = 'block');
        if (featuredPost) featuredPost.style.display = 'grid';
      } else {
        blogCards.forEach(card => {
          const tags = Array.from(card.querySelectorAll('.blog-tag'))
            .map(tag => tag.textContent.toLowerCase());
          card.style.display = tags.some(tag => tag.includes(category)) ? 'block' : 'none';
        });
        
        if (featuredPost) {
          const featuredTags = Array.from(featuredPost.querySelectorAll('.blog-tag'))
            .map(tag => tag.textContent.toLowerCase());
          featuredPost.style.display = featuredTags.some(tag => tag.includes(category)) ? 'grid' : 'none';
        }
      }
    });
  });

  // Handle Read More buttons
  const readMoreButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
  
  readMoreButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Get the article title
      const articleContainer = this.closest('.blog-card, .featured-post');
      const title = articleContainer.querySelector('h2, h3').textContent;
      
      // Create URL-friendly slug from title
      const slug = title.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      
      // Store article data in sessionStorage
      const articleData = {
        title: title,
        date: articleContainer.querySelector('.blog-meta').children[0].textContent,
        author: articleContainer.querySelector('.blog-meta').children[1].textContent,
        image: articleContainer.querySelector('img').src,
        tags: Array.from(articleContainer.querySelectorAll('.blog-tag'))
          .map(tag => tag.textContent)
      };
      
      sessionStorage.setItem('currentArticle', JSON.stringify(articleData));
      
      // Navigate to the blog post page
      window.location.href = `blog-post.html?post=${slug}`;
    });
  });
});