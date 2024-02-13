// src/Login.js (note the lowercase 'l')
import React from 'react';

const Login = ({ onRegisterClick }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for handling form submission (e.g., API call, authentication)
    console.log('Form submitted!');
  };

  return (
    <div className="wrapper">
      <span className="icon-close"><ion-icon name="close"></ion-icon></span>
      <div className="form-box login">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="mail"></ion-icon>
            </span>
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="lock-closed"></ion-icon>
            </span>
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className="remember-forget">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#!">Forgot Password?</a>
          </div>
          <button type="submit" className="btn">
            Login
          </button>
          <div className="login-register">
            <p>
              Don't have an account?
               <button type="button" className="register-link" onClick={onRegisterClick}>
                {' '}
                  Register
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;