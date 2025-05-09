import React from "react";

export default function IELTS() {
  return (
    <div className="max-w-7xl mx-auto p-4 space-y-8 pt-24 scroll-mt-24">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">IELTS</h1>
        <p className="text-gray-700 text-lg">
          The International English Language Testing System (IELTS) is an English
          proficiency test accepted for admission to universities abroad.
        </p>
        <img
          src="/images/ielts-banner.jpg"
          alt="IELTS Exam"
          className="mx-auto mt-4 rounded-2xl shadow-lg"
        />
      </section>

      <section className="bg-gray-50 p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Importance of IELTS</h2>
        <p className="text-gray-800">
          Recognized by over 10,000 organizations globally, IELTS is widely accepted for
          academic and immigration purposes across the UK, USA, Australia, Canada,
          New Zealand, Singapore, Europe, and 140+ countries.
        </p>
        <img
          src="/images/ielts-world-map.jpg"
          alt="IELTS Acceptance"
          className="mt-4 rounded-xl"
        />
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Types of IELTS</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>IELTS Academic</li>
            <li>IELTS General Training</li>
            <li>IELTS for UKVI</li>
            <li>IELTS Life Skills</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Test Formats</h3>
          <p className="text-gray-700">
            Available in two formats: <strong>Computer-delivered</strong> and <strong>Paper-based</strong>. Listening
            and speaking are the same for both Academic and General, while Reading and
            Writing differ slightly.
          </p>
        </div>
      </section>

      <section className="bg-gray-100 p-6 rounded-2xl shadow space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">Registration Steps</h2>
        <div>
          <h3 className="font-semibold">Online:</h3>
          <ol className="list-decimal list-inside text-gray-800">
            <li>Visit the British Council IELTS registration page</li>
            <li>Create an account</li>
            <li>Select your nearest test centre</li>
            <li>Register and pay via Nabil Bank</li>
          </ol>
        </div>
        <div>
          <h3 className="font-semibold">Offline:</h3>
          <ol className="list-decimal list-inside text-gray-800">
            <li>Collect form from Global Ladder</li>
            <li>Fill and submit at the office</li>
            <li>Pay via eSewa/Khalti or cash</li>
          </ol>
        </div>
      </section>

      <section className="p-6 bg-white rounded-2xl shadow">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">IELTS Fees in Nepal</h2>
        <table className="w-full text-left border text-gray-700">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border">Test Type</th>
              <th className="p-2 border">Fee (NPR)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">IELTS Paper-Based</td>
              <td className="p-2 border">31,500</td>
            </tr>
            <tr>
              <td className="p-2 border">IELTS Computer-Delivered</td>
              <td className="p-2 border">28,800</td>
            </tr>
            <tr>
              <td className="p-2 border">UKVI</td>
              <td className="p-2 border">34,000</td>
            </tr>
            <tr>
              <td className="p-2 border">Life Skills</td>
              <td className="p-2 border">24,000</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="bg-gray-50 p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold text-gray-700">TOEFL vs IELTS</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>IELTS is easier for most candidates compared to TOEFL.</li>
          <li>IELTS is widely accepted in the UK, Australia, New Zealand.</li>
          <li>TOEFL is more accepted in the US and Canada.</li>
        </ul>
        <img
          src="/images/toefl-vs-ielts.jpg"
          alt="TOEFL vs IELTS"
          className="mt-4 rounded-xl"
        />
      </section>

      <section className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Scholarships</h2>
        <p className="text-gray-800">
          Nepalese students may be eligible for IELTS-based scholarships, grants, and
          fellowships based on academic performance by select universities.
        </p>
      </section>
    </div>
  );
}
