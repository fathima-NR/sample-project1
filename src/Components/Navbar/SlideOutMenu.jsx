import React, { useState } from 'react';
import './slideOutMenu.css';
import logo from "/src/assets/logo.png";
import { IoMdClose } from "react-icons/io";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const photos = [
  '/src/assets/service-image2.jpg',
  '/src/assets/service-image4.jpg',
  '/src/assets/service-image5.jpg',
  '/src/assets/service-image6.jpg'
];

function SlideOutMenu({ closeMenu }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (photo) => {
    setSelectedImage(photo);
  };

  const handleNextImage = () => {
    const currentIndex = photos.indexOf(selectedImage);
    const nextIndex = (currentIndex + 1) % photos.length;
    setSelectedImage(photos[nextIndex]);
  };

  const handlePrevImage = () => {
    const currentIndex = photos.indexOf(selectedImage);
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    setSelectedImage(photos[prevIndex]);
  };

  const closeImageViewer = () => {
    setSelectedImage(null);
  };

  return (
    <div className="slide-out-menu-content">
      <img src={logo} alt="Company Logo" width={250} />
      <button className="close-button" onClick={closeMenu}><IoMdClose /></button>

      <div className="photo-gallery">
        {photos.map((photo, index) => (
          <div key={index} className="gallery-item">
            <img
              src={photo}
              alt={`Gallery ${index + 1}`}
              onClick={() => handleImageClick(photo)}
            />
          </div>
        ))}
      </div>

      <div className="company-address">
        <h3>Our Address</h3>
        <p>123 Tech Street, Tech City, TC 12345</p>
      </div>

      {selectedImage && (
        <div className="full-screen-viewer">
          <button className="close-button" onClick={closeImageViewer}><IoMdClose /></button>
          <button className="nav-button prev-button" onClick={handlePrevImage}><IoIosArrowBack /></button>
          <img src={selectedImage} alt="Selected" className="full-screen-image" />
          <button className="nav-button next-button" onClick={handleNextImage}><IoIosArrowForward /></button>
        </div>
      )}
    </div>
  );
}

export default SlideOutMenu;
