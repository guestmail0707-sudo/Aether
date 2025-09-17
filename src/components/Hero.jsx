const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream-50 via-cream to-primary-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Meet Your New
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600"> Companion</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Aether Soul is an intelligent robot companion designed to provide emotional support and companionship. 
              It follows you, understands your mood, and offers comfort whenever you need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer">
                Get Started Today
              </button>
              <button className="border border-primary-300 text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-200 cursor-pointer">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <img
                src="https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Aether Soul Robot Companion"
                className="relative z-10 w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;