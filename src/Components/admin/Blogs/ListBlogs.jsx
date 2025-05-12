import React, { useEffect, useState } from 'react';

export default function ListBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const sampleBlogs = [
    {
      id: 1,
      title: 'Top 5 Tips for Studying Abroad',
      content:
        'Studying abroad can be life-changing. From choosing the right country to managing finances, here are our top 5 tips...',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Why You Should Take the IELTS Early',
      content:
        'Many students delay IELTS prep and regret it later. Taking it early has several benefits that we’ll explain here...',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      title: 'How to Pick the Right University',
      content:
        'Choosing a university is about more than rankings. Consider your course, location, fees, and more...',
      imageUrl: 'https://via.placeholder.com/150',
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setBlogs(sampleBlogs);
      setLoading(false);
    }, 1000);
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this blog?');
    if (confirmDelete) {
      setBlogs(blogs.filter((blog) => blog.id !== id));
    }
  };

  if (loading) return <div>Loading blogs...</div>;

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-4">List of Blogs</h1>

      {blogs.length === 0 ? (
        <p>No blogs found.</p>
      ) : (
        <ul className="space-y-6">
          {blogs.map((blog) => (
            <li key={blog.id} className="p-4 border rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
              <p className="text-gray-600 mb-2">
                {blog.content.slice(0, 120)}...
              </p>
              {blog.imageUrl && (
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="w-32 h-32 object-cover rounded-md"
                />
              )}
              <div className="mt-3 flex gap-4">
                <button className="text-blue-600 hover:underline text-sm">
                  Edit Blog
                </button>
                <button
                  onClick={() => handleDelete(blog.id)}
                  className="text-red-600 hover:underline text-sm"
                >
                  Delete Blog
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
