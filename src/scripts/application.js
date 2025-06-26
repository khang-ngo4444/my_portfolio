import '../css/style.css'
import initScrollReveal from './scroll-reveal';

// Main application initialization
document.addEventListener('DOMContentLoaded', () => {
    // Initialize navigation functionality
    initializeNavigation();
    
    // Initialize animations and visual effects
    initializeScrollAnimations();
    initializeButtonEffects();
    initializeScrollEffects();
    
    // Set initial states
    updateActiveNavItem();
    updateHeaderOnScroll();
});

initScrollReveal();
