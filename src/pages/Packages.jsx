import { PACKAGES, SITE_CONFIG } from '../config';
import './Packages.css';

export default function Packages() {
  const whatsappLink = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hi%20Matoshri%20Tours%20%26%20Travels%2C%20I%20would%20like%20to%20enquire%20about%20your%20tour%20packages.`;

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Tour Packages</h1>
          <p>Explore Maharashtra with our carefully curated travel packages. Comfortable travel, great destinations.</p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="packages-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
            {PACKAGES.map((pkg, index) => (
              <div
                key={index}
                className="package-card"
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
                  border: '1px solid #E5E7EB',
                  transition: 'transform 0.3s ease',
                }}
              >
                <div className="package-card__image" style={{ height: '240px', overflow: 'hidden' }}>
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '28px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <h3 style={{ fontSize: '1.3rem', color: '#0B1F33' }}>{pkg.name}</h3>
                    <span style={{
                      background: 'rgba(212, 168, 79, 0.1)',
                      color: '#D4A84F',
                      padding: '4px 12px',
                      borderRadius: '50px',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      whiteSpace: 'nowrap',
                    }}>
                      {pkg.duration}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.95rem', color: '#6B7280', lineHeight: '1.6', marginBottom: '16px' }}>
                    {pkg.description}
                  </p>
                  <div style={{ marginBottom: '20px' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#0B1F33', display: 'block', marginBottom: '8px' }}>
                      Package Includes:
                    </span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {pkg.includes.map((item, i) => (
                        <span key={i} style={{
                          background: '#F8F7F3',
                          color: '#4B5563',
                          padding: '4px 10px',
                          borderRadius: '4px',
                          fontSize: '0.8rem',
                        }}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hi%20Matoshri%20Tours%20%26%20Travels%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(pkg.name)}%20package.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    Enquire on WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
