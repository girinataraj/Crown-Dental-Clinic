import { useEffect, useRef, useState } from 'react';
import './ClinicExperience.css';

export default function ClinicExperience() {
  const [isVisible, setIsVisible] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="clinic-exp-section">
      <div className="clinic-exp-container">
        
        <div className={`clinic-exp-header ${isVisible ? 'fade-in-up visible' : 'fade-in-up'}`}>
          <span className="clinic-exp-badge">Experience Our Clinic</span>
          <h2>Inside Crown Dental</h2>
          <p>Discover our modern premium dental and aesthetic studio, designed for your ultimate comfort and world-class care.</p>
        </div>

        <div className={`clinic-exp-grid ${isVisible ? 'fade-in-up visible delay-1' : 'fade-in-up delay-1'}`}>
          
          <div className="clinic-exp-item clinic-exp-item--large" onClick={() => setLightboxImage('/images/treatment-room-1.png')}>
            <img src="/images/treatment-room-1.png" alt="Modern Treatment Room" loading="lazy" />
            <div className="clinic-exp-caption">
              <h3>Modern Treatment Rooms</h3>
              <p>Equipped with state-of-the-art dental chairs and soothing lavender aesthetics.</p>
            </div>
          </div>

          <div className="clinic-exp-item clinic-exp-item--medium" onClick={() => setLightboxImage('/images/treatment-room-2.png')}>
            <img src="/images/treatment-room-2.png" alt="Premium Sterile Environment" loading="lazy" />
            <div className="clinic-exp-caption">
              <h3>Premium Sterile Environment</h3>
              <p>Hospital-grade hygiene standards for your safety.</p>
            </div>
          </div>

          <div className="clinic-exp-item clinic-exp-item--wide" onClick={() => setLightboxImage('/images/clinic-exterior.png')}>
            <img src="/images/clinic-exterior.png" alt="Clinic Exterior" loading="lazy" />
            <div className="clinic-exp-caption">
              <h3>Comfortable Patient Experience</h3>
              <p>A welcoming exterior leading into a luxury studio environment.</p>
            </div>
          </div>

        </div>

        {/* Lightbox */}
        {lightboxImage && (
          <div className="clinic-lightbox" onClick={() => setLightboxImage(null)}>
            <div className="clinic-lightbox-close">&times;</div>
            <img src={lightboxImage} alt="Clinic Full View" onClick={(e) => e.stopPropagation()} />
          </div>
        )}

        <div className={`clinic-trust-counters ${isVisible ? 'fade-in-up visible delay-2' : 'fade-in-up delay-2'}`}>
          <div className="clinic-counter">
            <div className="clinic-counter-number">10+</div>
            <div className="clinic-counter-label">Years of Excellence</div>
          </div>
          <div className="clinic-counter">
            <div className="clinic-counter-number">5K+</div>
            <div className="clinic-counter-label">Happy Patients</div>
          </div>
          <div className="clinic-counter">
            <div className="clinic-counter-number">100%</div>
            <div className="clinic-counter-label">Sterile Environment</div>
          </div>
        </div>

      </div>
    </section>
  );
}
