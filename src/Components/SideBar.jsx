import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Hamburger Button (Mobile only) */}
      <button
        className="p-4 text-white bg-gray-800 fixed top-0 left-0 z-50 md:hidden"
        onClick={toggleSidebar}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white pt-20 p-6 transition-transform transform duration-300 z-40 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0`}
      >
        <h2 className="text-xl font-bold mb-6 mt-10 md:mt-0">Admin Panel</h2>

        <nav className="flex flex-col gap-4">
          <span className="text-gray-400 font-semibold mb-2">Manage Content</span>

          <NavLink
            to="/dashboard/testimonials/add"
            className={({ isActive }) =>
              `py-2 px-3 rounded-lg transition duration-200 ${
                isActive ? 'bg-blue-600 text-white' : 'hover:text-blue-400'
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Add Testimonial
          </NavLink>

          <NavLink
            to="/dashboard/testimonials/list"
            className={({ isActive }) =>
              `py-2 px-3 rounded-lg transition duration-200 ${
                isActive ? 'bg-blue-600 text-white' : 'hover:text-blue-400'
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            List Testimonials
          </NavLink>

          <NavLink
            to="/dashboard/blogs/add"
            className={({ isActive }) =>
              `py-2 px-3 rounded-lg transition duration-200 ${
                isActive ? 'bg-blue-600 text-white' : 'hover:text-blue-400'
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Add Blog
          </NavLink>

          <NavLink
            to="/dashboard/blogs/list"
            className={({ isActive }) =>
              `py-2 px-3 rounded-lg transition duration-200 ${
                isActive ? 'bg-blue-600 text-white' : 'hover:text-blue-400'
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            List Blogs
          </NavLink>
        </nav>
      </div>
    </>
  );
}
