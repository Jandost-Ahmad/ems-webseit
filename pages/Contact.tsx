import React, { useState } from 'react';
import { IMAGES } from '../constants';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! (Simulation)");
  };

  return (
    <div className="min-h-screen bg-daino-dark pt-24">
       <div className="container mx-auto px-6 pb-24">
           <div className="grid lg:grid-cols-2 gap-16">
               {/* Contact Form */}
               <div>
                   <h1 className="text-4xl font-display font-bold mb-2">Get in <span className="text-daino-cyan">Touch</span></h1>
                   <p className="text-gray-400 mb-10">Wir freuen uns auf Ihre Fragen zur Zukunft der Raststätte.</p>

                   <form onSubmit={handleSubmit} className="space-y-6">
                       <div>
                           <label className="block text-sm font-bold text-gray-300 mb-2">Name</label>
                           <input
                            type="text"
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-daino-cyan transition-colors"
                            placeholder="Max Mustermann"
                            value={formState.name}
                            onChange={(e) => setFormState({...formState, name: e.target.value})}
                           />
                       </div>
                       <div>
                           <label className="block text-sm font-bold text-gray-300 mb-2">Email</label>
                           <input
                            type="email"
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-daino-cyan transition-colors"
                            placeholder="max@example.com"
                            value={formState.email}
                            onChange={(e) => setFormState({...formState, email: e.target.value})}
                           />
                       </div>
                       <div>
                           <label className="block text-sm font-bold text-gray-300 mb-2">Message</label>
                           <textarea
                            rows={4}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-daino-cyan transition-colors"
                            placeholder="Wie können wir Ihnen helfen?"
                            value={formState.message}
                            onChange={(e) => setFormState({...formState, message: e.target.value})}
                           />
                       </div>
                       <button
                        type="submit"
                        className="w-full bg-daino-cyan text-daino-dark font-bold py-4 rounded-lg hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2"
                       >
                           Send Message <Send size={18} />
                       </button>
                   </form>

                   <div className="mt-12 grid grid-cols-2 gap-6">
                        <div className="glass-panel p-6 rounded-lg flex items-start gap-4">
                            <MapPin className="text-daino-cyan mt-1" />
                            <div>
                                <h4 className="font-bold text-white">Location</h4>
                                <p className="text-gray-400 text-sm">Autobahn A8, KM 42<br/>Alpine Region, DE</p>
                            </div>
                        </div>
                        <div className="glass-panel p-6 rounded-lg flex items-start gap-4">
                            <Mail className="text-daino-cyan mt-1" />
                            <div>
                                <h4 className="font-bold text-white">Contact</h4>
                                <p className="text-gray-400 text-sm">info@daino.future<br/>+49 (0) 89 123456</p>
                            </div>
                        </div>
                   </div>
               </div>

               {/* Map Area */}
               <div className="relative h-[600px] rounded-2xl overflow-hidden border border-white/20 bg-[#050B14]">
                   {/* Using the blueprint image as a stylized map background */}
                   <img src={IMAGES.blueprint} alt="Site Map" className="w-full h-full object-cover opacity-30 invert" />
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-daino-cyan opacity-75"></span>
                            <div className="relative inline-flex rounded-full h-4 w-4 bg-daino-cyan"></div>
                        </div>
                   </div>
                   {/* Overlay UI for Map */}
                   <div className="absolute top-6 left-6 glass-panel px-4 py-2 rounded text-xs font-mono text-daino-cyan border-l-2 border-daino-cyan">
                       SITE BLUEPRINT v2.4
                   </div>
                   <div className="absolute bottom-6 right-6">
                       <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded text-sm backdrop-blur">
                           Open in Google Maps
                       </button>
                   </div>
               </div>
           </div>
       </div>
    </div>
  );
};

export default Contact;
