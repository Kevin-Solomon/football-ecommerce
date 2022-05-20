import React from 'react';
import { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Login.css';
import { useAuth } from '../../context/auth/authContext';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useToast } from './../../context/toast/toastContext';
import { v4 as uuid } from 'uuid';
import { useLocation } from 'react-router-dom';
function Login() {
  const { toastDispatch } = useToast();
  const [user, setUser] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const location = useLocation();
  console.log(location);
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
      toastDispatch({
        type: 'ADD_TOAST',
        payload: {
          _id: uuid(),
          message: `Welcome back, ${response.data.foundUser.firstName}  `,
          autoDelete: 3000,
        },
      });
      setToken({
        token: response.data.encodedToken,
        user: response.data.foundUser,
      });
      navigate(`${location?.state?.prevPath || '/'}`, { replace: true });
    } catch (err) {
      setError(true);
      toastDispatch({
        type: 'ADD_TOAST',
        payload: {
          _id: uuid(),
          message: `Something went wrong in the login process`,
          autoDelete: 3000,
          theme: 'danger',
        },
      });
    }
  }
  return (
    <>
      <Navbar inLogin />
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
