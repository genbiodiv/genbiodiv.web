import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Microscope, TreePalm, Users, Globe } from 'lucide-react';
import { SUPPORTERS, HOME_CONTENT } from '../constants';
import { useAppContext } from '../context/AppContext';

const Home: React.FC = () => {
  const { t } = useAppContext();

  const featureIcons = [Microscope, TreePalm, Users, Globe];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center text-center px-4 overflow-hidden">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://picsum.photos/1920/1080?grayscale&blur=2")', 
          }}
        >
          <div className="absolute inset-0 bg-deep-sea/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-deep-sea/90"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-white space-y-6">
          <span className="inline-block py-1 px-3 rounded-full bg-caribbean-blue/80 text-white text-xs font-bold tracking-widest uppercase mb-2 backdrop-blur-sm">
            {t(HOME_CONTENT.hero.badge)}
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
            {t(HOME_CONTENT.hero.title).split(' ').map((word, i) => 
              word.toLowerCase().includes('caribe') ? <span key={i} className="text-teal-300"> {word} </span> : word + ' '
            )}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light">
            {t(HOME_CONTENT.hero.subtitle)}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to="/investigacion" className="px-8 py-3 bg-caribbean-blue hover:bg-teal-600 text-white font-semibold rounded-lg transition shadow-lg flex items-center justify-center gap-2">
              {t(HOME_CONTENT.hero.ctaPrimary)} <ArrowRight size={18} />
            </Link>
            <Link to="/equipo" className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur text-white font-semibold rounded-lg transition border border-white/30">
              {t(HOME_CONTENT.hero.ctaSecondary)}
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction / About Snippet */}
      <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-bold text-deep-sea dark:text-teal-400">
                {t(HOME_CONTENT.intro.title)}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t(HOME_CONTENT.intro.p1)}
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t(HOME_CONTENT.intro.p2)}
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                {HOME_CONTENT.intro.features.map((feature, idx) => {
                  const Icon = featureIcons[idx];
                  return (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="bg-teal-100 dark:bg-teal-900/30 p-2 rounded text-teal-700 dark:text-teal-400">
                        <Icon size={24}/>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 dark:text-white">{t(feature.title)}</h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{t(feature.desc)}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                 <img src="https://picsum.photos/800/600?random=20" alt="Trabajo de campo" className="w-full h-full object-cover hover:scale-105 transition duration-700" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-sand dark:bg-slate-800 p-6 rounded-lg shadow-lg max-w-xs hidden md:block border-l-4 border-caribbean-blue">
                <p className="text-deep-sea dark:text-teal-400 font-serif italic">
                  {t(HOME_CONTENT.intro.quote)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supporters Section */}
      <section className="py-16 bg-gray-50 dark:bg-slate-950 border-t border-gray-200 dark:border-slate-800 transition-colors duration-300">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-lg font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-10">
            {t(HOME_CONTENT.supportersTitle)}
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
             {SUPPORTERS.map((supporter, idx) => (
               <div key={idx} className="flex flex-col items-center max-w-[200px]">
                  <div className="h-16 w-full flex items-center justify-center bg-gray-200 dark:bg-slate-800 rounded mb-2 text-xs text-gray-400 font-mono">
                    [LOGO {idx + 1}]
                  </div>
                  <h4 className="font-bold text-gray-800 dark:text-white">{t(supporter.name)}</h4>
                  {supporter.subtext && <p className="text-xs text-gray-500 dark:text-gray-400">{t(supporter.subtext)}</p>}
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
