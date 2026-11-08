import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';
import { logo } from '../assets/images';
import { PHONE, PHONE_TEL, EMAIL } from '../data/site';

export default function Header() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // 'Home' is '/', everything else is matched without a trailing slash
  const current = pathname.replace(/\/+$/, '') || '/';
  const active = (paths) => (paths.includes(current) ? 'active' : undefined);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-left">
            <a href={'tel:' + PHONE_TEL}>{'\u260E ' + PHONE}</a>
            <a href={'mailto:' + EMAIL}>{'\u2709 ' + EMAIL}</a>
          </div>
          <div className="topbar-right">
            <span>Registered with IHRA &middot; Confidential &amp; Professional Care</span>
          </div>
        </div>
      </div>
      <header className={'header' + (scrolled ? ' scrolled' : '')} id="header">
        <div className="container header-inner">
          <Link to="/" className="brand" aria-label="New Leaf Rehab Center home" onClick={closeMenu}>
            <img className="brand-logo" src={logo} alt="New Leaf Rehab Center" />
          </Link>
          <nav className={'nav' + (menuOpen ? ' open' : '')} id="nav" aria-label="Main navigation">
            <Link to="/" className={active(['/'])} onClick={closeMenu}>Home</Link>
            <div className="dd">
              <Link to="/about" className={active(['/about', '/team', '/gallery'])} onClick={closeMenu}>
                About Us <span className="caret">&#9660;</span>
              </Link>
              <div className="dd-menu">
                <Link to="/about" onClick={closeMenu}>Who We Are</Link>
                <Link to="/team" onClick={closeMenu}>Our Team</Link>
                <Link to="/gallery" onClick={closeMenu}>Gallery</Link>
              </div>
            </div>
            <Link to="/services" className={active(['/services'])} onClick={closeMenu}>Treatments</Link>
            <Link to="/departments" className={active(['/departments'])} onClick={closeMenu}>Our Departments</Link>
            <Link to="/internship" className={active(['/internship'])} onClick={closeMenu}>Internship</Link>
            <Link to="/contact" className={active(['/contact'])} onClick={closeMenu}>Contact Us</Link>
            <Button to="/contact" className="nav-cta" onClick={closeMenu}>Book an Appointment</Button>
          </nav>
          <button
            className={'menu-toggle' + (menuOpen ? ' open' : '')}
            id="menuToggle"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>
    </>
  );
}
