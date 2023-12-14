import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="container">
      <div className="form-section">
        <h2>Login</h2>
        <div className="login-box">
          <input type="email" className="ele email" placeholder="Enter your e-mail" />
          <input type="password" className="ele password" placeholder="Enter Password" />
          <button className="clkbtn">
            Login 
          </button>
        </div>
        <div className="signup-link">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
