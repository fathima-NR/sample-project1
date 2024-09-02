import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/Pages/Home'
import Footer from './Components/Footer/Footer'
import Contact from './Pages/Contact'
import Project from './Pages/Project'
import Client from './Pages/client/Client'
import Blog from './Pages/Blog'
import Aboutus from './Pages/AboutUs/Aboutus'
import Management from './Pages/AboutUs/Management'
import Services from './Pages/Services/Services'
import Hospitality from './Pages/Services/Hospitality'
import Commercial from './Pages/Services/Commercial';
import Officeout from './Pages/Services/Officeout';

function Temp() {
  return (
    <>
  
{/*      
    <Home/> */}
{/* <Contact/> */}
{/* <Project/> */}
{/* <Client/> */}
{/* <Blog/> */}
{/* <Aboutus/> */}
{/* <Management/> */}
{/* <Services/> */}
{/* <Hospitality/> */}
<BrowserRouter>
<Navbar/>
<Routes>
<Route path="/" element={<Home />} />
  <Route path="/Home" element={<Home />} />
  <Route path="/Blog" element={<Blog />} />
  <Route path="/Aboutus" element={<Aboutus />} />
  <Route path="/Clients" element={<Client />} />
  <Route path="/management" element={<Management />} />
  <Route path="/Hospitality" element={<Hospitality />} />
  <Route path="/Commercial" element={<Commercial />} />
  <Route path="/Office" element={<Officeout />} />
  <Route path="/Client" element={<Client />} />
  <Route path="/Contact" element={<Contact />} />
  <Route path="/Project" element={<Project />} />
</Routes>

</BrowserRouter>

    <Footer/>

    </>
  )
}

export default Temp