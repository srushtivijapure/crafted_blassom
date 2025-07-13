document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuButton = document.createElement('button');
  mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
  mobileMenuButton.classList.add('mobile-menu-button');
  
  const nav = document.querySelector('nav');
  nav.parentNode.insertBefore(mobileMenuButton, nav);
  
  mobileMenuButton.addEventListener('click', function() {
    nav.classList.toggle('mobile-menu-open');
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (nav.classList.contains('mobile-menu-open')) {
          nav.classList.remove('mobile-menu-open');
        }
      }
    });
  });

  // Product card animations
  const productCards = document.querySelectorAll('.product-card');
  productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px)';
      this.style.boxShadow = '0 15px 20px rgba(0,0,0,0.15)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.boxShadow = '0 10px 15px rgba(0,0,0,0.1)';
    });
  });

  // WhatsApp button hover effects
  const whatsappButtons = document.querySelectorAll('.whatsapp-button');
  whatsappButtons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-3px)';
      this.style.boxShadow = '0 6px 12px rgba(0,0,0,0.15)';
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
    });
  });
});