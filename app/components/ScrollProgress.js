'use client';
import React, { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      
      setScrollProgress(scrolled);
      setIsVisible(winScroll > 100); // Show after scrolling past hero section
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full h-1 z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div 
        className="h-full bg-gradient-to-r from-persona-red to-persona-white transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress}%` }}
      >
        <div className="h-full bg-gradient-to-r from-persona-red to-persona-white animate-pulse"></div>
      </div>
    </div>
  );
}
