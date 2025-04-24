import React, { useRef, useState, useEffect } from 'react';
import { Calendar, Send } from 'lucide-react';

const CallToAction: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="exhibition" className="py-24 bg-neutral-900 text-white">
      <div
        ref={sectionRef}
        className="container mx-auto px-6 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-6">
              <Calendar size={20} className="text-neutral-400" />
              <span className="text-sm uppercase tracking-widest text-neutral-400">Exposition</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-serif font-normal mb-8">
              Rejoignez-nous pour l'Exposition Anthologie
            </h2>

            <p className="text-neutral-300 leading-relaxed max-w-2xl mx-auto">
              Participez à cette célébration historique en l'honneur du 100e anniversaire d'Amy Torrilhon et de sa contribution extraordinaire au monde de l’art. L'exposition Anthologie présentera une collection complète de ses œuvres les plus marquantes couvrant l'ensemble de sa carrière.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-serif font-normal mb-6">Détails de l'exposition</h3>

              <div className="space-y-4 text-neutral-300">
                <div>
                  <p className="font-medium text-white">Vernissage</p>
                  <p>2 juin 2025 • 17h00 - 20h00</p>
                </div>

                <div>
                  <p className="font-medium text-white">Dates de l’exposition</p>
                  <p>1er au 15 juin 2025</p>
                </div>

                <div>
                  <p className="font-medium text-white">Lieu</p>
                  <p>Galerie Artès</p>
                  <p>11 rue Frédéric Sauton, Paris 5e</p>
                  <p>Métro Maubert-Mutualité</p>
                </div>

                <div className="pt-4">
                  <p>
                    Des visites privées et des événements spéciaux seront programmés tout au long de l'exposition. Inscrivez-vous pour recevoir des mises à jour et des invitations exclusives.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-800 p-8 rounded-lg">
              <h3 className="text-xl font-serif font-normal mb-6">Restez informé·e</h3>

              {submitted ? (
                <div className="bg-green-600 bg-opacity-20 border border-green-600 rounded-lg p-4 text-center">
                  <p className="text-green-400">
                    Merci ! Vous recevrez des nouvelles concernant l'exposition.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <p className="mb-6 text-sm text-neutral-400">
                    Abonnez-vous pour recevoir des informations sur l'exposition, les événements spéciaux, et des aperçus du parcours artistique d'Amy Torrilhon.
                  </p>

                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm mb-2">
                      Adresse email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-3 bg-neutral-700 border border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-500 text-white"
                      placeholder="votre@email.com"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 bg-white text-neutral-900 py-3 px-6 rounded-lg hover:bg-neutral-200 transition-colors"
                  >
                    <span>S’abonner</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
