// _mock
import { _blogMarketingPosts, _testimonials } from '../../../_mock';
//
import { BlogMarketingLatestPosts } from '../../blog/marketing';
import NewsletterMarketing from '../../newsletter/marketing';
import TestimonialMarketing from '../../testimonial/marketing';
import { MarketingLandingFreeSEO } from '../landing';
import {
  MarketingServices,
  MarketingServicesBenefits,
  MarketingServicesHero,
  MarketingServicesHowItWork,
  MarketingServicesInclude,
} from '../services';

// ----------------------------------------------------------------------

export default function MarketingServicesView() {
  return (
    <>
      <MarketingServicesHero />

      <MarketingServices />

      <MarketingServicesInclude />

      <MarketingServicesBenefits />

      <MarketingServicesHowItWork />

      <TestimonialMarketing testimonials={_testimonials} />

      <BlogMarketingLatestPosts posts={_blogMarketingPosts.slice(0, 4)} />

      <MarketingLandingFreeSEO />

      <NewsletterMarketing />
    </>
  );
}
