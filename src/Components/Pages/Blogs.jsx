import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/blogs/get');
        setBlogs(res.data);
      } catch (err) {
        console.error('Error fetching blogs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-600 to-gray-700 text-white py-24 px-4 text-center relative">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Explore Our Blog
          </h1>
          <p className="text-lg md:text-xl text-purple-100">
            Stay updated with the latest insights, stories, and news from our community.
          </p>
        </div>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
          <a href="#blogs" className="animate-bounce text-white">
            ↓
          </a>
        </div>
      </section>

      {/* Blog Grid */}
      <section id="blogs" className="pt-20 px-4">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-10">Latest Blogs</h2>

        {loading ? (
          <p className="text-center text-gray-600">Loading blogs...</p>
        ) : blogs.length === 0 ? (
          <p className="text-center text-gray-600">No blogs available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {blogs.map((blog) => (
              <div key={blog._id} className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-bold text-gray-800 mb-2">{blog.title}</h2>
                <p className="text-gray-600 text-sm mb-2">
                  {blog.author && <span className="font-medium">By {blog.author}</span>}
                </p>
                <p className="text-gray-700 mb-4">
                  {blog.content.slice(0, 150)}...
                </p>
                {blog.imageUrl && (
                  <img
                    src={blog.imageUrl}
                    alt={blog.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}
                {/* Link to Blog Detail */}
                <Link
                  to={`/blogs/${blog._id}`}
                  className="mt-4 inline-block text-blue-600 hover:underline text-sm"
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Blogs;
