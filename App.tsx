
import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Image as ImageIcon, 
  Zap, 
  ChevronRight, 
  Terminal, 
  Github, 
  Twitter, 
  Layers,
  Cpu,
  Monitor
} from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GeneratorSection from './components/GeneratorSection';
import Showcase from './components/Showcase';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'text' | 'image'>('text');

  useEffect(() => {
    // Reveal animations on scroll simulation
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen selection:bg-purple-500/30">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full"></div>
      </div>

      <Navbar />
      
      <main className="relative z-10 pt-20">
        <Hero />
        
        <section id="generators" className="py-24 px-6 max-w-7xl mx-auto reveal opacity-0 translate-y-10 transition-all duration-1000 ease-out">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 uppercase tracking-tighter">
              Domain Expansion: Infinite Creation
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Utilize the peak of neural synthesis to manifest your vision into the anime realm. 
              Our cursed engine renders every frame with cinematic precision.
            </p>
          </div>
          
          <GeneratorSection activeTab={activeTab} setActiveTab={setActiveTab} />
        </section>

        <section id="showcase" className="py-24 px-6 reveal opacity-0 translate-y-10 transition-all duration-1000 ease-out">
          <Showcase />
        </section>

        <section id="cta" className="py-24 px-6 reveal opacity-0 translate-y-10 transition-all duration-1000 ease-out">
          <div className="max-w-5xl mx-auto glass rounded-3xl p-12 text-center border-purple-500/30 aura-purple relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Zap size={120} className="text-purple-500" />
            </div>
            <h2 className="text-4xl font-heading font-black mb-6 uppercase">Ready to Transfigure Reality?</h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto italic">
              "To know what is truly impossible, one must first touch the divine spark of creation."
            </p>
            <button className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto">
              ENTER THE ZENITH <ChevronRight size={20} />
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
