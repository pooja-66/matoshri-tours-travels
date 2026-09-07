import { Link } from 'react-router-dom';
import { SERVICES, SITE_CONFIG } from '../config';
import './Services.css';

const serviceDetails = [
  {
    title: "Force Urbania on Rent",
    description: "Our flagship service featuring premium Force Urbania vehicles with comfortable seating, AC, and modern amenities. Perfect for families, groups, and corporate outings.",
    features: ["13-17 Seater Options", "AC & Pushback Seats", "Professional Drivers", "Well Maintained Fleet"],
    image: "/images/black-urbania-angle.png",
  },
  {
    title: "Airport Transfers",
    description: "Reliable pickup and drop services to Pune Airport. We ensure you reach the airport on time or get picked up promptly after your arrival.",
    features: ["Pune Airport Coverage", "Flight Monitoring", "Meet & Greet", "Luggage Assistance"],
    image: "/images/airport-transport.png",
  },
  {
    title: "Pune to Mumbai",
    description: "Comfortable and safe travel between Pune and Mumbai. Our Urbania vehicles make the 3.5-hour journey relaxing and enjoyable.",
    features: ["One-way & Round Trip", "Multiple Departure Times", "Experienced Highway Drivers", "Comfortable Journey"],
    image: "/images/pune-mumbai.png",
  },
  {
    title: "Outstation Travel",
    description: "Explore Maharashtra and neighboring states with our comfortable outstation travel services. Customized itineraries available.",
    features: ["Multi-day Trips", "Flexible Itineraries", "Pan-Maharashtra Coverage", "Group Discounts"],
    image: "/images/outstation-travel.png",
  },
  {
    title: "Corporate Travel",
    description: "Professional corporate travel solutions with dedicated fleet management. Ensure your team travels comfortably and arrives on time.",
    features: ["Monthly Contracts", "Dedicated Fleet", "Invoice Billing", "Priority Support"],
    image: "/images/corporate-travel.png",
  },
  {
    title: "Wedding & Event Transportation",
    description: "Elegant transportation solutions for weddings and special events. Make your special day even more memorable with our premium service.",
    features: ["Guest Transportation", "Multiple Vehicles", "Decorated Options", "Flexible Scheduling"],
    image: "/images/wedding-event.png",
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
          <div className="services-page">
            {serviceDetails.map((service, index) => (
              <div
                key={index}
                className={`services-row${index % 2 !== 0 ? ' services-row--reverse' : ''}`}
              >
                <div className="services-image-col">
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`services-image${index === 0 ? ' services-image--contain' : ''}`}
                  />
                </div>
                <div className="services-text-col">
                  <h2 className="services-title">{service.title}</h2>
                  <p className="services-description">
                    {service.description}
                  </p>
                  <ul className="services-features">
                    {service.features.map((feature, i) => (
                      <li key={i} className="services-feature">
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
      <section className="services-cta">
        <div className="container">
          <h2 className="services-cta__title">Ready to Book?</h2>
          <p className="services-cta__text">
            Contact us today to discuss your travel requirements.
          </p>
          <div className="services-cta__actions">
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
