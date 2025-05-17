import React from "react";

const Uk = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-700 text-white py-24 text-center">
        <img
          src="./images/UK.jpg"
          alt="UK Scenery"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold mb-4">Study in the UK</h1>
          <p className="text-xl font-light">
            Build your global future with world-class UK education and expert guidance from Global Ladder
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
              Discover why the UK is a top destination for higher education and how you can begin your journey.
            </p>
          </div>

          {/* Key Facts */}
          <div className="max-w-2xl mx-auto my-10 bg-white rounded-xl shadow-lg overflow-hidden">
      <h2 className="text-xl md:text-2xl font-semibold text-center text-blue-900 bg-blue-100 py-4">
        Key Facts to Study in UK
      </h2>
      <table className="w-full text-left text-gray-800">
        <tbody>
          <tr className="border-t">
            <td className="px-4 py-3 font-medium w-1/3 bg-gray-50">Language spoken</td>
            <td className="px-4 py-3">English</td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-3 font-medium bg-gray-50">Cost of study</td>
            <td className="px-4 py-3">
              Undergraduate – £10,000 to £38,000 per year<br />
              Postgraduate programs – £11,000 to £45,000 per year.
            </td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-3 font-medium bg-gray-50">Source of funding</td>
            <td className="px-4 py-3">
              Scholarships, grants, personal savings, part-time jobs, and student loans.
            </td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-3 font-medium bg-gray-50">Exams required</td>
            <td className="px-4 py-3">
              A-levels, for postgraduate studies, a bachelor’s degree or its equivalent
            </td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-3 font-medium bg-gray-50">Degrees</td>
            <td className="px-4 py-3">
              Bachelors, Masters, Doctoral, Vocational courses.
            </td>
          </tr>
          <tr className="border-t">
            <td className="px-4 py-3 font-medium bg-gray-50">Intakes</td>
            <td className="px-4 py-3">September/October</td>
          </tr>
          <tr className="border-t border-b">
            <td className="px-4 py-3 font-medium bg-gray-50">Visa</td>
            <td className="px-4 py-3">
              <a
                href="https://www.gov.uk/tier-4-general-visa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-800 underline"
              >
                Tier 4 (General) Student Visa
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

          {/* Benefits for Nepali Students */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">
              Benefits of Studying in the UK for Nepali Students
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Academic Excellence",
                  desc: "Gain a globally respected education with top-quality teaching and diverse courses.",
                },
                {
                  title: "Cultural Diversity",
                  desc: "Connect with peers from around the world and expand your global perspective.",
                },
                {
                  title: "Work Opportunities",
                  desc: "Explore internships, part-time jobs, and post-study work visas to boost your career.",
                },
                {
                  title: "Financial Support",
                  desc: "Access to various scholarships and funding options dedicated to international students.",
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
              Top Universities in the UK for Nepali Students
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
                  ["University of Oxford", "Oxford", "3"],
                  ["University of Cambridge", "Cambridge", "5"],
                  ["Imperial College London", "London", "2"],
                  ["University College London (UCL)", "London", "9"],
                  ["University of Edinburgh", "Edinburgh", "27"],
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
              Requirements to Study in the UK for Nepali Students
            </h2>
            <ul className="list-disc list-inside text-lg space-y-2 text-gray-700">
              <li>Academic transcripts and certificates (SLC, +2, Bachelors).</li>
              <li>Proof of English proficiency (IELTS, PTE, TOEFL, etc.).</li>
              <li>Statement of Purpose (SOP).</li>
              <li>Recommendation Letters.</li>
              <li>Valid passport and student visa (Tier 4).</li>
              <li>Proof of financial ability to support studies and living expenses.</li>
            </ul>
          </div>

          {/* Intakes */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">
              Intakes in the UK for Nepali Students
            </h2>
            <p className="mb-4 text-lg text-gray-700">
              UK universities generally have three main intakes per year:
            </p>
            <ul className="list-disc list-inside text-lg space-y-2 text-gray-700">
              <li><strong>September Intake:</strong> Main and most popular intake for most courses.</li>
              <li><strong>January Intake:</strong> Available for selected courses and institutions.</li>
              <li><strong>May Intake:</strong> Less common, but some universities offer courses during this intake.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Uk;
