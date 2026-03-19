import React, { useState } from 'react';
import { RESEARCH_CATEGORIES, RESEARCH_PAGE_CONTENT } from '../constants';
import { Dna, Bug, Mountain, BookOpen } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Research: React.FC = () => {
  const { t } = useAppContext();
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
    <div className="pt-24 pb-16 bg-white dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-deep-sea dark:text-teal-400 mb-4">
            {t(RESEARCH_PAGE_CONTENT.title)}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t(RESEARCH_PAGE_CONTENT.subtitle)}
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
                  ? 'bg-deep-sea dark:bg-teal-600 text-white shadow-lg scale-105' 
                  : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-slate-700'}`}
            >
              {getIcon(cat.id)}
              {t(cat.title)}
            </button>
          ))}
        </div>

        {/* Content Area */}
        {activeCategory && (
          <div className="max-w-6xl mx-auto animate-fade-in">
            <div className="bg-sand/30 dark:bg-slate-800/50 rounded-3xl p-8 md:p-12 border border-sand dark:border-slate-700 transition-colors duration-300">
              <div className="mb-10 border-b border-gray-200 dark:border-slate-700 pb-6">
                <h2 className="text-3xl font-serif font-bold text-deep-sea dark:text-teal-400 mb-4">{t(activeCategory.title)}</h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 font-light">{t(activeCategory.description)}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {activeCategory.projects.map((project, idx) => (
                  <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition border-l-4 border-caribbean-blue dark:border-teal-500">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{t(project.title)}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                      {t(project.description)}
                    </p>
                    {project.link && (
                       <a href={project.link} className="inline-block mt-4 text-sm font-bold text-caribbean-blue dark:text-teal-400 hover:underline">
                         {t({ es: "Leer más", en: "Read more" })} &rarr;
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
