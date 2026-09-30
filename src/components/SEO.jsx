import { useEffect } from 'react';

const SITE_URL = 'https://www.matoshritravelspune.com';
const SITE_NAME = 'Matoshri Tours & Travels';
const OG_IMAGE = '/images/matoshri-logo.png';

const SEO = ({
  title,
  description,
  canonical,
  ogImage = OG_IMAGE,
  ogType = 'website',
  noIndex = false,
}) => {
  useEffect(() => {
    if (typeof document === 'undefined') return;

    document.title = title;

    const ensureMeta = (selector, attr, content) => {
      if (!content) return;
      let tag = document.querySelector(`meta[${selector}="${attr}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(selector, attr);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    ensureMeta('name', 'description', description);
    ensureMeta('property', 'og:title', title);
    ensureMeta('property', 'og:description', description);
    ensureMeta('property', 'og:url', canonical);
    ensureMeta('property', 'og:type', ogType);
    ensureMeta('property', 'og:image', ogImage);
    ensureMeta('property', 'og:site_name', SITE_NAME);

    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', canonical);

    let robotsTag = document.querySelector('meta[name="robots"]');
    if (!robotsTag) {
      robotsTag = document.createElement('meta');
      robotsTag.setAttribute('name', 'robots');
      document.head.appendChild(robotsTag);
    }
    robotsTag.setAttribute('content', noIndex ? 'noindex, nofollow' : 'index, follow');
  }, [title, description, canonical, ogImage, ogType, noIndex]);

  return null;
};

export const SITE_SEO = {
  home: {
    title: 'Matoshri Tours & Travels | Tours, Travel & Vehicle Rental in Pune',
    description:
      'Matoshri Tours & Travels offers reliable tours, travel and vehicle rental services in Pune and across Maharashtra. Explore our vehicles, destinations and travel services.',
    canonical: `${SITE_URL}/`,
  },
  about: {
    title: 'About Us | Matoshri Tours & Travels Pune',
    description:
      'Learn about Matoshri Tours & Travels, a Pune-based travel and transportation service offering comfortable vehicles, tours and travel services.',
    canonical: `${SITE_URL}/about`,
  },
  services: {
    title: 'Our Services | Matoshri Tours & Travels Pune',
    description:
      'From Force Urbania rentals and airport transfers to outstation travel and corporate transport, Matoshri Tours & Travels provides complete travel solutions in Pune.',
    canonical: `${SITE_URL}/services`,
  },
  fleet: {
    title: 'Our Fleet | Matoshri Tours & Travels Pune',
    description:
      'Explore the Matoshri Tours & Travels fleet, including premium Force Urbania and Tempo Traveller vehicles maintained for comfort, safety and group travel.',
    canonical: `${SITE_URL}/fleet`,
  },
  packages: {
    title: 'Tour Packages | Matoshri Tours & Travels Pune',
    description:
      'Browse Matoshri Tours & Travels packages for Mahabaleshwar, Lonavala, Shirdi and Konkan, with AC vehicle transport, hotel stays and guided sightseeing.',
    canonical: `${SITE_URL}/packages`,
  },
  puneToMahabaleshwar: {
    title: 'Pune to Mahabaleshwar Taxi | Matoshri Tours & Travels',
    description:
      'Book comfortable Pune to Mahabaleshwar cabs with Matoshri Tours & Travels. One-way and round-trip options available with experienced drivers.',
    canonical: `${SITE_URL}/pune-to-mahabaleshwar`,
  },
  booking: {
    title: 'Online Booking | Matoshri Tours & Travels Pune',
    description:
      'Book your preferred vehicle online with Matoshri Tours & Travels. Choose from our fleet and confirm your Pune travel or outstation booking instantly.',
    canonical: `${SITE_URL}/booking`,
  },
  gallery: {
    title: 'Gallery | Matoshri Tours & Travels Pune',
    description:
      'View the Matoshri Tours & Travels gallery featuring our fleet, customer trips and travel moments across Maharashtra destinations.',
    canonical: `${SITE_URL}/gallery`,
  },
  contact: {
    title: 'Contact Us | Matoshri Tours & Travels Pune',
    description:
      'Contact Matoshri Tours & Travels in Pune for bookings, vehicle rentals and travel enquiries. Call, WhatsApp or visit our office for assistance.',
    canonical: `${SITE_URL}/contact`,
  },
  notFound: {
    title: 'Page Not Found | Matoshri Tours & Travels Pune',
    description:
      'The page you are looking for does not exist. Return to Matoshri Tours & Travels to explore our vehicles, packages and travel services.',
    canonical: `${SITE_URL}/`,
    noIndex: true,
  },
};

export default SEO;
