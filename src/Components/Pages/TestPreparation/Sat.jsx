import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Sat = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "Who should take the SAT?",
      answer: "The SAT is for students planning to apply for undergraduate programs, especially in the United States or other countries that require standardized test scores.",
    },
    {
      question: "What is the structure of the SAT exam?",
      answer: "The SAT consists of Math and Evidence-Based Reading & Writing sections. The optional Essay has been discontinued as of 2021.",
    },
    {
      question: "How many times can I take the SAT?",
      answer: "You can take the SAT as many times as you like. Most students take it 2-3 times to improve their scores.",
    },
    {
      question: "Are scholarships available based on SAT scores?",
      answer: "Yes, many universities offer scholarships based on high SAT scores, especially for international students.",
    },
    {
      question: "Do you provide online or hybrid classes?",
      answer: "Yes, we offer both in-person and online SAT prep classes to accommodate your preferences and schedule.",
    },
  ];

  const feeData = [
    { course: "Standard SAT Course", duration: "6 Weeks", fee: "NPR 15,000" },
    { course: "Weekend Intensive", duration: "8 Weeks", fee: "NPR 18,000" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-700 to-gray-800 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">SAT </h1>
          <p className="text-lg text-white/90 mb-6">
            Expert guidance, tailored practice, and comprehensive resources for Nepalese students.
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
              <li>Duration: 6 to 8 weeks</li>
              <li>Focus: Math, Reading & Writing Sections</li>
              <li>Experienced SAT Trainers</li>
              <li>Regular Practice Tests & Review Sessions</li>
              <li>Free Orientation Class</li>
              <li>Study Materials & Online Resources</li>
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

        {/* SAT Exam Fee */}
        <section className="bg-white text-gray-800 p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-4">SAT Exam Fee in Nepal</h2>
          <p className="mb-2">$60 × 135 = NPR 8,100</p>
          <p className="font-semibold">So, the SAT fee in Nepal is about NPR 8,100.</p>
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

export default Sat;
