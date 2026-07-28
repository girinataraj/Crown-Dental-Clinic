import { motion } from 'framer-motion';
import './Hero.css';

/* Gold star — the crown's exclusive accent */
const StarIcon = () => (
  <svg width="13" height="13" viewBox="0 0 20 20" fill="#D4AF37" aria-hidden="true">
    <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.27l-4.77 2.51.91-5.33L2.27 6.62l5.34-.78L10 1z" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    className="hero-link-arrow"
    width="16" height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const stagger = { transition: { staggerChildren: 0.14 } };
const fadeUp = {
  initial:    { opacity: 0, y: 22 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.80, ease: [0.22, 1, 0.36, 1] },
};

export default function Hero() {
  return (
    <section id="home" className="hero-section" aria-label="Crown Dental & Cosmetology Clinic">
      {/* Orchid ambient orb */}
      <div className="hero-orb-2" aria-hidden="true" />

      <div className="container hero-container">
        <motion.div {...stagger} initial="initial" animate="animate" className="hero-content">

          {/* Glass trust badge — glows on dark */}
          <motion.div
            variants={fadeUp}
            className="hero-badge"
            role="img"
            aria-label="4.9 star rated clinic"
          >
            <div className="hero-stars" aria-hidden="true">
              <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
            </div>
            <span className="hero-badge-text">4.9 · Google Rated</span>
          </motion.div>

          {/* White headline on dark purple — maximum impact */}
          <motion.h1 variants={fadeUp} className="hero-headline">
            Crown Dental
            <span className="hero-sub-brand">& Cosmetology Clinic</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p variants={fadeUp} className="hero-subheading">
            Advanced dentistry and medical cosmetology — delivered with precision,
            in an atmosphere built for your comfort.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="hero-cta-group">
            <a
              href="tel:+919965310489"
              className="btn-primary"
              aria-label="Call Crown Dental Clinic"
            >
              Call Clinic Now
            </a>
            <a
              href="https://wa.me/919965310489"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-link"
              aria-label="Chat on WhatsApp"
            >
              WhatsApp Consult <ArrowIcon />
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
