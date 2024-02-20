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
    <div className="register-form">
      <h2>Register</h2>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <label>
        Confirm Password:
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </label>
      <button onClick={handleRegister}>Register</button>
    </div>
    </div>
  );
};

export default Register;