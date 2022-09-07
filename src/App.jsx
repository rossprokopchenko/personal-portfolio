import React from 'react';
import './App.css';
import NavBar from './NavBar';
import About from './About';
import Separator from './Separator';
import Career from './Career';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <div>
        
        <NavBar />
        <About />
        <Separator />
        <Career />
        <Separator />
        <Portfolio />
        <Separator />
        <Contact />
        <Footer />

      </div>
    </div>
  );
}

export default App;
