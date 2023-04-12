// _mock
import {
  _blogCoursePosts,
  _brandsColor,
  _courses,
  _coursesByCategories,
  _members,
  _testimonials,
} from '../../../_mock';
//
import { BlogElearningLatestPosts } from '../../blog/e-learning';
import DownloadAppElearning from '../../download-app/e-learning';
import NewsletterElearning from '../../newsletter/e-learning';
import OurClientsElearning from '../../our-clients/e-learning';
import TeamElearning from '../../team/e-learning';
import TestimonialElearning from '../../testimonial/e-learning';
import {
  ElearningLandingCategories,
  ElearningLandingFeaturedCourses,
  ElearningLandingHero,
  ElearningLandingIntroduce,
} from '../landing';

// ----------------------------------------------------------------------

export default function ElearningLandingView() {
  return (
    <>
      <ElearningLandingHero />

      <OurClientsElearning brands={_brandsColor} />

      <ElearningLandingIntroduce />

      <ElearningLandingFeaturedCourses courses={_courses} />

      <ElearningLandingCategories categories={_coursesByCategories} />

      <TeamElearning members={_members.slice(0, 4)} />

      <TestimonialElearning testimonials={_testimonials} />

      <BlogElearningLatestPosts posts={_blogCoursePosts.slice(0, 4)} />

      <DownloadAppElearning />

      <NewsletterElearning />
    </>
  );
}
