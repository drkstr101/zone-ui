// @mui
import {
  Button,
  Container,
  Unstable_Grid2 as Grid,
  Typography,
} from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
// utils
import { bgGradient } from '../../../utils/cssStyles';
// hooks
import useResponsive from '../../../hooks/useResponsive';
// components
import Iconify from '../../../components/iconify';
import Image from '../../../components/image';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.grey[900], 0.8),
    imgUrl: '/assets/background/overlay_2.jpg',
  }),
  padding: theme.spacing(10, 0),
}));

// ----------------------------------------------------------------------

export default function CareerLandingForRecruiters() {
  const isMdUp = useResponsive('up', 'md');

  return (
    <StyledRoot>
      <Container>
        <Grid
          container
          spacing={3}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid
            xs={12}
            md={6}
            lg={5}
            sx={{
              color: 'common.white',
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Typography
              variant="overline"
              sx={{ color: 'primary.main', mb: 2, display: 'block' }}
            >
              FOR RECRUITERS
            </Typography>

            <Typography variant="h2">
              Do You Have A Position To Post Job?{' '}
            </Typography>

            <Typography sx={{ mt: 3, mb: 5, opacity: 0.72 }}>
              Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi.
              Morbi mattis ullamcorper velit.
            </Typography>

            <Button
              variant="contained"
              size="large"
              startIcon={<Iconify icon="carbon:document" />}
            >
              Post a Job
            </Button>
          </Grid>

          {isMdUp && (
            <Grid xs={12} md={6} lg={5}>
              <Image
                alt="recruitment"
                src="/assets/illustrations/illustration_recruitment.svg"
              />
            </Grid>
          )}
        </Grid>
      </Container>
    </StyledRoot>
  );
}
