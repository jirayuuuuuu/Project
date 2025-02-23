import React from 'react'
import Layout from '../Template/Layout'

const Contact = () => {
  return (
    <Layout>
    <div className="p-6 border-4 border-blue-600 rounded-lg bg-white shadow-md">
      <h1 className="text-5xl font-bold text-center text-blue-600 mb-6">Contact</h1>
      <hr className="mb-4 border-blue-400" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Information */}
        <div className="p-4">
          <h2 className="text-3xl font-semibold mb-4 text-blue-500">Get in Touch</h2>
          <p className="mb-2 text-lg">📍 Address: 90 ถนน เทศา ตำบลพระปฐมเจดีย์ อำเภอเมืองนครปฐม นครปฐม 73000</p>
          <p className="mb-2 text-lg">📞 Phone: +6634252790</p>
          <p className="mb-2 text-lg">&#9993; Email : Jirayujele2562@gmail.com</p>
          <p className="mb-2 text-lg">⏰ Open Hours: Mon-Sat, 8:00 น. - 18:00 น.</p>
        </div>

        {/* Contact Form */}
        <div className="p-4">
          <h2 className="text-3xl font-semibold mb-4 text-blue-500">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-lg font-medium mb-1">Your Name</label>
              <input 
                type="text" 
                placeholder="Enter your name" 
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-lg font-medium mb-1">Your Email</label>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-lg font-medium mb-1">Message</label>
              <textarea 
                placeholder="Type your message here..." 
                className="w-full p-2 border border-gray-300 rounded-md h-32"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </Layout>
);
};

export default Contact;
