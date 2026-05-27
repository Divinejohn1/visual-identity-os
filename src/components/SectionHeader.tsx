import React from 'react';
import { motion } from 'framer-motion';

export const SectionHeader = ({ title, subtitle, centered = false }: { title: string; subtitle?: string; centered?: boolean }) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto md:mx-0">
            {subtitle}
          </p>
        )}
        <div className={`h-1 w-20 bg-primary mt-6 ${centered ? 'mx-auto' : ''}`} />
      </motion.div>
    </div>
  );
};