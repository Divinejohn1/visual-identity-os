import React from 'react';
import { DESIGNER_INFO, NAVIGATION } from '../constants/content';
import { Instagram, Linkedin, Twitter, Dribbble, Heart, Send } from 'lucide-react';
import { toast } from 'sonner';

export const Footer = () => {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for subscribing to our newsletter!");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <footer className="py-20 border-t border-white/5 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-2">
            <a href="#" className="text-3xl font-heading font-bold tracking-tighter mb-8 block">
              ALEX<span className="text-primary">.</span>
            </a>
            <p className="text-foreground/50 max-w-sm mb-8 leading-relaxed">
              Crafting premium visual identities and strategic brand experiences for the digital age. Let's make your brand unforgettable.
            </p>
            <div className="flex space-x-4 mb-8">
              {[Instagram, Twitter, Linkedin, Dribbble].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-foreground/60 hover:text-primary hover:scale-110 transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>

            <div className="max-w-sm">
              <h4 className="font-bold font-heading mb-4 uppercase tracking-widest text-xs">Newsletter</h4>
              <form onSubmit={handleSubscribe} className="relative">
                <input 
                  required
                  type="email" 
                  placeholder="Join the design list"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-6 pr-16 focus:outline-none focus:border-primary transition-all text-white"
                />
                <button type="submit" className="absolute right-2 top-2 bottom-2 aspect-square bg-primary text-white rounded-xl flex items-center justify-center hover:bg-primary/90 transition-all">
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>

          <div>
            <h4 className="font-bold font-heading mb-8 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4">
              {NAVIGATION.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-foreground/50 hover:text-primary transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold font-heading mb-8 uppercase tracking-widest text-xs">Closing Thought</h4>
            <p className="text-foreground/50 italic leading-relaxed">
              "Great design is not just what it looks like and feels like. Design is how it works."
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 text-sm text-foreground/40">
          <p>© {new Date().getFullYear()} Alex Rivera. All rights reserved.</p>
          <p className="flex items-center mt-4 md:mt-0">
            Made with <Heart size={14} className="mx-2 text-red-500 fill-current" /> in the Creative Cloud
          </p>
        </div>
      </div>
    </footer>
  );
};