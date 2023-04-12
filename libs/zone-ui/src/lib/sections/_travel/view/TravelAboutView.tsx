// _mock
import {
  _blogTravelPosts,
  _brands,
  _members,
  _testimonials,
} from '../../../_mock';
//
import { BlogTravelLatestPosts } from '../../blog/travel';
import NewsletterTravel from '../../newsletter/travel';
import OurClientsTravel from '../../our-clients/travel';
import TeamTravel from '../../team/travel';
import TestimonialTravel from '../../testimonial/travel';
import { TravelAbout, TravelAboutOurMission } from '../about';

// ----------------------------------------------------------------------

export default function TravelAboutView() {
  return (
    <>
      <TravelAbout />

      <TravelAboutOurMission />

      <TeamTravel members={_members} />

      <TestimonialTravel testimonials={_testimonials} />

      <OurClientsTravel brands={_brands} />

      <BlogTravelLatestPosts posts={_blogTravelPosts.slice(0, 4)} />

      <NewsletterTravel />
    </>
  );
}
