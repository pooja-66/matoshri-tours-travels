import { useState, useEffect, useRef } from 'react';
import { SITE_CONFIG } from '../config';
import './FeaturedUrbania.css';

export default function FeaturedUrbania() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const whatsappLink = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hi%20Matoshri%20Tours%20%26%20Travels%2C%20I%20would%20like%20to%20enquire%20about%20Force%20Urbania%20booking.`;

  return (
    <section className="featured-urbania section" ref={sectionRef}>
      <div className="container">
        <div className="featured-urbania__content">
          <div className="featured-urbania__image">
            <div className="urbania-showcase">
              <div className="urbania-frame urbania-frame--black">
                <img
                  src="/images/black-urbania-side.png"
                  alt="Black Force Urbania"
                  className="urbania-vehicle"
                />
              </div>
              <div className="urbania-frame urbania-frame--white">
                <img
                  src="/images/white-urbania-side.png"
                  alt="White Force Urbania"
                  className="urbania-vehicle"
                />
              </div>
            </div>
            <div className="featured-urbania__badge">Most Popular</div>
          </div>
          <div className={`featured-urbania__info ${isVisible ? 'featured-urbania__info--visible' : ''}`}>
            <span className="featured-urbania__label">Featured Vehicle</span>
            <h2 className="featured-urbania__title">Force Urbania</h2>
            <p className="featured-urbania__description">
              The Force Urbania is the ultimate choice for premium group travel. With spacious interiors,
              comfortable pushback seats, and modern amenities, it ensures a luxurious journey for every passenger.
            </p>
            <div className="featured-urbania__specs">
              <div className="featured-urbania__spec">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
                <div>
                  <span className="featured-urbania__spec-value">13-17 Seats</span>
                  <span className="featured-urbania__spec-label">Seating Capacity</span>
                </div>
              </div>
              <div className="featured-urbania__spec">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                <div>
                  <span className="featured-urbania__spec-value">AC</span>
                  <span className="featured-urbania__spec-label">Fully Air Conditioned</span>
                </div>
              </div>
              <div className="featured-urbania__spec">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="1" y="3" width="15" height="13" rx="2"/>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                  <circle cx="5.5" cy="18.5" r="2.5"/>
                  <circle cx="18.5" cy="18.5" r="2.5"/>
                </svg>
                <div>
                  <span className="featured-urbania__spec-value">Spacious</span>
                  <span className="featured-urbania__spec-label">Luggage Boot</span>
                </div>
              </div>
              <div className="featured-urbania__spec">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                <div>
                  <span className="featured-urbania__spec-value">Professional</span>
                  <span className="featured-urbania__spec-label">Experienced Driver</span>
                </div>
              </div>
            </div>
            <div className="featured-urbania__features">
              <span className="featured-urbania__feature">Comfortable Pushback Seats</span>
              <span className="featured-urbania__feature">LED Reading Lights</span>
              <span className="featured-urbania__feature">Mobile Charging Points</span>
              <span className="featured-urbania__feature">Music System</span>
            </div>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary featured-urbania__cta">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Enquire Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}