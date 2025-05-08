import React from "react";

const NewZealand = () => {
  return (
    <section className="bg-white pt-32 pb-16 px-6 md:px-16 text-gray-800 font-sans">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-4">
            Study in New Zealand: A Complete Guide for Nepali Students
          </h1>
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
            <div className="p-6 border rounded-xl shadow-sm bg-green-50">
              <h3 className="font-semibold text-xl mb-2">High-Quality Education</h3>
              <p>New Zealand’s education system is world-class, offering a diverse range of programs to meet global industry standards.</p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm bg-green-50">
              <h3 className="font-semibold text-xl mb-2">Work While Studying</h3>
              <p>International students can work up to 20 hours a week during terms and 40 hours during breaks.</p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm bg-green-50">
              <h3 className="font-semibold text-xl mb-2">Post-Graduation Work Visa</h3>
              <p>New Zealand offers a work visa for up to 3 years after graduation, allowing you to gain valuable work experience.</p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm bg-green-50">
              <h3 className="font-semibold text-xl mb-2">Affordable Cost of Living</h3>
              <p>Compared to other English-speaking countries, New Zealand offers a relatively affordable cost of living.</p>
            </div>
          </div>
        </div>

        {/* Top Universities */}
        <div>
          <h2 className="text-3xl font-semibold text-green-600 mb-4">Top Universities in New Zealand for Nepali Students</h2>
          <table className="w-full table-auto text-left border-collapse">
            <thead>
              <tr className="bg-green-100 text-green-700">
                <th className="p-3 border">University</th>
                <th className="p-3 border">Location</th>
                <th className="p-3 border">World Ranking*</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr>
                <td className="p-3 border">University of Auckland</td>
                <td className="p-3 border">Auckland</td>
                <td className="p-3 border">81</td>
              </tr>
              <tr>
                <td className="p-3 border">University of Otago</td>
                <td className="p-3 border">Dunedin</td>
                <td className="p-3 border">174</td>
              </tr>
              <tr>
                <td className="p-3 border">Victoria University of Wellington</td>
                <td className="p-3 border">Wellington</td>
                <td className="p-3 border">227</td>
              </tr>
              <tr>
                <td className="p-3 border">University of Canterbury</td>
                <td className="p-3 border">Christchurch</td>
                <td className="p-3 border">270</td>
              </tr>
              <tr>
                <td className="p-3 border">Auckland University of Technology</td>
                <td className="p-3 border">Auckland</td>
                <td className="p-3 border">400</td>
              </tr>
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
