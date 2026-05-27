import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants/content';
import { SectionHeader } from '../components/SectionHeader';

export const Skills = () => {
  return (
    <section className="py-24 bg-black/40">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SectionHeader
            title="Design Mastery & Technical Edge"
            subtitle="Equipped with high-end tools and strategic thinking to deliver top-tier results."
          />

          <div className="space-y-8">
            {SKILLS.map((skill, index) => (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-3">
                  <span className="font-bold text-sm uppercase tracking-widest">{skill.name}</span>
                  <span className="text-xs text-primary font-bold">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-primary to-secondary"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};