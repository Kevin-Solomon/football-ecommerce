import React from 'react';
import '../../Home.css';
import { heroBackground } from '../../../../assets';
function Hero() {
  return (
    <>
      <main className="main-content">
        <img className="responsive-img hero-img" src={heroBackground}></img>
        <div className="hero-text">
          <p className="hero-title">Power Your Progress</p>
          <button className="btn hero-btn">
            <Link to="/product">Buy Now !</Link>
          </button>
        </div>
      </main>
    </>
  );
}

export default Hero;
