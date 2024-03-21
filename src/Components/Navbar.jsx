import React, { useState} from 'react'
import './navbar.css';
// import { useNavigate } from 'react-router-dom';
const Navbar = () => {

  const[navbar,setNavbar]=useState(false)
    const check=()=>{
        setNavbar(!navbar)
    }
    const close=()=>{
        setNavbar(false)
    }
    const same=()=>{
        setNavbar(false)
    }
    // let history=useNavigate();
  
  return (
    <>
     <div className="header">
         <div className="container header-container">
             <div className="logo">
             <a href="#">logolpsum</a>
             </div>
             <nav>
                <ul className={navbar?"nav-bar-list add-nav-bar":"nav-bar-list"}>
                    <li><a href="#home"onClick={same}active>Home</a></li>
                    <li><a href="#skills"onClick={same}active>Skills</a></li>
                    <li><a href="#about"onClick={same}active>About me</a></li>
                    <li><a href="#portfolio"onClick={same}active>Portfolio</a></li>
                    <li><a href="#testimorials"onClick={same}active>Testimorials</a></li>
                    <div className="close"onClick={close}>
                      <div className="close-bar">
                      <i className="fa-solid fa-xmark"></i>
                      </div>
                    </div>
                </ul>
             </nav>
             <div className="btns">
                  <div className="contact-btn">
                  <a href="#contact">Contact Me</a>
                  </div>
             </div>
             <div className="menu-bar">
             <div className="open-bar"onClick={check}>
                    <i className="fa-solid fa-bars"></i>
                    </div>
             </div>
         </div>
     </div>
    </>
  )
}

export default Navbar
