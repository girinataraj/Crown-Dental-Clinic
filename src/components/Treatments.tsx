import { useEffect, useRef, useState } from 'react';
import React from "react";
import './Treatments.css';

interface Treatment {
  id: string;
  title: string;
  desc: string;
  type: 'dental' | 'cosmetology';
  icon: React.ReactNode
}

const DentalIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5.5c-2.5 0-3-2-3-2a3 3 0 0 0-3 3c0 2.5 1 4 2 5 .5.5 1 1 1 2v3a2 2 0 0 0 4 0v-3c0-1 .5-1.5 1-2 1-1 2-2.5 2-5a3 3 0 0 0-3-3s-.5 2-3 2Z"/>
  </svg>
);

const ImplantIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="10" y="14" width="4" height="8" rx="1"/>
    <path d="M7 14s2-6 5-6 5 6 5 6H7Z"/>
    <path d="M12 8V4"/>
    <path d="M9 4h6"/>
  </svg>
);

const AlignIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 9c0 4 3 8 7 8s7-4 7-8"/>
    <path d="M12 17v4"/>
    <path d="M9 21h6"/>
  </svg>
);

const FaceIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z"/>
    <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
    <line x1="9" y1="9" x2="9.01" y2="9"/>
    <line x1="15" y1="9" x2="15.01" y2="9"/>
    <path d="M16 5c-1 0-2 1-2 1"/>
    <path d="M8 5c1 0 2 1 2 1"/>
  </svg>
);

const SparkleIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
  </svg>
);

const LaserIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v2"/>
    <path d="M12 20v2"/>
    <path d="m4.93 4.93 1.41 1.41"/>
    <path d="m17.66 17.66 1.41 1.41"/>
    <path d="M2 12h2"/>
    <path d="M20 12h2"/>
    <path d="m6.34 17.66-1.41 1.41"/>
    <path d="m19.07 4.93-1.41 1.41"/>
    <circle cx="12" cy="12" r="4"/>
  </svg>
);

const treatments: Treatment[] = [
  { id: '1', type: 'dental', title: 'Invisalign & Orthodontics', desc: 'Clear aligners and modern braces for a perfectly straight smile without the traditional metal look.', icon: <AlignIcon /> },
  { id: '2', type: 'dental', title: 'Advanced Dental Implants', desc: 'Permanent, natural-looking tooth replacements using state-of-the-art implant technology.', icon: <ImplantIcon /> },
  { id: '3', type: 'dental', title: 'Smile Makeovers', desc: 'Comprehensive smile design using veneers, crowns, and whitening for a flawless appearance.', icon: <DentalIcon /> },
  { id: '4', type: 'dental', title: 'Pediatric Dentistry', desc: 'Gentle, pain-free dental care designed specifically to keep your little ones smiling comfortably.', icon: <FaceIcon /> },
  
  { id: '5', type: 'cosmetology', title: 'Medi-Facials', desc: 'Advanced clinical facials customized to rejuvenate, hydrate, and brighten your specific skin type.', icon: <SparkleIcon /> },
  { id: '6', type: 'cosmetology', title: 'Skin & Laser Treatments', desc: 'Expert laser therapy for pigmentation, acne scars, and complete skin rejuvenation.', icon: <LaserIcon /> },
  { id: '7', type: 'cosmetology', title: 'Hair & Scalp Aesthetics', desc: 'Advanced restorative treatments promoting natural hair density and scalp health.', icon: <FaceIcon /> },
  { id: '8', type: 'cosmetology', title: 'Cosmetic Enhancements', desc: 'Subtle, expert aesthetic procedures tailored to enhance your natural beauty.', icon: <SparkleIcon /> },
];

export default function Treatments() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const dentalTreatments = treatments.filter(t => t.type === 'dental');
  const cosmeticTreatments = treatments.filter(t => t.type === 'cosmetology');

  return (
    <section ref={sectionRef} id="treatments" className="treatments-section">
      <div className="container">
        <div className={`section-heading ${isVisible ? 'fade-in-up visible' : 'fade-in-up'}`}>
          <span className="treatments-badge">Our Services</span>
          <h2>Comprehensive Care</h2>
          <p>Discover our full range of premium dental and advanced cosmetology treatments designed for your ultimate confidence.</p>
        </div>

        <div className="treatments-grid">
          
          <div className={`treatments-category ${isVisible ? 'fade-in-up visible delay-1' : 'fade-in-up delay-1'}`}>
            <DentalIcon /> Dental Expertise
          </div>
          
          {dentalTreatments.map((t, i) => (
            <div 
              key={t.id} 
              className={`treatment-card treatment-card--dental ${isVisible ? 'fade-in-up visible' : 'fade-in-up'}`}
              style={{ transitionDelay: `${(i * 0.1) + 0.2}s` }}
            >
              <div className="treatment-icon-wrapper">
                {t.icon}
              </div>
              <h3 className="treatment-title">{t.title}</h3>
              <p className="treatment-desc">{t.desc}</p>
              <a href="#book" className="treatment-link">
                Learn More <span>→</span>
              </a>
            </div>
          ))}

          <div className={`treatments-category ${isVisible ? 'fade-in-up visible' : 'fade-in-up'}`} style={{ transitionDelay: '0.6s' }}>
            <SparkleIcon /> Cosmetology & Aesthetics
          </div>

          {cosmeticTreatments.map((t, i) => (
            <div 
              key={t.id} 
              className={`treatment-card treatment-card--cosmetology ${isVisible ? 'fade-in-up visible' : 'fade-in-up'}`}
              style={{ transitionDelay: `${(i * 0.1) + 0.7}s` }}
            >
              <div className="treatment-icon-wrapper">
                {t.icon}
              </div>
              <h3 className="treatment-title">{t.title}</h3>
              <p className="treatment-desc">{t.desc}</p>
              <a href="#book" className="treatment-link">
                Learn More <span>→</span>
              </a>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
