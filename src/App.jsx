import React from 'react';
import './App.css';
import NavBar from './NavBar';
import About from './About';
import Separator from './Separator';
import Career from './Career';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

import { IconButton } from '@mui/material';
import { ArrowCircleUp } from '@mui/icons-material';

function App() {
  return (
    <div className="App">
      <div style={{position: 'relative'}}>
        
        <NavBar />
        <About />
        <Separator />
        <Career />
        <Separator />
        <Portfolio />
        <Separator />
        <Contact />
        <Footer />

        
        <IconButton sx={{position: 'fixed', bottom: '35px', right: '35px', height: '65px', width: '65px'}} href="#">
          <ArrowCircleUp color='info'sx={{height: '65px', width: '65px'}}/>
        </IconButton>
      </div>

      
    </div>
  );
}

export default App;
