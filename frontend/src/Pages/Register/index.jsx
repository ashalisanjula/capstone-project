import React, { useState } from 'react';
import Navbar from '../../Components/NavBar';

const Register = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Perform registration logic here
    // You can add validation, API calls, etc.
    // For simplicity, just logging the values for now
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

    // Close the register form after registration
    onClose();
  };

  return (
    <div>
      <Navbar />
      <div className="wrapper">
        <span className="icon-close">
          <ion-icon name="close"></ion-icon>
        </span>
        <div className="form-box register">
          <h2>Register</h2>
          <form>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="person"></ion-icon>
              </span>
              <input
                type="text"
                required
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="custom-input"
              />
            </div>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="mail"></ion-icon>
              </span>
              <input
                type="email"
                required
                placeholder="e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="custom-input"
              />
            </div>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="lock-closed"></ion-icon>
              </span>
              <input
                type="password"
                required
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="custom-input"
              />
            </div>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="lock-closed"></ion-icon>
              </span>
              <input
                type="password"
                required
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="custom-input"
              />
            </div>
            <button type="button" className="btn" onClick={handleRegister}>
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;