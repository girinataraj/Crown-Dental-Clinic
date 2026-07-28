import { motion } from 'framer-motion';
import './WhyChooseUs.css';

const reasons = [
  {
    icon: '✦',
    title: 'World-Class Expertise',
    desc: 'Board-certified MDS specialists delivering precision, personalised care at every visit.',
  },
  {
    icon: '◈',
    title: 'Luxury Environment',
    desc: 'A soothing, premium space that redefines what a clinic should feel like.',
  },
  {
    icon: '⬡',
    title: 'Hospital-Grade Safety',
    desc: 'Rigorous sterilisation protocols — your safety is never a compromise.',
  },
  {
    icon: '◉',
    title: 'Bespoke Treatment Plans',
    desc: 'Every plan is designed uniquely for you, your goals, and your timeline.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' as const },
  }),
};

export default function WhyChooseUs() {
  return (
    <section className="why-section" aria-label="Why choose Crown Dental">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="section-header section-header--light"
        >
          <span className="section-badge">The Crown Standard</span>
          <h2>Why Choose Us</h2>
          <p>Where advanced medical science meets genuine premium care.</p>
        </motion.div>

        <div className="why-grid">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
              viewport={{ once: true, margin: '-40px' }}
              className="why-card"
            >
              <div className="why-icon" aria-hidden="true">{r.icon}</div>
              <h3 className="why-title">{r.title}</h3>
              <p className="why-desc">{r.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
