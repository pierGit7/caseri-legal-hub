
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Linkedin, Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contatti" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-serif font-bold text-primary mb-4">Contatti</h2>
          <p className="text-foreground/80 mb-8">
            Per fissare un appuntamento o per richiedere una consulenza, non esitate a contattarci. Saremo lieti di assistervi.
          </p>
          <form className="space-y-4">
            <Input type="text" placeholder="Il Tuo Nome" />
            <Input type="email" placeholder="La Tua Email" />
            <Textarea placeholder="Il Tuo Messaggio" />
            <Button className="w-full bg-primary hover:bg-primary/90">Invia Messaggio</Button>
          </form>
          <div className="mt-8 space-y-4">
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
              <span>Studio Legale Caseri su LinkedIn</span>
            </a>
          </div>
        </div>
        <div className="h-80 md:h-full rounded-lg overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.945415392176!2d9.65526637688229!3d45.69234191410118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4781510688c2646d%3A0x46387085732c3f8!2sVia%20Palma%20il%20Vecchio%2C%2018%2C%2024128%20Bergamo%20BG!5e0!3m2!1sit!2sit!4v1718454930327!5m2!1sit!2sit"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
