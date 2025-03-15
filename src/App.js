/*import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";

function App() {

  const topAlbumsAPI = "https://qtify-backend-labs.crio.do/albums/top";
  return (
    <Router>
      <Navbar />
      {/* Other components that use routing *
      <Hero/>
      <div>
      <Section title="Top Albums" apiEndpoint={topAlbumsAPI} />
    </div>
    </Router>
  );
}

export default App;
*/

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";

function App() {
  const topAlbumsAPI = "https://qtify-backend-labs.crio.do/albums";
  return (
    <Router>
      <Navbar />
      <Hero />
      <Section apiEndpoint={topAlbumsAPI} />
    </Router>
  );
}

export default App;

