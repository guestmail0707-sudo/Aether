import React from 'react';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <div className="max-w-2xl">
          <p className="text-lg mb-6">
            Get in touch with us. We'd love to hear from you!
          </p>
          
          <div className="contact-info space-y-4">
            <div>
              <h3 className="font-semibold">Email</h3>
              <p>contact@example.com</p>
            </div>
            
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>
            
            <div>
              <h3 className="font-semibold">Address</h3>
              <p>123 Main Street<br />City, State 12345</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;