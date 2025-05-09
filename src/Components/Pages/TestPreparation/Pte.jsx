import React from 'react';

const Pte = () => {
  return (
    <section
      id="pte"
      className="bg-gray-100 py-12 px-6 md:px-16 pt-24 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          PTE Classes for Nepalese Students
        </h2>
        <p className="text-gray-600 text-center mb-10 max-w-3xl mx-auto">
          Prepare for your PTE Academic test with expert guidance. Our classes are tailored to help Nepalese students achieve their desired scores with proven strategies, practice tests, and personal feedback.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div className="bg-white shadow p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Course Details</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Duration: 4 to 6 weeks</li>
              <li>Class Time: Morning / Day / Evening batches</li>
              <li>Experienced Instructors</li>
              <li>Daily Mock Tests & Practice Materials</li>
              <li>Free Demo Class Available</li>
              <li>Small Batch Size for Personal Attention</li>
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
                  <td className="px-4 py-2 border">Standard PTE Course</td>
                  <td className="px-4 py-2 border">4 Weeks</td>
                  <td className="px-4 py-2 border">NPR 8,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">Intensive PTE Course</td>
                  <td className="px-4 py-2 border">6 Weeks</td>
                  <td className="px-4 py-2 border">NPR 12,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">Weekend Batch</td>
                  <td className="px-4 py-2 border">6 Weeks</td>
                  <td className="px-4 py-2 border">NPR 10,000</td>
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

export default Pte;
