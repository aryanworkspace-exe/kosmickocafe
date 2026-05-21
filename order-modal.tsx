/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { X, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OrderModal({ isOpen, onClose }: OrderModalProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 cursor-default">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
      ></motion.div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-zinc-900 border border-white/10 p-8 md:p-12 rounded-[2.5rem] max-w-md w-full shadow-2xl overflow-hidden z-10"
      >
        {/* Glow effect */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-orange-600/20 rounded-full blur-[60px]"></div>

        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-4 hover:bg-white/10 rounded-full text-zinc-400 hover:text-white transition-all z-20 touch-manipulation"
          aria-label="Close modal"
        >
          <X size={28} />
        </button>

        <div className="mb-10 pr-12">
          <h2 className="text-3xl font-black text-white mb-3 tracking-tight">Order Online</h2>
          <p className="text-zinc-400 text-sm font-light">Choose your preferred delivery partner for celestial comfort at home.</p>
        </div>

        <div className="grid gap-4">
          <a
            href={BUSINESS_INFO.swiggy}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-6 bg-zinc-800 rounded-2xl border border-zinc-700 hover:border-orange-500/50 hover:bg-zinc-800/80 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#FC8019]/10 rounded-xl flex items-center justify-center text-[#FC8019]">
                <ShoppingBagIcon />
              </div>
              <span className="text-white font-bold text-lg">Swiggy</span>
            </div>
            <ExternalLink size={20} className="text-zinc-500 group-hover:text-white transition-colors" />
          </a>

          <a
            href={BUSINESS_INFO.zomato}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-6 bg-zinc-800 rounded-2xl border border-zinc-700 hover:border-red-500/50 hover:bg-zinc-800/80 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#E23744]/10 rounded-xl flex items-center justify-center text-[#E23744]">
                <ShoppingBagIcon />
              </div>
              <span className="text-white font-bold text-lg">Zomato</span>
            </div>
            <ExternalLink size={20} className="text-zinc-500 group-hover:text-white transition-colors" />
          </a>
        </div>

        <p className="mt-8 text-center text-xs text-zinc-500 uppercase tracking-widest">
            Freshly prepared • Delivered with care
        </p>
      </motion.div>
    </div>
  );
}

function ShoppingBagIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
    </svg>
  );
}
