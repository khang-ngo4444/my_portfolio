'use client';
import { useState, useEffect, useRef } from 'react';

export default function SectionTransition({ 
  children, 
  id,
  className = '',
  animationType = 'fade-up',
  delay = 0,
  threshold = 0.1
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setTimeout(() => {
              setIsVisible(true);
              setHasAnimated(true);
            }, delay);
          }
        });
      },
      {
        threshold,
        rootMargin: '50px 0px -100px 0px'
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
  }, [delay, threshold, hasAnimated]);

  const getAnimationClass = () => {
    switch (animationType) {
      case 'fade-up':
        return isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10';
      case 'slide-left':
        return isVisible ? 'animate-slide-in-left' : 'opacity-0 -translate-x-10';
      case 'slide-right':
        return isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-10';
      case 'bounce':
        return isVisible ? 'animate-bounce-in' : 'opacity-0 scale-90';
      case 'rotate':
        return isVisible ? 'animate-rotate-in' : 'opacity-0 rotate-12';
      case 'elastic':
        return isVisible ? 'animate-elastic' : 'opacity-0 scale-50';
      default:
        return isVisible ? 'animate-fade-in' : 'opacity-0';
    }
  };

  return (
    <div
      ref={sectionRef}
      id={id}
      className={`transition-all duration-1000 ease-out ${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
}
