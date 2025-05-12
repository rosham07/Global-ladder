import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Ielts() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "How much does IELTS cost in Nepal?",
      answer: "The test fee in Nepal is usually around NPR 25,000–27,000 depending on the center.",
    },
    {
      question: "Which is better – Academic or General Training?",
      answer: "Academic is for university admissions. General Training is for work or migration.",
    },
    {
      question: "Is IELTS accepted in Canada and Australia?",
      answer: "Yes, IELTS is widely accepted in both Canada and Australia for study, work, and migration.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-32 px-4 text-center overflow-hidden">
        <img
          src="/images/ielts-banner.jpg"
          alt="IELTS Exam"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold tracking-tight mb-4">IELTS</h1>
          <p className="text-lg text-gray-300">
            Trusted worldwide, IELTS is your gateway to international education and migration.
          </p>
        </div>
      </section>

      {/* Page Content */}
      <main className="bg-gray-100 py-16 px-4 sm:px-8 lg:px-16 space-y-16">
        {/* Why IELTS */}
        <section className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why IELTS Matters</h2>
          <p className="text-gray-700 leading-relaxed">
            Recognized by over 10,000 organizations globally, IELTS is widely accepted for academic and immigration purposes across 140+ countries including the UK, USA, Australia, Canada, and more.
          </p>
          <img
            src="/images/ielts-world-map.jpg"
            alt="IELTS Acceptance"
            className="rounded-xl mt-6 shadow-md"
          />
        </section>

        {/* Types and Formats */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Types of IELTS</h3>
            <ul className="space-y-1 text-gray-700 list-disc list-inside">
              <li>IELTS Academic</li>
              <li>IELTS General Training</li>
              <li>IELTS for UKVI</li>
              <li>IELTS Life Skills</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Test Formats</h3>
            <p className="text-gray-700">
              IELTS is offered in <strong>Computer-delivered</strong> and <strong>Paper-based</strong> formats. Listening and speaking are similar in both; reading and writing vary slightly.
            </p>
          </div>
        </section>

        {/* Registration */}
        <section className="bg-white p-8 rounded-2xl shadow-sm space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">How to Register</h2>
          <div>
            <h3 className="text-lg font-medium text-gray-700">Online</h3>
            <ol className="list-decimal list-inside text-gray-600 space-y-1 mt-1">
              <li>Go to the British Council IELTS page</li>
              <li>Create an account</li>
              <li>Choose test centre</li>
              <li>Register and pay via Nabil Bank</li>
            </ol>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-700">Offline</h3>
            <ol className="list-decimal list-inside text-gray-600 space-y-1 mt-1">
              <li>Collect form from Global Ladder</li>
              <li>Submit the form at the office</li>
              <li>Pay via eSewa, Khalti, or cash</li>
            </ol>
          </div>
        </section>

        {/* Fees */}
        <section className="bg-white p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">IELTS Fees in Nepal</h2>
          <table className="w-full text-left border-collapse text-sm text-gray-700">
            <thead className="bg-gray-200 text-gray-800">
              <tr>
                <th className="px-4 py-2 border-b">Test Type</th>
                <th className="px-4 py-2 border-b">Fee (NPR)</th>
              </tr>
            </thead>
            <tbody>
              {[["IELTS Paper-Based", "31,500"], ["IELTS Computer-Delivered", "28,800"], ["UKVI", "34,000"], ["Life Skills", "24,000"]].map(([type, fee], idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">{type}</td>
                  <td className="px-4 py-2 border-b">{fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* TOEFL vs IELTS */}
        <section className="bg-white p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">TOEFL vs IELTS</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>IELTS is generally considered easier by many students.</li>
            <li>Preferred in UK, Australia, and New Zealand.</li>
            <li>TOEFL is more popular in the US and parts of Canada.</li>
          </ul>
          <img
            src="/images/toefl-vs-ielts.jpg"
            alt="TOEFL vs IELTS"
            className="rounded-xl mt-6 shadow-md"
          />
        </section>

        {/* Scholarships */}
        <section className="bg-white p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Scholarships</h2>
          <p className="text-gray-700">
            Nepalese students can apply for IELTS-based scholarships offered by international universities,
            depending on academic merit and performance.
          </p>
        </section>

        {/* Top Tips */}
        <section className="bg-white p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Top Preparation Tips</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Take mock tests regularly.</li>
            <li>Practice speaking English every day.</li>
            <li>Work on time management for each section.</li>
            <li>Use official IELTS practice materials.</li>
            <li>Join a good IELTS preparation center in Nepal if needed.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="bg-white p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg">
                <button
                  className="flex justify-between items-center w-full p-4 text-left"
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                >
                  <span className="font-medium text-gray-800">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${openFAQ === idx ? "rotate-180" : ""}`} />
                </button>
                {openFAQ === idx && (
                  <div className="px-4 pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
