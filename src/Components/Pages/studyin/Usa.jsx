import React from "react";

const Usa = () => {
  return (
    <section className="bg-white pt-32 pb-16 px-6 md:px-16 text-gray-800 font-sans">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Title Section */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-red-700 mb-4">
            Study in the USA: A Complete Guide for Nepali Students
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Learn why the USA is a top destination for higher education and how you can achieve your academic goals.
          </p>
        </div>

        {/* Key Facts */}
        <div>
          <h2 className="text-3xl font-semibold text-red-600 mb-4">Key Facts About Studying in the USA</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Over 4,000 accredited universities and colleges.</li>
            <li>World-renowned institutions such as Harvard, MIT, and Stanford.</li>
            <li>Opportunity for internships and on-campus work to gain experience.</li>
            <li>F-1 student visa for international students offering work options.</li>
            <li>Access to state-of-the-art research facilities and academic resources.</li>
          </ul>
        </div>

        {/* Benefits for Nepali Students */}
        <div>
          <h2 className="text-3xl font-semibold text-red-600 mb-4">Benefits of Studying in the USA for Nepali Students</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-6 border rounded-xl shadow-sm bg-red-50">
              <h3 className="font-semibold text-xl mb-2">Academic Excellence</h3>
              <p>Study at some of the best universities in the world, offering cutting-edge research and highly competitive programs.</p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm bg-red-50">
              <h3 className="font-semibold text-xl mb-2">Global Networking</h3>
              <p>Build a global network through interactions with peers and professionals from diverse backgrounds.</p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm bg-red-50">
              <h3 className="font-semibold text-xl mb-2">Work Opportunities</h3>
              <p>Utilize the Optional Practical Training (OPT) and Curricular Practical Training (CPT) programs to gain work experience.</p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm bg-red-50">
              <h3 className="font-semibold text-xl mb-2">Financial Aid</h3>
              <p>Many scholarships, assistantships, and financial aid options are available for international students.</p>
            </div>
          </div>
        </div>

        {/* Top Universities */}
        <div>
          <h2 className="text-3xl font-semibold text-red-600 mb-4">Top Universities in the USA for Nepali Students</h2>
          <table className="w-full table-auto text-left border-collapse">
            <thead>
              <tr className="bg-red-100 text-red-700">
                <th className="p-3 border">University</th>
                <th className="p-3 border">Location</th>
                <th className="p-3 border">World Ranking*</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr>
                <td className="p-3 border">Harvard University</td>
                <td className="p-3 border">Cambridge, MA</td>
                <td className="p-3 border">3</td>
              </tr>
              <tr>
                <td className="p-3 border">Stanford University</td>
                <td className="p-3 border">Stanford, CA</td>
                <td className="p-3 border">2</td>
              </tr>
              <tr>
                <td className="p-3 border">Massachusetts Institute of Technology (MIT)</td>
                <td className="p-3 border">Cambridge, MA</td>
                <td className="p-3 border">1</td>
              </tr>
              <tr>
                <td className="p-3 border">California Institute of Technology (Caltech)</td>
                <td className="p-3 border">Pasadena, CA</td>
                <td className="p-3 border">6</td>
              </tr>
              <tr>
                <td className="p-3 border">University of California, Berkeley</td>
                <td className="p-3 border">Berkeley, CA</td>
                <td className="p-3 border">32</td>
              </tr>
            </tbody>
          </table>
          <p className="text-sm mt-2 text-gray-500">*Based on QS World University Rankings 2024</p>
        </div>

        {/* Requirements */}
        <div>
          <h2 className="text-3xl font-semibold text-red-600 mb-4">Requirements to Study in the USA for Nepali Students</h2>
          <ul className="list-disc list-inside text-lg space-y-2">
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
          <h2 className="text-3xl font-semibold text-red-600 mb-4">Intakes in the USA for Nepali Students</h2>
          <p className="mb-4 text-lg">
            US universities generally have two main intakes:
          </p>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>
              <strong>Fall Intake (September):</strong> The most popular intake for undergraduate and graduate courses.
            </li>
            <li>
              <strong>Spring Intake (January):</strong> Available for selected programs, especially for graduate-level courses.
            </li>
            <li>
              <strong>Summer Intake (May/June):</strong> Less common, but some universities offer summer sessions for specific courses.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Usa;
