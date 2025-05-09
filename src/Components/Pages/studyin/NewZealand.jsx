import React from "react";

const NewZealand = () => {
  return (
    <section className="bg-gray-100 text-gray-800 font-sans">
      {/* Hero Section */}
      <div className="bg-green-700 text-white py-20 px-6 md:px-16 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Study in New Zealand
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          Start your academic journey in one of the world’s most beautiful and welcoming countries.
        </p>
        <button className="bg-white text-green-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">
          Get Started
        </button>
      </div>

      <div className="max-w-5xl mx-auto pt-16 pb-16 px-6 md:px-16 space-y-16">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-4">
            A Complete Guide for Nepali Students
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Discover why New Zealand is a top study destination and how you can make your study dream a reality.
          </p>
        </div>

        {/* Key Facts */}
        <div>
          <h2 className="text-3xl font-semibold text-green-600 mb-4">Key Facts About Studying in New Zealand</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Over 30,000 international students from around the world choose New Zealand every year.</li>
            <li>Globally recognized degrees from top-ranked universities.</li>
            <li>Safe and welcoming environment with a high quality of life.</li>
            <li>Post-graduation work visa options to gain work experience in New Zealand.</li>
            <li>English-speaking country with a diverse culture and beautiful landscapes.</li>
          </ul>
        </div>

        {/* Benefits for Nepali Students */}
        <div>
          <h2 className="text-3xl font-semibold text-green-600 mb-4">Benefits of Studying in New Zealand for Nepali Students</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "High-Quality Education",
                desc: "New Zealand’s education system is world-class, offering a diverse range of programs to meet global industry standards."
              },
              {
                title: "Work While Studying",
                desc: "International students can work up to 20 hours a week during terms and 40 hours during breaks."
              },
              {
                title: "Post-Graduation Work Visa",
                desc: "New Zealand offers a work visa for up to 3 years after graduation, allowing you to gain valuable work experience."
              },
              {
                title: "Affordable Cost of Living",
                desc: "Compared to other English-speaking countries, New Zealand offers a relatively affordable cost of living."
              },
            ].map((benefit, index) => (
              <div key={index} className="p-6 border rounded-xl shadow-sm bg-white">
                <h3 className="font-semibold text-xl mb-2">{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Top Universities */}
        <div>
          <h2 className="text-3xl font-semibold text-green-600 mb-4">Top Universities in New Zealand for Nepali Students</h2>
          <table className="w-full table-auto text-left border-collapse bg-white shadow-sm">
            <thead>
              <tr className="bg-green-100 text-green-700">
                <th className="p-3 border">University</th>
                <th className="p-3 border">Location</th>
                <th className="p-3 border">World Ranking*</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {[
                ["University of Auckland", "Auckland", "81"],
                ["University of Otago", "Dunedin", "174"],
                ["Victoria University of Wellington", "Wellington", "227"],
                ["University of Canterbury", "Christchurch", "270"],
                ["Auckland University of Technology", "Auckland", "400"]
              ].map(([name, location, rank], index) => (
                <tr key={index}>
                  <td className="p-3 border">{name}</td>
                  <td className="p-3 border">{location}</td>
                  <td className="p-3 border">{rank}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-sm mt-2 text-gray-500">*Based on QS World University Rankings 2024</p>
        </div>

        {/* Requirements */}
        <div>
          <h2 className="text-3xl font-semibold text-green-600 mb-4">Requirements to Study in New Zealand for Nepali Students</h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>Academic transcripts and certificates (SLC, +2, Bachelor's degree).</li>
            <li>Proof of English proficiency (IELTS, TOEFL, PTE, etc.).</li>
            <li>Offer letter from a recognized New Zealand institution.</li>
            <li>Statement of Purpose (SOP) explaining why you wish to study in New Zealand.</li>
            <li>Valid passport and student visa application.</li>
            <li>Proof of financial resources to support your studies and living expenses.</li>
          </ul>
        </div>

        {/* Intakes */}
        <div>
          <h2 className="text-3xl font-semibold text-green-600 mb-4">Intakes in New Zealand for Nepali Students</h2>
          <p className="mb-4 text-lg">
            New Zealand universities generally have two main intakes:
          </p>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>
              <strong>February Intake:</strong> The most popular intake for a wide range of courses.
            </li>
            <li>
              <strong>July Intake:</strong> Available for selected programs, particularly in postgraduate courses.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NewZealand;
