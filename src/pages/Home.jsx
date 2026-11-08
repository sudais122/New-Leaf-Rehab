import Button from '../components/Button';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import ServiceCard from '../components/ServiceCard';
import DepartmentCard from '../components/DepartmentCard';
import Reviews from '../components/Reviews';
import LocationMap from '../components/LocationMap';
import usePageMeta from '../hooks/usePageMeta';
import { exterior, reception, waitingArea } from '../assets/images';
import { homeServices } from '../data/services';
import { departments } from '../data/departments';
import { PHONE, PHONE_TEL, EMAIL } from '../data/site';

const workCards = [
  { icon: '\u2665', title: 'Individualized Care', text: "Care plans respond to each person's needs, clinical presentation, strengths and circumstances, and are reviewed as needs change." },
  { icon: '\u2695', title: 'A Multidisciplinary Team', text: 'Psychiatrists, clinical psychologists, medical officers, counsellors and spiritual care work together for the whole person.' },
  { icon: '\u2605', title: 'Ethical & Confidential', text: 'Informed consent, dignity, privacy and professional boundaries guide every step of treatment.' },
];

export default function Home() {
  usePageMeta(
    'New Leaf Rehab Center Islamabad | Addiction Rehabilitation & Mental Healthcare',
    'New Leaf Rehab Center Islamabad: substance use disorder rehabilitation, psychiatric care, psychological services and clinical internships. Registered with IHRA.'
  );

  return (
    <>
      {/* 1. HERO WITH PICTURE */}
      <section className="hero">
        <div className="container hero-grid">
          <Reveal>
            <span className="eyebrow">Rehabilitation · Mental Healthcare · Clinical Learning</span>
            <h1>Promoting Recovery,<br /><em>Restoring Hope,</em><br />Building a Healthier Future.</h1>
            <p>New Leaf Rehab Center is an Islamabad institution supporting individuals and families affected by substance use disorders and psychological or psychiatric conditions, in a safe, respectful and person-centred environment.</p>
            <div className="hero-actions">
              <Button to="/appointment">Book an Appointment</Button>
              <Button to="/services" variant="ghost">Our Treatments</Button>
            </div>
            <div className="trust">
              <span className="badge"><i>&#10003;</i> Licensed by IHRA</span>
              <span className="badge"><i>&#10003;</i> SECP Registered</span>
              <span className="badge"><i>&#10003;</i> Certified Experts</span>
            </div>
          </Reveal>
          <Reveal className="hero-visual">
            <div className="hero-photo"><img src={exterior} alt="New Leaf Rehab Center building, Tarlai Kalan, Islamabad" /></div>
            <div className="float-card"><strong>Since 2023</strong><span>Caring for Islamabad families</span></div>
          </Reveal>
        </div>
      </section>

      {/* 2. WHO WE ARE */}
      <section className="section">
        <div className="container split">
          <Reveal className="photo-stack">
            <div className="p1"><img src={reception} alt="Reception at New Leaf Rehab Center" /></div>
            <div className="p2"><img src={waitingArea} alt="Waiting area" /></div>
          </Reveal>
          <Reveal>
            <span className="eyebrow">Who We Are</span>
            <h2>A caring, structured path from addiction to recovery</h2>
            <div className="rule"></div>
            <p>New Leaf Rehab Center (NLRC) Islamabad is a rehabilitation and mental healthcare institution, established on 17 July 2023 by Misbah Ullah and Dr. Shahzaib, to contribute to addiction rehabilitation and mental healthcare in the capital.</p>
            <p>We see recovery as a process that involves physical well-being, psychological support, behavioural change, family engagement and social reintegration, delivered in a respectful, structured and person-centred environment.</p>
            <div className="legal"><strong>Registered &amp; licensed:</strong> IHRA/Reg &amp; Lic /2024/IHRA-01624 · SECP Company No. 0254665</div>
            <Button to="/about" variant="dark">Read More About Us</Button>
          </Reveal>
        </div>
      </section>

      {/* 3. OUR WORK */}
      <section className="section section-dark">
        <div className="container">
          <SectionHead eyebrow="Our Work" title="Compassionate, personalized care built around you" light>
            <p>Our work is centred on respectful, individualized mental healthcare and rehabilitation that supports lasting recovery and well-being.</p>
          </SectionHead>
          <div className="work-grid">
            {workCards.map((c) => (
              <Reveal as="article" className="work-card" key={c.title}>
                <div className="ico">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR SERVICES */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Our Services" title="Comprehensive rehabilitation and mental healthcare">
            <p>Whether you need short-term support or long-term recovery care, our team will guide you toward healing and well-being.</p>
          </SectionHead>
          <div className="cards">
            {homeServices.map((s) => (
              <ServiceCard
                key={s.hash}
                icon={s.icon}
                title={s.title}
                text={s.text}
                linkTo={'/services#' + s.hash}
                linkLabel="Read More"
              />
            ))}
          </div>
          <div className="center-cta"><Button to="/services" variant="dark">View All Treatments</Button></div>
        </div>
      </section>

      {/* 5. OUR DEPARTMENTS */}
      <section className="section section-tint">
        <div className="container">
          <SectionHead eyebrow="Our Departments" title="Expert teams working under one roof" />
          <div className="dept-grid">
            {departments.map((d) => (
              <DepartmentCard key={d.id} id={d.id} icon={d.icon} title={d.title} text={d.homeText} />
            ))}
          </div>
          <div className="center-cta"><Button to="/departments" variant="dark">All Departments</Button></div>
        </div>
      </section>

      {/* 7. LOCATION MAP */}
      <section className="section section-tint">
        <div className="container">
          <SectionHead eyebrow="Find Us" title="Our Location on Map" />
          <LocationMap />
          <div className="addr-bar">
            <span><strong>Address:</strong> Street No. 6, Tarlai Kalan, Islamabad, Pakistan</span>
            <span><strong>Phone:</strong> <a href={'tel:' + PHONE_TEL}>{PHONE}</a></span>
            <span><strong>Email:</strong> <a href={'mailto:' + EMAIL}>{EMAIL}</a></span>
          </div>
        </div>
      </section>
    </>
  );
}
