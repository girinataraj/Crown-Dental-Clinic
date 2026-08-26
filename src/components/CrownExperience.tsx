import { motion } from 'framer-motion';
import { CLINIC, IMAGES } from '../data/clinic';
import './CrownExperience.css';

const journeySteps = [
  {
    step: '01',
    title: 'Consultation & Assessment',
    desc: 'A full clinical evaluation of what you came in for — and a plain explanation of what we found.',
  },
  {
    step: '02',
    title: 'Planned Clinical Care',
    desc: 'Treatment carried out in private, sterile suites by the specialist best suited to your case.',
  },
  {
    step: '03',
    title: 'Review & Aftercare',
    desc: 'Structured follow-up, maintenance guidance and a direct line back to the clinic when you need it.',
  },
];

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function CrownExperience() {
  return (
    <section id="experience" className="experience-section" aria-label="The Crown patient experience">
      <div className="container">

        <div className="experience-grid">

          {/* ── Editorial Collage ── */}
          <motion.div
            initial={{ opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="experience-visuals"
          >
            <div className="exp-collage">
              <div className="exp-collage-left">
                <img src={IMAGES.dentalSuite} alt="Dental operatory at Crown Clinic" className="exp-img-main" loading="lazy" />
              </div>
              <div className="exp-collage-right">
                <img src={IMAGES.kavin} alt="Expertise at Crown" className="exp-img-square" loading="lazy" />
                <img src={IMAGES.cosmetologySuite} alt="Medical cosmetology room" className="exp-img-horiz" loading="lazy" />
              </div>
              
              <div className="exp-badge-overlap">
                <span className="exp-badge-text">
                  THE CROWN<br />EXPERIENCE
                </span>
              </div>
            </div>
          </motion.div>

          {/* ── Copy & Value Blocks ── */}
          <motion.div
            initial={{ opacity: 0, x: 22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="experience-content"
          >
            <span className="section-badge section-badge--light">Why Choose Us</span>
            <h2 className="experience-title">
              Complete Clinical Care for Healthy &amp; Confident Smiles
            </h2>
            <div className="experience-story">
              <p>
                Advanced clinical care should never feel intimidating. Crown pairs modern
                equipment and disciplined clinical protocol with a calm, unhurried
                environment — so the experience is as considered as the treatment.
              </p>
            </div>

            <div className="value-blocks">
              <div className="value-block">
                <span className="vb-icon" aria-hidden="true"><CheckIcon /></span>
                <div className="vb-content">
                  <h4 className="vb-title">Specialist-led Care</h4>
                  <p className="vb-text">Our skilled dental and cosmetology experts provide precise treatments with genuine care.</p>
                </div>
              </div>

              <div className="value-block">
                <span className="vb-icon" aria-hidden="true"><CheckIcon /></span>
                <div className="vb-content">
                  <h4 className="vb-title">Comprehensive Solutions</h4>
                  <p className="vb-text">From routine checkups to advanced smile makeovers, all under one roof.</p>
                </div>
              </div>
            </div>

            <div className="exp-cta-row">
              <a href={CLINIC.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Start Your Consultation
              </a>
              <span className="exp-phone-contact">
                {CLINIC.phoneDisplay}
              </span>
            </div>
          </motion.div>

        </div>

        {/* ── 3-step journey ── */}
        <div className="journey-row">
          {journeySteps.map((j, i) => (
            <motion.div
              key={j.step}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="journey-card"
            >
              <span className="journey-num">{j.step}</span>
              <h3 className="journey-title">{j.title}</h3>
              <p className="journey-desc">{j.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

