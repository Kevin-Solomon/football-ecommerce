import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Category from './components/Category/Category';
import Hero from './components/Hero/Hero';
import Trending from './components/Trending/Trending';

function Home() {
  return (
    <>
      <div class="body-center">
        <Navbar />
        <Hero />
        <Category />
        <Trending />
      </div>
      <Footer />
    </>
  );
}

export default Home;
