import { CLINIC, IMAGES } from '../data/clinic';
import { FEATURED_TREATMENTS } from '../data/treatments';
import { treatmentHref } from '../hooks/useRoute';
import './Footer.css';

interface FooterProps {
  navigate: (to: string) => void;
}

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Treatments', href: '#treatments' },
  { label: 'Results', href: '#results' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer({ navigate }: FooterProps) {
  const year = new Date().getFullYear();

  const goAnchor = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const isRouted = window.location.hash.startsWith('#/');
    if (isRouted) {
      navigate('');
      window.setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }, 90);
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const goTreatment = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    navigate(treatmentHref(id));
  };

  return (
    <footer className="footer-section">
      <div className="container">

        <div className="footer-grid">

          {/* ── Brand ── */}
          <div className="footer-col footer-col--brand">
            <a href="#home" className="footer-logo" onClick={(e) => goAnchor(e, '#home')}>
              <span className="footer-logo-plate">
                <img src={IMAGES.logo} alt="" />
              </span>
              Crown Dental
            </a>
            <p className="footer-desc">
              Advanced dental care and medical cosmetology under one roof in Erode —
              specialist-led, sterile and built around a calmer patient experience.
            </p>
            <nav className="footer-socials" aria-label="Social media links">
              <a href={CLINIC.instagram} target="_blank" rel="noopener noreferrer"
                className="social-link" aria-label="Crown Dental on Instagram">Instagram</a>
              <a href={CLINIC.facebook} target="_blank" rel="noopener noreferrer"
                className="social-link" aria-label="Crown Dental on Facebook">Facebook</a>
            </nav>
          </div>

          {/* ── Treatments ── */}
          <div className="footer-col">
            <h3 className="footer-heading">Treatments</h3>
            <ul className="footer-links">
              {FEATURED_TREATMENTS.map((t) => (
                <li key={t.id}>
                  <a href={treatmentHref(t.id)} onClick={(e) => goTreatment(e, t.id)}>{t.title}</a>
                </li>
              ))}
              <li>
                <a href="#treatments" onClick={(e) => goAnchor(e, '#treatments')} className="footer-link-all">
                  All treatments →
                </a>
              </li>
            </ul>
          </div>

          {/* ── Quick links ── */}
          <div className="footer-col">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((l) => (
                <li key={l.href}><a href={l.href} onClick={(e) => goAnchor(e, l.href)}>{l.label}</a></li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div className="footer-col">
            <h3 className="footer-heading">Contact</h3>
            <ul className="footer-contact">
              <li>{CLINIC.addressLine1},<br />{CLINIC.addressLine2}</li>
              <li><a href={CLINIC.phoneHref}>{CLINIC.phoneDisplay}</a></li>
              <li><a href={CLINIC.emailHref} className="footer-email">{CLINIC.email}</a></li>
            </ul>
            <a href={CLINIC.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp footer-cta">
              WhatsApp Us
            </a>
          </div>

        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {year} {CLINIC.name}. All Rights Reserved.
          </p>
          <p className="footer-tagline">{CLINIC.tagline}</p>
        </div>

      </div>
    </footer>
  );
}
