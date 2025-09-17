const FAQs = () => {
  const faqs = [
    {
      question: "How does Aether Soul understand my emotions?",
      answer: "Aether Soul uses advanced AI algorithms to analyze voice tone, facial expressions, and behavioral patterns. It learns your unique emotional patterns over time to provide increasingly personalized support."
    },
    {
      question: "Is my personal data safe and private?",
      answer: "Absolutely. All conversations and emotional data are processed locally on the device and encrypted. We never share your personal information with third parties, and you have complete control over your data."
    },
    {
      question: "How long does the battery last?",
      answer: "Aether Soul has a 12-hour battery life with normal use. It automatically returns to its charging station when the battery is low and can operate while charging."
    },
    {
      question: "Can Aether Soul work with my smart home devices?",
      answer: "Yes, the Pro model integrates with most popular smart home systems including Alexa, Google Home, and Apple HomeKit. It can control lights, temperature, and other connected devices."
    },
    {
      question: "What's included in the warranty?",
      answer: "Our warranty covers all hardware defects, software issues, and normal wear and tear. Basic model includes 6 months, Pro model includes 12 months. We also provide free software updates for life."
    },
    {
      question: "How do I return my Aether Soul if I'm not satisfied?",
      answer: "We offer a hassle-free return policy. Contact our support team, and we'll arrange free pickup. You'll receive a full refund within 5-7 business days after we receive the device."
    },
    {
      question: "Does Aether Soul require internet connection?",
      answer: "Aether Soul can function offline for basic conversations and emotional support. Internet connection is required for software updates, advanced AI features, and smart home integration."
    },
    {
      question: "Can multiple family members use the same Aether Soul?",
      answer: "Yes, Aether Soul can recognize and adapt to different family members. The Pro model supports up to 4 user profiles with personalized interactions for each person."
    },
    {
      question: "How often does Aether Soul receive updates?",
      answer: "We release software updates monthly with new features, improved AI capabilities, and bug fixes. All updates are free and installed automatically with your permission."
    },
    {
      question: "What if Aether Soul stops working after the warranty period?",
      answer: "We offer extended warranty plans and out-of-warranty repair services. Our support team can diagnose issues remotely and provide repair estimates. Many issues can be resolved with software updates."
    }
  ];

  return (
    <section id="faqs" className="py-20 bg-primary-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Find answers to common questions about Aether Soul robot companions.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-primary-100 rounded-xl p-6 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors cursor-pointer">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQs;