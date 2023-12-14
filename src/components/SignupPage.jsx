import React from 'react';
import { Link } from 'react-router-dom';
import './SignupPage.css';

const SignupPage = () => {
  return (
    <div className="container">
      <div className="form-section">
        <h2 style={{ fontSize: '24px' }}>Signup</h2>
        <div className="signup-box">
          <input type="text" className="name ele" placeholder="Enter your name" />
          <input type="email" className="email ele" placeholder="Enter your Email" />
          <input type="password" className="password ele" placeholder="Enter your password" />
          <input type="password" className="password ele" placeholder="Confirm your password" />
          <button className="clkbtn">
            Signup
          </button>
        </div>
        <div className="login-link">
          Already have an account? <Link to="/">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
