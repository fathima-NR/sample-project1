import React from 'react';
import "./hospitality.css";

// Define an array of flip card data
const flipCards = [
  {
    id: 1,
    imgSrc: "src/assets/pexels-photo-1571463.jpeg",
    caption: "Compliance & Quality",
    backContent: "This is the paragraph that will be revealed when the image flips."
  },
  {
    id: 2,
    imgSrc: "src/assets/pexels-photo-1643383.jpeg",
    caption: "Compliance & Quality",
    backContent: "This is the paragraph that will be revealed when the image flips."
  },
  {
    id: 3,
    imgSrc: "src/assets/pexels-photo-2227832.jpeg",
    caption: "Compliance & Quality",
    backContent: "This is the paragraph that will be revealed when the image flips."
  },
  {
    id: 4,
    imgSrc: "src/assets/pexels-photo-276724.jpeg",
    caption: "Compliance & Quality",
    backContent: "This is the paragraph that will be revealed when the image flips."
  }
];

function Commercial() {
  return (
    <div style={{ backgroundColor: "#1a1a1a" }}>
      <div className='hospitality-image'>
        <img className='img-fluid' src="src/assets/pexels-photo-1571460.jpeg" alt="Hospitality" />
        <div className="hospitality-caption">Commercial</div>
      </div>

      <div className='mt-5'>
        <h4 className='text-start pt-5 ms-4' style={{ color: "#cd9a61" }}>[ what we offer ]</h4>
        <h1 className='text-start ms-4' style={{ color: "white" }}>Hospitality & Clinic Interior Design in Dubai</h1>
        <h5 className='text-start mb-4 ms-4' style={{ color: "white" }}> . . . . . . . . . . . . . </h5>

        <div className="row">
          <div className="col-sm-6">
            <h5 className='mb-4 text-start ms-3'>Create a soothing and friendly environment at your Healthcare Facility</h5>
            <p className='text-white mx-3' style={{ lineHeight: "23px" }}>
              Making patients feel at ease and welcome is a central element in current medical clinic interiors. One of the hardest tasks in the interior design business is healthcare interior design. In terms of patient health outcomes and staff productivity, the environment and facilities you offer may make a big difference. Children, elderly patients, young patients, and hospital employees all have diverse interior designs for healthcare facilities. These healthcare interior design settings have a higher psychological impact on a patient when they enter the clinic premises. Our interior design services for medical centers and clinics are dedicated to creating healing environments that prioritize patient comfort, safety, and efficiency. We understand the unique needs of healthcare facilities and design spaces that promote a sense of calm and well-being.
              <br /><br />
              We use soothing color palettes, ample natural lighting, & high-quality, easy-to-clean materials to ensure a sterile and welcoming atmosphere. By integrating modern technology and sustainable practices, we create functional and aesthetically pleasing environments that enhance the overall healthcare experience for patients and staff.
              <br /><br />
              We at Falcon are experienced in designing healthcare interior design in Dubai. Our skilled interior designers collaborate with medical planners to meticulously arrange the interior design of healthcare facilities from the start. Our team of expert interior designers in Dubai creates a core design that is enhanced to serve the needs of healthcare providers, patients, and caregivers.
            </p>
          </div>

          <div className="col-sm-6">
            <img className='img-fluid pe-5 hos-img' src="src/assets/pexels-photo-1571463.jpeg" alt="Healthcare Facility" style={{ height: "530px" }} />
          </div>
        </div>
      </div>

      <div className='mt-5 pb-5'>
        <h1 className='text-center ms-4' style={{ color: "#cd9a61" }}>Hospitality & Clinic Interior Design in Dubai</h1>
        <h5 className='text-center mb-4 ms-4' style={{ color: "#cd9a61" }}> . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . </h5>
        <p className='text-center px-5 text-white pb-5 m-0'>
          Our clinic interior design services aim to create healing environments that prioritize patient comfort and safety while enhancing operational efficiency. By combining functionality with aesthetic appeal, we deliver spaces that support the well-being of patients and staff, reflect your clinic’s brand identity, and meet the highest standards of healthcare design.
        </p>

        <div>
          <div className="row mx-5 px-5 mt-4 pb-5">
            {flipCards.map(card => (
              <div className="col-sm-6 pt-5 mt-5 pb-5" key={card.id}>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <div className="image-container1">
                        <img src={card.imgSrc} alt={card.caption} />
                        <div className="image-caption1">{card.caption}</div>
                      </div>
                    </div>
                    <div className="flip-card-back">
                      <p>{card.backContent}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Commercial;
