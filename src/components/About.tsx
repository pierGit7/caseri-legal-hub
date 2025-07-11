import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';

const About = () => {
  return (
    <section id="chi-siamo" className="py-12 sm:py-20 bg-muted/50">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
            <img src="lovable-uploads/toghether_pic.png" alt="Il nostro studio" className="w-full h-60 sm:h-80 md:h-full object-cover" />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-4 text-center md:text-left">Chi Siamo</h2>
          <p className="text-foreground/80 leading-relaxed mb-6 text-center md:text-left">
            Siamo avvocati dedicati e appassionati, con competenze specialistiche in diversi rami del diritto. Crediamo in un rapporto diretto e di fiducia con i nostri clienti, offrendo un'assistenza legale chiara, pragmatica ed efficace. La nostra missione è affiancare privati e aziende, fornendo soluzioni su misura per ogni esigenza.
          </p>
          <div className="space-y-3">
            <a href="mailto:studiolegalecaseri@outlook.it" className="flex items-center justify-center md:justify-start space-x-3 text-foreground hover:text-accent transition-colors" target="_self">
              <Mail className="w-5 h-5 text-accent" />
              <span className="text-sm sm:text-base">studiolegalecaseri@outlook.it</span>
            </a>
            <a href="https://www.linkedin.com/in/lorenzo-caseri-b6110a230" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start space-x-3 text-foreground hover:text-accent transition-colors">
              <Linkedin className="w-5 h-5 text-accent" />
              <span className="text-sm sm:text-base">Profilo LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
