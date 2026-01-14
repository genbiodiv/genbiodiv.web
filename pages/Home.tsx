import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Microscope, TreePalm, Users, Globe } from 'lucide-react';
import { SUPPORTERS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center text-center px-4 overflow-hidden">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://picsum.photos/1920/1080?grayscale&blur=2")', // Placeholder for a Caribbean landscape or Lab 
          }}
        >
          <div className="absolute inset-0 bg-deep-sea/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-deep-sea/90"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-white space-y-6">
          <span className="inline-block py-1 px-3 rounded-full bg-caribbean-blue/80 text-xs font-bold tracking-widest uppercase mb-2 backdrop-blur-sm">
            Grupo de Estudio y Semillero de Investigación
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
            Genómica y Biodiversidad del <span className="text-teal-300">Caribe Colombiano</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light">
            Investigamos la diversidad biológica de nuestra región a través de un enfoque interdisciplinario que combina genómica, ecología y evolución.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to="/investigacion" className="px-8 py-3 bg-caribbean-blue hover:bg-teal-600 text-white font-semibold rounded-lg transition shadow-lg flex items-center justify-center gap-2">
              Nuestra Investigación <ArrowRight size={18} />
            </Link>
            <Link to="/equipo" className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur text-white font-semibold rounded-lg transition border border-white/30">
              Conoce al Equipo
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction / About Snippet */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-bold text-deep-sea">Ciencia desde el Caribe para el Mundo</h2>
              <p className="text-gray-600 leading-relaxed">
                Ubicados en el Departamento de Química y Biología de la <strong>Universidad del Norte</strong>, nuestro grupo se dedica a comprender la estructura y dinámica de las comunidades en ecosistemas clave como el bosque seco tropical y el río Magdalena.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Utilizamos herramientas avanzadas como ADN ambiental, metabarcoding y análisis filogenéticos, integrando ciencia básica con aplicaciones en conservación y monitoreo ambiental.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3">
                   <div className="bg-teal-100 p-2 rounded text-teal-700"><Microscope size={24}/></div>
                   <div>
                     <h4 className="font-bold text-gray-800">Genómica</h4>
                     <p className="text-xs text-gray-500">Evolución molecular y nuevos genes.</p>
                   </div>
                </div>
                <div className="flex items-start gap-3">
                   <div className="bg-teal-100 p-2 rounded text-teal-700"><TreePalm size={24}/></div>
                   <div>
                     <h4 className="font-bold text-gray-800">Ecología</h4>
                     <p className="text-xs text-gray-500">Bosque seco y ecosistemas acuáticos.</p>
                   </div>
                </div>
                 <div className="flex items-start gap-3">
                   <div className="bg-teal-100 p-2 rounded text-teal-700"><Users size={24}/></div>
                   <div>
                     <h4 className="font-bold text-gray-800">Comunidad</h4>
                     <p className="text-xs text-gray-500">Ciencia participativa y divulgación.</p>
                   </div>
                </div>
                 <div className="flex items-start gap-3">
                   <div className="bg-teal-100 p-2 rounded text-teal-700"><Globe size={24}/></div>
                   <div>
                     <h4 className="font-bold text-gray-800">Impacto</h4>
                     <p className="text-xs text-gray-500">Conservación y monitoreo ambiental.</p>
                   </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                 <img src="https://picsum.photos/800/600?random=20" alt="Trabajo de campo" className="w-full h-full object-cover hover:scale-105 transition duration-700" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-sand p-6 rounded-lg shadow-lg max-w-xs hidden md:block border-l-4 border-caribbean-blue">
                <p className="text-deep-sea font-serif italic">"Hacer ciencia en el Caribe implica también compartirla, contextualizarla y fortalecer el vínculo con el entorno."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supporters Section */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-lg font-bold text-gray-500 uppercase tracking-widest mb-10">Instituciones que nos apoyan</h3>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
             {SUPPORTERS.map((supporter, idx) => (
               <div key={idx} className="flex flex-col items-center max-w-[200px]">
                  {/* Placeholder for logos */}
                  <div className="h-16 w-full flex items-center justify-center bg-gray-200 rounded mb-2 text-xs text-gray-400 font-mono">
                    [LOGO {idx + 1}]
                  </div>
                  <h4 className="font-bold text-gray-800">{supporter.name}</h4>
                  {supporter.subtext && <p className="text-xs text-gray-500">{supporter.subtext}</p>}
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;