import { useState } from 'react';
import { CLINIC } from '../data/clinic';
import './HeroConsultForm.css';

/* Accepts common Indian mobile formats after stripping spaces/dashes:
   9876543210, +919876543210, 919876543210, 09876543210 — always a
   10-digit number starting 6–9, with an optional +91 / 91 / 0 prefix.
   Deliberately loose about separators so real numbers aren't rejected. */
const PHONE_PATTERN = /^(?:\+91|91|0)?[6-9]\d{9}$/;

const WhatsIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true" style={{ flexShrink: 0 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
  </svg>
);

interface FormErrors {
  name?: string;
  phone?: string;
}

export default function HeroConsultForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): boolean => {
    const trimmedName = name.trim();
    const cleanedPhone = phone.replace(/[\s-]/g, '');
    const next: FormErrors = {};

    if (!trimmedName) {
      next.name = 'Please enter your name.';
    } else if (trimmedName.length < 2) {
      next.name = 'Please enter your full name.';
    }

    if (!cleanedPhone) {
      next.phone = 'Please enter your contact number.';
    } else if (!PHONE_PATTERN.test(cleanedPhone)) {
      next.phone = 'Enter a valid 10-digit mobile number.';
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    const message =
      `Hello Crown Dental, I would like to start a consultation.\n\n` +
      `Name: ${trimmedName}\n` +
      `Contact Number: ${trimmedPhone}`;

    const url = `${CLINIC.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <form className="hero-form" onSubmit={handleSubmit} noValidate aria-label="Start a WhatsApp consultation">
      <div className="hero-form-header">
        <span className="hero-form-eyebrow">Quick Consultation</span>
        <p className="hero-form-hint">Share your details — we'll continue on WhatsApp.</p>
      </div>

      <div className="hero-form-field">
        <label htmlFor="hero-consult-name">Full Name</label>
        <input
          id="hero-consult-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          autoComplete="name"
          aria-invalid={errors.name ? 'true' : undefined}
          aria-describedby={errors.name ? 'hero-consult-name-error' : undefined}
        />
        {errors.name && (
          <span id="hero-consult-name-error" className="hero-form-error" role="alert">
            {errors.name}
          </span>
        )}
      </div>

      <div className="hero-form-field">
        <label htmlFor="hero-consult-phone">Contact Number</label>
        <input
          id="hero-consult-phone"
          type="tel"
          inputMode="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="10-digit mobile number"
          autoComplete="tel"
          aria-invalid={errors.phone ? 'true' : undefined}
          aria-describedby={errors.phone ? 'hero-consult-phone-error' : undefined}
        />
        {errors.phone && (
          <span id="hero-consult-phone-error" className="hero-form-error" role="alert">
            {errors.phone}
          </span>
        )}
      </div>

      <button type="submit" className="btn-whatsapp hero-form-submit">
        <WhatsIcon />
        <span>Start WhatsApp Consultation</span>
      </button>
    </form>
  );
}
