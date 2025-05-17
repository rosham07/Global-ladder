import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/testimonials/get");
        setTestimonials(res.data);
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-600 to-gray-700 text-white py-24 px-4 text-center relative">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hear From Our Students
          </h1>
          <p className="text-lg md:text-xl text-blue-100">
            Discover what students are saying about their journey and experience with us.
          </p>
        </div>
        {/* Scroll down arrow */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
          <a href="#testimonials" className="animate-bounce text-white">
            ↓
          </a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="pt-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          What Our Students Say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial._id}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
            >
              <p className="text-gray-700 mb-4">"{testimonial.message}"</p>
              <h3 className="font-semibold text-lg text-indigo-600">
                - {testimonial.name}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
