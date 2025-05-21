import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav 
      aria-label="Navegação principal" 
      className={`sticky top-0 z-50 bg-primary text-white py-4 transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}
    >
      <div className="container flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold" onClick={(e) => {
          e.preventDefault();
          scrollToSection('home');
        }}>
          EG
        </a>
        
        <button 
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 relative z-50"
          aria-expanded={isMenuOpen}
          aria-label="Menu"
          onClick={toggleMenu}
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
        
        <ul className={`nav-links md:flex md:space-x-4 ${isMenuOpen ? 'absolute top-full left-0 w-full bg-primary flex flex-col items-center py-4 shadow-lg' : 'hidden md:flex'}`}>
          {['about', 'expertise', 'experience', 'contact'].map((item) => (
            <li key={item} className="py-2 md:py-0">
              <a 
                href={`#${item}`}
                className="px-4 py-2 rounded hover:bg-white/10 focus:bg-white/10 transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item);
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
