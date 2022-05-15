import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Rotas from "./Routes/Router.js";

function App() {
  return (
    <div className="App">
      <Navbar />
        <Rotas />
      <Footer />
    </div>
  );
}

export default App;
