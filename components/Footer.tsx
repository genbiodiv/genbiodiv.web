import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-deep-sea text-white pt-12 pb-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Column 1: Identity */}
        <div>
          <h3 className="text-xl font-serif font-bold mb-4">Genómica y Biodiversidad</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Investigando la diversidad biológica del Caribe Colombiano a través de un enfoque interdisciplinario que combina genómica, ecología y evolución.
          </p>
          <div className="flex items-center gap-2">
            <span className="bg-white/10 px-3 py-1 rounded text-xs">Universidad del Norte</span>
          </div>
        </div>

        {/* Column 2: Quick Links (Visual only for now, could be functional) */}
        <div>
           <h3 className="text-lg font-bold mb-4">Enlaces de Interés</h3>
           <ul className="space-y-2 text-sm text-gray-300">
             <li><a href="https://www.uninorte.edu.co" target="_blank" rel="noreferrer" className="hover:text-caribbean-blue transition">Universidad del Norte</a></li>
             <li><a href="https://www.evolbio.mpg.de/" target="_blank" rel="noreferrer" className="hover:text-caribbean-blue transition">Max Planck Institute for Evolutionary Biology</a></li>
             <li><a href="https://www.pewtrusts.org/" target="_blank" rel="noreferrer" className="hover:text-caribbean-blue transition">Pew Charitable Trusts</a></li>
           </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contacto</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-1 flex-shrink-0 text-caribbean-blue" />
              <span>
                Oficina 630J, Edificio Mario Santodomingo<br/>
                Universidad del Norte<br/>
                Km 5 Vía a Puerto Colombia<br/>
                Barranquilla, Colombia
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-caribbean-blue" />
              <a href="mailto:rneme@uninorte.edu.co" className="hover:underline">rneme@uninorte.edu.co</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-caribbean-blue" />
              <span>+57 5 3509509 Ext. 3894</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Grupo de Genómica y Biodiversidad del Caribe. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;