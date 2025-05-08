import './App.css';
import Navbar from './Components/Navbar.jsx';
import Home from './Components/Home.jsx';
import AboutUs from './Components/AboutUs.jsx';
import Contact from './Components/Contact.jsx';
import Australia from './Components/studyin/Australia.jsx';
import Uk from './Components/studyin/Uk.jsx';
import Canada from './Components/studyin/Canada.jsx';
import Ireland from './Components/studyin/Ireland.jsx';
import NewZealand from './Components/studyin/NewZealand.jsx';
import Usa from './Components/studyin/Usa.jsx';

import { HashRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/studyin/australia" element={<Australia />} />
        <Route path="/studyin/uk" element={<Uk />} />
        <Route path="/studyin/canada" element={<Canada />} />
        <Route path="/studyin/ireland" element={<Ireland />} />
        <Route path="/studyin/newzealand" element={<NewZealand />} />
        <Route path="/studyin/usa" element={<Usa />} />
        

        {/* You can define more routes here */}
      </Routes>
    </HashRouter>
  );
}

export default App;
