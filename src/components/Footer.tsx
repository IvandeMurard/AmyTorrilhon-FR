import React from 'react';
import { Instagram, Facebook, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 text-neutral-400 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-white font-serif text-xl mb-1">Amy Torrilhon</h2>
            <p className="text-sm">Un Siècle d'Expression Artistique</p>
          </div>

          <div className="flex space-x-6">
            <a
              href="#"
              className="hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="mailto:contact@amytorrilhon.com"
              className="hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <nav className="flex flex-wrap justify-center md:justify-start gap-6 mb-6 md:mb-0">
            <a href="#introduction" className="text-sm hover:text-white transition-colors">
              Introduction
            </a>
            <a href="#journey" className="text-sm hover:text-white transition-colors">
              Parcours
            </a>
            <a href="#gallery" className="text-sm hover:text-white transition-colors">
              Galerie
            </a>
            <a href="#exhibition" className="text-sm hover:text-white transition-colors">
              Exposition
            </a>
          </nav>

          <p className="text-xs">
            © {new Date().getFullYear()} Fondation Amy Torrilhon. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

<a
  href="https://instagram.com"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-white transition-colors"
  aria-label="Instagram"
>
  <Instagram size={20} />
</a>


export default Footer;
