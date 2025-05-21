import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await axios.get(`http://localhost:5000/api/blogs/get/${id}`);
        if (res.data) {
          setBlog(res.data);
        } else {
          setBlog(null);
        }
      } catch (err) {
        setError('Failed to load blog. Please try again later.');
        console.error('Failed to load blog:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <p className="p-6 text-center mt-28">Loading blog...</p>;
  if (error) return <p className="p-6 text-center text-red-600 mt-28">{error}</p>;
  if (!blog) return <p className="p-6 text-center mt-28">Blog not found.</p>;

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start px-4 pt-32 pb-10">
      {/* pt-32 ensures spacing below the navbar (you can adjust if needed) */}
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8">
        <Link
          to="/blogs"
          className="text-blue-600 hover:text-blue-800 font-medium mb-6 inline-block"
        >
          ← Back to Blogs
        </Link>

        <h1 className="text-3xl font-extrabold mb-2 text-gray-900">{blog.title}</h1>
        <p className="text-gray-600 mb-6 font-medium">By {blog.author || 'Unknown Author'}</p>

        {blog.imageUrl && (
          <img
            src={blog.imageUrl}
            alt={blog.title}
            className="w-full h-64 object-cover rounded mb-6"
          />
        )}

        <article className="text-gray-800 whitespace-pre-line leading-relaxed text-lg">
          {blog.content}
        </article>
      </div>
    </div>
  );
}
