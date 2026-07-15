import { motion } from 'framer-motion';
import './Contact.css';

const contactDetails = [
  {
    icon: '📍',
    label: 'Location',
    content: (
      <>19-A Square Building, Vasuki 5th Street,<br />Senguthar School Back Side, Erode – 638001</>
    ),
  },
  {
    icon: '📞',
    label: 'Phone',
    content: (
      <>
        <a href="tel:+918946013270">+91 89460 13270</a><br />
        <a href="tel:+919965310489">+91 99653 10489</a>
      </>
    ),
  },
  {
    icon: '✉',
    label: 'Email',
    content: (
      <a href="mailto:crowndentalcosmetology@gmail.com">crowndentalcosmetology@gmail.com</a>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="contact-section" aria-label="Contact information">
      <div className="container">
        <div className="contact-grid">

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.0, 0.0, 0.2, 1] }}
            className="contact-info"
          >
            <span className="section-badge">Find Us</span>
            <h2>Visit The Clinic</h2>

            <div className="contact-details">
              {contactDetails.map(({ icon, label, content }) => (
                <div className="detail-item" key={label}>
                  <div className="detail-icon" aria-hidden="true">{icon}</div>
                  <div>
                    <span className="detail-label">{label}</span>
                    <p className="detail-text">{content}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.0, 0.0, 0.2, 1] }}
            className="contact-map"
          >
            <iframe
              className="map-iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.169!2d77.727!3d11.341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDIwJzI3LjYiTiA3N8KwNDMnMzcuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Crown Dental & Cosmetology Clinic Location"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
