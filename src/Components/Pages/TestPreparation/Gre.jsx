import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Gre = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "What is the duration of the GRE coaching course?",
      answer: "The GRE coaching course lasts between 6 to 8 weeks, depending on the package you choose.",
    },
    {
      question: "What is included in the GRE coaching?",
      answer: "The course includes intensive preparation for Quantitative, Verbal, Analytical Writing, advanced practice tests, strategy sessions, timed practice, and one-on-one mentoring.",
    },
    {
      question: "What is the GRE exam fee in Nepal?",
      answer: "The GRE exam fee in Nepal is approximately NPR 29,700 (calculated as $220 × 135).",
    },
  ];

  const feeData = [
    { course: "Standard GRE Course", duration: "6 Weeks", fee: "NPR 20,000" },
    { course: "GRE Advanced Package", duration: "8 Weeks", fee: "NPR 25,000" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-700 to-gray-800 text-white py-24 px-4 text-center relative">
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold tracking-tight mb-4">GRE</h1>
          <p className="text-lg text-gray-300">
            Boost your GRE score with intensive coaching, analytical writing prep, and real-time mock exams — designed for Nepalese students aiming for graduate programs worldwide.
          </p>
        </div>
      </section>

      {/* Page Content */}
      <main className="bg-gray-100 py-16 px-4 sm:px-8 lg:px-16 space-y-16 max-w-6xl mx-auto">
        {/* Course Details and Fee Structure */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Course Details</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Duration: 6 to 8 weeks</li>
              <li>Focus: Quantitative, Verbal, Analytical Writing (AWA)</li>
              <li>Advanced Practice Tests</li>
              <li>Strategy Sessions & Timed Practice</li>
              <li>Free Trial Class</li>
              <li>One-on-One Mentoring</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm overflow-x-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Fee Structure</h2>
            <table className="w-full table-auto text-gray-700 border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 border border-gray-300 text-left">Course</th>
                  <th className="px-4 py-2 border border-gray-300 text-left">Duration</th>
                  <th className="px-4 py-2 border border-gray-300 text-left">Fee (NPR)</th>
                </tr>
              </thead>
              <tbody>
                {feeData.map((item, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-2 border border-gray-300">{item.course}</td>
                    <td className="px-4 py-2 border border-gray-300">{item.duration}</td>
                    <td className="px-4 py-2 border border-gray-300">{item.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* GRE Exam Fee Section */}
        <section className="bg-white text-gray-800 p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-4">GRE Exam Fee in Nepal</h2>
          <p className="mb-2">$220 × 135 = NPR 29,700</p>
          <p className="font-semibold">So, the GRE exam fee in Nepal is approximately NPR 29,700.</p>
        </section>

        {/* FAQ Section */}
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

        {/* Call to Action */}
        <div className="text-center">
          <a
            href="/#/Contact"
            className="inline-block bg-gray-700 hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-xl transition"
          >
            Enroll Now or Contact Us
          </a>
        </div>
      </main>
    </>
  );
};

export default Gre;
