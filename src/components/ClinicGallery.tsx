import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CLINIC, IMAGES } from '../data/clinic';
import './ClinicGallery.css';

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  desc: string;
  objectPosition?: string;
}

const feature: GalleryImage = {
  src: IMAGES.interiorMain,
  alt: 'Crown Dental & Cosmetology Clinic modern reception, waiting lounge, and illuminated branding wall in Erode',
  caption: 'Reception & Waiting Lounge',
  desc: 'Welcoming consultation desk, geometric ceiling lighting, and calm patient waiting lounge with illuminated clinic branding.',
  objectPosition: 'center 45%',
};

const supporting: GalleryImage[] = [
  {
    src: IMAGES.milestone,
    alt: 'Crown clinic milestone celebrating a completed clear aligner smile transformation',
    caption: 'Smile Transformation Milestone',
    desc: 'A proud clinic moment marking a completed custom clear aligner journey at Crown Dental Clinic.',
    objectPosition: 'center 18%',
  },
  {
    src: IMAGES.exterior,
    alt: 'Crown Dental & Cosmetology Clinic street-level entrance and official signage in Erode',
    caption: 'Clinic Facade — Daytime',
    desc: `${CLINIC.addressLine1}, Erode — fully equipped for advanced dental care and medical cosmetology.`,
    objectPosition: 'center center',
  },
  {
    src: IMAGES.exteriorNight,
    alt: 'Crown Dental & Cosmetology Clinic illuminated evening exterior and clinical signage',
    caption: 'Illuminated Evening Facade',
    desc: 'Prominent street view showing evening illumination and specialized dental & cosmetology practice signage.',
    objectPosition: 'center 32%',
  },
  {
    src: IMAGES.interiorAlt,
    alt: 'Patient lounge, indoor green area, and clinical awards display at Crown Clinic',
    caption: 'Lounge & Clinical Accreditations',
    desc: 'Patient comfort zone featuring verified Dental Council registrations, clinical credentials, and oral health displays.',
    objectPosition: 'center 40%',
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
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="gallery-feature"
            {...openable(feature)}
          >
            <img
              src={feature.src}
              alt={feature.alt}
              loading="lazy"
              style={{ objectPosition: feature.objectPosition }}
            />
            <figcaption className="gallery-feature-card">
              <span className="gf-eyebrow">Clinic Space</span>
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
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.08 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="gallery-support-item"
                {...openable(img)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  style={{ objectPosition: img.objectPosition }}
                />
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
