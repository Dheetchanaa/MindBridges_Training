import React, { useContext, useState } from 'react'
import {Link, useNavigate} from "react-router-dom";
import './Login.css'
import {UserContext} from './UserContext';
const Login = () => {
    const namePattern = /^[a-zA-Z][a-zA-Z\s]*[a-zA-Z]$/;
    const emailPattern = /^[a-zA-Z]+[\w_\.\-]+[@][a-z]+[\.]+[a-z]/
    const navigate = useNavigate();
    const {setUser} = useContext(UserContext);
    const [user,setUserInput] = useState({
        email:'',
        username:'',
    });
    const [error, setUserError] = useState({
        emailError : '',
        nameError : '',
    });
    const addUser = (e)=>{
        setUserInput((pre)=>({
            ...pre,[e.target.name]:e.target.value,
        }));
    }
    const validation = ()=>{
        let valid = true;
        if(!emailPattern.test(user.email)){
            valid = false;
            setUserError((pre)=>({...pre,emailError:"Please enter valid email"}))
        }
        if(!namePattern.test(user.username)){
            valid=false;
            setUserError((pre)=>({...pre,nameError:"Please enter valid name"}))
        }
        return valid;
    }
    const handleLogin = ()=>{
        if(validation()){
            setUser(user);
            setUserInput({
                email:'',
                username:'',
            });
            setUserError({
                emailError:'',
                nameError:'',
            });
            navigate('/allProducts')
        }
    }
  return (
      <section className="allContainer">
        <header>
            <h2 className="centerText">Explore a World of Products<br />Everything You Need, Delivered to Your Doorstep!</h2>
        </header>
        <section className="maincontainer">
            <form className="loginContainer">
                <h3 className="text-center">Welcome Back!</h3>
                <p className="text-center">Please log in to continue shopping</p>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input type="email" className="form-control" name="email" placeholder="Enter your email" required onChange={addUser} value={user.email||''}/>
                    <div className='Errors'>{error.emailError}</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Username</label>
                    <input type="text" className="form-control" name="username" placeholder="Enter your name" onChange={addUser} value={user.username||''}/>
                    <div className='Errors'>{error.nameError}</div>
                </div>
                <div>
                    <button type='button' className='btn btn-primary' onClick={handleLogin}>Log In</button>
                </div>
            </form>
        </section>
    </section>
  )
}
export default Login