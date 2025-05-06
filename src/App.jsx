import './App.css';
import Navbar from './Components/Navbar.jsx';
import Home from './Components/Home.jsx';
import AboutUs from './Components/AboutUs.jsx';
import Contact from './Components/Contact.jsx';
import Australia from './Components/studyin/Australia.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/studyin/australia" element={<Australia />} />
        

        {/* You can define more routes here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
