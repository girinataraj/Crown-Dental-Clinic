import { motion } from 'framer-motion';
import './TrustLayer.css';

const trustStats = [
  { icon: '★', label: 'Google Reviews', value: '4.9', sub: '150+ verified patients' },
  { icon: '✦', label: 'Specialist Team', value: 'MDS', sub: 'Board-certified experts' },
  { icon: '✓', label: 'Sterile Studio', value: '100%', sub: 'Hospital-grade hygiene' },
];

export default function TrustLayer() {
  return (
    <section className="trust-section" aria-label="Clinic trust highlights">
      <div className="container">
        <div className="trust-grid">
          {trustStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.0, 0.0, 0.2, 1] }}
              className="trust-card"
            >
              <div className="trust-card-icon" aria-hidden="true">{stat.icon}</div>
              <p className="trust-value">{stat.value}</p>
              <p className="trust-label">{stat.label}</p>
              <p className="trust-sub">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
