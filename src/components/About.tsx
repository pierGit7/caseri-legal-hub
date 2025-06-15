
import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';

const About = () => {
  return (
    <section id="chi-siamo" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="w-full h-80 rounded-lg overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=2000" alt="Il nostro studio" className="w-full h-full object-cover" />
        </div>
        <div>
          <h2 className="text-4xl font-serif font-bold text-primary mb-4">Chi Siamo</h2>
          <p className="text-foreground/80 leading-relaxed mb-6">
            Siamo un team di avvocati dedicati e appassionati, con competenze specialistiche in diversi rami del diritto. Crediamo in un rapporto diretto e di fiducia con i nostri clienti, offrendo un'assistenza legale chiara, pragmatica ed efficace. La nostra missione è affiancare privati e aziende, fornendo soluzioni su misura per ogni esigenza.
          </p>
          <div className="space-y-3">
            <a href="mailto:caserivinicio@libero.it" className="flex items-center space-x-3 text-foreground hover:text-accent transition-colors">
              <Mail className="w-5 h-5 text-accent" />
              <span>caserivinicio@libero.it</span>
            </a>
            <a href="mailto:avv.lorenzocaseri@outlook.it" className="flex items-center space-x-3 text-foreground hover:text-accent transition-colors">
              <Mail className="w-5 h-5 text-accent" />
              <span>avv.lorenzocaseri@outlook.it</span>
            </a>
            <a href="tel:+39035254135" className="flex items-center space-x-3 text-foreground hover:text-accent transition-colors">
              <Phone className="w-5 h-5 text-accent" />
              <span>+39 035-254135</span>
            </a>
            <a href="#" className="flex items-center space-x-3 text-foreground hover:text-accent transition-colors">
              <Linkedin className="w-5 h-5 text-accent" />
              <span>Profilo LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
