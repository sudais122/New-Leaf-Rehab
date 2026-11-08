import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const SEPARATOR = ' \u00A0/\u00A0 '; // space, nbsp, slash, nbsp, space

/** Inner-page banner. `crumbs` = [{ label, to? }]; the last item is plain text. */
export default function PageHero({ title, crumbs }) {
  return (
    <section className="page-hero">
      <div className="container">
        <h1>{title}</h1>
        <div className="crumbs">
          {crumbs.map((c, i) =>
            c.to ? (
              <Fragment key={c.label}>
                {i > 0 && SEPARATOR}
                <Link to={c.to}>{c.label}</Link>
              </Fragment>
            ) : (
              <Fragment key={c.label}>{(i > 0 ? SEPARATOR : '') + c.label}</Fragment>
            )
          )}
        </div>
      </div>
    </section>
  );
}
