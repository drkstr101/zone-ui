import { m } from 'framer-motion';
// @mui
import { Button, Typography } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
// utils
import { bgGradient } from '../../../utils/cssStyles';
// routes
import { paths } from '../../../routes/paths';
// components
import { MotionViewport, varFade } from '../../../components/animate';
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.grey[900], 0.8),
    imgUrl: '/assets/images/home/for_designer.jpg',
  }),
  textAlign: 'center',
  color: theme.palette.common.white,
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

export default function HomeForDesigner() {
  return (
    <MotionViewport>
      <StyledRoot>
        <m.div variants={varFade({ distance: 40 }).inUp}>
          <Typography variant="overline" sx={{ opacity: 0.48 }}>
            Professional Kit
          </Typography>
        </m.div>

        <m.div variants={varFade({ distance: 40 }).inUp}>
          <Typography variant="h2" sx={{ mt: 2, mb: 5 }}>
            For Designer
          </Typography>
        </m.div>

        <m.div variants={varFade({ distance: 40 }).inUp}>
          <Button
            size="large"
            variant="contained"
            endIcon={<Iconify icon="carbon:launch" />}
            target="_blank"
            rel="noopener"
            href={paths.figmaPreview}
          >
            figma workspace
          </Button>
        </m.div>
      </StyledRoot>
    </MotionViewport>
  );
}
