import React from 'react';
import { PUBLICATIONS, PUBLICATIONS_PAGE_CONTENT } from '../constants';
import { FileText, Book, ExternalLink } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Publications: React.FC = () => {
  const { t } = useAppContext();

  return (
    <div className="pt-24 pb-16 bg-gray-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-deep-sea dark:text-teal-400 mb-4">
            {t(PUBLICATIONS_PAGE_CONTENT.title)}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t(PUBLICATIONS_PAGE_CONTENT.subtitle)}
          </p>
        </div>
        
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 overflow-hidden transition-colors duration-300">
          {PUBLICATIONS.map((pub, idx) => (
            <div 
              key={idx} 
              className={`p-6 md:p-8 hover:bg-gray-50 dark:hover:bg-slate-800 transition border-b border-gray-100 dark:border-slate-800 last:border-0 flex gap-4`}
            >
              <div className="flex-shrink-0 mt-1">
                {pub.type === 'Book' || pub.type === 'Thesis' ? (
                  <Book className="text-amber-500" size={24} />
                ) : (
                  <FileText className="text-caribbean-blue dark:text-teal-400" size={24} />
                )}
              </div>
              <div>
                 <div className="flex items-center gap-2 mb-2">
                   <span className={`text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wider
                     ${pub.type === 'Paper' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400' : 
                       pub.type === 'Preprint' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400' :
                       pub.type === 'Book' ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400' :
                       'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-400'
                     }
                   `}>
                     {t(PUBLICATIONS_PAGE_CONTENT.types[pub.type as keyof typeof PUBLICATIONS_PAGE_CONTENT.types] || { es: pub.type, en: pub.type })}
                   </span>
                 </div>
                 <p className="text-gray-800 dark:text-gray-200 leading-relaxed font-serif text-sm md:text-base">
                   {pub.citation}
                 </p>
                 {pub.link && (
                   <a 
                     href={pub.link} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-caribbean-blue dark:text-teal-400 hover:text-deep-sea dark:hover:text-teal-300 transition"
                   >
                     {t(PUBLICATIONS_PAGE_CONTENT.viewPublication)} <ExternalLink size={14} />
                   </a>
                 )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publications;
