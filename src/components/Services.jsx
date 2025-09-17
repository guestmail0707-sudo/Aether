const Services = () => {
  const plans = [
    {
      name: "Aether Soul Basic",
      price: "$299",
      period: "/month",
      description: "Perfect for individuals seeking essential emotional support and companionship",
      features: [
        "Basic AI conversation",
        "Mood detection",
        "Daily check-ins",
        "Simple following behavior",
        "Email support",
        "6-month warranty",
        "Free delivery (7-10 business days)",
        "30-day return policy"
      ],
      warranty: "6 months comprehensive warranty covering all hardware and software issues",
      delivery: "Free standard delivery within 7-10 business days",
      returns: "30-day money-back guarantee with free return shipping",
      popular: false
    },
    {
      name: "Aether Soul Pro",
      price: "$599",
      period: "/month",
      description: "Advanced AI companion with enhanced emotional intelligence and smart features",
      features: [
        "Advanced AI with memory",
        "Emotion recognition",
        "Personalized responses",
        "Smart home integration",
        "24/7 priority support",
        "Weekly progress reports",
        "12-month warranty",
        "Express delivery (3-5 business days)",
        "60-day return policy"
      ],
      warranty: "12 months comprehensive warranty with priority repair service",
      delivery: "Free express delivery within 3-5 business days",
      returns: "60-day money-back guarantee with free return shipping and setup assistance",
      popular: true
    }
  ];

  return (
    <section id="services" className="py-20 bg-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Robot Models
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect Aether Soul model that fits your lifestyle. Both models include our core emotional support features 
            with comprehensive warranty and return policies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-primary-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 animate-slide-up ${
                plan.popular ? 'ring-2 ring-primary-500' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-lg text-gray-600 ml-1">{plan.period}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {plan.features.slice(0, -3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <svg className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4 mb-6 text-sm">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-1">🛡️ Warranty</h5>
                    <p className="text-gray-600">{plan.warranty}</p>
                  </div>
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-1">🚚 Delivery</h5>
                    <p className="text-gray-600">{plan.delivery}</p>
                  </div>
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-1">↩️ Returns</h5>
                    <p className="text-gray-600">{plan.returns}</p>
                  </div>
                </div>

                <button 
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 cursor-pointer ${
                    plan.popular 
                      ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl' 
                      : 'bg-primary-200 text-primary-800 hover:bg-primary-300'
                  }`}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <p className="text-gray-600 mb-4">Need help choosing the right model?</p>
          <button className="text-primary-600 font-semibold hover:text-primary-700 transition-colors cursor-pointer">
            Contact our specialists for personalized recommendations →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;