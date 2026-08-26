import { motion } from 'framer-motion';
import { CLINIC, IMAGES } from '../data/clinic';
import './AboutCrown.css';

const pillars = [
  {
    title: 'Our Approach',
    text: 'Assess first, treat second. Every plan starts with an examination and a plain explanation of what we found — so nothing is agreed before you understand it.',
  },
  {
    title: 'Our Promise',
    text: 'Specialist-led care in a calm, sterile clinical environment, with both dentistry and medical cosmetology handled by one team you already know.',
  },
];

export default function AboutCrown() {
  return (
    <section id="about" className="about-section" aria-label="About Crown Dental & Cosmetology Clinic">
      <div className="container">
        <div className="about-grid">

          {/* ── Image collage ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="about-collage"
          >
            <figure className="ac-tile ac-tile--tall">
              <img src={IMAGES.dentalSuite}
                alt="Dental operatory suite at Crown Dental &amp; Cosmetology Clinic" loading="lazy" />
            </figure>
            <figure className="ac-tile ac-tile--top">
              <img src={IMAGES.cosmetologySuite}
                alt="Medical cosmetology treatment room at Crown Dental &amp; Cosmetology Clinic" loading="lazy" />
            </figure>
            <figure className="ac-tile ac-tile--bottom">
              <img src={IMAGES.exterior}
                alt="Crown Dental &amp; Cosmetology Clinic exterior in Erode" loading="lazy" />
            </figure>

            <div className="ac-badge" aria-label="10 plus years of care">
              <span className="ac-badge-num">10<sup>+</sup></span>
              <span className="ac-badge-label">Years of Care</span>
            </div>
          </motion.div>

          {/* ── Editorial copy ── */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="about-content"
          >
            <span className="section-badge section-badge--light">About the Clinic</span>
            <h2 className="about-title">
              Two Specialities, One Clinic,<br className="about-br" /> One Standard of Care
            </h2>

            <div className="about-body">
              <p>
                Crown Dental &amp; Cosmetology Clinic in Erode was built around a simple
                idea: advanced clinical care should never feel intimidating. Dentistry
                and medical cosmetology run side by side here, in a purpose-built
                space with a dedicated dental suite and a separate cosmetology room.
              </p>
              <p>
                Care is led by <strong>Dr. Monnica V, MDS, FMC</strong> — Consultant
                Prosthodontist, Implantologist and Medical Cosmetologist — supported by
                visiting MDS specialists in orthodontics, oral surgery and radiology.
              </p>
            </div>

            <div className="about-pillars">
              {pillars.map((p) => (
                <div className="about-pillar" key={p.title}>
                  <span className="ap-mark" aria-hidden="true" />
                  <h3 className="ap-title">{p.title}</h3>
                  <p className="ap-text">{p.text}</p>
                </div>
              ))}
            </div>

            <div className="about-actions">
              <a href={CLINIC.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Start Your Consultation
              </a>
              <a href={CLINIC.phoneHref} className="about-phone">
                <span className="about-phone-label">Call the clinic</span>
                <span className="about-phone-num">{CLINIC.phoneDisplay}</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
