// _mock
import {
  _blogCoursePosts,
  _brandsColor,
  _members,
  _testimonials,
} from '../../../_mock';
//
import { BlogElearningLatestPosts } from '../../blog/e-learning';
import NewsletterElearning from '../../newsletter/e-learning';
import OurClientsElearning from '../../our-clients/e-learning';
import { TeamElearningAbout } from '../../team/e-learning';
import TestimonialElearning from '../../testimonial/e-learning';
import {
  ElearningAbout,
  ElearningAboutCoreValues,
  ElearningAboutHero,
} from '../about';

// ----------------------------------------------------------------------

export default function ElearningAboutView() {
  return (
    <>
      <ElearningAboutHero />

      <ElearningAbout />

      <ElearningAboutCoreValues />

      <TeamElearningAbout members={_members} />

      <OurClientsElearning brands={_brandsColor} />

      <TestimonialElearning testimonials={_testimonials} />

      <BlogElearningLatestPosts posts={_blogCoursePosts.slice(0, 4)} />

      <NewsletterElearning />
    </>
  );
}
