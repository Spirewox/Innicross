import './App.css'
import Navbar from './components/homepage/Navbar';
import Footer from './components/homepage/Footer'
import Homepage from './pages/Homepage'


function App() {
  

  return (
    <>
      {/* Navbar */}
      <div className="pt-[30px] fixed z-10 ">
        <Navbar />
      </div>
      <Homepage />
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App
