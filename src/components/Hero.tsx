
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const handleContactClick = () => {
    // Scroll alla sezione contatti
    const contactSection = document.getElementById('contatti');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      // Dopo lo scroll, focalizza il primo campo del form
      setTimeout(() => {
        const nameInput = document.getElementById('name');
        if (nameInput) {
          nameInput.focus();
        }
      }, 800);
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('lovable-uploads/4dfd88b9-d133-47fa-9801-6d6956069f84.png')" }}>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 p-4 px-6 animate-fade-in max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold tracking-tight leading-tight">Assistenza legale dal 1986</h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
          Esperienza, competenza e continuo aggiornamento per una completa tutela del cliente.
        </p>
        <Button 
          size="lg" 
          className="mt-6 sm:mt-8 bg-accent hover:bg-accent/90 text-primary-foreground font-bold px-8 py-3 text-base sm:text-lg"
          onClick={handleContactClick}
        >
          Contattaci Ora
        </Button>
      </div>
    </section>
  );
};

export default Hero;
