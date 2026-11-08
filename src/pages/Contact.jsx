import { useState } from 'react';
import Reveal from '../components/Reveal';
import PageHero from '../components/PageHero';
import SectionHead from '../components/SectionHead';
import LocationMap from '../components/LocationMap';
import Button from '../components/Button';
import usePageMeta from '../hooks/usePageMeta';
import { PHONE_INTL, EMAIL } from '../data/site';

const ENQUIRY_TYPES = [
  'Addiction rehabilitation',
  'Psychiatric consultation',
  'Psychological services / counselling',
  'Family support',
  'Internship / university partnership',
  'Other',
];

const EMPTY_FORM = { name: '', phone: '', type: ENQUIRY_TYPES[0], msg: '' };

export default function Contact() {
  usePageMeta(
    'Contact Us | New Leaf Rehab Center Islamabad',
    'Contact New Leaf Rehab Center Islamabad: phone, email, address and appointment enquiry form.'
  );

  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({ name: false, phone: false });
  const [message, setMessage] = useState('');

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  // Validates name + phone, then opens WhatsApp with the enquiry pre-filled (same as the original script)
  const handleSubmit = (e) => {
    e.preventDefault();
    const bad = { name: !form.name.trim(), phone: !form.phone.trim() };
    setErrors(bad);
    if (bad.name || bad.phone) {
      setMessage('Please enter your name and phone number.');
      return;
    }
    setMessage('');
    const text =
      'Hello New Leaf Rehab Center,\n' +
      'Name: ' + form.name.trim() + '\n' +
      'Phone: ' + form.phone.trim() + '\n' +
      'Enquiry: ' + form.type + '\n' +
      (form.msg.trim() ? 'Message: ' + form.msg.trim() : '');
    window.open('https://wa.me/' + PHONE_INTL + '?text=' + encodeURIComponent(text), '_blank', 'noopener');
    setForm(EMPTY_FORM);
  };

  return (
    <>
      <PageHero title="Contact Us" crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact Us' }]} />

      <section className="section">
        <div className="container contact-grid">
          <Reveal>
            <span className="eyebrow">Get in Touch</span>
            <h2>Take the first step. We're here to help.</h2>
            <div className="rule"></div>
            <p>Reach out for a confidential conversation about treatment, family support, or internship and university partnerships.</p>
            <ul className="contact-list">
              <li><span>&#9742;</span><div><strong>Phone</strong><a href="tel:03451939246">0345-1939246</a> · <a href="tel:03089441043">0308-9441043</a> · <a href="tel:03116198469">0311-6198469</a></div></li>
              <li><span>&#9993;</span><div><strong>Email</strong><a href={'mailto:' + EMAIL}>{EMAIL}</a></div></li>
              <li><span>&#9906;</span><div><strong>Address</strong>Street No. 6, Tarlai Kalan, Islamabad, Pakistan</div></li>
              <li><span>&#9741;</span><div><strong>Website</strong><a href="https://www.thenlrc.com">www.thenlrc.com</a></div></li>
            </ul>
          </Reveal>

          <Reveal as="form" className="form" id="contactForm" noValidate onSubmit={handleSubmit}>
            <h3>Book an Appointment / Send an Enquiry</h3>
            <div className={'field' + (errors.name ? ' err' : '')}>
              <label htmlFor="name">Full name</label>
              <input id="name" name="name" type="text" required placeholder="Your name" value={form.name} onChange={update} />
            </div>
            <div className={'field' + (errors.phone ? ' err' : '')}>
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" type="tel" required placeholder="03XX-XXXXXXX" value={form.phone} onChange={update} />
            </div>
            <div className="field">
              <label htmlFor="type">I'm enquiring about</label>
              <select id="type" name="type" value={form.type} onChange={update}>
                {ENQUIRY_TYPES.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="msg">Message</label>
              <textarea id="msg" name="msg" rows={4} placeholder="How can we help? (Please avoid sharing detailed medical information here.)" value={form.msg} onChange={update}></textarea>
            </div>
            <Button type="submit" className="full">Send via WhatsApp</Button>
            <p className="form-msg" id="formMsg" role="status">{message}</p>
          </Reveal>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <SectionHead eyebrow="Find Us" title="Our Location on Map" />
          <LocationMap />
        </div>
      </section>
    </>
  );
}
