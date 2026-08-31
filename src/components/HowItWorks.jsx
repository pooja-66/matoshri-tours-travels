import { useState, useEffect, useRef } from 'react';
import './HowItWorks.css';

const steps = [
  {
    number: "01",
    title: "Choose Your Service",
    description: "Select from our range of travel services that best fits your needs.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Send Enquiry",
    description: "Reach out to us via WhatsApp or call to discuss your travel requirements.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Get Confirmation",
    description: "Receive confirmation with all trip details and vehicle information.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
  },
  {
    number: "04",
    title: "Enjoy Your Journey",
    description: "Sit back, relax, and enjoy a comfortable journey with our professional service.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
        <line x1="9" y1="9" x2="9.01" y2="9"/>
        <line x1="15" y1="9" x2="15.01" y2="9"/>
      </svg>
    ),
  },
];

export default function HowItWorks() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="how-it-works section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">
          Booking your travel with Matoshri is simple and hassle-free. Just follow these easy steps.
        </p>
        <div className="how-it-works__grid">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`how-it-works__card ${isVisible ? 'how-it-works__card--visible' : ''}`}
              style={{ transitionDelay: `${index * 0.12}s` }}
            >
              <div className="how-it-works__number">{step.number}</div>
              <div className="how-it-works__icon">{step.icon}</div>
              <h3 className="how-it-works__title">{step.title}</h3>
              <p className="how-it-works__desc">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="how-it-works__connector">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}