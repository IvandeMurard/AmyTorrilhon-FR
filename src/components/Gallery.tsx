import React, { useState, useRef, useEffect } from 'react';
import { Image, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { artworks } from '../data/artworks';

const Gallery: React.FC = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<number | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const artworkRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );

    if (galleryRef.current) observer.observe(galleryRef.current);
    artworkRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const handlePrevious = () => {
    if (selectedArtwork !== null) {
      setSelectedArtwork(
        selectedArtwork === 0 ? artworks.length - 1 : selectedArtwork - 1
      );
    }
  };

  const handleNext = () => {
    if (selectedArtwork !== null) {
      setSelectedArtwork(
        selectedArtwork === artworks.length - 1 ? 0 : selectedArtwork + 1
      );
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (selectedArtwork === null) return;

    if (event.key === 'ArrowLeft') {
      handlePrevious();
    } else if (event.key === 'ArrowRight') {
      handleNext();
    } else if (event.key === 'Escape') {
      setSelectedArtwork(null);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-6">
            <Image size={20} className="text-neutral-400" />
            <span className="text-sm uppercase tracking-widest text-neutral-400">Galerie</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-serif font-normal mb-8">
            Une Vie de Création
          </h2>

          <p className="leading-relaxed">
            L'œuvre d'Amy Torrilhon s'étend sur plusieurs médiums, mais démontre constamment sa capacité unique à mêler la précision cubiste à la sensibilité impressionniste. Ses peintures et sculptures révèlent à la fois une maîtrise technique et une profondeur émotionnelle saisissante.
          </p>
        </div>

        <div
          ref={galleryRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
        >
          {artworks.map((artwork, index) => (
            <div
              key={index}
              ref={el => artworkRefs.current[index] = el}
              className="group cursor-pointer opacity-0 translate-y-8 transition-all duration-700 ease-out"
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setSelectedArtwork(index)}
              role="button"
              tabIndex={0}
              aria-label={`Voir ${artwork.title}`}
            >
              <div className="relative overflow-hidden">
                <div className="aspect-[3/4] bg-neutral-100">
                  <img 
                    src={artwork.imageUrl} 
                    alt={artwork.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Voir
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium">{artwork.title}</h3>
                <p className="text-sm text-neutral-500">{artwork.year} • {artwork.medium}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal d'affichage de l'œuvre sélectionnée */}
      {selectedArtwork !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedArtwork(null)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div
            className="max-w-5xl w-full bg-white p-0 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all"
              onClick={() => setSelectedArtwork(null)}
              aria-label="Fermer"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/3 bg-neutral-100">
                <img 
                  src={artworks[selectedArtwork].imageUrl} 
                  alt={artworks[selectedArtwork].title} 
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="md:w-1/3 p-8">
                <h3 className="text-2xl font-serif font-normal mb-2">{artworks[selectedArtwork].title}</h3>
                <p className="text-neutral-500 mb-6">{artworks[selectedArtwork].year} • {artworks[selectedArtwork].medium}</p>
                <p className="leading-relaxed mb-8">{artworks[selectedArtwork].description}</p>

                <div className="flex justify-between mt-auto">
                  <button
                    className="flex items-center text-sm hover:text-neutral-500 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrevious();
                    }}
                    aria-label="Œuvre précédente"
                  >
                    <ChevronLeft size={16} className="mr-1" />
                    Précédent
                  </button>

                  <button
                    className="flex items-center text-sm hover:text-neutral-500 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    aria-label="Œuvre suivante"
                  >
                    Suivant
                    <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
