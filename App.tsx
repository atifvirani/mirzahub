import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import IntroAnimation from './components/IntroAnimation';
import Header from './components/Header';
import VideoGrid from './components/VideoGrid';

const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="min-h-screen bg-black text-white relative">
      <AnimatePresence>
        {showIntro && (
          <IntroAnimation onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      {/* Main Content - we render it underneath so it's revealed when intro fades */}
      <div className={`transition-opacity duration-1000 ${showIntro ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        
        {/* Navigation Categories Strip (Sub-header) */}
        <div className="w-full bg-[#1b1b1b] border-b border-[#333] hidden md:block">
           <div className="max-w-[1600px] mx-auto px-4 py-3 flex items-center gap-6 text-sm text-[#ccc] font-medium overflow-x-auto no-scrollbar">
             <span className="text-white bg-[#333] px-3 py-1 rounded-full cursor-pointer hover:bg-[#444] whitespace-nowrap">Recommended</span>
             <span className="hover:text-[#ff9000] cursor-pointer whitespace-nowrap transition-colors">JavaScript</span>
             <span className="hover:text-[#ff9000] cursor-pointer whitespace-nowrap transition-colors">React</span>
             <span className="hover:text-[#ff9000] cursor-pointer whitespace-nowrap transition-colors">TypeScript</span>
             <span className="hover:text-[#ff9000] cursor-pointer whitespace-nowrap transition-colors">CSS Crimes</span>
             <span className="hover:text-[#ff9000] cursor-pointer whitespace-nowrap transition-colors">Backend</span>
             <span className="hover:text-[#ff9000] cursor-pointer whitespace-nowrap transition-colors">DevOps</span>
             <span className="hover:text-[#ff9000] cursor-pointer whitespace-nowrap transition-colors">Career Advice</span>
             <span className="hover:text-[#ff9000] cursor-pointer whitespace-nowrap transition-colors">Memes</span>
           </div>
        </div>

        <VideoGrid />

        {/* Footer */}
        <footer className="w-full bg-[#1b1b1b] border-t border-[#333] mt-12 py-10">
           <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex flex-col gap-2">
                 <div className="flex items-center gap-1 select-none">
                    <span className="text-white text-xl font-bold tracking-tighter">MIRZA</span>
                    <span className="bg-[#ff9000] text-black text-xl font-bold tracking-tighter px-1 rounded">HUB</span>
                 </div>
                 <p className="text-gray-500 text-sm">The world's premier destination for coding memes.</p>
              </div>
              
              <div className="flex gap-6 text-sm text-gray-400">
                <span className="hover:text-[#ff9000] cursor-pointer">Terms</span>
                <span className="hover:text-[#ff9000] cursor-pointer">Privacy</span>
                <span className="hover:text-[#ff9000] cursor-pointer">DMCA</span>
                <span className="hover:text-[#ff9000] cursor-pointer">2257 Exemption</span>
              </div>
           </div>
        </footer>
      </div>
    </div>
  );
};

export default App;