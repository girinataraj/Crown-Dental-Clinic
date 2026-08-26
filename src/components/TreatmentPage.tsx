import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CLINIC, IMAGES, whatsappFor } from '../data/clinic';
import { getTreatment, getRelated } from '../data/treatments';
import { treatmentHref } from '../hooks/useRoute';
import TreatmentIcon from './icons/TreatmentIcon';
import './TreatmentPage.css';

interface Props {
  id: string;
  navigate: (to: string) => void;
}

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const fade = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
};

export default function TreatmentPage({ id, navigate }: Props) {
  const treatment = getTreatment(id);

  /* Always open a treatment page at the top */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [id]);

  /* Keep the document title in step with the route */
  useEffect(() => {
    const previous = document.title;
    if (treatment) {
      document.title = `${treatment.title} | Crown Dental & Cosmetology Clinic, Erode`;
    }
    return () => { document.title = previous; };
  }, [treatment]);

  const goHome = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('');
  };

  const goTreatments = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('');
    window.setTimeout(() => {
      document.querySelector('#treatments')?.scrollIntoView({ behavior: 'smooth' });
    }, 90);
  };

  if (!treatment) {
    return (
      <main className="tp-notfound">
        <div className="container tp-notfound-inner">
          <span className="section-badge section-badge--dark">Not found</span>
          <h1>That treatment page doesn’t exist</h1>
          <p>The link may be out of date. Browse the full list of Crown treatments instead.</p>
          <a href="#treatments" className="btn-primary" onClick={goTreatments}>
            View all treatments
          </a>
        </div>
      </main>
    );
  }

  const t = treatment;
  const related = getRelated(t);
  const isDental = t.category === 'Dental';

  return (
    <main className="treatment-page">

      {/* ── Page banner ── */}
      <header className="tp-banner">
        <div className="tp-banner-media" aria-hidden="true">
          <img src={t.image} alt="" />
        </div>

        <div className="container tp-banner-inner">
          <nav className="tp-crumbs" aria-label="Breadcrumb">
            <a href="#home" onClick={goHome}>Home</a>
            <span aria-hidden="true">/</span>
            <a href="#treatments" onClick={goTreatments}>Treatments</a>
            <span aria-hidden="true">/</span>
            <span className="tp-crumb-current">{t.title}</span>
          </nav>

          <span className="tp-banner-badge">
            {isDental ? 'Dental Care' : 'Medical Cosmetology'}
          </span>
          <h1 className="tp-banner-title">
            <span className="tp-banner-glyph" aria-hidden="true"><TreatmentIcon name={t.icon} /></span>
            {t.title}
          </h1>
          <p className="tp-banner-tagline">{t.tagline}</p>

          <div className="tp-banner-actions">
            <a href={whatsappFor(t.title)} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Enquire on WhatsApp
            </a>
            <a href={CLINIC.phoneHref} className="btn-outline">
              Call {CLINIC.phoneDisplay}
            </a>
          </div>
        </div>
      </header>

      {/* ── What it is + overview ── */}
      <section className="tp-intro" aria-label={`About ${t.title}`}>
        <div className="container">
          <div className="tp-intro-grid">

            <motion.div {...fade} className="tp-intro-visual">
              <figure className="tp-figure tp-figure--main">
                <img src={t.image} alt={t.imageLabel} loading="lazy" />
                <figcaption>{t.imageLabel}</figcaption>
              </figure>
              <figure className="tp-figure tp-figure--sub">
                <img src={IMAGES.exterior}
                  alt="Crown Dental &amp; Cosmetology Clinic, Erode" loading="lazy" />
              </figure>
            </motion.div>

            <motion.div {...fade} className="tp-intro-copy">
              <span className="section-badge section-badge--light">What it is</span>
              <h2 className="tp-h2">{t.title} at Crown</h2>
              <p className="tp-lead">{t.whatItIs}</p>
              {t.overview.map((p) => (
                <p className="tp-para" key={p.slice(0, 32)}>{p}</p>
              ))}

              <div className="tp-ideal">
                <h3 className="tp-h3">Ideal for</h3>
                <ul className="tp-ideal-list">
                  {t.idealFor.map((x) => (
                    <li key={x}><span className="tp-tick"><CheckIcon /></span>{x}</li>
                  ))}
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── What to expect ── */}
      <section className="tp-process" aria-label="What to expect">
        <div className="container">
          <motion.div {...fade} className="section-header center section-header--dark">
            <span className="section-badge section-badge--dark">Your visit</span>
            <h2>What to Expect</h2>
            <p>How {t.title.toLowerCase()} is planned and delivered at Crown, step by step.</p>
          </motion.div>

          <div className="tp-steps">
            {t.process.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="tp-step"
              >
                <span className="tp-step-num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="tp-step-title">{s.title}</h3>
                <p className="tp-step-desc">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits + specialist ── */}
      <section className="tp-benefits" aria-label="Key benefits">
        <div className="container">
          <div className="tp-benefits-grid">

            <motion.div {...fade} className="tp-benefits-main">
              <span className="section-badge section-badge--light">Why patients choose it</span>
              <h2 className="tp-h2">Key Benefits</h2>
              <ul className="tp-benefit-list">
                {t.benefits.map((b) => (
                  <li key={b}>
                    <span className="tp-benefit-mark"><CheckIcon /></span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.aside {...fade} className="tp-specialist">
              <span className="tp-spec-eyebrow">Care led by</span>
              <p className="tp-spec-name">{t.specialist}</p>
              <p className="tp-spec-note">
                Every {t.title.toLowerCase()} plan at Crown is assessed before it is
                recommended, and explained in full before it begins.
              </p>
              <div className="tp-spec-actions">
                <a href={whatsappFor(t.title)} target="_blank" rel="noopener noreferrer"
                  className="btn-whatsapp tp-spec-btn">
                  Ask about {t.title}
                </a>
              </div>
            </motion.aside>

          </div>
        </div>
      </section>

      {/* ── Related ── */}
      {related.length > 0 && (
        <section className="tp-related" aria-label="Related treatments">
          <div className="container">
            <motion.div {...fade} className="section-header center section-header--light">
              <span className="section-badge section-badge--light">Also consider</span>
              <h2>Related Treatments</h2>
            </motion.div>

            <div className="tp-related-grid">
              {related.map((r, i) => (
                <motion.a
                  key={r.id}
                  href={treatmentHref(r.id)}
                  onClick={(e) => { e.preventDefault(); navigate(treatmentHref(r.id)); }}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="tp-related-card"
                >
                  <span className="tp-related-icon" aria-hidden="true"><TreatmentIcon name={r.icon} /></span>
                  <h3 className="tp-related-title">{r.title}</h3>
                  <p className="tp-related-desc">{r.short}</p>
                  <span className="tp-related-link">Learn more <ArrowIcon /></span>
                </motion.a>
              ))}
            </div>

            <div className="tp-back-row">
              <a href="#treatments" className="tp-back" onClick={goTreatments}>
                ← Back to all treatments
              </a>
            </div>
          </div>
        </section>
      )}

      {/* ── CTA band ── */}
      <section className="tp-cta" aria-label="Start your consultation">
        <div className="tp-cta-media" aria-hidden="true">
          <img src={isDental ? IMAGES.dentalSuite : IMAGES.cosmetologySuite} alt="" />
        </div>
        <div className="container tp-cta-inner">
          <motion.div {...fade}>
            <span className="section-badge section-badge--dark">Have a question?</span>
            <h2 className="tp-cta-title">Talk to us about {t.title}</h2>
            <p className="tp-cta-text">
              Speak with the Crown team about whether this treatment suits you.
              Call the clinic or send a message — we’ll guide you to the right specialist.
            </p>
            <div className="tp-cta-actions">
              <a href={whatsappFor(t.title)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                WhatsApp {CLINIC.phoneDisplay}
              </a>
              <a href={CLINIC.phoneHref} className="btn-outline">Call the Clinic</a>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
