import { useState } from 'react';
import './ProductImageGallery.css';

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

export const ProductImageGallery = ({ images, productName }: ProductImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="gallery">

      {/* Main Image */}
      <div className="gallery__main">
        <img
          src={selectedImage}
          alt={productName}
          className="gallery__main-image"
        />
      </div>

      {/* Thumbnails */}
      <div className="gallery__thumbnails">
        {images.map((image, index) => (
          <div
            key={index}
            className={`gallery__thumb ${selectedImage === image ? 'gallery__thumb--active' : ''}`}
            onClick={() => setSelectedImage(image)}
          >
            <img src={image} alt={`${productName} view ${index + 1}`} />
          </div>
        ))}
      </div>

    </div>
  );
};