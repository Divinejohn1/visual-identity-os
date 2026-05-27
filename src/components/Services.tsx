import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants/content';
import { SectionHeader } from '../components/SectionHeader';
import * as LucideIcons from 'lucide-react';

export const Services = () => {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Premium Design Solutions"
          subtitle="Bespoke services tailored for ambitious brands looking to dominate their space visually."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = (LucideIcons as any)[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-10 rounded-[2.5rem] glass hover:bg-white/10 transition-all duration-500 border border-white/5 relative overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-[60px] group-hover:bg-primary/20 transition-all duration-500" />
                
                <div className="mb-8 p-5 rounded-2xl bg-white/5 w-fit group-hover:bg-primary transition-colors duration-500 group-hover:scale-110">
                  {IconComponent && <IconComponent size={32} className="group-hover:text-white" />}
                </div>
                
                <h3 className="text-2xl font-bold font-heading mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-foreground/60 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mt-8 pt-8 border-t border-white/5 flex items-center text-xs font-bold uppercase tracking-widest text-foreground/40 group-hover:text-foreground transition-colors">
                  Learn More <LucideIcons.ArrowUpRight size={14} className="ml-2" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};