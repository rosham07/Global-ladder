import { useEffect, useState } from 'react';

export default function ListBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Replace with your actual API endpoint
    fetch('http://localhost:5000/api/blogs')
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error('Error fetching blogs:', err));
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-6">All Blogs</h2>
      {blogs.length === 0 ? (
        <p className="text-gray-600">No blogs found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {blogs.map((blog) => (
            <div key={blog._id} className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold">{blog.title}</h3>
              <p className="text-gray-700 mt-2">{blog.content.substring(0, 150)}...</p>
              {blog.imageUrl && (
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="mt-3 max-h-40 rounded object-cover"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
