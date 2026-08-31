import Hero from '../components/Hero';
import FeatureStrip from '../components/FeatureStrip';
import AboutExperience from '../components/AboutExperience';
import ServicesSection from '../components/ServicesSection';
import PromoBanner from '../components/PromoBanner';
import Destinations from '../components/Destinations';

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureStrip />
      <AboutExperience />
      <ServicesSection />
      <PromoBanner />
      <Destinations />
    </>
  );
}