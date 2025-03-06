import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const pricingPlans = [
  {
    name: 'Basic',
    price: 999,
    description: 'Perfect for small business websites',
    features: [
      'Custom Design',
      'Responsive Layout',
      'Basic SEO Setup',
      '2 Rounds of Revisions',
      '1 Month Support'
    ],
    recommended: false
  },
  {
    name: 'Professional',
    price: 2499,
    description: 'Ideal for growing businesses',
    features: [
      'Everything in Basic',
      'Advanced Animations',
      'Performance Optimization',
      'Advanced SEO Setup',
      'E-commerce Integration',
      '3 Months Support'
    ],
    recommended: true
  },
  {
    name: 'Enterprise',
    price: 4999,
    description: 'For large-scale applications',
    features: [
      'Everything in Professional',
      'Custom Features Development',
      'Database Integration',
      'API Development',
      'Load Testing & Optimization',
      '6 Months Support',
      '24/7 Priority Support'
    ],
    recommended: false
  }
];

export function PricingPage() {
  return (
    <section className="min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Pricing Plans
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your project. All plans include custom design and development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border ${
                plan.recommended
                  ? 'border-blue-500/50 shadow-lg shadow-blue-500/10'
                  : 'border-gray-700/50'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                  Recommended
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-2">
                  <span className="text-2xl">$</span>
                  {plan.price}
                </div>
                <p className="text-gray-400">{plan.description}</p>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="text-blue-400 flex-shrink-0" size={20} />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`block text-center py-3 px-6 rounded-lg transition-colors ${
                  plan.recommended
                    ? 'bg-blue-500 hover:bg-blue-600 text-white'
                    : 'bg-gray-700 hover:bg-gray-600 text-gray-200'
                }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 text-center bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
        >
          <h2 className="text-3xl font-semibold mb-4">Need a Custom Solution?</h2>
          <p className="text-gray-400 mb-6">
            Let's discuss your specific requirements and create a tailored package that perfectly fits your needs.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3 px-8 rounded-lg transition-colors"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
}