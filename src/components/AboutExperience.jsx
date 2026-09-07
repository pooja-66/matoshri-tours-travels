import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import FleetShowcase from './FleetShowcase';
import './AboutExperience.css';

export default function AboutExperience() {
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

  return (
    <section className="about-experience" ref={sectionRef}>
      <div className="container">
        <div className="about-experience__grid">
          <div className="about-experience__visual">
            <FleetShowcase />
          </div>

          <div className={`about-experience__content ${isVisible ? 'is-visible' : ''}`}>
            <span className="about-experience__label">
              <span className="about-experience__label-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </span>
              About Us
            </span>
            <h2 className="about-experience__title">
              Your Comfortable
              <br />
              Journey Starts With
              <br />
              Matoshri
            </h2>
            <p className="about-experience__desc">
              At Matoshri Tours & Travels, we take pride in offering a seamless and comfortable travel experience. Our well-maintained Force Urbania fleet and professional drivers ensure safe, on-time and enjoyable journeys for you and your group.
            </p>
            <ul className="about-experience__features">
              <li>
                <span className="about-experience__check">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#DFA52F" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </span>
                <span>Comfortable & Premium Travel</span>
              </li>
              <li>
                <span className="about-experience__check">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#DFA52F" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </span>
                <span>Professional Drivers</span>
              </li>
              <li>
                <span className="about-experience__check">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#DFA52F" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </span>
                <span>Reliable & Well-Maintained Vehicles</span>
              </li>
            </ul>
            <Link to="/about" className="btn-primary about-experience__btn">
              About More
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginLeft: '8px' }}>
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
