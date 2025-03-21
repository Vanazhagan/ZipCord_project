import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatInterface from '../components/ChatInterface';

const AIFeaturePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <div className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Personalized</span>
              <span className="block text-green-600">Financial Expert Advice</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Chat with our AI assistant to receive personalized financial insights and expert advice tailored to your goals and interests.
            </p>
          </div>
        </div>
        
        <ChatInterface />
        
        <div className="max-w-3xl mx-auto mt-12 px-4">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How Zipcord AI Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-green-600 font-bold">1</span>
                </div>
                <h3 className="font-medium text-gray-900 mb-2">Share Your Goals</h3>
                <p className="text-gray-500 text-sm">Tell our AI about your financial goals, investment interests, or money-related concerns.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-green-600 font-bold">2</span>
                </div>
                <h3 className="font-medium text-gray-900 mb-2">AI Analysis</h3>
                <p className="text-gray-500 text-sm">Our intelligent system analyzes market trends, financial data, and expert strategies to provide tailored advice..</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-green-600 font-bold">3</span>
                </div>
                <h3 className="font-medium text-gray-900 mb-2">Get Expert Insights</h3>
                <p className="text-gray-500 text-sm">Receive personalized financial recommendations with clear explanations to help you make informed decisions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AIFeaturePage;