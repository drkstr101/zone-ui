// @mui
import { Container, Unstable_Grid2 as Grid } from '@mui/material';
// _mock
import _mock, { _blogMarketingPosts, _categories, _tags } from '../../../_mock';
//
import { PostSearchMobile } from '../../blog/components';
import {
  BlogMarketingFeaturedPosts,
  BlogMarketingPosts,
} from '../../blog/marketing';
import BlogSidebar from '../../blog/sidebar';
import NewsletterMarketing from '../../newsletter/marketing';
import { MarketingLandingFreeSEO } from '../landing';

// ----------------------------------------------------------------------

export default function MarketingBlogView() {
  return (
    <>
      <PostSearchMobile />

      <BlogMarketingFeaturedPosts posts={_blogMarketingPosts.slice(0, 5)} />

      <Container
        sx={{
          mt: 10,
        }}
      >
        <Grid container columnSpacing={{ xs: 0, md: 8 }}>
          <Grid xs={12} md={8}>
            <BlogMarketingPosts posts={_blogMarketingPosts} />
          </Grid>

          <Grid xs={12} md={4}>
            <BlogSidebar
              popularTags={_tags}
              categories={_categories}
              recentPosts={{ list: _blogMarketingPosts.slice(-4) }}
              advertisement={{
                title: 'Advertisement',
                description:
                  'Duis leo. Donec orci lectus, aliquam ut, faucibus non',
                imageUrl: _mock.image.marketing(9),
                path: '',
              }}
            />
          </Grid>
        </Grid>
      </Container>
      <MarketingLandingFreeSEO />

      <NewsletterMarketing />
    </>
  );
}
