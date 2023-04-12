// @mui
import { Container, Unstable_Grid2 as Grid } from '@mui/material';
// _mock
import _mock, { _blogCoursePosts, _categories, _tags } from '../../../_mock';
//
import { PostSearchMobile } from '../../blog/components';
import {
  BlogElearningFeaturedPost,
  BlogElearningPosts,
} from '../../blog/e-learning';
import BlogSidebar from '../../blog/sidebar';
import NewsletterElearning from '../../newsletter/e-learning';

// ----------------------------------------------------------------------

export default function ElearningBlogView() {
  return (
    <>
      <PostSearchMobile />

      <BlogElearningFeaturedPost post={_blogCoursePosts[4]} />

      <Container
        sx={{
          pt: 10,
        }}
      >
        <Grid container spacing={{ md: 8 }}>
          <Grid xs={12} md={8}>
            <BlogElearningPosts posts={_blogCoursePosts} />
          </Grid>

          <Grid xs={12} md={4}>
            <BlogSidebar
              popularTags={_tags}
              categories={_categories}
              recentPosts={{ list: _blogCoursePosts.slice(-4) }}
              advertisement={{
                title: 'Advertisement',
                description:
                  'Duis leo. Donec orci lectus, aliquam ut, faucibus non',
                imageUrl: _mock.image.course(10),
                path: '',
              }}
            />
          </Grid>
        </Grid>
      </Container>
      <NewsletterElearning />
    </>
  );
}
