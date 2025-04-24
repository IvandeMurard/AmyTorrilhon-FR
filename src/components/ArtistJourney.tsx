import React, { useRef, useEffect } from 'react';
import { History } from 'lucide-react';

interface Milestone {
  year: string;
  title: string;
  description: string;
}

const milestones: Milestone[] = [
  {
    year: "1925",
    title: "Naissance à Paris",
    description: "Amy Torrilhon naît dans une famille aux racines artistiques profondes, posant les fondations d'une vie entière dédiée à la création."
  },
  {
    year: "1945-1950",
    title: "Académie Julian",
    description: "Elle étudie auprès de mentors renommés à l'Académie Julian à Paris, y développant une base solide en techniques classiques."
  },
  {
    year: "1951-1962",
    title: "Air France Revue",
    description: "Elle travaille comme illustratrice de presse pour Air France Revue, forgeant son style distinctif au fil de nombreux voyages à travers l’Europe."
  },
  {
    year: "1963-1980",
    title: "Passage à la sculpture",
    description: "Elle élargit sa pratique artistique à la sculpture, intégrant des influences de Braque et Masson dans des formes tridimensionnelles."
  },
  {
    year: "1980-2010",
    title: "Période d'expositions",
    description: "Elle expose ses œuvres dans des galeries à travers l'Europe et l'Amérique du Nord, gagnant en reconnaissance pour son style unique alliant cubisme et impressionnisme."
  },
  {
    year: "2019",
    title: "Académie Arts-Sciences-Lettres",
    description: "Elle reçoit la Médaille d’Argent de l’Académie Arts-Sciences-Lettres pour l’ensemble de sa contribution à l’art."
  },
  {
    year: "2025",
    title: "Célébration du centenaire",
    description: "L’exposition Anthologie est prévue pour commémorer ses 100 ans et présenter l’étendue et l’évolution de sa vision artistique."
  }
];

const ArtistJourney: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const milestoneRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    if (timelineRef.current) observer.observe(timelineRef.current);
    milestoneRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="journey" className="py-24 bg-neutral-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-6">
            <History size={20} className="text-neutral-400" />
            <span className="text-sm uppercase tracking-widest text-neutral-400">Parcours de l’artiste</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-serif font-normal mb-8">
            Une vie dédiée à l’art
          </h2>

          <p className="leading-relaxed">
            À travers la guerre et la paix, les révolutions culturelles et les bouleversements technologiques, le dévouement constant d’Amy Torrilhon à son art a produit une œuvre intemporelle, témoignage du pouvoir durable de l’expression artistique.
          </p>
        </div>

        <div
          ref={timelineRef}
          className="relative opacity-0 translate-y-8 transition-all duration-1000 ease-out"
        >
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-neutral-300"></div>

          {milestones.map((milestone, index) => (
            <div
              key={index}
              ref={el => milestoneRefs.current[index] = el}
              className="relative flex items-center mb-16 opacity-0 translate-y-8 transition-all duration-700 ease-out"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`w-1/2 pr-12 text-right ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                <h3 className="text-xl font-medium mb-1">{milestone.title}</h3>
                <p className="text-neutral-600">{milestone.description}</p>
              </div>

              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-2 border-neutral-400 z-10">
                <div className="absolute w-2 h-2 bg-neutral-400 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>

              <div className={`w-1/2 pl-12 ${index % 2 !== 0 ? 'md:order-1 text-right pr-12 md:pl-0' : ''}`}>
                <span className="inline-block py-1 px-3 bg-neutral-100 text-neutral-800 text-sm rounded mb-1">
                  {milestone.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtistJourney;
