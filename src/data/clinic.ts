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

/* ─── Clinic imagery (real Crown assets only) ─────────────────── */
export const IMAGES = {
  logo: '/images/logo.png',
  logoText: '/images/Logo-text.png',
  exterior: '/images/clinic-exterior.png',
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
