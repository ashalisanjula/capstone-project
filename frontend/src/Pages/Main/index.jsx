// src/App.js
import React, { useState } from 'react';
//import { Routes, Route, Link } from 'react-router-dom';
import Login from '../Login';
import About from '../About'; 
import Contact from '../Contact'; 
import Support from '../Support';
import Register from '../Register';
import Home from '../Home';
import './index.css';
import logo from "../../Assets/logo.png";
import Navbar from '../../Components/NavBar';

const Main = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const handleLoginButtonClick = () => {
    setShowLogin(!showLogin);
    setShowRegisterForm(false); // Close register form if it's open
  };

  const handleRegisterButtonClick = () => {
    setShowRegisterForm(true);
    setShowLogin(false); // Close login form if it's open
  };

  const handleRegisterFormClose = () => {
    setShowRegisterForm(false);
  };

  return (
    <div className="app-container">
      <div className={`background ${showLogin || showRegisterForm ? 'blur' : ''}`}>
        <Navbar />
      </div>
      {showLogin && (
        <div className="login-container">
          <Login onRegisterClick={handleRegisterButtonClick} />
        </div>
      )}
      {showRegisterForm && (
        <div className="register-form-container">
          <Register onClose={handleRegisterFormClose} />
        </div>
      )}
    </div>
  );
};

export default Main;