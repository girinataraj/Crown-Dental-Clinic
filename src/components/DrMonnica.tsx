import { motion } from 'framer-motion';
import { CLINIC, IMAGES } from '../data/clinic';
import './DrMonnica.css';

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function DrMonnica() {
  return (
    <section id="doctors" className="drmonnica-section" aria-label="Crown Dental doctors and leadership">
      <div className="container">

        <motion.div
          {...fadeIn}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="section-header center section-header--dark doctors-header"
        >
          <span className="section-badge section-badge--dark">Our Team</span>
          <h2>The People Behind Crown</h2>
          <p>
            Treatment at Crown is planned and delivered by qualified specialists —
            each named, each accountable for the care they provide.
          </p>
        </motion.div>

        {/* ── Dr. Monnica V ── */}
        <motion.div
          className="drmonnica-grid"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="drmonnica-image-wrapper">
            <div className="drmonnica-photo-frame">
              <img
                src={IMAGES.drMonnica}
                alt="Dr. Monnica V — Managing &amp; Clinical Director of Crown Dental &amp; Cosmetology Clinic"
              />
            </div>
            <div className="drmonnica-frame-accent" aria-hidden="true" />
          </div>

          <div className="drmonnica-content">
            <div>
              <span className="doctor-rank">Leadership</span>
              <h3 className="drmonnica-name">
                Dr. Monnica V <span className="drmonnica-creds">MDS, FMC</span>
              </h3>
              <p className="drmonnica-title">Managing &amp; Clinical Director</p>
            </div>

            <div className="drmonnica-specs">
              {['Consultant Prosthodontist', 'Implantologist', 'Medical Cosmetologist'].map((spec) => (
                <div className="spec-item" key={spec}>
                  <span className="spec-dot" aria-hidden="true" />
                  {spec}
                </div>
              ))}
            </div>

            <div className="drmonnica-bio">
              <p>
                Dr. Monnica leads Crown with a dual focus on restorative dentistry and
                medical aesthetics. With advanced training in prosthodontics and
                implantology, she brings precision and artistry to every treatment — from
                full smile reconstruction to clinically supervised cosmetology procedures.
              </p>
              <p>
                She personally oversees implant, prosthodontic and smile-design cases,
                and supervises the clinic’s medical cosmetology stream.
              </p>
            </div>

            <div className="doctor-actions">
              <a
                href={CLINIC.monnicaWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                aria-label="Consult Dr. Monnica on WhatsApp"
              >
                Consult Dr. Monnica
              </a>
              <span className="doctor-direct">
                <span className="doctor-direct-label">Direct line</span>
                <span className="doctor-direct-num">{CLINIC.monnicaPhoneDisplay}</span>
              </span>
            </div>
          </div>
        </motion.div>

        <div className="profile-spacer" aria-hidden="true" />

        {/* ── Mr. Kavin Kumar ── */}
        <motion.div
          className="drmonnica-grid reverse"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="drmonnica-image-wrapper">
            <div className="drmonnica-photo-frame">
              <img
                src={IMAGES.kavin}
                alt="Mr. Kavin Kumar — Managing Director of Crown Dental &amp; Cosmetology Clinic"
              />
            </div>
            <div className="drmonnica-frame-accent accent-left" aria-hidden="true" />
          </div>

          <div className="drmonnica-content">
            <div>
              <span className="doctor-rank">Management</span>
              <h3 className="drmonnica-name">
                Mr. Kavin Kumar <span className="drmonnica-creds">DCE, BE</span>
              </h3>
              <p className="drmonnica-title">Managing Director</p>
            </div>

            <div className="drmonnica-specs">
              {[
                'Clinic Administration',
                'Patient Care Management',
                'Operations Management',
                'Quality Standards',
                'Business Development',
              ].map((spec) => (
                <div className="spec-item" key={spec}>
                  <span className="spec-dot" aria-hidden="true" />
                  {spec}
                </div>
              ))}
            </div>

            <div className="drmonnica-bio">
              <p>
                Mr. Kavin Kumar is the Managing Director of Crown Dental &amp; Cosmetology
                Clinic, with over <strong>15 years of experience in dental hospital
                management</strong>.
              </p>
              <p>
                He has played a key role in building a patient-focused clinic that combines
                advanced dental technology with compassionate care. His vision is to provide
                affordable, ethical and high-quality dental treatment, while ensuring every
                patient has a comfortable and positive experience.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
