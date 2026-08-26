import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CLINIC, IMAGES } from '../data/clinic';
import './ClinicGallery.css';

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  desc: string;
}

const feature: GalleryImage = {
  src: IMAGES.dentalSuite,
  alt: 'Dental operatory suite with clinical chair and lighting at Crown Dental Clinic',
  caption: 'The Dental Suite',
  desc: 'Ergonomic patient chair, modern illumination and an integrated clinical setup — arranged so procedures stay unhurried and precise.',
};

const supporting: GalleryImage[] = [
  {
    src: IMAGES.cosmetologySuite,
    alt: 'Cosmetology treatment room with skin care and aesthetic equipment',
    caption: 'Cosmetology Suite',
    desc: 'A separate room dedicated to clinical facials, skin protocols and hair therapy.',
  },
  {
    src: IMAGES.exterior,
    alt: 'Crown Dental & Cosmetology Clinic exterior storefront in Erode',
    caption: 'The Clinic',
    desc: `${CLINIC.addressLine1}, Erode.`,
  },
];

export default function ClinicGallery() {
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  useEffect(() => {
    if (!selected) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelected(null); };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [selected]);

  const openable = (img: GalleryImage) => ({
    onClick: () => setSelected(img),
    tabIndex: 0,
    role: 'button',
    'aria-label': `View ${img.caption} enlarged`,
    onKeyDown: (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelected(img); }
    },
  });

  return (
    <section id="gallery" className="gallery-section" aria-label="Inside the clinic">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="section-header center section-header--light"
        >
          <span className="section-badge section-badge--light">The Space</span>
          <h2>Inside Crown</h2>
          <p>
            Two purpose-built clinical rooms, one calm environment — designed so that
            treatment feels considered rather than clinical.
          </p>
        </motion.div>

        <div className="gallery-editorial">

          {/* ── Feature ── */}
          <motion.figure
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="gallery-feature"
            {...openable(feature)}
          >
            <img src={feature.src} alt={feature.alt} loading="lazy" />
            <figcaption className="gallery-feature-card">
              <span className="gf-eyebrow">Treatment Environment</span>
              <span className="gf-title">{feature.caption}</span>
              <span className="gf-desc">{feature.desc}</span>
            </figcaption>
            <span className="gallery-zoom-hint" aria-hidden="true">Expand</span>
          </motion.figure>

          {/* ── Supporting ── */}
          <div className="gallery-support">
            {supporting.map((img, i) => (
              <motion.figure
                key={img.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="gallery-support-item"
                {...openable(img)}
              >
                <img src={img.src} alt={img.alt} loading="lazy" />
                <figcaption className="gallery-info-overlay">
                  <span className="gallery-caption">{img.caption}</span>
                  <span className="gallery-desc-snippet">{img.desc}</span>
                </figcaption>
                <span className="gallery-zoom-hint" aria-hidden="true">Expand</span>
              </motion.figure>
            ))}
          </div>

        </div>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="gallery-lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            role="dialog"
            aria-modal="true"
            aria-label={selected.caption}
          >
            <button className="lightbox-close-btn" onClick={() => setSelected(null)} aria-label="Close">✕</button>
            <motion.div
              className="gallery-lightbox-content"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selected.src} alt={selected.alt} className="lightbox-img" />
              <div className="lightbox-text-wrapper">
                <p className="lightbox-caption">{selected.caption}</p>
                <p className="lightbox-desc">{selected.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
