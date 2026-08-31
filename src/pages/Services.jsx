import { Link } from 'react-router-dom';
import { SERVICES, SITE_CONFIG } from '../config';

const serviceDetails = [
  {
    title: "Force Urbania on Rent",
    description: "Our flagship service featuring premium Force Urbania vehicles with comfortable seating, AC, and modern amenities. Perfect for families, groups, and corporate outings.",
    features: ["13-17 Seater Options", "AC & Pushback Seats", "Professional Drivers", "Well Maintained Fleet"],
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=600&h=400&fit=crop",
  },
  {
    title: "Airport Transfers",
    description: "Reliable pickup and drop services to Pune Airport. We ensure you reach the airport on time or get picked up promptly after your arrival.",
    features: ["Pune Airport Coverage", "Flight Monitoring", "Meet & Greet", "Luggage Assistance"],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop",
  },
  {
    title: "Pune to Mumbai",
    description: "Comfortable and safe travel between Pune and Mumbai. Our Urbania vehicles make the 3.5-hour journey relaxing and enjoyable.",
    features: ["One-way & Round Trip", "Multiple Departure Times", "Experienced Highway Drivers", "Comfortable Journey"],
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop",
  },
  {
    title: "Outstation Travel",
    description: "Explore Maharashtra and neighboring states with our comfortable outstation travel services. Customized itineraries available.",
    features: ["Multi-day Trips", "Flexible Itineraries", "Pan-Maharashtra Coverage", "Group Discounts"],
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=400&fit=crop",
  },
  {
    title: "Corporate Travel",
    description: "Professional corporate travel solutions with dedicated fleet management. Ensure your team travels comfortably and arrives on time.",
    features: ["Monthly Contracts", "Dedicated Fleet", "Invoice Billing", "Priority Support"],
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
  },
  {
    title: "Wedding & Event Transportation",
    description: "Elegant transportation solutions for weddings and special events. Make your special day even more memorable with our premium service.",
    features: ["Guest Transportation", "Multiple Vehicles", "Decorated Options", "Flexible Scheduling"],
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
  },
];

export default function Services() {
  const whatsappLink = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hi%20Matoshri%20Tours%20%26%20Travels%2C%20I%20would%20like%20to%20enquire%20about%20your%20travel%20services.`;

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive travel solutions designed for comfort, reliability, and your complete satisfaction.</p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
            {serviceDetails.map((service, index) => (
              <div
                key={index}
                style={{
                  display: 'grid',
                  gridTemplateColumns: index % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
                  gap: '48px',
                  alignItems: 'center',
                }}
              >
                <div style={{ order: index % 2 === 0 ? 1 : 2 }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{ width: '100%', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                  />
                </div>
                <div style={{ order: index % 2 === 0 ? 2 : 1 }}>
                  <h2 style={{ fontSize: '1.75rem', marginBottom: '16px', color: '#0B1F33' }}>{service.title}</h2>
                  <p style={{ fontSize: '1rem', lineHeight: '1.7', color: '#4B5563', marginBottom: '24px' }}>
                    {service.description}
                  </p>
                  <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    {service.features.map((feature, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: '#6B7280' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D4A84F" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: '#0B1F33', padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', color: '#ffffff', marginBottom: '16px' }}>Ready to Book?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '32px' }}>
            Contact us today to discuss your travel requirements.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
              WhatsApp Us
            </a>
            <Link to="/booking" className="btn-secondary">View Fleet & Book</Link>
          </div>
        </div>
      </section>
    </>
  );
}
