import React, { useState } from 'react'
import Arrport from './Arrport'
import './portfolio.css'
const Portfolio = () => {

    const[port,setPort]=useState(Arrport)
  return (
  <>
    <div className="section-portfolio"id='portfolio'>
        <div className="container portfolio-container">
            <div className="head-box">
                <div className="content-head">
                    <h4>Recent Project</h4>
                    <h2>My Portfolio</h2>
                </div>
                <div className="btn">
                <button><i className="fa-brands fa-github"></i> Visit My Github</button>
                </div>
            </div>
          <div className="portfolio">
             {
                port.map((err,index)=>{
                    return(
                        <div className="port"key={index}>
                            <div className="img-port">
                                <img src={err.img1} alt="picport" />
                            </div>
                            <div className="content-port">
                                <h4>{err.head}</h4>
                                <p>{err.text}</p>
                                <a href="#">View in Github <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                            </div>
                        </div>
                    )
                })
             }
          </div>
        </div>
    </div>
  </>
  )
}

export default Portfolio
