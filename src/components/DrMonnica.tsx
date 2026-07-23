import { motion } from 'framer-motion';
import './DrMonnica.css';

export default function DrMonnica() {
  return (
    <section className="drmonnica-section" aria-label="Our Leadership">
      <div className="container">
        
        {/* Dr. Monnica Profile */}
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

        <div className="profile-spacer" aria-hidden="true" />

        {/* Mr. Kavin Profile */}
        <div className="drmonnica-grid reverse">
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
                src="/images/Doc image 1.jpeg"
                alt="Mr. Kavin Kumar — Managing Director of Crown Dental & Cosmetology Clinic"
                loading="lazy"
              />
            </div>
            <div className="drmonnica-frame-accent accent-left" aria-hidden="true" />
          </motion.div>

          {/* Content */}
          <div className="drmonnica-content">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.0, 0.0, 0.2, 1] }}
            >
              <h2 className="drmonnica-name">
                Mr. Kavin Kumar <span className="drmonnica-creds">DCE, BE</span>
              </h2>
              <p className="drmonnica-title">Managing Director</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.0, 0.0, 0.2, 1] }}
              className="drmonnica-specs"
            >
              {['Clinic Administration', 'Patient Care Management', 'Operations Management', 'Quality Standards', 'Business Development'].map(spec => (
                <div className="spec-item" key={spec}>
                  <span className="spec-dot" aria-hidden="true" />
                  {spec}
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.0, 0.0, 0.2, 1] }}
              className="drmonnica-bio"
            >
              <p>
                Mr. Kavin Kumar is the Managing Director of Crown Dental &amp; Cosmetology Clinic with over <strong>15 years of experience in dental hospital management</strong>.
              </p>
              <p style={{ marginTop: '0.8rem' }}>
                With a strong commitment to excellence, he has played a key role in building a patient-focused clinic that combines advanced dental technology with compassionate care. His vision is to provide affordable, ethical, and high-quality dental treatment while ensuring every patient enjoys a comfortable and positive experience.
              </p>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
