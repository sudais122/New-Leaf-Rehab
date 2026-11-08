// Icons are the same Unicode characters the original HTML used as entities
// (&#10010; &#9998; &#9877; &#9834; &#8962; &#9728;).
const ICON = {
  cross: '\u271A',
  pencil: '\u270E',
  medical: '\u2695',
  note: '\u266A',
  home: '\u2302',
  sun: '\u2600',
};

// Short cards shown on the home page
export const homeServices = [
  { icon: ICON.cross, title: 'Addiction Rehabilitation', hash: 'addiction', text: 'Screening, assessment, counselling, psychoeducation and relapse prevention for substance use concerns.' },
  { icon: ICON.pencil, title: 'Psychological Services', hash: 'psychological', text: 'Assessment, counselling and psychotherapy, including CBT-informed care for stress, anxiety and mood.' },
  { icon: ICON.medical, title: 'Psychiatric Care', hash: 'psychiatric', text: 'Consultant psychiatrist evaluation, diagnosis, treatment recommendations and medication management.' },
  { icon: ICON.note, title: 'Medical Officer Care', hash: 'medical', text: 'General medical assessment, monitoring of physical health and withdrawal symptoms, and timely referral.' },
  { icon: ICON.home, title: 'Family Support', hash: 'family', text: "Education and involvement for families, with the client's consent, to support recovery at home." },
  { icon: ICON.sun, title: 'Spiritual Care', hash: 'spiritual', text: "Faith-based guidance and encouragement that respects each person's beliefs and circumstances." },
];

// Full detail blocks on the Treatments & Services page
export const serviceDetails = [
  {
    id: 'addiction', icon: ICON.cross, title: 'Addiction Rehabilitation',
    intro: 'Recovery-focused care for people affected by substance use disorders and addiction-related difficulties.',
    items: [
      'Initial screening and assessment of substance use concerns',
      'Individual counselling and recovery-focused support',
      'Psychoeducation about addiction, triggers, cravings and recovery',
      'Motivational interviewing-informed conversations, where provided by trained staff',
      'Relapse prevention planning and continuing recovery support',
    ],
  },
  {
    id: 'psychological', icon: ICON.pencil, title: 'Psychological Services',
    intro: 'Delivered by our clinical psychologists and trained mental health professionals within their professional scope.',
    items: [
      'Psychological assessment and screening',
      'Individual counselling and psychotherapy, as clinically appropriate',
      'Cognitive Behavioural Therapy (CBT)-informed interventions',
      'Stress, anxiety, mood and behavioural support',
      'Group psychoeducation and therapeutic activities, where appropriate',
    ],
  },
  {
    id: 'psychiatric', icon: ICON.medical, title: 'Psychiatric Care',
    intro: 'Led by our consultant psychiatrist for individuals who need psychiatric evaluation and treatment.',
    items: [
      'Psychiatric assessment, diagnosis and treatment recommendations',
      'Coordination of care for co-occurring mental health concerns',
      'Medication-related care only through qualified prescribers and authorized processes',
      'Clinical monitoring and treatment follow-up',
    ],
  },
  {
    id: 'medical', icon: ICON.note, title: 'Medical Care & Monitoring',
    intro: "Our medical officer supports patients' physical health throughout rehabilitation.",
    items: [
      'Initial medical assessment of newly admitted patients',
      'Monitoring vital signs and physical symptoms associated with substance withdrawal',
      'Identification of medical complications and timely referral',
      'Referral for medical assessment and emergency care when required',
    ],
  },
  {
    id: 'family', icon: ICON.home, title: 'Family Support',
    intro: 'Recovery is stronger when families understand and take part.',
    items: [
      'Family education and psychoeducation about addiction and recovery',
      "Family counselling and involvement, with the client's consent",
      'Guidance for supporting recovery and reintegration at home',
    ],
  },
  {
    id: 'spiritual', icon: ICON.sun, title: 'Spiritual Care',
    intro: 'Faith-based encouragement offered alongside professional healthcare and psychological services.',
    items: [
      'Spiritual guidance and supportive counselling',
      'Promoting hope, inner peace and positive values',
      "Respect for each individual's beliefs and personal circumstances",
    ],
  },
];
