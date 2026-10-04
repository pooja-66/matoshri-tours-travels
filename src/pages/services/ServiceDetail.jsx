import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getServiceBySlug } from '../../data/servicePages';
import ServicePage from '../../components/ServicePage';
import NotFound from '../NotFound';

const SITE_URL = 'https://www.matoshritravelspune.com';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return <NotFound />;
  }

  const seo = service.seo || {};

  useEffect(() => {
    document.title = seo.title || `${service.title} | Matoshri Tours & Travels`;

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

    ensureMeta('name', 'description', seo.description);
    ensureMeta('property', 'og:title', seo.title);
    ensureMeta('property', 'og:description', seo.description);
    ensureMeta('property', 'og:url', `${SITE_URL}/services/${slug}`);
    ensureMeta('property', 'og:type', 'website');
    ensureMeta('property', 'og:image', '/images/matoshri-logo.png');
    ensureMeta('property', 'og:site_name', 'Matoshri Tours & Travels');

    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', `${SITE_URL}/services/${slug}`);

    let robotsTag = document.querySelector('meta[name="robots"]');
    if (!robotsTag) {
      robotsTag = document.createElement('meta');
      robotsTag.setAttribute('name', 'robots');
      document.head.appendChild(robotsTag);
    }
    robotsTag.setAttribute('content', 'index, follow');
  }, [slug, service, seo]);

  return <ServicePage service={service} />;
}
