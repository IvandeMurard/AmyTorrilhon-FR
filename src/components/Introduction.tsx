import React, { useEffect, useRef } from 'react';
import { Palette } from 'lucide-react';

const Introduction: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="introduction" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div
            ref={sectionRef}
            className="md:w-1/2 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
          >
            <div className="relative">
              <div className="absolute -inset-4 md:-inset-8 border border-neutral-200"></div>
              <img
                src="https://raw.githubusercontent.com/IvandeMurard/AmyTorrilhon/eda98cbf54061d97360d224e8562567b8ff01424/public/Atelier.JPG?auto=compress&cs=tinysrgb&w=1600"
                alt="Atelier d'Amy Torrilhon"
                className="w-full h-auto relative z-10"
              />
            </div>
          </div>

          <div
            ref={contentRef}
            className="md:w-1/2 opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-300"
          >
            <div className="inline-flex items-center space-x-2 mb-6">
              <Palette size={20} className="text-neutral-400" />
              <span className="text-sm uppercase tracking-widest text-neutral-400">
                Introduction
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-serif font-normal mb-8">
              Un Siècle d'Expression Artistique
            </h2>

            <p className="mb-6 leading-relaxed">
              À l'approche de la célébration du 100e anniversaire d'Amy Torrilhon en mai 2025, nous vous invitons à découvrir le parcours remarquable d'une artiste dont la carrière s'étend sur près d'un siècle d'exploration créative.
            </p>

            <p className="mb-6 leading-relaxed">
              L'exposition Anthologie représente l'aboutissement de son dévouement à l'expression artistique à travers ses médiums principaux : la peinture, la sculpture et le dessin. Chaque œuvre de cette collection révèle l'évolution de son style distinctif, qui mêle harmonieusement la précision cubiste à la sensibilité impressionniste.
            </p>

            <p className="leading-relaxed">
              Cette exposition ne célèbre pas seulement un anniversaire marquant, elle honore l'héritage d'un engagement inébranlable dans la quête de la beauté et de la vérité à travers l'art.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
