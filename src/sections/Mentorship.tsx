import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Smartphone, Clock, Award, ArrowRight } from 'lucide-react';

export const Mentorship = () => {
  return (
    <section id="mentorship" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="glass rounded-[3rem] p-12 lg:p-20 relative overflow-hidden border border-white/10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent blur-3xl" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <div className="mb-6 inline-flex items-center space-x-2 text-primary">
                <GraduationCap size={24} />
                <span className="text-sm font-bold uppercase tracking-widest">Masterclass</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8">
                Elevate Your <span className="text-gradient-gold">Design Game.</span>
              </h2>
              <p className="text-lg text-foreground/70 mb-12 leading-relaxed">
                Join our intensive design mentorship program. From mastering Pixellab and Lightroom on mobile to learning the fundamentals of branding and composition. 
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {[
                  { icon: <Smartphone size={20} />, text: "Mobile Masterclass" },
                  { icon: <Clock size={20} />, text: "Practical Sessions" },
                  { icon: <Award size={20} />, text: "Certification" },
                  { icon: <GraduationCap size={20} />, text: "Direct Mentorship" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-4 text-foreground/80">
                    <div className="p-3 rounded-xl bg-white/5 text-primary">
                      {item.icon}
                    </div>
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-flex items-center px-10 py-5 bg-primary text-white rounded-full font-bold transition-all hover:scale-105 shadow-xl shadow-primary/20"
              >
                Join the Mentorship <ArrowRight size={20} className="ml-3" />
              </a>
            </div>

            <div className="relative">
              <div className="aspect-square glass rounded-3xl p-4 border border-white/20 transform lg:rotate-6 hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-full rounded-2xl bg-[#111] flex flex-col items-center justify-center p-8 text-center">
                  <div className="text-6xl font-bold font-heading mb-4 text-primary">60%</div>
                  <p className="text-foreground/60">Limited seats available for the next cohort. Start your journey today.</p>
                  <div className="w-full h-2 bg-white/10 rounded-full mt-8 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '60%' }}
                      transition={{ duration: 1.5 }}
                      className="h-full bg-primary" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};