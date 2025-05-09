import React from 'react';

const Gre = () => {
  return (
    <section
      id="gre"
      className="bg-gray-100 py-12 px-6 md:px-16 pt-24 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          GRE Coaching for Nepalese Students
        </h2>
        <p className="text-gray-600 text-center mb-10 max-w-3xl mx-auto">
          Boost your GRE score with intensive coaching, analytical writing prep, and real-time mock exams. Designed for Nepalese students applying for graduate programs globally.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div className="bg-white shadow p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Course Details</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Duration: 6 to 8 weeks</li>
              <li>Focus: Quantitative, Verbal, AWA</li>
              <li>Advanced Practice Tests</li>
              <li>Strategy Sessions & Timed Practice</li>
              <li>Free Trial Class</li>
              <li>One-on-One Mentoring</li>
            </ul>
          </div>

          <div className="bg-white shadow p-6 rounded-2xl overflow-x-auto">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Fee Structure</h3>
            <table className="w-full table-auto text-gray-600 border">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 border">Course</th>
                  <th className="px-4 py-2 border">Duration</th>
                  <th className="px-4 py-2 border">Fee (NPR)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border">Standard GRE Course</td>
                  <td className="px-4 py-2 border">6 Weeks</td>
                  <td className="px-4 py-2 border">NPR 20,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">GRE Advanced Package</td>
                  <td className="px-4 py-2 border">8 Weeks</td>
                  <td className="px-4 py-2 border">NPR 25,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center">
          <a
            href="/#/Contact"
            className="inline-block bg-gray-700 hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-xl transition"
          >
            Enroll Now or Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gre;
