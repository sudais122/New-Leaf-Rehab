import Button from './Button';

export default function CtaBand({ title, text, buttonLabel, to = '/contact' }) {
  return (
    <section className="cta-band">
      <div className="container">
        <h2>{title}</h2>
        <p>{text}</p>
        <Button to={to}>{buttonLabel}</Button>
      </div>
    </section>
  );
}
