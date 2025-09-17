const About = () => {
  const features = [
    {
      icon: "🤖",
      title: "AI-Powered Intelligence",
      description: "Advanced artificial intelligence that learns and adapts to your emotional patterns and preferences over time."
    },
    {
      icon: "💝",
      title: "Emotional Support",
      description: "Provides comfort and companionship during difficult times with personalized interactions tailored to your needs."
    },
    {
      icon: "🔄",
      title: "Always Following",
      description: "Seamlessly follows you around your home, ensuring you're never truly alone when you need support most."
    },
    {
      icon: "🗣️",
      title: "Natural Conversation",
      description: "Engages in meaningful conversations with natural language processing and empathetic responses."
    }
  ];

  const timeline = [
    {
      year: "2020",
      title: "The Vision",
      description: "Founded with the mission to revolutionize emotional wellness through AI companionship technology."
    },
    {
      year: "2021",
      title: "Research & Development",
      description: "Extensive research into emotional AI, user psychology, and companion robotics began."
    },
    {
      year: "2022",
      title: "First Prototype",
      description: "Successfully developed and tested the first Aether Soul prototype with beta users."
    },
    {
      year: "2023",
      title: "Market Launch",
      description: "Officially launched Aether Soul to the public with overwhelming positive response."
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Expanded to 50+ countries, helping thousands find emotional support and companionship."
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Mitchell",
      role: "CEO & Founder",
      description: "Former MIT AI researcher with 15+ years in emotional intelligence technology.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "James Rodriguez",
      role: "CTO",
      description: "Robotics engineer with expertise in autonomous systems and human-robot interaction.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Dr. Emily Chen",
      role: "Head of Psychology",
      description: "Clinical psychologist specializing in emotional wellness and therapeutic AI applications.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cream-50 via-cream-100 to-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-cream-900 mb-6">
              About Aether Soul
            </h1>
            <p className="text-xl text-cream-700 max-w-4xl mx-auto leading-relaxed">
              We're pioneering the future of emotional wellness through intelligent robot companions 
              that understand, support, and uplift you through life's challenges.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold text-cream-900 mb-6">Our Mission</h2>
              <p className="text-cream-700 mb-6 leading-relaxed">
                At Aether Soul, we believe that everyone deserves companionship and emotional support. 
                Our mission is to create intelligent robot companions that provide genuine care, 
                understanding, and comfort to improve mental health and overall well-being.
              </p>
              <p className="text-cream-700 mb-6 leading-relaxed">
                We combine cutting-edge artificial intelligence with empathetic design to create 
                companions that don't just respond to commands, but truly understand and care about 
                your emotional state and well-being.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-cream-600 rounded-full mr-4"></span>
                  <span className="text-cream-800">Advancing emotional AI technology</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-cream-600 rounded-full mr-4"></span>
                  <span className="text-cream-800">Improving mental health accessibility</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-cream-600 rounded-full mr-4"></span>
                  <span className="text-cream-800">Creating meaningful human-AI relationships</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <img
                src="https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Aether Soul Mission"
                className="w-full max-w-md h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-cream-900 mb-4">
              What Makes Us Different
            </h2>
            <p className="text-lg text-cream-700 max-w-3xl mx-auto leading-relaxed">
              Aether Soul represents the future of emotional wellness technology with features 
              designed specifically for human emotional needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl bg-cream-200 border border-cream-300 hover:bg-cream-300 hover:border-cream-400 transition-all duration-300 hover:transform hover:scale-105 animate-slide-up shadow-sm hover:shadow-md"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-cream-900 mb-3">{feature.title}</h3>
                <p className="text-cream-700 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-cream-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-cream-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-cream-700">
              From vision to reality - the story of how Aether Soul came to life.
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start space-x-6 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex-shrink-0 w-20 h-20 bg-cream-600 border-2 border-cream-700 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {item.year}
                </div>
                <div className="flex-1 bg-cream-100 border border-cream-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-cream-900 mb-2">{item.title}</h3>
                  <p className="text-cream-700 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-cream-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-cream-700">
              The passionate experts behind Aether Soul's revolutionary technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center bg-cream-200 border border-cream-300 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-cream-400 shadow-md"
                />
                <h3 className="text-xl font-semibold text-cream-900 mb-2">{member.name}</h3>
                <p className="text-cream-600 font-medium mb-3">{member.role}</p>
                <p className="text-cream-700 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-cream-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-cream-700">
              The principles that guide everything we do at Aether Soul.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-cream-100 border border-cream-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-xl font-semibold text-cream-900 mb-3">🤝 Empathy First</h3>
              <p className="text-cream-700">Every feature is designed with genuine care and understanding for human emotional needs.</p>
            </div>
            <div className="bg-cream-100 border border-cream-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-xl font-semibold text-cream-900 mb-3">🔒 Privacy & Trust</h3>
              <p className="text-cream-700">Your emotional data is sacred. We ensure complete privacy and security in all interactions.</p>
            </div>
            <div className="bg-cream-100 border border-cream-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-xl font-semibold text-cream-900 mb-3">🚀 Innovation</h3>
              <p className="text-cream-700">Continuously pushing the boundaries of AI and robotics to better serve human wellness.</p>
            </div>
            <div className="bg-cream-100 border border-cream-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-xl font-semibold text-cream-900 mb-3">🌍 Accessibility</h3>
              <p className="text-cream-700">Making emotional support and companionship accessible to everyone, everywhere.</p>
            </div>
            <div className="bg-cream-100 border border-cream-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-xl font-semibold text-cream-900 mb-3">💡 Transparency</h3>
              <p className="text-cream-700">Open and honest about our technology, capabilities, and limitations.</p>
            </div>
            <div className="bg-cream-100 border border-cream-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-xl font-semibold text-cream-900 mb-3">🎯 Excellence</h3>
              <p className="text-cream-700">Committed to delivering the highest quality products and support experiences.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;