import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Button, Container, Stack, Typography } from '@mui/material';
// hooks
import useResponsive from '../../../hooks/useResponsive';
// components
import Iconify from '../../../components/iconify';
import Image from '../../../components/image';
// _mock
import { _tours } from '../../../_mock';
//
import {
  TravelOrderCompletedInfo,
  TravelOrderCompletedSummary,
} from '../order-completed';

// ----------------------------------------------------------------------

const _mockTour = _tours[1];

export default function TravelOrderCompletedView() {
  const isMdUp = useResponsive('up', 'md');

  return (
    <Container
      sx={{
        pt: 5,
        pb: { xs: 8, md: 15 },
        gap: 10,
        display: 'grid',
        alignItems: 'flex-start',
        gridTemplateColumns: { md: 'repeat(2, 1fr)' },
      }}
    >
      {isMdUp && (
        <Image
          alt="cover"
          src={_mockTour.coverImg}
          ratio="3/4"
          sx={{ borderRadius: 2 }}
        />
      )}

      <Stack spacing={5}>
        <Typography variant="h2">Completed 🎉</Typography>

        <TravelOrderCompletedInfo tour={_mockTour} />

        <TravelOrderCompletedSummary />

        <Stack
          spacing={2.5}
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="center"
        >
          <Button
            component={RouterLink}
            to="/"
            variant="outlined"
            size="large"
            color="inherit"
            startIcon={<Iconify icon="carbon:chevron-left" />}
          >
            Back Home
          </Button>

          <Button
            variant="contained"
            size="large"
            color="inherit"
            startIcon={<Iconify icon="carbon:package" />}
          >
            Download Invoice
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
