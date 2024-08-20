import { useEffect, useState } from "react";
import photo1 from '../images/photo1.jpg';
import photo2 from '../images/photo2.jpg';
import photo3 from '../images/photo3.jpg';
import photo4 from '../images/photo4.jpg';

const Gallery = () => {
  const [index, setIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    const galleryItems = [photo1, photo2, photo3, photo4];

    // Preload images
    const preloadedImages = galleryItems.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });

    // Set preloaded images to state
    setLoadedImages(preloadedImages);

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex < galleryItems.length - 1 ? prevIndex + 1 : 0));
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div id="gallery" className="gallery">
      <div className="images">
        {loadedImages[index] && (
          <img
            src={loadedImages[index].src}
            alt={`Image ${index + 1}`}
            className="imgItem"
          />
        )}
        <div className="dots">
          {loadedImages.map((_, i) => (
            <div
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
            >
              •
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
