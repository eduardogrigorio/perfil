import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useEffect } from 'react';

function App() {
  // Adicionar fontes do Google
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Roboto:wght@300;400;500;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
