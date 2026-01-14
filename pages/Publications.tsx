import React from 'react';
import { PUBLICATIONS } from '../constants';
import { FileText, Book, ExternalLink } from 'lucide-react';

const Publications: React.FC = () => {
  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-serif font-bold text-deep-sea mb-8 text-center">Publicaciones</h1>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {PUBLICATIONS.map((pub, idx) => (
            <div 
              key={idx} 
              className={`p-6 md:p-8 hover:bg-gray-50 transition border-b border-gray-100 last:border-0 flex gap-4`}
            >
              <div className="flex-shrink-0 mt-1">
                {pub.type === 'Book' || pub.type === 'Thesis' ? (
                  <Book className="text-amber-500" size={24} />
                ) : (
                  <FileText className="text-caribbean-blue" size={24} />
                )}
              </div>
              <div>
                 <div className="flex items-center gap-2 mb-2">
                   <span className={`text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wider
                     ${pub.type === 'Paper' ? 'bg-blue-100 text-blue-700' : 
                       pub.type === 'Preprint' ? 'bg-purple-100 text-purple-700' :
                       pub.type === 'Book' ? 'bg-amber-100 text-amber-700' :
                       'bg-gray-100 text-gray-700'
                     }
                   `}>
                     {pub.type}
                   </span>
                 </div>
                 <p className="text-gray-800 leading-relaxed font-serif text-sm md:text-base">
                   {pub.citation}
                 </p>
                 {pub.link && (
                   <a 
                     href={pub.link} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-caribbean-blue hover:text-deep-sea transition"
                   >
                     Ver publicación <ExternalLink size={14} />
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