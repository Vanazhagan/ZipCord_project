import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default HomePage;