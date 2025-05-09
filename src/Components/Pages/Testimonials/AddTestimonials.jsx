import React, { useState } from 'react';

const AddTestimonials = () => {
  const [testimonial, setTestimonial] = useState({
    name: '',
    message: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTestimonial((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!testimonial.name || !testimonial.message) {
      setError('Both name and message are required');
      return;
    }
    setError('');
    // Call your API or perform action to add testimonial
    console.log('Testimonial added:', testimonial);
    // Reset form after successful submission
    setTestimonial({ name: '', message: '' });
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Add Testimonial</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={testimonial.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter name"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            value={testimonial.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter message"
          />
        </div>

        {/* Error Message */}
        {error && <div className="text-red-500 text-sm">{error}</div>}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Add Testimonial
        </button>
      </form>
    </div>
  );
};

export default AddTestimonials;
