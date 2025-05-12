import React from "react";

const Ireland = () => {
  return (
    <>
      {/* Hero Section */}
<section className="relative bg-green-900 text-white py-24 text-center">
  <img
    src="./images/Ireland.jpg"
    alt="Ireland Scenery"
    className="absolute inset-0 w-full h-full object-cover opacity-40"
  />
  <div className="relative z-10 max-w-4xl mx-auto px-4">
    <h1 className="text-5xl font-extrabold mb-4">Study in Ireland</h1>
    <p className="text-xl font-light">
      A Complete Guide for Nepali Students – Explore top universities, benefits, and how to apply.
    </p>
  </div>
</section>


      {/* Main Content */}
      <section className="bg-white pt-16 pb-16 px-6 md:px-16 text-gray-800 font-sans">
        <div className="max-w-5xl mx-auto space-y-16">

          {/* Why Study in Ireland */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-4 text-center">
              Why Study in Ireland?
            </h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>English-speaking country with a welcoming and safe environment.</li>
              <li>2-year post-study work visa available for international students.</li>
              <li>Hub for tech, pharma, finance, and business innovation in Europe.</li>
              <li>Internationally ranked universities and industry-linked degrees.</li>
              <li>Access to the European job market after graduation.</li>
            </ul>
          </div>

          {/* Top Courses in Ireland */}
          <div>
            <h3 className="text-3xl font-semibold text-green-600 mb-4">Top Courses in Ireland</h3>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Computer Science & IT</li>
              <li>Business & Management</li>
              <li>Engineering (Mechanical, Civil, Electronic)</li>
              <li>Life Sciences & Pharmacy</li>
              <li>Hospitality & Tourism Management</li>
              <li>Media & Communications</li>
            </ul>
          </div>

          {/* Top Universities */}
          <div>
            <h3 className="text-3xl font-semibold text-green-600 mb-4">Top Universities in Ireland</h3>
            <table className="w-full table-auto text-left border-collapse">
              <thead>
                <tr className="bg-green-100 text-green-700">
                  <th className="p-3 border">University</th>
                  <th className="p-3 border">Location</th>
                  <th className="p-3 border">QS Ranking 2024</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr><td className="p-3 border">Trinity College Dublin</td><td className="p-3 border">Dublin</td><td className="p-3 border">101</td></tr>
                <tr><td className="p-3 border">University College Dublin</td><td className="p-3 border">Dublin</td><td className="p-3 border">177</td></tr>
                <tr><td className="p-3 border">University of Galway</td><td className="p-3 border">Galway</td><td className="p-3 border">301</td></tr>
                <tr><td className="p-3 border">University of Limerick</td><td className="p-3 border">Limerick</td><td className="p-3 border">501</td></tr>
                <tr><td className="p-3 border">Dublin City University</td><td className="p-3 border">Dublin</td><td className="p-3 border">601</td></tr>
              </tbody>
            </table>
            <p className="text-sm mt-2 text-gray-500">*Source: QS World University Rankings 2024</p>
          </div>

          {/* Application Process */}
          <div>
            <h3 className="text-3xl font-semibold text-green-600 mb-4">Application Process</h3>
            <ol className="list-decimal list-inside space-y-2 text-lg">
              <li>Choose your preferred course and university.</li>
              <li>Prepare academic documents, including transcripts and certificates.</li>
              <li>Take an English language proficiency test (IELTS/TOEFL/PTE).</li>
              <li>Write a strong Statement of Purpose (SOP).</li>
              <li>Apply online through the university website or centralized application portals.</li>
              <li>Receive your Letter of Offer.</li>
              <li>Pay tuition deposit and begin visa process.</li>
            </ol>
          </div>

          {/* Visa Requirements */}
          <div>
            <h3 className="text-3xl font-semibold text-green-600 mb-4">Student Visa Requirements</h3>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Valid passport</li>
              <li>Letter of Acceptance from an Irish university</li>
              <li>Proof of English proficiency (IELTS/TOEFL)</li>
              <li>Evidence of financial support (at least €7,000 per year)</li>
              <li>Proof of tuition fee payment</li>
              <li>Medical insurance</li>
              <li>Visa application form and fee payment receipt</li>
            </ul>
          </div>

          {/* Intakes */}
          <div>
            <h3 className="text-3xl font-semibold text-green-600 mb-4">Intakes in Ireland</h3>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li><strong>September Intake:</strong> Major intake with a wide range of courses.</li>
              <li><strong>January Intake:</strong> Offered by select universities for limited programs.</li>
            </ul>
          </div>

          {/* Estimated Cost */}
          <div>
            <h3 className="text-3xl font-semibold text-green-600 mb-4">Estimated Cost of Studying in Ireland</h3>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li><strong>Tuition Fee:</strong> €9,000 – €20,000 per year</li>
              <li><strong>Living Expenses:</strong> €7,000 – €12,000 per year</li>
              <li><strong>Health Insurance:</strong> Around €500/year</li>
              <li><strong>Visa Application Fee:</strong> €60 (short stay) or €100 (long stay)</li>
            </ul>
            <p className="text-sm mt-2 text-gray-500">*Costs may vary by institution and city.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ireland;
