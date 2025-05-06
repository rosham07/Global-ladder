import './App.css';
import Navbar from './Components/Navbar.jsx';
import Home from './Components/Home.jsx';
import AboutUs from './Components/AboutUs.jsx';
import Contact from './Components/Contact.jsx';
import Australia from './Components/studyin/Australia.jsx';

import { HashRouter } from 'react-router-dom';




function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/studyin/australia" element={<Australia />} />
        

        {/* You can define more routes here */}
      </Routes>
    </HashRouter>
  );
}

export default App;
