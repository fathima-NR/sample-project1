import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <div style={{ backgroundColor: "#2a2829" }}>
      <div className="row pt-5 mx-2 pb-4">
        <div className="col-sm-3 pt-3">
          <img className='logofooter' src="src/assets/logo.png" alt="" width={"250px"} />
          <p className="custom-paragraph">
      At Falcon, we provide our clients with outstanding services from the stage of Conceptualization to Completion of the project.
    </p>
          <span className="social-icons1 mt-5">
            <a href="#" className="social-icon1"><FaFacebookF /></a>
            <a href="#" className="social-icon1"><FaTwitter /></a>
            <a href="#" className="social-icon1"><FaInstagram /></a>
            <a href="#" className="social-icon1"><FaLinkedinIn /></a>
          </span>
        </div>
        <div className="col-sm-3 mt-3  pt-3 " style={{ color: "#a3a3a3" }}>
          <h4 className='text-start' style={{ color: "white" }}>Contact Us</h4>
          <ul style={{ margin: "0px", padding: "0px", marginTop: "50px" }}>
            <li style={{ listStyle: "none", marginTop: "20px" }}>
              <FaLocationDot /> <span className='ms-3'>2504, Eta Star's Al Manara <span className='ms-4 '>Tower, Burj Khalifa District, Business </span><span className='ms-4'>Bay, Dubai, UAE</span></span>
            </li>
            <li style={{ listStyle: "none", marginTop: "20px" }}>
              <FaEnvelope /><span className='ms-3'>info@falconinterior.com</span>
            </li>
            <li style={{ listStyle: "none", marginTop: "20px" }}>
              <FaPhoneAlt /><span className='ms-3'>+971 43 20 2020</span>
            </li>
          </ul>
        </div>
        <div className="col-sm-2 mt-3  pt-3  ">
          <h4 className='text-start' style={{ color: "white" }}>Quick Links</h4>
          <ul style={{ margin: "0px", padding: "0px", marginTop: "47px" }}>
            <li style={{ listStyle: "none", marginTop: "20px" }}>
              <a href="" className='text-decoration-none' style={{ color: "#a3a3a3" }}>Home</a>
            </li>
            <li style={{ listStyle: "none", marginTop: "20px" }}>
              <a href="" className='text-decoration-none' style={{ color: "#a3a3a3" }}>Services</a>
            </li>
            <li style={{ listStyle: "none", marginTop: "20px" }}>
              <a href="" className='text-decoration-none' style={{ color: "#a3a3a3" }}>About Us</a>
            </li>
            <li style={{ listStyle: "none", marginTop: "20px" }}>
              <a href="" className='text-decoration-none' style={{ color: "#a3a3a3" }}>Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="col-sm-3 mt-3  pt-3 ">
          <h4 className='text-start' style={{ color: "white" }}>Let's Connect</h4>
          <form className="footer-form">
            <input type="text" placeholder="Name" className="footer-input" />
            <input type="text" placeholder="Phone Number" className="footer-input" />
            <button type="submit" className="footer-button">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;
