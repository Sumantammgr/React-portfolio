import React from 'react'
import './footer.css'
const Footer = () => {
    return (
        <>
            <div className="section-footer">
                <div className="container footer-container">
                    <div className="top-footer">
                        <div className="logo-footer">
                            <a href="#">logoipsum</a>
                        </div>
                        <div className="nav-footer">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">About Me</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Testimonials</a></li>
                        </div>

                        <div className="social-icon">
                        <div className="facebook">
                        <i className="fa-brands fa-facebook"></i>
                        </div>
                        <div className="facebook">
                        <i className="fa-brands fa-instagram"></i>
                        </div>
                        <div className="facebook">
                        <i className="fa-brands fa-twitter"></i>
                        </div>
                        <div className="facebook">
                        <i className="fa-brands fa-linkedin"></i>
                        </div>
                    </div>
                    </div>
                     <div className="last-footer">
                        <div className="para">
                            <p>Made with 💖 by Suman</p>
                        </div>
                        <div className="footer-link">
                            <p>Privacy Policy</p>
                            <p>Terms of Service</p>
                            <p>Cookies Settings</p>
                        </div>
                     </div>
                </div>
            </div>
        </>
    )
}

export default Footer
