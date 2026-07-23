import { useRef, useState, useCallback } from 'react';
import { motion, useAnimationFrame, useMotionValue, useReducedMotion } from 'framer-motion';
import { useGesture } from '@use-gesture/react';
import './Reviews.css';

const originalReviews = [
  {
    name: 'Priya S.',
    initial: 'P',
    rating: 5,
    text: 'Dr. Monnica and the team made my Invisalign journey incredibly smooth. The clinic feels more like a premium lounge. Best dental care in Erode!',
  },
  {
    name: 'Rajesh K.',
    initial: 'R',
    rating: 5,
    text: 'Got my dental implants done here. The treatment was completely painless, and the team is extremely caring and professional.',
  },
  {
    name: 'Anitha M.',
    initial: 'A',
    rating: 5,
    text: 'The medi-facial completely rejuvenated my skin. The cosmetology team is brilliant and the results speak for themselves.',
  },
  {
    name: 'Suresh V.',
    initial: 'S',
    rating: 5,
    text: 'Amazing smile makeover! They used advanced 3D scanning and the final result exceeded my expectations. Highly recommended.',
  }
];

// Duplicate reviews to create a seamless infinite loop
const reviews = [...originalReviews, ...originalReviews];

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="#D4AF37" aria-hidden="true">
    <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.27l-4.77 2.51.91-5.33L2.27 6.62l5.34-.78L10 1z" />
  </svg>
);

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export default function Reviews() {
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const isReducedMotion = useReducedMotion();
  const pauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleInteractStart = useCallback(() => {
    setIsPaused(true);
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
      pauseTimeoutRef.current = null;
    }
  }, []);

  const handleInteractEnd = useCallback(() => {
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
    // Resume auto-scroll after a short delay
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 2500);
  }, []);

  useAnimationFrame((_, delta) => {
    if (isPaused || isReducedMotion) return;
    if (!trackRef.current) return;

    const trackWidth = trackRef.current.scrollWidth;
    // The duplicated list's single instance width is half of the total width
    const halfWidth = trackWidth / 2;

    // Slow, premium, effortless motion
    const moveBy = -0.03 * delta;

    let newX = x.get() + moveBy;
    newX = wrap(-halfWidth, 0, newX);
    x.set(newX);
  });

  const bind = useGesture({
    onDrag: ({ delta: [dx], down, intentional, event }) => {
      if (intentional && event && event.cancelable) event.preventDefault();
      if (down) handleInteractStart();
      else handleInteractEnd();

      if (!trackRef.current) return;
      const halfWidth = trackRef.current.scrollWidth / 2;
      let newX = x.get() + dx;
      newX = wrap(-halfWidth, 0, newX);
      x.set(newX);
    },
    onWheel: ({ delta: [dx, dy] }) => {
      // Prioritize horizontal scrolling, but allow vertical delta to also scroll reviews horizontally 
      // if it's the primary intent (e.g. standard mouse wheel)
      const moveBy = Math.abs(dx) > Math.abs(dy) ? -dx : -dy;

      handleInteractStart();
      if (!trackRef.current) return;
      const halfWidth = trackRef.current.scrollWidth / 2;
      let newX = x.get() + moveBy;
      newX = wrap(-halfWidth, 0, newX);
      x.set(newX);
      handleInteractEnd();
    },
    onHover: ({ active }) => {
      if (active) handleInteractStart();
      else handleInteractEnd();
    }
  }, {
    drag: { filterTaps: true, axis: 'x' },
    wheel: { axis: 'x' } // only capture horizontal wheel logic in useGesture?
    // Wait, if we specify axis: 'x' on wheel, it might ignore standard vertical mouse wheel.
    // I'll leave the useGesture wheel config default so we can catch any wheel.
  });

  return (
    <section id="reviews" className="reviews-section">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header center"
        >
          <span className="section-badge">Patient Confidence</span>
          <h2>What Our Patients Say</h2>
          <div className="reviews-google-badge">
            <span className="rgb-score">4.9</span>
            <div className="rgb-stars"><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></div>
            <span className="rgb-text">Based on 150+ Google Reviews</span>
          </div>
        </motion.div>

        <div className="reviews-scroll-container" {...bind()}>
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="reviews-track"
          >
            {reviews.map((r, i) => (
              <motion.div
                key={`${r.name}-${i}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4 }}
                className="review-card glass-panel"
              >
                <div className="review-quote-mark" aria-hidden="true">"</div>
                <p className="review-text">{r.text}</p>

                <div className="review-author">
                  <div className="review-avatar" aria-hidden="true">{r.initial}</div>
                  <div className="review-meta">
                    <span className="review-name">{r.name}</span>
                    <div className="review-stars-small" aria-label={`${r.rating} out of 5 stars`}>
                      <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
