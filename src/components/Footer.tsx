
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center items-center space-x-4 mb-4">
          <Link to="/privacy" className="hover:underline text-sm font-medium">Informativa Privacy</Link>
          <span className="h-4 border-l border-primary-foreground/50"></span>
          <Link to="/cookies" className="hover:underline text-sm font-medium">Informativa Cookie</Link>
        </div>
        <p>&copy; {new Date().getFullYear()} Studio Legale Caseri. Tutti i diritti riservati.</p>
        <p className="text-sm text-primary-foreground/70 mt-1">P.IVA - - lunedì - venerdì, 9:00 - 18:00
                                                              Via Palma il Vecchio 18, Bergamo(BG) 24128</p>
      </div>
    </footer>
  );
};

export default Footer;
