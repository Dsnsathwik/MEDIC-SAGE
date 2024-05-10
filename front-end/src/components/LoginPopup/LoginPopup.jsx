// LoginPopup.jsx
import React, { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import './LoginPopup.css';
import axios from "axios"
import { AppContext } from '../../context/appContext';

const LoginPopup = ({ setShowLogin }) => {

  const url = "http://localhost:4000"
  const [token,setToken] = useState("")

  const [currState, setCurrState] = useState("Login");
  const [data,setData] = useState({
    name:"",
    email:"",
    password:"",
    cpassword:""
  })

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }

  const onLogin = async (event) =>{
    event.preventDefault()
    let newUrl = url;
    if(currState === "Login"){
      newUrl += "/api/user/login"
    }
    else{
      newUrl += "/api/user/register"
    }
    const response = await axios.post(newUrl,data)
    if(response.data.success){
      setToken(response.data.token);
      localStorage.setItem("token",response.data.token);
      setShowLogin(false)
    }
    else{
      alert(response.data.message)
    }
  }

  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross} alt="Close" />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? <></> : <input name = 'name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Enter Your Name' required />}
          <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Enter Your Email' required />
          <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Enter Password' required />
          {currState === "Login" ? <></> : <input name='cpassword' onChange={onChangeHandler} value={data.cpassword} type="password" placeholder='Re-enter Password' required />}
        </div>
        <button type='submit'>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>Agree to the Terms and Conditions</p>
        </div>
        {currState === "Login"
          ? <p>Create an account? <span onClick={() => setCurrState("Sign Up")}>Click here...</span></p>
          : <p>Already have an account! <span onClick={() => setCurrState("Login")}>Login here...</span></p>
        }
      </form>
    </div>
  );
}

export default LoginPopup;
