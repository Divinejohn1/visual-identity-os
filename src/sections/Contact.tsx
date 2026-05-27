import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DESIGNER_INFO } from '../constants/content';
import { SectionHeader } from '../components/SectionHeader';
import { Mail, Phone, Instagram, Send, MessageCircle, Calendar } from 'lucide-react';
import { toast } from 'sonner';

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast.success("Message sent successfully! I'll get back to you shortly.");
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <SectionHeader
              title="Let's Build Something Legendary."
              subtitle="Ready to take your brand to the next level? Drop me a message and let's start a conversation."
            />

            <div className="space-y-8 mb-12">
              {[
                { icon: <Mail size={24} />, label: "Email Me", value: DESIGNER_INFO.email, href: `mailto:${DESIGNER_INFO.email}` },
                { icon: <Phone size={24} />, label: "Call / WhatsApp", value: DESIGNER_INFO.whatsapp, href: `tel:${DESIGNER_INFO.whatsapp}` },
                { icon: <Instagram size={24} />, label: "Instagram", value: "@alexrivera.design", href: DESIGNER_INFO.instagram },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-center space-x-6 group p-6 glass rounded-3xl hover:bg-white/10 transition-all"
                >
                  <div className="p-4 rounded-2xl bg-white/5 text-primary group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-foreground/40 font-bold mb-1">{item.label}</p>
                    <p className="text-xl font-bold">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="flex items-center space-x-3 px-8 py-4 glass rounded-full font-bold hover:bg-white/10 transition-all">
                <Calendar size={20} />
                <span>Schedule a Call</span>
              </button>
              <button className="flex items-center space-x-3 px-8 py-4 bg-green-500/10 text-green-400 rounded-full font-bold hover:bg-green-500/20 transition-all border border-green-500/20">
                <MessageCircle size={20} />
                <span>Quick WhatsApp</span>
              </button>
            </div>
          </div>

          <div className="glass p-10 md:p-16 rounded-[3rem] border border-white/10 relative overflow-hidden">
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
            
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-foreground/60 ml-2">Name</label>
                  <input
                    required
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-primary transition-colors text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-foreground/60 ml-2">Email</label>
                  <input
                    required
                    type="email"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-primary transition-colors text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-foreground/60 ml-2">Project Type</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-primary transition-colors appearance-none text-white">
                    <option className="bg-[#111] text-white">Brand Identity</option>
                    <option className="bg-[#111] text-white">Social Media</option>
                    <option className="bg-[#111] text-white">UI Design</option>
                    <option className="bg-[#111] text-white">Mentorship</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-foreground/60 ml-2">Budget Range</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-primary transition-colors appearance-none text-white">
                    <option className="bg-[#111] text-white">$1k - $3k</option>
                    <option className="bg-[#111] text-white">$3k - $10k</option>
                    <option className="bg-[#111] text-white">$10k+</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-foreground/60 ml-2">Message</label>
                <textarea
                  required
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-primary transition-colors text-white"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                disabled={isSubmitting}
                className="w-full py-5 bg-primary text-white rounded-2xl font-bold flex items-center justify-center space-x-3 hover:bg-primary/90 transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};