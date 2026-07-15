import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container">

        <div className="footer-top">
          <div>
            <h3 className="footer-logo">Crown Dental &amp; Cosmetology Clinic</h3>
            <p className="footer-tagline">Advanced Dentistry · Medical Cosmetology · Premium Care</p>
          </div>

          <nav className="footer-socials" aria-label="Social media links">
            <a
              href="https://www.instagram.com/crowndentalcosmetology"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Crown Dental on Instagram"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/share/1BrZgfoCDF/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Crown Dental on Facebook"
            >
              Facebook
            </a>
          </nav>
        </div>

        <div className="footer-bottom">
          <p className="footer-address">
            19-A Square Building, Vasuki 5th Street, Senguthar School Back Side, Erode – 638001
          </p>
          <p className="footer-copyright">
            &copy; {year} Crown Dental &amp; Cosmetology Clinic. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
