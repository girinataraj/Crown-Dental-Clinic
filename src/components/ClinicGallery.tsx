import { motion } from 'framer-motion';
import './ClinicGallery.css';

const images = [
  {
    src: '/images/treatment-room-2.png',
    alt: 'State-of-the-art dental suite with modern dental chair and overhead lighting',
    caption: 'Dental Suite',
  },
  {
    src: '/images/treatment-room-1.png',
    alt: 'Cosmetology treatment room with specialised skin care and HydraFacial equipment',
    caption: 'Cosmetology Room',
  },
  {
    src: '/images/clinic-exterior.png',
    alt: 'Crown Dental & Cosmetology Clinic exterior storefront in Erode',
    caption: 'Our Clinic',
  },
];

export default function ClinicGallery() {
  return (
    <section id="gallery" className="gallery-section" aria-label="Clinic gallery">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.0, 0.0, 0.2, 1] }}
          className="section-header center"
        >
          <span className="section-badge">The Space</span>
          <h2>Inside The Clinic</h2>
          <p className="text-navy-muted">A premium environment designed for your comfort and confidence.</p>
        </motion.div>

        <div className="gallery-grid">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.0, 0.0, 0.2, 1] }}
              className="gallery-item"
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <span className="gallery-caption">{img.caption}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
