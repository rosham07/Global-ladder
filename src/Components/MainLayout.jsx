import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet /> {/* Renders child route components */}
      <Footer />
    </>
  );
}
