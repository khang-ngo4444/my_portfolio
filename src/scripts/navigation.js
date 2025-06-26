// Navigation functionality for non-React parts of the application
export const initNavigation = () => {
  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
      mobileMenu.classList.toggle('active');
    }
  };

  // Update active navigation item based on scroll position
  const updateActiveNavItem = () => {
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-item');
    
    let currentSection = '';
    const scrollPosition = window.pageYOffset + 150;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });
    
    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('data-section') === currentSection || 
          item.getAttribute('href') === `#${currentSection}`) {
        item.classList.add('active');
      }
    });
  };

  // Update header styles when scrolling
  const updateHeaderOnScroll = () => {
    const header = document.querySelector('.nav-header');
    if (header) {
      if (window.pageYOffset > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  };

  // Add event listeners
  window.addEventListener('scroll', () => {
    updateActiveNavItem();
    updateHeaderOnScroll();
  });

  // Initialize
  updateActiveNavItem();
  updateHeaderOnScroll();

  // Add click handlers to navigation items
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = item.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
      
      // Close mobile menu if open
      const mobileMenu = document.getElementById('mobile-menu');
      if (mobileMenu) {
        mobileMenu.classList.remove('active');
      }
    });
  });

  // Expose toggle function
  return { toggleMobileMenu };
};

export default initNavigation;
