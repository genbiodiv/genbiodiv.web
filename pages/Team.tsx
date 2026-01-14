import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import { Member, MemberRole } from '../types';

const Team: React.FC = () => {
  // Group members by category for easier rendering
  const leader = TEAM_MEMBERS.find(m => m.category === MemberRole.LEADER);
  const researchers = TEAM_MEMBERS.filter(m => m.category === MemberRole.RESEARCHER);
  const students = TEAM_MEMBERS.filter(m => m.category === MemberRole.STUDENT);
  const alumni = TEAM_MEMBERS.filter(m => m.category === MemberRole.ALUMNI);

  const MemberCard: React.FC<{ member: Member; large?: boolean }> = ({ member, large = false }) => (
    <div className={`bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden border border-gray-100 flex ${large ? 'flex-col md:flex-row' : 'flex-col'} h-full`}>
      <div className={`${large ? 'md:w-1/3 h-64 md:h-auto' : 'h-64'} overflow-hidden relative group`}>
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-sea/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
           <span className="text-white font-medium text-sm">{member.role}</span>
        </div>
      </div>
      <div className={`p-6 ${large ? 'md:w-2/3 flex flex-col justify-center' : ''}`}>
        <h3 className="text-xl font-bold text-deep-sea mb-1">{member.name}</h3>
        <p className="text-caribbean-blue text-sm font-semibold mb-4 uppercase tracking-wide">{member.role}</p>
        <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
      </div>
    </div>
  );

  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-deep-sea mb-4">Nuestro Grupo</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Somos un equipo interdisciplinario de biólogos, geólogos y artistas apasionados por la ciencia y la biodiversidad del Caribe.
          </p>
        </div>

        {/* Leader Section */}
        {leader && (
          <div className="mb-20 max-w-5xl mx-auto">
            <MemberCard member={leader} large={true} />
          </div>
        )}

        {/* Researchers & Students Grid */}
        <div className="mb-20">
          <h2 className="text-2xl font-serif font-bold text-deep-sea mb-8 border-l-4 border-caribbean-blue pl-4">Investigadores y Estudiantes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...researchers, ...students].map((member, idx) => (
              <MemberCard key={idx} member={member} />
            ))}
          </div>
        </div>

        {/* Alumni Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-serif font-bold text-deep-sea mb-8 border-l-4 border-gray-400 pl-4">Alumni</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {alumni.map((member, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                 <div className="w-16 h-16 rounded-full overflow-hidden mb-4 mx-auto md:mx-0">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition" />
                 </div>
                 <h3 className="text-lg font-bold text-gray-800 text-center md:text-left">{member.name}</h3>
                 <p className="text-xs text-caribbean-blue font-semibold uppercase mb-2 text-center md:text-left">{member.role}</p>
                 <p className="text-xs text-gray-500 leading-relaxed text-center md:text-left">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Team;