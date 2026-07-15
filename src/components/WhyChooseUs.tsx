import { motion } from 'framer-motion';
import './WhyChooseUs.css';

const reasons = [
  {
    icon: '✦',
    title: 'Specialist-Led Care',
    desc: 'Board-certified MDS specialists across prosthodontics, orthodontics, oral surgery, and radiology.',
  },
  {
    icon: '◈',
    title: 'Premium Environment',
    desc: 'A clinic designed to feel welcoming — where comfort and advanced care go hand in hand.',
  },
  {
    icon: '⬡',
    title: 'Hospital-Grade Safety',
    desc: 'Rigorous sterilisation protocols and internationally certified infection control standards.',
  },
  {
    icon: '◉',
    title: 'Personalised Plans',
    desc: 'Every treatment is planned around your specific goals, timeline, and comfort.',
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
          transition={{ duration: 0.6, ease: [0.0, 0.0, 0.2, 1] }}
          className="section-header"
        >
          <span className="section-badge">The Crown Standard</span>
          <h2>Why Choose Us</h2>
          <p className="text-navy-muted">Advanced dental science and genuine care — in one place.</p>
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
              <p className="why-desc text-navy-muted">{r.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
