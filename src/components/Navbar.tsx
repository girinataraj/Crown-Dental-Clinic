import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Treatments', href: '#treatments' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

const CrownLogo = () => (
  <img src="/images/logo.png" alt="Crown Dental Logo" className="navbar-logo-img" />
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll only when the mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      // Only clear if we set it — don't touch it if not open
      document.body.style.overflow = '';
    }
    return () => {
      // On unmount, only clear if menu was open
      if (mobileOpen) document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled glass-panel' : ''}`}>
        <div className="container navbar-inner">
          
          {/* Mobile Spacer to push logo to center */}
          <div className="navbar-spacer hide-desktop" />

          {/* Logo (Centered on mobile, Left on desktop) */}
          <a
            href="#home"
            className="navbar-brand"
            onClick={(e) => handleNavClick(e, '#home')}
          >
            <CrownLogo />
            <span className="navbar-brand-text hide-mobile">
              Crown Dental <span className="text-navy-muted" style={{ marginLeft: '0.2em' }}>& Cosmetology</span>
            </span>
          </a>

          {/* Desktop Links */}
          <ul className="navbar-links hide-mobile">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="navbar-link"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="navbar-actions hide-mobile">
            <a href="tel:+918946013270" className="btn-outline" style={{ padding: '8px 24px' }}>
              Call Now
            </a>
          </div>

          {/* Mobile Hamburger (Right) */}
          <button
            className={`navbar-hamburger hide-desktop ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className="bar bar-top" />
            <span className="bar bar-mid" />
            <span className="bar bar-bot" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="navbar-overlay hide-desktop"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="navbar-drawer hide-desktop glass-panel"
          >
            <div className="drawer-header">
              <span className="drawer-brand">Menu</span>
            </div>
            
            <ul className="drawer-links">
              {navLinks.map((link, i) => (
                <motion.li 
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + (i * 0.05) }}
                >
                  <a
                    href={link.href}
                    className="drawer-link"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <motion.div 
              className="drawer-footer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <a href="tel:+918946013270" className="btn-primary" style={{ width: '100%', marginBottom: '16px' }}>
                Call Clinic
              </a>
              <a href="https://wa.me/918946013270" target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', borderRadius: '999px', textDecoration: 'none', fontWeight: 500 }}>
                WhatsApp Consult
              </a>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
