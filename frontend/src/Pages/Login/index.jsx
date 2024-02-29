import React from 'react';
import Navbar from '../../Components/NavBar';
import { useNavigate } from 'react-router-dom';

const Login = ({ onRegisterClick }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for handling form submission (e.g., API call, authentication)
    console.log('Form submitted!');
  };

  const register = () => {
    navigate('/register');
  }

  const login = () => {
    navigate('/recent_workplaces');
  }

  return (
    <div>
      <Navbar />
      <div className="wrapper">
        <span className="icon-close"><ion-icon name="close"></ion-icon></span>
        <div className="form-box login">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="mail"></ion-icon>
              </span>
              <input type="email" required placeholder="e-mail" className="custom-input"/>
            </div>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="lock-closed"></ion-icon>
              </span>
              <input type="password" required placeholder="password" className="custom-input" />
            </div>
            <div className="remember-forget">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#!">Forgot Password?</a>
            </div>
            <button type="submit" className="btn" onClick={login}>
              Login
            </button>
            <div className="login-register">
              <p>
                Don't have an account?
                <button type="button" className="register-link" onClick={register}>
                  {' '}
                  Register
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
