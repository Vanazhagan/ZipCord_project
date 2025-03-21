import React from 'react';
import Header from '../components/Header';
import Pricing from '../components/Pricing';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Simple,</span>
              <span className="block text-green-600">Transparent Pricing</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Choose the perfect plan that fits your business needs and scale as you grow.
            </p>
          </div>
        </div>
      </div>
      <Pricing />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default PricingPage;