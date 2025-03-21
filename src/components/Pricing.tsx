import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    description: 'Perfect for small businesses just getting started.',
    features: [
      'Up to 5 corporate cards',
      'Basic expense tracking',
      'Standard reporting',
      'Email support',
    ],
    cta: 'Start for free',
    mostPopular: false,
  },
  {
    name: 'Business',
    price: '$99',
    description: 'Ideal for growing companies with more complex needs.',
    features: [
      'Up to 20 corporate cards',
      'Advanced expense management',
      'Custom approval workflows',
      'Accounting software integration',
      'Priority support',
    ],
    cta: 'Start free trial',
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations requiring tailored solutions.',
    features: [
      'Unlimited corporate cards',
      'Advanced fraud protection',
      'Custom integrations',
      'Dedicated account manager',
      'API access',
      'SSO and advanced security',
    ],
    cta: 'Contact sales',
    mostPopular: false,
  },
];

const Pricing = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">Pricing</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Plans for businesses of all sizes
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Choose the perfect plan to help your business save time and money.
          </p>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:grid-cols-3">
          {tiers.map((tier) => (
            <div key={tier.name} className={`${
              tier.mostPopular ? 'border-green-500 ring-2 ring-green-500' : 'border-gray-200'
            } rounded-lg shadow-sm divide-y divide-gray-200 bg-white border`}>
              {tier.mostPopular && (
                <div className="p-1">
                  <p className="text-center text-sm font-medium text-green-600 bg-green-50 rounded-t-md py-1">
                    Most Popular
                  </p>
                </div>
              )}
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">{tier.name}</h3>
                <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">{tier.price}</span>
                  {tier.name !== 'Enterprise' && <span className="text-base font-medium text-gray-500">/month</span>}
                </p>
                <a
                  href="#"
                  className={`${
                    tier.mostPopular
                      ? 'bg-green-500 text-white hover:bg-green-600'
                      : 'bg-green-50 text-green-700 hover:bg-green-100'
                  } mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium`}
                >
                  {tier.cta}
                </a>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h4 className="text-sm font-medium text-gray-900 tracking-wide uppercase">What's included</h4>
                <ul className="mt-6 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex">
                      <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                      <span className="ml-3 text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;