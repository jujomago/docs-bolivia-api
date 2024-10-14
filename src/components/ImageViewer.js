import React, { useState } from 'react';

const ImageViewer = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="image-viewer">
      <div className="main-image">
        <img src={images[selectedImage]} alt="Main" />
      </div>
      <div className="thumbnails">
        {images.map((image, index) => (
          <div
            key={index}
            className={`thumbnail ${index === selectedImage ? 'selected' : ''}`}
            onClick={() => setSelectedImage(index)}
          >
            <img src={image} alt={`Thumbnail ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageViewer;