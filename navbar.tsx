/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Phone, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Book Table', href: '#book-table' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md py-3 md:py-4' : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tighter text-white font-sans"
        >
          KOSMICKO<span className="text-orange-500">.</span>
        </motion.div>

        {/* Desktop Menu - Hidden on Desktop below LG to prevent overlap on tablets */}
        <div className="flex items-center space-x-4 md:space-x-8">
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-xs font-medium text-white/70 hover:text-orange-500 transition-colors uppercase tracking-widest"
              >
                {link.name}
              </button>
            ))}
          </div>

          <a
            href="#book-table"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#book-table');
            }}
            className="hidden sm:block bg-orange-600 hover:bg-orange-700 text-white px-5 md:px-8 py-2 md:py-3 rounded-full text-[10px] md:text-sm font-black tracking-widest transition-all transform hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            RESERVE
          </a>

          {/* Mobile Toggle - Shown below LG to accommodate tablets */}
          <button
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-b border-white/10"
          >
            <div className="flex flex-col p-8 space-y-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-2xl font-black text-white text-left hover:text-orange-500 transition-colors uppercase tracking-tighter"
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-6 flex items-center justify-between border-t border-white/5">
                <div className="flex space-x-6">
                  <a href={BUSINESS_INFO.instagram} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                    <Instagram size={24} />
                  </a>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="text-white/70 hover:text-white transition-colors">
                    <Phone size={24} />
                  </a>
                </div>
                <div className="text-[10px] text-zinc-600 font-bold tracking-widest">
                  PATNA, INDIA
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
