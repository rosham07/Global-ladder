import React from 'react';

const Contact = () => {
  return (
    <main className="pt-20 font-sans text-gray-800 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-700 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-xl">Reach out to Global Ladder — your partner in global education success.</p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Leave us a message</h2>
            <form className="space-y-5">
              <div>
                <label className="block mb-1 font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  placeholder="Your email address"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  placeholder="Inquiry subject"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700">Message</label>
                <textarea
                  rows="5"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  placeholder="Type your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg shadow transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-6 text-gray-700">Contact Information</h2>
            <p className="text-gray-700 mb-4">
              We're here to answer your questions and help you take the next step in your international education journey.
            </p>
            <ul className="space-y-4 text-gray-800 text-lg">
              <li><strong>📍 Address:</strong> New Baneshwor, Kathmandu, Nepal</li>
              <li><strong>📞 Phone:</strong> +977-9840934933</li>
              <li><strong>📧 Email:</strong> info@globalladder.edu.np</li>
              <li><strong>🕒 Hours:</strong> Sunday – Friday: 10:00 AM – 6:00 PM</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="w-full h-[300px]">
        <iframe
          title="Global Ladder Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.026364903201!2d85.34200787467333!3d27.71493072498025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19966112cb4b%3A0x5c1e8ecf9fc56761!2sNew%20Baneshwor!5e0!3m2!1sen!2snp!4v1683133282266!5m2!1sen!2snp"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0"
        ></iframe>
      </section>

      
    </main>
  );
};

export default Contact;
