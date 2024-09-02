import React, { useState } from 'react';
import './Gallery.css'; // Make sure to import the CSS file

const Gallery = () => {
  const [activeLink, setActiveLink] = useState('All');

  const images = {
    All: [
      { src: 'src/assets/woodwork-joinery-scaled.jpg', caption: 'Woodwork Joinery' },
      { src: 'src/assets/Restaurant00.webp', caption: 'Restaurant' },
      { src: 'src/assets/Modern-Living-VillaF42.jpeg', caption: 'Modern Living Villa' },
      { src: 'src/assets/Hospitality-scaled.jpg', caption: 'Hospitality' },
      { src: 'src/assets/IMG_5936-scaled.jpg', caption: 'Image 5' },
      { src: 'src/assets/DSC00831-scaled.jpg', caption: 'Image 6' },
      { src: 'src/assets/pexels-photo-276724.jpeg', caption: 'Image 7' },
      { src: 'src/assets/pexels-photo-534172.webp', caption: 'Image 8' },
      { src: 'src/assets/pexels-photo-1571453.jpeg', caption: 'Image 9' },
      { src: 'src/assets/pexels-photo-1571460.jpeg', caption: 'Image 10' },
      { src: 'src/assets/pexels-photo-3356416.webp', caption: 'Image 11' },
      { src: 'src/assets/pexels-photo-1571463.jpeg', caption: 'Image 12' },
      { src: 'src/assets/pexels-photo-2343468.jpeg', caption: 'Image 13' },
      { src: 'src/assets/pexels-photo-1643383.jpeg', caption: 'Image 14' },
      { src: 'src/assets/pexels-photo-2227832.jpeg', caption: 'Image 15' },
      { src: 'src/assets/pexels-photo-2251247.jpeg', caption: 'Image 16' },
    ],
    HOSPITALITY: [
      { src: 'src/assets/woodwork-joinery-scaled.jpg', caption: 'Woodwork Joinery' },
      { src: 'src/assets/Restaurant00.webp', caption: 'Restaurant' },
      { src: 'src/assets/pexels-photo-1643383.jpeg', caption: 'Image 3' },
      { src: 'src/assets/pexels-photo-2227832.jpeg', caption: 'Image 4' },
      { src: 'src/assets/pexels-photo-2251247.jpeg', caption: 'Image 5' },
      { src: 'src/assets/pexels-photo-2251247.jpeg', caption: 'Image 6' },
    ],
    RESTAURANT: [
      { src: 'src/assets/Modern-Living-VillaF42.jpeg', caption: 'Modern Living Villa' },
      { src: 'src/assets/pexels-photo-1571463.jpeg', caption: 'Image 5' },
      { src: 'src/assets/pexels-photo-2343468.jpeg', caption: 'Image 6' },
      { src: 'src/assets/pexels-photo-1643383.jpeg', caption: 'Image 7' },
      { src: 'src/assets/pexels-photo-2227832.jpeg', caption: 'Image 8' },
      { src: 'src/assets/pexels-photo-2251247.jpeg', caption: 'Image 9' },
      { src: 'src/assets/Hospitality-scaled.jpg', caption: 'Hospitality' },
    ],
    RETAILS: [
      { src: 'src/assets/IMG_5936-scaled.jpg', caption: 'Image 10' },
      { src: 'src/assets/pexels-photo-276724.jpeg', caption: 'Image 11' },
      { src: 'src/assets/pexels-photo-534172.webp', caption: 'Image 12' },
      { src: 'src/assets/pexels-photo-1571453.jpeg', caption: 'Image 13' },
      { src: 'src/assets/pexels-photo-1571460.jpeg', caption: 'Image 14' },
    ],
    OFFICE: [
      { src: 'src/assets/Restaurant00.webp', caption: 'Restaurant' },
      { src: 'src/assets/pexels-photo-1571460.jpeg', caption: 'Image 15' },
      { src: 'src/assets/pexels-photo-3356416.webp', caption: 'Image 16' },
      { src: 'src/assets/Hospitality-scaled.jpg', caption: 'Hospitality' },
    ],
    RESIDENTIAL: [
      { src: 'src/assets/woodwork-joinery-scaled.jpg', caption: 'Woodwork Joinery' },
      { src: 'src/assets/Modern-Living-VillaF42.jpeg', caption: 'Modern Living Villa' },
      { src: 'src/assets/pexels-photo-2251247.jpeg', caption: 'Image 17' },
      { src: 'src/assets/pexels-photo-2251247.jpeg', caption: 'Image 18' },
      { src: 'src/assets/IMG_5936-scaled.jpg', caption: 'Image 19' },
    ],
  };

  return (
    <div>
      <nav>
        <ul className="nav-links">
          {Object.keys(images).map((link) => (
            <li
              key={link}
              className={activeLink === link ? 'active' : ''}
              onClick={() => setActiveLink(link)}
            >
              {link}
            </li>
          ))}
        </ul>
      </nav>
      <div className="gallery">
        {images[activeLink].map((image, index) => (
          <div className="image-container" key={index}>
            <img  src={image.src} alt={`Image ${index + 1}`} />
            <div className="caption">{image.caption}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
