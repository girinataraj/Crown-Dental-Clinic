import { useState, useRef, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CLINIC } from '../data/clinic';
import './Reviews.css';

const reviews = [
  {
    name: 'Priya S.',
    initial: 'P',
    treatment: 'Invisalign® Patient',
    text: 'Dr. Monnica and the team made my Invisalign journey incredibly smooth. The clinic feels like a premium lounge — not a dentist at all. Best dental experience I\'ve ever had.',
  },
  {
    name: 'Rajesh K.',
    initial: 'R',
    treatment: 'Dental Implants',
    text: 'Got my dental implants done here. World-class treatment, completely painless procedure. The staff checks on you every step of the way. Couldn\'t be happier.',
  },
  {
    name: 'Anitha M.',
    initial: 'A',
    treatment: 'Hydra Facial',
    text: 'The hydra facial was transformative. My skin looked radiant after just one session. The cosmetology team is professional, knowledgeable and genuinely warm.',
  },
  {
    name: 'Suresh V.',
    initial: 'S',
    treatment: 'Smile Makeover',
    text: 'Amazing smile makeover — they used 3D scanning and the result exceeded my expectations completely. The attention to every detail shows how much they care.',
  },
];

/* Gold star — premium trust indicator with non-wrapping flex layout */
const StarIcon = () => (
  <svg width="13" height="13" viewBox="0 0 20 20" fill="#D4AF37" aria-hidden="true" style={{ flex: 'none' }}>
    <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.27l-4.77 2.51.91-5.33L2.27 6.62l5.34-.78L10 1z" />
  </svg>
);

/* Hoisted to module scope — defining this inside Reviews() would
   recreate the component on every render (e.g. every pause/resume
   toggle from hover or touch), forcing React to remount all 8 cards
   in each track and restart the marquee's visual state. */
/* Each track internally repeats the 4 reviews once (8 cards) purely so
   the track is wide enough to fill ultra-wide viewports with no visible
   gap — the CSS marquee needs that width, not the reader. Only the
   first pass (i < reviews.length) is real content; the second pass
   inside this track, and the entire duplicate second .reviews-track,
   exist solely to keep the loop visually seamless and are pruned from
   the accessibility tree so a screen reader hits each review once. */
const ReviewContent = () => (
  <>
    {[...reviews, ...reviews].map((r, i) => {
      const isDuplicate = i >= reviews.length;
      return (
        <div
          key={`${r.name}-${i}`}
          className="review-card"
          role={isDuplicate ? undefined : 'article'}
          aria-label={isDuplicate ? undefined : `Review by ${r.name}`}
          aria-hidden={isDuplicate ? 'true' : undefined}
        >
          <div className="review-quote-mark" aria-hidden="true">"</div>
          <div className="review-tag-badge">
            <span>{r.treatment}</span>
          </div>
          <p className="review-text">{r.text}</p>
          <div className="review-author">
            <div className="review-avatar" aria-hidden="true">{r.initial}</div>
            <div className="review-meta">
              <span className="review-name">{r.name}</span>
              <div className="review-stars-small" aria-label="5 out of 5 stars" role="img">
                <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/>
              </div>
            </div>
          </div>
        </div>
      );
    })}
  </>
);

export default function Reviews() {
  const [paused, setPaused] = useState(false);
  const resumeTimer = useRef<number | undefined>(undefined);

  const pause = useCallback(() => {
    window.clearTimeout(resumeTimer.current);
    setPaused(true);
  }, []);

  const resumeSoon = useCallback((delay = 1200) => {
    window.clearTimeout(resumeTimer.current);
    resumeTimer.current = window.setTimeout(() => setPaused(false), delay);
  }, []);

  useEffect(() => () => window.clearTimeout(resumeTimer.current), []);

  return (
    <section id="reviews" className="reviews-section" aria-label="Patient testimonials">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.70, ease: [0.22, 1, 0.36, 1] }}
          className="section-header center section-header--dark"
        >
          <span className="section-badge section-badge--dark">Patient Confidence</span>
          <h2>Genuine Experiences</h2>
          <div className="reviews-google-badge" aria-label={`${CLINIC.googleRating} stars on Google Reviews`}>
            <span className="rgb-score">{CLINIC.googleRating}</span>
            <div className="rgb-stars" aria-hidden="true">
              <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/>
            </div>
            <span className="rgb-text">{CLINIC.googleReviewCount} Google Reviews</span>
          </div>
        </motion.div>

        <div
          className="reviews-scroll-container"
          role="region"
          aria-label="Patient review carousel"
          onMouseEnter={pause}
          onMouseLeave={() => resumeSoon(300)}
          onTouchStart={pause}
          onTouchEnd={() => resumeSoon(1500)}
          onTouchCancel={() => resumeSoon(1500)}
        >
          <div className={`reviews-track ${paused ? 'is-paused' : ''}`}>
            <ReviewContent />
          </div>
          <div className={`reviews-track ${paused ? 'is-paused' : ''}`} aria-hidden="true">
            <ReviewContent />
          </div>
        </div>

      </div>
    </section>
  );
}
