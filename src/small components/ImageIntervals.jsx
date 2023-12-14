import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images, interval = 3000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(intervalId);
  }, [images, interval]);

  return (
    <div>
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} />
    </div>
  );
};

export default ImageSlider;