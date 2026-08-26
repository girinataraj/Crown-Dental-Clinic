import { motion } from 'framer-motion';
import { CLINIC, IMAGES } from '../data/clinic';
import './ConsultationCTA.css';

export default function ConsultationCTA() {
  return (
    <section className="cta-section" aria-label="Start your consultation">
      <div className="cta-media" aria-hidden="true">
        <img src={IMAGES.exterior} alt="" />
      </div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="cta-card"
        >
          <div className="cta-content">
            <span className="section-badge section-badge--dark">Ready for a change?</span>
            <h2>Start Your Consultation</h2>
            <p>Take the first step toward a confident smile and healthier skin.</p>
          </div>

          <div className="cta-actions">
            <a href={CLINIC.whatsapp} className="btn-whatsapp" target="_blank" rel="noopener noreferrer"
              aria-label="Open WhatsApp to consult with Crown Dental">
              WhatsApp Consult
            </a>

            <div className="cta-secondary-actions">
              <a href={CLINIC.phoneHref} className="btn-outline" aria-label="Call the clinic">
                Call Clinic
              </a>
              <a href={CLINIC.mapsDirections} className="btn-outline" target="_blank" rel="noopener noreferrer"
                aria-label="Get directions to Crown Dental Clinic">
                Get Directions
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
