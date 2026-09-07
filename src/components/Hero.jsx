import { useState, useEffect } from 'react';
import { SITE_CONFIG } from '../config';
import './Hero.css';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const whatsappLink = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hi%20Matoshri%20Tours%20%26%20Travels%2C%20I%20want%20to%20book%20a%20Force%20Urbania.`;

  return (
    <section className={`hero ${loaded ? 'hero--loaded' : ''}`}>
      <div className="hero__overlay"></div>
      <div className="hero__content">
        <div className={`hero__text ${loaded ? 'hero__text--visible' : ''}`}>
          <span className="hero__script">
            Travel Together. Travel Comfortably.
          </span>
          <h1 className="hero__title">
            PREMIUM FORCE
            <br />
            URBANIA ON RENT
          </h1>
          <span className="hero__gold-line">
            IN PUNE
          </span>
          <p className="hero__description">
            Experience comfortable, safe and reliable group travel with Force Urbania – perfect for every journey.
          </p>
          <div className="hero__actions">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary hero__btn">
              Book Urbania
            </a>
            <a href={`tel:${SITE_CONFIG.phone}`} className="hero__btn-secondary">
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
