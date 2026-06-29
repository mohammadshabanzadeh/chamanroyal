import HeroSection from '../components/sections/HeroSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import ProductsSection from '../components/sections/ProductsSection';
import StatsSection from '../components/sections/StatsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CtaSection from '../components/sections/CtaSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <ProductsSection featured />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
};

export default Home;
