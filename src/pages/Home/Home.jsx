import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Category from './components/Category/Category';
import Hero from './components/Hero/Hero';
import Trending from './components/Trending/Trending';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Category />
      <Trending />
      <Footer />
    </>
  );
}

export default Home;
