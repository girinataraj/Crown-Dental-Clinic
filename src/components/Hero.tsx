import { motion } from 'framer-motion';
import './Hero.css';

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 20 20" fill="#D4AF37" aria-hidden="true">
    <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.27l-4.77 2.51.91-5.33L2.27 6.62l5.34-.78L10 1z" />
  </svg>
);

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      {/* Ambient clinic image — communicates real premium space */}
      <div className="hero-bg-image" aria-hidden="true">
        <img
          src="/images/treatment-room-2.png"
          alt=""
          loading="eager"
        />
      </div>
      <div className="hero-bg-overlay" aria-hidden="true" />

      <div className="container hero-container">
        
        {/* Trust Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-badge glass-panel"
        >
          <div className="hero-stars">
            <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
          </div>
          <span className="hero-badge-text">4.9 Rated on Google</span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-headline"
        >
          Crown Dental <br />
          <span className="text-navy-muted">&amp; Cosmetology Clinic</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hero-subheading"
        >
          Advanced dentistry and medical cosmetology in Erode — where precision care meets genuine comfort.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="hero-cta-group"
        >
          <a href="tel:+918946013270" className="btn-primary">
            Book Appointment
          </a>
          <a href="https://wa.me/918946013270" target="_blank" rel="noopener noreferrer" className="hero-link">
            WhatsApp Consult &rarr;
          </a>
        </motion.div>

      </div>
    </section>
  );
}
