import React from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = ({setShowLogin}) => {
  return (
    <div className='navbar'>
      <div className="logo-container">
        <Link to = '/'><img src={assets.logo} alt="Logo" className="logo" /></Link>
      </div>
      <ul className='Navbar-menu'>
        <Link to = '/'><li><a class="flip-up">Home</a></li></Link>
        <li><a class="flip-up">About Us</a></li>
        <li><a class="flip-up">Contact Us</a></li>
      </ul>
      <div class="Navbar-right">
        <button class="login-button" onClick={()=>setShowLogin(true)}>Log in/Sign Up</button>
      </div>


    </div>
  );
}

export default Navbar;
