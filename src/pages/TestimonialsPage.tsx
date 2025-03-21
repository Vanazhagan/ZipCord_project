import React from 'react';
import Header from '../components/Header';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">What Our</span>
              <span className="block text-green-600">Customers Say</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Read success stories from businesses that have transformed their operations with Ramp.
            </p>
          </div>
        </div>
      </div>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default TestimonialsPage;