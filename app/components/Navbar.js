'use client';
import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Add initial load animation
    setTimeout(() => setIsLoaded(true), 100);

    const handleScroll = () => {
      // Update header on scroll
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Improved scroll spy functionality
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      
      // Get current scroll position with offset for better section detection
      const scrollPosition = window.pageYOffset + 150;
      
      // Find the section that occupies the most space in the viewport
      for (const section of sections) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          current = section.getAttribute('id');
          break;
        }
      }
      
      // Special case for last section (contact)
      if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 100) {
        const lastSection = sections[sections.length - 1];
        // Fix: Check if lastSection exists before accessing getAttribute
        if (lastSection) {
          current = lastSection.getAttribute('id');
        }
      }
      
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  // Handle window resize for responsive navigation
  useEffect(() => {
    const handleResize = () => {
      // Close mobile menu on larger screens
      if (window.innerWidth > 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const targetSection = document.getElementById(sectionId);
    
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`nav-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="logo">K's Site</div>
          
          {/* Desktop Navigation */}
          <div className="nav-menu hidden md:flex space-x-4 lg:space-x-8">
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')} 
               className={`nav-item ${activeSection === 'home' ? 'active' : ''}`}>Home</a>
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')}
               className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}>About</a>
            <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}
               className={`nav-item ${activeSection === 'skills' ? 'active' : ''}`}>Skills</a>
            <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}
               className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`}>Projects</a>
            <a href="#gallery" onClick={(e) => handleNavClick(e, 'gallery')}
               className={`nav-item ${activeSection === 'gallery' ? 'active' : ''}`}>Gallery</a>
            <a href="#experience" onClick={(e) => handleNavClick(e, 'experience')}
               className={`nav-item ${activeSection === 'experience' ? 'active' : ''}`}>Experience</a>
            <a href="#education" onClick={(e) => handleNavClick(e, 'education')}
               className={`nav-item ${activeSection === 'education' ? 'active' : ''}`}>Education</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}
               className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a>
          </div>
          
          <button 
            className="mobile-menu-toggle md:hidden" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        
        {/* Mobile Navigation with improved accessibility */}
        <div className={`nav-menu md:hidden ${mobileMenuOpen ? 'active' : ''}`} role="navigation">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} 
             className={`nav-item ${activeSection === 'home' ? 'active' : ''}`}>Home</a>
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')}
             className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}>About</a>
          <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}
             className={`nav-item ${activeSection === 'skills' ? 'active' : ''}`}>Skills</a>
          <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}
             className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`}>Projects</a>
          <a href="#gallery" onClick={(e) => handleNavClick(e, 'gallery')}
             className={`nav-item ${activeSection === 'gallery' ? 'active' : ''}`}>Gallery</a>
          <a href="#experience" onClick={(e) => handleNavClick(e, 'experience')}
             className={`nav-item ${activeSection === 'experience' ? 'active' : ''}`}>Experience</a>
          <a href="#education" onClick={(e) => handleNavClick(e, 'education')}
             className={`nav-item ${activeSection === 'education' ? 'active' : ''}`}>Education</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}
             className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a>
        </div>
      </div>
    </nav>
  );
}
