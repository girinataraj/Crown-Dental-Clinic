/* ================================================================
   Crown Dental & Cosmetology Clinic — Verified clinic constants
   Single source of truth. Never hardcode these anywhere else.
   ================================================================ */

export const CLINIC = {
  name: 'Crown Dental & Cosmetology Clinic',
  shortName: 'Crown Dental',
  tagline: 'Advanced Dentistry · Medical Cosmetology · Premium Care',

  phoneDisplay: '+91 99653 10489',
  phoneHref: 'tel:+919965310489',
  whatsapp: 'https://wa.me/919965310489',

  monnicaPhoneDisplay: '+91 89460 13270',
  monnicaWhatsapp: 'https://wa.me/918946013270',

  email: 'crowndentalcosmetology@gmail.com',
  emailHref: 'mailto:crowndentalcosmetology@gmail.com',

  addressLine1: '19-A Square Building, Vasuki 5th Street',
  addressLine2: 'Senguthar School Back Side, Erode – 638001',
  addressFull:
    '19-A Square Building, Vasuki 5th Street, Senguthar School Back Side, Erode – 638001',

  mapsDirections: 'https://maps.google.com/?q=Crown+Dental+Cosmetology+Clinic+Erode',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.5!2d77.7167293!3d11.3417735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f3a254c9e41%3A0xbd721908e7886f4f!2sCrown%20Dental%20%26%20Cosmetology%20Clinic%20%7C%20Dental%20Clinic%20in%20Erode%20%7C%20Orthodontist%20%7C%20Invisalign%20Provider%20%7C%20Dental%20Implant%20Center!5e0!3m2!1sen!2sin!4v1690000000000',

  instagram: 'https://www.instagram.com/crowndentalcosmetology',
  facebook: 'https://www.facebook.com/share/1BrZgfoCDF/',

  googleRating: '4.9',
  googleReviewCount: '150+',
} as const;

/** Pre-filled WhatsApp enquiry for a specific treatment. */
export function whatsappFor(treatment?: string) {
  const text = treatment
    ? `Hello Crown Dental & Cosmetology Clinic, I would like to know more about ${treatment}.`
    : 'Hello Crown Dental & Cosmetology Clinic, I would like to start a consultation.';
  return `${CLINIC.whatsapp}?text=${encodeURIComponent(text)}`;
}

/* ─── Real Client Media (imported through Vite asset pipeline) ─── */
import heroInteriorImg from '../assets/2e840b6c-e88c-4deb-aabe-fa2e1ca48d9a.jpg';
import exteriorDayImg from '../assets/3c1bd7d8-00f2-48b3-961b-9639e6ce5d97.jpg';
import exteriorNightImg from '../assets/a8e2c7e0-7a8d-49e0-88b3-8fe11927171e.jpg';
import interiorAltImg from '../assets/7914c79f-46a6-49f1-a38e-e676abce13f0.jpg';
import milestoneAlignerImg from '../assets/0d250632-d710-43a7-b145-be8e888adfac.jpg';
import clinicTourVideo from '../assets/9b7b4fc9-84e1-4c56-8a70-4fd1114ad68d.mp4';
import receptionVideo from '../assets/3a604ba8-5c1b-4276-a906-28e28fca0d53.mp4';
import entranceVideo from '../assets/f89e1ed4-5547-41b8-beab-f5f12ca8371d.mp4';

export const CLIENT_MEDIA = {
  interiorHero: heroInteriorImg,
  interiorAlt: interiorAltImg,
  exteriorDay: exteriorDayImg,
  exteriorNight: exteriorNightImg,
  milestoneAligners: milestoneAlignerImg,
  tourVideo: clinicTourVideo,
  receptionVideo: receptionVideo,
  entranceVideo: entranceVideo,
} as const;

/* ─── Clinic imagery (real Crown assets) ─────────────────── */
export const IMAGES = {
  logo: '/images/logo.png',
  logoText: '/images/Logo-text.png',
  exterior: exteriorDayImg,
  exteriorNight: exteriorNightImg,
  interiorMain: heroInteriorImg,
  interiorAlt: interiorAltImg,
  milestone: milestoneAlignerImg,
  dentalSuite: '/images/treatment-room-2.png',
  cosmetologySuite: '/images/treatment-room-1.png',
  drMonnica: '/images/Doc.PNG',
  kavin: '/images/Doc image 1.jpeg',
  smileBefore: '/images/Smile-Before.png',
  smileAfter: '/images/Smile-After.png',
  alignerBefore: '/images/Invisalign-Before.png',
  alignerAfter: '/images/Invisalign-After.png',
  invisibleAligners: '/images/Invisible-Aligners.png',
  dentalImplant: '/images/dental-implant.jpeg',
  hydraFacial: '/images/hydrafacial.webp',
  hairPRP: '/images/Hair PRP.png',
  acneScar: '/images/Acne Scar Treatment.png',
} as const;
