import { Link } from "react-router-dom";
import { PHONE, PHONE_TEL, EMAIL } from "../data/site";
import logo from "/Users/eapple/Downloads/New-Leaf-Rehab/src/assets/images/logo.jpg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* Brand Section */}
        <div className="footer-brand-section">
          <div className="brand">
            <img
              src={logo}
              alt="New Leaf Rehab Center Logo"
              className="brand-logo"
              style={{
                backgroundColor: "#fff",
                padding: "5px",
                borderRadius: "6px",
              }}
            />

            <span className="brand-text">
              <strong>New Leaf</strong>
              <small>Rehab Center &middot; Islamabad</small>
            </span>
          </div>

          <p>
            Promoting Recovery, Restoring Hope, Building a Healthier Future.
          </p>
        </div>
        {/* Quick Links */}
        <div>
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/team">Our Team</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        {/* Services */}
        <div>
          <h4>Our Services</h4>
          <Link to="/services#addiction">Addiction Rehabilitation</Link>
          <Link to="/services#psychological">Psychological Services</Link>
          <Link to="/services#psychiatric">Psychiatric &amp; Medical Care</Link>
          <Link to="/services#family">Family Support</Link>
          <Link to="/internship">Training &amp; Internship</Link>
        </div>

        {/* Contact Information */}
        <div>
          <h4>Contact Us</h4>

          <a href={`tel:${PHONE_TEL}`}>{PHONE}</a>

          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>

          <span className="ln">
            Street No. 6, Tarlai Kalan, Islamabad, Pakistan
          </span>

          <a
            href="https://www.thenlrc.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.thenlrc.com
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container footer-bottom">
        <span>
          {`© ${new Date().getFullYear()} New Leaf Rehab Center Islamabad · IHRA/Reg & Lic /2024/IHRA-01624`}
        </span>

        <span>
          Confidentiality and professional standards apply to all clinical
          activities.
        </span>
      </div>
    </footer>
  );
}
