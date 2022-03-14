import React from 'react';
import { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Login.css';
function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  return (
    <>
      <Navbar />

      <div className="login-container">
        <div className="login-card">
          <h2>Login</h2>
          <form>
            <label htmlFor="email-input"> Email Address </label>
            <input
              onChange={e =>
                setUser(prevUser => ({
                  ...prevUser,
                  [e.target.name]: e.target.value,
                }))
              }
              value={user.email}
              id="email-input"
              className="form-input"
              type="text"
              name="email"
            />
            <label htmlFor="password-input"> Password </label>
            <input
              name="password"
              value={user.password}
              id="password-input"
              className="form-input"
              onChange={e =>
                setUser(prevUser => ({
                  ...prevUser,
                  [e.target.name]: e.target.value,
                }))
              }
              type="text"
            />
            <div className="help-container">
              <input
                type="radio"
                checked={user.rememberMe}
                onChange={() =>
                  setUser(prevUser => ({ ...prevUser, rememberMe: true }))
                }
              />
              <label>Remember Me ?</label>
              <a>Forgot your Password </a>
            </div>
            <button className="btn primary-btn" type="submit">
              Login
            </button>
            <p>
              <a>Create New Account ?</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
