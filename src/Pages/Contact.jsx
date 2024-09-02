import React from 'react'
import { FaUser, FaPhone, FaRegCommentDots } from 'react-icons/fa';
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import "./contact.css";
function Contact() {
  return (
    <div style={{backgroundColor:"#1f1f1f"}}>
        <div className='contact-image'>
        <img className='img-fluid' src="src\assets\pexels-tima-miroshnichenko-5717224.jpg" alt="" />
        <div className="contact-caption">Contact Us</div>
        </div>
<div>
    <div className="row mt-5 mx-2">
        <div className="col-sm-6  " style={{marginTop:"90px",backgroundColor:"#1f1f1f"}}>
            <form action="">
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
        <div className="col-sm-5 mx-2" >
        <h4 className='text-start pt-5 ms-4' style={{color:"#cd9a61"}}>[ our contact details ]</h4>
        <h1 className='text-start ms-4' style={{color:"white"}}>Let’s make something</h1> 
        <h1 className='text-start ms-4' style={{color:"#cd9a61"}}>awesome together</h1>
      
        <p className='text-white mt-5 ms-4'>Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.</p>
        <ul style={{ margin: "0px", padding: "0px", marginTop: "30px",color:"white",marginLeft:"30px" }}>
            <li style={{ listStyle: "none", marginTop: "20px" }}>
              <FaLocationDot /> <span className='ms-2'>2504, Eta Star's Al Manara Tower, Burj Khalifa District, Business Bay, Dubai, UAE</span>
            </li>
            <li style={{ listStyle: "none", marginTop: "20px" }}>
              <FaEnvelope /><span className='ms-3'>info@falconinterior.com</span>
            </li>
            <li style={{ listStyle: "none", marginTop: "20px" }}>
              <FaPhoneAlt /><span className='ms-3'>+971 43 20 2020</span>
            </li>
          </ul>
          <span className="social-icons1 mt-3 ms-4 mb-4">
            <a href="#" className="social-icon1"><FaFacebookF /></a>
            <a href="#" className="social-icon1"><FaTwitter /></a>
            <a href="#" className="social-icon1"><FaInstagram /></a>
            <a href="#" className="social-icon1"><FaLinkedinIn /></a>
          </span>
        </div>
    </div>
</div>

    </div>
  )
}

export default Contact