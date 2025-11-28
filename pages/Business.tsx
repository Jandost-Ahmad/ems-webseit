import React from 'react';
import { IMAGES } from '../constants';
import { Briefcase, Wifi, ShieldCheck, Box } from 'lucide-react';

const Business = () => {
  return (
    <div className="min-h-screen bg-daino-dark">
        <section className="relative h-[60vh] flex items-center">
            <div className="absolute inset-0 z-0">
                <img src={IMAGES.aiLogistics} alt="Logistics Hub" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-r from-daino-dark via-daino-dark/80 to-transparent" />
            </div>
            <div className="container mx-auto px-6 relative z-10">
                <span className="px-3 py-1 bg-daino-cyan/20 border border-daino-cyan/40 text-daino-cyan text-xs font-bold uppercase rounded mb-4 inline-block">B2B Solutions</span>
                <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Business <br/>Without Brakes</h1>
                <p className="text-xl text-gray-300 max-w-lg">
                    High-End Co-Working, KI-Logistik und Meeting-Pods direkt an der Autobahn.
                </p>
            </div>
        </section>

        <section className="py-24">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="glass-panel p-8 rounded-2xl border-t border-white/10 hover:border-daino-cyan/50 transition-colors group">
                        <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-daino-cyan/20 transition-colors">
                            <Briefcase className="text-white group-hover:text-daino-cyan" />
                        </div>
                        <h3 className="text-xl font-bold font-display mb-4">Co-Working Spaces</h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Schallisolierte Pods, High-Speed Glasfaser (10Gbit) und ergonomische Workstations.
                            Nutzen Sie die Ladezeit für produktive Meetings.
                        </p>
                        <ul className="text-sm text-gray-500 space-y-2">
                            <li className="flex items-center gap-2"><Wifi size={14}/> Starlink Backup</li>
                            <li className="flex items-center gap-2"><Box size={14}/> Private Call Booths</li>
                        </ul>
                    </div>

                    {/* Feature 2 */}
                    <div className="glass-panel p-8 rounded-2xl border-t border-white/10 hover:border-daino-cyan/50 transition-colors group">
                        <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-daino-cyan/20 transition-colors">
                            <Box className="text-white group-hover:text-daino-cyan" />
                        </div>
                        <h3 className="text-xl font-bold font-display mb-4">AI Logistics Hub</h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Automatisierter Warenumschlag für Logistikunternehmen.
                            Sichere Zwischenlagerung und Drohnen-Delivery-Port für Kleinteile.
                        </p>
                        <ul className="text-sm text-gray-500 space-y-2">
                            <li className="flex items-center gap-2"><ShieldCheck size={14}/> 24/7 Security</li>
                            <li className="flex items-center gap-2"><Box size={14}/> Robotic Sorting</li>
                        </ul>
                    </div>

                    {/* Feature 3 */}
                    <div className="glass-panel p-8 rounded-2xl border-t border-white/10 hover:border-daino-cyan/50 transition-colors group">
                        <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-daino-cyan/20 transition-colors">
                            <ShieldCheck className="text-white group-hover:text-daino-cyan" />
                        </div>
                        <h3 className="text-xl font-bold font-display mb-4">Driver Wellness</h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Premium-Duschkabinen, Schlaf-Pods und Gesundheits-Checkups für Berufskraftfahrer.
                            Ein ausgeruhter Fahrer ist ein sicherer Fahrer.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
};

export default Business;
