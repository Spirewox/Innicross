import './App.css'
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage'


function App() {
  

  return (
    <>
      {/* Navbar */}
      <div className="pt-[30px] fixed z-10 ">
        <Navbar />
      </div>
      <Homepage />
    </>
  );
}

export default App
