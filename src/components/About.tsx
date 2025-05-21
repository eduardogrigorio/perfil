import { useEffect, useRef } from 'react';

const About = () => {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = cardsRef.current?.querySelectorAll('.about-card');
            cards?.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('translate-y-0', 'opacity-100');
              }, index * 200);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-light">
      <div className="container">
        <h2 className="section-title">Sobre Mim</h2>
        <div 
          ref={cardsRef} 
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: '👨‍💻',
              title: 'Experiência',
              description: '18+ anos em infraestrutura de TI e segurança cibernética'
            },
            {
              icon: '🎯',
              title: 'Foco',
              description: 'Ambientes estáveis, seguros e de alto desempenho'
            },
            {
              icon: '🚀',
              title: 'Abordagem',
              description: 'Combino tecnologia tradicional com IA e automação'
            }
          ].map((card, index) => (
            <div 
              key={index} 
              className="about-card transform translate-y-4 opacity-0 transition-all duration-500"
              tabIndex={0}
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-xl mb-2">{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
