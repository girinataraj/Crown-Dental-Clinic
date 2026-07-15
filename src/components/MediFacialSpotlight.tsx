import { useEffect, useRef, useState } from 'react';
import './MediFacialSpotlight.css';

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default function MediFacialSpotlight() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="medifacial-section" id="cosmetology">
      <div className="medifacial-bg-circle medifacial-bg-circle-1" />
      <div className="medifacial-bg-circle medifacial-bg-circle-2" />
      
      <div className="container medifacial-container">
        
        {/* Images Left */}
        <div className={`medifacial-images ${isVisible ? 'fade-in-right visible' : 'fade-in-right'}`}>
          <div className="medifacial-img-main" />
          <div className="medifacial-img-accent">
            Premium Hydration
          </div>
        </div>

        {/* Content Right */}
        <div className={`medifacial-content ${isVisible ? 'fade-in-left visible delay-1' : 'fade-in-left delay-1'}`}>
          <span className="medifacial-badge">Perfect Time For Your</span>
          <h2 className="medifacial-title">Medifacial Treatment</h2>
          
          <p className="medifacial-desc">
            Experience the ultimate facial treatment designed to rejuvenate, hydrate, and brighten your skin. Our premium cosmetology services combine medical expertise with luxury care.
          </p>

          <div className="medifacial-features">
            <div className="medifacial-feature">
              <div className="medifacial-feature-icon"><CheckIcon /></div>
              Customized Mask Application
            </div>
            <div className="medifacial-feature">
              <div className="medifacial-feature-icon"><CheckIcon /></div>
              Hydrating Moisturization
            </div>
            <div className="medifacial-feature">
              <div className="medifacial-feature-icon"><CheckIcon /></div>
              Exfoliation & Extraction
            </div>
            <div className="medifacial-feature">
              <div className="medifacial-feature-icon"><CheckIcon /></div>
              Deep Cleansing
            </div>
          </div>

          <a href="#book" className="btn-primary medifacial-btn">
            Book Your Glow Now
          </a>
        </div>
        
      </div>
    </section>
  );
}
