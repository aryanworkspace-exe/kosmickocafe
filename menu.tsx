/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, ChevronRight } from 'lucide-react';
import { MENU_ITEMS, MenuItem } from '../constants';

export default function MenuSection({ onOrderClick }: { onOrderClick: () => void }) {
  const categories = Array.from(new Set(MENU_ITEMS.map(item => item.category)));
  const [activeCategory, setActiveCategory] = useState<string>(categories[0] || 'Starters');

  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  // Group by subCategory
  const subCategories = Array.from(new Set(filteredItems.map(item => item.subCategory || 'General')));

  return (
    <section id="menu" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
             <span className="text-orange-500 font-bold uppercase tracking-[0.3em] text-xs mb-4 block underline-offset-8">Curated Collection</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">THE COSMIC MENU</h2>
            <p className="text-zinc-500 max-w-xl mx-auto font-light">Explore our fusion of global flavors and cosmic presentation.</p>
          </motion.div>
        </div>

        {/* Categories Tab */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-2xl text-[10px] md:text-xs font-black tracking-[0.2em] transition-all uppercase ${
                activeCategory === cat
                  ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/20'
                  : 'bg-zinc-900/50 text-zinc-500 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Content */}
        <div className="space-y-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {subCategories.map((sub) => {
                const subItems = filteredItems.filter(item => (item.subCategory || 'General') === sub);
                return (
                  <div key={sub} className="mb-16 last:mb-0">
                    {sub !== 'General' && (
                      <h3 className="text-orange-500 font-black text-xl mb-8 tracking-tighter uppercase flex items-center gap-4">
                        <span className="w-8 h-[2px] bg-orange-600"></span>
                        {sub}
                      </h3>
                    )}
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {subItems.map((item) => (
                        <motion.div
                          key={item.id}
                          className="group bg-zinc-900/40 border border-white/5 rounded-3xl p-6 hover:border-orange-500/20 transition-all flex flex-col relative overflow-hidden"
                        >
                          {/* Item Header */}
                          <div className="flex justify-between items-start mb-4">
                            <div className="flex-grow pr-4">
                              <div className="flex items-center gap-2 mb-1">
                                {item.isVeg !== undefined && (
                                  <div className={`w-3 h-3 flex items-center justify-center border ${item.isVeg ? 'border-green-600' : 'border-red-600'} p-[1px]`}>
                                    <div className={`w-full h-full rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`}></div>
                                  </div>
                                )}
                                <h4 className="text-white font-bold text-lg group-hover:text-orange-400 transition-colors uppercase leading-tight">
                                  {item.name}
                                </h4>
                              </div>
                              <p className="text-zinc-500 text-xs font-light line-clamp-2">{item.description}</p>
                            </div>
                            <div className="text-orange-500 font-black text-lg shrink-0">
                              {item.price}
                            </div>
                          </div>

                          {item.image && (
                            <div className="relative aspect-video rounded-2xl overflow-hidden mb-6">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                          )}
                          
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              onOrderClick();
                            }}
                            className="mt-auto w-full py-3 bg-zinc-800/50 text-white rounded-xl flex items-center justify-center gap-2 font-bold text-[10px] tracking-widest border border-white/5 group-hover:bg-orange-600 group-hover:border-transparent transition-all"
                          >
                            <ShoppingBag size={14} />
                            ORDER ON ZOMATO / SWIGGY
                          </button>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-24 text-center">
            <div className="inline-block p-1 bg-zinc-900 border border-white/5 rounded-full">
              <button
                  onClick={onOrderClick}
                  className="px-10 py-5 bg-white text-black rounded-full font-black tracking-widest text-xs hover:bg-orange-600 hover:text-white transition-all flex items-center gap-3"
              >
                  VIEW FULL DIGITAL MENU <ChevronRight size={18} />
              </button>
            </div>
        </div>
      </div>
    </section>
  );
}
