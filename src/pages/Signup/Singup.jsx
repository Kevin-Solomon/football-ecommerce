import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { useState } from 'react';
import '../../pages/Login/Login.css';
import './Signup.css';
import axios from 'axios';
import { useAuth } from './../../context/auth/authContext';
import { useNavigate, Link } from 'react-router-dom';
function Singup() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    acceptCondition: false,
  });
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const changeHandler = e => {
    setUser(prevUser => {
      return {
        ...prevUser,
        [e.target.name]: e.target.value,
      };
    });
  };
  const signupHandler = async (e, { email, password }) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/signup', {
        email,
        password,
      });
      console.log(response);
      setToken({
        token: response.data.encodedToken,
        user: response.data.createdUser,
      });
      navigate('/');
    } catch (err) {
      console.error('error', err);
    }
  };
  return (
    <>
      <Navbar />
      <div className="login-container">
        <div className="login-card">
          <h2>Sign Up</h2>
          <form onSubmit={e => signupHandler(e, user)}>
            <label htmlFor="name"> Name </label>
            <input
              id="name"
              name="name"
              value={user.name}
              onChange={changeHandler}
              className="form-input"
              type="text"
            />
            <label htmlFor="email"> Email Address </label>
            <input
              id="email"
              name="email"
              value={user.email}
              onChange={changeHandler}
              className="form-input"
              type="email"
            />
            <label htmlFor="password"> Password </label>
            <input
              id="password"
              name="password"
              value={user.password}
              onChange={changeHandler}
              className="form-input"
              type="password"
            />

            <div className="help-container">
              <input
                id="acceptCondition"
                name="acceptCondition"
                onChange={e => {
                  setUser(prevUser => ({
                    ...prevUser,
                    acceptCondition: !prevUser.acceptCondition,
                  }));
                }}
                checked={user.acceptCondition}
                type="checkbox"
              />
              <label htmlFor="acceptCondition">
                I accept all terms and conditions
              </label>
            </div>
            <button
              className="btn primary-btn"
              type="submit"
              disabled={user.acceptCondition ? false : true}
            >
              Sign Up
            </button>
            <p>
              <Link to="/login">Already have an Account ?</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Singup;
