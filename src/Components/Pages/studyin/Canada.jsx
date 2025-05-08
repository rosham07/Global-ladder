import React from "react";

const Canada = () => {
  return (
    <section className="bg-white pt-32 pb-16 px-6 md:px-16 text-gray-800 font-sans">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-red-700 mb-4">
            Study in Canada: A Complete Guide for Nepali Students
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Explore top universities, benefits, and everything you need to study in Canada as a Nepali student.
          </p>
        </div>

        {/* Key Facts */}
        <div>
          <h2 className="text-3xl font-semibold text-red-600 mb-4">Key Facts About Studying in Canada</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Canada has over 100 public and private universities.</li>
            <li>Two official languages: English and French.</li>
            <li>Post-graduation work permit up to 3 years.</li>
            <li>High quality of life and safe environment.</li>
            <li>International student-friendly immigration pathways.</li>
          </ul>
        </div>

        {/* Benefits for Nepali Students */}
        <div>
          <h2 className="text-3xl font-semibold text-red-600 mb-4">Benefits of Studying in Canada for Nepali Students</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-6 border rounded-xl shadow-sm bg-red-50">
              <h3 className="font-semibold text-xl mb-2">Affordable Education</h3>
              <p>Compared to other developed countries, tuition and living costs in Canada are more affordable.</p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm bg-red-50">
              <h3 className="font-semibold text-xl mb-2">Diverse Culture</h3>
              <p>Canada embraces multiculturalism, making it easier for Nepali students to adapt and feel welcome.</p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm bg-red-50">
              <h3 className="font-semibold text-xl mb-2">Work While Studying</h3>
              <p>International students can work up to 20 hours per week during academic sessions.</p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm bg-red-50">
              <h3 className="font-semibold text-xl mb-2">Pathway to PR</h3>
              <p>Graduates have opportunities to gain permanent residency through programs like Express Entry.</p>
            </div>
          </div>
        </div>

        {/* Top Universities */}
        <div>
          <h2 className="text-3xl font-semibold text-red-600 mb-4">Top Universities in Canada for Nepali Students</h2>
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
                <td className="p-3 border">University of Toronto</td>
                <td className="p-3 border">Toronto, Ontario</td>
                <td className="p-3 border">21</td>
              </tr>
              <tr>
                <td className="p-3 border">University of British Columbia</td>
                <td className="p-3 border">Vancouver, BC</td>
                <td className="p-3 border">34</td>
              </tr>
              <tr>
                <td className="p-3 border">McGill University</td>
                <td className="p-3 border">Montreal, Quebec</td>
                <td className="p-3 border">30</td>
              </tr>
              <tr>
                <td className="p-3 border">University of Alberta</td>
                <td className="p-3 border">Edmonton, Alberta</td>
                <td className="p-3 border">111</td>
              </tr>
              <tr>
                <td className="p-3 border">McMaster University</td>
                <td className="p-3 border">Hamilton, Ontario</td>
                <td className="p-3 border">189</td>
              </tr>
            </tbody>
          </table>
          <p className="text-sm mt-2 text-gray-500">*Based on QS World University Rankings 2024</p>
        </div>

        {/* Requirements */}
        <div>
          <h2 className="text-3xl font-semibold text-red-600 mb-4">Requirements to Study in Canada for Nepali Students</h2>
          <ul className="list-disc list-inside text-lg space-y-2">
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
          <h2 className="text-3xl font-semibold text-red-600 mb-4">Intakes in Canada for Nepali Students</h2>
          <p className="mb-4 text-lg">
            Canadian institutions generally offer three intakes:
          </p>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>
              <strong>Fall Intake (September):</strong> Major intake with the highest number of course options.
            </li>
            <li>
              <strong>Winter Intake (January):</strong> Second most popular intake for many courses.
            </li>
            <li>
              <strong>Summer Intake (May):</strong> Limited course offerings, mainly diploma and short-term programs.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Canada;
