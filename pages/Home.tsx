import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Zap, Hexagon, Coffee } from 'lucide-react';
import { IMAGES } from '../constants';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.heroAerial}
            alt="DAINO Aerial View"
            className="w-full h-full object-cover opacity-80"
            style={{ objectPosition: 'top' }}
          />
          <div className="absolute inset-0 bg-hero-gradient" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-daino-cyan font-display tracking-widest text-lg md:text-xl mb-4 uppercase">
              Starke Pause für Ihre Reise
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black leading-tight mb-6">
              DEIN NAVI SAGT RASTPLATZ,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                DEIN HERZ SAGT: DAINO
              </span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
              Lade den Akku, lade den Geist. DAINO ist, was weiterreist.
              Einzigartig. Nachhaltig. Modern.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <Link
                to="/services"
                className="group relative px-8 py-4 bg-daino-cyan text-daino-dark font-display font-bold rounded overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  MEHR ERFAHREN <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </Link>

              <Link
                to="/contact"
                className="px-8 py-4 border border-white text-white font-display font-bold rounded hover:bg-white/10 transition-colors"
              >
                JETZT ROUTE PLANEN
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
        >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                <div className="w-1 h-2 bg-white/50 rounded-full" />
            </div>
        </motion.div>
      </section>

      {/* Overview Grid */}
      <section className="py-24 bg-daino-dark">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { title: "Nachhaltigkeit", icon: Leaf, img: IMAGES.greenRoof, desc: "2+ Hektar Grünfläche" },
                    { title: "Technologie", icon: Zap, img: IMAGES.smartBins, desc: "Smart Waste Management" },
                    { title: "Komfort", icon: Coffee, img: IMAGES.interiorMall, desc: "Premium Gastronomie" },
                    { title: "Business Hub", icon: Hexagon, img: IMAGES.aiLogistics, desc: "KI-gesteuerte Logistik" }
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative h-80 rounded-xl overflow-hidden cursor-pointer border-glow border border-transparent"
                    >
                        <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-6 w-full">
                            <div className="w-12 h-12 bg-daino-cyan/20 backdrop-blur rounded-lg flex items-center justify-center mb-4 text-daino-cyan">
                                <item.icon size={24} />
                            </div>
                            <h3 className="font-display font-bold text-xl mb-1">{item.title}</h3>
                            <p className="text-gray-400 text-sm">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Bridge/Architecture Feature */}
      <section className="py-24 relative overflow-hidden bg-[#050B14]">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                 <h4 className="text-daino-green font-mono mb-2 text-sm uppercase tracking-wider">Innovation trifft Infrastruktur</h4>
                 <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 leading-tight">Die Brücke in die <span className="text-daino-cyan">Zukunft</span></h2>
                 <p className="text-gray-400 leading-relaxed mb-8">
                    DAINO ist nicht nur ein Gebäude, sondern ein lebendiger Organismus, der sich über die Autobahn spannt.
                    Unsere Architektur verbindet Funktionalität mit ästhetischer Brillanz und ökologischer Verantwortung.
                 </p>
                 <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
                     <div>
                         <div className="text-3xl font-display font-bold text-white mb-1">100%</div>
                         <div className="text-xs text-gray-500 uppercase">Solarenergie</div>
                     </div>
                     <div>
                         <div className="text-3xl font-display font-bold text-white mb-1">500+</div>
                         <div className="text-xs text-gray-500 uppercase">Ladepunkte</div>
                     </div>
                     <div>
                         <div className="text-3xl font-display font-bold text-white mb-1">0%</div>
                         <div className="text-xs text-gray-500 uppercase">Emissionen</div>
                     </div>
                 </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-daino-cyan/10"
            >
                <img src={IMAGES.heroAlt} alt="Architecture" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-daino-cyan/20 to-transparent mix-blend-overlay" />
            </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
