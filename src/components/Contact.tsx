import { motion } from 'framer-motion';
import { CLINIC } from '../data/clinic';
import './Contact.css';

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 6-10 7L2 6" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

const contactDetails = [
  {
    Icon: PinIcon,
    label: 'Clinic Address',
    content: <>{CLINIC.addressLine1},<br />{CLINIC.addressLine2}</>,
  },
  {
    Icon: PhoneIcon,
    label: 'General Inquiries & Appointments',
    content: <a href={CLINIC.phoneHref}>{CLINIC.phoneDisplay}</a>,
  },
  {
    Icon: MailIcon,
    label: 'Email',
    content: <a href={CLINIC.emailHref}>{CLINIC.email}</a>,
  },
  {
    Icon: ClockIcon,
    label: 'Consultation Availability',
    content: 'Please contact the clinic directly via call or WhatsApp for consultation schedule and availability.',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="contact-section" aria-label="Contact information">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="section-header center section-header--light"
        >
          <span className="section-badge section-badge--light">Find Us</span>
          <h2>Visit the Clinic</h2>
          <p>We welcome you to our clinic in Erode. Reach out directly via call or WhatsApp for consultations and enquiries.</p>
        </motion.div>

        <div className="contact-grid">

          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="contact-info"
          >
            <div className="contact-details">
              {contactDetails.map(({ Icon, label, content }) => (
                <div className="detail-item" key={label}>
                  <div className="detail-icon" aria-hidden="true"><Icon /></div>
                  <div className="detail-content">
                    <span className="detail-label">{label}</span>
                    <p className="detail-text">{content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-actions">
              <a href={CLINIC.phoneHref} className="btn-primary contact-btn">Call Clinic Now</a>
              <a href={CLINIC.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp contact-btn">
                WhatsApp Consult
              </a>
              <a href={CLINIC.mapsDirections} target="_blank" rel="noopener noreferrer" className="btn-outline-light contact-btn">
                Get Directions
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="contact-map"
          >
            <iframe
              className="map-iframe"
              src={CLINIC.mapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Crown Dental & Cosmetology Clinic location"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
