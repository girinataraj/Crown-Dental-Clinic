import { motion } from 'framer-motion';
import './CrownExperience.css';

export default function CrownExperience() {
  return (
    <section className="experience-section">
      <div className="container">
        
        <div className="experience-grid">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="experience-content"
          >
            <span className="section-badge">The Crown Experience</span>
            <h2 className="experience-title">Where Science Meets Comfort</h2>
            
            <div className="experience-story">
              <p>
                Crown Dental &amp; Cosmetology Clinic is built on a simple principle: advanced medical care should never feel clinical. Our Erode clinic combines hospital-grade sterilisation and modern diagnostic equipment with a warm, premium environment.
              </p>
              <p>
                From digital imaging and precision implant planning to medically supervised cosmetology treatments — every detail is designed for accuracy, safety, and your confidence.
              </p>
            </div>
            
            <div className="experience-stats">
              <div className="stat-item">
                <span className="stat-value">10+</span>
                <span className="stat-label">Years of<br/>Excellence</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-value">5K+</span>
                <span className="stat-label">Confident<br/>Smiles</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="experience-visuals"
          >
            {/* Dental suite — primary image */}
            <div className="exp-img-wrapper main-img">
              <img
                src="/images/treatment-room-2.png"
                alt="Modern dental suite with advanced dental chair and equipment at Crown Dental Clinic"
                className="exp-img"
                loading="lazy"
              />
            </div>
            {/* Cosmetology room — secondary image */}
            <div className="exp-img-wrapper secondary-img">
              <img
                src="/images/treatment-room-1.png"
                alt="Cosmetology treatment room with specialised skin care equipment"
                className="exp-img"
                loading="lazy"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
