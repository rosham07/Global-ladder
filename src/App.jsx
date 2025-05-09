import './App.css';
import AdminLogin from './Components/admin/AdminLogin.jsx';

// Components
import ScrollToTop from './Components/ScrollToTop.jsx';

// Pages
import Home from './Components/Pages/Home.jsx';
import AboutUs from './Components/Pages/AboutUs.jsx';
import Contact from './Components/Pages/Contact.jsx';

// Pages - Study In
import Australia from './Components/Pages/studyin/Australia.jsx';
import Uk from './Components/Pages/studyin/Uk.jsx';
import Canada from './Components/Pages/studyin/Canada.jsx';
import Ireland from './Components/Pages/studyin/Ireland.jsx';
import NewZealand from './Components/Pages/studyin/NewZealand.jsx';
import Usa from './Components/Pages/studyin/Usa.jsx';

// Test Preparation
import Ielts from './Components/Pages/TestPreparation/Ielts.jsx';
import Pte from './Components/Pages/TestPreparation/Pte.jsx';
import Toefl from './Components/Pages/TestPreparation/Toefl.jsx';
import Sat from './Components/Pages/TestPreparation/Sat.jsx';
import Gre from './Components/Pages/TestPreparation/Gre.jsx';

// Main Layout
import MainLayout from './Components/MainLayout'; // Import the MainLayout component

import { HashRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/admin/Dashboard.jsx';
// Testimonials
import AddTestimonials from './Components/Pages/Testimonials/AddTestimonials.jsx';
import ListTestimonials from './Components/Pages/Testimonials/ListTestimonials.jsx';
// Blogs
import AddBlog from './Components/Pages/Blogs/AddBlogs.jsx';
import ListBlogs from './Components/Pages/Blogs/ListBlogs.jsx';

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        {/* Public Pages wrapped with MainLayout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />

          {/* Study In */}
          <Route path="studyin/australia" element={<Australia />} />
          <Route path="studyin/uk" element={<Uk />} />
          <Route path="studyin/canada" element={<Canada />} />
          <Route path="studyin/ireland" element={<Ireland />} />
          <Route path="studyin/newzealand" element={<NewZealand />} />
          <Route path="studyin/usa" element={<Usa />} />

          {/* Test Preparation */}
          <Route path="testpreparation/ielts" element={<Ielts />} />
          <Route path='testpreparation/pte' element={<Pte />} />
          <Route path='testpreparation/toefl' element={<Toefl />} />
          <Route path='testpreparation/sat' element={<Sat />} />
          <Route path='testpreparation/gre' element={<Gre />} />
    
        </Route>

        {/* Admin/Dashboard routes */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="testimonials" element={<ListTestimonials />} />
          <Route path="testimonials/add" element={<AddTestimonials />} />
          <Route path="blogs" element={<ListBlogs />} />
          <Route path="blogs/add" element={<AddBlog />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
