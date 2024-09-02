import React, { useState, useEffect } from 'react';
import logo from "/src/assets/logo.png";
import { IoSearch } from "react-icons/io5";
import { SlMenu } from "react-icons/sl";
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./navbar.css";
import { Link, useNavigate } from 'react-router-dom';
import SlideOutMenu from './SlideOutMenu';

function Navbar() {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [isSticky, setSticky] = useState(false); // State to manage sticky behavior
  const navigate = useNavigate();

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const handleAboutClick = () => {
    navigate('/Aboutus');
  };

  const handleServicesClick = () => {
    navigate('/Commercial');
  };

  const handleClientsClick = () => {
    navigate('/Client');
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar-container ${isSticky ? 'sticky' : ''}`}>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><img src={logo} alt="" width={350} /></Link>
          <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <SlMenu />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <div className="navbar-header d-flex flex-column align-items-start">
              <div className="contact-info mb-3">
                <span className="phone-number"> 
                  <FaPhoneAlt className="icon1" />Call Us: (123) 456-7890
                </span>
                <span className="phone-number"> 
                  <FaEnvelope className="icon1" />info@techcybe.com
                </span>
                <span className="social-icons">
                  <a href="#" className="social-icon"><FaFacebookF /></a>
                  <a href="#" className="social-icon"><FaTwitter /></a>
                  <a href="#" className="social-icon"><FaInstagram /></a>
                  <a href="#" className="social-icon"><FaLinkedinIn /></a>
                </span>
              </div>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/Home" className="nav-link">HOME</Link>
                </li>
                <li className="nav-item dropdown">
                  <a 
                    className="nav-link dropdown-toggle" 
                    href="#" 
                    role="button" 
                    data-bs-toggle="dropdown"
                    onClick={handleAboutClick}
                  >
                    ABOUT US
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#" onClick={handleAboutClick}>Who We Are</a></li>
                    <li><Link className="dropdown-item" to="/Management">Management</Link></li>
                    <li><a className="dropdown-item" href="#">Our Team</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a 
                    className="nav-link dropdown-toggle" 
                    href="#" 
                    role="button" 
                    data-bs-toggle="dropdown"
                    onClick={handleServicesClick}
                  >
                    SERVICES
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/Commercial" >Commercial</a></li>
                    <li><a className="dropdown-item" href="/Hospitality" >Hospitality</a></li>
                    <li><a className="dropdown-item" href="/Office" >Office Fit Out</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/Blog" className="nav-link">BLOG</Link>
                </li>
                <li className="nav-item dropdown">
                  <a 
                    className="nav-link dropdown-toggle" 
                    href="#" 
                    role="button" 
                    data-bs-toggle="dropdown"
                    onClick={handleClientsClick}
                  >
                    CLIENTS
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#" onClick={handleClientsClick}>Our Client</a></li>
                    <li><a className="dropdown-item" href="#">Testimonial</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/Project" className="nav-link">PROJECTS</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Contact" className="nav-link">CONTACT US</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-link1 search-icon" href="#" onClick={toggleSearch}><IoSearch /></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-link1 menu" href="#" onClick={toggleMenu}><SlMenu /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {isSearchVisible && (
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search..." />
        </div>
      )}
      {isMenuVisible && (
        <div className="slide-out-menu show">
          <SlideOutMenu closeMenu={() => setMenuVisible(false)} />
        </div>
      )}
    </div>
  );
}

export default Navbar;
