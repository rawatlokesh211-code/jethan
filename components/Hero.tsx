
import React from 'react';
import { Play, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0c]"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-xs font-bold tracking-widest text-purple-400 uppercase border-purple-500/20">
            <Sparkles size={14} /> New Version 3.1 Released
          </div>
          
          <h1 className="text-6xl md:text-8xl font-heading font-black leading-tight tracking-tighter uppercase">
            Manifest Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
              Anime Destiny
            </span>
          </h1>

          <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
            The world's most powerful AI engine specifically trained for cinematic high-quality anime. 
            From cursed spirits to legendary heroes, synthesize your vision in seconds.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-purple-600 hover:bg-purple-500 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-purple-600/20">
              Start Synthesis
            </button>
            <button className="px-8 py-4 glass border-white/10 rounded-full font-bold text-lg hover:bg-white/5 transition-all flex items-center justify-center gap-2">
              <Play size={20} className="fill-white" /> View Demo
            </button>
          </div>

          <div className="flex items-center gap-8 pt-4">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  src={`https://picsum.photos/seed/${i + 20}/100/100`} 
                  className="w-12 h-12 rounded-full border-2 border-[#0a0a0c] object-cover" 
                  alt="user"
                />
              ))}
            </div>
            <div className="text-sm">
              <span className="font-bold text-white">40k+ Artists</span>
              <br />
              <span className="text-gray-500">Creating daily</span>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          {/* Character Container */}
          <div className="relative z-10 animate-float">
            <div className="absolute -inset-4 cursed-gradient blur-3xl opacity-20 rounded-full"></div>
            <div className="relative glass border-white/20 p-2 rounded-[2rem] aura-purple">
              <img 
                src="https://images.unsplash.com/photo-1578632292335-df3abbb0d586?q=80&w=1000&auto=format&fit=crop" 
                alt="Zenith AI Protagonist" 
                className="w-80 h-[28rem] md:w-96 md:h-[32rem] object-cover rounded-[1.8rem]"
              />
              
              {/* Floating Stat UI */}
              <div className="absolute top-10 -right-8 glass p-4 rounded-2xl animate-pulse delay-100 border-white/10 max-w-[140px]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Energy Rank</span>
                </div>
                <div className="text-xl font-heading font-bold">SSS+</div>
              </div>

              <div className="absolute bottom-20 -left-12 glass p-4 rounded-2xl animate-pulse border-white/10 max-w-[140px]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest">Core Sync</span>
                </div>
                <div className="text-xl font-heading font-bold">99.8%</div>
              </div>
            </div>
          </div>
          
          {/* Geometric Accents */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border border-white/5 rounded-full pointer-events-none rotate-45"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
