import SectionHead from '../components/SectionHead';
import PageHero from '../components/PageHero';
import ServiceCard from '../components/ServiceCard';
import CtaBand from '../components/CtaBand';
import usePageMeta from '../hooks/usePageMeta';
import { departments } from '../data/departments';

export default function Departments() {
  usePageMeta(
    'Our Departments | New Leaf Rehab Center Islamabad',
    'Departments at New Leaf Rehab Center Islamabad: addiction rehabilitation, psychological services, psychiatric care, medical care, family support, spiritual care, internship and research.'
  );

  return (
    <>
      <PageHero title="Our Departments" crumbs={[{ label: 'Home', to: '/' }, { label: 'Our Departments' }]} />

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Under One Roof" title="Specialized teams, one coordinated approach">
            <p>Each department works with the others so that care addresses the whole person: mind, body, family and community.</p>
          </SectionHead>

          <div className="cards">
            {departments.map((d) => (
              <ServiceCard
                key={d.id}
                id={d.id}
                icon={d.icon}
                title={d.title}
                text={d.text}
                linkTo={d.related.to}
                linkLabel={d.related.label}
              />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Talk to the right team"
        text="Contact us and we will connect you with the department that best fits your needs."
        buttonLabel="Contact Us"
      />
    </>
  );
}
