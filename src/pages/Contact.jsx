import { useState } from 'react';
import { SITE_CONFIG, CALL_NUMBERS } from '../config';
import './Contact.css';

export default function Contact() {
  const mapSrc = SITE_CONFIG.mapEmbed;
  const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE_CONFIG.address)}`;

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    mobile: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile.trim())) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const message = [
      'New Enquiry - Matoshri Tours & Travels',
      '',
      'Name: ' + formData.name.trim(),
      '',
      'Address: ' + formData.address.trim(),
      '',
      'Mobile No.: ' + formData.mobile.trim(),
      '',
      'Email Address: ' + formData.email.trim(),
      '',
      'Message:',
      formData.message.trim(),
    ].join('\n');

    const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with us for bookings, enquiries, or any assistance you need.</p>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="contact-section">
            <div>
              <h2 className="contact-section__heading">Get In Touch</h2>
              <div className="contact-card">
                <div className="contact-card__item">
                  <div className="contact-card__icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="contact-card__label">Call Us</div>
                    <div className="contact-card__value">Select a number</div>
                  </div>
                </div>
                {CALL_NUMBERS.map((item) => (
                  <a
                    key={item.tel}
                    href={item.tel}
                    className="contact-card__link"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#DFA52F" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    {item.label}
                  </a>
                ))}
              </div>

              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hi%20Matoshri%20Tours%20%26%20Travels%2C%20I%20would%20like%20to%20enquire.`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card__item"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div className="contact-card__icon" style={{ background: '#25D366' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.82 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-card__label">WhatsApp</div>
                  <div className="contact-card__value">Chat with us</div>
                </div>
              </a>

              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="contact-card__item"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div className="contact-card__icon" style={{ background: '#0B1F33' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-card__label">Email</div>
                  <div className="contact-card__value">{SITE_CONFIG.email}</div>
                </div>
              </a>

              <div className="contact-card__item">
                <div className="contact-card__icon" style={{ background: '#0B1F33' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-card__label">Address</div>
                  <div className="contact-card__value">{SITE_CONFIG.address}</div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="contact-section__heading">Find Us On Map</h2>
              <div className="contact-map">
                <iframe
                  src={mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Matoshri Tours & Travels Location"
                ></iframe>
              </div>
              <a
                href={mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-maps-link"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section enquiry-section">
        <div className="container">
          <div className="enquiry-form-wrapper">
            <div className="enquiry-form__title-wrapper">
              <h2 className="enquiry-form__title">Enquiry Form</h2>
            </div>
            <p className="enquiry-form__subtitle">Fill in your details and we will get back to you shortly.</p>
            <form className="enquiry-form" onSubmit={handleSubmit} noValidate>
              <div className="enquiry-form__row">
                <div className="enquiry-form__field">
                  <label className="enquiry-form__label" htmlFor="enquiry-name">Name</label>
                  <input
                    id="enquiry-name"
                    type="text"
                    name="name"
                    className="enquiry-form__input"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <span className="enquiry-form__error">{errors.name}</span>}
                </div>
                <div className="enquiry-form__field">
                  <label className="enquiry-form__label" htmlFor="enquiry-address">Address</label>
                  <input
                    id="enquiry-address"
                    type="text"
                    name="address"
                    className="enquiry-form__input"
                    placeholder="Enter your address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                  {errors.address && <span className="enquiry-form__error">{errors.address}</span>}
                </div>
              </div>
              <div className="enquiry-form__row">
                <div className="enquiry-form__field">
                  <label className="enquiry-form__label" htmlFor="enquiry-mobile">Mobile Number</label>
                  <input
                    id="enquiry-mobile"
                    type="tel"
                    name="mobile"
                    className="enquiry-form__input"
                    placeholder="Enter 10-digit mobile number"
                    maxLength={10}
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                  {errors.mobile && <span className="enquiry-form__error">{errors.mobile}</span>}
                </div>
                <div className="enquiry-form__field">
                  <label className="enquiry-form__label" htmlFor="enquiry-email">Email Address</label>
                  <input
                    id="enquiry-email"
                    type="email"
                    name="email"
                    className="enquiry-form__input"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <span className="enquiry-form__error">{errors.email}</span>}
                </div>
              </div>
              <div className="enquiry-form__field enquiry-form__field--full">
                <label className="enquiry-form__label" htmlFor="enquiry-message">Message</label>
                <textarea
                  id="enquiry-message"
                  name="message"
                  className="enquiry-form__textarea"
                  placeholder="Tell us about your travel requirements..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && <span className="enquiry-form__error">{errors.message}</span>}
              </div>
              <button type="submit" className="btn-primary enquiry-form__submit">Submit Enquiry</button>
            </form>
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <div className="container">
          <h2 className="contact-cta__title">Ready to Start Your Journey?</h2>
          <p className="contact-cta__text">
            Contact us today for bookings and enquiries. We are here to help you plan the perfect trip.
          </p>
          <div className="contact-cta__actions">
            <a href={`tel:${SITE_CONFIG.phone}`} className="btn-primary">Call Now</a>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Hi%20Matoshri%20Tours%20%26%20Travels%2C%20I%20would%20like%20to%20enquire.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

