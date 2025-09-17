const About = () => {
  const features = [
    {
      icon: "🤖",
      title: "AI-Powered Intelligence",
      description: "Advanced artificial intelligence that learns and adapts to your emotional patterns and preferences."
    },
    {
      icon: "💝",
      title: "Emotional Support",
      description: "Provides comfort and companionship during difficult times with personalized interactions."
    },
    {
      icon: "🔄",
      title: "Always Following",
      description: "Seamlessly follows you around your home, ensuring you're never truly alone."
    },
    {
      icon: "🗣️",
      title: "Natural Conversation",
      description: "Engages in meaningful conversations with natural language processing and empathetic responses."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Aether Soul
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Aether Soul represents the future of emotional wellness technology. Our robot companion is designed 
            to understand, support, and uplift you through life's challenges with cutting-edge AI and empathetic design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl bg-gray-50 hover:bg-primary-50 transition-all duration-300 hover:transform hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12 animate-fade-in">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Revolutionizing Emotional Wellness
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Mental health and emotional well-being are crucial aspects of our daily lives. Aether Soul bridges 
                the gap between technology and human connection, offering a reliable companion that's always there 
                when you need support most.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                  24/7 emotional support and companionship
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                  Learns and adapts to your unique personality
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                  Safe, private, and non-judgmental interactions
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <img
                src="https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Aether Soul in action"
                className="w-80 h-64 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;