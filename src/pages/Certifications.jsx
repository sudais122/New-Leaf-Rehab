import React from 'react';
import '../styles/Certifications.css'

export default function Certifications() {
  const certificates = [
    {
      title: 'Registration Certificate',
      image: 'src/assets/images/Incorporation-Letter.jpg',
    },
    {
      title: 'Licence Certificate',
      image: 'src/assets/images/IHRA.jpeg',
    }
  ];

  return (
    <section className="certifications-page">
      <div className="certifications-header">
        <span>OUR CREDENTIALS</span>
        <h1>Licences & Certifications</h1>
        <p>
          Our licences and certifications demonstrate our commitment
          to professional standards, quality care, and trust.
        </p>
      </div>

      <div className="certificates-grid">
        {certificates.map((certificate, index) => (
          <div className="certificate-card" key={index}>
            <div className="certificate-image">
              <img
                src={certificate.image}
                alt={certificate.title}
              />
            </div>

            <h3>{certificate.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}