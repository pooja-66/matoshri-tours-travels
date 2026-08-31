import { useState, useEffect, useRef } from 'react';
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
          <div className={`about-experience__visual ${isVisible ? 'is-visible' : ''}`}>
            <div className="about-visual__composition">
              <div className="about-visual__gold-frame">
                <div className="about-visual__corner about-visual__corner--tl"></div>
                <div className="about-visual__corner about-visual__corner--tr"></div>
                <div className="about-visual__corner about-visual__corner--bl"></div>
                <div className="about-visual__corner about-visual__corner--br"></div>
                <div className="about-visual__line about-visual__line--top"></div>
                <div className="about-visual__line about-visual__line--bottom"></div>
              </div>
              <div className="about-visual__gold-shape"></div>
              <div className="about-visual__dots">
                <span></span><span></span><span></span>
                <span></span><span></span><span></span>
                <span></span><span></span><span></span>
              </div>
              <div className="about-visual__img about-visual__img--main">
                <img
                  src="/images/black-urbania.png"
                  alt="Black Force Urbania premium van"
                  loading="lazy"
                />
              </div>
              <div className="about-visual__img about-visual__img--secondary">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=500&fit=crop"
                  alt="Scenic mountain road"
                  loading="lazy"
                />
              </div>
              <div className="about-visual__card">
                <div className="about-visual__card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#DFA52F" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="about-visual__card-title">Premium</h3>
                <h3 className="about-visual__card-title">Group Travel</h3>
                <p className="about-visual__card-subtitle">Comfort • Safety • Reliability</p>
              </div>
            </div>
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
            <a href="/about" className="btn-primary about-experience__btn">
              About More
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginLeft: '8px' }}>
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
