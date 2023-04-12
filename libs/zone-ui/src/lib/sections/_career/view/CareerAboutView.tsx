// @mui
import { Divider } from '@mui/material';
// _mock
import {
  _blogCareerPosts,
  _brandsColor,
  _members,
  _testimonials,
} from '../../../_mock';
//
import { BlogCareerLatestPosts } from '../../blog/career';
import NewsletterCareer from '../../newsletter/career';
import OurClientsCareer from '../../our-clients/career';
import TeamCareer from '../../team/career';
import TestimonialCareer from '../../testimonial/career';
import { CareerAbout, CareerAboutOurVision } from '../about';

// ----------------------------------------------------------------------

export default function CareerAboutView() {
  return (
    <>
      <CareerAbout />

      <CareerAboutOurVision />

      <Divider
        orientation="vertical"
        sx={{ height: 80, width: 2, mx: 'auto' }}
      />

      <TeamCareer members={_members} />

      <TestimonialCareer testimonials={_testimonials} />

      <OurClientsCareer brands={_brandsColor} />

      <BlogCareerLatestPosts posts={_blogCareerPosts.slice(0, 5)} />

      <NewsletterCareer />
    </>
  );
}
