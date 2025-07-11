
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="bg-background">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-serif font-bold text-primary mb-8">Informativa sulla Privacy</h1>
          <div className="space-y-6 text-foreground/80 leading-relaxed">
            <p>La presente Informativa sulla Privacy descrive come vengono raccolti, utilizzati e condivisi i tuoi dati personali quando visiti questo sito web.</p>
            
            <div>
              <h2 className="text-2xl font-serif font-bold text-primary mt-8 mb-4">Titolare del Trattamento dei Dati</h2>
              <p>Lorenzo Caseri, Vinicio Caseri</p>
              <p>Via Palma il Vecchio 18, Bergamo(BG) 24128</p>
              <p><strong>Indirizzo email del Titolare:</strong> avv.viniciocaseri@outlook.it</p>
            </div>
            
            <div>
              <h2 className="text-2xl font-serif font-bold text-primary mt-8 mb-4">Tipologie di Dati raccolti</h2>
              <p>Fra i Dati Personali raccolti da questo sito, in modo autonomo o tramite terze parti, ci sono: Cookie e Dati di utilizzo. Dettagli completi su ciascuna tipologia di dati raccolti sono forniti nelle sezioni dedicate di questa privacy policy o mediante specifici testi informativi visualizzati prima della raccolta dei dati stessi.</p>
              <p>I Dati Personali possono essere liberamente forniti dall'Utente o, nel caso di Dati di Utilizzo, raccolti automaticamente durante l'uso di questo sito.</p>
            </div>
            
            <div>
              <h2 className="text-2xl font-serif font-bold text-primary mt-8 mb-4">Modalità e luogo del trattamento dei Dati raccolti</h2>
              <p>Il Titolare adotta le opportune misure di sicurezza volte ad impedire l’accesso, la divulgazione, la modifica o la distruzione non autorizzate dei Dati Personali.</p>
              <p>Il trattamento viene effettuato mediante strumenti informatici e/o telematici, con modalità organizzative e con logiche strettamente correlate alle finalità indicate.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
