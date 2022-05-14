import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx'
import Home from './Pages/Home/Home.jsx';


function App() {
  return (
    <div className="App">
      <Navbar />
        <Home />
      <Footer />  
    </div>
  );
}

export default App;
