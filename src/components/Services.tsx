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
    <section id="aree-di-attivita" className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-serif font-bold text-primary mb-4">
          Aree di Attività
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>
        <div className="max-w-4xl mx-auto mb-12">
          <Carousel
            className="w-full"
            opts={{ loop: true }}
          >
            <CarouselContent className="relative h-[350px] sm:h-[400px]">
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
                        <div className="w-full md:w-1/2 h-48 sm:h-64 md:h-full">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 flex flex-col justify-center text-left bg-muted/50">
                          <h3 className="text-xl sm:text-2xl font-serif font-bold text-primary mb-2 sm:mb-3">
                            {service.title}
                          </h3>
                          <p className="text-sm sm:text-base text-foreground/80">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length)} />
            <CarouselNext onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length)} />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Services;
