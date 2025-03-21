import React from 'react';
import Header from '../components/Header';
import Features from '../components/Features';
import Footer from '../components/Footer';
import { ArrowRight, Sparkles, Clock, PiggyBank, TrendingUp, Shield, Users, Zap } from 'lucide-react';

const BenefitsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Transform Your</span>
              <span className="block text-green-600">Financial Operations</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Discover how Zipcord can revolutionize your business with powerful features and measurable benefits that drive growth and efficiency.
            </p>
          </div>
        </div>
      </div>

      {/* Core Features Section */}
      <Features />

      {/* Additional Benefits Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Why Choose ZipCord?
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Experience the transformative power of modern financial management
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Time Savings */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="px-6 py-8">
                  <div className="flex items-center">
                    <Clock className="h-8 w-8 text-green-500" />
                    <h3 className="ml-3 text-xl font-semibold text-gray-900">Time Savings</h3>
                  </div>
                  <p className="mt-4 text-gray-500">
                    Save up to 50 hours per month on expense management with automated receipt matching and real-time tracking.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center text-sm text-gray-500">
                      <ArrowRight className="h-4 w-4 mr-2 text-green-500" />
                      Automated receipt processing
                    </li>
                    <li className="flex items-center text-sm text-gray-500">
                      <ArrowRight className="h-4 w-4 mr-2 text-green-500" />
                      Instant expense categorization
                    </li>
                    <li className="flex items-center text-sm text-gray-500">
                      <ArrowRight className="h-4 w-4 mr-2 text-green-500" />
                      One-click report generation
                    </li>
                  </ul>
                </div>
              </div>

              {/* Cost Reduction */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="px-6 py-8">
                  <div className="flex items-center">
                    <PiggyBank className="h-8 w-8 text-green-500" />
                    <h3 className="ml-3 text-xl font-semibold text-gray-900">Cost Reduction</h3>
                  </div>
                  <p className="mt-4 text-gray-500">
                    Average customers see 3.3% savings on their total spend through better visibility and control.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center text-sm text-gray-500">
                      <ArrowRight className="h-4 w-4 mr-2 text-green-500" />
                      Identify duplicate subscriptions
                    </li>
                    <li className="flex items-center text-sm text-gray-500">
                      <ArrowRight className="h-4 w-4 mr-2 text-green-500" />
                      Negotiate better vendor rates
                    </li>
                    <li className="flex items-center text-sm text-gray-500">
                      <ArrowRight className="h-4 w-4 mr-2 text-green-500" />
                      Prevent unauthorized spending
                    </li>
                  </ul>
                </div>
              </div>

              {/* Growth & Scaling */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="px-6 py-8">
                  <div className="flex items-center">
                    <TrendingUp className="h-8 w-8 text-green-500" />
                    <h3 className="ml-3 text-xl font-semibold text-gray-900">Growth & Scaling</h3>
                  </div>
                  <p className="mt-4 text-gray-500">
                    Scale your financial operations effortlessly as your business grows without adding overhead.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center text-sm text-gray-500">
                      <ArrowRight className="h-4 w-4 mr-2 text-green-500" />
                      Unlimited users and cards
                    </li>
                    <li className="flex items-center text-sm text-gray-500">
                      <ArrowRight className="h-4 w-4 mr-2 text-green-500" />
                      Flexible approval workflows
                    </li>
                    <li className="flex items-center text-sm text-gray-500">
                      <ArrowRight className="h-4 w-4 mr-2 text-green-500" />
                      Multi-entity support
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ROI Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Measurable Impact
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Real results from real customers
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white mx-auto">
                <Sparkles className="h-6 w-6" />
              </div>
              <p className="mt-4 text-4xl font-extrabold text-green-600">93%</p>
              <p className="mt-2 text-sm text-gray-500">
                Of customers report improved financial visibility
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white mx-auto">
                <Shield className="h-6 w-6" />
              </div>
              <p className="mt-4 text-4xl font-extrabold text-green-600">100%</p>
              <p className="mt-2 text-sm text-gray-500">
                Fraud prevention success rate
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white mx-auto">
                <Users className="h-6 w-6" />
              </div>
              <p className="mt-4 text-4xl font-extrabold text-green-600">15k+</p>
              <p className="mt-2 text-sm text-gray-500">
                Active business users
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white mx-auto">
                <Zap className="h-6 w-6" />
              </div>
              <p className="mt-4 text-4xl font-extrabold text-green-600">2.5x</p>
              <p className="mt-2 text-sm text-gray-500">
                Faster month-end close
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to transform your business?</span>
            <span className="block text-green-200">Start saving time and money today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-gray-50"
              >
                Get started
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-500"
              >
                Contact sales
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BenefitsPage;