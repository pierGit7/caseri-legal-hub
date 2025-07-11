
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Linkedin, Mail, Phone } from 'lucide-react';

const Contact = () => {
  const [state, handleSubmit] = useForm("");

  return (
    <section id="contatti" className="py-12 sm:py-20 bg-muted/50">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 md:gap-12">
        <div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-4 text-center md:text-left">Contatti</h2>
          <p className="text-foreground/80 mb-6 sm:mb-8 text-center md:text-left">
            Per fissare un appuntamento o per richiedere una consulenza, non esitate a contattarci. Saremo lieti di assistervi.
          </p>
          
          {state.succeeded ? (
            <div className="p-4 bg-green-100 border border-green-200 text-green-800 rounded-lg">
              <h3 className="font-bold">Messaggio inviato!</h3>
              <p>Grazie per averci contattato. Ti risponderemo al più presto.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input id="name" type="text" name="name" placeholder="Il Tuo Nome" required />
                <ValidationError field="name" errors={state.errors} className="text-destructive text-sm mt-1" />
              </div>
              <div>
                <Input id="email" type="email" name="email" placeholder="La Tua Email" required />
                <ValidationError field="email" errors={state.errors} className="text-destructive text-sm mt-1" />
              </div>
              <div>
                <Textarea id="message" name="message" placeholder="Il Tuo Messaggio" required />
                <ValidationError field="message" errors={state.errors} className="text-destructive text-sm mt-1" />
              </div>
              <Button type="submit" disabled={state.submitting} className="w-full bg-primary hover:bg-primary/90">
                {state.submitting ? 'Invio in corso...' : 'Invia Messaggio'}
              </Button>
            </form>
          )}

          <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
            <a href="mailto:studiolegalecaseri@outlook.it" className="flex items-center justify-center md:justify-start space-x-3 text-foreground hover:text-accent transition-colors">
              <Mail className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-sm sm:text-base break-all">studiolegalecaseri@outlook.it</span>
            </a>
            <a href="tel:+39035254135" className="flex items-center justify-center md:justify-start space-x-3 text-foreground hover:text-accent transition-colors">
              <Phone className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-sm sm:text-base">+39 035-254135</span>
            </a>
            <a href="https://www.linkedin.com/in/lorenzo-caseri-b6110a230" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start space-x-3 text-foreground hover:text-accent transition-colors">
              <Linkedin className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-sm sm:text-base">Studio Legale Caseri su LinkedIn</span>
            </a>
          </div>
        </div>
        <div className="h-60 sm:h-80 md:h-full rounded-lg overflow-hidden shadow-xl order-first md:order-last">`
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
