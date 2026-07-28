import { motion } from 'framer-motion';
import './FeaturedTreatments.css';

const treatments = [
  {
    id: 'aligners',
    title: 'Invisible Aligners',
    desc: 'Clear, modern orthodontic correction for a perfectly straight smile — no brackets, no discomfort.',
    type: 'Dental',
    icon: '◈',
  },
  {
    id: 'implants',
    title: 'Dental Implants',
    desc: 'Permanent, natural-looking replacements that feel and function exactly like real teeth.',
    type: 'Dental',
    icon: '✦',
  },
  {
    id: 'smile',
    title: 'Smile Makeover',
    desc: 'Comprehensive aesthetic design using veneers, crowns, and whitening for a truly flawless look.',
    type: 'Dental',
    icon: '◉',
  },
  {
    id: 'hydrafacial',
    title: 'Hydra Facial',
    desc: 'Premium clinical facial that deeply hydrates, brightens, and rejuvenates your skin in one session.',
    type: 'Cosmetology',
    icon: '⬡',
  },
  {
    id: 'prp',
    title: 'Hair PRP',
    desc: 'Advanced platelet-rich plasma therapy restoring natural hair density and scalp health.',
    type: 'Cosmetology',
    icon: '◈',
  },
  {
    id: 'acne',
    title: 'Acne Scar Treatment',
    desc: 'Expert medical therapy and laser resurfacing for complete skin rejuvenation and clarity.',
    type: 'Cosmetology',
    icon: '✦',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: 'easeOut' as const },
  }),
};

export default function FeaturedTreatments() {
  return (
    <section id="treatments" className="treatments-section" aria-label="Featured treatments">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="section-header section-header--light"
        >
          <span className="section-badge">Premium Services</span>
          <h2>Featured Treatments</h2>
          <p>World-class dental and aesthetic care, personalised for you.</p>
        </motion.div>

        <div className="treatments-stack">
          {treatments.map((t, i) => (
            <motion.div
              key={t.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={{ y: -5, transition: { duration: 0.18 } }}
              whileTap={{ scale: 0.98 }}
              viewport={{ once: true, margin: '-40px' }}
              className="treatment-card"
            >
              <div className="tc-header">
                <span className="tc-icon" aria-hidden="true">{t.icon}</span>
                <span className="tc-type">{t.type}</span>
              </div>
              <h3 className="tc-title">{t.title}</h3>
              <p className="tc-desc">{t.desc}</p>
              <a
                href="https://wa.me/919965310489"
                className="tc-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Inquire about ${t.title}`}
              >
                Inquire →
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
