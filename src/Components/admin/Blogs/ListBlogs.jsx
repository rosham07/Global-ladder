import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function ListBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/blogs/get');
        setBlogs(res.data);
      } catch (err) {
        console.error('Error fetching blogs:', err);
        toast.error('Failed to fetch blogs');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this blog?');
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/api/blogs/delete/${id}`);
      setBlogs(blogs.filter((blog) => blog._id !== id));
      toast.success('Blog deleted successfully');
    } catch (err) {
      console.error('Error deleting blog:', err);
      toast.error('Failed to delete blog');
    }
  };

  const handleUpdate = (blog) => {
    setSelectedBlog(blog);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedBlog(null);
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/blogs/update/${selectedBlog._id}`, selectedBlog);
      setBlogs(blogs.map((b) => (b._id === selectedBlog._id ? selectedBlog : b)));
      setModalOpen(false);
      toast.success('Blog updated successfully');
    } catch (err) {
      console.error('Error updating blog:', err);
      toast.error('Failed to update blog');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedBlog({ ...selectedBlog, [name]: value });
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
            <li key={blog._id} className="p-4 border rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
              <p className="text-gray-600 mb-2">{blog.content.slice(0, 120)}...</p>
              {blog.imageUrl && (
                <img src={blog.imageUrl} alt={blog.title} className="w-32 h-32 object-cover rounded-md" />
              )}
              <div className="mt-3 flex gap-4">
                <button onClick={() => handleUpdate(blog)} className="text-blue-600 hover:underline text-sm">
                  Edit Blog
                </button>
                <button onClick={() => handleDelete(blog._id)} className="text-red-600 hover:underline text-sm">
                  Delete Blog
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Edit Blog</h2>
            <form onSubmit={handleUpdateSubmit} className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-gray-700">Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={selectedBlog.title}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="content" className="block text-gray-700">Content</label>
                <textarea
                  id="content"
                  name="content"
                  value={selectedBlog.content}
                  onChange={handleInputChange}
                  rows="6"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              <div className="mt-4 flex justify-between">
                <button
                  type="button"
                  onClick={handleModalClose}
                  className="w-1/3 bg-gray-400 text-white py-2 rounded-lg hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/3 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Update Blog
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
