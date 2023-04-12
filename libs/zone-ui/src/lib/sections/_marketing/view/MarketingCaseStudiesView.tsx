// @mui
import { Container, Stack, Typography } from '@mui/material';
// _mock
import {
  _blogMarketingPosts,
  _caseStudies,
  _testimonials,
} from '../../../_mock';
//
import { BlogMarketingLatestPosts } from '../../blog/marketing';
import NewsletterMarketing from '../../newsletter/marketing';
import TestimonialMarketing from '../../testimonial/marketing';
import { MarketingCaseStudyList } from '../case-study/list';
import { MarketingLandingFreeSEO } from '../landing';

// ----------------------------------------------------------------------

export default function MarketingCaseStudiesView() {
  return (
    <>
      <Container>
        <Stack
          spacing={3}
          sx={{
            py: 5,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography variant="h2">Our Case Studies</Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Nullam tincidunt adipiscing enim.
            <br /> Mauris sollicitudin fermentum libero.
          </Typography>
        </Stack>

        <MarketingCaseStudyList caseStudies={_caseStudies} />
      </Container>

      <TestimonialMarketing testimonials={_testimonials} />

      <BlogMarketingLatestPosts posts={_blogMarketingPosts.slice(0, 4)} />

      <MarketingLandingFreeSEO />

      <NewsletterMarketing />
    </>
  );
}
