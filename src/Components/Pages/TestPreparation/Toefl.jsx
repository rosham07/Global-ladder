import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Toefl = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "What is the duration of the TOEFL course?",
      answer: "The TOEFL course typically lasts between 4 to 6 weeks.",
    },
    {
      question: "Are there any trial classes available?",
      answer: "Yes, we offer a free trial class before you enroll.",
    },
    {
      question: "Is personalized feedback provided?",
      answer: "Yes, we provide one-on-one speaking and writing feedback.",
    },
  ];

  const courseFees = [
    { course: "Standard TOEFL Course", duration: "4 Weeks", fee: 9000 },
    { course: "Intensive TOEFL Course", duration: "6 Weeks", fee: 13000 },
    { course: "Weekend Batch", duration: "6 Weeks", fee: 11000 },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-700 to-gray-900 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">TOEFL</h1>
          <p className="text-lg text-white/90 mb-6">
            Achieve your dream TOEFL score with expert-led classes focused on skill-building,
            real test simulations, and personalized feedback.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="bg-gray-100 py-16 px-6 sm:px-8 lg:px-16 space-y-16 max-w-6xl mx-auto">
        {/* Course Details & Fees */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Course Details</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Duration: 4 to 6 weeks</li>
              <li>Class Timing: Morning / Evening Batches</li>
              <li>Expert Instructors with TOEFL Experience</li>
              <li>Practice with Real Test Environment</li>
              <li>Free Trial Class Available</li>
              <li>One-on-One Speaking and Writing Feedback</li>
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
                {courseFees.map(({ course, duration, fee }, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-2 border border-gray-300">{course}</td>
                    <td className="px-4 py-2 border border-gray-300">{duration}</td>
                    <td className="px-4 py-2 border border-gray-300">
                      {fee.toLocaleString("en-NP")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* TOEFL Exam Fee */}
        <section className="bg-white text-gray-800 p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-4">TOEFL iBT Exam Fee in Nepal</h2>
          <ul className="list-disc pl-5 mb-2">
            <li>USD 190 × 135 = NPR 25,650</li>
            <li>USD 210 × 135 = NPR 28,350</li>
          </ul>
          <p className="font-semibold">Approximate fee range: NPR 25,650 to NPR 28,350</p>
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

        {/* CTA */}
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

export default Toefl;
