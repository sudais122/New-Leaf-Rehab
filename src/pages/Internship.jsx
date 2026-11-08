
import Reveal from '../components/Reveal';
import Button from '../components/Button';
import PageHero from '../components/PageHero';
import TickList from '../components/TickList';
import usePageMeta from '../hooks/usePageMeta';

const objectives = [
  'Understand substance use disorders and recovery-oriented care',
  'Strengthen communication, rapport-building and reflective practice',
  'Observe clinical assessment and mental status examination processes',
  'Learn case history taking, case formulation and clinical documentation',
  'Become familiar with counselling approaches and CBT-informed techniques',
  'Learn about group psychoeducation, family support and relapse prevention',
  'Understand confidentiality, informed consent, boundaries and ethics',
];

const activities = [
  'Orientation to the centre, policies and client confidentiality',
  'Supervised observation of approved clinical or psychoeducational activities',
  'Case discussions using de-identified information',
  'Demonstrations of rapport building and basic interviewing skills',
  'Reflective assignments, presentations and supervisor feedback',
];

const collaboration = [
  'Supervised internship and clinical placement arrangements',
  'Guest lectures, workshops and mental health awareness sessions',
  'Case-based learning using anonymized material',
  'Research collaboration subject to ethics approval and permissions',
  'Professional development and continuing education',
  'Joint community outreach and addiction-awareness initiatives',
];

export default function Internship() {
  usePageMeta(
    'Clinical Psychology Internship | New Leaf Rehab Center Islamabad',
    'Supervised clinical psychology internships and university collaboration at New Leaf Rehab Center Islamabad.'
  );

  return (
    <>
      <PageHero
        title="Clinical Psychology Internship"
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Internship' },
        ]}
      />

      {/* INTRODUCTION AND LEARNING OBJECTIVES */}
      <section className="section">
        <div className="container split">
          <Reveal>
            <span className="eyebrow">Clinical Learning</span>
            <h2>Connecting classroom learning with responsible practice</h2>
            <div className="rule" />

            <p>
              We welcome enquiries from academic institutions seeking
              supervised clinical learning for students of BS Psychology,
              MS Psychology, MS Clinical Psychology and related disciplines.
            </p>

            <h3 style={{ margin: '22px 0 8px' }}>
              Learning objectives
            </h3>

            <TickList items={objectives} />
          </Reveal>

          <Reveal>
            {/* INTERNSHIP IMAGE */}
            <div className="internship-image">
              <img
                src="src/assets/images/intern-15.jpeg"
                alt="Clinical psychology students participating in supervised internship learning"
              />
            </div>

            <div className="collab">
              <h3>Possible supervised activities</h3>
              <ul>
                {activities.map((activity) => (
                  <li key={activity}>{activity}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PLACEMENT SAFEGUARDS */}
      <section className="section section-tint">
        <div className="container split">
          <Reveal>
            <span className="eyebrow">Placement Safeguards</span>
            <h2>Interns are learners, not substitute clinicians</h2>
            <div className="rule" />

            <p>
              Interns must not diagnose, prescribe, provide unsupervised
              therapy or access identifiable client records without
              authorization. Any observation or participation involving
              clients follows the centre's approval process, client consent
              requirements and supervisor direction. Confidentiality
              obligations continue after the placement ends.
            </p>

            <div className="legal">
              <strong>Certification:</strong> An internship completion
              certificate may be issued to students who meet the approved
              attendance, conduct, learning and assessment requirements.
              Duration, schedule, capacity, fees (if any) and assessment
              criteria are confirmed in writing for each cohort.
            </div>

            <Button to="/appointment">
              Enquire About Internships
            </Button>
          </Reveal>

          <Reveal as="aside" className="collab" id="collaboration">
            <h3>University collaboration</h3>
            <ul>
              {collaboration.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
