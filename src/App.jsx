import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import CosmicBackground from './components/layout/CosmicBackground';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import AboutMe from './components/sections/AboutMe';
import Projects from './components/sections/Projects';
import Footer from './components/layout/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col relative">
        <CosmicBackground />
        <Navbar />
        <Hero />
        <AboutMe />
        <Projects />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;