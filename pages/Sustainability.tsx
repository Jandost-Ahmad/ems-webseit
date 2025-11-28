import React from 'react';
import { IMAGES } from '../constants';
import { EnergyChart, WasteChart } from '../components/SustainabilityChart';
import { Leaf, Droplets, Wind, Recycle } from 'lucide-react';

const Sustainability = () => {
  return (
    <div className="min-h-screen bg-daino-dark">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img src={IMAGES.greenRoof} alt="Green Roof" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-daino-dark to-transparent" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl font-display font-bold mb-4 text-daino-green">Green <span className="text-white">Innovation</span></h1>
          <p className="text-xl text-gray-300 max-w-xl">
             Wir erzeugen mehr Energie als wir verbrauchen. Ein lebendiges Ökosystem an der Autobahn.
          </p>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
            <div className="mb-12 flex items-end justify-between">
                <div>
                    <h2 className="text-2xl font-display font-bold text-white">Live Sustainability Dashboard</h2>
                    <p className="text-gray-400 text-sm">Real-time data from site sensors</p>
                </div>
                <div className="flex gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    <span className="text-xs text-gray-500 uppercase font-mono">Live Connection</span>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
                {/* Energy Chart */}
                <div className="glass-panel p-6 rounded-xl border border-white/10">
                    <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                        <Wind className="text-daino-cyan" size={20} /> Energy Production vs. Usage
                    </h3>
                    <EnergyChart />
                </div>

                {/* Waste Chart */}
                <div className="glass-panel p-6 rounded-xl border border-white/10">
                    <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                        <Recycle className="text-daino-green" size={20} /> Circular Economy Stats
                    </h3>
                    <WasteChart />
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                    { label: "CO2 Saved Today", value: "4.2 Tons", icon: Leaf, color: "text-daino-green" },
                    { label: "Water Recycled", value: "12,000 L", icon: Droplets, color: "text-blue-400" },
                    { label: "Trees Planted", value: "850+", icon: Leaf, color: "text-green-600" },
                    { label: "Solar Capacity", value: "1.2 GW", icon: Wind, color: "text-yellow-400" },
                ].map((stat, idx) => (
                    <div key={idx} className="glass-panel p-6 rounded-xl text-center">
                        <stat.icon className={`mx-auto mb-3 ${stat.color}`} size={28} />
                        <div className="text-2xl font-bold font-display text-white mb-1">{stat.value}</div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Info Sections */}
      <section className="py-24 bg-[#050B14]">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                 <div>
                     <h2 className="text-3xl font-display font-bold mb-6">Biodiversität auf dem Dach</h2>
                     <p className="text-gray-400 mb-6 leading-relaxed">
                        Unsere 2 Hektar große Dachfläche ist nicht nur für Solarpaneele reserviert.
                        Ein ausgeklügeltes System aus extensiver Begrünung schafft Lebensraum für Insekten und Vögel.
                        Das Regenwasser wird gesammelt, gefiltert und für die sanitären Anlagen wiederverwendet.
                     </p>
                 </div>
                 <div className="relative">
                     <img src={IMAGES.greenRoof} className="rounded-xl shadow-2xl shadow-daino-green/10 opacity-80" alt="Biodiversity" />
                     <div className="absolute -bottom-6 -left-6 glass-panel p-6 rounded-lg max-w-xs">
                        <p className="text-daino-green font-mono text-sm">"Natur und Technik sind bei DAINO keine Gegensätze, sondern Partner."</p>
                     </div>
                 </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;
