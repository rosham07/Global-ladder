import React from 'react';

const universities = [
  {
    rank: 19,
    name: 'University of Melbourne',
    location: 'Melbourne, Victoria',
    website: 'https://www.unimelb.edu.au/',
  },
  {
    rank: 22,
    name: 'University of Sydney',
    location: 'Sydney, New South Wales',
    website: 'https://www.sydney.edu.au/',
  },
  {
    rank: 34,
    name: 'University of New South Wales (UNSW)',
    location: 'Sydney, New South Wales',
    website: 'https://www.unsw.edu.au/',
  },
  {
    rank: 37,
    name: 'Australian National University',
    location: 'Canberra, ACT',
    website: 'https://www.anu.edu.au/',
  },
];

const Australia = () => {
  return (
    <main className="pt-0 bg-gray-100 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="bg-gray-700 text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold mb-4">Study in Australia</h1>
          <p className="text-xl font-light">
            Discover world-class education, vibrant cities, and a future full of possibilities.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        {/* Image */}
        <div className="mb-10">
          <img
            src="./images/operahouse.jpg"
            alt="Australia view"
            className="rounded-xl shadow-xl w-full h-auto object-cover"
          />
        </div>

        {/* Study Overview */}
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            Australia offers world-class education, cultural diversity, and career opportunities.
            Students benefit from practical learning, research-driven universities, and work rights during study.
          </p>
          <p>
            You can work part-time during your course and full-time during vacations. After graduating, students
            can apply for post-study work visas and even permanent residency.
          </p>
          <p className="italic text-blue-700">
            "Australia isn’t just a place to study — it’s a place to grow, connect, and build a future."
          </p>
        </div>

        {/* Key Facts */}
        <div className="my-12 shadow-lg rounded-xl border overflow-hidden bg-white">
          <div className="bg-gray-200 px-6 py-4">
            <h2 className="text-2xl font-bold text-gray-800 text-center">Key Facts to Study in Australia</h2>
          </div>
          <table className="w-full text-left text-gray-700 text-sm md:text-base">
            <tbody>
              <tr className="border-t">
                <td className="px-6 py-4 font-semibold">Language spoken</td>
                <td className="px-6 py-4">English</td>
              </tr>
              <tr className="bg-gray-50 border-t">
                <td className="px-6 py-4 font-semibold">Cost of Study</td>
                <td className="px-6 py-4">
                  Undergraduate: AUD 20,000 – 45,000/year<br />
                  Postgraduate: AUD 22,000 – 50,000/year
                </td>
              </tr>
              <tr className="border-t">
                <td className="px-6 py-4 font-semibold">Scholarships</td>
                <td className="px-6 py-4">
                  Australia Awards, Destination Australia, university-specific scholarships like UNSW International Scholarships, etc.
                </td>
              </tr>
              <tr className="bg-gray-50 border-t">
                <td className="px-6 py-4 font-semibold">Exams Required</td>
                <td className="px-6 py-4">IELTS, TOEFL, or PTE Academic</td>
              </tr>
              <tr className="border-t">
                <td className="px-6 py-4 font-semibold">Intakes</td>
                <td className="px-6 py-4">February, July, and sometimes November (depending on the university)</td>
              </tr>
              <tr className="bg-gray-50 border-t">
                <td className="px-6 py-4 font-semibold">Visa</td>
                <td className="px-6 py-4">
                  <a
                    href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Student visa subclass 500
                  </a>
                </td>
              </tr>
              <tr className="border-t">
                <td className="px-6 py-4 font-semibold">Requirements</td>
                <td className="px-6 py-4">
                  Valid passport, offer letter from Australian university, proof of funds, English proficiency, GTE (Genuine Temporary Entrant) statement, OSHC insurance.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Popular Courses */}
        <div className="my-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Popular Courses</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
            <li>Business and Management</li>
            <li>Information Technology and Computer Science</li>
            <li>Engineering and Technology</li>
            <li>Health and Nursing</li>
            <li>Hospitality and Tourism</li>
            <li>Accounting and Finance</li>
            <li>Environmental Science</li>
            <li>Education and Teaching</li>
          </ul>
        </div>

        {/* Top Universities Table */}
        <section className="my-14">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Top Australian Universities – QS World University Rankings 2025
          </h2>
          <div className="overflow-x-auto border rounded-lg shadow-md bg-white">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">QS Rank</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">University</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Location</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Website</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {universities.map((uni) => (
                  <tr key={uni.rank}>
                    <td className="px-6 py-4 text-sm">{uni.rank}</td>
                    <td className="px-6 py-4 text-sm text-blue-800 font-medium">{uni.name}</td>
                    <td className="px-6 py-4 text-sm">{uni.location}</td>
                    <td className="px-6 py-4 text-sm">
                      <a
                        href={uni.website}
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Site
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-sm text-gray-500 mt-4 text-center">
              Source:{' '}
              <a
                href="https://www.topuniversities.com/world-university-rankings?region=Oceania"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                QS World University Rankings 2025
              </a>
            </p>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Australia;
