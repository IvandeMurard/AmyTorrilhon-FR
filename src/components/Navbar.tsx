import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'journey', label: "Parcours de l'artiste" },
    { id: 'gallery', label: 'Galerie' },
    { id: 'exhibition', label: 'Exposition' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white bg-opacity-95 shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-xl font-serif font-normal tracking-wider">AT</Link>

        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm hover:text-neutral-500 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Ouvrir le menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white bg-opacity-95 shadow-md py-4">
          <div className="container mx-auto px-6 flex flex-col space-y-4">

            {/*
Dans navItems ou juste avant :
*/}
<a href="#top" className="text-sm hover:text-neutral-500 transition-colors">
  Accueil
</a>

            
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm py-2 hover:text-neutral-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

