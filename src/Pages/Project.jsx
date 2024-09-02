import React from 'react'
import "./project.css"
import Gallery from '../Components/Body/Gallery'
function Project() {
  return (
    <div style={{backgroundColor:"#1a1a1a"}}>
<div className='project-image'>
        <img className='img-fluid' src="src/assets/Hospitality-scaled.jpg" alt="" />
        <div className="project-caption">Projects</div>
        </div>
<Gallery/>
    </div>
  )
}

export default Project