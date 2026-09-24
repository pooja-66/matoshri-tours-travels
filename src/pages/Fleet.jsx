import { Link } from 'react-router-dom';
import { FLEET, SITE_CONFIG } from '../config';
import './Fleet.css';

export default function Fleet() {
  return (
    <>
      <div className="page-header fleet-page-header">
        <div className="container">
          <h1>Our Fleet</h1>
          <p>Explore our premium fleet of Force Urbania vehicles, maintained to the highest standards.</p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <h2 className="premium-fleet__title">Our Premium Fleet</h2>
          <div className="premium-fleet__grid">
            <div className="premium-fleet__card">
              <div className="premium-fleet__image">
                <img src="/images/black-urbania-angle.png" alt="Black Force Urbania" loading="eager" />
              </div>
              <div className="premium-fleet__content">
                <h3 className="premium-fleet__name">Force Urbania Premium</h3>
                <p className="premium-fleet__desc">Premium comfort with stylish design for special occasions</p>
                <div className="premium-fleet__specs">
                  <span className="premium-fleet__spec">13 + Driver</span>
                  <span className="premium-fleet__spec">AC</span>
                </div>
                <Link to="/booking" className="btn-primary">Book Now</Link>
              </div>
            </div>
            <div className="premium-fleet__card">
              <div className="premium-fleet__image">
                <img src="/images/white-urbania-angle.png" alt="White Force Urbania" loading="eager" />
              </div>
              <div className="premium-fleet__content">
                <h3 className="premium-fleet__name">Force Urbania Classic</h3>
                <p className="premium-fleet__desc">Classic white Urbania perfect for weddings, pilgrimages, and family trips</p>
                <div className="premium-fleet__specs">
                  <span className="premium-fleet__spec">13 + Driver</span>
                  <span className="premium-fleet__spec">AC</span>
                </div>
                <Link to="/booking" className="btn-primary">Book Now</Link>
              </div>
            </div>
          </div>

          <div className="fleet-divider">
            <span>All Vehicles</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {FLEET.map((vehicle, index) => (
              <div
                key={index}
                style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                  border: '1px solid #E5E7EB',
                }}
              >
                 <div className="fleet-card__grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'stretch' }}>
                    <div className="fleet-card__image" style={{ height: '320px' }}>
                       <img
                         src={vehicle.image}
                         alt={vehicle.name}
                         className={`fleet-card__image-img${vehicle.imageClassName ? ` ${vehicle.imageClassName}` : ''}`}
                       />
                   </div>
                   <div className="fleet-card__content" style={{ padding: '40px' }}>
                    <h2 style={{ fontSize: '1.75rem', color: '#0B1F33', marginBottom: '16px' }}>{vehicle.name}</h2>
                    <div style={{ display: 'flex', gap: '24px', marginBottom: '20px', flexWrap: 'wrap' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4A84F" strokeWidth="2">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                          <circle cx="9" cy="7" r="4"/>
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                        </svg>
                        <span style={{ fontWeight: '600', color: '#0B1F33' }}>{vehicle.seats}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4A84F" strokeWidth="2">
                          <path d="M12 2v20M2 12h20"/>
                        </svg>
                        <span style={{ fontWeight: '600', color: '#0B1F33' }}>AC</span>
                      </div>
                    </div>
                    <p style={{ fontSize: '0.95rem', color: '#6B7280', marginBottom: '20px', lineHeight: '1.6' }}>
                      {vehicle.suitability}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                      {vehicle.features.map((feature, i) => (
                        <span
                          key={i}
                          style={{
                            background: 'rgba(212, 168, 79, 0.1)',
                            color: '#D4A84F',
                            padding: '6px 14px',
                            borderRadius: '50px',
                            fontSize: '0.8rem',
                            fontWeight: '500',
                            border: '1px solid rgba(212, 168, 79, 0.2)',
                          }}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <Link to="/booking" className="btn-primary">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
