import './App.css';
import Navbar from './components/homepage/Navbar';
import Footer from './components/homepage/Footer';
import Homepage from './pages/Homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OurService from './pages/OurService';
import Portfolio from './pages/Portfolio';
import OurTeam from './pages/OurTeam';

function App() {
  return (
    <>
      <Router>
        {/* Navbar */}
        <div className="pt-[30px] fixed z-10 ">
          <Navbar />
        </div>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/our-services" element={<OurService />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/our-team" element={<OurTeam/>} />
        </Routes>

        <div>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
