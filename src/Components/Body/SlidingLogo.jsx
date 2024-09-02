import React, { useEffect, useRef, useState } from 'react';
import './slidingLogo.css'; // Import the CSS file

const SlidingLogo = () => {
  const logos = [
    'https://www.falconinterior.com/wp-content/uploads/2023/06/logo.png',
    'https://www.falconinterior.com/wp-content/uploads/2023/06/logo1-2.png',
    'https://www.falconinterior.com/wp-content/uploads/2024/02/logo1-1.png',
    'https://www.falconinterior.com/wp-content/uploads/2023/06/logo1-5.png',
    'https://www.falconinterior.com/wp-content/uploads/2023/08/Blue-waters.png',
    'https://www.falconinterior.com/wp-content/uploads/2023/06/logo.png',
    'https://www.falconinterior.com/wp-content/uploads/2023/06/logo1-2.png',
    'https://www.falconinterior.com/wp-content/uploads/2024/02/logo1-1.png',
    'https://www.falconinterior.com/wp-content/uploads/2023/06/logo1-5.png',
    'https://www.falconinterior.com/wp-content/uploads/2023/08/Change.png',
    'https://www.falconinterior.com/wp-content/uploads/2023/08/the-nest.png',
    'https://www.falconinterior.com/wp-content/uploads/2024/02/logo1.png',
    'https://www.falconinterior.com/wp-content/uploads/2023/06/logo1-4.png',
    'https://www.falconinterior.com/wp-content/uploads/2023/06/logo1-5.png',
    'https://www.falconinterior.com/wp-content/uploads/2023/08/Blue-waters.png',
    'https://www.falconinterior.com/wp-content/uploads/2023/06/logo.png',
    'https://www.falconinterior.com/wp-content/uploads/2023/06/logo1-3.png',
    'https://www.falconinterior.com/wp-content/uploads/2023/08/Change.png',
    'https://www.falconinterior.com/wp-content/uploads/2023/08/the-nest.png',
    'https://www.falconinterior.com/wp-content/uploads/2024/02/logo1.png'

  ];

  const headingRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headingPosition = headingRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (headingPosition < windowHeight) {
        setAnimate(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="logo-carousel-container">
      <div
        className={`heading-section ${animate ? 'animate' : ''}`}
        ref={headingRef}
      >
        <h4 className='text-center pt-2 ' style={{color:"#cd9a61"}}>[people Who trust us]</h4>
        <h1 className='text-center ' style={{color:"white"}}>Our Clientele</h1> 
        <h5  className='text-center mb-5 ' style={{color:"white"}}>..............</h5>
      </div>
      <div className="logo-carousel">
        <div className="logo-row">
          {logos.map((src, index) => (
            <div className="logo-item" key={index}>
              <img src={src} alt={`Logo ${index}`} />
            </div>
          ))}
        </div>
        <div className="logo-row">
          {logos.map((src, index) => (
            <div className="logo-item" key={index + logos.length}>
              <img src={src} alt={`Logo ${index + logos.length}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlidingLogo;
