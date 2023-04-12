import { m } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Box, Button, Container, Stack, Typography } from '@mui/material';
// routes
import { paths } from '../../../routes/paths';
// components
import { MotionContainer, varBounce } from '../../../components/animate';
import Iconify from '../../../components/iconify';
//
import { EcommerceHeader } from '../layout';

// ----------------------------------------------------------------------

export default function EcommerceOrderCompletedView() {
  return (
    <>
      <EcommerceHeader />

      <Container
        component={MotionContainer}
        sx={{
          textAlign: 'center',
          pt: { xs: 5, md: 10 },
          pb: { xs: 10, md: 20 },
        }}
      >
        <m.div variants={varBounce().in}>
          <Box sx={{ fontSize: 128 }}>🎉</Box>
        </m.div>

        <Stack spacing={1} sx={{ my: 5 }}>
          <Typography variant="h3">Your order is complete!</Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            You will be receiving a confirmation email with order details.
          </Typography>
        </Stack>

        <Button
          component={RouterLink}
          to={paths.eCommerce.products}
          size="large"
          color="inherit"
          variant="contained"
          startIcon={<Iconify icon="carbon:chevron-left" />}
        >
          Continue Shopping
        </Button>
      </Container>
    </>
  );
}
