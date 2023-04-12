// _mock
import {
  _blogMarketingPosts,
  _brands,
  _caseStudies,
  _members,
  _pricingMarketing,
  _testimonials,
} from '../../../_mock';
//
import { BlogMarketingLatestPosts } from '../../blog/marketing';
import NewsletterMarketing from '../../newsletter/marketing';
import OurClientsMarketing from '../../our-clients/marketing';
import PricingMarketing from '../../pricing/marketing';
import TeamMarketing from '../../team/marketing';
import TestimonialMarketing from '../../testimonial/marketing';
import {
  MarketingLandingAbout,
  MarketingLandingCaseStudies,
  MarketingLandingFaqs,
  MarketingLandingFreeSEO,
  MarketingLandingHero,
  MarketingLandingProcess,
  MarketingLandingServices,
} from '../landing';

// ----------------------------------------------------------------------

export default function MarketingLandingPage() {
  return (
    <>
      <MarketingLandingHero />

      <OurClientsMarketing brands={_brands} />

      <MarketingLandingAbout />

      <MarketingLandingServices />

      <MarketingLandingProcess />

      <MarketingLandingCaseStudies caseStudies={_caseStudies.slice(-6)} />

      <TeamMarketing members={_members} />

      <PricingMarketing plans={_pricingMarketing} />

      <MarketingLandingFaqs />

      <TestimonialMarketing testimonials={_testimonials} />

      <BlogMarketingLatestPosts posts={_blogMarketingPosts.slice(0, 4)} />

      <MarketingLandingFreeSEO />

      <NewsletterMarketing />
    </>
  );
}
