import { motion } from 'framer-motion';
import './SpecialistTeam.css';

const specialists = [
  { name: 'Dr. Sivaprakash',      initial: 'S', creds: 'BDS',  role: 'General Dentist' },
  { name: 'Dr. Sasi Rekha',       initial: 'R', creds: 'MDS',  role: 'Oral & Maxillofacial Radiologist' },
  { name: 'Dr. Thangamani Ammal', initial: 'T', creds: 'MDS',  role: 'Orthodontist' },
  { name: 'Dr. Vinodh',           initial: 'V', creds: 'MDS',  role: 'Oral & Maxillofacial Surgeon' },
];

export default function SpecialistTeam() {
  return (
    <section className="specialists-section" aria-label="Our specialist team">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.0, 0.0, 0.2, 1] }}
          className="section-header center"
        >
          <span className="section-badge">Consulting Team</span>
          <h2>Our Specialists</h2>
          <p className="text-navy-muted">Board-certified specialists across every discipline.</p>
        </motion.div>

        <div className="specialists-grid">
          {specialists.map((doc, i) => (
            <motion.div
              key={doc.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.0, 0.0, 0.2, 1] }}
              className="specialist-card"
            >
              <div className="specialist-avatar" aria-hidden="true">
                <span className="specialist-initial">{doc.initial}</span>
              </div>
              <div className="specialist-info">
                <h3 className="specialist-name">{doc.name}</h3>
                <p className="specialist-creds">{doc.creds}</p>
                <p className="specialist-role">{doc.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
