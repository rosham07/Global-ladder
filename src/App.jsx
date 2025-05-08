import './App.css';

//components//
import Navbar from './Components/Navbar.jsx';
import ScrollToTop from './Components/ScrollToTop.jsx';
//Pages//
import Home from './Components/Pages/Home.jsx';
import AboutUs from './Components/Pages/AboutUs.jsx';
import Contact from './Components/Pages/Contact.jsx';

//pages-studyin
import Australia from './Components/Pages/studyin/Australia.jsx';
import Uk from './Components/Pages/studyin/Uk.jsx';
import Canada from './Components/Pages/studyin/Canada.jsx';
import Ireland from './Components/Pages/studyin/Ireland.jsx';
import NewZealand from './Components/Pages/studyin/NewZealand.jsx';
import Usa from './Components/Pages/studyin/Usa.jsx';


//Test preparation
import Ielts from './Components/Pages/TestPreparation/Ielts.jsx';



import { HashRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <HashRouter>
    <Navbar />
    <ScrollToTop /> 
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />

      {/* Study in */}
      <Route path="/studyin/australia" element={<Australia />} />
      <Route path="/studyin/uk" element={<Uk />} />
      <Route path="/studyin/canada" element={<Canada />} />
      <Route path="/studyin/ireland" element={<Ireland />} />
      <Route path="/studyin/newzealand" element={<NewZealand />} />
      <Route path="/studyin/usa" element={<Usa />} />

      {/* Test preparation */}
      <Route path="/testpreparation/ielts" element={<Ielts />} />
      
    </Routes>
  </HashRouter>
  );
}

export default App;
