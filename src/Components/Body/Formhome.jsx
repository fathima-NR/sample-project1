import React from 'react';
import { FaUser, FaPhone, FaEnvelope, FaRegCommentDots } from 'react-icons/fa';
import './Formhome.css'; // Import CSS for custom styling

function Formhome() {
  return (
    <div className="form-container">
      <div className="background-wrapper"></div> {/* Background image with opacity */}
      <div className="overlay">
        <h2 className="text-center fw-bold" style={{ color: "#cd9a61" }}>
          Let’s make something awesome together
        </h2>
        <h1 className="text-center">
          Everything you wanted to know but didn’t know who to ask.
        </h1>
        <h5 className="text-center mb-3">..............</h5>
        <form className="custom-form">
          <div className="row">
            <div className="col-md-6 mb-3 form-group">
              <div className="form-group-inner">
                <input type="text" className="form-control" placeholder="Name" />
                <FaUser className="input-icon" />
              </div>
            </div>
            <div className="col-md-6 mb-3 form-group">
              <div className="form-group-inner">
                <input type="text" className="form-control" placeholder="Phone" />
                <FaPhone className="input-icon" />
              </div>
            </div>
          </div>
          <div className="mb-3 form-group">
            <div className="form-group-inner">
              <input type="email" className="form-control" placeholder="Email" />
              <FaEnvelope className="input-icon" />
            </div>
          </div>
          <div className="mb-3 form-group">
            <div className="form-group-inner">
              <textarea className="form-control msg" placeholder="Message"></textarea>
              <FaRegCommentDots className="input-icon" />
            </div>
          </div>
          <button type="submit" className="btn btn-block">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Formhome;
