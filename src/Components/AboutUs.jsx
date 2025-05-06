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
            src="/images/about.jpg"
            alt="Consultancy Team"
            className="rounded-2xl shadow-xl w-full h-auto object-cover"
          />
          <div>
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Global Ladder is a leading education consultancy dedicated to guiding students through their journey
              of studying abroad. With over a decade of experience, our team offers end-to-end support — from career
              counseling to university application, visa assistance, and post-arrival services. We have helped
              thousands of students successfully transition to top institutions in the UK, USA, Canada, Australia,
              Ireland, and New Zealand.
            </p>
            <p className="mt-6 text-blue-600 font-semibold italic text-lg">Our motto: "Climb Higher, Go Further"</p>
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

      {/* Team Section */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Meet Our Leadership Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                name: 'Nischal Devkota',
                role: 'Chief Executive Officer (CEO)',
                photo: '/images/ceo.jpg',
                bio: 'Visionary leader with 15+ years in international education consulting. Passionate about student success.',
              },
              {
                name: 'Sunita Koirala',
                role: 'Chief Operating Officer (COO)',
                photo: '/images/coo.jpg',
                bio: 'Operational expert ensuring seamless service delivery and student satisfaction across all branches.',
              },
              {
                name: 'Ramesh Thapa',
                role: 'Managing Director',
                photo: '/images/managing director.jpg',
                bio: 'Strategic thinker driving innovation, global partnerships, and consultancy growth across regions.',
              },
            ].map(({ name, role, photo, bio }) => (
              <div key={name} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <img
                  src={photo}
                  alt={name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-md"
                />
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="text-blue-600 text-sm mb-2">{role}</p>
                <p className="text-gray-600 text-sm">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
};

export default AboutUs;
