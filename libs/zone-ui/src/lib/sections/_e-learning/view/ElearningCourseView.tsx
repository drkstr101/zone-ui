import { useEffect, useState } from 'react';
// @mui
import {
  Button,
  Container,
  Divider,
  Unstable_Grid2 as Grid,
  Stack,
  Typography,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
// hooks
import useResponsive from '../../../hooks/useResponsive';
// _mock
import _mock, { _courses, _socials } from '../../../_mock';
// components
import Iconify from '../../../components/iconify';
import LoadingScreen from '../../../components/loading-screen';
//
import Advertisement from '../../advertisement';
import NewsletterElearning from '../../newsletter/e-learning';
import ReviewElearning from '../../review/e-learning';
import {
  ElearningCourseDetailsHero,
  ElearningCourseDetailsInfo,
  ElearningCourseDetailsSummary,
  ElearningCourseDetailsTeachersInfo,
} from '../course/details';
import { ElearningCourseListSimilar } from '../course/list';

// ----------------------------------------------------------------------

const _mockCourse = _courses[0];

export default function ElearningCourseView() {
  const isMdUp = useResponsive('up', 'md');

  const [loading, setLoading] = useState(true);

  const courseSimilar = _courses.slice(-3);

  useEffect(() => {
    const fakeLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setLoading(false);
    };
    fakeLoading();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <ElearningCourseDetailsHero course={_mockCourse} />

      <Container
        sx={{
          overflow: 'hidden',
          pt: { xs: 5, md: 10 },
          pb: { xs: 15, md: 10 },
        }}
      >
        <Grid container spacing={{ xs: 5, md: 8 }}>
          {!isMdUp && (
            <Grid xs={12}>
              <ElearningCourseDetailsInfo course={_mockCourse} />
            </Grid>
          )}

          <Grid xs={12} md={7} lg={8}>
            <ElearningCourseDetailsSummary course={_mockCourse} />

            <Stack direction="row" flexWrap="wrap" sx={{ mt: 5 }}>
              <Typography variant="subtitle2" sx={{ mt: 0.75, mr: 1.5 }}>
                Share:
              </Typography>

              <Stack direction="row" alignItems="center" flexWrap="wrap">
                {_socials.map((social) => (
                  <Button
                    key={social.value}
                    size="small"
                    variant="outlined"
                    startIcon={<Iconify icon={social.icon} />}
                    sx={{
                      m: 0.5,
                      flexShrink: 0,
                      color: social.color,
                      borderColor: social.color,
                      '&:hover': {
                        borderColor: social.color,
                        bgcolor: alpha(social.color, 0.08),
                      },
                    }}
                  >
                    {social.label}
                  </Button>
                ))}
              </Stack>
            </Stack>

            <Divider sx={{ my: 5 }} />

            <ElearningCourseDetailsTeachersInfo
              teachers={_mockCourse.teachers}
            />
          </Grid>

          <Grid xs={12} md={5} lg={4}>
            <Stack spacing={5}>
              {isMdUp && <ElearningCourseDetailsInfo course={_mockCourse} />}

              <Advertisement
                advertisement={{
                  title: 'Advertisement',
                  description:
                    'Duis leo. Donec orci lectus, aliquam ut, faucibus non',
                  imageUrl: _mock.image.course(7),
                  path: '',
                }}
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>

      {isMdUp && <Divider />}

      <ReviewElearning />

      <ElearningCourseListSimilar courses={courseSimilar} />

      <NewsletterElearning />
    </>
  );
}
