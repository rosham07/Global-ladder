import React from 'react';

const ListTestimonials = () => {
  // Hardcoded list of testimonials (replace with dynamic data)
  const testimonials = [
    { id: 1, name: 'John Doe', message: 'Great service, really happy with the experience!' },
    { id: 2, name: 'Jane Smith', message: 'Wonderful support and guidance throughout the process.' },
  ];

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">List Testimonials</h3>
      <div className="space-y-4">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-4 shadow rounded-md">
            <h4 className="text-lg font-semibold">{testimonial.name}</h4>
            <p className="text-sm text-gray-600">{testimonial.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListTestimonials;
