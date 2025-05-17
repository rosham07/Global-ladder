import React from "react";

const Usa = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-700 text-white py-24 text-center">
        <img
          src="./images/usa.jpg"
          alt="USA Scenery"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold mb-4">Study in the USA</h1>
          <p className="text-xl font-light">
            Your gateway to world-class education, innovative research, and global career opportunities.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-gray-50 pt-20 pb-16 px-6 md:px-16 text-gray-800 font-sans">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Title Section */}
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
              Study in the USA: A Complete Guide for Nepali Students
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Learn why the USA is a top destination for higher education and how you can achieve your academic goals.
            </p>
          </div>

          {/* Key Facts */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">Key Facts About Studying in the USA</h2>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
              <li>Over 4,000 accredited universities and colleges.</li>
              <li>World-renowned institutions such as Harvard, MIT, and Stanford.</li>
              <li>Opportunity for internships and on-campus work to gain experience.</li>
              <li>F-1 student visa for international students offering work options.</li>
              <li>Access to state-of-the-art research facilities and academic resources.</li>
            </ul>
          </div>

          {/* Benefits for Nepali Students */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">
              Benefits of Studying in the USA for Nepali Students
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Academic Excellence",
                  desc: "Study at some of the best universities in the world, offering cutting-edge research and highly competitive programs.",
                },
                {
                  title: "Global Networking",
                  desc: "Build a global network through interactions with peers and professionals from diverse backgrounds.",
                },
                {
                  title: "Work Opportunities",
                  desc: "Utilize the Optional Practical Training (OPT) and Curricular Practical Training (CPT) programs to gain work experience.",
                },
                {
                  title: "Financial Aid",
                  desc: "Many scholarships, assistantships, and financial aid options are available for international students.",
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
              Top Universities in the USA for Nepali Students
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
                  ["Harvard University", "Cambridge, MA", "4"],
                  ["Stanford University", "Stanford, CA", "6"],
                  ["MIT", "Cambridge, MA", "1"],
                  ["Caltech", "Pasadena, CA", "10"],
                  ["UC Berkeley", "Berkeley, CA", "12"],
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
              Requirements to Study in the USA for Nepali Students
            </h2>
            <ul className="list-disc list-inside text-lg space-y-2 text-gray-700">
              <li>Academic transcripts and certificates (SLC, +2, Bachelor's).</li>
              <li>Proof of English proficiency (TOEFL, IELTS, PTE, etc.).</li>
              <li>Statement of Purpose (SOP).</li>
              <li>Recommendation Letters from professors or employers.</li>
              <li>Valid passport and student visa (F-1 visa).</li>
              <li>Proof of financial support for tuition and living expenses.</li>
            </ul>
          </div>

          {/* Intakes */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">
              Intakes in the USA for Nepali Students
            </h2>
            <p className="mb-4 text-lg text-gray-700">
              US universities generally have three main intakes:
            </p>
            <ul className="list-disc list-inside text-lg space-y-2 text-gray-700">
              <li><strong>Fall Intake (September):</strong> The most popular intake for undergraduate and graduate courses.</li>
              <li><strong>Spring Intake (January):</strong> Available for selected programs, especially graduate-level courses.</li>
              <li><strong>Summer Intake (May/June):</strong> Less common, but offered for some specific programs.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Usa;
