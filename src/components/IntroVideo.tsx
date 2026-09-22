import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { CLIENT_MEDIA } from '../data/clinic';
import './IntroVideo.css';

interface IntroVideoProps {
  onComplete: () => void;
}

export default function IntroVideo({ onComplete }: IntroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isExiting, setIsExiting] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const completedRef = useRef(false);

  const finish = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;
    setIsExiting(true);
    // Smooth exit transition before unmounting / completing
    setTimeout(() => {
      onComplete();
    }, 600);
  }, [onComplete]);

  // Handle video autoplay on mount and safety timeout
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Required for mobile/Safari muted autoplay policy
    video.muted = true;
    video.defaultMuted = true;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay policy prevented playback
        setAutoplayBlocked(true);
      });
    }

    // Safety fallback: video duration is ~9.44s;
    // 14s ensures full playback completes naturally even on slow decoders,
    // while preventing any possibility of an infinite blocking screen.
    const safetyTimer = setTimeout(() => {
      finish();
    }, 14000);

    return () => {
      clearTimeout(safetyTimer);
    };
  }, [finish]);

  const handleVideoEnded = () => {
    finish();
  };

  const handleVideoError = () => {
    // If video fails to load or decode, immediately transition to site
    finish();
  };

  const handlePlayPromptClick = () => {
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setAutoplayBlocked(false);
      }).catch(() => {
        finish();
      });
    } else {
      finish();
    }
  };

  return (
    <motion.div
      className={`intro-container ${isExiting ? 'intro-exiting' : ''}`}
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Ambient luxury purple background atmosphere */}
      <div className="intro-ambient-glow" aria-hidden="true" />

      {/* Brand indicator badge */}
      <div className="intro-brand-badge">
        <span className="intro-brand-dot" />
        <span className="intro-brand-name">Crown Dental &amp; Cosmetology Clinic</span>
        <span className="intro-brand-tag">Erode</span>
      </div>

      {/* 16:9 Video Framing (Responsive full-bleed desktop / contained mobile) */}
      <div className="intro-video-wrapper">
        <video
          ref={videoRef}
          className="intro-video-element"
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={handleVideoEnded}
          onError={handleVideoError}
        >
          <source src={CLIENT_MEDIA.tourVideo} type="video/mp4" />
        </video>

        {/* Play prompt overlay if browser blocked autoplay */}
        {autoplayBlocked && (
          <div className="intro-blocked-overlay">
            <button
              type="button"
              className="intro-play-badge"
              onClick={handlePlayPromptClick}
              aria-label="Play clinic tour video"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              <span>Play Clinic Tour</span>
            </button>
          </div>
        )}
      </div>

      {/* Subtle skip control */}
      <button
        type="button"
        className="intro-skip-btn"
        onClick={finish}
        aria-label="Skip walkthrough and enter clinic website"
      >
        <span>Skip to Clinic</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" aria-hidden="true">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Soft initial fade-in from black */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="intro-initial-fade"
        aria-hidden="true"
      />
    </motion.div>
  );
}
