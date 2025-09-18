import { useEffect } from 'react';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const plans = [
    {
      name: "Aether Soul Basic",
      price: "$299",
      period: "/month",
      description: "Perfect for individuals seeking essential emotional support and companionship",
      features: [
        "Basic AI conversation capabilities",
        "Mood detection and response",
        "Daily emotional check-ins",
        "Simple following behavior",
        "Voice recognition for up to 2 users",
        "Basic learning algorithms",
        "Email support during business hours",
        "Mobile app for basic controls"
      ],
      warranty: "6 months comprehensive warranty covering all hardware defects, software issues, and normal wear and tear. Includes free repairs and replacements.",
      delivery: "Free standard delivery within 7-10 business days to your doorstep. Tracking information provided.",
      returns: "30-day money-back guarantee with free return shipping. No questions asked if you're not completely satisfied.",
      popular: false
    },
    {
      name: "Aether Soul Pro",
      price: "$599",
      period: "/month",
      description: "Advanced AI companion with enhanced emotional intelligence and smart features",
      features: [
        "Advanced AI with long-term memory",
        "Advanced emotion recognition and analysis",
        "Personalized responses based on your history",
        "Smart home integration (Alexa, Google, Apple)",
        "Voice recognition for up to 6 users",
        "Machine learning personality adaptation",
        "24/7 priority support via phone and chat",
        "Advanced mobile app with detailed analytics",
        "Weekly emotional wellness reports",
        "Custom conversation topics and interests"
      ],
      warranty: "12 months comprehensive warranty with priority repair service. Includes free replacements, software updates, and dedicated support line.",
      delivery: "Free express delivery within 3-5 business days with white-glove setup service. Professional installation included.",
      returns: "60-day money-back guarantee with free return shipping and setup assistance. Full refund if not completely satisfied.",
      popular: true
    }
  ];

  const additionalServices = [
    {
      title: "Extended Warranty Plans",
      description: "Extend your peace of mind with additional warranty coverage",
      options: [
        "1-year extension: $99",
        "2-year extension: $179",
        "3-year extension: $249"
      ]
    },
    {
      title: "Premium Support",
      description: "Get priority access to our expert support team",
      options: [
        "24/7 phone support",
        "Remote diagnostics",
        "Priority repair service",
        "Dedicated account manager"
      ]
    },
    {
      title: "Customization Services",
      description: "Personalize your Aether Soul experience",
      options: [
        "Custom personality programming",
        "Specialized conversation topics",
        "Integration with health apps",
        "Family-specific configurations"
      ]
    }
  ];

  const comparisonFeatures = [
    { feature: "AI Conversation", basic: "Basic", pro: "Advanced" },
    { feature: "Emotion Recognition", basic: "Simple", pro: "Advanced" },
    { feature: "Memory Retention", basic: "Short-term", pro: "Long-term" },
    { feature: "User Profiles", basic: "2 users", pro: "6 users" },
    { feature: "Smart Home Integration", basic: "❌", pro: "✅" },
    { feature: "Mobile App", basic: "Basic", pro: "Advanced" },
    { feature: "Support", basic: "Email", pro: "24/7 Priority" },
    { feature: "Warranty", basic: "6 months", pro: "12 months" },
    { feature: "Delivery", basic: "7-10 days", pro: "3-5 days" },
    { feature: "Return Policy", basic: "30 days", pro: "60 days" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cream-50 via-cream-100 to-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-cream-900 mb-6">
              Our Robot Models
            </h1>
            <p className="text-xl text-cream-700 max-w-4xl mx-auto leading-relaxed">
              Choose the perfect Aether Soul model that fits your lifestyle. Both models include our core 
              emotional support features with comprehensive warranty and return policies.
            </p>
          </div>
        </div>
      </section>

      {/* Models Comparison */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative bg-cream-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 animate-slide-up ${
                  plan.popular ? 'ring-2 ring-cream-600 border-2 border-cream-600' : 'border border-cream-300'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cream-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-cream-900 mb-2">{plan.name}</h3>
                    <p className="text-cream-700 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cream-900">{plan.price}</span>
                      <span className="text-lg text-cream-600 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-cream-900 mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm">
                          <svg className="w-4 h-4 text-cream-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                          <span className="text-cream-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4 mb-6 text-sm">
                    <div className="bg-cream-200 border border-cream-300 p-4 rounded-lg">
                      <h5 className="font-semibold text-cream-900 mb-2 flex items-center">
                        🛡️ Warranty Coverage
                      </h5>
                      <p className="text-cream-700">{plan.warranty}</p>
                    </div>
                    <div className="bg-cream-200 border border-cream-300 p-4 rounded-lg">
                      <h5 className="font-semibold text-cream-900 mb-2 flex items-center">
                        🚚 Delivery Information
                      </h5>
                      <p className="text-cream-700">{plan.delivery}</p>
                    </div>
                    <div className="bg-cream-200 border border-cream-300 p-4 rounded-lg">
                      <h5 className="font-semibold text-cream-900 mb-2 flex items-center">
                        ↩️ Return Policy
                      </h5>
                      <p className="text-cream-700">{plan.returns}</p>
                    </div>
                  </div>

                  <button 
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 cursor-pointer ${
                      plan.popular 
                        ? 'bg-cream-600 text-white hover:bg-cream-700 shadow-lg hover:shadow-xl' 
                        : 'bg-cream-300 text-cream-800 hover:bg-cream-400'
                    }`}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="py-20 bg-cream-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-cream-900 mb-4">
              Detailed Comparison
            </h2>
            <p className="text-lg text-cream-700">
              Compare features side-by-side to make the best choice for your needs.
            </p>
          </div>

          <div className="bg-cream-50 rounded-xl overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-cream-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Feature</th>
                    <th className="px-6 py-4 text-center font-semibold">Basic</th>
                    <th className="px-6 py-4 text-center font-semibold">Pro</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-cream-100' : 'bg-cream-50'}>
                      <td className="px-6 py-4 font-medium text-cream-900">{item.feature}</td>
                      <td className="px-6 py-4 text-center text-cream-700">{item.basic}</td>
                      <td className="px-6 py-4 text-center text-cream-700">{item.pro}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-cream-900 mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-cream-700">
              Enhance your Aether Soul experience with our premium services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-cream-200 border border-cream-300 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-xl font-semibold text-cream-900 mb-4">{service.title}</h3>
                <p className="text-cream-700 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.options.map((option, optionIndex) => (
                    <li key={optionIndex} className="flex items-center text-cream-700">
                      <span className="w-2 h-2 bg-cream-600 rounded-full mr-3"></span>
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cream-600 to-cream-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Help Choosing?
          </h2>
          <p className="text-xl text-cream-100 mb-8 leading-relaxed">
            Our specialists are here to help you find the perfect Aether Soul model for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-cream-700 px-8 py-4 rounded-lg font-semibold hover:bg-cream-50 transform hover:scale-105 transition-all duration-200 shadow-lg">
              Contact Specialists
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cream-700 transition-all duration-200">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;