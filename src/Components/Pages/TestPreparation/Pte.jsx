import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Pte = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "What is the cost of PTE in Nepal?",
      answer: "The PTE fee ranges from NPR 26,500 to NPR 34,000 depending on the test type and time.",
    },
    {
      question: "Is PTE accepted in Canada and Australia?",
      answer: "Yes, PTE is accepted in Australia, New Zealand, UK, Canada, and many other countries.",
    },
    {
      question: "Is PTE easier than IELTS?",
      answer: "Many students find PTE easier due to its computer-based structure and automated scoring.",
    },
  ];

  const testData = [
    { type: "PTE Academic", fee: "26,500 - 30,000" },
    { type: "PTE Academic Online", fee: "26,500 - 30,000" },
    { type: "PTE Academic UKVI", fee: "32,000 - 34,000" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-600 to-gray-700 text-white py-24 px-4 text-center relative">
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold tracking-tight mb-4">PTE</h1>
          <p className="text-lg text-gray-300">
            Get ready for your PTE Academic journey with expert instruction and proven strategies.
          </p>
        </div>
      </section>

      {/* Page Content */}
      <main className="bg-gray-100 py-16 px-4 sm:px-8 lg:px-16 space-y-16">
        {/* Why PTE */}
        <section className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why PTE?</h2>
          <p className="text-gray-700 leading-relaxed">
            PTE Academic is accepted by thousands of institutions worldwide. It is a fast, fair, and flexible English language test used for visa and university applications in countries such as Australia, the UK, and Canada.
          </p>
        </section>

        {/* Types and Formats */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Test Types</h3>
            <ul className="space-y-1 text-gray-700 list-disc list-inside">
              <li>PTE Academic</li>
              <li>PTE Academic Online</li>
              <li>PTE Academic UKVI</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Test Format</h3>
            <p className="text-gray-700">
              PTE is completely computer-based and focuses on real-life English. It includes speaking, writing, reading, and listening – all tested via computer and headset.
            </p>
          </div>
        </section>

        {/* Registration */}
        <section className="bg-white p-8 rounded-2xl shadow-sm space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">How to Register</h2>
          <div>
            <h3 className="text-lg font-medium text-gray-700">Online</h3>
            <ol className="list-decimal list-inside text-gray-600 space-y-1 mt-1">
              <li>Visit the official PTE website</li>
              <li>Create an account and select Nepal as your country</li>
              <li>Choose your test center and date</li>
              <li>Complete payment using an online method</li>
            </ol>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-700">Offline</h3>
            <ol className="list-decimal list-inside text-gray-600 space-y-1 mt-1">
              <li>Visit Global Ladder or authorized PTE registration centers</li>
              <li>Fill in your application details</li>
              <li>Pay via eSewa, Khalti, or bank</li>
            </ol>
          </div>
        </section>

        {/* Fees */}
        <section className="bg-white p-8 rounded-2xl shadow-sm">
  <h2 className="text-2xl font-semibold text-gray-800 mb-4">PTE Fees in Nepal</h2>
  <div className="overflow-x-auto">
    <table className="min-w-full table-auto text-left border-collapse rounded overflow-hidden shadow">
      <thead className="bg-gray-800 text-white">
        <tr>
          <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider">Test Type</th>
          <th className="px-6 py-3 text-xs font-medium uppercase tracking-wider">Fee (NPR)</th>
        </tr>
      </thead>
      <tbody className="text-gray-800 bg-white">
        {testData.map((item, index) => (
          <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
            <td className="px-6 py-4 whitespace-nowrap">{item.type}</td>
            <td className="px-6 py-4 whitespace-nowrap">{item.fee.toLocaleString('en-NP')}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-gray-500 mt-2 text-sm">
      Fees may vary slightly depending on exchange rates and applicable taxes.
    </p>
  </div>
</section>

        {/* Tips */}
        <section className="bg-white p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Top Preparation Tips</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Practice with PTE sample questions and real test scenarios.</li>
            <li>Take daily mock tests to improve confidence and accuracy.</li>
            <li>Improve your speaking fluency using PTE software.</li>
            <li>Focus on grammar and pronunciation.</li>
            <li>Seek feedback from experienced instructors.</li>
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

export default Pte;
