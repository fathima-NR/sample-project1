import React from 'react'
import "./client.css"
import SlidingLogo from '../../Components/Body/SlidingLogo'
function Client() {
  return (
    <div style={{backgroundColor:"#1a1a1a"}}>
<div className='client-image'>
        <img className='img-fluid' src="src/assets/pexels-august-de-richelieu-4427430.jpg" alt="" />
        <div className="client-caption">Our Clients</div>
        </div>
<SlidingLogo/>
    </div>
  )
}

export default Client