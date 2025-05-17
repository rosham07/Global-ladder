import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/blogs/get/${id}`);
        setBlog(res.data);
      } catch (err) {
        console.error('Failed to load blog:', err);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) return <p className="p-6 text-center">Loading blog...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 mt-20 bg-white rounded-lg shadow-md">
      <Link to="/blogs" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Back to Blogs
      </Link>
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-600 mb-6">By {blog.author}</p>
      {blog.imageUrl && (
        <img
          src={blog.imageUrl}
          alt={blog.title}
          className="w-full h-96 object-cover rounded-lg mb-6"
        />
      )}
      {/* preserve line breaks with whitespace-pre-line */}
      <div className="text-gray-800 leading-relaxed whitespace-pre-line">
        {blog.content}
      </div>
    </div>
  );
}
