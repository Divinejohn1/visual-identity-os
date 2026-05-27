import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO } from '../constants/content';
import { SectionHeader } from '../components/SectionHeader';
import { Maximize2, X } from 'lucide-react';

const categories = ["All", "Branding", "Social Media", "Flyers", "UI Concepts"];

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<null | typeof PORTFOLIO[0]>(null);

  const filteredItems = activeCategory === "All"
    ? PORTFOLIO
    : PORTFOLIO.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-black/40">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Curated Works"
          subtitle="A selection of visual experiences crafted with precision and passion."
          centered
        />

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'glass hover:bg-white/10'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-square rounded-3xl overflow-hidden glass cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">{item.category}</p>
                  <h3 className="text-2xl font-bold font-heading">{item.title}</h3>
                  <p className="text-white/60 text-sm mt-2 line-clamp-2">{item.description}</p>
                  <div className="absolute top-6 right-6 p-3 rounded-full glass opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500">
                    <Maximize2 size={20} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-10 right-10 p-4 rounded-full glass hover:bg-white/10 transition-colors">
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="lg:col-span-2 rounded-3xl overflow-hidden glass p-2">
                <img src={selectedImage.image} alt={selectedImage.title} className="w-full h-auto rounded-2xl" />
              </div>
              <div className="space-y-6">
                <span className="text-primary font-bold tracking-widest uppercase text-xs">{selectedImage.category}</span>
                <h2 className="text-4xl font-heading font-bold">{selectedImage.title}</h2>
                <p className="text-foreground/60 leading-relaxed">{selectedImage.description}</p>
                <div className="pt-8 border-t border-white/10">
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="w-full py-4 glass rounded-full font-bold hover:bg-white/10 transition-colors"
                  >
                    Close Project
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};