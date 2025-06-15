
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    title: "Diritto Civile",
    description: "Assistenza in materia di obbligazioni, contratti, diritti reali, e responsabilità civile.",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2000",
  },
  {
    title: "Diritto Commerciale",
    description: "Consulenza per società, operazioni straordinarie, crisi d'impresa e rapporti commerciali.",
    image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2000",
  },
  {
    title: "Contrattualistica",
    description: "Redazione e revisione di contratti commerciali, locazioni, appalti e accordi di ogni tipo.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2000",
  },
  {
    title: "Tutela del Credito",
    description: "Recupero crediti stragiudiziale e giudiziale, procedure esecutive e monitorie.",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=2000",
  },
  {
    title: "Diritto di Famiglia e Successioni",
    description: "Gestione di separazioni, divorzi, affidamento minori, successioni e testamenti.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2000",
  },
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="aree-di-attivita" className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-serif font-bold text-primary mb-4">Aree di Attività</h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>
        <div className="relative w-full max-w-4xl mx-auto h-[450px]">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            >
              <Card className="w-full h-full overflow-hidden flex flex-col md:flex-row border-none shadow-xl">
                <div className="w-full md:w-1/2 h-64 md:h-full">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center text-left bg-muted/50">
                  <h3 className="text-2xl font-serif font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-foreground/80">{service.description}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
