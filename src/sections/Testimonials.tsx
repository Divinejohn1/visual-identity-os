import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants/content';
import { SectionHeader } from '../components/SectionHeader';
import { Quote } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Voice of Success"
          subtitle="Real feedback from visionary brands and entrepreneurs I've had the pleasure to work with."
          centered
        />

        <div className="flex flex-nowrap gap-8 overflow-x-auto pb-12 scrollbar-hide snap-x">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={i}
              className="min-w-[350px] md:min-w-[450px] glass p-10 rounded-[3rem] snap-center relative border border-white/10"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Quote className="absolute top-10 right-10 text-primary/20" size={64} />
              
              <p className="text-lg md:text-xl text-foreground/80 mb-10 italic leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-2xl overflow-hidden glass p-1">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover rounded-xl" />
                </div>
                <div>
                  <h4 className="font-bold font-heading">{testimonial.name}</h4>
                  <p className="text-sm text-primary">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center space-x-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <div key={i} className={`h-1.5 rounded-full transition-all ${i === 0 ? 'w-8 bg-primary' : 'w-2 bg-white/10'}`} />
          ))}
        </div>
      </div>
    </section>
  );
};