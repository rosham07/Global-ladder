import React from 'react';
import Sidebar from '../SideBar';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import { toast } from 'react-toastify';

export default function Dashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully!');
    navigate('/admin');
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />

      <main className="flex-1 md:ml-64 mt-16 md:mt-0"> {/* mt-16 offsets mobile hamburger button */}
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-gray-600 to-gray-800 text-white py-16 px-6 shadow-lg text-center relative">
          <h1 className="text-4xl font-bold">Admin Dashboard</h1>
          <p className="text-lg mt-2 opacity-90">Manage all content from one place</p>

          {/* Logout button positioned top-right */}
          <button
            onClick={handleLogout}
            className="absolute top-4 right-6 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition"
          >
            Logout
          </button>
        </div>

        {/* Page Content */}
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
