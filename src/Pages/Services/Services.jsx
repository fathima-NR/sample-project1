import React from 'react';
import "./services.css";

function Services() {
  const serviceImages = [
    { src: "src/assets/pexels-photo-276724.jpeg", title: "Beauty Salon & Spa" },
    { src: "src/assets/pexels-photo-2227832.jpeg", title: "Commercial" },
    { src: "src/assets/pexels-photo-1571463.jpeg", title: "Hospitality" },
    { src: "src/assets/pexels-photo-1571460.jpeg", title: "Office Fit Out" },
    { src: "src/assets/pexels-photo-2251247.jpeg", title: "Interior Design" },
    { src: "src/assets/pexels-photo-3356416.webp", title: "Restaurant" },
    { src: "src/assets/pexels-photo-534172.webp", title: "Residential/Villa" },
    { src: "src/assets/Modern-Living-VillaF42.jpeg", title: "Retail Fit Out" }
  ];

  return (
    <div style={{ backgroundColor: "#1a1a1a" }}>
      <div className='services-image'>
        <img className='img-fluid' src="src/assets/Hospitality-scaled.jpg" alt="Services" />
        <div className="services-caption">Services</div>
      </div>
      <div>
        <div className="row row1">
          {serviceImages.map((image, index) => (
            <div className="col-sm-3 col-img" key={index}>
              <img src={image.src} alt={image.title} />
              <div className="image-title">{image.title}</div> {/* Heading below the image */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
