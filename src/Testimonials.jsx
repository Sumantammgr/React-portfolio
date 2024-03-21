import React, { useState } from 'react'
import Arrtesti from './Arrtesti'
import './testimonials.css';
const Testimonials = () => {

    const[test,setTest]=useState(Arrtesti);
  return (
    <>
    <div className="section-testimonials"id='testimorials'>
        <div className="container testimonials-container">
         <div className="testimonials">
            <h4>Clients Feedback</h4>
            <h2>Customer testimonials</h2>
            <div className="testimonials-box">
               {
                test.map((arr,index)=>{
                    return(
                        <div className="testi"key={index}>
                            <p>{arr.img2}{arr.img2}{arr.img2}{arr.img2}{arr.img2}</p>
                            <p>{arr.para1}</p>
                            <div className="id">
                                <img src={arr.img3} alt="picfile" />
                                <div className="file-box">
                                    <h5>{arr.head1}</h5>
                                    <a href="#">{arr.link}</a>
                                </div>
                            </div>
                        </div>
                    )
                })
               }
            </div>
         </div>
        </div>
    </div>
    </>
  )
}

export default Testimonials
