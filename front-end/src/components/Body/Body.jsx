import React from 'react';
import './Body.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Body = () => {
  return (
    <div className='body'>
      <div className='panel'>
        <Link to='/disease-prediction' className='panel-content'>
          <img src={assets.diseaseprediction} alt="Disease Prediction" />
          <h2>Disease Prediction</h2>
          <p>Our advanced algorithms analyze your symptoms and medical history to predict potential diseases or health conditions. Get personalized insights and recommendations to take proactive measures for your well-being.</p>
        </Link>
      </div>
      <div className='panel'>
        <Link to='/disease-pedia' className='panel-content'>
        <img src={assets.diseasepedia} alt="Disease Pedia" />
        <h2>Disease Pedia</h2>
        <p>Explore our comprehensive database of diseases and health conditions. From symptoms to treatments, our curated information helps you understand and manage various health issues effectively.</p>
        </Link>
      </div>
    </div>
  );
};

export default Body;
