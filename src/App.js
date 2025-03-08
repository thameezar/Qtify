import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <Router>
      <Navbar />
      {/* Other components that use routing */}
      <Hero/>
      
    </Router>
  );
}

export default App;
