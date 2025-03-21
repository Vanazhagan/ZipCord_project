import React from 'react';
import { CreditCard, PieChart, Clock, Shield } from 'lucide-react';

const features = [
  {
    name: 'Smart Corporate Cards',
    description: 'Issue physical and virtual cards with custom spending limits and real-time tracking for every employee.',
    icon: CreditCard,
  },
  {
    name: 'Automated Expense Management',
    description: 'Eliminate manual expense reports with automatic receipt matching and categorization powered by AI.',
    icon: PieChart,
  },
  {
    name: 'Real-time Insights',
    description: 'Get instant visibility into company spending with customizable dashboards and detailed reporting.',
    icon: Clock,
  },
  {
    name: 'Secure Integrations',
    description: 'Seamlessly connect with your accounting software and other financial tools for streamlined operations.',
    icon: Shield,
  },
];

const Features = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to manage expenses
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Zipcord combines powerful software with corporate cards to help businesses save time and money.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;