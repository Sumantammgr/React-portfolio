import React from 'react'
import './home.css'
const Home = () => {
  return (
   <>
    <div className="section-home"id='home'>
        <div className="container home-container">
            <div className="content-home">
                <h4>Hey, I'm Suman</h4>
                <h1><span>Frontend Developer</span><br></br>Designer</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem est quidem iste dolorum necessitatibus minima nam vero nostrum iusto quod.</p>
                <button>Get in Touch</button>
            </div>
            <div className="img-home">
                <div className="img-box">
                    <img src="./manimg/man.png"alt="thispic" />
                    <div className="shadow-box">
                    </div>
                </div>
            </div>
        </div>
    </div>
   </>
  )
}

export default Home
