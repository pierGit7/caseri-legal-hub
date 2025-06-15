
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import History from '@/components/History';
import About from '@/components/About';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="bg-background">
      <Header />
      <main>
        <Hero />
        <History />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
