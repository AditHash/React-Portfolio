import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import Portfolio from './components/portfolio';
import Skills from './components/skills';
import Contact from './components/contact';
import Exp from './components/exp';


function App() {
  return (
    <div id="top">
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Skills />
        <Exp />
        <Contact />
      </main>
    </div>
  );
}

export default App;
