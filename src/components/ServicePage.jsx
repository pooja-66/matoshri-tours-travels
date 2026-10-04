import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG, CALL_NUMBERS } from '../config';
import './ServicePage.css';

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function RevealSection({ children, className = '', delay = 0 }) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`svc-reveal ${visible ? 'svc-reveal--visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* -----------------------------------------
   1. BREADCRUMB
   ----------------------------------------- */
function Breadcrumb({ serviceTitle }) {
  return (
    <nav className="svc-breadcrumb" aria-label="Breadcrumb">
      <ol className="svc-breadcrumb__list">
        <li className="svc-breadcrumb__item">
          <Link to="/" className="svc-breadcrumb__link">Home</Link>
        </li>
        <li className="svc-breadcrumb__sep" aria-hidden="true">/</li>
        <li className="svc-breadcrumb__item">
          <Link to="/services" className="svc-breadcrumb__link">Services</Link>
        </li>
        <li className="svc-breadcrumb__sep" aria-hidden="true">/</li>
        <li className="svc-breadcrumb__item svc-breadcrumb__item--current" aria-current="page">
          {serviceTitle}
        </li>
      </ol>
    </nav>
  );
}

/* -----------------------------------------
   2. HERO SECTION
   ----------------------------------------- */
function ServiceHero({ service }) {
  const whatsappText = encodeURIComponent(`Hi Matoshri Tours & Travels, I would like to book / enquire about ${service.title}`);
  const whatsappLink = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${whatsappText}`;
  const primaryPhone = CALL_NUMBERS[0]?.tel || 'tel:+919511954050';

  const highlights = service.benefits?.slice(0, 4) || [
    'Well-Maintained Fleet',
    'Experienced Chauffeurs',
    'Transparent Pricing',
    'On-Time Service',
  ];

  const heroImage = service.image || service.featuredVehicle?.image || service.vehicles?.[0]?.image || '/images/white-urbania-angle.png';
  const heroVehicleName = service.vehicleName || service.featuredVehicle?.name || service.title;

  return (
    <section className="svc-hero">
      <div className="container">
        <Breadcrumb serviceTitle={service.title} />
        <div className="svc-hero__inner">
          <div className="svc-hero__content">
            <h1 className="svc-hero__title">{service.title}</h1>
            {service.tagline && (
              <p className="svc-hero__tagline">{service.tagline}</p>
            )}
            <p className="svc-hero__intro">
              {service.description ||
                `Book ${service.title} in Pune with Matoshri Tours & Travels. Professional drivers, well-maintained vehicles, and transparent pricing for local and outstation travel across Maharashtra.`}
            </p>

            {highlights.length > 0 && (
              <ul className="svc-hero__highlights">
                {highlights.map((item, i) => (
                  <li key={i} className="svc-hero__highlight">
                    <span className="svc-hero__highlight-icon" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="svc-hero__actions">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="svc-btn svc-btn--primary"
                id="hero-book-now-btn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.82 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Book Now
              </a>
              <a href={primaryPhone} className="svc-btn svc-btn--secondary" id="hero-call-now-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call Now
              </a>
            </div>
          </div>

          <div className="svc-hero__image-col">
            <div className="svc-hero__image-container">
              <img
                src={heroImage}
                alt={heroVehicleName}
                className="svc-hero__image"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -----------------------------------------
   3. ABOUT THE SERVICE
   ----------------------------------------- */
function ServiceAbout({ service }) {
  const aboutHeading = service.about?.heading || `About ${service.title}`;
  const aboutBody =
    service.about?.body ||
    `Matoshri Tours & Travels offers reliable ${service.title} across Pune and Maharashtra. Our well-maintained fleet, experienced drivers, and customer-first approach ensure a comfortable and hassle-free travel experience.`;

  return (
    <RevealSection className="svc-section svc-about">
      <div className="container">
        <div className="svc-section-header svc-section-header--center">
          <span className="svc-section-tag">Overview</span>
          <h2 className="svc-section-title">{aboutHeading}</h2>
        </div>
        <div className="svc-about__inner">
          <p className="svc-about__text">{aboutBody}</p>
        </div>
      </div>
    </RevealSection>
  );
}

/* -----------------------------------------
   4. SERVICE BENEFITS
   ----------------------------------------- */
function ServiceBenefits({ benefits }) {
  if (!benefits || !benefits.length) return null;

  const benefitIcons = [
    (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" key="1">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" key="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" key="3">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" key="4">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  ];

  return (
    <RevealSection className="svc-section svc-benefits">
      <div className="container">
        <div className="svc-section-header svc-section-header--center">
          <span className="svc-section-tag">Why We Excel</span>
          <h2 className="svc-section-title">Service Benefits</h2>
        </div>
        <div className="svc-benefits__grid">
          {benefits.slice(0, 4).map((benefit, i) => (
            <div key={i} className="svc-benefit-card">
              <div className="svc-benefit-card__icon" aria-hidden="true">
                {benefitIcons[i % benefitIcons.length]}
              </div>
              <h3 className="svc-benefit-card__title">{benefit}</h3>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}

/* -----------------------------------------
   5. SERVICE INFORMATION
   ----------------------------------------- */
function ServiceInfo({ service }) {
  // Extract info from serviceInfo array or top-level properties
  const infoItems = service.serviceInfo || [
    { label: 'Vehicle Type', value: service.vehicleType || 'Mini Bus / Luxury Coach' },
    { label: 'Seating Capacity', value: service.capacity || '14–50 Seater + Driver' },
    { label: 'Climate Control', value: service.climateControl || 'AC & Non-AC Options Available' },
    { label: 'Service Type', value: service.serviceType || 'Local & Outstation' },
    { label: 'Best For', value: service.bestFor || 'Weddings, Corporate Events, Tours, Picnics, School Trips' },
  ];

  return (
    <RevealSection className="svc-section svc-info">
      <div className="container">
        <div className="svc-section-header svc-section-header--center">
          <span className="svc-section-tag">Specifications</span>
          <h2 className="svc-section-title">Service Information</h2>
        </div>
        <div className="svc-info__grid">
          {infoItems.map((item, i) => (
            <div key={i} className="svc-info__card">
              <span className="svc-info__label">{item.label}</span>
              <span className="svc-info__value">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}

/* -----------------------------------------
   6. FEATURED VEHICLE (ONLY ONE VEHICLE)
   ----------------------------------------- */
function FeaturedVehicle({ service }) {
  const vehicleName = service.vehicleName || service.featuredVehicle?.name || 'Isuzu SLM';
  const capacity = service.capacity || service.featuredVehicle?.capacity || '22 Seater + Driver';
  const description =
    service.vehicleDescription ||
    service.featuredVehicle?.description ||
    'Elegant and efficient vehicle perfect for small group travel, pilgrimages, family outings, and executive transfers.';

  const features =
    service.vehicleBenefits ||
    service.featuredVehicle?.benefits ||
    service.featuredVehicle?.features || [
      'Premium Comfort',
      'Spacious Interior',
      'Powerful Performance',
      'Smooth Ride',
    ];

  const whatsappText = encodeURIComponent(`Hi Matoshri Tours & Travels, I want to book the ${vehicleName} for ${service.title}`);
  const whatsappLink = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${whatsappText}`;

  return (
    <RevealSection className="svc-section svc-featured-vehicle">
      <div className="container">
        <div className="svc-section-header svc-section-header--center">
          <span className="svc-section-tag">Primary Fleet Option</span>
          <h2 className="svc-section-title">Featured Vehicle</h2>
        </div>
        <div className="svc-featured-vehicle__card">
          <div className="svc-featured-vehicle__header">
            <div className="svc-featured-vehicle__title-wrap">
              <h3 className="svc-featured-vehicle__name">{vehicleName}</h3>
              <span className="svc-featured-vehicle__badge">{capacity}</span>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="svc-btn svc-btn--primary svc-featured-vehicle__cta"
            >
              Book This Vehicle
            </a>
          </div>

          <p className="svc-featured-vehicle__desc">{description}</p>

          <div className="svc-featured-vehicle__features">
            <h4 className="svc-featured-vehicle__features-label">Vehicle Highlights:</h4>
            <div className="svc-featured-vehicle__chips">
              {features.slice(0, 4).map((f, i) => (
                <div key={i} className="svc-featured-vehicle__chip">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}

/* -----------------------------------------
   7. PRICING INFORMATION
   ----------------------------------------- */
function ServicePricing({ pricing }) {
  if (!pricing) return null;

  const whatsappLink = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hi Matoshri Tours & Travels, I would like to get a quotation for my travel requirements.')}`;

  return (
    <RevealSection className="svc-section svc-pricing">
      <div className="container">
        <div className="svc-section-header svc-section-header--center">
          <span className="svc-section-tag">Tariff & Estimates</span>
          <h2 className="svc-section-title">Pricing Information</h2>
        </div>
        <div className="svc-pricing__card">
          <p className="svc-pricing__text">{pricing.text}</p>
          {pricing.note && <p className="svc-pricing__note">{pricing.note}</p>}
          <div className="svc-pricing__actions">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="svc-btn svc-btn--whatsapp"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.82 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Now
            </a>
            <Link to="/booking" className="svc-btn svc-btn--primary">
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}

/* -----------------------------------------
   8. POPULAR USE CASES
   ----------------------------------------- */
function ServiceUseCases({ useCases }) {
  const cases =
    useCases && useCases.length
      ? useCases
      : ['Corporate Events', 'Weddings', 'School Trips', 'Family Tours', 'Picnics', 'Outstation Tours'];

  return (
    <RevealSection className="svc-section svc-usecases">
      <div className="container">
        <div className="svc-section-header svc-section-header--center">
          <span className="svc-section-tag">Applications</span>
          <h2 className="svc-section-title">Popular Use Cases</h2>
        </div>
        <div className="svc-usecases__grid">
          {cases.map((item, i) => (
            <div key={i} className="svc-usecase-card">
              <span className="svc-usecase-card__icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span className="svc-usecase-card__text">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}

/* -----------------------------------------
   9. WHY CHOOSE MATOSHRI
   ----------------------------------------- */
function WhyChooseMatoshri({ items }) {
  const cards =
    items && items.length
      ? items
      : [
          { title: 'Diverse Fleet', desc: 'From 14-seater mini buses to 50-seater luxury coaches.' },
          { title: 'Clean & Comfortable', desc: 'Sanitised interiors with comfortable seating on every vehicle.' },
          { title: 'Professional Drivers', desc: 'Experienced chauffeurs trained in safe route management.' },
          { title: 'All-Occasion Service', desc: 'Weddings, corporate events, tours, picnics, and more.' },
        ];

  return (
    <RevealSection className="svc-section svc-why">
      <div className="container">
        <div className="svc-section-header svc-section-header--center">
          <span className="svc-section-tag">The Matoshri Standard</span>
          <h2 className="svc-section-title">Why Choose Matoshri Tours & Travels?</h2>
        </div>
        <div className="svc-why__grid">
          {cards.slice(0, 4).map((card, i) => (
            <div key={i} className="svc-why-card">
              <div className="svc-why-card__number">0{i + 1}</div>
              <h3 className="svc-why-card__title">{card.title}</h3>
              <p className="svc-why-card__desc">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}

/* -----------------------------------------
   10. FAQ (ACCORDION)
   ----------------------------------------- */
function ServiceFAQ({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const defaultFaqs = [
    { q: 'What bus sizes are available for rent?', a: 'We offer a wide range from 14-seater mini buses to 50-seater luxury coaches, with both AC and non-AC options.' },
    { q: 'Are buses available for outstation travel?', a: 'Yes, our vehicles are available for both local and outstation travel across Maharashtra and India.' },
    { q: 'Is a driver included?', a: 'Yes, every vehicle rental includes a professional, background-verified driver.' },
    { q: 'Can I decorate the bus for a wedding?', a: 'Yes, we offer decorated vehicle options for weddings and special events.' },
    { q: 'How is pricing calculated?', a: 'Pricing is based on the vehicle type, duration, and distance with complete transparent itemisation.' },
    { q: 'Do you provide buses for school trips?', a: 'Yes, we regularly provide safe transportation for school excursions and student groups.' },
  ];

  const items = faqs && faqs.length ? faqs : defaultFaqs;

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <RevealSection className="svc-section svc-faq">
      <div className="container">
        <div className="svc-section-header svc-section-header--center">
          <span className="svc-section-tag">Got Questions?</span>
          <h2 className="svc-section-title">Frequently Asked Questions</h2>
        </div>
        <div className="svc-faq__list">
          {items.map((item, i) => (
            <div key={i} className={`svc-faq__item ${openIndex === i ? 'svc-faq__item--open' : ''}`}>
              <button
                className="svc-faq__question"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
                type="button"
              >
                <span>{item.q}</span>
                <span className="svc-faq__icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>
              <div className="svc-faq__answer" aria-hidden={openIndex !== i}>
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}

/* -----------------------------------------
   11. FINAL CTA
   ----------------------------------------- */
function ServiceCTA({ service }) {
  const ctaHeading = service.cta?.heading || `Plan Your ${service.title} Booking`;
  const ctaText =
    service.cta?.text ||
    `Get in touch with Matoshri Tours & Travels today. We'll help you choose the right vehicle and plan a comfortable journey.`;

  const whatsappText = encodeURIComponent(`Hi Matoshri Tours & Travels, I want to book ${service.title}`);
  const whatsappLink = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${whatsappText}`;
  const primaryPhone = CALL_NUMBERS[0]?.tel || 'tel:+919511954050';

  return (
    <RevealSection className="svc-cta">
      <div className="container">
        <h2 className="svc-cta__title">{ctaHeading}</h2>
        <p className="svc-cta__text">{ctaText}</p>
        <div className="svc-cta__actions">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="svc-btn svc-btn--whatsapp"
            id="cta-whatsapp-btn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.82 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us
          </a>
          <Link to="/booking" className="svc-btn svc-btn--primary" id="cta-book-now-btn">
            Book Now
          </Link>
          <a href={primaryPhone} className="svc-btn svc-btn--secondary" id="cta-call-now-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call Now
          </a>
        </div>
      </div>
    </RevealSection>
  );
}

/* -----------------------------------------
   MAIN REUSABLE SERVICE DETAIL TEMPLATE
   ----------------------------------------- */
export default function ServicePage({ service }) {
  if (!service) return null;

  return (
    <div className="svc-page">
      {/* 1. Breadcrumb + 2. Hero */}
      <ServiceHero service={service} />

      {/* 3. About the Service */}
      <ServiceAbout service={service} />

      {/* 4. Service Benefits */}
      <ServiceBenefits benefits={service.benefits} />

      {/* 5. Service Information */}
      <ServiceInfo service={service} />

      {/* 6. Featured Vehicle (Single Primary Vehicle) */}
      <FeaturedVehicle service={service} />

      {/* 7. Pricing Information */}
      <ServicePricing pricing={service.pricing} />

      {/* 8. Popular Use Cases */}
      <ServiceUseCases useCases={service.useCases} />

      {/* 9. Why Choose Matoshri */}
      <WhyChooseMatoshri items={service.whyChoose} />

      {/* 10. Frequently Asked Questions */}
      <ServiceFAQ faqs={service.faq || service.faqs} />

      {/* 11. Final CTA */}
      <ServiceCTA service={service} />
    </div>
  );
}
