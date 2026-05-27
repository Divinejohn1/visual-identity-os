import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Services } from './components/Services';
import { Portfolio } from './sections/Portfolio';
import { Process } from './sections/Process';
import { Mentorship } from './sections/Mentorship';
import { Skills } from './sections/Skills';
import { Testimonials } from './sections/Testimonials';
import { Blog } from './sections/Blog';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { CustomCursor } from './components/CustomCursor';
import { Toaster } from 'sonner';
import { Instagram, Mail, Phone, ArrowUp } from 'lucide-react';

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-[1000] bg-[#050505] flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-heading font-bold tracking-tighter mb-4"
        >
          ALEX<span className="text-primary">.</span>
        </motion.div>
        <div className="h-1 w-20 bg-white/10 mx-auto rounded-full overflow-hidden">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="h-full w-full bg-primary"
          />
        </div>
      </div>
    </motion.div>
  );
};

const SocialDock = () => {
  return (
    <div className="fixed bottom-10 left-10 z-40 hidden xl:flex flex-col space-y-6">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.5 }}
        className="flex flex-col space-y-4"
      >
        {[
          { icon: Instagram, href: "#" },
          { icon: Mail, href: "#" },
          { icon: Phone, href: "#" }
        ].map((item, i) => (
          <a
            key={i}
            href={item.href}
            className="p-4 glass rounded-2xl text-foreground/60 hover:text-primary hover:bg-white/10 hover:-translate-y-1 transition-all"
          >
            <item.icon size={20} />
          </a>
        ))}
        <div className="w-px h-20 bg-gradient-to-b from-white/10 to-transparent mx-auto" />
      </motion.div>
    </div>
  );
};

const ScrollToTop = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 1000);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-10 right-10 z-40 p-4 bg-primary text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all"
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen selection:bg-primary/30">
      <CustomCursor />
      
      <AnimatePresence>
        {loading && <Preloader />}
      </AnimatePresence>

      <Toaster position="top-right" theme="dark" richColors />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Process />
        <Skills />
        <Mentorship />
        <Testimonials />
        <Blog />
        <Contact />
      </main>

      <Footer />
      <SocialDock />
      <ScrollToTop />

      {/* Background elements */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#050505]" />
        
        {/* Animated Background Gradients */}
        <motion.div 
          animate={{ 
            x: [0, 50, 0], 
            y: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[180px]" 
        />
        <motion.div 
          animate={{ 
            x: [0, -40, 0], 
            y: [0, 60, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] -right-[10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[180px]" 
        />
        <motion.div 
          animate={{ 
            x: [0, 20, 0], 
            y: [0, -40, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[10%] left-[20%] w-[45%] h-[45%] bg-accent/5 rounded-full blur-[180px]" 
        />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 contrast-150 brightness-100" />
      </div>
    </div>
  );
}

export default App;