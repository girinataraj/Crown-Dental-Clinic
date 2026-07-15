import { useEffect, useRef, useState } from 'react';
import './DoctorProfile.css';

const DoctorProfile = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const specializations = [
    'Invisalign Certified Provider',
    'Advanced Implantology',
    'Cosmetic Dentistry',
    'Smile Design Expert',
    'Aesthetic Procedures',
  ];

  const achievements = [
    '10+ Years Experience',
    '1000+ Procedures',
    'International Training',
  ];

  return (
    <section
      ref={sectionRef}
      className={`doctor-profile-section ${isVisible ? 'doctor-profile-visible' : ''}`}
    >
      <div className="doctor-profile-container">
        {/* Section Heading */}
        <div className="doctor-profile-heading">
          <h2 className="doctor-profile-title">Meet Our Expert</h2>
          <div className="doctor-profile-title-underline" />
        </div>

        {/* Split Layout Card */}
        <div className="doctor-profile-card">
          {/* Left - Image Placeholder */}
          <div className="doctor-profile-image-side">
            <div className="doctor-profile-gradient-placeholder">
              {/* Doctor Silhouette SVG */}
              <svg
                className="doctor-profile-silhouette"
                viewBox="0 0 200 280"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Head */}
                <circle cx="100" cy="65" r="35" fill="rgba(255,255,255,0.15)" />
                {/* Body */}
                <path
                  d="M55 120 C55 100, 70 90, 100 90 C130 90, 145 100, 145 120 L150 200 C150 210, 145 215, 135 215 L65 215 C55 215, 50 210, 50 200 Z"
                  fill="rgba(255,255,255,0.12)"
                />
                {/* Stethoscope */}
                <path
                  d="M85 120 C80 140, 70 155, 75 170 C80 185, 95 185, 100 175"
                  stroke="rgba(201,168,76,0.5)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <circle cx="100" cy="172" r="6" fill="rgba(201,168,76,0.4)" />
                {/* Coat Lapel */}
                <path
                  d="M85 95 L100 130 L115 95"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="2"
                  fill="none"
                />
                {/* Cross Badge */}
                <rect x="94" y="140" width="12" height="3" rx="1" fill="rgba(201,168,76,0.45)" />
                <rect x="98" y="136" width="3" height="12" rx="1" fill="rgba(201,168,76,0.45)" />
              </svg>
              {/* Decorative Elements */}
              <div className="doctor-profile-gradient-orb doctor-profile-orb-1" />
              <div className="doctor-profile-gradient-orb doctor-profile-orb-2" />
              <div className="doctor-profile-gradient-corner" />
            </div>
          </div>

          {/* Right - Doctor Info */}
          <div className="doctor-profile-info-side">
            <div className="doctor-profile-info-content">
              <h3 className="doctor-profile-name">Dr. Crown Dental Specialist</h3>
              <p className="doctor-profile-qualifications">BDS, MDS - Prosthodontics</p>
              <p className="doctor-profile-experience">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="doctor-profile-exp-icon">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#C9A84C" />
                </svg>
                10+ Years of Clinical Excellence
              </p>

              {/* Specializations */}
              <ul className="doctor-profile-specializations">
                {specializations.map((spec, index) => (
                  <li
                    key={index}
                    className="doctor-profile-spec-item"
                    style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                  >
                    <svg
                      className="doctor-profile-check-icon"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="12" r="11" fill="#C9A84C" opacity="0.12" />
                      <path
                        d="M7 12.5L10.5 16L17 9"
                        stroke="#C9A84C"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>

              {/* Bio */}
              <p className="doctor-profile-bio">
                Dedicated to providing world-class dental and cosmetic care with a patient-first
                approach. Trained at premier institutions with expertise in the latest dental
                technologies and aesthetic procedures.
              </p>

              {/* Achievement Badges */}
              <div className="doctor-profile-achievements">
                {achievements.map((achievement, index) => (
                  <span
                    key={index}
                    className="doctor-profile-badge"
                    style={{ animationDelay: `${0.9 + index * 0.15}s` }}
                  >
                    {achievement}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorProfile;
