import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './IntroVideo.css';

interface IntroVideoProps {
  onComplete: () => void;
}

export default function IntroVideo({ onComplete }: IntroVideoProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // If not mobile, complete intro almost instantly
    if (!isMobile) {
      const t = setTimeout(() => {
        setIsPlaying(false);
        onComplete();
      }, 500);
      return () => clearTimeout(t);
    }

    // On mobile, simulate video duration then trigger bloom
    const t = setTimeout(() => {
      setIsPlaying(false);
      onComplete();
    }, 2800); // 2.8s premium short playback

    return () => clearTimeout(t);
  }, [isMobile, onComplete]);

  return (
    <div className={`intro-container ${!isPlaying ? 'intro-completed' : ''}`}>
      {/* 
        NOTE: Since a real video file is pending, this uses a high-end CSS gradient 
        bloom to simulate the atmospheric luxury feel. When the video is added, 
        it should be placed here with object-fit: cover.
      */}
      <div className="intro-visual-layer">
        <video 
          className="intro-video-element"
          autoPlay 
          muted 
          playsInline 
          loop={!isPlaying} // Keep looping the final frames as hero bg
        >
          {/* <source src="/videos/intro.mp4" type="video/mp4" /> */}
        </video>
        
        {/* Fallback Atmospheric Bloom */}
        <div className="intro-bloom-bg" />
      </div>

      {/* Atmospheric Overlays */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="intro-dark-overlay"
          />
        )}
      </AnimatePresence>
      
      {/* Soft gradient overlay that stays as part of Hero */}
      <div className="intro-hero-gradient" />
    </div>
  );
}
