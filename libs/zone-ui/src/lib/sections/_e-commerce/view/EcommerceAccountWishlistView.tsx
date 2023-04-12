import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Box, Button, Stack, Typography } from '@mui/material';
// routes
import { paths } from '../../../routes/paths';
// _mock
import { _products } from '../../../_mock';
// components
import Iconify from '../../../components/iconify';
//
import { EcommerceCartList } from '../cart';
import { EcommerceAccountLayout } from '../layout';

// ----------------------------------------------------------------------

export default function EcommerceAccountWishlistView() {
  return (
    <EcommerceAccountLayout>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Wishlist
      </Typography>

      <EcommerceCartList wishlist products={_products.slice(0, 4)} />

      <Stack alignItems={{ sm: 'flex-end' }} sx={{ mt: 3 }}>
        <Stack spacing={3} sx={{ minWidth: 240 }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ typography: 'h6' }}
          >
            <Box component="span"> Subtotal</Box>
            $58.07
          </Stack>

          <Button
            component={RouterLink}
            to={paths.eCommerce.cart}
            size="large"
            color="inherit"
            variant="contained"
            startIcon={<Iconify icon="carbon:shopping-cart-plus" />}
          >
            Add to Cart
          </Button>
        </Stack>
      </Stack>
    </EcommerceAccountLayout>
  );
}
