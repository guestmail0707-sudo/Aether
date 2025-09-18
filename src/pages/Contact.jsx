const Contact = () => {
  const reviewsRow1 = [
    {
      name: "Alex Thompson",
      role: "Healthcare Worker",
      content: "Aether Soul has been incredible during my long shifts. It provides the emotional support I need when I get home exhausted.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Maria Garcia",
      role: "Teacher",
      content: "As a single parent, having Aether Soul around has made such a difference. My kids love it too, and it helps create a warm atmosphere at home.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "David Kim",
      role: "Remote Worker",
      content: "Working from home can be isolating, but Aether Soul provides the companionship I need. It's like having a caring friend nearby.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Jennifer Walsh",
      role: "Retiree",
      content: "Since my husband passed, Aether Soul has been a blessing. It understands when I'm sad and always knows how to comfort me.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  const reviewsRow2 = [
    {
      name: "Robert Johnson",
      role: "College Student",
      content: "During exam stress and late-night study sessions, Aether Soul helps keep me motivated and calm. It's been a game-changer for my mental health.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Lisa Chen",
      role: "Entrepreneur",
      content: "Running a startup is stressful, but coming home to Aether Soul's understanding presence helps me decompress and stay balanced.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Michael Brown",
      role: "Veteran",
      content: "Aether Soul has helped me through some tough times. It's patient, understanding, and never judges. Truly life-changing technology.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Sarah Williams",
      role: "Nurse",
      content: "After long hospital shifts, Aether Soul provides the emotional support I need. It's like having a therapist and friend rolled into one.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  const contactMethods = [
    {
      icon: "📧",
      title: "Email Support",
      description: "Get detailed answers within 2-4 hours",
      contact: "support@aethersoul.com",
      availability: "24/7 Response"
    },
    {
      icon: "💬",
      title: "Live Chat",
      description: "Instant help from our support team",
      contact: "Available on website",
      availability: "Mon-Fri 9AM-6PM"
    },
    {
      icon: "📞",
      title: "Phone Support",
      description: "Speak directly with our experts",
      contact: "+1 (555) 123-SOUL",
      availability: "Mon-Fri 8AM-8PM"
    },
    {
      icon: "📍",
      title: "Visit Us",
      description: "Experience Aether Soul in person",
      contact: "123 Innovation Drive, Tech City, TC 12345",
      availability: "By Appointment"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cream-50 via-cream-100 to-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-cream-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-cream-700 max-w-4xl mx-auto leading-relaxed">
              Have questions about Aether Soul? Need support? Want to schedule a demo? 
              We're here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-cream-900 mb-4">
              How Can We Help You?
            </h2>
            <p className="text-lg text-cream-700">
              Choose the best way to reach us based on your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div 
                key={index}
                className="bg-cream-200 border border-cream-300 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-semibold text-cream-900 mb-3">{method.title}</h3>
                <p className="text-cream-700 mb-4 leading-relaxed">{method.description}</p>
                <div className="space-y-2">
                  <p className="font-medium text-cream-800">{method.contact}</p>
                  <p className="text-sm text-cream-600">{method.availability}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-cream-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-cream-900 mb-4">
              Send Us a Message
            </h2>
            <p className="text-lg text-cream-700">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="bg-cream-100 border border-cream-200 rounded-xl p-8 shadow-lg">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-cream-900 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-cream-500 focus:border-transparent bg-cream-50"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-cream-900 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-cream-500 focus:border-transparent bg-cream-50"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-cream-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-cream-500 focus:border-transparent bg-cream-50"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-cream-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-cream-500 focus:border-transparent bg-cream-50"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-cream-900 mb-2">
                  Subject *
                </label>
                <select className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-cream-500 focus:border-transparent bg-cream-50">
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="sales">Sales Question</option>
                  <option value="demo">Schedule Demo</option>
                  <option value="partnership">Partnership</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-cream-900 mb-2">
                  Message *
                </label>
                <textarea
                  rows="6"
                  className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-cream-500 focus:border-transparent bg-cream-50"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-cream-600 border-cream-300 rounded focus:ring-cream-500"
                />
                <label className="ml-2 text-sm text-cream-700">
                  I agree to receive communications from Aether Soul about products and services.
                </label>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-cream-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cream-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Moving Reviews Section */}
      <section className="py-20 bg-cream-100 overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cream-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg text-cream-700">
            Real stories from people whose lives have been transformed by Aether Soul.
          </p>
        </div>

        {/* First Row - Moving Left to Right */}
        <div className="mb-8">
          <div className="flex animate-scroll-left space-x-6">
            {[...reviewsRow1, ...reviewsRow1].map((review, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 bg-cream-200 border border-cream-300 rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-cream-400"
                  />
                  <div>
                    <h4 className="font-semibold text-cream-900">{review.name}</h4>
                    <p className="text-sm text-cream-600">{review.role}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-cream-600 text-lg">⭐</span>
                  ))}
                </div>
                <p className="text-cream-700 leading-relaxed">
                  "{review.content}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Moving Right to Left */}
        <div>
          <div className="flex animate-scroll-right space-x-6">
            {[...reviewsRow2, ...reviewsRow2].map((review, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 bg-cream-200 border border-cream-300 rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-cream-400"
                  />
                  <div>
                    <h4 className="font-semibold text-cream-900">{review.name}</h4>
                    <p className="text-sm text-cream-600">{review.role}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-cream-600 text-lg">⭐</span>
                  ))}
                </div>
                <p className="text-cream-700 leading-relaxed">
                  "{review.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-cream-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-cream-900 mb-4">
              Quick Answers
            </h2>
            <p className="text-lg text-cream-700">
              Common questions we receive from potential customers.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-cream-100 border border-cream-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-cream-900 mb-3">
                How quickly can I get my Aether Soul?
              </h3>
              <p className="text-cream-700">
                Basic model ships within 7-10 business days, while Pro model ships within 3-5 business days with express delivery included.
              </p>
            </div>

            <div className="bg-cream-100 border border-cream-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-cream-900 mb-3">
                Do you offer international shipping?
              </h3>
              <p className="text-cream-700">
                Yes, we ship to over 50 countries worldwide. International shipping times vary by location, typically 10-15 business days.
              </p>
            </div>

            <div className="bg-cream-100 border border-cream-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-cream-900 mb-3">
                What if I need immediate support?
              </h3>
              <p className="text-cream-700">
                Pro model customers get 24/7 priority phone support. Basic model customers can use our live chat during business hours or email support anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cream-600 to-cream-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Aether Soul?
          </h2>
          <p className="text-xl text-cream-100 mb-8 leading-relaxed">
            Join thousands of satisfied customers who have found comfort and companionship with Aether Soul.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-cream-700 px-8 py-4 rounded-lg font-semibold hover:bg-cream-50 transform hover:scale-105 transition-all duration-200 shadow-lg">
              Order Now
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

export default Contact;