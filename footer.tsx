/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Instagram, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <h2 className="text-3xl font-black text-white mb-6 tracking-tighter">KOSMICKO<span className="text-orange-500">.</span></h2>
            <p className="text-zinc-500 max-w-sm font-light leading-relaxed mb-8">
              Experience the pinnacle of luxury cafe culture. Gourmet food, celestial vibes, and unforgettable moments — curated specifically for you.
            </p>
            <div className="flex">
              <a
                href={BUSINESS_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-3.5 rounded-2xl bg-gradient-to-br from-[#b02eb1] via-[#e22d4f] to-[#f8952d] text-white hover:scale-105 transition-all duration-300 shadow-[0_10px_25px_-10px_rgba(226,45,79,0.4)] group overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Instagram size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-black tracking-widest uppercase text-xs">Follow Us</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Menu', 'Gallery', 'Book Table'].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-zinc-500 hover:text-orange-500 transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Reservation</h4>
            <p className="text-zinc-500 text-sm mb-4 leading-relaxed">
              For events, large groups or special arrangements, please call us directly.
            </p>
            <p className="text-orange-500 font-bold text-lg">{BUSINESS_INFO.phone}</p>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-xs font-light tracking-widest uppercase">
            © {currentYear} Kosmicko Cafe & Restaurant. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 text-zinc-600 text-xs font-light tracking-widest uppercase">
            Designed with <Heart size={12} className="text-red-600 fill-red-600" /> by Premium Team
          </div>
        </div>
      </div>
    </footer>
  );
}
