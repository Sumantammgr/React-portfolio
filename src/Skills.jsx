import React, {useState}from 'react'
import Arrskills from './Arrskills';
import './skills.css'
const Skills = () => {

    const[item,setItem]=useState(Arrskills);

  return (
   <>
   <div className="section-skills"id='skills'>
    <div className="container skills-container">
      <h4>My skills</h4>
      <h2>My Expertise</h2>
       <div className="main">
        {
            item.map((Cvalue,index)=>{
                return(
                    <div className="box"key={index}>
                    <div className="logo-icon">
                      {Cvalue.img}
                    </div>
                    <h3>{Cvalue.sname}</h3>
                    <p>{Cvalue.para}</p>
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

export default Skills
