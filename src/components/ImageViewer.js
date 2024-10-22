import { AsyncImage } from "loadable-image";
import React, { useState, useRef } from "react";

const ImageViewer = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const dialogRef = useRef(null);

  const handleOpen = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const handleClose = (e) => {
    if (dialogRef.current && e.target === dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return (
    <div className="image-viewer">
      <div
        className="main-image"
        onClick={handleOpen}
        style={{ cursor: "pointer" }}
      >
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
              style={{ width: "100%", height: "100%" }}
              src={image}
              alt={`Thumbnail ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <dialog
        ref={dialogRef}
        style={{
          width: "auto",
          maxHeight: "75vh",
          aspectRatio: "16/10",
        }}
        onClick={handleClose}
      >
        <AsyncImage
          src={images[selectedImage]}
          alt="Full Size"
          objectFit="cover"
          style={{ width: "100%", height: "100%" }}
        />
      </dialog>
    </div>
  );
};

export default ImageViewer;
