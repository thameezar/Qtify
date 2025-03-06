/*import React from "react";
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
   <Navbar/> 
  );
}

export default App;
*/
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Hero from "./components/Hero/Hero";
import Button from "./components/Button/Button"

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
