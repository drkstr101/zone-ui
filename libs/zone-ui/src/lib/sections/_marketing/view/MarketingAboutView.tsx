// _mock
import { _brandsColor, _members, _testimonials } from '../../../_mock';
//
import NewsletterMarketing from '../../newsletter/marketing';
import { OurClientsMarketingAbout } from '../../our-clients/marketing';
import { TeamMarketingAbout } from '../../team/marketing';
import TestimonialMarketing from '../../testimonial/marketing';
import {
  MarketingAbout,
  MarketingAboutCoreValues,
  MarketingAboutOurVision,
  MarketingAboutStory,
} from '../about';
import { MarketingLandingFaqs, MarketingLandingFreeSEO } from '../landing';

// ----------------------------------------------------------------------

export default function MarketingAboutView() {
  return (
    <>
      <MarketingAbout />

      <MarketingAboutOurVision />

      <MarketingAboutCoreValues />

      <MarketingAboutStory />

      <TeamMarketingAbout members={_members} />

      <OurClientsMarketingAbout brands={_brandsColor} />

      <TestimonialMarketing testimonials={_testimonials} />

      <MarketingLandingFaqs />

      <MarketingLandingFreeSEO />

      <NewsletterMarketing />
    </>
  );
}
