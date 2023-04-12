// _mock
import { _testimonials } from '../../../_mock';
//
import TestimonialEcommerce from '../../testimonial/e-commerce';
import {
  EcommerceLandingCategories,
  EcommerceLandingFeaturedBrands,
  EcommerceLandingFeaturedProducts,
  EcommerceLandingHero,
  EcommerceLandingHotDealToday,
  EcommerceLandingPopularProducts,
  EcommerceLandingSpecialOffer,
  EcommerceLandingTopProducts,
} from '../landing';
import { EcommerceHeader } from '../layout';

// ----------------------------------------------------------------------

export default function EcommerceLandingView() {
  return (
    <>
      <EcommerceHeader />

      <EcommerceLandingHero />

      <EcommerceLandingCategories />

      <EcommerceLandingHotDealToday />

      <EcommerceLandingFeaturedProducts />

      <EcommerceLandingSpecialOffer />

      <EcommerceLandingFeaturedBrands />

      <EcommerceLandingPopularProducts />

      <EcommerceLandingTopProducts />

      <TestimonialEcommerce testimonials={_testimonials} />
    </>
  );
}
