import Hero from './Hero';
import About from './About';
import Reviews from './Reviews';

const LandingPage = () => {
  const features = [
    {
      icon: "🧠",
      title: "Advanced AI Technology",
      description: "Powered by cutting-edge artificial intelligence that learns and adapts to your unique emotional patterns and communication style."
    },
    {
      icon: "💖",
      title: "Emotional Intelligence",
      description: "Recognizes subtle emotional cues through voice tone, facial expressions, and behavioral patterns to provide personalized support."
    },
    {
      icon: "🏠",
      title: "Home Integration",
      description: "Seamlessly integrates with your smart home ecosystem, following you from room to room while respecting your privacy."
    },
    {
      icon: "🔒",
      title: "Privacy First",
      description: "All conversations and emotional data are processed locally and encrypted, ensuring your personal information stays private."
    },
    {
      icon: "⚡",
      title: "24/7 Availability",
      description: "Always ready to provide support, whether it's 3 AM or during your lunch break. No appointments, no waiting."
    },
    {
      icon: "🎯",
      title: "Personalized Care",
      description: "Develops a unique understanding of your personality, preferences, and what helps you feel better during difficult times."
    }
  ];

  const stats = [
    { number: "50K+", label: "Happy Users" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Support Available" },
    { number: "15+", label: "Countries Served" }
  ];

  return (
    <div>
      <Hero />
      
      {/* Enhanced About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Revolutionizing Emotional Wellness
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Aether Soul isn't just a robot—it's your personal emotional wellness companion. Using advanced AI and empathetic design, 
              it provides the support you need, when you need it most. Whether you're dealing with daily stress, loneliness, 
              or just need someone to talk to, Aether Soul is there for you.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:bg-primary-50 transition-all duration-300 hover:transform hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* How It Works Section */}
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12 animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              How Aether Soul Works
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Setup & Learning</h4>
                <p className="text-gray-600">Aether Soul learns your routines, preferences, and emotional patterns during the first few days.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Emotional Detection</h4>
                <p className="text-gray-600">Advanced sensors detect changes in your mood, stress levels, and emotional state throughout the day.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Personalized Support</h4>
                <p className="text-gray-600">Provides tailored conversations, activities, and support based on what works best for you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Reviews />

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Emotional Wellness?
          </h2>
          <p className="text-xl text-primary-100 mb-8 leading-relaxed">
            Join thousands of users who have found comfort, support, and companionship with Aether Soul. 
            Your journey to better emotional health starts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg cursor-pointer">
              Start Your Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-200 cursor-pointer">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;