import { motion } from 'framer-motion';
import './Reviews.css';

const reviews = [
  {
    name: 'Priya S.',
    initial: 'P',
    text: 'Dr. Monnica and the team made my Invisalign journey incredibly smooth. The clinic feels like a premium lounge — not a dentist at all. Best dental experience I\'ve ever had.',
  },
  {
    name: 'Rajesh K.',
    initial: 'R',
    text: 'Got my dental implants done here. World-class treatment, completely painless procedure. The staff checks on you every step of the way. Couldn\'t be happier.',
  },
  {
    name: 'Anitha M.',
    initial: 'A',
    text: 'The hydra facial was transformative. My skin looked radiant after just one session. The cosmetology team is professional, knowledgeable and genuinely warm.',
  },
  {
    name: 'Suresh V.',
    initial: 'S',
    text: 'Amazing smile makeover — they used 3D scanning and the result exceeded my expectations completely. The attention to every detail shows how much they care.',
  },
];

/* Gold star — premium trust indicator */
const StarIcon = () => (
  <svg width="13" height="13" viewBox="0 0 20 20" fill="#D4AF37" aria-hidden="true">
    <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.27l-4.77 2.51.91-5.33L2.27 6.62l5.34-.78L10 1z" />
  </svg>
);

export default function Reviews() {
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
          <div className="reviews-google-badge" aria-label="4.9 stars on Google Reviews">
            <span className="rgb-score">4.9</span>
            <div className="rgb-stars" aria-hidden="true">
              <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/>
            </div>
            <span className="rgb-text">150+ Google Reviews</span>
          </div>
        </motion.div>

        <div className="reviews-scroll-container" role="list">
          <div className="reviews-track">
            {[...reviews, ...reviews, ...reviews, ...reviews].map((r, i) => (
              <div
                key={`${r.name}-${i}`}
                className="review-card"
                role="listitem"
              >
                <div className="review-quote-mark" aria-hidden="true">"</div>
                <p className="review-text">{r.text}</p>
                <div className="review-author">
                  <div className="review-avatar" aria-hidden="true">{r.initial}</div>
                  <div className="review-meta">
                    <span className="review-name">{r.name}</span>
                    <div className="review-stars-small" aria-label="5 stars" role="img">
                      <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
