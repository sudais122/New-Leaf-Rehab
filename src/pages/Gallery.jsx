import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import PageHero from '../components/PageHero';
import usePageMeta from '../hooks/usePageMeta';
import { galleryItems } from '../data/gallery';

export default function Gallery() {
  usePageMeta(
    'Gallery | New Leaf Rehab Center Islamabad',
    'Photos of the reception, consultation rooms and residential rooms at New Leaf Rehab Center Islamabad.'
  );

  const [lightbox, setLightbox] = useState({ open: false, src: '' });
  const closeLightbox = () => setLightbox((lb) => ({ ...lb, open: false }));

  useEffect(() => {
    if (!lightbox.open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox((lb) => ({ ...lb, open: false }));
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [lightbox.open]);

  return (
    <>
      <PageHero
        title="Gallery"
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About Us', to: '/about' }, { label: 'Gallery' }]}
      />

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Facilities" title="A safe and supportive environment">
            <p>Our service model includes residential and non-residential options, accommodation support and separate residential arrangements for women. Click any photo to enlarge.</p>
          </SectionHead>
          <div className="gal">
            {galleryItems.map((g) => (
              <figure key={g.caption} onClick={() => setLightbox({ open: true, src: g.src })}>
                <img src={g.src} alt={g.alt} />
                <figcaption>{g.caption}</figcaption>
              </figure>
            ))}
          </div>
          <p className="note" style={{ marginTop: '30px', textAlign: 'center' }}>
            Exact facilities, capacity and programme availability are best confirmed during a site visit. <Link className="read-more" to="/contact">Arrange a visit &rarr;</Link>
          </p>
        </div>
      </section>

      <div className={'lightbox' + (lightbox.open ? ' open' : '')} id="lightbox" onClick={closeLightbox}>
        {lightbox.src && <img src={lightbox.src} alt="Enlarged photo" />}
      </div>
    </>
  );
}
