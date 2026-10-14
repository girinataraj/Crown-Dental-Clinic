import { useEffect } from 'react';

// Core
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Home sections
import TrustLayer from './components/TrustLayer';
import AboutCrown from './components/AboutCrown';
import FeaturedTreatments from './components/FeaturedTreatments';
import BeforeAfter from './components/BeforeAfter';
import DrMonnica from './components/DrMonnica';
import SpecialistTeam from './components/SpecialistTeam';
import WhyChooseUs from './components/WhyChooseUs';
import CrownExperience from './components/CrownExperience';
import Reviews from './components/Reviews';
import ClinicGallery from './components/ClinicGallery';
import ConsultationCTA from './components/ConsultationCTA';
import Contact from './components/Contact';

// Routed page
import TreatmentPage from './components/TreatmentPage';

import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

import { useRoute } from './hooks/useRoute';

import './index.css';

interface HomePageProps {
  navigate: (to: string) => void;
}

function HomePage({ navigate }: HomePageProps) {
  return (
    <main>
      <Hero />
      <TrustLayer />
      <AboutCrown />
      <FeaturedTreatments navigate={navigate} />
      <BeforeAfter navigate={navigate} />
      <DrMonnica />
      <SpecialistTeam />
      <WhyChooseUs />
      <CrownExperience />
      <Reviews />
      <ClinicGallery />
      <ConsultationCTA />
      <Contact />
    </main>
  );
}

function App() {
  const { route, navigate } = useRoute();

  /* Honour a direct/bookmarked in-page-section link, e.g. site.com/#doctors.
     Treatment routes (#/treatments/:id) and plain home loads are unaffected. */
  useEffect(() => {
    if (route.name !== 'home' || !route.anchor) return;
    const el = document.querySelector(`#${route.anchor}`);
    if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: 'auto' }));
  }, [route]);

  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Navbar route={route} navigate={navigate} />

      {route.name === 'treatment' ? (
        <TreatmentPage id={route.id} navigate={navigate} />
      ) : (
        <HomePage navigate={navigate} />
      )}

      <Footer navigate={navigate} />
      <WhatsAppButton />
    </div>
  );
}

export default App;
