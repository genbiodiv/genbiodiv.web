import React from 'react';
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
import { CONTACT_PAGE_CONTENT } from '../constants';
import { useAppContext } from '../context/AppContext';

const Contact: React.FC = () => {
  const { t } = useAppContext();

  return (
    <div className="pt-24 pb-16 bg-white dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <div className="container mx-auto px-4">
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Info Side */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-serif font-bold text-deep-sea dark:text-teal-400 mb-6">
                {t(CONTACT_PAGE_CONTENT.title)}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 font-light mb-8">
                {t(CONTACT_PAGE_CONTENT.subtitle)}
              </p>
              <div className="bg-sand/30 dark:bg-slate-800/50 p-6 rounded-xl border border-sand dark:border-slate-700">
                <p className="text-gray-700 dark:text-gray-300 italic">
                  {t({ 
                    es: "\"Siempre estamos buscando establecer nuevos lazos y tenemos espacio en nuestro grupo para investigadorxs de todo nivel académico, y de cualquier rincón del conocimiento.\"", 
                    en: "\"We are always looking to establish new bonds and we have space in our group for researchers of all academic levels, and from any corner of knowledge.\"" 
                  })}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-caribbean-blue/10 dark:bg-teal-900/30 p-3 rounded-full text-caribbean-blue dark:text-teal-400">
                   <MapPin size={24} />
                </div>
                <div>
                   <h3 className="font-bold text-gray-800 dark:text-white text-lg">{t(CONTACT_PAGE_CONTENT.location)}</h3>
                   <p className="text-gray-600 dark:text-gray-400">
                     Departamento de Química y Biología<br/>
                     Universidad del Norte<br/>
                     Km 5 Via a Puerto Colombia, Barranquilla, Colombia<br/>
                     Oficina 630J, Edificio Mario Santodomingo
                   </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-caribbean-blue/10 dark:bg-teal-900/30 p-3 rounded-full text-caribbean-blue dark:text-teal-400">
                   <Mail size={24} />
                </div>
                <div>
                   <h3 className="font-bold text-gray-800 dark:text-white text-lg">{t(CONTACT_PAGE_CONTENT.email)}</h3>
                   <a href="mailto:rneme@uninorte.edu.co" className="text-caribbean-blue dark:text-teal-400 text-lg hover:underline">
                     rneme@uninorte.edu.co
                   </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-caribbean-blue/10 dark:bg-teal-900/30 p-3 rounded-full text-caribbean-blue dark:text-teal-400">
                   <Phone size={24} />
                </div>
                <div>
                   <h3 className="font-bold text-gray-800 dark:text-white text-lg">{t({ es: "Teléfono", en: "Phone" })}</h3>
                   <p className="text-gray-600 dark:text-gray-400">
                     +57 5 3509509 Ext. 3894
                   </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interaction Side */}
          <div className="bg-gray-50 dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-700 flex flex-col justify-center transition-colors duration-300">
            <div className="text-center mb-8">
               <div className="inline-block p-4 bg-teal-100 dark:bg-teal-900/30 rounded-full text-teal-600 dark:text-teal-400 mb-4">
                 <MessageCircle size={40} />
               </div>
               <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{t(CONTACT_PAGE_CONTENT.formTitle)}</h2>
               <p className="text-gray-500 dark:text-gray-400 mt-2">
                 {t({ es: "Escríbenos directamente o visítanos en la universidad.", en: "Write to us directly or visit us at the university." })}
               </p>
            </div>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
               <div>
                 <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t(CONTACT_PAGE_CONTENT.form.name)}</label>
                 <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-caribbean-blue focus:border-transparent outline-none transition-colors" placeholder={t({ es: "Tu nombre", en: "Your name" })} />
               </div>
               <div>
                 <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t(CONTACT_PAGE_CONTENT.form.email)}</label>
                 <input type="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-caribbean-blue focus:border-transparent outline-none transition-colors" placeholder={t({ es: "tucorreo@ejemplo.com", en: "youremail@example.com" })} />
               </div>
               <div>
                 <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t(CONTACT_PAGE_CONTENT.form.message)}</label>
                 <textarea rows={4} className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-caribbean-blue focus:border-transparent outline-none transition-colors" placeholder={t({ es: "¿En qué podemos ayudarte?", en: "How can we help you?" })}></textarea>
               </div>
               <button className="w-full py-3 bg-deep-sea dark:bg-teal-600 hover:bg-caribbean-blue dark:hover:bg-teal-500 text-white font-bold rounded-lg transition shadow-lg">
                 {t(CONTACT_PAGE_CONTENT.form.send)}
               </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
