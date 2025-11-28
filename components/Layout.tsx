import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import { Menu, X, Circle, Zap, Hexagon, Leaf } from 'lucide-react';

const Layout = ({ children }: { children?: React.ReactNode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-daino-dark text-white overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-daino-dark/90 backdrop-blur-md py-4 shadow-lg border-b border-daino-cyan/20' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2 group">
             <div className="relative">
                <Hexagon className="text-daino-cyan w-8 h-8 group-hover:rotate-90 transition-transform duration-500" strokeWidth={2.5} />
                <Zap className="text-white w-4 h-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" fill="currentColor" />
             </div>
             <span className="font-display font-bold text-2xl tracking-wider text-white group-hover:text-glow transition-all">DAINO</span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-colors duration-200 uppercase hover:text-daino-cyan ${
                    isActive ? 'text-daino-cyan text-glow border-b-2 border-daino-cyan pb-1' : 'text-gray-300'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white hover:text-daino-cyan transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-daino-dark/95 backdrop-blur-xl border-b border-daino-cyan/30 py-4">
            <div className="flex flex-col space-y-4 px-6">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-lg font-medium transition-colors duration-200 ${
                      isActive ? 'text-daino-cyan' : 'text-gray-300'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#050B14] border-t border-white/10 pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                 <Hexagon className="text-daino-cyan w-6 h-6" />
                 <span className="font-display font-bold text-xl tracking-wider text-white">DAINO</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Redefining the journey with sustainable technology and premium alpine hospitality.
              </p>
              <div className="flex space-x-4">
                <Circle className="w-5 h-5 text-gray-500 hover:text-daino-cyan cursor-pointer transition-colors" />
                <Circle className="w-5 h-5 text-gray-500 hover:text-daino-cyan cursor-pointer transition-colors" />
                <Circle className="w-5 h-5 text-gray-500 hover:text-daino-cyan cursor-pointer transition-colors" />
              </div>
            </div>

            <div>
              <h4 className="font-display font-bold text-lg mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><NavLink to="/services" className="hover:text-daino-cyan transition-colors">Amenities</NavLink></li>
                <li><NavLink to="/sustainability" className="hover:text-daino-cyan transition-colors">Green Tech</NavLink></li>
                <li><NavLink to="/business" className="hover:text-daino-cyan transition-colors">Business Hub</NavLink></li>
                <li><NavLink to="/contact" className="hover:text-daino-cyan transition-colors">Directions</NavLink></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-lg mb-4 text-white">Innovation</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2"><Zap size={14} className="text-daino-cyan"/> Smart Charging</li>
                <li className="flex items-center gap-2"><Leaf size={14} className="text-daino-green"/> Zero Waste</li>
                <li className="flex items-center gap-2"><Hexagon size={14} className="text-daino-cyan"/> AI Logistics</li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-lg mb-4 text-white">Newsletter</h4>
              <p className="text-xs text-gray-500 mb-4">Bleiben Sie informiert über DAINO-News.</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-white/5 border border-white/10 text-white px-4 py-2 text-sm rounded-l-md focus:outline-none focus:border-daino-cyan w-full"
                />
                <button className="bg-daino-cyan text-daino-dark px-4 py-2 text-sm font-bold rounded-r-md hover:bg-cyan-400 transition-colors">
                  Join
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 text-center text-xs text-gray-600 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2025 DAINO GmbH. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="hover:text-gray-400 cursor-pointer">Privacy Policy</span>
              <span className="hover:text-gray-400 cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;