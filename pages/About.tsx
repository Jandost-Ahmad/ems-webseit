import React from 'react';
import { IMAGES, TEAM_MEMBERS } from '../constants';
import { Linkedin } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-daino-dark">
       <section className="py-24 container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-8">Das Team hinter <span className="text-daino-cyan">DAINO</span></h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                "Wir gestalten Rastplätze neu: nachhaltig, intelligent und menschlich.
                DAINO verbindet modernste Technologie mit alpiner Gastfreundschaft."
            </p>
       </section>

       {/* Vision Section */}
       <section className="relative py-32 overflow-hidden">
           <div className="absolute inset-0">
               <img src={IMAGES.blueprint} alt="Blueprint" className="w-full h-full object-cover opacity-80 " />
               <div className="absolute inset-0 bg-daino-dark/80" />
           </div>
           <div className="relative z-10 container mx-auto px-6 text-center border-y border-white/10 py-16 ">
                <h2 className="text-3xl font-display font-bold uppercase tracking-widest text-white">Gemeinsam gestalten wir die Zukunft</h2>
                <p className="mt-4 text-daino-cyan font-mono">Team 01 — Gezeichnet am 20.11.2025</p>
           </div>
       </section>

       {/* Team Grid */}
       <section className="py-24 bg-[#050B14]">
           <div className="container mx-auto px-6">
               <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                   {TEAM_MEMBERS.map((member, idx) => (
                       <div key={idx} className="group relative rounded-xl overflow-hidden cursor-pointer">
                           <div className="aspect-square overflow-hidden">
                               <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                               />
                           </div>
                           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
                           <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                               <h3 className="text-xl font-bold text-white mb-1 group-hover:text-daino-cyan transition-colors">{member.name}</h3>
                               <p className="text-sm text-gray-400 font-mono mb-3">{member.role}</p>
                               <p className="text-sm text-white/80 italic border-l-2 border-daino-cyan pl-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                   "{member.quote}"
                               </p>
                               <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                   <Linkedin size={20} className="text-white hover:text-daino-cyan" />
                               </div>
                           </div>
                       </div>
                   ))}
               </div>
           </div>
       </section>
    </div>
  );
};

export default About;
