import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Dna } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Determine if we should show the solid (high contrast) header
  // Always show solid on non-home pages, or when scrolled on home page
  const isHome = location.pathname === '/';
  const useSolidHeader = scrolled || !isHome;

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Nuestro Grupo', path: '/equipo' },
    { name: 'Investigación', path: '/investigacion' },
    { name: 'Publicaciones', path: '/publicaciones' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${useSolidHeader ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className={`p-2 rounded-full transition-colors ${useSolidHeader ? 'bg-caribbean-blue text-white' : 'bg-white/20 backdrop-blur text-white'}`}>
             <Dna size={24} />
          </div>
          <div className="flex flex-col">
            <span className={`text-lg font-bold leading-tight ${useSolidHeader ? 'text-deep-sea' : 'text-white'}`}>
              Genómica y Biodiversidad
            </span>
            <span className={`text-xs font-light tracking-wider ${useSolidHeader ? 'text-gray-600' : 'text-gray-200'}`}>
              del Caribe
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-semibold tracking-wide uppercase transition-colors hover:text-caribbean-blue
                ${location.pathname === link.path 
                  ? 'text-caribbean-blue border-b-2 border-caribbean-blue' 
                  : (useSolidHeader ? 'text-gray-700' : 'text-white/90')}
              `}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-gray-500 hover:text-caribbean-blue focus:outline-none">
          {isOpen ? <X size={28} className={useSolidHeader ? 'text-gray-800' : 'text-white'} /> : <Menu size={28} className={useSolidHeader ? 'text-gray-800' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-transform duration-300 transform ${isOpen ? 'translate-y-0' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col py-4 px-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-base font-medium ${location.pathname === link.path ? 'text-caribbean-blue' : 'text-gray-600'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;