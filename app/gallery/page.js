'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Import ScrollReveal dynamically to prevent SSR issues
const ScrollReveal = dynamic(
  () => import('../components/ScrollReveal'),
  { ssr: false }
);

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // All gallery images with categories
  const allImages = [
    { src: "/gallery/img1.jpg"},
    { src: "/gallery/img2.jpg"},
    { src: "/gallery/img3.jpg"},
    { src: "/gallery/img4.jpg"}
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'portraits', name: 'Portraits' },
    { id: 'projects', name: 'Projects' },
    { id: 'design', name: 'Design' }
  ];

  const filteredImages = activeFilter === 'all' 
    ? allImages 
    : allImages.filter(img => img.category === activeFilter);

  const openLightbox = (image) => {
    setCurrentImage(image);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.src === currentImage.src);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setCurrentImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.src === currentImage.src);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentImage(filteredImages[prevIndex]);
  };

  useEffect(() => {
    // Simulate loading for smoother animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isLightboxOpen) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, currentImage]);

  return (
    <main className="phantom-gradient min-h-screen">
      <ScrollReveal>
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <Link href="/" className="flex items-center text-white hover:text-persona-red transition-colors duration-300">
              <i className="fas fa-arrow-left mr-2"></i>
              <span className="font-royal text-xl">Back to Home</span>
            </Link>
            <h1 className="font-royal text-3xl md:text-4xl lg:text-5xl font-black text-center text-white text-shadow-glow">
              <span className="text-persona-red">Gallery</span>
            </h1>
            <div className="w-12"></div> {/* Empty div for flex alignment */}
          </div>

          {/* Filter Bar */}
          <div className="flex justify-center mb-8">
            <div className="persona-card p-2 rounded-full flex space-x-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-4 py-2 rounded-full ${
                    activeFilter === category.id 
                    ? 'bg-persona-red text-white' 
                    : 'text-gray-300 hover:text-white'
                  } transition-colors duration-300`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className={`gallery-item persona-card rounded-xl overflow-hidden hover-lift group cursor-pointer transition-all duration-500 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => openLightbox(image)}
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg mb-2">{image.title}</h3>
                      <p className="text-gray-300 text-sm capitalize">{image.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <i className="fas fa-image text-4xl text-persona-red mb-4"></i>
              <p className="text-white text-lg">No images found in this category</p>
            </div>
          )}
        </div>

        {/* Lightbox */}
        {isLightboxOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center p-4">
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-persona-red text-2xl z-10"
              aria-label="Close lightbox"
            >
              <i className="fas fa-times"></i>
            </button>
            
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-persona-red text-4xl z-10"
              aria-label="Previous image"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            
            <div className="relative max-w-4xl max-h-[80vh] mx-auto">
              <img 
                src={currentImage?.src} 
                alt={currentImage?.alt}
                className="max-w-full max-h-[80vh] mx-auto object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-4">
                <h3 className="text-white font-bold text-xl">{currentImage?.title}</h3>
                <p className="text-gray-300 capitalize">{currentImage?.category}</p>
              </div>
            </div>
            
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-persona-red text-4xl z-10"
              aria-label="Next image"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-2">
                {filteredImages.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setCurrentImage(img)}
                    className={`w-2 h-2 rounded-full ${currentImage?.src === img.src ? 'bg-persona-red' : 'bg-white opacity-50'}`}
                    aria-label={`Go to image ${i+1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        )}
      </ScrollReveal>
    </main>
  );
}
