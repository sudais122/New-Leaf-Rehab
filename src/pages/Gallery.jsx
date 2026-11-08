import { useEffect, useState } from 'react';
import SectionHead from '../components/SectionHead';
import PageHero from '../components/PageHero';
import usePageMeta from '../hooks/usePageMeta';
import { galleryItems } from '../data/gallery';

export default function Gallery() {
  usePageMeta(
    'Gallery | New Leaf Rehab Center Islamabad',
    'Photos of the reception, consultation rooms, residential facilities and internship activities at New Leaf Rehab Center Islamabad.'
  );

  const [lightbox, setLightbox] = useState({
    open: false,
    src: '',
    alt: '',
  });

  const closeLightbox = () => {
    setLightbox((lb) => ({ ...lb, open: false }));
  };

  useEffect(() => {
    if (!lightbox.open) return undefined;

    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
    };

    document.addEventListener('keydown', onKey);

    return () => document.removeEventListener('keydown', onKey);
  }, [lightbox.open]);

  return (
    <>
      <PageHero
        title="Gallery"
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'About Us', to: '/about' },
          { label: 'Gallery' },
        ]}
      />

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Facilities"
            title="A safe and supportive environment"
          >
            <p>
              Our service model includes residential and non-residential
              options, accommodation support and separate residential
              arrangements for women. Explore our facilities and internship
              activities. Click any photo to enlarge.
            </p>
          </SectionHead>

          <div className="gal">
            {galleryItems.map((g, index) => (
              <figure
                key={`${g.caption}-${index}`}
                onClick={() =>
                  setLightbox({
                    open: true,
                    src: g.src,
                    alt: g.alt,
                  })
                }
              >
                <img src={g.src} alt={g.alt} loading="lazy" />
                <figcaption>{g.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <div
        className={`lightbox${lightbox.open ? ' open' : ''}`}
        id="lightbox"
        onClick={closeLightbox}
        role="presentation"
      >
        {lightbox.src && (
          <img
            src={lightbox.src}
            alt={lightbox.alt || 'Enlarged photo'}
            onClick={(e) => e.stopPropagation()}
          />
        )}
      </div>
    </>
  );
}