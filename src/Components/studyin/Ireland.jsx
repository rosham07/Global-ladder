import React from "react";

const Ireland = () => {
  return (
    <section className="bg-white pt-32 pb-16 px-6 md:px-16 text-gray-800 font-sans">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-4">
            Study in Ireland: A Complete Guide for Nepali Students
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Learn why Ireland is a top study destination and explore everything you need to know about studying in Ireland.
          </p>
        </div>

        {/* Key Facts */}
        <div>
          <h2 className="text-3xl font-semibold text-green-600 mb-4">Key Facts About Studying in Ireland</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Over 30,000 international students choose Ireland for higher education every year.</li>
            <li>Home to prestigious universities like Trinity College Dublin and University College Dublin.</li>
            <li>English-speaking country with a rich cultural heritage.</li>
            <li>Post-graduation work visa available for up to 2 years.</li>
            <li>Access to the European job market, especially in tech and business sectors.</li>
          </ul>
        </div>

        {/* Benefits for Nepali Students */}
        <div>
          <h2 className="text-3xl font-semibold text-green-600 mb-4">Benefits of Studying in Ireland for Nepali Students</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-6 border rounded-xl shadow-sm bg-green-50">
              <h3 className="font-semibold text-xl mb-2">Top-Quality Education</h3>
              <p>Earn globally recognized degrees in a wide range of disciplines from world-class institutions.</p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm bg-green-50">
              <h3 className="font-semibold text-xl mb-2">Work While Studying</h3>
              <p>International students can work up to 20 hours per week during term time and 40 hours during holidays.</p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm bg-green-50">
              <h3 className="font-semibold text-xl mb-2">Post-Graduation Work Opportunities</h3>
              <p>Stay in Ireland for up to 2 years after graduation to work in Ireland’s thriving economy.</p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm bg-green-50">
              <h3 className="font-semibold text-xl mb-2">Cultural Diversity</h3>
              <p>Experience Ireland’s rich cultural history while meeting students from all around the world.</p>
            </div>
          </div>
        </div>

        {/* Top Universities */}
        <div>
          <h2 className="text-3xl font-semibold text-green-600 mb-4">Top Universities in Ireland for Nepali Students</h2>
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
                <td className="p-3 border">Trinity College Dublin</td>
                <td className="p-3 border">Dublin</td>
                <td className="p-3 border">101</td>
              </tr>
              <tr>
                <td className="p-3 border">University College Dublin</td>
                <td className="p-3 border">Dublin</td>
                <td className="p-3 border">177</td>
              </tr>
              <tr>
                <td className="p-3 border">University of Limerick</td>
                <td className="p-3 border">Limerick</td>
                <td className="p-3 border">501</td>
              </tr>
              <tr>
                <td className="p-3 border">Dublin City University</td>
                <td className="p-3 border">Dublin</td>
                <td className="p-3 border">601</td>
              </tr>
              <tr>
                <td className="p-3 border">University of Galway</td>
                <td className="p-3 border">Galway</td>
                <td className="p-3 border">301</td>
              </tr>
            </tbody>
          </table>
          <p className="text-sm mt-2 text-gray-500">*Based on QS World University Rankings 2024</p>
        </div>

        {/* Requirements */}
        <div>
          <h2 className="text-3xl font-semibold text-green-600 mb-4">Requirements to Study in Ireland for Nepali Students</h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>Academic documents (SLC, +2, Bachelor's degrees).</li>
            <li>English proficiency (IELTS, TOEFL, etc.).</li>
            <li>Letter of Acceptance from an Irish university.</li>
            <li>Statement of Purpose (SOP) explaining your study goals.</li>
            <li>Proof of financial resources to support your studies and living expenses.</li>
            <li>Valid passport and visa application for an Irish student visa.</li>
          </ul>
        </div>

        {/* Intakes */}
        <div>
          <h2 className="text-3xl font-semibold text-green-600 mb-4">Intakes in Ireland for Nepali Students</h2>
          <p className="mb-4 text-lg">
            Ireland offers two primary intakes:
          </p>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>
              <strong>Autumn Intake (September):</strong> The main intake for most programs and institutions.
            </li>
            <li>
              <strong>Spring Intake (January):</strong> Available for selected programs and universities.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Ireland;
