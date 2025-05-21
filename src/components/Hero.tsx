import { useEffect, useRef } from 'react';

const Hero = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bubbles = skillsRef.current?.querySelectorAll('.bubble');
    
    if (bubbles) {
      bubbles.forEach((bubble, index) => {
        setTimeout(() => {
          bubble.classList.add('animate-in');
        }, index * 200);
      });
    }
  }, []);

  return (
    <header id="home" className="bg-gradient-to-r from-primary to-secondary text-white py-16 md:py-24 min-h-[80vh] flex items-center">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="hero-text">
            <h1 className="mb-4">Eduardo Grigorio</h1>
            <p className="text-2xl font-light mb-8 opacity-90">Analista Sênior de TI & Especialista em Segurança</p>
            <p className="text-xl mb-10">Transformando complexidade tecnológica em soluções eficientes e seguras</p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn primary">Contato</a>
              <a href="#expertise" className="btn secondary">Minhas Habilidades</a>
            </div>
          </div>
          <div className="hero-image hidden md:block">
            <div ref={skillsRef} className="tech-bubbles relative h-80">
              {['Fortinet', 'Azure', 'Python', 'Zabbix'].map((tech, index) => (
                <span 
                  key={tech}
                  className={`bubble absolute bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full shadow-lg opacity-0 transition-all duration-500 transform translate-y-4`}
                  style={{
                    top: `${20 + (index * 15)}%`,
                    left: `${10 + (index * 20)}%`,
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
