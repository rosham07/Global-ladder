import React from "react";

const Canada = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-700 text-white py-24 text-center">
        <img
          src="./images/canada.jpg"
          alt="Canada Scenery"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold mb-4">Study in Canada</h1>
          <p className="text-xl font-light">
            A Complete Guide for Nepali Students – Explore top universities, benefits, and how to apply.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-gray-100 pt-20 pb-16 px-6 md:px-16 text-gray-800 font-sans">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Title Section */}
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-4">
              A Complete Guide for Nepali Students
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Learn about study opportunities, work options, and pathways to PR in Canada.
            </p>
          </div>

          {/* Key Facts */}
          <div className="max-w-2xl mx-auto my-10 bg-white rounded-xl shadow-lg overflow-hidden">
      <h2 className="text-xl md:text-2xl font-semibold text-center text-red-600 bg-red-200 py-4">
        Key Facts to Study in Canada
      </h2>
      <table className="w-full text-left text-gray-800">
        <tbody>
          <tr className="border-t">
            <td className="px-4 py-3 font-medium w-1/3 bg-gray-50">Language Spoken</td>
            <td className="px-4 py-3">English, French</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-3 font-medium bg-gray-50">Cost of Study</td>
            <td className="px-4 py-3">
              Undergraduate – CAD 15,000 to CAD 35,000<br />
              Post-graduate – CAD 10,000 to CAD 50,000
            </td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-3 font-medium bg-gray-50">Source of Funding</td>
            <td className="px-4 py-3">
              Scholarships, grants, personal savings, part-time jobs, loans, and financial aid programs
            </td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-3 font-medium bg-gray-50">Exams Required</td>
            <td className="px-4 py-3">
              <a href="https://www.ielts.org/" target="_blank" rel="noopener noreferrer" className="text-purple-600 underline">IELTS</a>,{' '}
              <a href="https://www.ets.org/toefl" target="_blank" rel="noopener noreferrer" className="text-purple-600 underline">TOEFL</a> and/or French Language Proficiency Test
            </td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-3 font-medium bg-gray-50">Degrees</td>
            <td className="px-4 py-3">
              Wide range of degrees, including Bachelor&apos;s, Master&apos;s, and Doctoral degree programmes
            </td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-3 font-medium bg-gray-50">Intake</td>
            <td className="px-4 py-3">
              Fall (September) and Winter (January)
            </td>
          </tr>
          <tr className="border-t border-b">
            <td className="px-4 py-3 font-medium bg-gray-50">Visa Requirements</td>
            <td className="px-4 py-3">
              <a
                href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-800 underline"
              >
                Student Visa for Canada
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

          {/* Benefits for Nepali Students */}
          <div>
            <h2 className="text-3xl font-semibold text-red-600 mb-4">
              Benefits of Studying in Canada for Nepali Students
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Affordable Education",
                  desc: "Compared to other developed countries, tuition and living costs in Canada are more affordable.",
                },
                {
                  title: "Diverse Culture",
                  desc: "Canada embraces multiculturalism, making it easier for Nepali students to adapt and feel welcome.",
                },
                {
                  title: "Work While Studying",
                  desc: "International students can work up to 20 hours per week during academic sessions.",
                },
                {
                  title: "Pathway to PR",
                  desc: "Graduates have opportunities to gain permanent residency through programs like Express Entry.",
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
          <div>
            <h2 className="text-3xl font-semibold text-red-600 mb-4">
              Top Universities in Canada for Nepali Students
            </h2>
            <table className="w-full table-auto text-left border-collapse bg-white rounded-md overflow-hidden shadow">
              <thead>
                <tr className="bg-red-200 text-red-600">
                  <th className="p-3 border">University</th>
                  <th className="p-3 border">Location</th>
                  <th className="p-3 border">World Ranking*</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {[
                  ["University of Toronto", "Toronto, Ontario", "25"],
                  ["University of British Columbia", "Vancouver, BC", "38"],
                  ["McGill University", "Montreal, Quebec", "29"],
                  ["University of Alberta", "Edmonton, Alberta", "96"],
                  ["McMaster University", "Hamilton, Ontario", "176"],
                ].sort((a, b) => parseInt(a[2]) - parseInt(b[2])) // Sort by rank (ascending)
        .map(([name, location, rank], i) => (
          
        
                  <tr key={i}>
                    <td className="p-3 border">{name}</td>
                    <td className="p-3 border">{location}</td>
                    <td className="p-3 border">{rank}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-sm mt-2 text-gray-500">
              *Based on QS World University Rankings 2024
            </p>
          </div>

          {/* Requirements */}
          <div>
            <h2 className="text-3xl font-semibold text-red-600 mb-4">
              Requirements to Study in Canada for Nepali Students
            </h2>
            <ul className="list-disc list-inside text-lg space-y-2 text-gray-700">
              <li>Academic documents (SLC, +2, Bachelor transcripts).</li>
              <li>IELTS or TOEFL score for English proficiency.</li>
              <li>Letter of Acceptance from a Designated Learning Institution (DLI).</li>
              <li>Statement of Purpose (SOP).</li>
              <li>Proof of funds and bank statements.</li>
              <li>Medical examination and police clearance.</li>
              <li>Valid passport and Canadian study permit application.</li>
            </ul>
          </div>

          {/* Intakes */}
          <div>
            <h2 className="text-3xl font-semibold text-red-600 mb-4">
              Intakes in Canada for Nepali Students
            </h2>
            <p className="mb-4 text-lg text-gray-700">
              Canadian institutions generally offer three intakes:
            </p>
            <ul className="list-disc list-inside text-lg space-y-2 text-gray-700">
              <li><strong>Fall Intake (September):</strong> Major intake with the highest number of course options.</li>
              <li><strong>Winter Intake (January):</strong> Second most popular intake for many courses.</li>
              <li><strong>Summer Intake (May):</strong> Limited course offerings, mainly diploma and short-term programs.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Canada;
