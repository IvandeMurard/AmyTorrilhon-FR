import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Introduction from '../components/Introduction';
import ArtistJourney from '../components/ArtistJourney';
import Gallery from '../components/Gallery';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const FrenchVersion: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-800 font-light">
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <ArtistJourney />
        <Gallery />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default FrenchVersion;