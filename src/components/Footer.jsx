import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG, NAV_LINKS, SOCIAL, CALL_NUMBERS } from '../config';
import './Footer.css';

export default function Footer() {
  const whatsappLink = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hi%20Matoshri%20Tours%20%26%20Travels%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.`;
  const [callOpen, setCallOpen] = useState(false);
  const [instagramOpen, setInstagramOpen] = useState(false);
  const callRef = useRef(null);
  const igRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (callRef.current && !callRef.current.contains(e.target)) {
        setCallOpen(false);
      }
      if (igRef.current && !igRef.current.contains(e.target)) {
        setInstagramOpen(false);
      }
    }
    if (callOpen || instagramOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [callOpen, instagramOpen]);

  useEffect(() => {
    function handleEscape(e) {
      if (e.key === 'Escape') {
        setCallOpen(false);
        setInstagramOpen(false);
      }
    }
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <img src="/images/matoshri-logo.png" alt="Matoshri Tours & Travels" className="footer__logo-image" />
            </div>
            <p className="footer__description">
              Your trusted partner for premium Force Urbania rentals and travel services in Pune and across Maharashtra.
            </p>
            <div className="footer__social">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="footer__social-btn footer__social-btn--whatsapp" aria-label="WhatsApp">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.82 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <div className="footer__social-call" ref={callRef}>
                <button
                  className="footer__social-btn footer__social-btn--call"
                  aria-label="Call Matoshri Travels"
                  aria-expanded={callOpen}
                  onClick={() => {
                    setCallOpen((v) => !v);
                    setInstagramOpen(false);
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </button>
                {callOpen && (
                  <div className="footer__call-popup" role="dialog" aria-label="Select a phone number">
                    {CALL_NUMBERS.map((item) => (
                      <a key={item.tel} href={item.tel} className="footer__call-popup-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        <span>{item.label}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <a href={`mailto:${SITE_CONFIG.email}`} className="footer__social-btn footer__social-btn--email" aria-label="Email">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
              <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className="footer__social-btn footer__social-btn--facebook" aria-label="Matoshri Travels Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <div className="footer__social-instagram" ref={igRef}>
                <button
                  className="footer__social-btn footer__social-btn--instagram"
                  aria-label="Matoshri Travels Instagram"
                  aria-expanded={instagramOpen}
                  onClick={() => {
                    setInstagramOpen((v) => !v);
                    setCallOpen(false);
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </button>
                {instagramOpen && (
                  <div className="footer__instagram-popup" role="dialog" aria-label="Select Instagram account">
                    <a
                      href={SOCIAL.instagram1}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer__instagram-popup-item"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                      <span>Matoshri Travels Service 24x7</span>
                    </a>
                    <a
                      href={SOCIAL.instagram2}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer__instagram-popup-item"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                      <span>Matoshri_Travels_Pune</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="footer__links-section">
            <h4 className="footer__heading">Quick Links</h4>
            <ul className="footer__links">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__links-section">
            <h4 className="footer__heading">Services</h4>
            <ul className="footer__links">
              <li><Link to="/services">Force Urbania on Rent</Link></li>
              <li><Link to="/services">Airport Transfers</Link></li>
              <li><Link to="/services">Outstation Travel</Link></li>
              <li><Link to="/services">Corporate Travel</Link></li>
              <li><Link to="/services">Wedding Transportation</Link></li>
            </ul>
          </div>

          <div className="footer__contact">
            <h4 className="footer__heading">Contact Us</h4>
            <div className="footer__contact-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <div className="footer__contact-numbers">
                {CALL_NUMBERS.map((item) => (
                  <a key={item.tel} href={item.tel} className="footer__contact-number">{item.label}</a>
                ))}
              </div>
            </div>
            <div className="footer__contact-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>
            </div>
            <div className="footer__contact-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{SITE_CONFIG.address}</span>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} Matoshri Tours & Travels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
