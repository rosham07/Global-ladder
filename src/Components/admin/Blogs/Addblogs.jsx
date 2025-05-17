// src/pages/AddBlogs.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function AddBlogs() {
  const [blog, setBlog] = useState({
    title: '',
    content: '',
    author: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/blogs/create', blog);
      console.log('Blog Submitted:', res.data);

      toast.success('Blog added successfully!');   // ← success toast

      // Clear form
      setBlog({ title: '', content: '', author: '' });
    } catch (error) {
      console.error('Error submitting blog:', error);

      // show error message if available, else generic
      const msg =
        error.response?.data?.message ||
        'Failed to submit blog. Please try again.';
      toast.error(msg);  // ← error toast
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-xl mx-auto mt-10">
      <h1 className="text-2xl font-semibold mb-4">Add Blog</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-gray-700">Blog Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={blog.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Author */}
        <div>
          <label htmlFor="author" className="block text-gray-700">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            value={blog.author}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Content */}
        <div>
          <label htmlFor="content" className="block text-gray-700">Blog Content</label>
          <textarea
            id="content"
            name="content"
            value={blog.content}
            onChange={handleChange}
            rows="6"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        {/* Submit */}
        <div className="mt-4">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Blog
          </button>
        </div>
      </form>
    </div>
  );
}
