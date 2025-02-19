import React, { useState } from 'react'
import "./About.css"
import { Footer } from './Footer'
export const About = () => {
  const emailPattern = /^[a-zA-Z]+[\w_\.\-]+[@][a-z]+[\.]+[a-z]/
  const [user, setUserInput] = useState({
      email: '',
      firstname:'',
      lastname:'',
      startdate:''
    });
  const [error, setUserError] = useState({
      emailError: '',
      firstnameError:'',
      lastnameError:'',
      startdateError:''
    });
  const validation = () => {
    let valid = true;
    if (!emailPattern.test(user.email)) {
        valid = false;
        setUserError((pre) => ({ ...pre, emailError: "! Enter an email address like example@mysite.com." }))
    }
    if(!user.firstname){
      valid = false;
      setUserError((pre) => ({ ...pre, firstnameError: "! Enter a first name."}))
    }
    if(!user.lastname){
      valid = false;
      setUserError((pre) => ({ ...pre, lastnameError: "! Enter a last name."}))
    }
    if(!user.startdate){
      valid = false;
      setUserError((pre)=>({ ...pre, startdateError: "! Choose a date."}))
    }
    return valid;
}
const addUserInput = (e)=>{
  setUserInput((pre) => ({
    ...pre, [e.target.name]: e.target.value,
}));
}
const handleuserInput= () => {
  if (validation()) {
    setUserInput({ email: '', firstname:'', lastname:'', startdate:'' });
    setUserError({ emailError: '', firstnameError:'', lastnameError:'', startdateError:'' });
  }
};
  return (
    <div className='about-main-container'>
        <h1>About TechShed</h1>
        <div className='about-div-container'>
            <img src='https://static.wixstatic.com/media/c837a6_57c256d2c7474590a3f295bad576b0a1~mv2.jpg/v1/fill/w_814,h_843,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_57c256d2c7474590a3f295bad576b0a1~mv2.jpg'></img>
            <div>
                <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                <p>This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.</p>
            </div>
        </div>
        <div className='careers-container'>
            <h2>Careers</h2>
            <p>Check out our job postings & opportunities waiting for you</p>
            <div className='careers-inputs-main-container'>
            <div className='careers-container-inputs'>
            <label>First Name *<input type='text' name='firstname' value={user.firstname} onChange={addUserInput}></input><p className='errors'>{error.firstnameError}</p></label>
            <label>Last Name *<input type='text' name='lastname' value={user.lastname} onChange={addUserInput}></input><p className='errors'>{error.lastnameError}</p></label>
            </div>
            <div className='careers-container-inputs'>
            <label>Email *<input type='email' name='email' value={user.email} onChange={addUserInput}></input><p className='errors'>{error.emailError}</p></label>
            <label>Phone<input type='text'></input><p></p></label>
            </div>
            <div className='careers-container-inputs'>
            <label>Position You Apply For
              <select>
                <option>In-Store Sales</option>
                <option>Store Leadership</option>
                <option>In-Store Operations</option>
                <option>Warehouse & Logistics</option>
                <option>eCommerce</option>
              </select><p></p></label>
            <label>Available Start Date *<input type='date' name='startdate' value={user.startdate} onChange={addUserInput}></input><p className='errors'>{error.startdateError}</p></label>
            </div>
            <div className='careers-container-inputs'>
            <label>Link to Resume<input type='text'></input></label>
            <lable><button type='button' onClick={handleuserInput}>Submit</button></lable>
            </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
