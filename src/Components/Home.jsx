import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="pt-20 font-sans">
      {/* Main Section */}
      <section
        className="relative h-[80vh] flex items-center justify-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(/images/view.jpg)` }} 
      >
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Welcome to Global Ladder Education Network
          </h1>
          <p className="mt-6 text-xl md:text-2xl">
            Your trusted gateway to international education and career success
          </p>
          <Link to="/contact">
            <button className="mt-8 px-8 py-4 bg-blue-500 hover:bg-blue-700 text-white rounded-lg shadow-md text-lg transition">
              Get a Free Consultation
            </button>
          </Link>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src="./images/australia.jpg" 
            alt="Consultancy Team"
            className="rounded-xl shadow-lg w-full object-cover"
          />
          <div>
            <h2 className="text-4xl font-bold mb-6">Global Ladder Education Network</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Global Ladder Education Network is a trusted education consultancy dedicated to helping students achieve their dreams of studying abroad.
              We provide personalized guidance for university admissions, visa processing, and test preparation for countries like the 
              UK, USA, Canada, Australia, Ireland, and New Zealand. With expert advisors and a commitment to student success, Global Ladder
              is your reliable partner on the path to global education.
            </p>
            <p className="text-gray-700 mt-4 text-lg">
              With a 98% visa success rate and partnerships with top universities, we are committed to helping you reach your global goals.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-200 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">Why Choose Us ?</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 text-left">
            {[
              {
                title: 'High Visa Success Rate',
                description: 'With a 98% visa success rate, we ensure your applications are handled with precision and care.',
                icon: '✅',
              },
              {
                title: 'Trusted Counsellors',
                description: 'Our experienced counsellors offer honest and professional guidance tailored to your goals.',
                icon: '👩‍🏫',
              },
              {
                title: 'University Partnerships',
                description: 'We work with top universities across the UK, USA, Canada, Australia, Ireland, and New Zealand.',
                icon: '🏫',
              },
              {
                title: 'End-to-End Support',
                description: 'From counselling to visa to post-arrival support, we stand by your side at every step.',
                icon: '🔗',
              },
              {
                title: 'Test Preparation Help',
                description: 'We assist with IELTS, PTE and other required tests to improve your success chances.',
                icon: '📝',
              },
              {
                title: 'Affordable & Transparent',
                description: 'No hidden fees. We offer affordable services with transparent processes and expert care.',
                icon: '💰',
              },
            ].map(({ title, description, icon }) => (
              <div
                key={title}
                className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition"
              >
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600 text-md">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="py-20 bg-gray-800 text-white text-center">
        <h2 className="text-4xl font-bold">Ready to Study Abroad?</h2>
        <p className="mt-4 text-xl">
          Let Global Ladder guide your journey with confidence and care.
        </p>
        <Link to="/contact">
          <button className="mt-8 px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-500 hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300 text-lg shadow">
            Book a Free Session
          </button>
        </Link>
      </section>
    </main>
  );
};

export default Home;
