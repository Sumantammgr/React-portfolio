import React, { useState } from 'react'
import './contact.css'
const Contact = () => {


  const [arrobj, setArrobj] = useState({
    fname: "",
    pass: "",
    email: "",
    text: ""
  })


  const inputEvent = (event) => {
    const { value, name } = event.target;
    setArrobj((Oldv) => {

      return { ...Oldv, [name]: value }
    })
  }
  const submit = (e) => {
    e.preventDefault();
      
     if(arrobj.fname===""){
      alert("Please fill form!.")
     }else if(arrobj.pass===""){
      alert("Please fill form!.")
     }else if(arrobj.email===""){
      alert("Please fill form!.")
    }else if(arrobj.text===""){
      alert("Please fill form!.")
    }else{
      alert(`Form sucessfully Username ${arrobj.fname} and passwrod ${arrobj.pass} and email ${arrobj.email} and text ${arrobj.text}`)
    }
    setArrobj({
      fname: "",
      pass: "",
      email: "",
      text: ""
    })
  }

  return (
    <>
      <div className="section-contact"id='contact'>
        <div className="container contact-container">
          <form onSubmit={submit}>
            <label htmlFor='10'>Username:</label><br></br>
            <input type="text" placeholder='Enter your name' id='10' name="fname" value={arrobj.fname} onChange={inputEvent} /><br></br>
            <label htmlFor='11'>Password:</label><br></br>
            <input type="password" placeholder='Enter your password' name='pass' id='11' value={arrobj.pass} onChange={inputEvent} /><br></br>
            <label htmlFor='12'>Email:</label><br></br>
            <input type="email" placeholder='Enter your password' name='email' id='12' value={arrobj.email} onChange={inputEvent} /><br></br>
            <textarea rows="5" value={arrobj.text} onChange={inputEvent} name='text'></textarea><br></br>
            <input type="checkbox" /> <span>I accept the terms</span>
            <div className="submit-btn">
              <button type='submit'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact
