'use client';
import React, { useEffect, useRef } from 'react';
import ScrollRevealLib from 'scrollreveal';

const ScrollReveal = ({ children, className, ...props }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    // Check if window is defined (client-side only)
    if (typeof window === 'undefined') return;
    
    // Add a delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const sr = ScrollRevealLib({
        distance: '60px',
        duration: 1500,
        delay: 200,
        reset: false,
        mobile: true,
        useDelay: 'always',
        viewFactor: 0.1
      });

    sr.reveal('.section-title', {
      delay: 100,
      distance: '30px',
      origin: 'bottom',
      opacity: 0
    });

    sr.reveal('.section-content', {
      delay: 200,
      distance: '30px',
      origin: 'bottom',
      opacity: 0,
      interval: 100
    });

    sr.reveal('.animate-slide-in-left', {
      origin: 'left',
      delay: 100,
      distance: '50px',
      opacity: 0
    });

    sr.reveal('.animate-slide-in-right', {
      origin: 'right',
      delay: 200,
      distance: '50px',
      opacity: 0
    });

    sr.reveal('.animate-fade-in', {
      opacity: 0,
      scale: 0.9,
      delay: 300
    });

    // Parallax effect for floating elements
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      
      document.querySelectorAll('.animate-float').forEach((element, index) => {
        if (!element) return;
        const speed = 0.5 + (index * 0.2);
        element.style.transform = `translateY(${rate * speed}px)`;
      });

      // Custom scrollbar effect
      const scrollIndicator = document.querySelector('.scroll-indicator');
      if (scrollIndicator) {
        const docHeight = document.documentElement.scrollHeight;
        const winHeight = window.innerHeight;
        if (docHeight > winHeight) {
          const scrollPercent = scrolled / (docHeight - winHeight);
          const containerHeight = document.getElementById('custom-scrollbar-container')?.clientHeight || 0;
          const indicatorPosition = scrollPercent * containerHeight;
          
          scrollIndicator.style.top = `${indicatorPosition}px`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Add hover effects to buttons
    document.querySelectorAll('.royal-button').forEach(button => {
      if (!button) return;
      button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-3px)';
      });
      
      button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
      });
    });

    // Handle hover for persona-card elements
    document.querySelectorAll('.persona-card').forEach(card => {
      if (!card) return;
      card.addEventListener('mouseenter', () => {
        card.classList.add('hover-active');
      });
      
      card.addEventListener('mouseleave', () => {
        card.classList.remove('hover-active');
      });
    });
    
    // Return cleanup function for this timer
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    }, 500); // Wait 500ms for DOM to be ready
    
    // Return cleanup function for the entire useEffect
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div ref={elementRef} className={className} {...props}>
      {children}
    </div>
  );
};

export default ScrollReveal;
