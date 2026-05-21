/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Instagram, Clock, ExternalLink, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    const phone = BUSINESS_INFO.phone.replace(/\D/g, '');
    const text = `*New Cosmic Message*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Message:* ${formData.message}`;
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    
    window.open(whatsappUrl, '_blank');
    
    // Optional: Reset form or show success state
    setFormStatus('success');
    setTimeout(() => {
      setFormStatus('idle');
      setFormData({ name: '', email: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-orange-500 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Find Us</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase">Reach the <br /> Cosmic Hub</h2>
            
            <div className="grid sm:grid-cols-2 gap-8 mt-12 mb-12">
              <a 
                href={BUSINESS_INFO.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center text-orange-500 shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-all">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm mb-1 group-hover:text-orange-500 transition-colors">Our Location</h4>
                  <p className="text-zinc-500 text-xs leading-relaxed max-w-xs">{BUSINESS_INFO.address}</p>
                </div>
              </a>

              <a href={`mailto:${BUSINESS_INFO.email}`} className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center text-orange-500 shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-all">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm mb-1 group-hover:text-orange-500 transition-colors">Email Us</h4>
                  <p className="text-zinc-500 text-xs">{BUSINESS_INFO.email}</p>
                </div>
              </a>

              <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center text-orange-500 shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-all">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm mb-1 group-hover:text-orange-500 transition-colors">Phone Support</h4>
                  <p className="text-zinc-500 text-xs">{BUSINESS_INFO.phone}</p>
                </div>
              </a>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-zinc-900/40 border border-white/5 p-8 rounded-[2rem] relative overflow-hidden">
               {formStatus === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-12 text-center"
                >
                  <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-zinc-500 text-sm">We'll get back to you soon cosmic traveler.</p>
                </motion.div>
               ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      required
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-black/40 border border-white/5 rounded-xl px-5 py-3 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                    <input
                      required
                      type="email"
                      placeholder="Your Email"
                      className="w-full bg-black/40 border border-white/5 rounded-xl px-5 py-3 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <textarea
                    required
                    placeholder="Your Message..."
                    className="w-full bg-black/40 border border-white/5 rounded-xl px-5 py-3 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors h-24 resize-none"
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                  />
                  <button
                    disabled={formStatus === 'loading'}
                    className="w-full bg-white text-black py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-orange-500 hover:text-white transition-all disabled:opacity-50"
                  >
                    {formStatus === 'loading' ? <Loader2 className="animate-spin" size={18} /> : <><Send size={16} /> SEND MESSAGE</>}
                  </button>
                </form>
               )}
            </div>
          </motion.div>

          {/* Map Embed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] overflow-hidden border border-white/10 h-[500px] relative shadow-2xl"
          >
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14389.967664336156!2d85.0945!3d25.6191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed581ef55913e1%3A0xc3191f63ac438515!2sKosmicko%20Cafe%20%26%20Restaurant!5e0!3m2!1sen!2sin!4v1715800000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) grayscale(80%) brightness(80%) contrast(90%)' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-zinc-950/80 backdrop-blur-md rounded-2xl border border-white/5 flex justify-between items-center">
                <div>
                    <span className="text-[10px] text-orange-500 uppercase font-black tracking-widest">Patna's Hub</span>
                    <p className="text-white font-bold text-sm">Patliputra Colony, Patna</p>
                </div>
                <a 
                    href={BUSINESS_INFO.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-zinc-800 rounded-full text-white hover:bg-white hover:text-black transition-all"
                >
                    <ExternalLink size={20} />
                </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
