import { useState, useEffect, useRef } from 'react';
import './About.css';

function AnimatedNumber({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          observer.unobserve(entry.target);
          
          const numericTarget = parseInt(target.replace(/[^0-9]/g, ''), 10);
          if (isNaN(numericTarget)) return;
          
          const duration = 2000;
          const startTime = performance.now();
          
          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * numericTarget);
            setCount(current);
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(numericTarget);
            }
          };
          
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function About() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <p>Learn more about Matoshri Tours & Travels and our commitment to premium travel experiences.</p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="about-stats">
            <h2 className="about-stats__heading">Who We Are</h2>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#4B5563', marginBottom: '20px' }}>
              Matoshri Tours & Travels is a trusted name in premium travel services based in Pune, Maharashtra.
              We specialize in providing Force Urbania on rent for families, corporate clients, and groups
              looking for comfortable and reliable travel solutions.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#4B5563', marginBottom: '20px' }}>
              Our fleet of well-maintained Force Urbania vehicles is equipped with modern amenities to ensure
              a luxurious journey. Whether you need airport transfers, outstation travel, corporate transportation,
              or wedding event services, we have you covered.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#4B5563', marginBottom: '20px' }}>
              We pride ourselves on our professional drivers, clean vehicles, punctual service, and transparent
              pricing. Our goal is to make every journey comfortable, safe, and memorable for our customers.
            </p>

            <div className="about-vehicles">
              <h2 className="about-vehicles__title">Our Premium Vehicles</h2>
              <div className="about-vehicles__grid">
                <div className="about-vehicles__card">
                  <div className="about-vehicles__image">
                    <img src="/images/black-urbania-angle.png" alt="Black Force Urbania" loading="lazy" />
                  </div>
                  <h3 className="about-vehicles__name">Force Urbania Premium</h3>
                  <p className="about-vehicles__desc">Premium black Urbania with comfortable pushback seats, perfect for special occasions and corporate travel.</p>
                </div>
                <div className="about-vehicles__card">
                  <div className="about-vehicles__image">
                    <img src="/images/white-urbania-angle.png" alt="White Force Urbania" loading="lazy" />
                  </div>
                  <h3 className="about-vehicles__name">Force Urbania Classic</h3>
                  <p className="about-vehicles__desc">Classic white Urbania, ideal for weddings, pilgrimages, and family trips with spacious luggage boot.</p>
                </div>
              </div>
            </div>

            <div className="about-stats__grid">
              <div className="about-stats__card">
                <div className="about-stats__number"><AnimatedNumber target="500+" suffix="+" /></div>
                <div className="about-stats__label">Happy Customers</div>
              </div>
              <div className="about-stats__card">
                <div className="about-stats__number"><AnimatedNumber target="1000+" suffix="+" /></div>
                <div className="about-stats__label">Trips Completed</div>
              </div>
              <div className="about-stats__card">
                <div className="about-stats__number"><AnimatedNumber target="5+" suffix="+" /></div>
                <div className="about-stats__label">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

