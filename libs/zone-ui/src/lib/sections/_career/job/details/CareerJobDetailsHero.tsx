import { useState } from 'react';
// @mui
import {
  Box,
  Button,
  Checkbox,
  Container,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
// routes
import { paths } from '../../../../routes/paths';
// utils
import { bgGradient } from '../../../../utils/cssStyles';
import { fDate } from '../../../../utils/formatTime';
// types
import { IJobProps } from '../../../../types/job';
// components
import CustomBreadcrumbs from '../../../../components/custom-breadcrumbs';
import Iconify from '../../../../components/iconify';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(10),
  ...bgGradient({
    color: alpha(theme.palette.grey[900], 0.8),
    imgUrl: '/assets/background/overlay_2.jpg',
  }),
}));

// ----------------------------------------------------------------------

type Props = {
  job: IJobProps;
};

export default function CareerJobDetailsHero({ job }: Props) {
  const { slug, category, views, location, deadline, favorited } = job;

  const [favorite, setFavorite] = useState(favorited);

  const handleChangeFavorite = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFavorite(event.target.checked);
  };

  return (
    <StyledRoot>
      <Container>
        <CustomBreadcrumbs
          links={[
            { name: 'Home', href: '/' },
            { name: 'Jobs', href: paths.career.jobs },
            { name: job.slug },
          ]}
          sx={{
            mb: { xs: 5, md: 8 },
            '& a': {
              color: 'common.white',
            },
          }}
        />

        <Stack
          spacing={5}
          direction={{ xs: 'column', md: 'row' }}
          justifyContent={{ md: 'space-between' }}
        >
          <Stack spacing={{ xs: 3, md: 2 }} sx={{ color: 'common.white' }}>
            <Typography variant="h3" component="h1">
              {slug}
            </Typography>

            <Stack
              spacing={3}
              direction={{ xs: 'column', md: 'row' }}
              sx={{ opacity: 0.48 }}
            >
              <Stack
                direction="row"
                alignItems="center"
                sx={{ typography: 'body2' }}
              >
                <Iconify icon="carbon:baggage-claim" sx={{ mr: 1 }} />
                <Link color="inherit" underline="always">
                  {category}
                </Link>
              </Stack>

              <Stack
                direction="row"
                alignItems="center"
                sx={{ typography: 'body2' }}
              >
                <Iconify icon="carbon:view" sx={{ mr: 1 }} /> {`${views} views`}
              </Stack>

              <Stack
                direction="row"
                alignItems="center"
                sx={{ typography: 'body2' }}
              >
                <Iconify icon="carbon:location" sx={{ mr: 1 }} /> {location}
              </Stack>
            </Stack>
          </Stack>

          <Stack
            spacing={2}
            direction="row"
            alignItems="flex-start"
            sx={{ width: 1, maxWidth: 340 }}
          >
            <Stack spacing={2} alignItems="center" sx={{ width: 1 }}>
              <Button fullWidth variant="contained" size="large">
                Apply Now
              </Button>

              <Typography variant="body2" sx={{ color: 'common.white' }}>
                {`Expiration date: `}
                <Box component="span" sx={{ color: 'primary.main' }}>
                  {fDate(deadline)}
                </Box>
              </Typography>
            </Stack>

            <Box sx={{ pt: 0.75 }}>
              <Checkbox
                color="error"
                checked={favorite}
                onChange={handleChangeFavorite}
                icon={<Iconify icon="carbon:favorite" width={24} />}
                checkedIcon={
                  <Iconify icon="carbon:favorite-filled" width={24} />
                }
              />
            </Box>
          </Stack>
        </Stack>
      </Container>
    </StyledRoot>
  );
}
