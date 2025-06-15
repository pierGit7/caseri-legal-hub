
import React from 'react';

const professionalsData = [
  {
    name: 'Avv. Vinicio Caseri',
    title: 'Socio Fondatore',
    description: `L’avvocato Vinicio Caseri, dopo la laurea in Giurisprudenza conseguita nel 1986 presso l’Università Cattolica del Sacro Cuore di Milano, ha subito iniziato a svolgere l’attività professionale, inizialmente collaborando con primari Studi Legali di Treviglio, per poi fondare lo Studio Legale Caseri.
                  Alla luce dell’ormai quarantennale esperienza, nel 2006 ha ottenuto l’abilitazione a rappresentare i propri assistiti anche innanzi alla Corte di Cassazione ed alle altre Giurisdizioni Superiori.`,
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=800&auto=format&fit=crop',
    alt: 'Ritratto di Avv. Mario Rossi',
  },
  {
    name: 'Avv. Lorenzo Caseri',
    title: 'Partner',
    description: `L’Avvocato Lorenzo Caseri, dopo aver conseguito la laurea a pieni voti in Giurisprudenza presso l'Università Cattolica del Sacro Cuore di Milano nel gennaio 2022, ha svolto sia la pratica forense presso lo Studio Legale Caseri sia la pratica notarile, presso un importante studio notarile di Milano, in cui ha potuto collaborare con i più importati marchi della moda internazionale, e presso lo Studio Notarile Finardi di Treviglio, con cui ancora collabora.
                  Nel giugno 2024 ha superato l'esame di abilitazione alla professione forense presso la Corte di Appello di Brescia, risultando idoneo all'esercizio della professione di Avvocato.`,
    image: 'https://images.unsplash.com/photo-1542740348-395018373b62?q=80&w=800&auto=format&fit=crop',
    alt: 'Ritratto di Avv. Lorenzo Caseri',
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
