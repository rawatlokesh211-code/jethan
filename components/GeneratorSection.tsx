
import React, { useState } from 'react';
import { Type, ImageIcon, Sparkles, Wand2, RefreshCw, Upload, Layout, Monitor } from 'lucide-react';

interface GeneratorProps {
  activeTab: 'text' | 'image';
  setActiveTab: (tab: 'text' | 'image') => void;
}

const GeneratorSection: React.FC<GeneratorProps> = ({ activeTab, setActiveTab }) => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [resultImage, setResultImage] = useState<string | null>(null);

  const handleGenerate = () => {
    setIsGenerating(true);
    setResultImage(null);
    setTimeout(() => {
      setIsGenerating(false);
      setResultImage('https://images.unsplash.com/photo-1541562232579-512a21360020?q=80&w=1000&auto=format&fit=crop');
    }, 3000);
  };

  const styles = [
    { name: 'Satoru GO', color: 'blue' },
    { name: 'Cursed Blade', color: 'purple' },
    { name: 'Solaris Punk', color: 'orange' },
    { name: 'Ether Drift', color: 'cyan' },
    { name: 'Blood Moon', color: 'red' },
  ];

  return (
    <div className="glass rounded-[2.5rem] border-white/10 p-4 md:p-8 shadow-2xl relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 blur-[100px] -z-10"></div>
      
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Controls */}
        <div className="flex-1 space-y-8">
          <div className="flex p-1 bg-white/5 rounded-2xl w-fit">
            <button 
              onClick={() => setActiveTab('text')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${activeTab === 'text' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'}`}
            >
              <Type size={18} /> Text To Anime
            </button>
            <button 
              onClick={() => setActiveTab('image')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${activeTab === 'image' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'}`}
            >
              <ImageIcon size={18} /> Image To Anime
            </button>
          </div>

          <div className="space-y-6">
            {activeTab === 'text' ? (
              <div className="space-y-4">
                <label className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase flex items-center gap-2">
                  <Layout size={14} /> Enter Vision Script
                </label>
                <div className="relative group">
                  <textarea 
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Describe your character, the lighting, and the intensity of the cursed energy..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 min-h-[160px] focus:outline-none focus:border-purple-500/50 transition-all text-lg placeholder:text-gray-600 resize-none group-hover:border-white/20"
                  />
                  <div className="absolute bottom-4 right-4 text-xs text-gray-600">
                    {prompt.length}/500
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <label className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase flex items-center gap-2">
                  <Upload size={14} /> Source Imprint
                </label>
                <div className="border-2 border-dashed border-white/10 rounded-2xl p-12 text-center group hover:border-purple-500/50 transition-all cursor-pointer bg-white/5">
                  <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Upload className="text-purple-400" />
                  </div>
                  <h4 className="font-bold mb-1">Drag and drop source image</h4>
                  <p className="text-sm text-gray-500">Supports JPG, PNG, WEBP (Max 10MB)</p>
                </div>
              </div>
            )}

            <div className="space-y-4">
              <label className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase flex items-center gap-2">
                <Sparkles size={14} /> Domain Style
              </label>
              <div className="flex flex-wrap gap-2">
                {styles.map((style) => (
                  <button key={style.name} className="px-4 py-2 glass rounded-full text-sm font-semibold hover:border-purple-500/50 hover:text-purple-400 transition-all">
                    {style.name}
                  </button>
                ))}
              </div>
            </div>

            <button 
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full py-5 cursed-gradient rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed group shadow-xl shadow-purple-600/20"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="animate-spin" size={24} /> 
                  SYNTHESIZING...
                </>
              ) : (
                <>
                  <Wand2 className="group-hover:rotate-12 transition-transform" size={24} /> 
                  EXPAND DOMAIN
                </>
              )}
            </button>
          </div>
        </div>

        {/* Preview Area */}
        <div className="lg:w-[450px] space-y-6">
          <label className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase flex items-center gap-2">
            <Monitor size={14} /> Projection Portal
          </label>
          <div className="aspect-[3/4] glass border-white/10 rounded-3xl relative overflow-hidden flex items-center justify-center bg-black/40">
            {isGenerating ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center p-8">
                <div className="w-24 h-24 relative">
                   <div className="absolute inset-0 border-4 border-purple-500/30 rounded-full animate-ping"></div>
                   <div className="absolute inset-0 border-4 border-purple-500 rounded-full animate-[spin_3s_linear_infinite] border-t-transparent"></div>
                   <div className="absolute inset-4 bg-purple-500/20 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold mb-2">CHANNELING ENERGY</h3>
                  <p className="text-sm text-gray-500">Neural networks are weaving your reality...</p>
                </div>
              </div>
            ) : resultImage ? (
              <img 
                src={resultImage} 
                alt="Generated result" 
                className="w-full h-full object-cover animate-in fade-in zoom-in duration-1000"
              />
            ) : (
              <div className="text-center p-8 space-y-4 opacity-30">
                <Wand2 size={48} className="mx-auto" />
                <p className="text-sm font-bold uppercase tracking-widest">Awaiting Manifestation</p>
              </div>
            )}

            {/* Scanning Line Effect */}
            {isGenerating && (
              <div className="absolute top-0 left-0 w-full h-[2px] bg-purple-500 shadow-[0_0_15px_purple] animate-[scan_2s_ease-in-out_infinite] z-20"></div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default GeneratorSection;
