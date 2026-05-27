import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS } from '../constants/content';
import { SectionHeader } from '../components/SectionHeader';

export const Process = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="The Creative Workflow"
          subtitle="A structured approach to bringing complex ideas to life, ensuring excellence at every stage."
          centered
        />

        <div className="relative mt-24">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 relative z-10">
            {PROCESS.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center group"
              >
                <div className="relative mb-8">
                  <div className="w-20 h-20 rounded-full glass mx-auto flex items-center justify-center text-2xl font-bold font-heading border border-white/10 group-hover:border-primary/50 group-hover:scale-110 transition-all duration-500">
                    {item.step}
                  </div>
                  <div className="absolute inset-0 w-20 h-20 rounded-full bg-primary/20 blur-xl mx-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-4">{item.title}</h3>
                <p className="text-sm text-foreground/50 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};