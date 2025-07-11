
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const services = [
	{
		title: 'Diritto Civile',
		description:
			'Assistenza in materia di obbligazioni, contratti, diritti reali, e responsabilità civile.',
		image: 'lovable-uploads/standardized_icon_civile.png',
	},
	{
		title: 'Diritto Commerciale',
		description:
			'Consulenza per società, operazioni straordinarie, crisi d\'impresa e rapporti commerciali.',
		image: 'lovable-uploads/standardized_icon_comm.png',
	},
	{
		title: 'Contrattualistica',
		description:
			'Redazione e revisione di contratti commerciali, locazioni, appalti e accordi di ogni tipo.',
		image: 'lovable-uploads/standardized_icon_contr.png',
	},
	{
		title: 'Tutela del Credito',
		description:
			'Recupero crediti stragiudiziale e giudiziale, procedure esecutive e monitorie.',
		image: 'lovable-uploads/standardized_icon_cred.png',
	},
	{
		title: 'Diritto di Famiglia e Successioni',
		description:
			'Gestione di separazioni, divorzi, affidamento minori, successioni e testamenti.',
		image: 'lovable-uploads/standardized_icon_fam.png',
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
    <section id="aree-di-attivita" className="py-12 sm:py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-4">
          Aree di Attività
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-8 sm:mb-12"></div>
        <div className="w-full max-w-5xl mx-auto mb-12">
          <Carousel
            className="w-full"
            opts={{ loop: true }}
          >
            <CarouselContent className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px]">
              {services.map((service, index) => (
                <CarouselItem 
                  key={index} 
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Card className="w-full h-full border-none overflow-hidden rounded-lg shadow-lg">
                    <CardContent className="flex items-center justify-center p-0 h-full">
                      <div className="w-full h-full flex flex-col md:flex-row">
                        <div className="w-full md:w-1/2 h-48 sm:h-56 md:h-full flex-shrink-0 flex items-center justify-center bg-muted/30">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full md:w-4/5 md:h-4/5 object-contain p-4 md:p-8"
                          />
                        </div>
                        <div className="flex-1 p-4 sm:p-6 md:p-8 flex flex-col justify-center text-center md:text-left bg-muted/50">
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-primary mb-3 md:mb-4">
                            {service.title}
                          </h3>
                          <p className="text-sm sm:text-base md:text-lg text-foreground/80 leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden sm:block">
              <CarouselPrevious onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length)} />
              <CarouselNext onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length)} />
            </div>
          </Carousel>
          
          {/* Indicatori per mobile */}
          <div className="flex justify-center mt-4 space-x-2 sm:hidden">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-accent' : 'bg-muted'
                }`}
                aria-label={`Vai al servizio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
