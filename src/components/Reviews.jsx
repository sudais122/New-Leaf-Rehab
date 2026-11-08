import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { REVIEWS, GOOGLE_REVIEW_URL } from '../data/reviews';

const STARS = '\u2605\u2605\u2605\u2605\u2605';

/** Testimonials: invitation card while REVIEWS is empty, otherwise the auto-playing slider. */
export default function Reviews() {
  const total = REVIEWS.length;
  const [idx, setIdx] = useState(0);
  const [resetKey, setResetKey] = useState(0); // bumping this restarts the 6s auto-advance timer

  useEffect(() => {
    if (!total) return undefined;
    const timer = setInterval(() => setIdx((i) => (i + 1) % total), 6000);
    return () => clearInterval(timer);
  }, [total, resetKey]);

  if (!total) {
    return (
      <div className="rv-empty">
        <div className="stars">{STARS}</div>
        <h3>Your voice matters</h3>
        <p>If New Leaf Rehab Center has supported you, your family or your studies, we would be grateful to hear about your experience.</p>
        {GOOGLE_REVIEW_URL ? (
          <a className="btn btn-primary" href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener">Leave a Google Review</a>
        ) : (
          <Link className="btn btn-primary" to="/contact">Share Your Feedback</Link>
        )}
      </div>
    );
  }

  const go = (n) => {
    setIdx((n + total) % total);
    setResetKey((k) => k + 1);
  };

  return (
    <div className="rv-wrap">
      <div className="rv-track">
        <div className="rv-slides" id="rvSlides" style={{ transform: 'translateX(-' + idx * 100 + '%)' }}>
          {REVIEWS.map((r, i) => (
            <div className="rv" key={i}>
              <div className="rv-card">
                <div className="stars">{STARS}</div>
                <p>{r.text}</p>
                <div className="rv-who">
                  <div className="rv-av">{(r.name || '?').charAt(0)}</div>
                  <div>
                    <strong>{r.name}</strong>
                    <small>{r.who || ''}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="rv-nav">
        <button id="rvPrev" aria-label="Previous review" onClick={() => go(idx - 1)}>&#8592;</button>
        <div className="rv-dots" id="rvDots">
          {REVIEWS.map((_, i) => (
            <i key={i} className={i === idx ? 'on' : undefined} onClick={() => go(i)}></i>
          ))}
        </div>
        <button id="rvNext" aria-label="Next review" onClick={() => go(idx + 1)}>&#8594;</button>
      </div>
    </div>
  );
}
