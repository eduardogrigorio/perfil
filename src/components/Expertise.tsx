import { useEffect, useRef } from 'react';

const Expertise = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillBars = skillsRef.current?.querySelectorAll('.skill-bar-progress');
            skillBars?.forEach((bar) => {
              const level = bar.getAttribute('data-level');
              if (level) {
                (bar as HTMLElement).style.width = `${level}%`;
              }
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = {
    'Segurança & Redes': [
      { name: 'Fortinet (NSE 3 em progresso)', level: 90 },
      { name: 'Mikrotik', level: 85 },
      { name: 'Firewalls/VPNs', level: 88 }
    ],
    'Infraestrutura & Cloud': [
      { name: 'Windows Server', level: 92 },
      { name: 'Azure', level: 75 },
      { name: 'Linux (CentOS/Ubuntu)', level: 80 }
    ]
  };

  return (
    <section id="expertise" className="py-20 bg-white">
      <div className="container">
        <h2 className="section-title">Minha Expertise</h2>
        <div 
          ref={skillsRef} 
          className="grid md:grid-cols-2 gap-12"
        >
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="skill-category">
              <h3 className="mb-6">{category}</h3>
              <ul className="space-y-6">
                {skillList.map((skill) => (
                  <li key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-text-light">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-bar-progress" 
                        data-level={skill.level}
                        style={{ width: '0%' }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
