import './App.css';
import AdminLogin from './Components/admin/AdminLogin.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import ScrollToTop from './Components/ScrollToTop.jsx';
import ProtectedRoute from './Components/ProtectedRoute.jsx';
import { AuthProvider } from './Components/Context/AuthContext.jsx';

// Pages
import Home from './Components/Pages/Home.jsx';
import AboutUs from './Components/Pages/AboutUs.jsx';
import Contact from './Components/Pages/Contact.jsx';

// Study In
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
import MainLayout from './Components/MainLayout';

// Routing
import { HashRouter, Routes, Route } from 'react-router-dom';

// Admin Dashboard
import Dashboard from './Components/admin/Dashboard.jsx';
import AddTestimonials from './Components/admin/Testimonials/AddTestimonials.jsx';
import ListTestimonials from './Components/admin/Testimonials/ListTestimonials.jsx';
import AddBlogs from './Components/admin/Blogs/Addblogs.jsx';
import ListBlogs from './Components/admin/Blogs/ListBlogs.jsx';

// Public Pages
import Testimonials from './Components/Pages/Testimonials.jsx';
import Blogs from './Components/Pages/Blogs.jsx';
import BlogDetail from './Components/Pages/BlogDetail.jsx';

function App() {
  return (
    <HashRouter>
      <AuthProvider> {/* ✅ Moved inside HashRouter so useNavigate works */}
        <ToastContainer 
          position="top-right"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          pauseOnHover
        />

        <ScrollToTop />

        <Routes>
          {/* Public Pages (wrapped in MainLayout) */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="contact" element={<Contact />} />

            {/* Study In Routes */}
            <Route path="studyin/australia" element={<Australia />} />
            <Route path="studyin/uk" element={<Uk />} />
            <Route path="studyin/canada" element={<Canada />} />
            <Route path="studyin/ireland" element={<Ireland />} />
            <Route path="studyin/newzealand" element={<NewZealand />} />
            <Route path="studyin/usa" element={<Usa />} />

            {/* Test Preparation Routes */}
            <Route path="testpreparation/ielts" element={<Ielts />} />
            <Route path="testpreparation/pte" element={<Pte />} />
            <Route path="testpreparation/toefl" element={<Toefl />} />
            <Route path="testpreparation/sat" element={<Sat />} />
            <Route path="testpreparation/gre" element={<Gre />} />

            {/* Blog & Testimonial Public Routes */}
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blogs/:id" element={<BlogDetail />} />
          </Route>

          {/* Admin Login Page (Public) */}
          <Route path="/admin" element={<AdminLogin />} />

          {/* Protected Admin Dashboard and Sub-Routes */}
          <Route
            path="/dashboard"
            element={
              // <ProtectedRoute>
                <Dashboard />
              // </ProtectedRoute>
            }
          >
            <Route path="testimonials/add" element={<AddTestimonials />} />
            <Route path="testimonials/list" element={<ListTestimonials />} />
            <Route path="blogs/add" element={<AddBlogs />} />
            <Route path="blogs/list" element={<ListBlogs />} />
          </Route>
        </Routes>
      </AuthProvider>
    </HashRouter>
  );
}

export default App;
