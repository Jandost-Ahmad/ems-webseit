import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '../constants';
import { Truck, ShoppingBag, Gamepad2, Recycle, BatteryCharging, Utensils, Coffee } from 'lucide-react';

const Services = () => {
  return (
    <div className="min-h-screen bg-daino-dark">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-end pb-24">
        <div className="absolute inset-0 z-0">
          <img src={IMAGES.solarCanopy} alt="Solar Charging" className="w-full h-full object-cover" style={{ objectPosition: 'center top' }} />
          <div className="absolute inset-0 bg-gradient-to-t from-daino-dark via-daino-dark/60 to-transparent" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Services & <span className="text-daino-cyan">Amenities</span></h1>
          <p className="text-xl text-gray-300 max-w-2xl">Modernste Infrastruktur für Fahrer, Fahrzeuge und die Umwelt.</p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24">
        <div className="container mx-auto px-6">
            {/* E-Mobility */}
            <div className="grid md:grid-cols-2 gap-12 mb-32 items-center">
                <div className="order-2 md:order-1">
                    <div className="w-16 h-16 bg-daino-cyan/10 rounded-full flex items-center justify-center text-daino-cyan mb-6">
                        <Truck size={32} />
                    </div>
                    <h2 className="text-3xl font-display font-bold mb-4">Elektromobilität 2.0</h2>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                        Von PKW bis Schwerlastverkehr – unsere Ladeinfrastruktur setzt neue Maßstäbe.
                        Mit über 500 Ladepunkten und speziellen Megawatt-Chargern für E-Trucks ist DAINO
                        das Herzstück der elektrischen Logistik.
                    </p>
                    <ul className="space-y-3 mb-8">
                        <li className="flex items-center gap-3 text-gray-300"><BatteryCharging className="text-daino-green" size={18}/> Megawatt Charging System (MCS)</li>
                        <li className="flex items-center gap-3 text-gray-300"><BatteryCharging className="text-daino-green" size={18}/> Überdachte Solar-Ladeplätze</li>
                        <li className="flex items-center gap-3 text-gray-300"><BatteryCharging className="text-daino-green" size={18}/> Automatisierte Abrechnung</li>
                    </ul>
                </div>
                <div className="order-1 md:order-2 h-[400px] rounded-2xl overflow-hidden border border-white/10 relative">
                    <img src={IMAGES.truckCharging} alt="E-Truck Charging" className="w-full h-full object-cover" />
                    <div className="absolute bottom-4 right-4 bg-black/80 px-4 py-2 rounded text-xs text-daino-cyan border border-daino-cyan/30">
                        LIVE: 42/50 Chargers Active
                    </div>
                </div>
            </div>

            {/* Gastronomy */}
            <div className="grid md:grid-cols-2 gap-12 mb-32 items-center">
                <div className="h-[400px] rounded-2xl overflow-hidden border border-white/10">
                    <img src={IMAGES.interiorMall} alt="Interior Mall" className="w-full h-full object-cover" />
                </div>
                <div>
                    <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center text-purple-400 mb-6">
                        <Utensils size={32} />
                    </div>
                    <h2 className="text-3xl font-display font-bold mb-4">Gastronomie & Shopping</h2>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                        Erleben Sie regionale Alpenküche fusioniert mit internationaler Schnelligkeit.
                        Unsere Shopping-Mall bietet alles von Reisebedarf bis zu Premium-Marken.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="glass-panel p-4 rounded-lg">
                            <ShoppingBag className="text-white mb-2" size={20} />
                            <h4 className="font-bold text-sm">24/7 Boutique</h4>
                        </div>
                        <div className="glass-panel p-4 rounded-lg">
                            <Coffee className="text-white mb-2" size={20} />
                            <h4 className="font-bold text-sm">Premium Roastery</h4>
                        </div>
                    </div>
                </div>
            </div>

            {/* Entertainment */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div className="order-2 md:order-1">
                    <div className="w-16 h-16 bg-pink-500/10 rounded-full flex items-center justify-center text-pink-400 mb-6">
                        <Gamepad2 size={32} />
                    </div>
                    <h2 className="text-3xl font-display font-bold mb-4">Future Dome</h2>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                        Tauchen Sie ab in Mixed-Reality Welten während Ihr Fahrzeug lädt.
                        Der Future Dome bietet Unterhaltung für Kinder und Entspannungslounges für Erwachsene.
                    </p>
                    <button className="text-daino-cyan border-b border-daino-cyan pb-1 hover:text-white hover:border-white transition-colors">
                        Programm ansehen
                    </button>
                </div>
                <div className="order-1 md:order-2 h-[400px] rounded-2xl overflow-hidden border border-white/10">
                    <img src={IMAGES.futureDome} alt="Future Dome" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Services;