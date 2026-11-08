import { useEffect, useRef, useState } from 'react';

export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const all = document.querySelectorAll('.reveal');
    el.style.transitionDelay = (Array.prototype.indexOf.call(all, el) % 4) * 70 + 'ms';

    if (!('IntersectionObserver' in window)) {
      setShown(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((en) => en.isIntersecting)) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const classes = (className ? className + ' ' : '') + 'reveal' + (shown ? ' in' : '');
  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  );
}
