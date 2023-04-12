// _mock
import { _pricingHome } from '../../../_mock';
// components
import ScrollProgress from '../../../components/scroll-progress';
//
import PricingHome from '../../pricing/home';
import {
  HomeAdvertisement,
  HomeCombination,
  HomeFAQs,
  HomeFeatureHighlights,
  HomeFlexibleComponents,
  HomeForDesigner,
  HomeHero,
  HomeNewStart,
} from '../components';

// ----------------------------------------------------------------------

export default function HomeView() {
  return (
    <>
      <ScrollProgress />

      <HomeHero />

      <HomeNewStart />

      <HomeFlexibleComponents />

      <HomeFeatureHighlights />

      <HomeForDesigner />

      <PricingHome plans={_pricingHome} />

      <HomeFAQs />

      <HomeCombination />

      <HomeAdvertisement />
    </>
  );
}
