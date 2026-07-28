import { useState, useRef, useCallback, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import './BeforeAfter.css';

const cases = [
  {
    id: 'smile1',
    category: 'Cosmetic Dentistry',
    label: 'Smile Makeover',
    description: 'Restore confidence with a complete smile transformation through cosmetic dentistry, creating a naturally beautiful, balanced, and brighter smile.',
    beforeImage: '/images/Smile-Before.png',
    afterImage: '/images/Smile-After.png',
    icon: '✨',
    highlights: ['Improved smile aesthetics', 'Natural tooth colour', 'Better symmetry', 'Increased confidence']
  },
  {
    id: 'align1',
    category: 'Orthodontics',
    label: 'Invisalign® Smile Correction',
    description: 'Experience discreet orthodontic treatment with Invisalign to gently align teeth and create a healthier, more confident smile.',
    beforeImage: '/images/Invisalign-Before.png',
    afterImage: '/images/Invisalign-After.png',
    icon: '💎',
    highlights: ['Clear aligner treatment', 'Improved alignment', 'Better bite', 'Comfortable orthodontic solution']
  }
];

function SliderCard({ c }: { c: typeof cases[0] }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInteracted, setIsInteracted] = useState(false);
  const isInView = useInView(containerRef, { once: true, margin: "-100px 0px" });

  const [beforeLoaded, setBeforeLoaded] = useState(false);
  const [afterLoaded, setAfterLoaded] = useState(false);

  // Auto-animate hint once when scrolled into view
  useEffect(() => {
    if (isInView && !isInteracted) {
      const t1 = setTimeout(() => setPosition(65), 500);
      const t2 = setTimeout(() => setPosition(35), 1100);
      const t3 = setTimeout(() => setPosition(50), 1700);
      return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    }
  }, [isInView, isInteracted]);

  const getPercent = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return 50;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    return Math.min(Math.max(pct, 5), 95);
  }, []);

  const handleInteractionStart = () => {
    setIsInteracted(true);
  };

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    handleInteractionStart();
    setPosition(getPercent(e.touches[0].clientX));
  }, [getPercent]);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (e.buttons === 1) {
      handleInteractionStart();
      setPosition(getPercent(e.clientX));
    }
  }, [getPercent]);

  const onKeyDown = useCallback((e: React.KeyboardEvent) => {
    handleInteractionStart();
    if (e.key === 'ArrowLeft') {
      setPosition(p => Math.max(5, p - 5));
    } else if (e.key === 'ArrowRight') {
      setPosition(p => Math.min(95, p + 5));
    }
  }, []);

  return (
    <div className="ba-card">
      <div className="ba-card-header">
        <span className="ba-category">{c.category}</span>
      </div>
      <div 
        ref={containerRef}
        className="ba-slider-container"
        onTouchMove={onTouchMove}
        onMouseMove={onMouseMove}
        onTouchStart={handleInteractionStart}
        onMouseDown={handleInteractionStart}
      >
        {/* After layer */}
        <div className="ba-layer ba-layer-after">
          <img 
            src={c.afterImage} 
            alt={`${c.label} After`} 
            className={`ba-image ${afterLoaded ? 'loaded' : ''}`} 
            loading="lazy"
            onLoad={() => setAfterLoaded(true)}
          />
          <span className="ba-label ba-label-after glass-panel-subtle">After</span>
        </div>

        {/* Before layer */}
        <div 
          className="ba-layer ba-layer-before"
          style={{ 
            clipPath: `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)`,
            transition: isInteracted ? 'none' : 'clip-path 0.6s cubic-bezier(0.25, 1, 0.5, 1)'
          }}
        >
          <img 
            src={c.beforeImage} 
            alt={`${c.label} Before`} 
            className={`ba-image ${beforeLoaded ? 'loaded' : ''}`} 
            loading="lazy"
            onLoad={() => setBeforeLoaded(true)}
          />
          <span className="ba-label ba-label-before glass-panel-subtle">Before</span>
        </div>

        {/* Handle */}
        <div 
          className="ba-handle" 
          style={{ 
            left: `${position}%`,
            transition: isInteracted ? 'none' : 'left 0.6s cubic-bezier(0.25, 1, 0.5, 1)'
          }}
        >
          <div className="ba-handle-line" />
          <div 
            className="ba-handle-btn"
            role="slider"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(position)}
            aria-label="Drag to compare before and after"
            tabIndex={0}
            onKeyDown={onKeyDown}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="ba-footer">
        <div className="ba-footer-header">
          <span className="ba-icon">{c.icon}</span>
          <h3 className="ba-title">{c.label}</h3>
        </div>
        <p className="ba-description">{c.description}</p>
        
        <ul className="ba-highlights">
          {c.highlights.map((h, i) => (
            <li key={i}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              {h}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section id="results" className="ba-section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header section-header--dark"
        >
          <span className="section-badge section-badge--dark">Real Results</span>
          <h2>Transformations</h2>
          <p>Drag the slider to reveal the Crown difference.</p>
        </motion.div>

        <div className="ba-scroll-container">
          {cases.map((c, i) => (
            <motion.div 
              key={c.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="ba-card-wrapper"
            >
              <SliderCard c={c} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
