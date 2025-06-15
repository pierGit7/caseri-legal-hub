
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
    src: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200&auto=format&fit=crop",
    alt: "Libreria dello studio legale",
  },
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    alt: "Esterno dell'edificio dello studio",
  },
  {
    src: "https://images.unsplash.com/photo-1589994237583-5872a082046e?q=80&w=1200&auto=format&fit=crop",
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

        <p className="max-w-3xl mx-auto text-lg text-foreground/80 leading-relaxed">
          Fondato nel 1986, lo Studio Legale Caseri ha costruito la sua reputazione sulla solida esperienza e un approccio personalizzato. Da decenni offriamo consulenza e assistenza legale ai nostri clienti, guidandoli con professionalità attraverso complesse questioni legali. La nostra storia è un percorso di continua crescita e aggiornamento, sempre con l'obiettivo di garantire la migliore tutela possibile in ogni circostanza.
        </p>
      </div>
    </section>
  );
};

export default History;
