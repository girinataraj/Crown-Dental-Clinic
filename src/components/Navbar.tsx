import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CLINIC, IMAGES } from '../data/clinic';
import { TREATMENTS } from '../data/treatments';
import { treatmentHref, type Route } from '../hooks/useRoute';
import TreatmentIcon from './icons/TreatmentIcon';
import './Navbar.css';

interface NavbarProps {
  route: Route;
  navigate: (to: string) => void;
}

type NavLink = {
  label: string;
  href: string;
  hasMenu?: boolean;
  menuType?: 'treatments' | 'results';
};

const navLinks: NavLink[] = [
  { label: 'Treatments', href: '#treatments', hasMenu: true, menuType: 'treatments' },
  { label: 'Results', href: '#results', hasMenu: true, menuType: 'results' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Experience', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const dentalLinks = TREATMENTS.filter((t) => t.category === 'Dental');
const cosmoLinks = TREATMENTS.filter((t) => t.category === 'Cosmetology');

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const ChevronIcon = () => (
  <svg className="nav-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

/* Same star mark used in Hero/Reviews — currentColor so it inherits
   the dropdown's gold tone instead of hardcoding a fill. */
const StarGlyph = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.27l-4.77 2.51.91-5.33L2.27 6.62l5.34-.78L10 1z" />
  </svg>
);

const CompareGlyph = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3.5" y="4.5" width="17" height="15" rx="2.5" />
    <path d="M12 4.5v15" />
  </svg>
);

export default function Navbar({ route, navigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<'treatments' | 'results' | null>(null);
  const [mobileActiveMenu, setMobileActiveMenu] = useState<'treatments' | 'results' | null>(null);
  const [activeSection, setActiveSection] = useState('#home');
  const menuTimer = useRef<number | undefined>(undefined);

  const onHome = route.name === 'home';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener('resize', onResize, { passive: true });
    return () => window.removeEventListener('resize', onResize);
  }, []);

  /* Scroll spy */
  useEffect(() => {
    if (!onHome) return;
    const sectionElements = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => Boolean(el));
    
    // Add home to observer targets
    const homeEl = document.querySelector('#home');
    if (homeEl) sectionElements.push(homeEl);

    if (!sectionElements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveSection(`#${visible.target.id}`);
      },
      { rootMargin: '-30% 0px -40% 0px', threshold: [0, 0.25, 0.5] }
    );
    sectionElements.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [onHome]);

  /* Lock body scroll only while the mobile drawer is open */
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = ''; };
    }
  }, [mobileOpen]);

  useEffect(() => () => window.clearTimeout(menuTimer.current), []);

  const closeAll = () => {
    setMobileOpen(false);
    setActiveMenu(null);
    setMobileActiveMenu(null);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    closeAll();
    setActiveSection(href);

    if (!onHome) {
      navigate('');
      window.setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }, 90);
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleTreatmentClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    closeAll();
    navigate(treatmentHref(id));
  };

  const openMenu = (menu: 'treatments' | 'results') => {
    window.clearTimeout(menuTimer.current);
    setActiveMenu(menu);
  };
  
  const closeMenuSoon = () => {
    window.clearTimeout(menuTimer.current);
    menuTimer.current = window.setTimeout(() => setActiveMenu(null), 160);
  };

  const toggleMobileMenu = (menu: 'treatments' | 'results') => {
    setMobileActiveMenu(mobileActiveMenu === menu ? null : menu);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar-inner">

          {/* Brand — the official logo mark + wordmark, on a light plate so
              both stay fully legible against the navbar's purple surface. */}
          <a
            href="#home"
            className="navbar-brand"
            aria-label="Crown Dental & Cosmetology Clinic — Home"
            onClick={(e) => handleNavClick(e, '#home')}
          >
            <span className="navbar-logo-plate">
              <img src={IMAGES.logo} alt="" className="navbar-logo-img" />
              <img src={IMAGES.logoText} alt="" className="navbar-logo-text-img" />
            </span>
          </a>

          {/* Desktop links */}
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className={link.hasMenu ? 'has-menu' : ''}
                onMouseEnter={link.hasMenu && link.menuType ? () => openMenu(link.menuType!) : undefined}
                onMouseLeave={link.hasMenu ? closeMenuSoon : undefined}
              >
                <a
                  href={link.href}
                  className={`navbar-link ${onHome && activeSection === link.href ? 'is-active' : ''}`}
                  onClick={(e) => link.hasMenu ? e.preventDefault() : handleNavClick(e, link.href)}
                  aria-haspopup={link.hasMenu ? 'true' : undefined}
                  aria-expanded={link.hasMenu ? activeMenu === link.menuType : undefined}
                >
                  {link.label}
                  {link.hasMenu && <ChevronIcon />}
                  
                  {/* Animated Underline for Active State */}
                  {onHome && activeSection === link.href && !link.hasMenu && (
                    <motion.div 
                      layoutId="nav-underline"
                      className="nav-underline"
                      transition={{ type: "spring", bounce: 0.1, duration: 0.5 }}
                    />
                  )}
                </a>

                {/* Dropdowns */}
                <AnimatePresence>
                  {link.hasMenu && activeMenu === link.menuType && (
                    <motion.div
                      className={`nav-dropdown ${link.menuType === 'treatments' ? 'nav-mega' : 'nav-simple'}`}
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {link.menuType === 'treatments' && (
                        <>
                          <div className="nav-mega-col">
                            <span className="nav-mega-title">Dental Care</span>
                            {dentalLinks.map((t) => (
                              <a
                                key={t.id}
                                href={treatmentHref(t.id)}
                                className="nav-dropdown-link"
                                onClick={(e) => handleTreatmentClick(e, t.id)}
                              >
                                <span className="nav-dropdown-icon"><TreatmentIcon name={t.icon} /></span>
                                {t.title}
                              </a>
                            ))}
                          </div>
                          <div className="nav-mega-col">
                            <span className="nav-mega-title">Medical Cosmetology</span>
                            {cosmoLinks.map((t) => (
                              <a
                                key={t.id}
                                href={treatmentHref(t.id)}
                                className="nav-dropdown-link"
                                onClick={(e) => handleTreatmentClick(e, t.id)}
                              >
                                <span className="nav-dropdown-icon"><TreatmentIcon name={t.icon} /></span>
                                {t.title}
                              </a>
                            ))}
                          </div>
                        </>
                      )}

                      {link.menuType === 'results' && (
                        <div className="nav-simple-col">
                          {/* #results is the Before/After section's actual id */}
                          <a href="#results" className="nav-dropdown-link" onClick={(e) => handleNavClick(e, '#results')}>
                            <span className="nav-dropdown-icon"><CompareGlyph /></span> Before & After
                          </a>
                          <a href="#reviews" className="nav-dropdown-link" onClick={(e) => handleNavClick(e, '#reviews')}>
                            <span className="nav-dropdown-icon"><StarGlyph /></span> Google Reviews
                          </a>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          {/* Desktop utility + CTA */}
          <div className="navbar-actions">
            <a href={CLINIC.phoneHref} className="navbar-phone">
              <span className="navbar-phone-icon"><PhoneIcon /></span>
              <span className="navbar-phone-text">
                <span className="navbar-phone-label">Consultation</span>
                <span className="navbar-phone-num">{CLINIC.phoneDisplay}</span>
              </span>
            </a>
            <a
              href={CLINIC.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary navbar-cta"
            >
              Message the Clinic
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`navbar-hamburger ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span className="bar bar-top" />
            <span className="bar bar-mid" />
            <span className="bar bar-bot" />
          </button>
        </div>
      </nav>

      {/* Mobile drawer overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="navbar-overlay"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen && (
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="navbar-drawer"
          >
            <div className="drawer-header">
              <span className="navbar-logo-plate drawer-logo-plate">
                <img src={IMAGES.logo} alt="" className="navbar-logo-img" />
                <img src={IMAGES.logoText} alt="Crown Dental & Cosmetology Clinic" className="navbar-logo-text-img" />
              </span>
              <button
                className="drawer-close-btn"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <div className="drawer-scroll">
              <ul className="drawer-links">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {link.hasMenu && link.menuType ? (
                      <>
                        <button
                          className={`drawer-link drawer-toggle ${mobileActiveMenu === link.menuType ? 'is-open' : ''}`}
                          onClick={() => toggleMobileMenu(link.menuType!)}
                        >
                          {link.label}
                          <ChevronIcon />
                        </button>
                        <AnimatePresence initial={false}>
                          {mobileActiveMenu === link.menuType && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                              className="drawer-sub"
                            >
                              {link.menuType === 'treatments' && (
                                <>
                                  {TREATMENTS.map((t) => (
                                    <a
                                      key={t.id}
                                      href={treatmentHref(t.id)}
                                      className="drawer-sub-link"
                                      onClick={(e) => handleTreatmentClick(e, t.id)}
                                    >
                                      {t.title}
                                    </a>
                                  ))}
                                </>
                              )}
                              {link.menuType === 'results' && (
                                <>
                                  <a href="#results" className="drawer-sub-link" onClick={(e) => handleNavClick(e, '#results')}>
                                    Before & After
                                  </a>
                                  <a href="#reviews" className="drawer-sub-link" onClick={(e) => handleNavClick(e, '#reviews')}>
                                    Google Reviews
                                  </a>
                                </>
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <a
                        href={link.href}
                        className={`drawer-link ${onHome && activeSection === link.href ? 'is-active' : ''}`}
                        onClick={(e) => handleNavClick(e, link.href)}
                      >
                        {link.label}
                      </a>
                    )}
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
              className="drawer-footer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <a href={CLINIC.phoneHref} className="btn-primary drawer-btn">
                Call Clinic
              </a>
              <a
                href={CLINIC.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp drawer-btn"
              >
                WhatsApp Consult
              </a>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
