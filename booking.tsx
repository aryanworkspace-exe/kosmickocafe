/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Users, Clock, CheckCircle2, Loader2 } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export default function Booking() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2',
    date: '',
    time: '',
    request: ''
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      // 1. Send to Backend (Optional but good for records)
      await fetch('/api/book-table', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }).catch(err => console.error('Backend logging failed:', err));

      // 2. Prepare WhatsApp message
      const message = `*NEW TABLE RESERVATION*\n\n` +
        `*Name:* ${formData.name}\n` +
        `*Phone:* ${formData.phone}\n` +
        `*Guests:* ${formData.guests}\n` +
        `*Date:* ${formData.date}\n` +
        `*Time:* ${formData.time}\n` +
        `*Request:* ${formData.request || 'None'}\n\n` +
        `Sent from Kosmicko Cafe Website`;

      const whatsappNumber = "918102754047";
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

      // 3. Open WhatsApp
      window.open(whatsappUrl, '_blank');

      setStatus('success');
      // Reset after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setFormData({ name: '', phone: '', guests: '2', date: '', time: '', request: '' });
      }, 5000);

    } catch (error) {
      console.error('Booking Error:', error);
      alert('Something went wrong. Please try again or call us.');
      setStatus('idle');
    }
  };

  return (
    <section id="book-table" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(234,88,12,0.05)_0%,transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <span className="text-orange-500 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Reservations</span>
            <h2 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase">Secure Your <br /> Table</h2>
            <p className="text-zinc-400 text-lg font-light mb-12 max-w-md">
              Planning a date, a celebration, or a chill session? Reserve your spot in the cosmic realm in seconds.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center text-orange-500 shrink-0">
                  <Clock size={28} />
                </div>
                <div>
                  <h4 className="text-white font-bold">Fast Confirmation</h4>
                  <p className="text-zinc-500 text-sm">We'll get back to you within 30 minutes.</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center text-orange-500 shrink-0">
                  <Users size={28} />
                </div>
                <div>
                  <h4 className="text-white font-bold">Group Friendly</h4>
                  <p className="text-zinc-500 text-sm">Special arrangements for birthdays & groups.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 p-6 md:p-10 rounded-[2.5rem] shadow-2xl relative"
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="h-full flex flex-col items-center justify-center py-20 text-center"
                >
                  <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center text-white mb-8">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-4">Request Received!</h3>
                  <p className="text-zinc-400 max-w-sm">
                    Your reservation request has been sent successfully. We will call you at <span className="text-white font-bold">{formData.phone}</span> to confirm.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-10 px-8 py-3 border border-white/10 rounded-full text-white text-sm hover:bg-white hover:text-black transition-all"
                  >
                    Done
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest px-1">Name</label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest px-1">Phone</label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 00000 00000"
                        className="w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest px-1">Guests</label>
                      <select
                        className="w-full bg-black/40 border border-white/5 rounded-2xl px-4 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors appearance-none"
                        value={formData.guests}
                        onChange={e => setFormData({ ...formData, guests: e.target.value })}
                      >
                        {[1, 2, 3, 4, 5, "6+"].map(n => (
                          <option key={n} value={n} className="bg-zinc-900">{n} Guests</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest px-1">Date</label>
                      <input
                        required
                        type="date"
                        className="w-full bg-black/40 border border-white/5 rounded-2xl px-4 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors"
                        value={formData.date}
                        onChange={e => setFormData({ ...formData, date: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest px-1">Time</label>
                      <input
                        required
                        type="time"
                        className="w-full bg-black/40 border border-white/5 rounded-2xl px-4 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors"
                        value={formData.time}
                        onChange={e => setFormData({ ...formData, time: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest px-1">Special Request</label>
                    <textarea
                      placeholder="Birthday celebration, dietary requirements, etc."
                      className="w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-orange-500 transition-colors h-32 resize-none"
                      value={formData.request}
                      onChange={e => setFormData({ ...formData, request: e.target.value })}
                    />
                  </div>

                  <button
                    disabled={status === 'loading'}
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all transform active:scale-95 disabled:opacity-50 disabled:active:scale-100 shadow-xl shadow-orange-600/20"
                  >
                    {status === 'loading' ? (
                      <Loader2 className="animate-spin" />
                    ) : (
                      'RESERVE TABLE'
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
