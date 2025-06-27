'use client';
import React, { useState, useEffect } from 'react';

export default function LoadingScreen({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing');

  useEffect(() => {
    const loadingSteps = [
      { text: 'Initializing', progress: 20 },
      { text: 'Loading Assets', progress: 45 },
      { text: 'Preparing Interface', progress: 70 },
      { text: 'Almost Ready', progress: 90 },
      { text: 'Complete', progress: 100 }
    ];

    let currentStep = 0;
    let mounted = true; // Add mounted flag

    const interval = setInterval(() => {
      if (!mounted) return; // Check if component is still mounted
      
      if (currentStep < loadingSteps.length) {
        setLoadingText(loadingSteps[currentStep].text);
        setLoadingProgress(loadingSteps[currentStep].progress);
        currentStep++;
      } else {
        clearInterval(interval);
        if (mounted) { // Only proceed if still mounted
          setTimeout(() => {
            if (mounted) {
              setIsVisible(false);
              setTimeout(() => {
                if (mounted && onComplete) {
                  onComplete();
                }
              }, 500);
            }
          }, 800);
        }
      }
    }, 600); // Reduced from 800ms to 600ms for faster loading

    // Fallback timeout to ensure loading doesn't get stuck
    const fallbackTimeout = setTimeout(() => {
      if (mounted) {
        clearInterval(interval);
        setIsVisible(false);
        if (onComplete) {
          onComplete();
        }
      }
    }, 4000); // Reduced from 5000ms to 4000ms

    return () => {
      mounted = false; // Set mounted to false on cleanup
      clearInterval(interval);
      clearTimeout(fallbackTimeout);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-500 ${!isVisible ? 'opacity-0' : 'opacity-100'}`}>
      <div className="text-center">
        {/* Logo/Brand */}
        <div className="mb-8 animate-pulse-glow">
          <h1 className="font-royal text-6xl font-black text-white text-shadow-glow mb-2">
            K<span className="text-persona-red">'s</span> Site
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-persona-red to-white mx-auto"></div>
        </div>

        {/* Loading Progress */}
        <div className="w-64 mx-auto mb-6">
          <div className="w-full bg-gray-800 rounded-full h-2 mb-4">
            <div 
              className="bg-gradient-to-r from-persona-red to-white h-2 rounded-full transition-all duration-300"
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
          <p className="text-gray-300 text-lg animate-fade-in-up">
            {loadingText}<span className="loading-dots"></span>
          </p>
        </div>

        {/* Animated Elements */}
        <div className="flex justify-center space-x-4 mt-8">
          <div className="w-3 h-3 bg-persona-red rounded-full animate-bounce animate-delay-100"></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce animate-delay-200"></div>
          <div className="w-3 h-3 bg-persona-red rounded-full animate-bounce animate-delay-300"></div>
        </div>
      </div>
    </div>
  );
}
