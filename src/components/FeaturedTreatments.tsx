import { motion } from 'framer-motion';
import './FeaturedTreatments.css';

const treatments = [
  {
    id: 'aligners',
    title: 'Invisible Aligners',
    desc: 'Clear orthodontic correction for a straighter smile — without traditional braces.',
    type: 'Dental',
    icon: '✨'
  },
  {
    id: 'implants',
    title: 'Dental Implants',
    desc: 'Permanent, natural-looking tooth replacements using precision implant technology.',
    type: 'Dental',
    icon: '🦷'
  },
  {
    id: 'smile',
    title: 'Smile Makeover',
    desc: 'Complete aesthetic transformation with veneers, crowns, and professional whitening.',
    type: 'Dental',
    icon: '💎'
  },
  {
    id: 'hydrafacial',
    title: 'Medi-Facials',
    desc: 'Clinically guided facial treatments that rejuvenate, hydrate, and brighten your skin.',
    type: 'Cosmetology',
    icon: '💧'
  },
  {
    id: 'prp',
    title: 'Hair PRP Therapy',
    desc: 'Platelet-rich plasma treatments to promote natural hair density and scalp health.',
    type: 'Cosmetology',
    icon: '🌿'
  },
  {
    id: 'acne',
    title: 'Skin & Laser Therapy',
    desc: 'Advanced laser and medical treatments for acne scars, pigmentation, and skin renewal.',
    type: 'Cosmetology',
    icon: '⚡'
  }
];

export default function FeaturedTreatments() {
  return (
    <section id="treatments" className="treatments-section">
      <div className="container">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-badge">Our Services</span>
          <h2>Treatments We Offer</h2>
          <p className="text-navy-muted">Comprehensive dental and aesthetic care, personalised for you.</p>
        </motion.div>

        <div className="treatments-stack">
          {treatments.map((t, i) => (
            <motion.div 
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="treatment-card glass-panel"
            >
              <div className="tc-header">
                <span className="tc-icon" aria-hidden="true">{t.icon}</span>
                <span className="tc-type">{t.type}</span>
              </div>
              <h3 className="tc-title">{t.title}</h3>
              <p className="tc-desc text-navy-muted">{t.desc}</p>
              
              <a href="https://wa.me/918946013270" className="tc-link" target="_blank" rel="noopener noreferrer">
                Enquire &rarr;
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
