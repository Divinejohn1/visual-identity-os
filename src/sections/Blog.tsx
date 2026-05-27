import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { ArrowUpRight } from 'lucide-react';

const POSTS = [
  {
    title: "The Future of Brand Storytelling in 2025",
    category: "Strategy",
    date: "May 12, 2024",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&auto=format&fit=crop&q=60"
  },
  {
    title: "Mastering Mobile Design: Pixellab vs Photoshop",
    category: "Tutorial",
    date: "Apr 28, 2024",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=60"
  },
  {
    title: "Why Visual Consistency is Your Brand's Best Friend",
    category: "Branding",
    date: "Mar 15, 2024",
    image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=800&auto=format&fit=crop&q=60"
  }
];

export const Blog = () => {
  return (
    <section id="blog" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeader
            title="Latest Insights"
            subtitle="Thoughts on design, brand strategy, and the evolving creative landscape."
          />
          <button className="px-8 py-4 glass rounded-full font-bold hover:bg-white/10 transition-all border border-white/10 flex items-center mb-16 md:mb-0">
            View All Insights <ArrowUpRight size={18} className="ml-2" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {POSTS.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/10] rounded-3xl overflow-hidden glass mb-6 border border-white/10 relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 glass rounded-full text-[10px] font-bold uppercase tracking-widest text-primary border border-white/10">
                    {post.category}
                  </span>
                </div>
              </div>
              <p className="text-xs text-foreground/40 font-bold uppercase tracking-widest mb-3">{post.date}</p>
              <h3 className="text-2xl font-bold font-heading group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};