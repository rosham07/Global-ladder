import { NavLink } from 'react-router-dom'; // Import NavLink for active link styling

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white fixed min-h-screen p-6">
      {/* Admin Panel Header */}
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      
      {/* Sidebar Navigation */}
      <nav className="flex flex-col gap-4">
        <span className="text-gray-400 font-semibold mb-2">Manage Content</span>
        
        {/* Testimonials Link */}
        <NavLink 
          to="/dashboard/testimonials" 
          className="hover:text-blue-400 py-2 px-3 rounded-lg transition duration-200"
          activeClassName="bg-blue-600"  // Active state styling
        >
          Testimonials
        </NavLink>
        
        {/* Blogs Link */}
        <NavLink 
          to="/dashboard/blogs" 
          className="hover:text-blue-400 py-2 px-3 rounded-lg transition duration-200"
          activeClassName="bg-blue-600"  // Active state styling
        >
          Blogs
        </NavLink>

        {/* Add additional links here */}
      </nav>
    </div>
  );
}
