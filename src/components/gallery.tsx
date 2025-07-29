import React, { useState } from 'react';

type GalleryProps = {
  title: string;
  images: string[];
};

export const Gallery: React.FC<GalleryProps> = ({ title, images }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="my-10 p-6 max-w-7xl mx-auto">
      <h1 className="mb-8 text-4xl font-bold text-center text-white">{title}</h1>
      
      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-full max-h-full">
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button 
              className="absolute top-4 right-4 bg-transparent text-red-500 rounded-full p-2 shadow-lg"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img, index) => {
          const [loaded, setLoaded] = useState(false);
          const [error, setError] = useState(false);

          return (
            <div key={index} className="group relative">
              {/* Image Container */}
              <div className="relative w-full aspect-square bg-gray-800 rounded-lg overflow-hidden">
                {error ? (
                  <div className="absolute inset-0 bg-red-900/50 flex items-center justify-center text-white p-4">
                    Failed to load image
                  </div>
                ) : (
                  <>
                    {!loaded && (
                      <div className="absolute inset-0 bg-gray-700 animate-pulse"></div>
                    )}
                    <img
                      src={img}
                      alt={`${title} - Image ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                        loaded ? 'opacity-100' : 'opacity-0'
                      } group-hover:opacity-90`}
                      onLoad={() => setLoaded(true)}
                      onError={() => setError(true)}
                      onClick={() => setSelectedImage(img)}
                    />
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};