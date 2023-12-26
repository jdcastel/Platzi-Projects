import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/screens/NavBar";
import { Home } from "./components/screens/Home";
import { Expertise } from "./components/screens/Expertise";
import { Projects } from "./components/screens/Projects";
import { Contact } from "./components/screens/Contact";
import { Footer } from "./components/screens/Footer";
import { Profile } from "./components/screens/Profile";
import Cursor from "./components/utils/Cursor";
import React from 'react';
import Particle from './components/utils/Particle';
import Experience from './components/screens/Experience';

function App() {
  return (
    <div className="App">
      <Cursor />
        <NavBar />
        <Particle />
        <Home />
        <Profile />
        <Expertise />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      
    </div>
  );
}

export default App;
