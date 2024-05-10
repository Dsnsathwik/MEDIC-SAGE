import React from 'react';
import './Header.css';
import { assets } from '../../assets/assets';

const Header = () => {
  return (
    <div className='header'>
      <div className="header-content">
        <h2>MedicSage: Empowering Your Health...</h2>
        <p className="header-text">Step into a world where your symptoms speak volumes about your health. Our innovative platform deciphers these signals, unveiling personalized predictions and empowering precautions. Navigate your wellness journey armed with knowledge and confidence, as we guide you through every twist and turn towards a healthier tomorrow.</p>
      </div>
      <img src={assets.doctorImage} alt="Doctor" className="doctor-image" />
    </div>
  );
};

export default Header;
