import React, { useState } from 'react'
import { Footer } from './Footer'
import "./Contact.css"
export const Contact = () => {
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
    <div className='contact-main-container'>
            <h1>Get in touch</h1>
            <div className='contact-div-container'>
                <div className='contact-div-left-container'>
                    <section>
                    <h4>Opening Hours</h4>
                    <p>Mon - Fri: 8am - 8pm</p>
                    <p>Saturday: 9am - 7pm</p>
                    <p>Sunday: 9am - 8pm</p>
                    </section><br></br>
                    <section>
                    <h4>Store Location</h4>
                    <p>500 Terry Francine Street</p>
                    <p>San Francisco, CA 94158</p>
                    <p>info@mysite.com</p>
                    <p>123-456-7890</p>
                </section>
                </div>
                <div>
                    <h4>We're here to help!</h4>
                    <p>Fill out the form with any query on your mind and we'll get back to you as soon as possible</p>
                    <div className='careers-container'>
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
                </div>
            </div>
            <Footer/>
    </div>
  )
}
