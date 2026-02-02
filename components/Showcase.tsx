
import React from 'react';
import { Eye, Heart, Share2, Zap } from 'lucide-react';

const Showcase: React.FC = () => {
  const items = [
    {
      id: '1',
      title: 'Hollow Azure',
      style: 'Cursed Realm',
      image: 'https://images.unsplash.com/photo-1541562232579-512a21360020?q=80&w=600&auto=format&fit=crop',
      creator: 'Gojo_Master'
    },
    {
      id: '2',
      title: 'Neon Ronin',
      style: 'Cyber-Shogun',
      image: 'https://images.unsplash.com/photo-1560972550-aba3456b5564?q=80&w=600&auto=format&fit=crop',
      creator: 'SynthArt'
    },
    {
      id: '3',
      title: 'Crimson Eclipse',
      style: 'Dark Fantasy',
      image: 'https://images.unsplash.com/photo-1578632287117-659c9fe9ed59?q=80&w=600&auto=format&fit=crop',
      creator: 'VampireKing'
    },
    {
      id: '4',
      title: 'Infinite Void',
      style: 'Abstract Ethereal',
      image: 'https://images.unsplash.com/photo-1614728263952-84ea206f99b6?q=80&w=600&auto=format&fit=crop',
      creator: 'Zenith_AI'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl font-heading font-black mb-2 uppercase tracking-tighter">Community Manifestations</h2>
          <p className="text-gray-400">The most powerful creations from our global syndicate of artists.</p>
        </div>
        <button className="hidden md:flex items-center gap-2 px-6 py-2 glass rounded-full font-bold hover:bg-white/10 transition-all">
          View All <Zap size={16} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item.id} className="group relative glass rounded-3xl border-white/5 overflow-hidden hover:border-purple-500/50 transition-all duration-500">
            {/* Image Container */}
            <div className="aspect-[3/4] overflow-hidden relative">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Overlay Controls */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                <div className="flex gap-2">
                  <button className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                    <Heart size={18} />
                  </button>
                  <button className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                    <Share2 size={18} />
                  </button>
                </div>
                <button className="px-4 py-2 bg-white text-black text-xs font-black rounded-full uppercase tracking-widest">
                  View Specs
                </button>
              </div>
            </div>

            {/* Info */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-heading font-bold text-lg leading-tight">{item.title}</h3>
                <span className="text-[10px] font-bold text-purple-400 bg-purple-500/10 px-2 py-1 rounded-md uppercase tracking-widest">
                  {item.style}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-blue-500"></div>
                <span>by {item.creator}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Showcase;
