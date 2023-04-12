// _mock
import {
  _blogCareerPosts,
  _brandsColor,
  _jobs,
  _jobsByCategories,
  _jobsByCompanies,
  _jobsByCountries,
  _testimonials,
} from '../../../_mock';
//
import { BlogCareerLatestPosts } from '../../blog/career';
import DownloadAppCareer from '../../download-app/career';
import NewsletterCareer from '../../newsletter/career';
import OurClientsCareer from '../../our-clients/career';
import TestimonialCareer from '../../testimonial/career';
import {
  CareerLandingConnections,
  CareerLandingFeaturedJobs,
  CareerLandingForRecruiters,
  CareerLandingHero,
  CareerLandingHotCategories,
  CareerLandingStep,
  CareerLandingTopCompanies,
} from '../landing';

// ----------------------------------------------------------------------

export default function CareerLandingView() {
  return (
    <>
      <CareerLandingHero />

      <CareerLandingStep />

      <CareerLandingFeaturedJobs jobs={_jobs.slice(-6)} />

      <CareerLandingTopCompanies companies={_jobsByCompanies} />

      <CareerLandingHotCategories categories={_jobsByCategories} />

      <CareerLandingConnections countries={_jobsByCountries} />

      <CareerLandingForRecruiters />

      <TestimonialCareer testimonials={_testimonials} />

      <OurClientsCareer brands={_brandsColor} />

      <BlogCareerLatestPosts posts={_blogCareerPosts.slice(0, 5)} />

      <DownloadAppCareer />

      <NewsletterCareer />
    </>
  );
}
