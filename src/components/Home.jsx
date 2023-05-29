import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Cards1 from './Cards1';
import Trusted from './Trusted';
import Footer from './Footer';
import Features from './Features';

function Home() {
  return (
    <>
        <Navbar />
        <Hero />
        <Cards1 />
        <Features/>
        <Trusted />
        <Footer />
    </>
  );
}

export default Home;