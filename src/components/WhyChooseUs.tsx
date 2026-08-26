import { motion } from 'framer-motion';
import { CLINIC, IMAGES } from '../data/clinic';
import './WhyChooseUs.css';

const reasons = [
  {
    num: '01',
    title: 'Specialists You Can Trust',
    desc: 'Care is led by MDS-qualified consultants — prosthodontics, orthodontics, oral surgery and radiology — not a single generalist stretched across everything.',
  },
  {
    num: '02',
    title: 'Complete Care Under One Roof',
    desc: 'From a routine check-up to implants, aligners, smile design and medical cosmetology — treatment continues in one clinic, with one team.',
  },
  {
    num: '03',
    title: 'Strict Hygiene Standards',
    desc: 'Every instrument is sterilised between uses and clinical hygiene protocols are maintained throughout the clinic — in both the dental and cosmetology suites.',
  },
  {
    num: '04',
    title: 'Explained Before It Starts',
    desc: 'You are told what was found, what your options are and what each involves — before anything is agreed. No pressure, no surprises.',
  },
];

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="why-section" aria-label="Why choose Crown Dental">
      <div className="container">
        <div className="why-grid">

          {/* ── Copy + pillars ── */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="why-content"
          >
            <span className="section-badge section-badge--light">Why Choose Crown</span>
            <h2 className="why-title">Complete Dental &amp; Aesthetic Care, Done Properly</h2>
            <p className="why-intro">
              Crown was set up to remove the two things patients dislike most about
              clinical care: being rushed, and being kept in the dark. Everything below
              follows from that.
            </p>

            <div className="why-list">
              {reasons.map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="why-item"
                >
                  <span className="why-num" aria-hidden="true">{r.num}</span>
                  <div className="why-item-body">
                    <h3 className="why-item-title">{r.title}</h3>
                    <p className="why-item-desc">{r.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Large clinic image + help card ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="why-visual"
          >
            <div className="why-image-frame">
              <img src={IMAGES.exterior}
                alt="Crown Dental &amp; Cosmetology Clinic premises in Erode" loading="lazy" />
            </div>

            <a href={CLINIC.phoneHref} className="why-help-card">
              <span className="why-help-icon" aria-hidden="true"><PhoneIcon /></span>
              <span className="why-help-text">
                <span className="why-help-label">Need more help?</span>
                <span className="why-help-num">{CLINIC.phoneDisplay}</span>
              </span>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
