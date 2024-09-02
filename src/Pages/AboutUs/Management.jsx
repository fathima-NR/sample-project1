import React, { useEffect, useRef, useState } from 'react';
import "./management.css";

function Management() {
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
    <div style={{ backgroundColor: "#1a1a1a" }}>
      <div className='management-image'>
        <img className='img-fluid' src="src/assets/pexels-a-darmel-8134073.jpg" alt="" />
        <div className="management-caption">Management</div>
      </div>
      <div className='pt-5'>
        <div 
          style={{ backgroundColor: "#1a1a1a" }} 
          className={`heading-section ${animate ? 'animate' : ''}`} 
          ref={headingRef}
        >
          <h4 className='text-center pt-2' style={{ color: "#cd9a61" }}>[OUR TEAM]</h4>
          <h1 className='text-center' style={{ color: "white" }}>Welcome to our company</h1>
          <h5 className='text-center mb-5' style={{ color: "white" }}>..............</h5>
        </div>
        <p className='text-white text-center pb-5 m-0'>
          At Falcon, we value and appraise the performances and efforts of all our employees and partners. <br />
          Under unwavering principles, we expand on our long-term purpose with a strong focus on increasing client satisfaction. We have upheld strict business ethics that include transparency, honesty, decency, respect, and a commitment to excellence. <br />
          We support an open and transparent work atmosphere and believe that cooperation is the key to success. We are working hard to establish ourselves as the top interior design company by offering our clients with exceptional services.
        </p>
      </div>
      <div className="row mt-5 ">
      <div class="image-gallery">
        <div className="col-sm-4 image-column">
          <img className='img-fluid' src="src/assets/download 1.jpg" alt="" />
          <div className="image-column-caption">SURINDER KUMAR <br />
          [ Managing Partner ]</div>
        </div>
        <div className="col-sm-4 image-column ">
          <img className='img-fluid' src="src/assets/images 3.jpg" alt="" />
          <div className="image-column-caption">Rohit Bhatia <br />
          [ Managing Partner ]</div>
        </div>
        <div className="col-sm-4 image-column ">
          <img  className='img-fluid' src="src/assets/images 4.jpg" alt="" />
          <div className="image-column-caption">Vikram Jit Singh <br />
          [ Managing Partner ]</div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Management;
