/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { GALLERY_IMAGES } from '../constants';

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-orange-500 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Visual Journey</span>
            <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter uppercase">Cosmicko <br /> Scenes</h2>
          </div>
          <p className="text-zinc-500 max-w-sm font-light text-center md:text-right text-[10px]">
            Captured moments of flavor, ambiance, and cosmic energy. Use the edit tool to personalize these views with your cafe's photos.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_IMAGES.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group rounded-3xl overflow-hidden cursor-pointer bg-zinc-900 border border-white/5"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8 pointer-events-none">
                <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-1">{img.title}</p>
                <div className="h-[1px] w-0 group-hover:w-full bg-orange-500 transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

