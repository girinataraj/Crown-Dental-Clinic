import { motion } from 'framer-motion';
import './SpecialistTeam.css';

const specialists = [
  {
    name: 'Dr. Sivaprakash',
    creds: 'BDS',
    role: 'General Dentist',
    scope: 'Comprehensive preventive care, routine restorations and everyday oral health maintenance.',
    areas: ['Check-ups', 'Fillings', 'Preventive care'],
  },
  {
    name: 'Dr. Sasi Rekha',
    creds: 'MDS',
    role: 'Oral & Maxillofacial Radiologist',
    scope: 'Advanced diagnostic radiography and specialised interpretation of clinical imaging.',
    areas: ['Diagnostics', 'Imaging', 'Case assessment'],
  },
  {
    name: 'Dr. Thangamani Ammal',
    creds: 'MDS',
    role: 'Orthodontist',
    scope: 'Orthodontic alignment, malocclusion management and clear aligner treatment planning.',
    areas: ['Braces', 'Clear aligners', 'Bite correction'],
  },
  {
    name: 'Dr. Vinodh',
    creds: 'MDS',
    role: 'Oral & Maxillofacial Surgeon',
    scope: 'Surgical extractions, impacted teeth and specialised oral-facial surgical care.',
    areas: ['Wisdom teeth', 'Surgical extraction', 'Minor oral surgery'],
  },
];

export default function SpecialistTeam() {
  return (
    <section className="specialists-section" aria-label="Consulting specialist team">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="section-header center section-header--dark"
        >
          <span className="section-badge section-badge--dark">Consulting Specialists</span>
          <h2>Specialist Care, Discipline by Discipline</h2>
          <p>
            Complex cases are handled by the consultant qualified for them — orthodontics,
            oral surgery, radiology — all working within the same clinic.
          </p>
        </motion.div>

        <div className="specialists-grid">
          {specialists.map((doc, i) => (
            <motion.article
              key={doc.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="specialist-card"
            >
              <div className="specialist-card-top">
                <span className="specialist-index" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <div className="specialist-name-row">
                  <h3 className="specialist-name">{doc.name}</h3>
                  <span className="specialist-creds-pill">{doc.creds}</span>
                </div>
                <p className="specialist-role">{doc.role}</p>
              </div>

              <p className="specialist-scope">{doc.scope}</p>

              <div className="specialist-areas">
                {doc.areas.map((a) => (
                  <span className="specialist-area" key={a}>{a}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
