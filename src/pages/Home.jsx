
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import ServiceCard from '../components/ServiceCard';
import DepartmentCard from '../components/DepartmentCard';
import LocationMap from '../components/LocationMap';
import usePageMeta from '../hooks/usePageMeta';

import { exterior, reception, waitingArea } from '../assets/images';
import { homeServices } from '../data/services';
import { departments } from '../data/departments';
import { PHONE, PHONE_TEL, EMAIL } from '../data/site';

const workCards = [
  {
    icon: '♥',
    title: 'Individualized Care',
    text: "Care plans respond to each person's needs, clinical presentation, strengths and circumstances, and are reviewed as needs change."
  },
  {
    icon: '⚕',
    title: 'A Multidisciplinary Team',
    text: 'Psychiatrists, clinical psychologists, medical officers, counsellors and spiritual care work together for the whole person.'
  },
  {
    icon: '★',
    title: 'Ethical & Confidential',
    text: 'Informed consent, dignity, privacy and professional boundaries guide every step of treatment.'
  }
];

export default function Home() {
  usePageMeta(
    'New Leaf Rehab Center Islamabad | Addiction Rehabilitation & Mental Healthcare',
    'New Leaf Rehab Center Islamabad: substance use disorder rehabilitation, psychiatric care, psychological services and clinical internships. Registered with IHRA.'
  );

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="hero">
        <div className="container hero-grid">
          <Reveal>
            <span className="eyebrow">
              Rehabilitation · Mental Healthcare · Clinical Learning
            </span>

            <h1>
              Promoting Recovery,
              <br />
              <em>Restoring Hope,</em>
              <br />
              Building a Healthier Future.
            </h1>

            <p>
              New Leaf Rehab Center is an Islamabad institution supporting
              individuals and families affected by substance use disorders
              and psychological or psychiatric conditions, in a safe,
              respectful and person-centred environment.
            </p>

            <div className="hero-actions">
              <Button to="/appointment">
                Book an Appointment
              </Button>

              <Button to="/services" variant="ghost">
                Our Treatments
              </Button>
            </div>

            <div className="trust">
              <span className="badge">
                <i>✓</i> Licensed by IHRA
              </span>

              <span className="badge">
                <i>✓</i> SECP Registered
              </span>

              <span className="badge">
                <i>✓</i> Certified Experts
              </span>
            </div>
          </Reveal>

          <Reveal className="hero-visual">
            <div className="hero-photo">
              <img
                src={exterior}
                alt="New Leaf Rehab Center building, Tarlai Kalan, Islamabad"
              />
            </div>

            <div className="float-card">
              <strong>Since 2023</strong>
              <span>Caring for Islamabad families</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. TRUST & CONTACT BAR */}
{/* TRUST & CONTACT BAR */}
<section className="trust-bar">
  <div className="container trust-bar-grid">

    {/* SECP Registration */}
    <div className="trust-item">
      <span className="trust-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M8 4V2h8v2M8 9h8M8 13h5M8 17h8" />
        </svg>
      </span>
      <div>
        <strong>Registered with SECP</strong>
        <small>Officially Registered</small>
      </div>
    </div>

    {/* IHRA License */}
    <div className="trust-item">
      <span className="trust-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      </span>
      <div>
        <strong>Licensed by IHRA</strong>
        <small>Healthcare Compliance</small>
      </div>
    </div>

    {/* Certified Experts */}
    <div className="trust-item">
      <span className="trust-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="6" />
          <path d="m8.2 13-1.2 9 5-3 5 3-1.2-9" />
          <path d="m10 8 1.5 1.5L14.5 6" />
        </svg>
      </span>
      <div>
        <strong>Certified Experts</strong>
        <small>Professional Care Team</small>
      </div>
    </div>

    {/* Contact */}
    <div className="trust-item">
      <span className="trust-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2
            19.79 19.79 0 0 1-8.63-3.07
            19.5 19.5 0 0 1-6-6
            19.79 19.79 0 0 1-3.07-8.67
            A2 2 0 0 1 4.11 2h3
            a2 2 0 0 1 2 1.72
            c.12.96.36 1.9.7 2.8
            a2 2 0 0 1-.45 2.11L8.09 9.91
            a16 16 0 0 0 6 6l1.27-1.27
            a2 2 0 0 1 2.11-.45
            c.9.34 1.84.58 2.8.7
            A2 2 0 0 1 22 16.92z" />
        </svg>
      </span>
      <div>
        <strong>Call Us For Any Query</strong>
        <small>
          <a href={`tel:${PHONE_TEL}`}>{PHONE}</a>
        </small>
      </div>
    </div>

  </div>
</section>

      {/* 3. WHO WE ARE */}
      <section className="section">
        <div className="container split">
          <Reveal className="photo-stack">
            <div className="p1">
              <img
                src={reception}
                alt="Reception at New Leaf Rehab Center"
              />
            </div>

            <div className="p2">
              <img src={waitingArea} alt="Waiting area" />
            </div>
          </Reveal>

          <Reveal>
            <span className="eyebrow">Who We Are</span>

            <h2>
              A caring, structured path from addiction to recovery
            </h2>

            <div className="rule"></div>

            <p>
              New Leaf Rehab Center (NLRC) Islamabad is a rehabilitation
              and mental healthcare institution, established on 17 July
              2023 by Misbah Ullah and Dr. Shahzaib, to contribute to
              addiction rehabilitation and mental healthcare in the capital.
            </p>

            <p>
              We see recovery as a process that involves physical
              well-being, psychological support, behavioural change,
              family engagement and social reintegration, delivered
              in a respectful, structured and person-centred environment.
            </p>

            <div className="legal">
              <strong>Registered &amp; licensed:</strong>
              {' '}IHRA/Reg &amp; Lic /2024/IHRA-01624 · SECP Company No. 0254665
            </div>

            <Button to="/about" variant="dark">
              Read More About Us
            </Button>
          </Reveal>
        </div>
      </section>

      {/* 4. OUR WORK */}
      <section className="section section-dark">
        <div className="container">
          <SectionHead
            eyebrow="Our Work"
            title="Compassionate, personalized care built around you"
            light
          >
            <p>
              Our work is centred on respectful, individualized mental
              healthcare and rehabilitation that supports lasting recovery
              and well-being.
            </p>
          </SectionHead>

          <div className="work-grid">
            {workCards.map((c) => (
              <Reveal
                as="article"
                className="work-card"
                key={c.title}
              >
                <div className="ico">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OUR SERVICES */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Our Services"
            title="Comprehensive rehabilitation and mental healthcare"
          >
            <p>
              Whether you need short-term support or long-term recovery
              care, our team will guide you toward healing and well-being.
            </p>
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

          <div className="center-cta">
            <Button to="/services" variant="dark">
              View All Treatments
            </Button>
          </div>
        </div>
      </section>

      {/* 6. OUR DEPARTMENTS */}
      <section className="section section-tint">
        <div className="container">
          <SectionHead
            eyebrow="Our Departments"
            title="Expert teams working under one roof"
          />

          <div className="dept-grid">
            {departments.map((d) => (
              <DepartmentCard
                key={d.id}
                id={d.id}
                icon={d.icon}
                title={d.title}
                text={d.homeText}
              />
            ))}
          </div>

          <div className="center-cta">
            <Button to="/departments" variant="dark">
              All Departments
            </Button>
          </div>
        </div>
      </section>

      {/* 7. LOCATION MAP */}
      <section className="section section-tint">
        <div className="container">
          <SectionHead
            eyebrow="Find Us"
            title="Our Location on Map"
          />

          <LocationMap />
        </div>
      </section>
    </>
  );
}
