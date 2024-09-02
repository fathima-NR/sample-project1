import React from 'react';
import Imagecarousel from '../Components/Body/Imagecarosal';
import Imageslide from '../Components/Body/Imageslide';
import SlidingLogo from '../Components/Body/SlidingLogo';
import Gallery from '../Components/Body/Gallery';
import './home.css'; // Import the CSS file for styling
import Review from '../Components/Body/Review';
import ComapanyAbout from '../Components/Body/ComapanyAbout';
import Formhome from '../Components/Body/Formhome';


function Home() {
  return (
    <>
      <div style={{backgroundColor:"#2a2829"}}>
        <Imagecarousel/>
        <div style={{backgroundColor:'#2a2829', marginTop:"40px"}}>
          <h4 className='text-center'>[Our Services]</h4>
          <h1 className='text-center'>Our Interior Design Services</h1>
          <h5 className='text-center mb-5'>..............</h5>
          <Imageslide/>
        </div>
        <div style={{backgroundColor:'#2a2829', marginTop:"40px"}}>
          <h4 className='text-center'>[Our Portfolio]</h4>
          <h1 className='text-center'>Scroll Through Luxury Interior Design Projects</h1>
          <h5 className='text-center mb-3'>..............</h5>
          <Gallery/>
        </div>
       
        <div >
        <Review/>
       </div>
       <div style={{marginTop:"70px"}}>
        <ComapanyAbout/>
       </div>
       <div>
        <Formhome/>
       </div>
       <div style={{backgroundColor:'#0a0a0a', marginTop:"40px"}}>
          <SlidingLogo/>
        </div>
       
      </div>
     
    </>
  )
}

export default Home;
