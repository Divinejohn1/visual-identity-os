import React from 'react';
import { motion } from 'framer-motion';
import { DESIGNER_INFO } from '../constants/content';
import { ArrowRight, ChevronDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-primary mb-6 glass">
              Available for new projects
            </span>
            <h1 className="text-5xl md:text-8xl font-heading font-bold leading-tight mb-8">
              {DESIGNER_INFO.tagline.split(' ').map((word, i) => (
                <span key={i} className={i > 4 ? 'text-gradient-blue' : ''}>
                  {word}{' '}
                </span>
              ))}
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed">
              {DESIGNER_INFO.subtext}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="#portfolio"
                className="group relative px-8 py-4 bg-white text-black rounded-full font-bold overflow-hidden transition-all hover:scale-105"
              >
                <span className="relative z-10 flex items-center">
                  View Portfolio <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a
                href="#contact"
                className="px-8 py-4 glass hover:bg-white/10 rounded-full font-bold transition-all hover:scale-105 border border-white/10"
              >
                Work With Me
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-foreground/30"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};