'use client';
import React, { useState, useEffect, useRef } from 'react';
import SkeletonLoader from './SkeletonLoader';

export default function LazySection({ 
  children, 
  skeletonType = 'card', 
  skeletonCount = 1,
  loadingDelay = 500,
  className = '',
  staggerDelay = 100,
  enableStagger = false,
  ...props 
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setIsAnimating(true);
            
            // Add a delay to simulate loading and show skeleton
            setTimeout(() => {
              setIsLoaded(true);
              setTimeout(() => setIsAnimating(false), 600);
            }, loadingDelay);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '50px 0px', // Start loading 50px before the element enters viewport
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [loadingDelay]);

  // Apply stagger animation to child elements
  useEffect(() => {
    if (isLoaded && enableStagger && sectionRef.current) {
      const children = sectionRef.current.querySelectorAll('.stagger-item');
      children.forEach((child, index) => {
        child.style.animationDelay = `${index * staggerDelay}ms`;
        child.classList.add('animate-fade-in-up');
      });
    }
  }, [isLoaded, enableStagger, staggerDelay]);

  return (
    <div 
      ref={sectionRef} 
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className} ${isAnimating ? 'animate-pulse-subtle' : ''}`}
      {...props}
    >
      {isVisible && !isLoaded ? (
        <div className="section-content">
          {skeletonType === 'grid' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <SkeletonLoader type="skill" count={skeletonCount} />
            </div>
          ) : skeletonType === 'projects' ? (
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              <SkeletonLoader type="project" count={skeletonCount} />
            </div>
          ) : skeletonType === 'about-grid' ? (
            <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
              <SkeletonLoader type="card" count={1} />
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 sm:gap-6">
                <SkeletonLoader type="skill" count={4} />
              </div>
            </div>
          ) : skeletonType === 'skills-grid' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <SkeletonLoader type="skill" count={skeletonCount} />
            </div>
          ) : (
            <SkeletonLoader type={skeletonType} count={skeletonCount} />
          )}
        </div>
      ) : isLoaded ? (
        <div className="animate-fade-in-up">
          {children}
        </div>
      ) : null}
    </div>
  );
}
