import Hero from '../components/Hero';
import FeatureStrip from '../components/FeatureStrip';
import AboutExperience from '../components/AboutExperience';
import ServicesSection from '../components/ServicesSection';
import PromoBanner from '../components/PromoBanner';
import Destinations from '../components/Destinations';
import SEO, { SITE_SEO } from '../components/SEO';

export default function Home() {
  return (
    <>
      <SEO {...SITE_SEO.home} />
      <Hero />
      <FeatureStrip />
      <AboutExperience />
      <ServicesSection />
      <PromoBanner />
      <Destinations />
    </>
  );
}
