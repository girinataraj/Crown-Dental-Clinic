import React, { useState } from 'react';
import './AppointmentCTA.css';

const AppointmentCTA: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: '',
    date: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi, I'd like to book an appointment.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nTreatment: ${formData.treatment}\nPreferred Date: ${formData.date}`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/918946013270?text=${encoded}`, '_blank');
  };

  return (
    <section className="appointment-cta" id="book">
      <div className="appointment-cta__bg-shapes">
        <div className="appointment-cta__circle appointment-cta__circle--1" />
        <div className="appointment-cta__circle appointment-cta__circle--2" />
        <div className="appointment-cta__circle appointment-cta__circle--3" />
      </div>

      <div className="appointment-cta__container">
        {/* Left Column */}
        <div className="appointment-cta__content">
          <span className="appointment-cta__badge">✨ Limited Time Offer</span>
          <h2 className="appointment-cta__heading">
            Book Your Smile Consultation Today
          </h2>
          <p className="appointment-cta__subheading">
            Take the first step towards your perfect smile. Our expert dental team is ready to craft your personalized treatment plan.
          </p>

          <div className="appointment-cta__features">
            <div className="appointment-cta__feature">
              <span className="appointment-cta__feature-icon">🦷</span>
              <span>Free Initial Consultation</span>
            </div>
            <div className="appointment-cta__feature">
              <span className="appointment-cta__feature-icon">⏰</span>
              <span>Same Day Appointments</span>
            </div>
            <div className="appointment-cta__feature">
              <span className="appointment-cta__feature-icon">💳</span>
              <span>Flexible Payment Plans</span>
            </div>
          </div>

          <div className="appointment-cta__buttons">
            <a
              href="https://wa.me/918946013270?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Crown%20Dental"
              className="appointment-cta__btn appointment-cta__btn--whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Book on WhatsApp
            </a>
            <a
              href="tel:+918946013270"
              className="appointment-cta__btn appointment-cta__btn--call"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call Now: +91 89460 13270
            </a>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="appointment-cta__form-wrapper">
          <form className="appointment-cta__form" onSubmit={handleSubmit}>
            <h3 className="appointment-cta__form-title">Request Appointment</h3>
            <p className="appointment-cta__form-subtitle">Fill in your details and we'll get back to you shortly</p>

            <div className="appointment-cta__field">
              <label htmlFor="cta-name">Full Name</label>
              <input
                id="cta-name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="appointment-cta__field">
              <label htmlFor="cta-phone">Phone Number</label>
              <input
                id="cta-phone"
                type="tel"
                name="phone"
                placeholder="+91 XXXXX XXXXX"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="appointment-cta__field">
              <label htmlFor="cta-treatment">Treatment</label>
              <select
                id="cta-treatment"
                name="treatment"
                value={formData.treatment}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select a treatment</option>
                <option value="Invisalign">Invisalign & Orthodontics</option>
                <option value="Dental Implants">Advanced Dental Implants</option>
                <option value="Smile Makeover">Smile Makeover</option>
                <option value="Pediatric">Pediatric Dentistry</option>
                <option value="Medi-Facial">Premium Medi-Facial</option>
                <option value="Skin Laser">Skin & Laser Treatment</option>
                <option value="Cosmetic">Cosmetic Enhancement</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="appointment-cta__field">
              <label htmlFor="cta-date">Preferred Date</label>
              <input
                id="cta-date"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="appointment-cta__submit">
              Book Appointment
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AppointmentCTA;
