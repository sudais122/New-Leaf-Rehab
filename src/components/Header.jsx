import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import { logo } from "../assets/images";
import { PHONE, PHONE_TEL, EMAIL } from "../data/site";

// Must match the hamburger breakpoint in the CSS (max-width: 1024px)
const MOBILE_BREAKPOINT = 1024;

export default function Header() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [ddOpen, setDdOpen] = useState(false);

  // Normalize the current route
  const current = pathname.replace(/\/+$/, "") || "/";
  const active = (paths) => (paths.includes(current) ? "active" : undefined);

  const closeMenu = () => {
    setMenuOpen(false);
    setDdOpen(false);
  };

  // Close everything whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
    setDdOpen(false);
  }, [pathname]);

  // Shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape closes the menu
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setDdOpen(false);
      }
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Reset the mobile menu when resizing up to desktop width
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > MOBILE_BREAKPOINT) {
        setMenuOpen(false);
        setDdOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    const value = menuOpen ? "hidden" : "";
    document.documentElement.style.overflow = value;
    document.body.style.overflow = value;
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* Top Bar */}
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-left">
            <a href={"tel:" + PHONE_TEL}>{"\u260E " + PHONE}</a>

            <a href={"mailto:" + EMAIL}>{"\u2709 " + EMAIL}</a>
          </div>

          <div className="topbar-right social-links">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/19iJ2j3fnJ/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.6V3.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2v2.3H7.5V13h2.7v8h3.3z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/new_leafrehabilitationcentre?obrf=NWJyN3FldWoxNTd0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>

            {/* TikTok — replace YOUR_TIKTOK_PROFILE_URL with the real profile link */}
            <a
              href="YOUR_TIKTOK_PROFILE_URL"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.6 7.2a5.8 5.8 0 0 1-3.5-1.2v8.2a6.2 6.2 0 1 1-6.2-6.2c.4 0 .8 0 1.2.1v3.4a2.8 2.8 0 1 0 1.6 2.5V2h3.4c.2 2 1.6 3.6 3.5 4v1.2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={"header" + (scrolled ? " scrolled" : "")} id="header">
        <div className="container header-inner">
          {/* Logo */}
          <Link
            to="/"
            className="brand"
            aria-label="New Leaf Rehab Center home"
            onClick={closeMenu}
          >
            <img className="brand-logo" src={logo} alt="New Leaf Rehab Center" />
          </Link>

          {/* Navigation */}
          <nav
            className={"nav" + (menuOpen ? " open" : "")}
            id="nav"
            aria-label="Main navigation"
          >
            <Link to="/" className={active(["/"])} onClick={closeMenu}>
              Home
            </Link>

            {/* About Us Dropdown */}
            <div className={"dd" + (ddOpen ? " open" : "")}>
              <Link
                to="/about"
                className={active([
                  "/about",
                  "/team",
                  "/gallery",
                  "/certifications",
                ])}
                onClick={closeMenu}
              >
                About Us <span className="caret">&#9660;</span>
              </Link>

              {/* Mobile-only submenu toggle (hidden on desktop via CSS) */}
              <button
                type="button"
                className="dd-toggle"
                aria-label="Toggle About Us submenu"
                aria-expanded={ddOpen}
                onClick={() => setDdOpen((open) => !open)}
              >
                <span className="caret">&#9660;</span>
              </button>

              <div className="dd-menu">
                <Link to="/about" onClick={closeMenu}>
                  Who We Are
                </Link>

                <Link to="/team" onClick={closeMenu}>
                  Our Team
                </Link>

                <Link to="/gallery" onClick={closeMenu}>
                  Gallery
                </Link>

                <Link to="/certifications" onClick={closeMenu}>
                  Licences &amp; Certifications
                </Link>
              </div>
            </div>

            <Link
              to="/services"
              className={active(["/services"])}
              onClick={closeMenu}
            >
              Treatments
            </Link>

            <Link
              to="/departments"
              className={active(["/departments"])}
              onClick={closeMenu}
            >
              Our Departments
            </Link>

            <Link
              to="/internship"
              className={active(["/internship"])}
              onClick={closeMenu}
            >
              Internship
            </Link>

            <Link
              to="/contact"
              className={active(["/contact"])}
              onClick={closeMenu}
            >
              Contact Us
            </Link>

            <Button to="/appointment" className="nav-cta" onClick={closeMenu}>
              Book an Appointment
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={"menu-toggle" + (menuOpen ? " open" : "")}
            id="menuToggle"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
    </>
  );
}