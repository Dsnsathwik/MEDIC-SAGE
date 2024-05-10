import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import DiseasePrediction from './pages/DiseasePrediction/DiseasePrediction';
import LoginPopup from './components/LoginPopup/LoginPopup';
import DiseasePedia from './pages/DiseasePedia/DiseasePedia';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : null}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/disease-prediction' element={<DiseasePrediction />} />
          <Route path='/disease-pedia' element={<DiseasePedia/>}/>
        </Routes>
      </div>
    </>
  );
};

export default App;
