import React from 'react';
import './imageslide.css'; // Import the CSS file

const Imageslide = () => {
  const images = [
    { src: 'src/assets/Modern-Living-VillaF42.jpeg', caption: 'Caption 1' },
    { src: 'src/assets/Hospitality-scaled.jpg', caption: 'Caption 2' },
    { src: 'src/assets/Restaurant00.webp', caption: 'Caption 3' },
    { src: 'src/assets/woodwork-joinery-scaled.jpg', caption: 'Caption 4' },
    { src: 'src/assets/Modern-Living-VillaF42.jpeg', caption: 'Caption 1' },
    { src: 'src/assets/Hospitality-scaled.jpg', caption: 'Caption 2' },
    { src: 'src/assets/Restaurant00.webp', caption: 'Caption 3' },
    { src: 'src/assets/woodwork-joinery-scaled.jpg', caption: 'Caption 4' }
  ];

  return (
    <div className="image-slide-container">
      <div className="image-slide">
        {images.concat(images).map((item, index) => (
          <div className="image-item" key={index}>
            <img src={item.src} alt={`Slide ${index}`} />
            <div className="caption">{item.caption}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Imageslide;
