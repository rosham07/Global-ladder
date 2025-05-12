import React from 'react';

const AboutUs = () => {
  return (
    <main className="pt-20 font-sans text-gray-800">
      
      {/* Hero Section */}
      <section className="bg-gray-700 text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold mb-4">About Global Ladder</h1>
          <p className="text-xl font-light">
            Building global futures through personalized guidance and international education
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src="./images/about.jpg"
            alt="Global Ladder Team"
            className="rounded-2xl shadow-xl w-full h-auto object-cover"
          />
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Who We Are</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Global Ladder is a premier educational consultancy firm committed to transforming students' dreams into reality. 
              Founded with a vision to bridge the gap between ambition and opportunity, we specialize in guiding students 
              through every step of the international education journey.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Our expert counselors and visa advisors provide personalized guidance tailored to each student’s academic profile, 
              career goals, and budget. Our approach is student-first — we listen, understand, and then act.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Our global network includes partner universities, colleges, and institutions across the UK, USA, Canada, Australia, 
              Ireland, and New Zealand. We stay updated on changing visa policies, university requirements, and scholarship 
              opportunities to offer accurate and up-to-date advice.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              From language test preparation (IELTS/PTE) to crafting compelling Statements of Purpose (SOPs), and even post-arrival 
              support like accommodation and orientation — we cover it all.
            </p>
            <p className="mt-6 text-blue-600 font-semibold italic text-lg">
              Our motto: "Climb Higher, Go Further"
            </p>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Achievements</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-6 bg-white shadow-lg rounded-xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">98% Visa Success Rate</h3>
              <p className="text-gray-700 text-lg">
                We take pride in our exceptional success rate, ensuring that our students are well-prepared for their visa applications.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Global Network of 200+ Universities</h3>
              <p className="text-gray-700 text-lg">
                Our extensive network spans across more than 200 top universities worldwide, ensuring our students have a wide array of options.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">10,000+ Successful Students</h3>
              <p className="text-gray-700 text-lg">
                Over 10,000 students have successfully enrolled in their dream institutions with our expert guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gradient-to-br from-gray-600 via-slate-700 to-gray-800 text-white relative z-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-10 text-left">
            {/* Mission */}
            <div className="bg-gray-700 hover:bg-gray-600 transition rounded-xl p-6 shadow-lg border border-gray-600">
              <div className="text-4xl mb-4 text-blue-400">🎯</div>
              <h3 className="text-xl font-semibold mb-3">Mission</h3>
              <p className="text-gray-300">
                To empower students with the knowledge, support, and confidence they need to pursue higher education
                abroad and achieve global success.
              </p>
            </div>
            {/* Vision */}
            <div className="bg-gray-700 hover:bg-gray-600 transition rounded-xl p-6 shadow-lg border border-gray-600">
              <div className="text-4xl mb-4 text-green-400">🌍</div>
              <h3 className="text-xl font-semibold mb-3">Vision</h3>
              <p className="text-gray-300">
                To be the most trusted consultancy for global education, recognized for integrity, transparency, and
                student success.
              </p>
            </div>
            {/* Goals */}
            <div className="bg-gray-700 hover:bg-gray-600 transition rounded-xl p-6 shadow-lg border border-gray-600">
              <div className="text-4xl mb-4 text-yellow-400">🏆</div>
              <h3 className="text-xl font-semibold mb-3">Goals</h3>
              <p className="text-gray-300">
                Deliver personalized consulting, maintain a 98% visa success rate, and expand global partnerships to
                benefit aspiring students.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="absolute bottom-0 left-0 w-full h-10 bg-white clip-bottom-triangle"></div>
      </section>

      {/* CEO Spotlight */}
      <section className="py-24 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="text-center">
            <img
              src="./images/ceo.jpg"
              alt="Nischal Devkota"
              className="w-64 h-64 rounded-full object-cover mx-auto shadow-lg border-4 border-blue-300"
            />
          </div>
          {/* Text */}
          <div className="text-left">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Nischal Devkota</h2>
            <p className="text-blue-600 font-medium text-lg mb-2">Chief Executive Officer (CEO)</p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Nischal Devkota is the visionary force behind Global Ladder. His unwavering belief in the power of global education 
              drives the company’s mission to empower students from all backgrounds. Under his leadership, Global Ladder has become 
              one of the most respected and reliable names in the international education industry.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              His student-centric philosophy, combined with strategic foresight and deep-rooted ethical values, has guided thousands 
              of students to prestigious universities around the globe. Nischal ensures each student gets personalized advice that 
              aligns with their academic profile, financial capacity, and long-term goals.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              He frequently collaborates with universities, embassies, and education boards to foster transparent, fair, and inclusive 
              counseling services. Nischal’s in-depth knowledge of visa systems, scholarships, and academic structures makes him a 
              trusted advisor to students and parents alike.
            </p>
            <blockquote className="italic text-blue-800 text-md border-l-4 border-blue-400 pl-4 mt-4">
              “At Global Ladder, we don’t just consult — we partner in your success journey.”
            </blockquote>
          </div>
        </div>
      </section>

      
    </main>
  );
};

export default AboutUs;
