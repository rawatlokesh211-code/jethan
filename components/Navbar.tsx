
import React, { useState, useEffect } from 'react';
import { Zap, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a0a0c]/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 cursed-gradient rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
            <Zap className="text-white fill-white" size={24} />
          </div>
          <span className="font-heading font-black text-2xl tracking-tighter">ZENITH <span className="text-purple-500">AI</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-widest uppercase">
          <a href="#generators" className="hover:text-purple-400 transition-colors">Generators</a>
          <a href="#showcase" className="hover:text-purple-400 transition-colors">Showcase</a>
          <a href="#" className="hover:text-purple-400 transition-colors">Pricing</a>
          <button className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-purple-500 hover:text-white transition-all">
            Join Discord
          </button>
        </div>

        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a0a0c] border-b border-white/10 p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          <a href="#generators" className="text-lg font-bold" onClick={() => setIsMobileMenuOpen(false)}>Generators</a>
          <a href="#showcase" className="text-lg font-bold" onClick={() => setIsMobileMenuOpen(false)}>Showcase</a>
          <a href="#" className="text-lg font-bold">Pricing</a>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-full font-bold">
            Join Discord
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
