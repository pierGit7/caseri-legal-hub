
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white bg-cover bg-center" style={{ backgroundImage: "url('lovable-uploads/4dfd88b9-d133-47fa-9801-6d6956069f84.png')" }}>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 p-4 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight">Assistenza legale dal 1986</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto font-light">
          Esperienza, competenza e continuo aggiornamento per una completa tutela del cliente.
        </p>
        <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-primary-foreground font-bold">
          <a href="#contatti">Contattaci Ora</a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
