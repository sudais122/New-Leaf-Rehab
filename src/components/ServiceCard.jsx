import { Link } from 'react-router-dom';
import Reveal from './Reveal';

/** .card used on the home page (Our Services) and the Departments page. */
export default function ServiceCard({ id, icon, title, text, linkTo, linkLabel }) {
  return (
    <Reveal as="article" className="card" id={id}>
      <div className="ico-box">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
      <Link className="read-more" to={linkTo}>{linkLabel + ' \u2192'}</Link>
    </Reveal>
  );
}
