import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import FAQs from './components/FAQs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
    
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Add a small delay to ensure the element exists
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const navbarHeight = 64; // Height of fixed navbar
          const elementPosition = element.offsetTop - navbarHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  return (
    <div className="App">
      <Navbar activeSection={activeSection} onSectionChange={handleSectionChange} />
      <Hero />
      <About />
      <Services />
      <FAQs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;