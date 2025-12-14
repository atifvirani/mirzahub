import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const [hasStarted, setHasStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio on mount without aggressive cleanup
  useEffect(() => {
    // We assign it to the ref to persist across renders
    audioRef.current = new Audio('https://files.catbox.moe/kz38bw.mp3');
    audioRef.current.preload = 'auto';
    
    // NOTE: We deliberately do NOT include a cleanup function that calls pause()
    // to avoid the "The play() request was interrupted by a call to pause()" error
    // caused by React Strict Mode double-invokation.
  }, []);

  const handleStart = () => {
    const audio = audioRef.current;

    if (audio) {
      // Ensure we start from the beginning
      audio.currentTime = 0;
      
      // Play immediately and handle the promise safely
      const playPromise = audio.play();

      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.warn("Audio playback prevented or interrupted:", error);
        });
      }
    }

    // Start Animation State
    setHasStarted(true);

    // Transition after 3 seconds
    setTimeout(() => {
      onComplete();
    }, 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
    >
      {!hasStarted ? (
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleStart}
          className="bg-[#ff9000] text-black text-xl font-bold px-8 py-3 rounded hover:bg-[#ffae00] transition-colors shadow-[0_0_20px_rgba(255,144,0,0.3)] uppercase tracking-wide"
        >
          Enter MirzaHub
        </motion.button>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.6, 
            ease: "easeOut",
          }}
          className="flex items-center gap-2 select-none"
        >
          <span className="text-white text-6xl md:text-8xl font-black tracking-tighter">
            MIRZA
          </span>
          <span className="bg-[#ff9000] text-black text-6xl md:text-8xl font-black tracking-tighter px-3 md:px-4 py-0 md:py-1 rounded-lg flex items-center justify-center">
            HUB
          </span>
        </motion.div>
      )}
    </motion.div>
  );
};

export default IntroAnimation;