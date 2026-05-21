/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Rohit Shashtri",
      role: "Local Guide",
      text: "Easily the best cafe in Patna right now. The ambiance is top-notch, feels very premium and the food is actually gourmet, not just overpriced snacks.",
      rating: 5
    },
    {
      name: "Ananya Mehera",
      role: "Designer",
      text: "The 'cosmic' vibe is real! Love the lighting and the music selection. Perfect place for weekend chill with friends. Their burgers are a must try.",
      rating: 5
    },
    {
      name: "Vikram Singh",
      role: "Entrepreneur",
      text: "Professional service and very elegant interiors. Good to see such high standards in Patliputra Colony. Excellent for business coffee meetings too.",
      rating: 4
    }
  ];

  return (
    <section className="py-24 bg-black overflow-hidden relative">
        <div className="absolute top-0 right-0 p-40 bg-orange-600/5 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-orange-500 font-bold uppercase tracking-[0.3em] text-xs mb-4 block underline-offset-8">Guest Stories</span>
            <h2 className="text-3xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase">Loved by many.</h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-zinc-900/40 backdrop-blur-md border border-white/5 p-10 rounded-[2.5rem] relative group hover:border-orange-500/30 transition-all duration-500"
            >
              <Quote size={40} className="text-orange-500/10 absolute top-8 right-8 group-hover:text-orange-500/20 transition-all" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className={i < review.rating ? "fill-orange-500 text-orange-500" : "text-zinc-700"} />
                ))}
              </div>

              <p className="text-zinc-300 italic text-lg leading-relaxed mb-8">"{review.text}"</p>
              
              <div>
                <h4 className="text-white font-bold">{review.name}</h4>
                <p className="text-zinc-500 text-sm tracking-widest uppercase mt-1">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
