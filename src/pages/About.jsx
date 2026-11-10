
import Reveal from "../components/Reveal";
import SectionHead from "../components/SectionHead";
import PageHero from "../components/PageHero";
import TickList from "../components/TickList";
import usePageMeta from "../hooks/usePageMeta";
import { office, misbahUllah } from "../assets/images";

const values = [
  {
    title: "Compassion",
    text: "Treating every individual with dignity, empathy and respect.",
  },
  {
    title: "Professionalism",
    text: "Responsible practice, appropriate supervision and continuing learning.",
  },
  {
    title: "Confidentiality",
    text: "Protecting personal and clinical information in line with ethical and legal requirements.",
  },
  {
    title: "Individualized Care",
    text: "Each person's needs, strengths and recovery goals are different.",
  },
  {
    title: "Accountability",
    text: "Transparency, safe practice and continuous improvement.",
  },
  {
    title: "Recovery & Reintegration",
    text: "Sustainable progress and constructive participation in family and community life.",
  },
];

const steps = [
  {
    title: "Initial contact & screening",
    text: "Understanding why you are seeking support, immediate concerns, and whether urgent referral is required.",
  },
  {
    title: "Clinical assessment",
    text: "Gathering history and assessing substance use, psychological, social and health-related needs.",
  },
  {
    title: "Individualized care plan",
    text: "Setting collaborative goals and discussing suitable interventions with you.",
  },
  {
    title: "Treatment & rehabilitation",
    text: "Counselling, psychoeducation, structured rehabilitation activities and clinical coordination.",
  },
  {
    title: "Family engagement",
    text: "Education and support for family members, with the client's consent.",
  },
  {
    title: "Relapse prevention & discharge planning",
    text: "Identifying triggers, building coping strategies and arranging ongoing support.",
  },
  {
    title: "Follow-up & continuing care",
    text: "Encouraging continuity of care and reviewing recovery goals after the programme.",
  },
];

const ethics = [
  "Respect for dignity, autonomy and individual differences",
  "Informed consent and clear communication about services",
  "Privacy and confidentiality, subject to legal and safety exceptions",
  "Non-discrimination and respectful treatment",
  "Appropriate professional boundaries and role clarity",
  "Referral to qualified professionals when a need falls outside a staff member's competence",
];

export default function About() {
  usePageMeta(
    "About Us | New Leaf Rehab Center Islamabad",
    "History, vision, mission, values, ethics and registration details of New Leaf Rehab Center Islamabad."
  );

  return (
    <>
      <PageHero
        title="About Us"
        crumbs={[{ label: "Home", to: "/" }, { label: "About Us" }]}
      />

      {/* OUR STORY */}
      <section className="section">
        <div className="container split">
          <Reveal>
            <span className="eyebrow">Our Story</span>
            <h2>History &amp; development</h2>
            <div className="rule"></div>

            <p>
              New Leaf Rehab Center was established on{" "}
              <strong>17 July 2023</strong>. The project was initiated by Misbah
              Ullah and Dr. Shahzaib with the aim of contributing to addiction
              rehabilitation and mental healthcare in Islamabad.
            </p>

            <p>
              Since its establishment, the centre's focus has included
              rehabilitation services, psychological support and opportunities
              for clinical learning. Services are delivered in a respectful,
              structured and person-centred environment, with care coordinated
              with qualified medical and psychiatric professionals where
              required.
            </p>

            <p>
              The institution also values professional education: through
              supervised clinical learning, it helps psychology students
              connect academic knowledge with responsible practice.
            </p>
          </Reveal>

          <Reveal className="pic">
            <img src={office} alt="Management office" loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* CEO PROFILE */}
      <section className="section ceo-section">
        <div className="container">
          <Reveal className="ceo-heading">
            <span className="eyebrow">Our Leadership</span>
            <h2>Meet Our Chief Executive Officer</h2>
            <div className="rule" />
            <p>
              Leadership committed to professional mental healthcare,
              compassionate support and sustainable recovery.
            </p>
          </Reveal>

          <div className="ceo-profile">
            <Reveal className="ceo-profile-card">
              <div className="ceo-avatar">
                <img
                  src={misbahUllah}
                  alt="Misbah Ullah - Chief Executive Officer"
                  loading="lazy"
                />
              </div>

              <div className="ceo-profile-caption">
                <h3>Misbah Ullah</h3>
                <span>Chief Executive Officer (CEO)</span>
                <small>New Leaf Rehab Centre Islamabad</small>
              </div>

              <div className="ceo-education">
                <strong>MS Clinical Psychology</strong>
                <span>International Islamic University Islamabad</span>
              </div>

              <div className="ceo-experience">
                <strong>Approximately 4 Years</strong>
                <span>Professional Experience in Psychology</span>
              </div>
            </Reveal>

            <Reveal className="ceo-biography">
              <span className="eyebrow">Professional Biography</span>
              <h2>Misbah Ullah</h2>
              <div className="rule" />

              <p>
                Misbah Ullah is the Chief Executive Officer of New Leaf Rehab
                Centre Islamabad (NLRC), a mental health and addiction
                rehabilitation organization committed to delivering
                professional, compassionate and patient-centred healthcare
                services.
              </p>

              <p>
                He holds an MS in Clinical Psychology from the International
                Islamic University Islamabad (IIUI) and brings approximately
                four years of experience in psychology. His professional
                interests include clinical psychology, psychopathology,
                psychological assessment, counselling, addiction psychology
                and rehabilitation.
              </p>

              <p>
                As Chief Executive Officer, he provides organizational
                leadership and strategic direction, focusing on the development
                of quality rehabilitation services, professional standards,
                institutional collaborations and sustainable mental healthcare
                initiatives.
              </p>

              <p>
                His work focuses on addressing substance use disorders and
                associated psychological challenges through a multidisciplinary
                approach involving psychological support, psychiatric care,
                family involvement, relapse prevention and long-term recovery.
              </p>
            </Reveal>
          </div>

          <div className="ceo-information-grid">
            <Reveal className="ceo-info-card">
              <span className="ceo-info-number">01</span>
              <h3>Professional Interests</h3>
              <ul>
                <li>Clinical Psychology and Psychopathology</li>
                <li>Psychological Assessment and Evaluation</li>
                <li>Psychological Counselling and CBT</li>
                <li>Addiction Psychology and Substance Use Disorders</li>
                <li>Mental Health Awareness and Psychoeducation</li>
                <li>Rehabilitation and Recovery Support</li>
                <li>Relapse Prevention and Family Support</li>
                <li>Clinical Education and Professional Training</li>
              </ul>
            </Reveal>

            <Reveal className="ceo-info-card">
              <span className="ceo-info-number">02</span>
              <h3>Leadership &amp; Institutional Development</h3>
              <p>
                Under his leadership, New Leaf Rehab Centre Islamabad
                continues to focus on strengthening mental health and
                addiction rehabilitation services.
              </p>
              <ul>
                <li>Promoting ethical and patient-centred rehabilitation practices.</li>
                <li>Supporting collaboration among healthcare professionals.</li>
                <li>Developing clinical internship and training opportunities.</li>
                <li>Organizing mental health awareness programmes and workshops.</li>
                <li>Building relationships with academic and healthcare institutions.</li>
                <li>Encouraging evidence-informed treatment approaches.</li>
              </ul>
            </Reveal>

            <Reveal className="ceo-info-card">
              <span className="ceo-info-number">03</span>
              <h3>Vision &amp; Philosophy</h3>
              <p>
                Misbah Ullah believes that recovery is more than the absence
                of illness or substance use. It is a comprehensive process of
                restoring psychological well-being, personal dignity, family
                relationships and social functioning.
              </p>
              <p>
                His vision is to contribute to a society where mental health
                receives the attention it deserves, addiction is approached as
                a treatable health condition rather than a social stigma, and
                every individual has access to appropriate professional care.
              </p>
              <div className="ceo-principles">
                <span>Professional Care</span>
                <span>Compassion</span>
                <span>Recovery</span>
              </div>
            </Reveal>
          </div>

          <Reveal className="ceo-affiliation">
            <div>
              <span className="eyebrow">Organizational Affiliation</span>
              <h3>New Leaf Rehab Centre Islamabad (NLRC)</h3>
              <p>
                An organization registered with the Islamabad Healthcare
                Regulatory Authority (IHRA) and incorporated under the
                Companies Act, 2017, Pakistan.
              </p>
            </div>

            <div className="ceo-registration-details">
              <div>
                <small>IHRA Registration</small>
                <strong>IHRA/Reg &amp; Lic/2024/IHRA-01624</strong>
              </div>
              <div>
                <small>Company Incorporation No.</small>
                <strong>0254665</strong>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VISION AND MISSION */}
      <section className="section section-tint">
        <div className="container">
          <SectionHead eyebrow="Vision & Mission" title="What we stand for" />

          <div className="vm">
            <Reveal className="vm-card">
              <h3>Our Vision</h3>
              <p>
                To build a healthy and caring society where people facing
                addiction and mental health problems can get the help and
                support they need, recover with dignity, and live a better
                life with hope and confidence.
              </p>
            </Reveal>

            <Reveal className="vm-card">
              <h3>Our Mission</h3>
              <p>
                To provide quality rehabilitation and mental health care in
                a safe, supportive and respectful environment, helping
                individuals overcome addiction and mental health challenges
                through proper treatment, counselling, family support and
                guidance, so they can return to a healthy and meaningful life.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="section section-dark">
        <div className="container">
          <SectionHead
            eyebrow="Core Values"
            title="What guides every part of our care"
            light
          />

          <div className="values-grid">
            {values.map((v, i) => (
              <Reveal as="article" className="value" key={v.title}>
                <span className="value-n">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RECOVERY PATHWAY */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Recovery Pathway"
            title="Seven steps, shaped around you"
          >
            <p>
              Treatment is individualized after assessment and reviewed as
              needs change.
            </p>
          </SectionHead>

          <ol className="steps">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.title}>
                <span>{i + 1}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ETHICS AND REGISTRATION */}
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
              <dt>Institution</dt>
              <dd>New Leaf Rehab Center Islamabad</dd>

              <dt>IHRA Registration</dt>
              <dd>IHRA/Reg &amp; Lic /2024/IHRA-01624</dd>

              <dt>Authority</dt>
              <dd>Islamabad Healthcare Regulatory Authority</dd>

              <dt>Company No. (SECP)</dt>
              <dd>0254665 · Companies Act, 2017 (XIX of 2017)</dd>

              <dt>Established</dt>
              <dd>17 July 2023</dd>

              <dt>Address</dt>
              <dd>Street No. 6, Tarlai Kalan, Islamabad</dd>
            </dl>
          </Reveal>
        </div>
      </section>
    </>
  );
}
