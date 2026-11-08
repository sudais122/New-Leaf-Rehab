import { Link } from 'react-router-dom';
import Reveal from './Reveal';

/** .dept preview card on the home page. */
export default function DepartmentCard({ id, icon, title, text }) {
  return (
    <Reveal as="article" className="dept">
      <div className="dept-top">{icon}</div>
      <div className="dept-body">
        <h3>{title}</h3>
        <p>{text}</p>
        <Link className="read-more" to={'/departments#' + id}>Read More &rarr;</Link>
      </div>
    </Reveal>
  );
}
