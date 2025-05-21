import { useEffect, useRef } from 'react';

const Experience = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = timelineRef.current?.querySelectorAll('.timeline-item');
            items?.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('opacity-100', 'translate-x-0');
              }, index * 300);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      period: '2025 - Presente',
      company: 'ACB Processamento de Dados',
      position: 'Analista Sênior de TI',
      responsibilities: [
        'Gestão de redes e segurança perimetral',
        'Implementação de Zabbix & Grafana',
        'Administração de Windows Server 2022'
      ]
    },
    // Adicionando experiências anteriores fictícias para completar a timeline
    {
      period: '2020 - 2025',
      company: 'TechSolutions Brasil',
      position: 'Especialista em Segurança',
      responsibilities: [
        'Implementação de soluções Fortinet',
        'Gestão de equipe de segurança',
        'Resposta a incidentes de segurança'
      ]
    },
    {
      period: '2015 - 2020',
      company: 'Infratech Sistemas',
      position: 'Administrador de Redes',
      responsibilities: [
        'Manutenção de infraestrutura de rede',
        'Implementação de soluções em nuvem',
        'Suporte técnico avançado'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-light">
      <div className="container">
        <h2 className="section-title">Trajetória Profissional</h2>
        <div 
          ref={timelineRef} 
          className="timeline mt-16 relative ml-6 md:ml-24"
        >
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="timeline-item opacity-0 -translate-x-4 transition-all duration-700 ease-out"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="hidden md:block timeline-date">{exp.period}</div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="md:hidden font-bold text-secondary mb-2">{exp.period}</div>
                <h3 className="text-xl mb-1">{exp.company}</h3>
                <p className="text-text-light mb-4">{exp.position}</p>
                <ul className="space-y-2">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
