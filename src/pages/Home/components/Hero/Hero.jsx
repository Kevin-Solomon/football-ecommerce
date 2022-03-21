import React from 'react';
import '../../Home.css';
import { heroBackground } from '../../../../assets';
import { Link } from 'react-router-dom';
function Hero() {
  return (
    <>
      <main className="main-content">
        <img className="responsive-img hero-img" src={heroBackground}></img>
        <div className="hero-text">
          <p className="hero-title">Power Your Progress</p>
          <Link to="/product">
            <button className="btn hero-btn">Buy Now !</button>
          </Link>
        </div>
      </main>
    </>
  );
}

export default Hero;
