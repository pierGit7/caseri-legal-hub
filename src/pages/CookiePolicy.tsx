
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CookiePolicy = () => {
  return (
    <div className="bg-background">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-serif font-bold text-primary mb-8">Informativa sui Cookie</h1>
          <div className="space-y-6 text-foreground/80 leading-relaxed">
            <p>Questa applicazione fa utilizzo di Cookie. Per saperne di più e per prendere visione dell’informativa dettagliata, l’Utente può consultare la Cookie Policy.</p>
            
            <div>
              <h2 className="text-2xl font-serif font-bold text-primary mt-8 mb-4">Cosa sono i Cookie</h2>
              <p>I Cookie sono costituiti da porzioni di codice installate all'interno del browser che assistono il Titolare nell’erogazione del Servizio in base alle finalità descritte. Alcune delle finalità di installazione dei Cookie potrebbero, inoltre, necessitare del consenso dell'Utente.</p>
            </div>
            
            <div>
              <h2 className="text-2xl font-serif font-bold text-primary mt-8 mb-4">Cookie tecnici e di statistica aggregata</h2>
              <p>Questa Applicazione utilizza Cookie per salvare la sessione dell'Utente e per svolgere altre attività strettamente necessarie al funzionamento di questa Applicazione, per esempio in relazione alla distribuzione del traffico.</p>
            </div>
            
            <div>
              <h2 className="text-2xl font-serif font-bold text-primary mt-8 mb-4">Come posso esprimere il consenso all'installazione di Cookie?</h2>
              <p>In aggiunta a quanto indicato in questo documento, l'Utente può gestire le preferenze relative ai Cookie direttamente all'interno del proprio browser ed impedire – ad esempio – che terze parti possano installarne. Tramite le preferenze del browser è inoltre possibile eliminare i Cookie installati in passato, incluso il Cookie in cui venga eventualmente salvato il consenso all'installazione di Cookie da parte di questo sito.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
