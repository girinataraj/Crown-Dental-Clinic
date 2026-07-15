import { motion } from 'framer-motion';
import './DrMonnica.css';

export default function DrMonnica() {
  return (
    <section className="drmonnica-section" aria-label="About Dr. Monnica V">
      <div className="container">
        <div className="drmonnica-grid">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.0, 0.0, 0.2, 1] }}
            className="drmonnica-image-wrapper"
          >
            <div className="drmonnica-photo-frame">
              <img
                src="/images/Doc image.jpeg"
                alt="Dr. Monnica V — Managing & Clinical Director of Crown Dental & Cosmetology Clinic"
                loading="lazy"
              />
            </div>
            <div className="drmonnica-frame-accent" aria-hidden="true" />
          </motion.div>

          {/* Content */}
          <div className="drmonnica-content">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.0, 0.0, 0.2, 1] }}
            >
              <span className="section-badge">Leadership</span>
              <h2 className="drmonnica-name">
                Dr. Monnica V <span className="drmonnica-creds">MDS, FMC</span>
              </h2>
              <p className="drmonnica-title">Managing &amp; Clinical Director</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.0, 0.0, 0.2, 1] }}
              className="drmonnica-specs"
            >
              {['Consultant Prosthodontist', 'Implantologist', 'Medical Cosmetologist'].map(spec => (
                <div className="spec-item" key={spec}>
                  <span className="spec-dot" aria-hidden="true" />
                  {spec}
                </div>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.0, 0.0, 0.2, 1] }}
              className="drmonnica-bio"
            >
              Dr. Monnica leads Crown Dental with a dual focus on restorative dentistry and medical aesthetics. With advanced training in prosthodontics and implantology, she brings precision and artistry to every treatment — from complete smile reconstructions to clinically guided cosmetology procedures.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45, ease: [0.0, 0.0, 0.2, 1] }}
            >
              <a
                href="https://wa.me/918946013270"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                aria-label="Consult with Dr. Monnica via WhatsApp"
              >
                Consult with Dr. Monnica
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
