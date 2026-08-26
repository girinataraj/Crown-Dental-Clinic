import { motion } from 'framer-motion';
import { CLINIC } from '../data/clinic';
import './TrustLayer.css';

const StarGlyph = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.27l-4.77 2.51.91-5.33L2.27 6.62l5.34-.78L10 1z" />
  </svg>
);

const BadgeGlyph = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="8" r="6" />
    <path d="M8.21 13.89L7 22l5-3 5 3-1.21-8.11" />
  </svg>
);

const DualGlyph = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 11c0 5.5-7 10-7 10z" />
  </svg>
);

const pillars = [
  {
    Icon: StarGlyph,
    value: `${CLINIC.googleRating} / 5`,
    label: 'Google Reviews',
    sub: `${CLINIC.googleReviewCount} Google Reviews in Erode`,
  },
  {
    Icon: BadgeGlyph,
    value: 'MDS Specialists',
    label: 'Consultant Team',
    sub: 'Prosthodontics, orthodontics, surgery & radiology',
  },
  {
    Icon: DualGlyph,
    value: 'Dental + Skin',
    label: 'Two Clinical Streams',
    sub: 'Dentistry and medical cosmetology in one clinic',
  },
];

export default function TrustLayer() {
  return (
    <section className="trust-section" aria-label="Clinic credentials">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="trust-panel"
        >
          {pillars.map(({ Icon, value, label, sub }, i) => (
            <div className="trust-item" key={label}>
              <span className="trust-item-icon" aria-hidden="true"><Icon /></span>
              <div className="trust-item-body">
                <p className="trust-value">{value}</p>
                <p className="trust-label">{label}</p>
                <p className="trust-sub">{sub}</p>
              </div>
              {i < pillars.length - 1 && <span className="trust-divider" aria-hidden="true" />}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
