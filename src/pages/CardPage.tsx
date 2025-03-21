import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CreditCard, Shield, Bell, RefreshCcw, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

const CardPage = () => {
  // Calculate expiry date (6 months from now)
  const expiryDate = new Date();
  expiryDate.setMonth(expiryDate.getMonth() + 6);
  const formattedExpiryDate = expiryDate.toLocaleDateString('en-US', { 
    month: 'long',
    year: 'numeric'
  });

  const isExpired = new Date() > expiryDate;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-600 to-green-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <div className="relative">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                  Corporate Card
                </h1>
                <p className="mt-3 text-lg text-green-100 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Empower your business with our smart corporate card solution. Built for modern businesses with powerful controls and real-time tracking.
                </p>
              </div>
              <div className="mt-12 lg:mt-0 lg:ml-8">
                <div className="relative mx-auto w-full max-w-md transform transition-all">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1613243555988-441166d4d6fd?auto=format&fit=crop&q=80&w=2940"
                      alt="ZipCord Corporate Card"
                      className="w-full rounded-xl shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl flex items-end p-6">
                      <div className="text-white">
                        <p className="text-sm font-medium">Valid until</p>
                        <p className="text-xl font-bold">{formattedExpiryDate}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card Status Section */}
      <div className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <CreditCard className="h-6 w-6 text-green-600" />
                <h2 className="ml-2 text-xl font-semibold text-gray-900">Card Status</h2>
              </div>
              <div className="flex items-center">
                {isExpired ? (
                  <div className="flex items-center text-red-600">
                    <XCircle className="h-5 w-5 mr-2" />
                    <span className="font-medium">Expired</span>
                  </div>
                ) : (
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span className="font-medium">Active</span>
                  </div>
                )}
              </div>
            </div>
            {isExpired && (
              <div className="mt-4 bg-red-50 border-l-4 border-red-400 p-4">
                <div className="flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-400" />
                  <p className="ml-3 text-sm text-red-700">
                    Your card has expired. Please contact your administrator to renew your corporate card.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Card Features Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Corporate Card Features
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Everything you need to manage business expenses efficiently
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Security Features */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center">
                <Shield className="h-8 w-8 text-green-500" />
                <h3 className="ml-3 text-xl font-medium text-gray-900">Security</h3>
              </div>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <span className="ml-3 text-gray-500">EMV Chip Technology</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <span className="ml-3 text-gray-500">Fraud Protection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <span className="ml-3 text-gray-500">Zero Liability Protection</span>
                </li>
              </ul>
            </div>

            {/* Notifications */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center">
                <Bell className="h-8 w-8 text-green-500" />
                <h3 className="ml-3 text-xl font-medium text-gray-900">Notifications</h3>
              </div>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <span className="ml-3 text-gray-500">Real-time Transaction Alerts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <span className="ml-3 text-gray-500">Spending Limit Alerts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <span className="ml-3 text-gray-500">Renewal Reminders</span>
                </li>
              </ul>
            </div>

            {/* Renewal Process */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center">
                <RefreshCcw className="h-8 w-8 text-green-500" />
                <h3 className="ml-3 text-xl font-medium text-gray-900">Renewal</h3>
              </div>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <span className="ml-3 text-gray-500">Automatic Renewal Option</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <span className="ml-3 text-gray-500">30-Day Renewal Notice</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <span className="ml-3 text-gray-500">Seamless Card Transition</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Usage Guidelines */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Card Usage Guidelines
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Important information for cardholders
            </p>
          </div>

          <div className="mt-12 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="divide-y divide-gray-200">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">Authorized Usage</h3>
                <p className="mt-2 text-gray-500">
                  Corporate cards are to be used exclusively for business-related expenses. Personal use is strictly prohibited.
                </p>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">Spending Limits</h3>
                <p className="mt-2 text-gray-500">
                  Each card comes with predetermined spending limits. Contact your administrator for limit adjustments.
                </p>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">Receipt Management</h3>
                <p className="mt-2 text-gray-500">
                  All transactions require receipt submission within 48 hours through the ZipCord mobile app or web portal.
                </p>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">Lost or Stolen Cards</h3>
                <p className="mt-2 text-gray-500">
                  Report immediately through the ZipCord portal or contact support at 1-800-ZipCord-HELP.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CardPage;