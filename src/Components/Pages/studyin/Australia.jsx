import React from 'react';

const Australia = () => {
  return (
    <main className="pt-0 bg-gray-100 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative bg-gray-700 text-white py-24 text-center">
        <img
          src="./images/australia.jpg"
          alt="Australia Scenery"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold mb-4">Study in Australia</h1>
          <p className="text-xl font-light">
            Discover world-class education, vibrant cities, and a future full of possibilities.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            A Complete Guide for Nepali Students
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Explore how Australia combines top-quality education with incredible lifestyle and career opportunities.
          </p>
        </div>

        {/* Key Facts */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6 text-center">Key Facts to Study in Australia</h2>
          <div className="border rounded-lg overflow-hidden shadow bg-white">
            <table className="w-full text-sm md:text-base text-left text-gray-700">
              <tbody>
                <tr className="border-t">
                  <td className="px-6 py-4 font-medium w-1/3 bg-gray-50">Language spoken</td>
                  <td className="px-6 py-4">English</td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-4 font-medium bg-gray-50">Cost of study</td>
                  <td className="px-6 py-4">
                    Undergraduate – AUD 20,000 to AUD 45,000 per year,<br />
                    Post-graduate – AUD 22,000 to AUD 50,000 per year.
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-4 font-medium bg-gray-50">Source of funding</td>
                  <td className="px-6 py-4">
                    Scholarships, personal savings, part-time work, educational loans, and sponsorships
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-4 font-medium bg-gray-50">Exams required</td>
                  <td className="px-6 py-4">IELTS, TOEFL, or PTE Academic</td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-4 font-medium bg-gray-50">Degrees</td>
                  <td className="px-6 py-4">Undergraduate, post-graduate, Doctoral, vocational courses.</td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-4 font-medium bg-gray-50">Intakes</td>
                  <td className="px-6 py-4">February/March and July/August.</td>
                </tr>
                <tr className="border-t border-b">
                  <td className="px-6 py-4 font-medium bg-gray-50">Visa</td>
                  <td className="px-6 py-4">
                    <a
                      href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline hover:text-blue-800"
                    >
                      Student visa subclass 500
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Benefits of Studying in Australia for Nepali Students</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: 'Globally Recognized Education',
                desc: 'Australian degrees are valued worldwide with practical, innovation-driven curriculum.',
              },
              {
                title: 'Multicultural Environment',
                desc: 'Experience a safe and diverse community with students from over 190 countries.',
              },
              {
                title: 'Work and PR Opportunities',
                desc: 'Work rights during study, post-study work visas, and potential PR pathways.',
              },
              {
                title: 'Scholarships and Support',
                desc: 'Numerous government and university-based scholarships available for international students.',
              },
            ].map((item, i) => (
              <div key={i} className="p-6 border rounded-xl shadow-sm bg-white">
                <h3 className="font-semibold text-xl mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Top Universities */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Top Universities in Australia for Nepali Students</h2>
          <table className="w-full table-auto text-left border-collapse bg-white rounded-md overflow-hidden shadow">
            <thead>
              <tr className="bg-gray-200 text-gray-800">
                <th className="p-3 border">University</th>
                <th className="p-3 border">Location</th>
                <th className="p-3 border">World Ranking*</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {[
                ['University of Melbourne', 'Melbourne, Victoria', '13'],
                ['University of Sydney', 'Sydney, New South Wales', '18'],
                ['University of New South Wales (UNSW)', 'Sydney, New South Wales', '19'],
                ['Australian National University', 'Canberra, ACT', '30'],
              ].map(([name, location, rank], i) => (
                <tr key={i}>
                  <td className="p-3 border">{name}</td>
                  <td className="p-3 border">{location}</td>
                  <td className="p-3 border">{rank}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-sm mt-2 text-gray-500">
            *Based on QS World University Rankings 2025
          </p>
        </div>

        {/* Requirements */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Requirements to Study in Australia for Nepali Students</h2>
          <ul className="list-disc list-inside text-lg space-y-2 text-gray-700">
            <li>Valid passport and offer letter from a recognized Australian university.</li>
            <li>Proof of English proficiency (IELTS, TOEFL, or PTE).</li>
            <li>Statement of Purpose (SOP).</li>
            <li>Genuine Temporary Entrant (GTE) statement.</li>
            <li>Proof of sufficient funds and OSHC (Overseas Student Health Cover).</li>
            <li>Academic transcripts and certificates (+2, Bachelor’s, etc.).</li>
          </ul>
        </div>

        {/* Intakes */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Intakes in Australia for Nepali Students</h2>
          <p className="mb-4 text-lg text-gray-700">
            Australian universities typically have three intakes each year:
          </p>
          <ul className="list-disc list-inside text-lg space-y-2 text-gray-700">
            <li><strong>February Intake:</strong> Main intake for most programs.</li>
            <li><strong>July Intake:</strong> Secondary intake, with wide availability of courses.</li>
            <li><strong>November Intake:</strong> Limited intake offered by selected universities.</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Australia;
  