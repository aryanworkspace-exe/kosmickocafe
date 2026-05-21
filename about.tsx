/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Star, Utensils, Music, Users } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Utensils className="text-orange-500" />,
      title: "Gourmet Kitchen",
      desc: "Our chefs blend cosmic creativity with premium ingredients to serve Patna's finest delicacies."
    },
    {
      icon: <Music className="text-orange-500" />,
      title: "Immersive Beats",
      desc: "Carefully curated playlists and live sets that elevate your dining experience to another dimension."
    },
    {
      icon: <Users className="text-orange-500" />,
      title: "Community First",
      desc: "A sanctuary for friends, families, and creators to chill, connect, and celebrate moments."
    },
    {
      icon: <Star className="text-orange-500" />,
      title: "Luxury Vibes",
      desc: "Modern aesthetic interior inspired by luxury cafes in Dubai and Mumbai right here in Patna."
    }
  ];

  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-orange-500 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Our Story</span>
            <h2 className="text-3xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tighter uppercase md:normal-case">
              BEYOND THE <br />
              <span className="text-zinc-700">ORDINARY CAFE.</span>
            </h2>
            <div className="space-y-6 text-zinc-400 text-lg font-light leading-relaxed">
              <p>
                Kosmicko Cafe isn't just about coffee or food; it's a movement. Born from a vision to bring 
                world-class luxury cafe culture to the heart of Patna, we've created a space that 
                transcends the mundane.
              </p>
              <p>
                Located in the premium Patliputra Colony, we offer a multi-sensory journey. 
                From the soft neon glow of our interiors to the meticulously plated gourmet dishes, 
                every detail is designed for the modern youth and those who appreciate the finer things.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 mt-12">
              {features.map((item, idx) => (
                <div key={idx} className="group">
                  <div className="mb-4 p-3 rounded-2xl bg-zinc-900 w-fit group-hover:bg-orange-600/20 transition-colors">
                    {item.icon}
                  </div>
                  <h4 className="text-white font-bold mb-2">{item.title}</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="./images/cafe-atmosphere.webp"
                alt="Cafe Atmosphere"
                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8 bg-zinc-900/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border-2 border-orange-500 flex items-center justify-center text-white font-bold">
                    4.8
                  </div>
                  <div>
                    <div className="flex gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-orange-500 text-orange-500" />
                      ))}
                    </div>
                    <p className="text-white font-bold text-sm">Patna's Top Rated Cafe</p>
                    <p className="text-zinc-400 text-xs text-uppercase tracking-widest mt-1">Gourmet & Vibe Excellence</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative background elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-600/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-600/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
