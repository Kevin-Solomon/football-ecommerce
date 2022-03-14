import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { useState } from 'react';
import '../../pages/Login/Login.css';
function Singup() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    acceptCondition: false,
  });
  const changeHandler = e => {
    setUser(prevUser => {
      return {
        ...prevUser,
        [e.target.name]: e.target.value,
      };
    });
  };
  console.log(user);
  return (
    <>
      <Navbar />
      <div className="login-container">
        <div className="login-card">
          <h2>Sign Up</h2>
          <form>
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
              type="text"
            />
            <label htmlFor="password"> Password </label>
            <input
              id="password"
              name="password"
              value={user.password}
              onChange={changeHandler}
              className="form-input"
              type="text"
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
            <button className="btn primary-btn" type="submit">
              Sign Up
            </button>
            <p>
              <a>Already have an Account ?</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Singup;
