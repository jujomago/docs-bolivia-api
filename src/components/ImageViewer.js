import { AsyncImage } from "loadable-image";
import React, { useState } from "react";

const ImageViewer = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="image-viewer">
      <div className="main-image">
        <AsyncImage
          src={images[selectedImage]}
          alt="Main"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="thumbnails">
        {images.map((image, index) => (
          <div
            key={index}
            className={`thumbnail ${index === selectedImage ? "selected" : ""}`}
            onClick={() => setSelectedImage(index)}
          >
            <AsyncImage
              style={{ width: 180, height: 180 }}
              src={image}
              alt={`Thumbnail ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageViewer;
