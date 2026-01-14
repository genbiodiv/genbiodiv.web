import React from 'react';
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Info Side */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-serif font-bold text-deep-sea mb-6">Contacto</h1>
              <p className="text-xl text-gray-600 font-light mb-8">
                ¿Tienes interés en trabajar o colaborar con nosotros?
              </p>
              <div className="bg-sand/30 p-6 rounded-xl border border-sand">
                <p className="text-gray-700 italic">
                  "Siempre estamos buscando establecer nuevos lazos y tenemos espacio en nuestro grupo para investigadorxs de todo nivel académico, y de cualquier rincón del conocimiento."
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-caribbean-blue/10 p-3 rounded-full text-caribbean-blue">
                   <MapPin size={24} />
                </div>
                <div>
                   <h3 className="font-bold text-gray-800 text-lg">Ubicación</h3>
                   <p className="text-gray-600">
                     Departamento de Química y Biología<br/>
                     Universidad del Norte<br/>
                     Km 5 Via a Puerto Colombia, Barranquilla, Colombia<br/>
                     Oficina 630J, Edificio Mario Santodomingo
                   </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-caribbean-blue/10 p-3 rounded-full text-caribbean-blue">
                   <Mail size={24} />
                </div>
                <div>
                   <h3 className="font-bold text-gray-800 text-lg">Correo Electrónico</h3>
                   <a href="mailto:rneme@uninorte.edu.co" className="text-caribbean-blue text-lg hover:underline">
                     rneme@uninorte.edu.co
                   </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-caribbean-blue/10 p-3 rounded-full text-caribbean-blue">
                   <Phone size={24} />
                </div>
                <div>
                   <h3 className="font-bold text-gray-800 text-lg">Teléfono</h3>
                   <p className="text-gray-600">
                     +57 5 3509509 Ext. 3894
                   </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interaction Side */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col justify-center">
            <div className="text-center mb-8">
               <div className="inline-block p-4 bg-teal-100 rounded-full text-teal-600 mb-4">
                 <MessageCircle size={40} />
               </div>
               <h2 className="text-2xl font-bold text-gray-800">¿Quieres saber más?</h2>
               <p className="text-gray-500 mt-2">Escríbenos directamente o visítanos en la universidad.</p>
            </div>
            
            {/* Simple Contact Form Placeholder */}
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                 <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-caribbean-blue focus:border-transparent outline-none" placeholder="Tu nombre" />
               </div>
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">Correo</label>
                 <input type="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-caribbean-blue focus:border-transparent outline-none" placeholder="tucorreo@ejemplo.com" />
               </div>
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                 <textarea rows={4} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-caribbean-blue focus:border-transparent outline-none" placeholder="¿En qué podemos ayudarte?"></textarea>
               </div>
               <button className="w-full py-3 bg-deep-sea hover:bg-caribbean-blue text-white font-bold rounded-lg transition shadow-lg">
                 Enviar Mensaje
               </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;