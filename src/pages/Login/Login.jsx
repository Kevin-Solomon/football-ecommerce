import React from 'react';
import { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Login.css';
import { useAuth } from '../../context/auth/authContext';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [hidden, setHidden] = useState(false);
  const [error, setError] = useState(false);
  const { setToken } = useAuth();
  const navigate = useNavigate();
  async function loginUser(e, { email, password }) {
    e.preventDefault();
    try {
      const response = await axios.post(
        '/api/auth/login',
        JSON.stringify({ email, password })
      );
      setToken({ token: response.data.encodedToken });
      navigate('/');
    } catch (err) {
      setError(true);
    }
  }
  return (
    <>
      <Navbar inLogin />
      {error && 'ERROR'}
      <div className="login-container">
        <div className="login-card">
          <h2>Login</h2>
          <form onSubmit={e => loginUser(e, user)}>
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
            <button
              className="btn primary-btn"
              onClick={e => {
                setUser({
                  email: 'adarshbalika@gmail.com',
                  password: 'adarshBalika123',
                });
              }}
            >
              Login With Test Credentials
            </button>
            <p>
              <Link to="/signup">Create New Account ?</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
