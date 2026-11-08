import { useEffect, useState } from 'react';
import { PHONE_INTL } from '../data/site';

/** Floating WhatsApp button + back-to-top button (shown after 600px of scrolling). */
export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <a href={'https://wa.me/' + PHONE_INTL} className="wa" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 32 32" width="28" height="28" fill="#fff">
          <path d="M16 3C9 3 3.3 8.6 3.3 15.5c0 2.4.7 4.7 1.9 6.6L3 29l7.100-2.100c1.800 1 3.800 1.500 5.900 1.500 7 0 12.700-5.600 12.700-12.500S23 3 16 3zm0 22.800c-1.900 0-3.700-.5-5.300-1.500l-.4-.2-4.200 1.200 1.200-4.100-.3-.4a10.200 10.200 0 0 1-1.600-5.400C5.400 9.800 10.100 5.200 16 5.200s10.600 4.600 10.600 10.300S21.800 25.800 16 25.800zm5.800-7.600c-.3-.2-1.900-.9-2.200-1-.3-.1-.5-.2-.7.200s-.8 1-1 1.200c-.2.200-.4.200-.7.100-1.900-.9-3.100-1.700-4.300-3.700-.3-.5.300-.5.900-1.600.1-.2.100-.4 0-.5l-1-2.300c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.100-.8.400-.3.300-1.100 1.100-1.100 2.600s1.100 3 1.300 3.200c.2.200 2.200 3.400 5.400 4.700 2 .8 2.800.9 3.800.7.600-.1 1.900-.8 2.200-1.500.3-.7.300-1.400.2-1.500-.1-.2-.3-.3-.7-.5z" />
        </svg>
      </a>
      <button
        className={'to-top' + (showTop ? ' show' : '')}
        id="toTop"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        &#8593;
      </button>
    </>
  );
}
