/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import MenuSection from './components/menu';
import Gallery from './components/gallery';
import Booking from './components/booking';
import Testimonials from './components/testimonials';
import Contact from './components/contact';
import Footer from './components/footer';
import OrderModal from './components/order-modal';

export default function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (isOrderModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOrderModalOpen]);

  return (
    <div className="bg-black min-h-screen selection:bg-orange-500 selection:text-white font-sans overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero 
          onOrderClick={() => setIsOrderModalOpen(true)}
          onExploreClick={() => scrollToSection('menu')}
          onBookClick={() => scrollToSection('book-table')}
        />
        
        <About />
        
        <MenuSection onOrderClick={() => setIsOrderModalOpen(true)} />
        
        <Gallery />
        
        <Booking />
        
        <Testimonials />
        
        <Contact />
      </main>

      <Footer />

      <AnimatePresence>
        {isOrderModalOpen && (
          <OrderModal 
            isOpen={isOrderModalOpen} 
            onClose={() => setIsOrderModalOpen(false)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}

