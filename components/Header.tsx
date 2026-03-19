import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Dna, Globe, Moon, Sun } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { Language, Theme } from '../types';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language, setLanguage, theme, setTheme, t } = useAppContext();

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
    { name: t({ es: 'Inicio', en: 'Home' }), path: '/' },
    { name: t({ es: 'Nuestro Grupo', en: 'Our Team' }), path: '/equipo' },
    { name: t({ es: 'Investigación', en: 'Research' }), path: '/investigacion' },
    { name: t({ es: 'Publicaciones', en: 'Publications' }), path: '/publicaciones' },
    { name: t({ es: 'Contacto', en: 'Contact' }), path: '/contacto' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${useSolidHeader ? 'bg-white dark:bg-slate-900 shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className={`p-2 rounded-full transition-colors ${useSolidHeader ? 'bg-caribbean-blue text-white' : 'bg-white/20 backdrop-blur text-white'}`}>
             <Dna size={24} />
          </div>
          <div className="flex flex-col">
            <span className={`text-lg font-bold leading-tight ${useSolidHeader ? 'text-deep-sea dark:text-slate-200' : 'text-white'}`}>
              {t({ es: 'Genómica y Biodiversidad', en: 'Genomics & Biodiversity' })}
            </span>
            <span className={`text-xs font-light tracking-wider ${useSolidHeader ? 'text-gray-600 dark:text-slate-400' : 'text-gray-200'}`}>
              {t({ es: 'del Caribe', en: 'of the Caribbean' })}
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold tracking-wide uppercase transition-colors hover:text-caribbean-blue
                  ${location.pathname === link.path 
                    ? 'text-caribbean-blue border-b-2 border-caribbean-blue' 
                    : (useSolidHeader ? 'text-gray-700 dark:text-slate-300' : 'text-white/90')}
                `}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Toggles */}
          <div className="flex items-center gap-4 border-l border-gray-200 dark:border-slate-700 pl-6 ml-2">
            <button 
              onClick={() => setLanguage(language === Language.ES ? Language.EN : Language.ES)}
              className={`p-2 rounded-full transition-colors ${useSolidHeader ? 'text-gray-600 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-800' : 'text-white hover:bg-white/10'}`}
              title={language === Language.ES ? 'Switch to English' : 'Cambiar a Español'}
            >
              <Globe size={20} />
              <span className="ml-1 text-xs font-bold uppercase">{language}</span>
            </button>
            <button 
              onClick={() => setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)}
              className={`p-2 rounded-full transition-colors ${useSolidHeader ? 'text-gray-600 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-800' : 'text-white hover:bg-white/10'}`}
              title={theme === Theme.LIGHT ? 'Dark Mode' : 'Light Mode'}
            >
              {theme === Theme.LIGHT ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={() => setLanguage(language === Language.ES ? Language.EN : Language.ES)}
            className={`p-2 ${useSolidHeader ? 'text-gray-600 dark:text-slate-400' : 'text-white'}`}
          >
            <Globe size={20} />
          </button>
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? 
              <X size={28} className={useSolidHeader ? 'text-gray-800 dark:text-slate-200' : 'text-white'} /> : 
              <Menu size={28} className={useSolidHeader ? 'text-gray-800 dark:text-slate-200' : 'text-white'} />
            }
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-lg transition-transform duration-300 transform ${isOpen ? 'translate-y-0' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col py-4 px-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-base font-medium ${location.pathname === link.path ? 'text-caribbean-blue' : 'text-gray-600 dark:text-slate-300'}`}
            >
              {link.name}
            </Link>
          ))}
          <button 
            onClick={() => setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)}
            className="flex items-center gap-2 text-base font-medium text-gray-600 dark:text-slate-300 pt-2 border-t border-gray-100 dark:border-slate-800"
          >
            {theme === Theme.LIGHT ? <><Moon size={20} /> Dark Mode</> : <><Sun size={20} /> Light Mode</>}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
