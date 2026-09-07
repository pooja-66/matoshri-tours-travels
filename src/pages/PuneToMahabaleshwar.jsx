import { useState, useEffect } from 'react';
import { SITE_CONFIG, FLEET, WHY_CHOOSE_US } from '../config';
import './PuneToMahabaleshwar.css';

const whatsappLink = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hi%20Matoshri%20Tours%20%26%20Travels%2C%20I%20am%20interested%20in%20Pune%20to%20Mahabaleshwar%20travel.`;

const travelOptions = [
  {
    title: 'One Way',
    description: 'Direct one-way transfer from Pune to Mahabaleshwar at your preferred time.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    title: 'Round Trip',
    description: 'Complete round-trip service with pickup and drop-back at your convenience.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 1l4 4-4 4" />
        <path d="M3 11V9a4 4 0 014-4h14" />
        <path d="M7 23l-4-4 4-4" />
        <path d="M21 13v2a4 4 0 01-4 4H3" />
      </svg>
    ),
  },
  {
    title: 'Full Day / Local Travel',
    description: 'Explore Mahabaleshwar and nearby attractions with a full-day vehicle package.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

const highlights = [
  {
    title: 'Venna Lake',
    description: 'A beautiful pristine lake surrounded by lush greenery, perfect for boating and evening walks.',
    image: '/images/venna-lake.png',
  },
  {
    title: 'Mapro Garden',
    description: 'Famous for strawberry products, jams, and fresh fruit salads — a must-visit for food lovers.',
    image: '/images/mapro.png',
  },
  {
    title: 'Arthur\'s Seat',
    description: 'One of the most popular viewpoints in Mahabaleshwar with breathtaking valley views.',
    image: '/images/arthur-seat.png',
  },
  {
    title: 'Pratapgad Fort',
    description: 'Historic hill fort with rich Maratha heritage, panoramic views, and architectural significance.',
    image: '/images/pratapgad.png',
  },
];

export default function PuneToMahabaleshwar() {
  useEffect(() => {
    document.title = 'Pune To Mahabaleshwar | Matoshri Tours & Travels';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Book comfortable Pune to Mahabaleshwar travel with Matoshri Tours & Travels. Premium Force Urbania, experienced drivers, one-way & round-trip options.');
    }
  }, []);
  return (
    <>
      <section className="ptm-hero">
        <div className="container ptm-hero__content">
          <span className="ptm-hero__script"></span>
          <h1 className="ptm-hero__title">Pune To Mahabaleshwar</h1>
          <p className="ptm-hero__description">
            Travel comfortably from Pune to Mahabaleshwar with Matoshri Tours & Travels.
          </p>
          <div className="ptm-hero__actions">
            <a href="/booking" className="btn-primary ptm-hero__btn">
              Book Now
            </a>
            <a href="/packages" className="btn-secondary ptm-hero__btn">
              View Packages
            </a>
          </div>
        </div>
      </section>

      <section className="section ptm-section">
        <div className="container">
          <h2 className="ptm-section-title">Choose Your Vehicle</h2>
          <div className="ptm-vehicle-grid">
            {FLEET.map((vehicle, index) => (
              <div className="ptm-vehicle-card" key={index}>
                <div className="ptm-vehicle-card__image">
                  <img src={vehicle.image} alt={vehicle.name} />
                </div>
                <div className="ptm-vehicle-card__body">
                  <h3 className="ptm-vehicle-card__name">{vehicle.name}</h3>
                  <p className="ptm-vehicle-card__seats">{vehicle.seats}</p>
                  <p className="ptm-vehicle-card__desc">{vehicle.suitability}</p>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary ptm-vehicle-card__btn">
                    Book Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section ptm-section ptm-section--alt">
        <div className="container">
          <h2 className="ptm-section-title">Travel Options</h2>
          <div className="ptm-options-grid">
            {travelOptions.map((option, index) => (
              <div className="ptm-option-card" key={index}>
                <div className="ptm-option-card__icon">{option.icon}</div>
                <h3 className="ptm-option-card__title">{option.title}</h3>
                <p className="ptm-option-card__desc">{option.description}</p>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary ptm-option-card__btn">
                  Enquire Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section ptm-section">
        <div className="container">
          <h2 className="ptm-section-title">Pune To Mahabaleshwar Route</h2>
          <div className="ptm-route">
            <div className="ptm-route__city">
              <span className="ptm-route__dot"></span>
              <span className="ptm-route__name">Pune</span>
            </div>
            <div className="ptm-route__line">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </div>
            <div className="ptm-route__city ptm-route__city--dest">
              <span className="ptm-route__dot ptm-route__dot--dest"></span>
              <span className="ptm-route__name">Mahabaleshwar</span>
            </div>
          </div>
          <p className="ptm-route__note">
            Scenic drive through the Western Ghats with comfortable seating and professional driving.
          </p>
        </div>
      </section>

      <section className="section ptm-section ptm-section--alt">
        <div className="container">
          <h2 className="ptm-section-title">Explore Mahabaleshwar</h2>
          <div className="ptm-highlights-grid">
            {highlights.map((item, index) => (
              <div className="ptm-highlight-card" key={index}>
                <div className="ptm-highlight-card__image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="ptm-highlight-card__body">
                  <h3 className="ptm-highlight-card__title">{item.title}</h3>
                  <p className="ptm-highlight-card__desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ptm-cta-section">
        <div className="container">
          <h2 className="ptm-cta-title">Ready To Travel From Pune To Mahabaleshwar?</h2>
          <p className="ptm-cta-text">
            Book your comfortable journey with Matoshri Tours & Travels.
          </p>
          <a href="/booking" className="btn-primary ptm-cta-btn">
            Book Your Journey
          </a>
        </div>
      </section>
    </>
  );
}
