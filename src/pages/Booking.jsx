import { FLEET, SITE_CONFIG } from '../config';
import './Booking.css';

export default function Booking() {
  const handleBookNow = (vehicleName) => {
    const message = `Hi Matoshri Tours & Travels, I would like to book the ${vehicleName}. Please share availability and details.`;
    const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Online Booking</h1>
          <p>Choose your preferred vehicle and book directly via WhatsApp for instant confirmation.</p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="booking-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {FLEET.map((vehicle, index) => (
              <div
                key={index}
                className="booking-card"
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
                  border: '1px solid #E5E7EB',
                }}
              >
                <div className="booking-card__image" style={{ height: '220px', overflow: 'hidden' }}>
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontSize: '1.2rem', color: '#0B1F33', marginBottom: '8px' }}>{vehicle.name}</h3>
                  <p style={{ fontSize: '0.9rem', color: '#D4A84F', fontWeight: '600', marginBottom: '16px' }}>
                    {vehicle.seats}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                    {vehicle.features.slice(0, 4).map((feature, i) => (
                      <span
                        key={i}
                        style={{
                          background: 'rgba(212, 168, 79, 0.1)',
                          color: '#D4A84F',
                          padding: '4px 10px',
                          borderRadius: '50px',
                          fontSize: '0.75rem',
                          fontWeight: '500',
                        }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => handleBookNow(vehicle.name)}
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px', padding: '32px', background: '#F8F7F3', borderRadius: '16px' }}>
            <h3 style={{ fontSize: '1.3rem', color: '#0B1F33', marginBottom: '12px' }}>Need Help Choosing?</h3>
            <p style={{ color: '#6B7280', marginBottom: '20px' }}>
              Contact us and we will help you select the perfect vehicle for your needs.
            </p>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="btn-secondary"
              style={{ borderColor: '#0B1F33', color: '#0B1F33', marginRight: '12px' }}
            >
              Call Us
            </a>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hi%20Matoshri%20Tours%20%26%20Travels%2C%20I%20need%20help%20choosing%20a%20vehicle.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
