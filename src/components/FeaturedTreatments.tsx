import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { TREATMENTS, FEATURED_TREATMENTS, type Treatment } from '../data/treatments';
import { treatmentHref } from '../hooks/useRoute';
import TreatmentIcon from './icons/TreatmentIcon';
import './FeaturedTreatments.css';

interface Props {
  navigate: (to: string) => void;
}

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);


const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function FeaturedTreatments({ navigate }: Props) {
  const [showAll, setShowAll] = useState(false);
  const [filter, setFilter] = useState<'All' | 'Dental' | 'Cosmetology'>('All');

  const go = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    navigate(treatmentHref(id));
  };

  const listed = TREATMENTS.filter((t) => filter === 'All' || t.category === filter);

  return (
    <section id="treatments" className="treatments-section" aria-label="Treatments at Crown">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="treatments-header"
        >
          <span className="section-badge section-badge--light">Our Treatments</span>
          <h2 className="treatments-title">Advanced Care for Every Smile &amp; Every Skin</h2>
          <p className="treatments-lead">
            Crown provides comprehensive dental and medical cosmetology treatment under
            one roof — from routine check-ups and preventive care through to implants,
            clear aligners, smile design, clinical skin protocols and hair therapy.
            Each treatment below has its own page explaining what it involves, who it
            suits and what to expect.
          </p>
        </motion.div>

        {/* ── Featured cards ── */}
        <div className="treatments-grid">
          {FEATURED_TREATMENTS.map((t: Treatment, i: number) => (
            <motion.article
              key={t.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className={`tcard tcard--${t.category.toLowerCase()}`}
            >
              <a
                href={treatmentHref(t.id)}
                className="tcard-visual"
                onClick={(e) => go(e, t.id)}
                aria-label={`${t.title} — read the full treatment page`}
              >
                <img src={t.image} alt={t.imageLabel} className="tcard-image" loading="lazy" />
                <div className="tcard-overlay">
                  <span className="tcard-type">{t.category === 'Dental' ? 'Dental Care' : 'Medical Cosmetology'}</span>
                </div>
              </a>

              <div className="tcard-body">
                <div className="tcard-title-row">
                  <h3 className="tcard-title">{t.title}</h3>
                  <span className="tcard-title-icon" aria-hidden="true"><TreatmentIcon name={t.icon} /></span>
                </div>
                <p className="tcard-desc">{t.short}</p>


                <a href={treatmentHref(t.id)} className="tcard-link" onClick={(e) => go(e, t.id)}>
                  Learn more <ArrowIcon />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ── Explore all ── */}
        <div className="explore-block">
          <button
            className={`explore-toggle ${showAll ? 'is-open' : ''}`}
            onClick={() => setShowAll((v) => !v)}
            aria-expanded={showAll}
            aria-controls="all-treatments"
          >
            {showAll ? 'Hide full treatment list' : `Explore all ${TREATMENTS.length} treatments`}
            <span className="explore-chev" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </button>

          <AnimatePresence initial={false}>
            {showAll && (
              <motion.div
                id="all-treatments"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                className="explore-panel"
              >
                <div className="explore-inner">
                  <div className="treatment-filters" role="tablist" aria-label="Filter treatments">
                    {(['All', 'Dental', 'Cosmetology'] as const).map((f) => (
                      <button
                        key={f}
                        role="tab"
                        aria-selected={filter === f}
                        className={`filter-pill ${filter === f ? 'is-active' : ''}`}
                        onClick={() => setFilter(f)}
                      >
                        {f === 'All' ? 'All Treatments' : f === 'Dental' ? 'Dental Care' : 'Medical Cosmetology'}
                      </button>
                    ))}
                  </div>

                  <div className="explore-grid">
                    {listed.map((t) => (
                      <a
                        key={t.id}
                        href={treatmentHref(t.id)}
                        className="explore-item"
                        onClick={(e) => go(e, t.id)}
                      >
                        <span className="explore-icon" aria-hidden="true"><TreatmentIcon name={t.icon} /></span>
                        <span className="explore-text">
                          <span className="explore-name">{t.title}</span>
                          <span className="explore-tag">{t.tagline}</span>
                        </span>
                        <span className="explore-arrow" aria-hidden="true"><ArrowIcon /></span>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
