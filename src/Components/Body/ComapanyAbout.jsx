import React, { useState,useEffect, useRef } from 'react';
import './companyabout.css';

function CompanyAbout() {
  const [activeSection, setActiveSection] = useState('AboutUs'); // State to manage active section

  const renderContent = () => {
    switch (activeSection) {
      case 'AboutUs':
        return <p>With our distinctive design concepts for a residential, commercial, or retail interior fitout, Falcon Interior stands out among interior fitout companies Dubai. Our talented team of interior designers, engineers, and other specialists utilizes their vast knowledge to produce creative interior designs that transform any area into a space that is exquisite, modular, and elegant..</p>;
      case 'Procedure':
        return <p>At Falcon, we provide our clients with outstanding services from the stage of Conceptualization to Completion of the project. It is important to understand that there are several steps that need to be undertaken in order to successfully complete a given project. We not only ensure taking care of your designs and fit out but everything that needs to be fulfilled along with it.
</p>;
      case 'OurSteps':
        return <p> --Meeting and understanding clients Requirements <br />
        --Developing Concept design <br />
        --Design Submission for Client approval <br />
        --Technical and product specifications <br />
        --Work on Site <br />
        --Inspection & Handover</p>;
      default:
        return <p>Select a section to view content.</p>;
    }
  };
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
    <div>
      <div className="row">
        <div className="col-sm-6">
          <video className='video'
            src="src/assets/about-video-1.mp4" 
            controls
            autoPlay
            loop
            muted
           
          ></video>
        </div>
        <div className="col-sm-6 text-white">
        <div
        className={`heading-section ${animate ? 'animate' : ''}`}
        ref={headingRef}
      >
        <h4 className='text-center pt-5 ms-4' style={{color:"#cd9a61"}}>[About Company]</h4>
        <h1 className='text-center ms-4' style={{color:"white"}}>Simple and Quality Design</h1> 
        <h5  className='text-center mb-5 ms-4 ' style={{color:"white"}}>..............</h5>
      </div>
          <div className='subheading'>
            <h5 onClick={() => setActiveSection('AboutUs')}>About Us</h5>
            <h5 onClick={() => setActiveSection('Procedure')}>Procedure</h5>
            <h5 onClick={() => setActiveSection('OurSteps')}>Our Steps</h5>
          </div>
          <div className="content">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyAbout;
