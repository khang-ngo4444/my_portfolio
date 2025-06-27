'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function AllImages({ isOpen, onClose, images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!isOpen) return null;

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const closeAllImages = () => {
    setSelectedImage(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-black bg-opacity-90 flex items-center justify-center p-4">
      {/* Close button */}
      <button 
        onClick={closeAllImages}
        className="absolute top-4 right-4 z-[10000] text-white hover:text-persona-red transition-colors duration-300"
      >
        <i className="fas fa-times text-3xl"></i>
      </button>

      {/* Gallery Grid */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-royal text-4xl font-black text-white mb-4">
            COMPLETE <span className="text-persona-red">GALLERY</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-persona-red to-persona-white mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-[70vh] overflow-y-auto custom-scrollbar">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="gallery-item persona-card rounded-xl overflow-hidden hover-lift cursor-pointer group"
              onClick={() => handleImageClick(image)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-2 left-2 right-2">
                    <h3 className="text-white font-bold text-sm">{image.title}</h3>
                  </div>
                </div>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <i className="fas fa-expand-alt text-white text-lg"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Direct link to full gallery page */}
        <div className="text-center mt-6">
          <Link href="/gallery" passHref legacyBehavior>
            <a 
              onClick={closeAllImages}
              className="royal-button px-6 py-3 rounded-full text-lg inline-flex items-center hover:transform-none"
            >
              <i className="fas fa-images mr-2"></i>
              VIEW FULL GALLERY PAGE
            </a>
          </Link>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[10000] bg-black bg-opacity-95 flex items-center justify-center p-4">
          <button 
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-persona-red transition-colors duration-300"
          >
            <i className="fas fa-times text-3xl"></i>
          </button>
          
          <div className="max-w-4xl max-h-[90vh] flex flex-col items-center">
            <img 
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="mt-4 text-center">
              <h3 className="text-white font-bold text-2xl mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #C2185B, #FF5722);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #FF5722, #C2185B);
        }
      `}</style>
    </div>
  );
}
