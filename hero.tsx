/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ExternalLink, ShoppingBag } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

interface HeroProps {
  onOrderClick: () => void;
  onExploreClick: () => void;
  onBookClick: () => void;
}

export default function Hero({ onOrderClick, onExploreClick, onBookClick }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen md:h-screen w-full overflow-hidden flex items-center justify-center py-20">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <img
          src="./images/night-life.webp"
          alt="Kosmicko Cafe Luxury Interior"
          className="w-full h-full object-cover scale-110 brightness-[0.45] contrast-[1.1] saturate-[0.8]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/20 to-black/90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_20%,rgba(0,0,0,0.7)_100%)]"></div>
      </div>

      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse delay-700"></div>

      <div className="relative z-10 text-center px-6 max-w-4xl pt-16 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-6">
            Welcome to the Cosmic Realm
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter leading-[0.95] md:leading-[0.9]">
            EXPERIENCE THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-600 to-red-600">
              COSMIC TASTE
            </span>
          </h1>
          <p className="text-base md:text-xl text-white/60 mb-8 md:mb-10 max-w-2xl mx-auto font-light leading-relaxed px-4 md:px-0">
            A celestial blend of premium culinary art, immersive ambiance, and curated music. 
            Patna's most exclusive luxury cafe experience awaits you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 px-8 sm:px-0">
            <button
              onClick={onOrderClick}
              className="w-full sm:w-auto group relative px-8 py-4 bg-orange-600 text-white font-bold rounded-full overflow-hidden transition-all hover:bg-orange-700 flex items-center justify-center gap-2 z-10"
            >
              <ShoppingBag size={18} />
              ORDER NOW
              <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </button>
            
            <button
              onClick={onExploreClick}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 z-10"
            >
              EXPLORE MENU
            </button>

            <button
              onClick={onBookClick}
              className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-orange-50 transition-all flex items-center justify-center gap-2 z-10"
            >
              BOOK TABLE
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll to Discover</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent"></div>
      </motion.div>
    </section>
  );
}
