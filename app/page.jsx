import Hero from '@/components/Hero';
import InfoBoxes from '@/components/InfoBoxes';
import HomePageProperties from '@/components/HomePageProperties';
import FeaturedProperties from '@/components/FeaturedProperties';

function HomePage() {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <FeaturedProperties />
      <HomePageProperties />
    </>
  );
}

export default HomePage;
