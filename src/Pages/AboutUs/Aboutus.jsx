import React from 'react'
import "./about.css"
import CompanyAbout from '../../Components/Body/ComapanyAbout'
import Review from '../../Components/Body/Review'
import Procedure from '../../Components/Body/Procedure'
function Aboutus() {
  return (
    <div style={{backgroundColor:"#1a1a1a"}}>
  

<div className='about-image'>
        <img className='img-fluid' src="src/assets/pexels-august-de-richelieu-4427430.jpg" alt="" />
        <div className="about-caption">About Us</div>
        </div>
        <div className='mt-5 pt-5 mx-3'>
        <CompanyAbout/> 
        </div>
        <div className='mt-5 mx-4'>
          <Procedure/>  
        </div>
<div className='mt-5 pb-5'>
    <Review/>
</div>

    </div>
  )
}

export default Aboutus