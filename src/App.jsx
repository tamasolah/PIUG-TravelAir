import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Search from "./pages/Search";
import HelpModal from "./components/HelpModal";
import Cariera from "./pages/Cariera";
import AboutUs from "./pages/AboutUs";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <Router basename="/PIUG-TravelAir">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cariere" element={<Cariera />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      <HelpModal />
      <ScrollToTopButton />
    </Router>
  );
}


export default App;



