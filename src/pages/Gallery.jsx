import { useEffect, useState } from 'react';
import SectionHead from '../components/SectionHead';
import PageHero from '../components/PageHero';
import usePageMeta from '../hooks/usePageMeta';
import { galleryItems } from '../data/gallery';

import intern11 from '../assets/images/Interns11';
import intern12 from 'src/assets/images/Interns12.jpeg';
import intern13 from 'src/assets/images/Interns13.jpeg';
import intern14 from 'src/assets/images/Interns14.jpeg';
import intern15 from 'src/assets/images/Interns15.jpeg';

const internshipImages = [
  {
    src: intern11,
    alt: 'Internship training',
    caption: 'Internship Training',
  },
  {
    src: intern12,
    alt: 'Clinical psychology learning',
    caption: 'Clinical Psychology Learning',
  },
  {
    src: intern13,
    alt: 'Student learning activities',
    caption: 'Student Learning Activities',
  },
  {
    src: intern14,
    alt: 'Professional training session',
    caption: 'Professional Training',
  },
  {
    src: intern15,
    alt: 'Psychology internship programme',
    caption: 'Psychology Internship Programme',
  },
];

export default function Gallery() {
  usePageMeta(
    'Gallery | New Leaf Rehab Center Islamabad',
    'Photos of the reception, consultation rooms, residential facilities and internship activities at New Leaf Rehab Center Islamabad.'
  );

  const allGalleryItems = [...galleryItems, ...internshipImages];

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
            {allGalleryItems.map((g, index) => (
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