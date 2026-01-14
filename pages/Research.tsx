import React, { useState } from 'react';
import { RESEARCH_CATEGORIES } from '../constants';
import { Dna, Bug, Mountain, BookOpen } from 'lucide-react';

const Research: React.FC = () => {
  const [activeTab, setActiveTab] = useState(RESEARCH_CATEGORIES[0].id);

  const getIcon = (id: string) => {
    switch (id) {
      case 'molecular': return <Dna size={20} />;
      case 'insectos': return <Bug size={20} />;
      case 'ecosistemas': return <Mountain size={20} />;
      case 'divulgacion': return <BookOpen size={20} />;
      default: return <Dna size={20} />;
    }
  };

  const activeCategory = RESEARCH_CATEGORIES.find(c => c.id === activeTab);

  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-deep-sea mb-4">Líneas de Investigación</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Desde la evolución de nuevos genes hasta la ecología de los bosques secos, nuestros proyectos buscan respuestas integrales a la biodiversidad del Caribe.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {RESEARCH_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300
                ${activeTab === cat.id 
                  ? 'bg-deep-sea text-white shadow-lg scale-105' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {getIcon(cat.id)}
              {cat.title}
            </button>
          ))}
        </div>

        {/* Content Area */}
        {activeCategory && (
          <div className="max-w-6xl mx-auto animate-fade-in">
            <div className="bg-sand/30 rounded-3xl p-8 md:p-12 border border-sand">
              <div className="mb-10 border-b border-gray-200 pb-6">
                <h2 className="text-3xl font-serif font-bold text-deep-sea mb-4">{activeCategory.title}</h2>
                <p className="text-xl text-gray-700 font-light">{activeCategory.description}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {activeCategory.projects.map((project, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border-l-4 border-caribbean-blue">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {project.description}
                    </p>
                    {project.link && (
                       <a href={project.link} className="inline-block mt-4 text-sm font-bold text-caribbean-blue hover:underline">
                         Leer más &rarr;
                       </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Visual divider */}
      <div className="mt-20 h-40 bg-fixed bg-cover bg-center" style={{ backgroundImage: 'url("https://picsum.photos/1920/600?grayscale")' }}>
        <div className="h-full w-full bg-caribbean-blue/20 backdrop-grayscale"></div>
      </div>
    </div>
  );
};

export default Research;