import { Routes, Route } from 'react-router-dom';
import Sidebar from '../SideBar'; // Still correct

// Corrected imports for components outside 'admin'
import AddTestimonials from '../Pages/Testimonials/AddTestimonials';
import ListTestimonials from '../Pages/Testimonials/ListTestimonials';
import AddBlog from '../Pages/Blogs/AddBlogs';
import ListBlogs from '../Pages/Blogs/ListBlogs';

export default function Dashboard() {
  return (
    <div className="flex">
      {/* Sidebar component */}
      <Sidebar />
      
      {/* Main content area */}
      <main className="flex-1 p-6 ml-64">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Admin Dashboard</h2>

        {/* Routing for child components (Testimonials, Blogs, etc.) */}
        <Routes>
          <Route path="testimonials" element={<ListTestimonials />} />
          <Route path="testimonials/add" element={<AddTestimonials />} />
          <Route path="blogs" element={<ListBlogs />} />
          <Route path="blogs/add" element={<AddBlog />} />
        </Routes>
      </main>
    </div>
  );
}
