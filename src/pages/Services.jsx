import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import PageHero from '../components/PageHero';
import TickList from '../components/TickList';
import CtaBand from '../components/CtaBand';
import usePageMeta from '../hooks/usePageMeta';
import { serviceDetails } from '../data/services';

export default function Services() {
  usePageMeta(
    'Treatments & Services | New Leaf Rehab Center Islamabad',
    'Addiction rehabilitation, psychological services, psychiatric care, medical care, family support and spiritual care at New Leaf Rehab Center Islamabad.'
  );

  return (
    <>
      <PageHero title="Treatments & Services" crumbs={[{ label: 'Home', to: '/' }, { label: 'Treatments' }]} />

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="What We Offer" title="Care organized around your recovery">
            <p>Our services centre on substance use recovery, psychological support, psychiatric care coordination and family involvement. The exact scope of each service should be confirmed with the centre.</p>
          </SectionHead>

          {serviceDetails.map((s) => (
            <Reveal className="svc-detail" id={s.id} key={s.id}>
              <div className="svc-side"><div className="big">{s.icon}</div><h3>{s.title}</h3></div>
              <div>
                <p>{s.intro}</p>
                <TickList items={s.items} />
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
