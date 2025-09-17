const Services = () => {
  const plans = [
    {
      name: "Essential",
      price: "$299",
      period: "/month",
      description: "Perfect for individuals seeking basic emotional support",
      features: [
        "Basic AI conversation",
        "Mood detection",
        "Daily check-ins",
        "Simple following behavior",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Premium",
      price: "$599",
      period: "/month",
      description: "Advanced features for comprehensive emotional wellness",
      features: [
        "Advanced AI with memory",
        "Emotion recognition",
        "Personalized responses",
        "Smart home integration",
        "24/7 priority support",
        "Weekly progress reports"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "/month",
      description: "Complete solution for families and care facilities",
      features: [
        "Multiple user profiles",
        "Professional AI therapy mode",
        "Health monitoring",
        "Family dashboard",
        "Custom programming",
        "On-site maintenance",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Select the perfect Aether Soul plan that fits your needs. All plans include our core emotional support features 
            with varying levels of customization and support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 animate-slide-up ${
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

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 cursor-pointer ${
                    plan.popular 
                      ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <p className="text-gray-600 mb-4">Need a custom solution?</p>
          <button className="text-primary-600 font-semibold hover:text-primary-700 transition-colors cursor-pointer">
            Contact us for enterprise pricing →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;