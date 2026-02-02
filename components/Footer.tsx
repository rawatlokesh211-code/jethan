
import React from 'react';
import { Zap, Github, Twitter, Instagram, Disc as Discord, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 bg-[#08080a] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 cursed-gradient rounded flex items-center justify-center">
                <Zap className="text-white fill-white" size={18} />
              </div>
              <span className="font-heading font-black text-xl tracking-tighter uppercase">
                ZENITH <span className="text-purple-500">AI</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Synthesizing the future of anime through advanced neural architecture. 
              Break your limits and expand your creative domain.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Discord size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-heading font-bold text-sm uppercase tracking-widest text-white">Techniques</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Text-to-Anime</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Image-to-Anime</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Style Transfiguration</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Neural Upscaling</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-heading font-bold text-sm uppercase tracking-widest text-white">Organization</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-purple-400 transition-colors">About Syndicate</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Pricing Domains</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">API Grimoire</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Status Core</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-heading font-bold text-sm uppercase tracking-widest text-white">Stay Synchronized</h4>
            <p className="text-xs text-gray-500">Join our newsletter to receive cursed updates and new model releases.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Exorcist email..." 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-purple-500/50 flex-1"
              />
              <button className="bg-white text-black p-2 rounded-lg hover:bg-purple-500 hover:text-white transition-all">
                <Mail size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>© 2025 ZENITH NEURAL SYSTEMS. ALL RIGHTS RESERVED. EXPAND YOUR DOMAIN.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Seal</a>
            <a href="#" className="hover:text-white">Terms of Contract</a>
            <a href="#" className="hover:text-white">Cookie Essence</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
