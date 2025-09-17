import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email Support",
      content: "hello@aethersoul.com",
      description: "Send us an email anytime - we respond within 2-4 hours",
      hours: "24/7 Response"
    },
    {
      icon: "📱",
      title: "Phone Support",
      content: "+1 (555) 123-4567",
      description: "Speak directly with our expert support team",
      hours: "Mon-Fri: 8am-8pm PST"
    },
    {
      icon: "💬",
      title: "Live Chat",
      content: "Available on our website",
      description: "Get instant help from our support specialists",
      hours: "24/7 Available"
    },
    {
      icon: "📍",
      title: "Headquarters",
      content: "123 Innovation Drive",
      description: "Silicon Valley, CA 94025, United States",
      hours: "Visits by appointment"
    }
  ];

  const supportCategories = [
    {
      title: "Technical Support",
      description: "Hardware issues, software problems, connectivity help",
      icon: "🔧"
    },
    {
      title: "Product Information",
      description: "Features, specifications, compatibility questions",
      icon: "📋"
    },
    {
      title: "Billing & Orders",
      description: "Payment issues, order status, warranty claims",
      icon: "💳"
    },
    {
      title: "General Inquiries",
      description: "Partnership opportunities, media requests, feedback",
      icon: "💼"
    }
  ];

  const officeLocations = [
    {
      city: "San Francisco",
      address: "123 Innovation Drive, Silicon Valley, CA 94025",
      phone: "+1 (555) 123-4567",
      type: "Headquarters"
    },
    {
      city: "New York",
      address: "456 Tech Avenue, New York, NY 10001",
      phone: "+1 (555) 234-5678",
      type: "East Coast Office"
    },
    {
      city: "Austin",
      address: "789 Innovation Blvd, Austin, TX 73301",
      phone: "+1 (555) 345-6789",
      type: "Support Center"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cream-50 via-cream-100 to-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-cream-900 mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-cream-700 max-w-4xl mx-auto leading-relaxed">
              Have questions about Aether Soul? Need technical support? Want to share feedback? 
              We'd love to hear from you. Our expert team is here to help 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-cream-900 mb-4">
              How to Reach Us
            </h2>
            <p className="text-lg text-cream-700">
              Choose the contact method that works best for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center bg-cream-200 rounded-xl p-6 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl mb-4">{info.icon}</div>
                <h3 className="text-xl font-semibold text-cream-900 mb-2">{info.title}</h3>
                <p className="text-cream-700 font-medium mb-2">{info.content}</p>
                <p className="text-cream-600 text-sm mb-2">{info.description}</p>
                <p className="text-cream-500 text-xs font-medium">{info.hours}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Support Categories */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <h3 className="text-2xl md:text-3xl font-bold text-cream-900 mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="bg-cream-100 rounded-xl p-8">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-cream-800 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-cream-500 focus:border-transparent transition-all duration-200 bg-white"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-cream-800 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-cream-500 focus:border-transparent transition-all duration-200 bg-white"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-cream-800 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-cream-500 focus:border-transparent transition-all duration-200 bg-white"
                    >
                      <option value="">Select a topic</option>
                      <option value="technical">Technical Support</option>
                      <option value="product">Product Information</option>
                      <option value="billing">Billing & Orders</option>
                      <option value="general">General Inquiry</option>
                      <option value="feedback">Feedback</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-cream-800 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-cream-300 rounded-lg focus:ring-2 focus:ring-cream-500 focus:border-transparent transition-all duration-200 resize-none bg-white"
                      placeholder="Please provide as much detail as possible to help us assist you better..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-cream-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-cream-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Support Categories */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl md:text-3xl font-bold text-cream-900 mb-6">What can we help you with?</h3>
              
              <div className="space-y-4 mb-8">
                {supportCategories.map((category, index) => (
                  <div key={index} className="bg-cream-100 rounded-lg p-4 hover:bg-cream-200 transition-colors">
                    <div className="flex items-start space-x-4">
                      <div className="text-2xl">{category.icon}</div>
                      <div>
                        <h4 className="font-semibold text-cream-900 mb-1">{category.title}</h4>
                        <p className="text-cream-700 text-sm">{category.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-cream-200 to-cream-300 rounded-xl p-6">
                <h4 className="font-semibold text-cream-900 mb-3">🚀 Priority Support</h4>
                <p className="text-cream-700 mb-4 text-sm">
                  Aether Soul Pro users get priority support with faster response times and dedicated account managers.
                </p>
                <button className="bg-cream-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-cream-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-cream-900 mb-4">
              Our Locations
            </h2>
            <p className="text-lg text-cream-700">
              Visit us at one of our offices or schedule a virtual meeting.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {officeLocations.map((location, index) => (
              <div key={index} className="bg-cream-100 rounded-xl p-6 text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-xl font-semibold text-cream-900 mb-2">{location.city}</h3>
                <p className="text-cream-600 text-sm font-medium mb-3">{location.type}</p>
                <p className="text-cream-700 mb-2">{location.address}</p>
                <p className="text-cream-600 font-medium">{location.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Support */}
      <section className="py-16 bg-cream-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need Immediate Help?
          </h2>
          <p className="text-cream-100 mb-6">
            For urgent technical issues or emergencies, our support team is available 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-cream-700 px-6 py-3 rounded-lg font-semibold hover:bg-cream-50 transition-colors">
              Call Emergency Support
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-cream-700 transition-all duration-200">
              Start Live Chat
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;