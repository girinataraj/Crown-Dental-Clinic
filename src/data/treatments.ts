/* ================================================================
   Crown Dental & Cosmetology Clinic — Treatment catalogue
   ----------------------------------------------------------------
   Single source of truth for treatment cards, filters and the
   dedicated treatment detail pages (#/treatments/:id).

   Copy policy: descriptive and educational only. No outcome
   guarantees, no invented statistics, no fabricated credentials.
   ================================================================ */

import { IMAGES } from './clinic';
import type { TreatmentIconName } from '../components/icons/TreatmentIcon';

export type TreatmentCategory = 'Dental' | 'Cosmetology';

export interface ProcessStep {
  title: string;
  desc: string;
}

export interface Treatment {
  /** URL slug — used by #/treatments/:id */
  id: string;
  title: string;
  category: TreatmentCategory;
  /** Icon shown on cards, the nav mega-menu & page headers */
  icon: TreatmentIconName;
  /** Shown in the Featured Treatments grid on the home page */
  featured: boolean;
  /** One-line page subtitle */
  tagline: string;
  /** Card blurb — 1 sentence */
  short: string;
  /** Opening paragraph of the detail page */
  whatItIs: string;
  /** Treatment overview — 1–2 paragraphs */
  overview: string[];
  /** Who the treatment is typically suited to */
  idealFor: string[];
  /** What to expect — clinic journey */
  process: ProcessStep[];
  /** Key benefits */
  benefits: string[];
  /** Verified supervising specialist or team */
  specialist: string;
  /** Real Crown clinic image used as contextual imagery */
  image: string;
  /** Honest caption for that image — never implies a case photo */
  imageLabel: string;
  /** Slugs of related treatments */
  related: string[];
}

export const TREATMENTS: Treatment[] = [
  /* ───────────────────────── DENTAL ───────────────────────── */
  {
    id: 'invisible-aligners',
    title: 'Invisible Aligners',
    category: 'Dental',
    icon: 'aligner-tray',
    featured: true,
    tagline: 'Discreet, removable orthodontic correction',
    short:
      'Clear, modern orthodontic correction for a straighter smile — no brackets, no wires.',
    whatItIs:
      'Invisible aligners are custom-made transparent trays worn over the teeth to guide them into better alignment in gradual, planned stages. They are removable, virtually unnoticeable in everyday conversation, and designed for comfortable daily wear.',
    overview: [
      'Treatment begins with a detailed clinical assessment and digital planning of your dental arches. From that plan, a progressive series of aligners is fabricated — each tray applying gentle, controlled movement before you advance to the next in the sequence.',
      'Because the trays are removable, you continue to eat normally and brush and floss exactly as you always have. Review appointments at Crown track progress against the plan and confirm each stage before you move forward.',
    ],
    idealFor: [
      'Crowding, spacing or gaps between teeth',
      'Mild to moderate alignment irregularities',
      'Adults and teens who prefer a discreet alternative to fixed braces',
      'Patients who want to avoid the dietary restrictions of metal brackets',
    ],
    process: [
      { title: 'Orthodontic consultation', desc: 'Clinical examination, discussion of your concerns and an assessment of whether aligners suit your case.' },
      { title: 'Digital planning', desc: 'Records and digital assessment are used to map the staged movement of your teeth.' },
      { title: 'Aligner series', desc: 'Custom trays are issued in sequence and worn as instructed, each one advancing the plan.' },
      { title: 'Progress reviews', desc: 'Scheduled check-ups confirm that movement is tracking as planned before the next stage.' },
      { title: 'Retention', desc: 'Once alignment is complete, retention is advised to help hold the corrected position.' },
    ],
    benefits: [
      'Nearly invisible in everyday wear',
      'Removable for meals and oral hygiene',
      'Smooth trays with no brackets or wires',
      'Structured, staged progress reviews',
    ],
    specialist: 'Dr. Thangamani Ammal, MDS — Orthodontist',
    image: IMAGES.invisibleAligners,
    imageLabel: 'Invisible aligners at Crown Dental Clinic',
    related: ['orthodontics', 'smile-makeover', 'general-dentistry'],
  },
  {
    id: 'dental-implants',
    title: 'Dental Implants',
    category: 'Dental',
    icon: 'implant-post',
    featured: true,
    tagline: 'Fixed replacement for missing teeth',
    short:
      'Fixed, natural-looking tooth replacement that restores both bite function and appearance.',
    whatItIs:
      'A dental implant is a biocompatible post placed into the jawbone to act as the root of a replacement tooth. Once integrated, it supports a custom crown, bridge or full-arch restoration — rebuilding the tooth from the root upward rather than resting on the gum.',
    overview: [
      'Implant treatment at Crown is planned around your bone, bite and aesthetic requirements. Placement is carried out under sterile clinical protocol, followed by a healing period during which the implant integrates with the surrounding bone.',
      'The final restoration is then fabricated and fitted to match the shape and shade of your natural teeth, restoring chewing ability, speech clarity and the appearance of a complete smile.',
    ],
    idealFor: [
      'A single missing tooth',
      'Several missing teeth in one or both arches',
      'Full-arch replacement where teeth are absent',
      'Patients seeking a fixed alternative to removable dentures',
    ],
    process: [
      { title: 'Clinical assessment', desc: 'Examination and diagnostic imaging to evaluate bone and plan implant position.' },
      { title: 'Implant placement', desc: 'The implant post is placed under sterile protocol with local anaesthesia.' },
      { title: 'Healing & integration', desc: 'A healing phase allows the implant to integrate securely with the bone.' },
      { title: 'Custom restoration', desc: 'A crown, bridge or full-arch restoration is fabricated to match your natural teeth.' },
      { title: 'Fit & maintenance', desc: 'The restoration is fitted and reviewed, with ongoing hygiene guidance provided.' },
    ],
    benefits: [
      'Fixed replacement — no removal for cleaning',
      'Natural appearance and bite function',
      'Supports the structure of the jaw where a tooth is lost',
      'Planned and placed by a specialist implantologist',
    ],
    specialist: 'Dr. Monnica V, MDS, FMC — Consultant Prosthodontist & Implantologist',
    image: IMAGES.dentalImplant,
    imageLabel: 'Dental implant restoration at Crown Dental Clinic',
    related: ['prosthodontics', 'oral-surgery', 'smile-makeover'],
  },
  {
    id: 'smile-makeover',
    title: 'Smile Makeover',
    category: 'Dental',
    icon: 'sparkle-smile',
    featured: true,
    tagline: 'A complete, personalised smile design',
    short:
      'Comprehensive aesthetic design combining veneers, crowns, contouring and whitening.',
    whatItIs:
      'A smile makeover is a planned combination of cosmetic dental procedures — rather than a single treatment — designed together so that shape, shade and proportion work in harmony with your face.',
    overview: [
      'Your consultation begins with what you would like to change. From there a treatment plan is built from the procedures that suit your case: porcelain veneers, ceramic crowns, aesthetic contouring, professional whitening, or alignment correction where it is needed first.',
      'Shade and shape are selected with you before any restorative work begins, so the result is agreed in advance rather than discovered at the end.',
    ],
    idealFor: [
      'Chipped, worn or uneven teeth',
      'Discolouration that does not respond to routine cleaning',
      'Gaps and irregular tooth proportions',
      'Patients wanting several aesthetic concerns addressed in one plan',
    ],
    process: [
      { title: 'Smile design consultation', desc: 'Discussion of your goals with a full clinical and aesthetic assessment.' },
      { title: 'Treatment planning', desc: 'The combination of procedures is planned and sequenced for your case.' },
      { title: 'Shade & shape selection', desc: 'Tooth colour and form are chosen with you before restorative work begins.' },
      { title: 'Restorative phase', desc: 'Minimal preparation followed by precision ceramic or composite restoration.' },
      { title: 'Final review', desc: 'Fit, bite and appearance are reviewed together, with aftercare guidance.' },
    ],
    benefits: [
      'Several aesthetic concerns addressed within one plan',
      'Shade and shape agreed before treatment begins',
      'Porcelain veneers and ceramic crown options',
      'Designed in proportion with your facial features',
    ],
    specialist: 'Dr. Monnica V, MDS, FMC — Managing & Clinical Director',
    image: IMAGES.smileAfter,
    imageLabel: 'Smile makeover result — Crown patient case',
    related: ['prosthodontics', 'invisible-aligners', 'general-dentistry'],
  },
  {
    id: 'orthodontics',
    title: 'Orthodontics',
    category: 'Dental',
    icon: 'aligner-tray',
    featured: false,
    tagline: 'Braces and alignment correction for every age',
    short:
      'Specialist correction of tooth position and bite using braces or clear aligner systems.',
    whatItIs:
      'Orthodontics is the dental speciality concerned with the position of the teeth and the way the upper and lower jaws meet. Treatment may use fixed braces, clear aligners, or a combination, depending on what the case requires.',
    overview: [
      'Crown’s orthodontic care is led by a specialist orthodontist. After assessment, the appropriate appliance is selected — fixed braces are often indicated for more complex movement, while clear aligners suit many mild to moderate cases.',
      'Alignment is not only cosmetic. Teeth that meet correctly are easier to clean and distribute bite forces more evenly, which supports long-term oral health.',
    ],
    idealFor: [
      'Crowded, rotated or protruding teeth',
      'Spacing and gaps between teeth',
      'Bite irregularities affecting how the teeth meet',
      'Children, teenagers and adults alike',
    ],
    process: [
      { title: 'Specialist assessment', desc: 'Clinical examination and records to establish what movement is required.' },
      { title: 'Appliance selection', desc: 'Braces or clear aligners are recommended based on the complexity of your case.' },
      { title: 'Active treatment', desc: 'Regular adjustment or aligner-change appointments progress the correction.' },
      { title: 'Retention phase', desc: 'Retainers are advised once treatment is complete to help maintain the result.' },
    ],
    benefits: [
      'Care led by a specialist orthodontist',
      'Fixed and removable appliance options',
      'Treatment planned for children, teens and adults',
      'Improved cleaning access and bite distribution',
    ],
    specialist: 'Dr. Thangamani Ammal, MDS — Orthodontist',
    image: IMAGES.alignerAfter,
    imageLabel: 'Alignment result — Crown patient case',
    related: ['invisible-aligners', 'general-dentistry', 'oral-surgery'],
  },
  {
    id: 'root-canal-treatment',
    title: 'Root Canal Treatment',
    category: 'Dental',
    icon: 'tooth-pulse',
    featured: false,
    tagline: 'Save the natural tooth, relieve the pain',
    short:
      'Removes infection from inside the tooth and preserves the natural tooth structure.',
    whatItIs:
      'Root canal treatment addresses infection or inflammation within the pulp — the soft tissue inside a tooth. The affected tissue is removed, the canal system is cleaned and shaped, and the space is sealed so the natural tooth can be retained rather than extracted.',
    overview: [
      'Treatment is carried out under local anaesthesia. Once the canal system has been cleaned, disinfected and sealed, the tooth is restored — commonly with a crown, which protects the remaining structure against fracture.',
      'Retaining a natural tooth preserves your existing bite relationship and avoids the need to replace the tooth later.',
    ],
    idealFor: [
      'Persistent toothache or pain on biting',
      'Prolonged sensitivity to hot or cold',
      'Deep decay reaching the nerve of the tooth',
      'A tooth that has been injured or cracked',
    ],
    process: [
      { title: 'Diagnosis', desc: 'Clinical examination and imaging confirm which tooth is involved and the extent of infection.' },
      { title: 'Anaesthesia & access', desc: 'The tooth is numbed and access is made to the canal system.' },
      { title: 'Cleaning & shaping', desc: 'Infected tissue is removed and the canals are disinfected and shaped.' },
      { title: 'Sealing', desc: 'The prepared canals are sealed to prevent re-entry of bacteria.' },
      { title: 'Final restoration', desc: 'The tooth is rebuilt — usually with a crown — to protect it in function.' },
    ],
    benefits: [
      'Preserves the natural tooth',
      'Carried out under local anaesthesia',
      'Addresses the source of infection',
      'Restored afterwards for full chewing function',
    ],
    specialist: 'Crown Dental Clinical Team',
    image: IMAGES.dentalSuite,
    imageLabel: 'Crown Dental Suite, Erode',
    related: ['endodontics', 'prosthodontics', 'general-dentistry'],
  },
  {
    id: 'endodontics',
    title: 'Endodontics',
    category: 'Dental',
    icon: 'tooth-pulse',
    featured: false,
    tagline: 'Care for the inside of the tooth',
    short:
      'Diagnosis and treatment of conditions affecting the dental pulp and surrounding tissue.',
    whatItIs:
      'Endodontics is the branch of dentistry concerned with the dental pulp and the tissues around the root of the tooth. It covers root canal therapy, re-treatment of previously treated teeth, and the management of dental trauma affecting the nerve.',
    overview: [
      'Accurate diagnosis is central to endodontic care. Symptoms such as lingering sensitivity, swelling or pain on pressure are assessed clinically and radiographically to identify the tooth involved and the nature of the problem.',
      'Treatment aims to remove infection, relieve symptoms and retain the natural tooth in function wherever it is clinically sound to do so.',
    ],
    idealFor: [
      'Pulp inflammation or infection',
      'Teeth requiring root canal re-treatment',
      'Dental trauma affecting the nerve of a tooth',
      'Swelling or abscess associated with a tooth',
    ],
    process: [
      { title: 'Diagnostic assessment', desc: 'Clinical testing and imaging establish the condition of the pulp and root.' },
      { title: 'Treatment plan', desc: 'The appropriate endodontic approach is explained before treatment begins.' },
      { title: 'Canal therapy', desc: 'Infected tissue is removed, the canals disinfected, shaped and sealed.' },
      { title: 'Restoration & review', desc: 'The tooth is restored and reviewed to confirm healing over time.' },
    ],
    benefits: [
      'Focused on retaining the natural tooth',
      'Structured diagnosis before treatment',
      'Includes re-treatment of previously treated teeth',
      'Symptom relief through infection control',
    ],
    specialist: 'Crown Dental Clinical Team',
    image: IMAGES.dentalSuite,
    imageLabel: 'Crown Dental Suite, Erode',
    related: ['root-canal-treatment', 'general-dentistry', 'prosthodontics'],
  },
  {
    id: 'prosthodontics',
    title: 'Prosthodontics',
    category: 'Dental',
    icon: 'implant-post',
    featured: false,
    tagline: 'Crowns, bridges, dentures and full restoration',
    short:
      'Specialist restoration and replacement of damaged or missing teeth.',
    whatItIs:
      'Prosthodontics is the dental speciality dedicated to restoring and replacing teeth. It covers crowns, bridges, veneers, removable and fixed dentures, and implant-supported restorations — anything that rebuilds form and function.',
    overview: [
      'Crown’s prosthodontic care is led by a consultant prosthodontist. Treatment begins with an assessment of the remaining teeth, the bite and the supporting tissues, so that a restoration is planned to last in function, not only to look correct on the day it is fitted.',
      'Materials and design are selected for the individual case — from single ceramic crowns through to full-arch rehabilitation.',
    ],
    idealFor: [
      'Heavily damaged, worn or broken-down teeth',
      'Missing teeth requiring bridges or dentures',
      'Existing restorations needing replacement',
      'Full-mouth rehabilitation cases',
    ],
    process: [
      { title: 'Specialist consultation', desc: 'Assessment of teeth, bite and supporting tissues with a discussion of options.' },
      { title: 'Restorative planning', desc: 'Materials, design and sequence are planned around your case.' },
      { title: 'Preparation & records', desc: 'Teeth are prepared and precise records are taken for fabrication.' },
      { title: 'Fit & adjustment', desc: 'The restoration is fitted, checked in function and adjusted as required.' },
      { title: 'Maintenance review', desc: 'Follow-up and hygiene guidance to support the longevity of the work.' },
    ],
    benefits: [
      'Led by a consultant prosthodontist',
      'Fixed and removable options available',
      'Restores both appearance and chewing function',
      'Planned for long-term performance in the bite',
    ],
    specialist: 'Dr. Monnica V, MDS, FMC — Consultant Prosthodontist',
    image: IMAGES.dentalSuite,
    imageLabel: 'Crown Dental Suite, Erode',
    related: ['dental-implants', 'smile-makeover', 'root-canal-treatment'],
  },
  {
    id: 'oral-surgery',
    title: 'Oral Surgery',
    category: 'Dental',
    icon: 'surgical-target',
    featured: false,
    tagline: 'Specialist surgical care of the mouth and jaws',
    short:
      'Surgical extractions, impacted teeth and specialised oral-facial procedures.',
    whatItIs:
      'Oral and maxillofacial surgery covers surgical procedures involving the teeth, jaws and surrounding facial structures — most commonly the removal of impacted or difficult teeth, but also a range of minor surgical treatments.',
    overview: [
      'Procedures are carried out by a specialist oral and maxillofacial surgeon under sterile protocol and local anaesthesia. Each case is assessed with imaging beforehand so the approach and expected recovery are clear before treatment.',
      'Post-operative instructions and follow-up are provided for every surgical case.',
    ],
    idealFor: [
      'Impacted or partially erupted wisdom teeth',
      'Teeth that cannot be removed by routine extraction',
      'Minor surgical procedures of the mouth and jaws',
      'Surgical preparation ahead of restorative treatment',
    ],
    process: [
      { title: 'Surgical assessment', desc: 'Examination and imaging to plan the approach and discuss the procedure.' },
      { title: 'Procedure', desc: 'Surgery under local anaesthesia and sterile clinical protocol.' },
      { title: 'Post-operative care', desc: 'Clear aftercare instructions and medication guidance where required.' },
      { title: 'Healing review', desc: 'A follow-up appointment confirms healing is progressing normally.' },
    ],
    benefits: [
      'Care from a specialist oral & maxillofacial surgeon',
      'Imaging-led planning before every procedure',
      'Sterile surgical protocol',
      'Structured post-operative follow-up',
    ],
    specialist: 'Dr. Vinodh, MDS — Oral & Maxillofacial Surgeon',
    image: IMAGES.dentalSuite,
    imageLabel: 'Crown Dental Suite, Erode',
    related: ['dental-implants', 'general-dentistry', 'orthodontics'],
  },
  {
    id: 'general-dentistry',
    title: 'General Dentistry',
    category: 'Dental',
    icon: 'tooth',
    featured: false,
    tagline: 'Check-ups, cleaning and everyday dental care',
    short:
      'Routine examinations, preventive care and everyday restorative treatment.',
    whatItIs:
      'General dentistry is the day-to-day care that keeps problems small: examinations, professional cleaning, fillings, and the preventive advice that helps you avoid more complex treatment later.',
    overview: [
      'A routine visit at Crown includes an examination of the teeth, gums and soft tissues, with imaging where it is clinically indicated. Findings are explained plainly, along with what — if anything — needs attention.',
      'Where a specialist procedure is required, care is referred internally to the relevant member of the Crown team, so treatment continues in one place.',
    ],
    idealFor: [
      'Routine dental check-ups and cleaning',
      'Cavities and everyday restorative work',
      'Gum health assessment and maintenance',
      'Families looking for one clinic for regular care',
    ],
    process: [
      { title: 'Examination', desc: 'Assessment of teeth, gums and soft tissues, with imaging where indicated.' },
      { title: 'Findings discussion', desc: 'What was found and what it means, explained clearly before anything is decided.' },
      { title: 'Preventive & restorative care', desc: 'Cleaning, fillings and preventive treatment as required.' },
      { title: 'Recall schedule', desc: 'A review interval is agreed so problems are caught early.' },
    ],
    benefits: [
      'Preventive focus — problems caught early',
      'Findings explained before treatment is agreed',
      'Internal referral to Crown specialists when needed',
      'Suitable for the whole family',
    ],
    specialist: 'Dr. Sivaprakash, BDS — General Dentist',
    image: IMAGES.dentalSuite,
    imageLabel: 'Crown Dental Suite, Erode',
    related: ['root-canal-treatment', 'orthodontics', 'smile-makeover'],
  },

  /* ────────────────── MEDICAL COSMETOLOGY ────────────────── */
  {
    id: 'hydra-facial',
    title: 'Hydra Facial / Medi-Facial',
    category: 'Cosmetology',
    icon: 'droplet-glow',
    featured: true,
    tagline: 'Clinical cleansing, extraction and hydration',
    short:
      'A clinical facial that cleanses, exfoliates and deeply hydrates in a single session.',
    whatItIs:
      'A medi-facial is a non-invasive clinical facial performed in a medical setting. It combines gentle exfoliation, deep pore cleansing, painless extraction and an infusion of hydrating serums selected for your skin.',
    overview: [
      'Unlike a salon facial, a medi-facial is planned around a skin assessment. The steps, serums and intensity are adjusted to your skin type and current condition rather than applied to a fixed template.',
      'The treatment is non-invasive and typically requires no downtime, which makes it a common choice ahead of events or as part of an ongoing skin-care schedule.',
    ],
    idealFor: [
      'Dull, tired-looking or dehydrated skin',
      'Congested pores and uneven texture',
      'Skin needing a refresh without downtime',
      'Ongoing maintenance alongside other skin treatments',
    ],
    process: [
      { title: 'Skin assessment', desc: 'Your skin is assessed and the protocol adjusted to suit it.' },
      { title: 'Cleanse & exfoliate', desc: 'Gentle exfoliation lifts surface debris and prepares the skin.' },
      { title: 'Extraction', desc: 'Painless extraction clears congestion from the pores.' },
      { title: 'Serum infusion', desc: 'Hydrating and nourishing serums are infused into the skin.' },
      { title: 'Aftercare guidance', desc: 'Home-care advice to extend and maintain the result.' },
    ],
    benefits: [
      'Non-invasive with no downtime',
      'Protocol adjusted to your skin',
      'Painless extraction step',
      'Deep hydration and immediate freshness',
    ],
    specialist: 'Crown Medical Cosmetology Team — supervised by Dr. Monnica V, FMC',
    image: IMAGES.hydraFacial,
    imageLabel: 'Hydra facial treatment at Crown Cosmetology',
    related: ['skin-rejuvenation', 'microneedling', 'medical-cosmetology'],
  },
  {
    id: 'hair-prp',
    title: 'Hair PRP',
    category: 'Cosmetology',
    icon: 'vial-drop',
    featured: true,
    tagline: 'Platelet-rich plasma therapy for the scalp',
    short:
      'Platelet-rich plasma therapy using your own blood to support hair and scalp health.',
    whatItIs:
      'PRP (platelet-rich plasma) therapy uses a concentrated preparation made from a small sample of your own blood. The plasma, rich in growth factors, is applied to the scalp in targeted micro-applications under sterile clinical conditions.',
    overview: [
      'Because the preparation is autologous — derived from your own blood — no external substance is introduced. A small sample is drawn, processed in a centrifuge to separate the platelet-rich fraction, and applied to the treatment area in the same session.',
      'PRP is normally delivered as a planned course of sessions rather than a single visit, with intervals advised at consultation. Suitability is assessed clinically before treatment begins.',
    ],
    idealFor: [
      'Early hair thinning in men and women',
      'Reduced hair density',
      'Weakened hair shafts and scalp concerns',
      'Patients seeking a non-surgical scalp treatment',
    ],
    process: [
      { title: 'Consultation', desc: 'Scalp assessment and discussion of suitability, expectations and session schedule.' },
      { title: 'Blood draw', desc: 'A small blood sample is taken in the clinic.' },
      { title: 'Plasma preparation', desc: 'The sample is centrifuged to isolate the platelet-rich fraction.' },
      { title: 'Scalp application', desc: 'Targeted micro-application to the treatment area under sterile protocol.' },
      { title: 'Course review', desc: 'Progress is reviewed across the planned course of sessions.' },
    ],
    benefits: [
      'Uses your own blood — no external substance',
      'Non-surgical, clinic-based procedure',
      'Performed under sterile medical protocol',
      'Delivered as a planned, reviewed course',
    ],
    specialist: 'Crown Medical Cosmetology Team',
    image: IMAGES.hairPRP,
    imageLabel: 'Hair PRP therapy at Crown Cosmetology',
    related: ['medical-cosmetology', 'microneedling', 'skin-rejuvenation'],
  },
  {
    id: 'acne-scar-treatment',
    title: 'Acne Scar Treatment',
    category: 'Cosmetology',
    icon: 'texture-dots',
    featured: true,
    tagline: 'Medical protocols for post-acne skin texture',
    short:
      'Medical protocols targeting post-acne scarring, texture and pigmentation marks.',
    whatItIs:
      'Acne scar treatment refers to a group of medical aesthetic protocols — clinical peels, microneedling and resurfacing among them — chosen according to the type of scarring present. Different scar types respond to different approaches, so assessment comes first.',
    overview: [
      'At consultation your skin is assessed to identify the scar pattern and any active concerns that need managing first. A protocol is then planned, usually as a course of sessions spaced at clinical intervals.',
      'Post-acne marks and textural scarring respond gradually. Realistic expectations, consistency across the course, and disciplined home care are all discussed openly before treatment starts.',
    ],
    idealFor: [
      'Textural scarring following acne',
      'Post-inflammatory marks and uneven tone',
      'Enlarged pores and rough skin texture',
      'Patients who have completed active acne management',
    ],
    process: [
      { title: 'Skin assessment', desc: 'Scar type and skin condition are assessed and recorded for reference.' },
      { title: 'Protocol planning', desc: 'A course is planned from the approaches suited to your scar pattern.' },
      { title: 'Treatment sessions', desc: 'Sessions are carried out at clinically advised intervals.' },
      { title: 'Home care', desc: 'Aftercare and sun protection guidance to support each session.' },
      { title: 'Progress review', desc: 'Response is reviewed across the course and the plan adjusted if required.' },
    ],
    benefits: [
      'Approach matched to your scar type',
      'Medically supervised protocols',
      'Structured course with progress reviews',
      'Clear aftercare and home-care guidance',
    ],
    specialist: 'Crown Medical Cosmetology Team',
    image: IMAGES.acneScar,
    imageLabel: 'Acne scar treatment at Crown Cosmetology',
    related: ['microneedling', 'skin-rejuvenation', 'hydra-facial'],
  },
  {
    id: 'microneedling',
    title: 'Microneedling',
    category: 'Cosmetology',
    icon: 'texture-dots',
    featured: false,
    tagline: 'Controlled micro-injury to stimulate skin renewal',
    short:
      'A collagen-induction procedure that works on skin texture, scarring and tone.',
    whatItIs:
      'Microneedling — also called collagen induction therapy — uses fine sterile needles to create controlled micro-channels in the skin. The skin’s natural repair response to these micro-injuries is what drives the improvement in texture over the following weeks.',
    overview: [
      'The procedure is carried out in the clinic under topical anaesthesia for comfort. Depth and coverage are adjusted to the area and the concern being treated.',
      'Microneedling is usually recommended as a course of sessions with clinically advised intervals between them, allowing the skin to complete its repair cycle before the next session.',
    ],
    idealFor: [
      'Uneven skin texture',
      'Post-acne scarring',
      'Enlarged pores',
      'Skin needing renewal without ablative resurfacing',
    ],
    process: [
      { title: 'Assessment & preparation', desc: 'Skin is assessed and prepared; topical anaesthesia is applied for comfort.' },
      { title: 'Microneedling pass', desc: 'Controlled micro-channels are created at a depth suited to the area.' },
      { title: 'Soothing phase', desc: 'Calming products are applied immediately after the procedure.' },
      { title: 'Recovery guidance', desc: 'Aftercare instructions including sun protection for the days that follow.' },
      { title: 'Session interval', desc: 'The next session is scheduled at the clinically advised interval.' },
    ],
    benefits: [
      'Stimulates the skin’s own repair response',
      'Depth adjusted to the treatment area',
      'Performed under topical anaesthesia',
      'Combines well with other skin protocols',
    ],
    specialist: 'Crown Medical Cosmetology Team',
    image: IMAGES.cosmetologySuite,
    imageLabel: 'Crown Cosmetology Suite, Erode',
    related: ['acne-scar-treatment', 'skin-rejuvenation', 'hydra-facial'],
  },
  {
    id: 'skin-rejuvenation',
    title: 'Skin Rejuvenation',
    category: 'Cosmetology',
    icon: 'droplet-glow',
    featured: false,
    tagline: 'Planned care for tone, texture and clarity',
    short:
      'Medically planned skin programmes addressing tone, texture, dullness and clarity.',
    whatItIs:
      'Skin rejuvenation describes a planned programme rather than a single procedure. Depending on your skin, it may combine clinical facials, peels, microneedling and prescribed home care into one schedule.',
    overview: [
      'Programmes begin with a consultation covering your skin history, current routine and what you would like to change. The plan is then built from the treatments appropriate to your skin type and concerns.',
      'Skin responds over time. Sessions are spaced at clinical intervals and reviewed as the programme progresses, with the plan adjusted where the response suggests it.',
    ],
    idealFor: [
      'Dullness and uneven skin tone',
      'Early signs of ageing',
      'Rough or congested texture',
      'Patients wanting a structured, ongoing skin plan',
    ],
    process: [
      { title: 'Skin consultation', desc: 'History, current routine and concerns are discussed and the skin assessed.' },
      { title: 'Programme design', desc: 'A schedule of in-clinic treatments and home care is planned together.' },
      { title: 'Treatment sessions', desc: 'Sessions are delivered at clinically advised intervals.' },
      { title: 'Ongoing review', desc: 'Response is reviewed and the programme adjusted as your skin changes.' },
    ],
    benefits: [
      'Planned programme, not a one-off treatment',
      'Combines in-clinic care with home routine',
      'Medically supervised throughout',
      'Reviewed and adjusted as skin responds',
    ],
    specialist: 'Crown Medical Cosmetology Team — supervised by Dr. Monnica V, FMC',
    image: IMAGES.cosmetologySuite,
    imageLabel: 'Crown Cosmetology Suite, Erode',
    related: ['hydra-facial', 'microneedling', 'facial-aesthetics'],
  },
  {
    id: 'facial-aesthetics',
    title: 'Facial Aesthetic Treatments',
    category: 'Cosmetology',
    icon: 'sparkle-smile',
    featured: false,
    tagline: 'Considered, medically supervised facial treatments',
    short:
      'Facial aesthetic procedures planned and supervised within a medical setting.',
    whatItIs:
      'Facial aesthetic treatments cover procedures that work with the proportions and appearance of the face. At Crown they are provided in a medical setting, with assessment and suitability established before anything is recommended.',
    overview: [
      'Consultation comes first. What you would like to change is discussed alongside what is clinically appropriate, and any treatment is explained in full — including what it involves and what it does not do — before it is agreed.',
      'Because Crown provides both dental and cosmetology care, facial aesthetics can be considered alongside smile treatment where the two relate to one another.',
    ],
    idealFor: [
      'Patients seeking facial aesthetic treatment in a medical setting',
      'Those who want assessment and advice before committing',
      'Patients combining smile and facial aesthetic planning',
    ],
    process: [
      { title: 'Consultation', desc: 'Discussion of your goals with a clinical assessment of suitability.' },
      { title: 'Options & explanation', desc: 'Suitable options are explained, including what each does and does not address.' },
      { title: 'Treatment', desc: 'The agreed treatment is carried out under sterile clinical protocol.' },
      { title: 'Review', desc: 'A follow-up appointment reviews the result and answers any questions.' },
    ],
    benefits: [
      'Delivered in a medical clinical setting',
      'Suitability assessed before recommendation',
      'Options explained openly before you commit',
      'Can be planned alongside dental treatment',
    ],
    specialist: 'Crown Medical Cosmetology Team — supervised by Dr. Monnica V, FMC',
    image: IMAGES.cosmetologySuite,
    imageLabel: 'Crown Cosmetology Suite, Erode',
    related: ['skin-rejuvenation', 'medical-cosmetology', 'smile-makeover'],
  },
  {
    id: 'medical-cosmetology',
    title: 'Medical Cosmetology',
    category: 'Cosmetology',
    icon: 'medical-heart',
    featured: false,
    tagline: 'Aesthetic care under clinical supervision',
    short:
      'The full medical cosmetology stream at Crown — skin, hair and facial aesthetics.',
    whatItIs:
      'Medical cosmetology is aesthetic treatment delivered under clinical supervision, in a clinic rather than a salon. It brings assessment, sterile protocol and medical oversight to skin, hair and facial aesthetic care.',
    overview: [
      'Crown runs medical cosmetology as a full second stream alongside dentistry, with a dedicated cosmetology suite and a team supervised by Dr. Monnica V, who holds a fellowship in medical cosmetology alongside her dental specialisation.',
      'Every treatment begins with assessment, and every plan is explained before it starts. Where a concern falls outside what the clinic treats, you are told so plainly.',
    ],
    idealFor: [
      'Patients who want aesthetic care in a clinical setting',
      'Skin, hair and facial aesthetic concerns',
      'Those looking for assessment before treatment',
      'Existing dental patients seeking aesthetic care in one place',
    ],
    process: [
      { title: 'Consultation & assessment', desc: 'Your concerns are assessed and suitable options identified.' },
      { title: 'Plan & explanation', desc: 'A treatment plan is explained in full, including intervals and expectations.' },
      { title: 'Clinical delivery', desc: 'Treatment in the dedicated cosmetology suite under sterile protocol.' },
      { title: 'Review & maintenance', desc: 'Progress reviews and maintenance guidance as the plan continues.' },
    ],
    benefits: [
      'Clinical setting with medical supervision',
      'Dedicated cosmetology suite',
      'Assessment-led — never treatment by default',
      'Available alongside Crown’s dental care',
    ],
    specialist: 'Dr. Monnica V, MDS, FMC — Medical Cosmetologist',
    image: IMAGES.cosmetologySuite,
    imageLabel: 'Crown Cosmetology Suite, Erode',
    related: ['hydra-facial', 'hair-prp', 'acne-scar-treatment'],
  },
];

/* ─── Helpers ─────────────────────────────────────────────── */

export const FEATURED_TREATMENTS = TREATMENTS.filter((t) => t.featured);

export function getTreatment(id: string): Treatment | undefined {
  return TREATMENTS.find((t) => t.id === id);
}

export function getRelated(t: Treatment): Treatment[] {
  return t.related.map(getTreatment).filter((x): x is Treatment => Boolean(x));
}
