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
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
              A Complete Guide for Nepali Students
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Learn about study opportunities, work options, and pathways to PR in Canada.
            </p>
          </div>

          {/* Key Facts */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">Key Facts About Studying in Canada</h2>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
              <li>Canada has over 100 public and private universities.</li>
              <li>Two official languages: English and French.</li>
              <li>Post-graduation work permit up to 3 years.</li>
              <li>High quality of life and safe environment.</li>
              <li>International student-friendly immigration pathways.</li>
            </ul>
          </div>

          {/* Benefits for Nepali Students */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">
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
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">
              Top Universities in Canada for Nepali Students
            </h2>
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
                  ["University of Toronto", "Toronto, Ontario", "21"],
                  ["University of British Columbia", "Vancouver, BC", "34"],
                  ["McGill University", "Montreal, Quebec", "30"],
                  ["University of Alberta", "Edmonton, Alberta", "111"],
                  ["McMaster University", "Hamilton, Ontario", "189"],
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
              *Based on QS World University Rankings 2024
            </p>
          </div>

          {/* Requirements */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">
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
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">
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
