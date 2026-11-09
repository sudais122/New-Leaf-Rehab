
import Reveal from '../components/Reveal';
import PageHero from '../components/PageHero';
import SectionHead from '../components/SectionHead';
import LocationMap from '../components/LocationMap';
import Button from '../components/Button';
import usePageMeta from '../hooks/usePageMeta';
import { PHONE_INTL, EMAIL } from '../data/site';

const contactDetails = [
  {
    title: 'Call Us',
    description: 'Speak directly with our team.',
    icon: 'phone',
    links: [
      { label: '0308-9441043', href: 'tel:03089441043' },
    ]
  },
  {
    title: 'Email Us',
    description: 'Send us your questions or enquiries.',
    icon: 'email',
    links: [
      { label: EMAIL, href: `mailto:${EMAIL}` }
    ]
  },
  {
    title: 'Visit Our Center',
    description: 'We welcome you to connect with our team.',
    icon: 'location',
    address: 'Street No. 6, Tarlai Kalan, Islamabad, Pakistan'
  },
  {
    title: 'Visit Our Website',
    description: 'Learn more about our services and care.',
    icon: 'web',
    links: [
      { label: 'www.thenlrc.com', href: 'https://www.thenlrc.com' }
    ]
  }
];

function ContactIcon({ type }) {
  const common = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true
  };

  switch (type) {
    case 'phone':
      return (
        <svg {...common}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7a2 2 0 0 1 1.73 2.03z" />
        </svg>
      );

    case 'email':
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );

    case 'location':
      return (
        <svg {...common}>
          <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );

    case 'web':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
        </svg>
      );

    default:
      return null;
  }
}

export default function Contact() {
  usePageMeta(
    'Contact Us | New Leaf Rehab Center Islamabad',
    'Contact New Leaf Rehab Center Islamabad for addiction rehabilitation, psychiatric consultation, psychological services and appointment enquiries.'
  );

  return (
    <>
      <PageHero
        title="Contact Us"
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Contact Us' }
        ]}
      />

      {/* CONTACT INTRODUCTION */}
      <section className="section contact-intro">
        <div className="container">
          <div className="contact-heading">
            <Reveal>
              <span className="eyebrow">We're Here to Help</span>
              <h2>Let's take the first step together.</h2>
              <div className="rule"></div>
              <p>
                Reaching out for support can be an important first step
                towards recovery. Our team is here to help individuals
                and families learn about our rehabilitation and mental
                healthcare services.
              </p>
            </Reveal>
          </div>

          {/* CONTACT INFORMATION CARDS */}
          <div className="contact-cards">
            {contactDetails.map((item) => (
              <Reveal
                as="article"
                className="contact-info-card"
                key={item.title}
              >
                <div className="contact-card-icon">
                  <ContactIcon type={item.icon} />
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>

                {item.links && (
                  <div className="contact-card-links">
                    {item.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target={link.href.startsWith('https://') ? '_blank' : undefined}
                        rel={link.href.startsWith('https://') ? 'noopener noreferrer' : undefined}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}

                {item.address && (
                  <address>{item.address}</address>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CALL TO ACTION */}
      <section className="section contact-cta-section">
        <div className="container">
          <Reveal className="contact-cta">
            <div className="contact-cta-content">
              <span className="eyebrow">Get in Touch</span>
              <h2>Need guidance or want to book a consultation?</h2>
              <p>
                Connect with New Leaf Rehab Center for information about
                treatment, psychological support, rehabilitation and
                family guidance. Our team is ready to assist you.
              </p>

              <div className="contact-cta-actions">
                <Button to="/appointment">
                  Book an Appointment
                </Button>

                <a
                  className="contact-whatsapp-btn"
                  href={`https://wa.me/${PHONE_INTL}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.5 0 .14 5.35.14 11.94c0 2.1.55 4.16 1.6 5.98L0 24l6.25-1.64a11.9 11.9 0 0 0 5.83 1.48h.01c6.58 0 11.94-5.36 11.94-11.94a11.86 11.86 0 0 0-3.51-8.42ZM12.09 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.71.97.99-3.62-.24-.37a9.87 9.87 0 0 1-1.52-5.25c0-5.46 4.45-9.9 9.91-9.9a9.83 9.83 0 0 1 7.01 2.9 9.84 9.84 0 0 1 2.9 7.02c0 5.46-4.45 9.9-9.93 9.9Zm5.43-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.47-2.4-1.49-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.48.71.31 1.27.5 1.7.64.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div className="contact-cta-decoration">
              <div className="contact-cta-circle">
                <ContactIcon type="phone" />
              </div>
              <span>Compassionate Care</span>
              <strong>Every Step Matters.</strong>
            </div>
          </Reveal>
        </div>
      </section>

      {/* LOCATION MAP */}
      <section className="section section-tint">
        <div className="container">
          <SectionHead
            eyebrow="Find Us"
            title="Visit New Leaf Rehab Center"
          >
            <p>
              Find us at Street No. 6, Tarlai Kalan, Islamabad, Pakistan.
            </p>
          </SectionHead>

          <LocationMap />
        </div>
      </section>
    </>
  );
}
