
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const historyData = [
  {
    year: "1960",
    title: "Fondazione dello Studio",
    description: "Lo Studio Legale nasce dalla passione e dalla dedizione dell'Avv. Giuseppe Belotti, che inizia la sua carriera con l'obiettivo di offrire assistenza legale di qualità nel cuore di Bergamo.",
    image: "lovable-uploads/lorenzo_dad.png"
  },
  {
    year: "1990",
    title: "Espansione e Crescita",
    description: "Lo studio si espande, acquisendo competenze specialistiche in diverse aree del diritto e costruendo una solida reputazione nel territorio bergamasco.",
    image: "lovable-uploads/toghether_pic.png"
  },
  {
    year: "2020",
    title: "Nuova Generazione",
    description: "L'Avv. Lorenzo Belotti si unisce allo studio, portando innovazione e continuità alla tradizione familiare, consolidando l'impegno verso l'eccellenza professionale.",
    image: "lovable-uploads/lorenzo.png"
  }
];

const History = () => {
  return (
    <section id="storia" className="py-12 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-4">
          La Nostra Storia
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-8 sm:mb-12"></div>
        
        <div className="max-w-4xl mx-auto">
          <Carousel
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {historyData.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="border-none shadow-lg">
                      <CardContent className="flex flex-col md:flex-row items-center p-6 md:p-8 gap-6 md:gap-8">
                        <div className="flex-1 text-center md:text-left">
                          <span className="text-4xl md:text-5xl font-serif font-bold text-accent block mb-4">
                            {item.year}
                          </span>
                          <h3 className="text-xl md:text-2xl font-serif font-bold text-primary mb-4">
                            {item.title}
                          </h3>
                          <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                        <div className="flex-1 max-w-md">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default History;
