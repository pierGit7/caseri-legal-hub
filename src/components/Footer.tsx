
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Studio Legale Caseri. Tutti i diritti riservati.</p>
        <p className="text-sm text-primary-foreground/70 mt-1">P.IVA - - lunedì - venerdì, 9:00 - 18:00
                                                              Via Palma il Vecchio 18, Bergamo(BG) 24128</p>
      </div>
    </footer>
  );
};

export default Footer;
