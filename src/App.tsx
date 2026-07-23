import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Core Components
import IntroVideo from './components/IntroVideo';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Sections (To be built next)
import TrustLayer from './components/TrustLayer';
import FeaturedTreatments from './components/FeaturedTreatments';
import BeforeAfter from './components/BeforeAfter';
import DrMonnica from './components/DrMonnica';
import SpecialistTeam from './components/SpecialistTeam';
import WhyChooseUs from './components/WhyChooseUs';
import CrownExperience from './components/CrownExperience';
import Reviews from './components/Reviews';
import ClinicGallery from './components/ClinicGallery';
import ConsultationCTA from './components/ConsultationCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

import './index.css';

function App() {
  const [introComplete, setIntroComplete] = useState(false);
  // Keep intro mounted only while it's playing
  const [showIntro, setShowIntro] = useState(true);

  // Lock scroll from the very start until intro finishes
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
    return () => {
      // Safety cleanup on unmount
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, []);

  const handleIntroComplete = () => {
    // 1. Unlock all scroll/touch IMMEDIATELY
    document.body.style.overflow = '';
    document.body.style.touchAction = '';
    
    // 2. Hold the completed state briefly (300ms), then trigger crossfade
    setTimeout(() => {
      // Trigger content fade-in and intro fade-out simultaneously
      setIntroComplete(true);
      setShowIntro(false);
    }, 300);
  };

  return (
    <>
      {/* Intro overlay — fully unmounted after completion so no fixed layer remains */}
      <AnimatePresence>
        {showIntro && <IntroVideo onComplete={handleIntroComplete} />}
      </AnimatePresence>

      {/* Main content — fades in as intro fades out */}
      <AnimatePresence>
        {introComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'relative', zIndex: 1 }}
          >
            <Navbar />
            <main>
              <Hero />
              <TrustLayer />
              <FeaturedTreatments />
              <BeforeAfter />
              <DrMonnica />
              <SpecialistTeam />
              <WhyChooseUs />
              <CrownExperience />
              <Reviews />
              <ClinicGallery />
              <ConsultationCTA />
              <Contact />
            </main>
            <Footer />
            <WhatsAppButton />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
