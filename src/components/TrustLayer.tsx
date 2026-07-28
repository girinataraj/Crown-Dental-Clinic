import { motion } from 'framer-motion';
import './TrustLayer.css';

const trustStats = [
  {
    icon: '★',
    label: 'Google Reviews',
    value: '4.9',
    sub: '150+ verified patients',
  },
  {
    icon: '✦',
    label: 'Specialist Team',
    value: 'MDS',
    sub: 'Board-certified experts',
  },
  {
    icon: '✓',
    label: 'Sterile Studio',
    value: '100%',
    sub: 'Hospital-grade hygiene',
  },
];

export default function TrustLayer() {
  return (
    <section className="trust-section" aria-label="Clinic trust highlights">
      <div className="container">
        <div className="trust-grid">
          {trustStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.20 } }}
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
