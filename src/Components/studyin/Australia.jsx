import React from 'react';

const Australia = () => {
  return (
    <main className="pt-24 px-6 pb-16 font-sans bg-white text-gray-800">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-blue-800">Study in Australia</h1>

        {/* Image Section */}
        <div className="mb-8">
          <img
            src="/images/operahouse.jpg"
            alt="Beautiful view of Australia"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>

        {/* Study Details */}
        <p className="text-lg leading-relaxed mb-4">
          Australia is one of the most sought-after destinations for international students, known for its world-class education system, welcoming culture, and beautiful landscapes. With over 1,100 institutions and 22,000 courses, students can choose from a wide variety of academic options.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Australian universities such as <span className="font-semibold">University of Melbourne, Australian National University, and University of Sydney</span> rank consistently in the global top 100. The country emphasizes quality education, research excellence, and innovative learning environments.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Students benefit from a safe, multicultural society, strong post-study work rights (up to 4 years), and opportunities for permanent residency under skilled migration programs. The cost of living is moderate compared to the UK or USA, and students can work part-time up to 48 hours per fortnight during study sessions.
        </p>
        <p className="text-lg leading-relaxed mb-4 italic text-blue-700">
          "Australia isn’t just a place to study — it’s a place to grow, connect, and build a future."
        </p>

        {/* How Consultancy Helps Section */}
        <div className="mt-12 bg-blue-50 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">How We Help You Succeed</h2>
          <p className="text-gray-700 text-lg mb-3">
            At <span className="font-semibold text-blue-700">Global Ladder Education Network</span>, we go beyond basic consultation — we guide you from the first step to your arrival in Australia. Our expert team helps you select the right course and institution that aligns with your academic background, interests, and career goals.
          </p>
          <p className="text-gray-700 text-lg mb-3">
            Our services include assistance with application preparation, document verification, visa interviews, and SOP writing — all tailored to maximize your acceptance chances. Many students who applied through us are now thriving in Australia, studying at top-ranked universities or building careers after graduation.
          </p>
          <p className="text-gray-700 text-lg mb-3">
            We also provide support in booking accommodation, airport pickup, and connecting you with Nepali student communities abroad. From the day you visit us until you settle in Australia, we stand by your side.
          </p>
          <p className="text-lg font-medium text-blue-700 mt-4">
            Our goal is your success — let’s build your future together.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Australia;
