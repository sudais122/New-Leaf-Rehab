import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import PageHero from '../components/PageHero';
import TickList from '../components/TickList';
import usePageMeta from '../hooks/usePageMeta';
import { office } from '../assets/images';

const values = [
  { title: 'Compassion', text: 'Treating every individual with dignity, empathy and respect.' },
  { title: 'Professionalism', text: 'Responsible practice, appropriate supervision and continuing learning.' },
  { title: 'Confidentiality', text: 'Protecting personal and clinical information in line with ethical and legal requirements.' },
  { title: 'Individualized Care', text: "Each person's needs, strengths and recovery goals are different." },
  { title: 'Accountability', text: 'Transparency, safe practice and continuous improvement.' },
  { title: 'Recovery & Reintegration', text: 'Sustainable progress and constructive participation in family and community life.' },
];

const steps = [
  { title: 'Initial contact & screening', text: 'Understanding why you are seeking support, immediate concerns, and whether urgent referral is required.' },
  { title: 'Clinical assessment', text: 'Gathering history and assessing substance use, psychological, social and health-related needs.' },
  { title: 'Individualized care plan', text: 'Setting collaborative goals and discussing suitable interventions with you.' },
  { title: 'Treatment & rehabilitation', text: 'Counselling, psychoeducation, structured rehabilitation activities and clinical coordination.' },
  { title: 'Family engagement', text: "Education and support for family members, with the client's consent." },
  { title: 'Relapse prevention & discharge planning', text: 'Identifying triggers, building coping strategies and arranging ongoing support.' },
  { title: 'Follow-up & continuing care', text: 'Encouraging continuity of care and reviewing recovery goals after the programme.' },
];

const ethics = [
  'Respect for dignity, autonomy and individual differences',
  'Informed consent and clear communication about services',
  'Privacy and confidentiality, subject to legal and safety exceptions',
  'Non-discrimination and respectful treatment',
  'Appropriate professional boundaries and role clarity',
  "Referral to qualified professionals when a need falls outside a staff member's competence",
];

export default function About() {
  usePageMeta(
    'About Us | New Leaf Rehab Center Islamabad',
    'History, vision, mission, values, ethics and registration details of New Leaf Rehab Center Islamabad.'
  );

  return (
    <>
      <PageHero title="About Us" crumbs={[{ label: 'Home', to: '/' }, { label: 'About Us' }]} />

      <section className="section">
        <div className="container split">
          <Reveal>
            <span className="eyebrow">Our Story</span>
            <h2>History &amp; development</h2>
            <div className="rule"></div>
            <p>New Leaf Rehab Center was established on <strong>17 July 2023</strong>. The project was initiated by Misbah Ullah and Dr. Shahzaib with the aim of contributing to addiction rehabilitation and mental healthcare in Islamabad.</p>
            <p>Since its establishment, the centre's focus has included rehabilitation services, psychological support and opportunities for clinical learning. Services are delivered in a respectful, structured and person-centred environment, with care coordinated with qualified medical and psychiatric professionals where required.</p>
            <p>The institution also values professional education: through supervised clinical learning, it helps psychology students connect academic knowledge with responsible practice.</p>
          </Reveal>
          <Reveal className="pic"><img src={office} alt="Management office" /></Reveal>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <SectionHead eyebrow="Vision & Mission" title="What we stand for" />
          <div className="vm">
            <Reveal className="vm-card"><h3>Our Vision</h3><p>To build a healthy and caring society where people facing addiction and mental health problems can get the help and support they need, recover with dignity, and live a better life with hope and confidence.</p></Reveal>
            <Reveal className="vm-card"><h3>Our Mission</h3><p>To provide quality rehabilitation and mental health care in a safe, supportive and respectful environment, helping individuals overcome addiction and mental health challenges through proper treatment, counselling, family support and guidance, so they can return to a healthy and meaningful life.</p></Reveal>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <SectionHead eyebrow="Core Values" title="What guides every part of our care" light />
          <div className="values-grid">
            {values.map((v, i) => (
              <Reveal as="article" className="value" key={v.title}>
                <span className="value-n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Recovery Pathway" title="Seven steps, shaped around you">
            <p>Treatment is individualized after assessment and reviewed as needs change.</p>
          </SectionHead>
          <ol className="steps">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.title}>
                <span>{i + 1}</span>
                <div><h3>{s.title}</h3><p>{s.text}</p></div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container split">
          <Reveal>
            <span className="eyebrow">Ethics &amp; Patient Rights</span>
            <h2>Respectful, ethical and confidential care</h2>
            <div className="rule"></div>
            <TickList items={ethics} />
          </Reveal>
          <Reveal className="reg">
            <h3>Registration &amp; Licensing</h3>
            <dl>
              <dt>Institution</dt><dd>New Leaf Rehab Center Islamabad</dd>
              <dt>IHRA Registration</dt><dd>IHRA/Reg &amp; Lic /2024/IHRA-01624</dd>
              <dt>Authority</dt><dd>Islamabad Healthcare Regulatory Authority</dd>
              <dt>Company No. (SECP)</dt><dd>0254665 · Companies Act, 2017 (XIX of 2017)</dd>
              <dt>Established</dt><dd>17 July 2023</dd>
              <dt>Address</dt><dd>Street No. 6, Tarlai Kalan, Islamabad</dd>
            </dl>
          </Reveal>
        </div>
      </section>
    </>
  );
}
