const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Eduardo Grigorio. Todos os direitos reservados.</p>
          <div className="social-links flex space-x-6 mt-4 md:mt-0">
            <a 
              href="https://linkedin.com/in/eduardo-grigorio" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-secondary transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/eduardogrigorio" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-secondary transition-colors duration-300"
            >
              GitHub
            </a>
            <a 
              href="#" 
              aria-label="Currículo PDF"
              className="hover:text-secondary transition-colors duration-300"
            >
              Currículo
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
