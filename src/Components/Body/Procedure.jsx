import React, { useState } from 'react';

function Procedure() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    if (openSection === section) {
      setOpenSection(null); // Close the section if it's already open
    } else {
      setOpenSection(section); // Open the clicked section
    }
  };

  return (
    <div>
      <div className="row">
        <div className="col-sm-6" style={{backgroundColor:"#252525"}}>
          <h4 className='text-start pt-5 ms-4' style={{ color: "#cd9a61" }}>[how it works]</h4>
          <h1 className='text-start ms-4' style={{ color: "white" }}>Procedure</h1>
          <h5 className='text-start mb-4 ms-4' style={{ color: "white" }}>..............</h5>

          <div className="section ps-3">
            <h4 className='d-flex justify-content-between  pb-4' style={{ cursor: 'pointer', color: 'white',borderBottom:"1px solid white" }} onClick={() => toggleSection('WhoWeAre')}>
              Who we are
              <span>{openSection === 'WhoWeAre' ? '-' : '+'}</span>
            </h4>
            {openSection === 'WhoWeAre' && <p style={{ color: 'white',lineHeight:"30px",letterSpacing:"1px" }}>Who we are
From project planning and design to project execution and government authority clearances, we provide hassle-free turnkey solutions to our clients. <br />

We can manage every part of any Interior Fit-out project, eliminating the need for you to rush around looking for different materials or suppliers for your project. <br />

We provide a professional and dependable team for your interior projects. It is extremely simple for us to carry out a project of any size and provide outstanding spaces for our clients, when we work with our own specialized in-house staff. <br />

Falcon Projects has established an amazing clientele of regional and international companies with offices in Dubai and other Middle Eastern countries. We place a high value on achieving our client’s expectations, and we’re here to assist you in improving your working and living environments.</p>}
          </div>

          <div className="section ps-3">
            <h4 className='d-flex justify-content-between pb-4' style={{ cursor: 'pointer', color: 'white',borderBottom:"1px solid white" }} onClick={() => toggleSection('Procedure')}>
              Procedure
              <span>{openSection === 'Procedure' ? '-' : '+'}</span>
            </h4>
            {openSection === 'Procedure' && <p style={{ color: 'white',lineHeight:"30px" }}>we provide our clients with outstanding services from the stage of Conceptualization to Completion of the project. It is important to understand that there are several steps that need to be undertaken in order to successfully complete a given project. We not only ensure taking care of your designs and fit out but everything that needs to be fulfilled along with it.
            </p>}
          </div>

          <div className="section ps-3">
            <h4 className='d-flex justify-content-between pb-4' style={{ cursor: 'pointer', color: 'white',borderBottom:"1px solid white" }} onClick={() => toggleSection('OurSteps')}>
              What is Our Steps
              <span>{openSection === 'OurSteps' ? '-' : '+'}</span>
            </h4>
            {openSection === 'OurSteps' && <p style={{ color: 'white',lineHeight:"30px",letterSpacing:"1px" }}> --Meeting and understanding clients Requirements <br />
        --Developing Concept design <br />
        --Design Submission for Client approval <br />
        --Technical and product specifications <br />
        --Work on Site <br />
        --Inspection & Handover</p>}
          </div>
        </div>
        <div className="col-sm-6">
          <img src="src/assets/pexels-photo-3356416.webp" alt="Procedure illustration" className="img-fluid" style={{height:"600px",width:"600px"}}/>
        </div>
      </div>
    </div>
  );
}

export default Procedure;
