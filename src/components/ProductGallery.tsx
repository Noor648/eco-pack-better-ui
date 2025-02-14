import React, { useState, useRef, useEffect } from 'react';

const ProductGallery = ({ images }: { images: string[] }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const thumbnailRef = useRef<HTMLDivElement>(null);
  const [isScrollable, setIsScrollable] = useState(false);

  // Check if scrolling is possible
  useEffect(() => {
    const checkScrollable = () => {
      if (thumbnailRef.current) {
        setIsScrollable(thumbnailRef.current.scrollWidth > thumbnailRef.current.clientWidth);
      }
    };

    checkScrollable();

    // Add a resize event listener to recheck scrollable state
    window.addEventListener('resize', checkScrollable);
    return () => window.removeEventListener('resize', checkScrollable);
  }, [images]);

  const scrollThumbnails = (direction: 'left' | 'right') => {
    if (thumbnailRef.current) {
      const scrollAmount = direction === 'left' ? -100 : 100;
      thumbnailRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col gap-6 relative">
      {/* Large Image */}
      <div className="flex-1">
        <img src={selectedImage} alt="Selected Product" className="w-full h-[500px] object-contain border rounded-md" />
      </div>

      {/* Thumbnail Scroll Section */}
      <div className="relative">
        {/* Scroll Buttons (visible only if scrollable) */}
        {isScrollable && (
          <>
            <button
              onClick={() => scrollThumbnails('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hidden sm:block"
            >
              ◀
            </button>
            <button
              onClick={() => scrollThumbnails('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hidden sm:block"
            >
              ▶
            </button>
          </>
        )}

        {/* Thumbnails */}
        <div
          ref={thumbnailRef}
          className="flex items-center space-x-4 overflow-x-auto no-scrollbar border-t border-gray-300 pt-4"
          style={{ overflowY: 'hidden' }} // Prevents vertical scrolling
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index}`}
              className={`w-20 h-20 border rounded-md cursor-pointer transition-transform ${
                selectedImage === image ? 'border-green-600 scale-105' : 'border-gray-300'
              }`}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
