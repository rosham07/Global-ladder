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
        Studying in Australia offers international students a unique combination of high-quality education, 
        cultural diversity, and career opportunities. Australian universities consistently rank among the best 
        in the world, providing degrees that are globally recognized and respected. The education system emphasizes
         practical knowledge, innovation, and research, making graduates highly employable. One of the biggest attractions
          is the opportunity to work part-time during studies and full-time during breaks, which helps students support 
          themselves financially and gain valuable experience. After graduation, students can apply for post-study work 
          visas, giving them the chance to live and work in Australia and potentially apply for permanent residency.
        </p>
        <p className='text-lg leading-relaxed mb-4'>
        Moreover, Australia is an English-speaking country, which helps students improve their language skills and integrate more easily. With its multicultural society,
       students from all backgrounds feel welcome, and cities like Sydney, Melbourne, and Brisbane offer a high standard of living, excellent public transport, and access
        to stunning natural beauty. Australia’s safe and friendly environment, along with a relaxed lifestyle, makes it an ideal destination for students seeking a balance
         between academic success and personal well-being.
       
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
