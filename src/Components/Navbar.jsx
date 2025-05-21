import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isStudyInOpen, setIsStudyInOpen] = useState(false);
  const [isTestPrepOpen, setIsTestPrepOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const studyInItems = [
    { name: 'UK', path: '/studyin/uk' },
    { name: 'Australia', path: '/studyin/australia' },
    { name: 'Canada', path: '/studyin/canada' },
    { name: 'Ireland', path: '/studyin/ireland' },
    { name: 'New Zealand', path: '/studyin/newzealand' },
    { name: 'USA', path: '/studyin/usa' },
  ];

  const testPrepItems = [
    { name: 'IELTS', path: '/testpreparation/ielts' },
    { name: 'PTE', path: '/testpreparation/pte' },
    { name: 'TOEFL', path: '/testpreparation/toefl' },
    { name: 'GRE', path: '/testpreparation/gre' },
    { name: 'SAT', path: '/testpreparation/sat' },
  ];

  const mainNavItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
     { name: 'Testimonials', path: '/testimonials' }, 
     { name: 'Blogs', path: '/blogs' },         
  ];

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="./images/logo.jpg" alt="Logo" className="h-10 w-10" />
          <span className="text-xl font-semibold text-purple">
            Global Ladder<br />Education Network
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          {mainNavItems.map((item) => (
            <Link key={item.name} to={item.path} className="text-gray-700 hover:text-blue-600">
              {item.name}
            </Link>
          ))}

          {/* Study In Dropdown */}
          <div className="relative group">
            <button
              className="flex items-center text-gray-700 hover:text-blue-600 focus:outline-none"
              onClick={() => setIsStudyInOpen(!isStudyInOpen)}
            >
              Study In <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <div
              className={`absolute left-0 mt-2 w-40 bg-white border shadow-md rounded ${
                isStudyInOpen ? 'block' : 'hidden'
              } group-hover:block`}
              onMouseLeave={() => setIsStudyInOpen(false)}
            >
              {studyInItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Test Preparation Dropdown */}
          <div className="relative group">
            <button
              className="flex items-center text-gray-700 hover:text-blue-600 focus:outline-none"
              onClick={() => setIsTestPrepOpen(!isTestPrepOpen)}
            >
              Test Preparation <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            <div
              className={`absolute left-0 mt-2 w-48 bg-white border shadow-md rounded ${
                isTestPrepOpen ? 'block' : 'hidden'
              } group-hover:block`}
              onMouseLeave={() => setIsTestPrepOpen(false)}
            >
              {testPrepItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-3 space-y-2">
          {mainNavItems.map((item) => (
            <Link key={item.name} to={item.path} className="block text-gray-700" onClick={toggleMenu}>
              {item.name}
            </Link>
          ))}

          {/* Study In Dropdown (Mobile) */}
          <div>
            <p className="font-medium text-gray-700 mt-2">Study In</p>
            <div className="pl-4 space-y-1">
              {studyInItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block text-gray-600 hover:text-blue-600"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Test Preparation Dropdown (Mobile) */}
          <div>
            <p className="font-medium text-gray-700 mt-2">Test Preparation</p>
            <div className="pl-4 space-y-1">
              {testPrepItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block text-gray-600 hover:text-blue-600"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <a
            href="tel:+977 9700616287"
            className="block bg-blue-600 text-white px-4 py-2 rounded text-center"
          >
            Call Now
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
