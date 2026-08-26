import { motion } from 'framer-motion';
import { CLINIC, IMAGES } from '../data/clinic';
import HeroConsultForm from './HeroConsultForm';
import './Hero.css';

const StarIcon = () => (
  <svg width="13" height="13" viewBox="0 0 20 20" fill="#D4AF37" aria-hidden="true">
    <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.27l-4.77 2.51.91-5.33L2.27 6.62l5.34-.78L10 1z" />
  </svg>
);

const ArrowIcon = () => (
  <svg className="hero-link-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const WhatsIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
  </svg>
);

const stagger = { transition: { staggerChildren: 0.1 } };
const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
};

const heroChips = [
  'Invisible Aligners',
  'Dental Implants',
  'Smile Makeover',
  'Medical Cosmetology',
];

export default function Hero() {
  const scrollTo = (sel: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector(sel)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section" aria-label="Crown Dental & Cosmetology Clinic">
      <div className="hero-orb-2" aria-hidden="true" />

      <div className="container hero-container">
        <motion.div {...stagger} initial="initial" animate="animate" className="hero-grid">

          {/* ── Copy column ── */}
          <div className="hero-content">
            <motion.div variants={fadeUp} className="hero-badge" role="img"
              aria-label={`${CLINIC.googleRating} star rated on Google`}>
              <div className="hero-stars" aria-hidden="true">
                <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
              </div>
              <span className="hero-badge-text">
                {CLINIC.googleRating} · {CLINIC.googleReviewCount} Google Reviews
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="hero-headline">
              Confident Smiles,
              <span className="hero-headline-accent">Radiant Skin.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="hero-subheading">
              Crown Dental &amp; Cosmetology Clinic brings advanced dentistry and
              medically supervised cosmetology together under one roof in Erode —
              planned by specialists, delivered with care.
            </motion.p>

            <motion.div variants={fadeUp} className="hero-chips" aria-label="Key treatments">
              {heroChips.map((c) => (
                <span className="hero-chip" key={c}>{c}</span>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="hero-cta-group">
              {/* PRIMARY: WhatsApp — general clinic */}
              <a href={CLINIC.whatsapp} target="_blank" rel="noopener noreferrer"
                className="btn-primary hero-cta-wa" aria-label="Message Crown Dental on WhatsApp">
                <span className="hero-cta-icon" aria-hidden="true"><WhatsIcon /></span>
                Message the Clinic
              </a>
              {/* SECONDARY: Call — general clinic */}
              <a href={CLINIC.phoneHref}
                className="hero-cta-call" aria-label={`Call Crown Dental: ${CLINIC.phoneDisplay}`}>
                <span className="hero-cta-icon hero-cta-icon--phone" aria-hidden="true"><PhoneIcon /></span>
                <span>Call Clinic</span>
                <span className="hero-cta-dot" aria-hidden="true">&middot;</span>
                <span className="hero-cta-num">{CLINIC.phoneDisplay}</span>
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="hero-explore">
              <a href="#treatments" className="hero-link" onClick={scrollTo('#treatments')}>
                Explore Treatments <ArrowIcon />
              </a>
            </motion.div>

            <motion.div variants={fadeUp}>
              <HeroConsultForm />
            </motion.div>
          </div>

          {/* ── Clinic image — primary visual anchor ── */}
          <motion.div variants={fadeUp} className="hero-visual">
            <div className="hero-image-frame">
              <img src={IMAGES.dentalSuite}
                alt="Dental treatment suite at Crown Dental &amp; Cosmetology Clinic, Erode"
                className="hero-image" />
              <span className="hero-image-tag">Crown Dental Suite · Erode</span>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
