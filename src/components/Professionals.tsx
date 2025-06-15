
import React from 'react';

const professionalsData = [
  {
    name: 'Avv. Mario Rossi',
    title: 'Socio Fondatore',
    description: 'Specializzato in diritto commerciale e societario, con oltre 30 anni di esperienza. L\'Avv. Rossi è noto per la sua abilità strategica e la profonda conoscenza del tessuto economico locale.',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=800&auto=format&fit=crop',
    alt: 'Ritratto di Avv. Mario Rossi',
  },
  {
    name: 'Avv. Laura Bianchi',
    title: 'Partner',
    description: 'Esperta in diritto di famiglia e successioni. L\'Avv. Bianchi affianca i clienti con sensibilità e determinazione, trovando soluzioni efficaci per le questioni più delicate.',
    image: 'https://images.unsplash.com/photo-1542740348-395018373b62?q=80&w=800&auto=format&fit=crop',
    alt: 'Ritratto di Avv. Laura Bianchi',
  },
];

const Professionals = () => {
  return (
    <section id="professionisti" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-primary mb-4">I Nostri Professionisti</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>
        <div className="space-y-16">
          {professionalsData.map((professional, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="md:w-1/3 flex justify-center">
                <img src={professional.image} alt={professional.alt} className="w-64 h-64 rounded-full object-cover shadow-lg" />
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <h3 className="text-3xl font-serif font-bold text-primary mb-2">{professional.name}</h3>
                <p className="text-accent font-semibold text-lg mb-4">{professional.title}</p>
                <p className="text-foreground/80 leading-relaxed">
                  {professional.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Professionals;
