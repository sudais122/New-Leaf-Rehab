import { useEffect, useState } from 'react';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import PageHero from '../components/PageHero';
import usePageMeta from '../hooks/usePageMeta';
import { leaders, members } from '../data/team';

export default function Team() {
  usePageMeta(
    'Our Team | New Leaf Rehab Center Islamabad',
    'Meet the leadership, psychiatrists, clinical psychologists, medical officer and support team at New Leaf Rehab Center Islamabad.'
  );

  const [selected, setSelected] = useState(null); // member shown in the profile modal
  const closeModal = () => setSelected(null);

  // Escape closes the modal; page scroll is locked while it is open
  useEffect(() => {
    if (!selected) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setSelected(null);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [selected]);

  return (
    <>
      <PageHero
        title="Our Team"
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About Us', to: '/about' }, { label: 'Our Team' }]}
      />

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Leadership" title="The people leading New Leaf" />

          {leaders.map((l) => (
            <Reveal className="leader" key={l.name}>
              <img src={l.photo} alt={l.name} />
              <div>
                <h3>{l.name}</h3>
                <p className="role">{l.role}</p>
                {l.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {l.quote && <p><em>{l.quote}</em></p>}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <SectionHead eyebrow="Clinical & Support Team" title="Experienced, qualified and caring">
            <p>Click “View profile” to read more about each team member.</p>
          </SectionHead>
          <div className="team-grid">
            {members.map((m) => (
              <Reveal as="article" className="member" key={m.name}>
                <div className="ph"><img src={m.photo} alt={m.name} /></div>
                <div className="info">
                  <h3>{m.name}</h3>
                  <p className="role">{m.role}</p>
                  <p className="cred">{m.cred}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div
        className={'modal' + (selected ? ' open' : '')}
        id="modal"
        aria-hidden={selected ? 'false' : 'true'}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeModal();
        }}
      >
        <div className="modal-box" role="dialog" aria-modal="true" aria-labelledby="mName">
          <button className="modal-close" id="modalClose" aria-label="Close" onClick={closeModal}>&times;</button>
          <h3 id="mName">{selected?.name}</h3>
          <p className="role" id="mRole">{selected?.modalRole}</p>
          <p id="mBio">{selected?.bio}</p>
        </div>
      </div>
    </>
  );
}
