
import { useEffect, useState } from 'react';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import PageHero from '../components/PageHero';
import usePageMeta from '../hooks/usePageMeta';
import { leaders, members } from '../data/team';
import iqraBibi from '../assets/images/iqra-bibi.jpeg';

const iqraProfile = {
  name: 'Iqra Bibi',
  photo: iqraBibi,
  role: 'Mental Health Professional',
  cred: 'BS Psychology · University of Malakand',
  modalRole: 'Clinical Psychology Graduate · Mental Health Professional',
  bio: 'A Clinical Psychology Graduate from the University of Malakand (2021–2025) with practical internship experience in rehabilitation and mental health settings. Her clinical exposure includes psychological assessment, client intake interviews, case history taking, progress documentation and supervised therapeutic interventions. She has gained experience working with individuals experiencing substance use, behavioural and emotional disorders. Her training includes CBT techniques, mindfulness, relaxation therapy, emotional support, client observation and treatment-planning support. She has also participated in mental health awareness and community screening activities. Committed to ethical practice, confidentiality, compassionate care and continued professional development.',
};

export default function Team() {
  usePageMeta(
    'Our Team | New Leaf Rehab Center Islamabad',
    'Meet the leadership, psychiatrists, clinical psychologists, medical officer and support team at New Leaf Rehab Center Islamabad.'
  );

  const [selected, setSelected] = useState(null);

  // Add Iqra Bibi directly to the existing team members
  const allMembers = [...members, iqraProfile];

  const closeModal = () => setSelected(null);

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
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'About Us', to: '/about' },
          { label: 'Our Team' },
        ]}
      />

      {/* Leadership */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Leadership"
            title="The people leading New Leaf"
          />

          {leaders.map((l) => (
            <Reveal className="leader" key={l.name}>
              <img src={l.photo} alt={l.name} />

              <div>
                <h3>{l.name}</h3>
                <p className="role">{l.role}</p>

                {l.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}

                {l.quote && (
                  <p>
                    <em>{l.quote}</em>
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Clinical and Support Team */}
      <section className="section section-tint">
        <div className="container">
          <SectionHead
            eyebrow="Clinical & Support Team"
            title="Experienced, qualified and caring"
          >
            <p>
              Meet our dedicated clinical and support professionals.
              Select View Profile to learn more about each team member.
            </p>
          </SectionHead>

          <div className="team-grid">
            {allMembers.map((m) => (
              <Reveal
                as="article"
                className="member"
                key={m.name}
              >
                <div className="ph">
                  <img src={m.photo} alt={m.name} loading="lazy" />
                </div>

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

      {/* Profile Modal */}
      <div
        className={'modal' + (selected ? ' open' : '')}
        id="modal"
        aria-hidden={selected ? 'false' : 'true'}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeModal();
        }}
      >
        {selected && (
          <div
            className="modal-box"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mName"
          >
            <button
              className="modal-close"
              id="modalClose"
              aria-label="Close"
              onClick={closeModal}
              type="button"
            >
              &times;
            </button>

            <h3 id="mName">{selected.name}</h3>
            <p className="role" id="mRole">
              {selected.modalRole}
            </p>
            <p id="mBio">{selected.bio}</p>
          </div>
        )}
      </div>
    </>
  );
}
