import React from 'react';
import { motion } from 'framer-motion';
import { DESIGNER_INFO, STATS } from '../constants/content';
import { SectionHeader } from '../components/SectionHeader';

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden glass p-2 border border-white/10">
              <img
                src={DESIGNER_INFO.portrait}
                alt={DESIGNER_INFO.name}
                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Floating stats card */}
            <div className="absolute -bottom-10 -right-10 glass p-8 rounded-3xl border border-white/10 hidden md:block">
              <div className="grid grid-cols-2 gap-8">
                {STATS.slice(0, 2).map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl font-bold font-heading text-primary">{stat.value}</p>
                    <p className="text-[10px] text-foreground/60 uppercase tracking-widest">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div>
            <SectionHeader
              title="Creative vision, strategic execution."
              subtitle="I help brands bridge the gap between imagination and reality through cinematic visual storytelling."
            />
            <div className="space-y-6 text-foreground/70 leading-relaxed text-lg">
              <p>
                My journey as a designer started with a simple passion for creating visuals that evoke emotion. Today, I specialize in building cohesive brand identities that not only look stunning but also serve a strategic purpose.
              </p>
              <p>
                From mobile graphic design using Pixellab to high-end creative direction, I bring a unique perspective to every project. I believe that consistency and bold visuals are the keys to building a memorable brand in the digital age.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-12">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold font-heading">{stat.value}</p>
                  <p className="text-[10px] text-foreground/50 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};