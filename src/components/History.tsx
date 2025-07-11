import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const historyImages = [
  {
    src: "lovable-uploads/lib.png",
    alt: "Libreria dello studio legale",
  },
  {
    src: "lovable-uploads/outside.png",
    alt: "Esterno dell'edificio dello studio",
  },
  {
    src: "lovable-uploads/sala.png",
    alt: "Martelletto e libri di legge",
  },
];

const History = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section id="studio" className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-serif font-bold text-primary mb-4">La Nostra Storia</h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>

        <div className="max-w-3xl mx-auto mb-12">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            opts={{ loop: true }}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {historyImages.map((image, index) => (
                <CarouselItem key={index}>
                  <Card className="border-none overflow-hidden rounded-lg shadow-lg">
                    <CardContent className="flex aspect-video items-center justify-center p-0">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="max-w-3xl mx-auto text-lg text-foreground/80 leading-relaxed text-left space-y-6">
          <p>
            Lo Studio, fondato dall'Avv. Vinicio Caseri ed oggi giunto alla seconda generazione con l'Avv. Lorenzo Caseri, da quasi quarant'anni si distingue per l'eccellenza e la dedizione con cui offre consulenza e assistenza legale ai propri clienti.
          </p>
          <p>
            Situato nel cuore di Bergamo, ma con possibilità di ricevere i clienti anche a Treviglio, lo Studio si impegna a fornire servizi legali di alta qualità, mirati a rispondere efficacemente alle esigenze dei clienti.
          </p>
          <p>
            Nel corso dell'incontro preliminare, i professionisti procederanno ad una approfondita analisi del caso sottoposto, seguita dall'indicazione dei possibili sviluppi della pratica, della sua complessità e dei compensi e costi preventivabili.
          </p>
          <p>
            A quel punto, l'interessato sarà posto nella condizione di valutare, in maniera consapevole, se conferire l'incarico, pattuendo termini e condizioni in forma scritta per regolare con chiarezza e trasparenza il rapporto con l'Avvocato.
          </p>
          <p>
            Durante lo svolgimento della pratica, lo Studio informerà costantemente il cliente sugli sviluppi della stessa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default History;
