import { useState } from 'react';
import { CLINIC } from '../data/clinic';
import './HeroConsultForm.css';

/* Accepts common Indian mobile formats after stripping spaces/dashes:
   9876543210, +919876543210, 919876543210, 09876543210 — always a
   10-digit number starting 6–9, with an optional +91 / 91 / 0 prefix.
   Deliberately loose about separators so real numbers aren't rejected. */
const PHONE_PATTERN = /^(?:\+91|91|0)?[6-9]\d{9}$/;

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
        Start WhatsApp Consultation
      </button>
    </form>
  );
}
