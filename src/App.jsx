import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Planets from "./components/Planets";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
